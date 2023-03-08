import { useEffect, useState } from 'react';
import './App.css';
import Temptop from './Components/Temptop';
import SelectionBox from './Components/SelectionBox';
import { ApiCalls} from './Components/PureTSX/ApiCalls';
import CompleteTable from './Components/CompleteTable';
import { ArmorList, WeaponList } from './Components/PureTSX/WeaponAndArmorTypes';



export const WikiUrl = "https://darkanddarker.wiki.spellsandguns.com/";

function App() {
  const devMode = false;
  const debug = true;

  
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
            setWeaponList(response);
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
        {(!isWeaponLoading && weaponList) ? <CompleteTable weaponList={weaponList}/> : null }
        
      </header>
    </div>
  );
  
}

export default App;
