import { useEffect, useState } from 'react';
import './App.css';
import Temptop from './Components/Temptop';
import SelectionBox from './Components/SelectionBox';
import { ApiCalls} from './Components/PureTSX/ApiCalls';
import CompleteTable from './Components/CompleteTable';
import { Armor, ArmorList, Weapon, WeaponList, WeaponType } from './Components/PureTSX/WeaponAndArmorTypes';
import React from 'react';
import HomePage from './Components/HomePage';



export const WikiUrl = "https://darkanddarker.wiki.spellsandguns.com/";

function App() {
  const devMode = true;
  const debug = true;

  
  const api = new ApiCalls();

  //set loading false until api calls finish, set weapon list in api calls to hold list of weapons
  const [isArmorLoading, setArmorLoading] = useState(true);
  const [armorList, setArmorList] = useState<ArmorList>();


  
  //set loading false until api calls finish, set weapon list in api calls to hold list of weapons
  const [isWeaponLoading, setWeaponLoading] = useState(true);
  const [weaponList, setWeaponList] = useState<Weapon[]>();

  const [weaponListParsed, setWeaponListParsed] = useState<WeaponList>();

    //api calls
    useEffect(() => {
      //if devMode (possibly no db) use hard data
      if(devMode)
      {

          setArmorList(api.GetAllArmorsNoDB());
          setArmorLoading(false);
          parseAndSetWeaponList(api.GetAllWeaponsNoDB());
          setWeaponLoading(false);
      }
      //call db
      else
      {
          //get all armors
          var call = api.GetAllArmors();
          call.then((response) => {
            if(debug) console.log(response.data);
            setArmorList(response.data);
            setArmorLoading(false);
          })
          .catch((response) =>
          {
            console.log(response);
          })

          //get all weapons    
          var weaponsCall = api.GetAllWeapons();
          weaponsCall.then((response) => {
            if(debug) console.log(response);
            parseAndSetWeaponList(response.data);
            setWeaponList(response.data);
            setWeaponLoading(false);
          })
          .catch((response) =>
          {
            console.log(response);
          })


      }
  }, [])

  function parseAndSetWeaponList(weaponList: Weapon[])
  {
    var weaponListParsed: WeaponList = {
      meleeWeapons: [],
      magicWeapons: [],
      bows: [],
      shields: []
    };
    
    weaponList.forEach((weapon: Weapon) =>
    {
      if(weapon.weaponType === WeaponType.Melee) weaponListParsed.meleeWeapons.push(weapon);
      if(weapon.weaponType === WeaponType.Magic) weaponListParsed.magicWeapons.push(weapon);
      if(weapon.weaponType === WeaponType.Bow) weaponListParsed.bows.push(weapon);
      if(weapon.weaponType === WeaponType.Shield) weaponListParsed.shields.push(weapon);
      
    })
    
    setWeaponListParsed(weaponListParsed);
  }


  var toggle = true;

  return (
    <>
    {
      toggle ?
      <div className="App">
        
        {!isWeaponLoading && !isArmorLoading && weaponListParsed && armorList ? <SelectionBox armorList={armorList} weaponList={weaponListParsed}/> : null}
        <Temptop/>
        {(!isWeaponLoading && weaponListParsed) ? <CompleteTable weaponList={weaponListParsed}/> : null }
        
    </div>
    : <HomePage />
    }

    </>
  );
  
}

export default App;
