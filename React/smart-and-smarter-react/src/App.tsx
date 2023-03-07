import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import WeaponTable from './Components/WeaponTable';
import Temptop from './Components/Temptop';
import Itembox from './Components/ItemBox'
import SelectionBox from './Components/SelectionBox';
import Testingbutton from './Components/Testingbutton';
import { ApiCalls, ArmorList, WeaponList } from './Components/PureTSX/ApiCalls';


//TODO: Foundation is layed for GearPopUp. Pass it the proper lists as props and use them.

function App() {
  const devMode = true;

  
  const api = new ApiCalls();

  //set loading false until api calls finish, set weapon list in api calls to hold list of weapons
  const [isArmorLoading, setArmorLoading] = useState(true);
  const [armorList, setArmorList] = useState<ArmorList>();

  
  //set loading false until api calls finish, set weapon list in api calls to hold list of weapons
  const [isWeaponLoading, setWeaponLoading] = useState(true);
  const [weaponList, setWeaponList] = useState<WeaponList>();

    //api calls
    useEffect(() => {
      //if devMode (possibly no db) use hard data
      if(devMode)
      {

          setArmorList(api.GetAllArmorsNoDB());
          setArmorLoading(false);
          setWeaponList(api.GetAllWeaponsNoDB());
          setWeaponLoading(false);
      }
      //call db
      else
      {
          //get all armors
          var call = api.GetAllArmors();
          call.then((response) => {
            if(devMode) console.log(response.data);
            setArmorList(response.data);
            setArmorLoading(false);
          })
          .catch((response) =>
          {
            console.log(response);
          })

          //get all weapons    
          call = api.GetAllWeapons();
          call.then((response) => {
            if(devMode) console.log(response.data);
            setWeaponList(response.data);
            setWeaponLoading(false);
          })
          .catch((response) =>
          {
            console.log(response);
          })


      }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        
        {!isWeaponLoading && !isArmorLoading ? <SelectionBox armorList={armorList} weaponList={weaponList}/> : null}
        <Temptop/>
        {!isArmorLoading ? <WeaponTable weaponList={weaponList}/> : null }
        
      </header>
    </div>
  );
  
}

export default App;
