import React from 'react';
import { Armor, ArmorList, ArmorType, ItemClass, Weapon, WeaponList, WeaponType } from '../PureTSX/ApiCalls';
import '../../CSS/GearPopUp.css';

//data expected
export type GearPopUpData = {
    itemClass: ItemClass,
    itemType: ArmorType | WeaponType,
    item?: Weapon | Armor,
    returnData: (data: GearPopUpData) => void,
}


type Props = {
    data: GearPopUpData,
    togglePopUp: (state: boolean) => void,
    weaponList?: WeaponList,
    armorList?: ArmorList
}

export default function GearPopUp(props: Props) {

  if(props.data.itemType == null) console.log("Error displaying gear data. GearType not passed.");

  var weaponList: [Weapon];
  var armorList: [Armor];

  if(props.data.itemClass == ItemClass.Weapon)
  {
    if(props.weaponList == null)
    {
      console.log("Weapons list was empty.");
    }
  }

  return (
    <div className='Background' onClick={() => props.togglePopUp(false)}>
        <div className='MainContainer'>
            <ul>
            </ul>
        </div>
    </div>
  )
}