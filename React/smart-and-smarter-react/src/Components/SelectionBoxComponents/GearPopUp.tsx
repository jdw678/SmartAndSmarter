import React, { useState } from 'react';
import { Armor, ArmorList, ArmorType, ItemClass, SpecificWeaponType, Weapon, WeaponList, WeaponType } from '../PureTSX/WeaponAndArmorTypes';
import '../../CSS/GearPopUp.css';
import GearPopUpItem from './GearPopUpItem';
import GearPopUpCondensedItem from './GearPopUpCondensedItem';

//data expected
//possibly null if item has not been set yet, but returnData must always be not null
export type GearPopUpData = {
    itemClass: ItemClass,
    item?: Armor | Weapon,
    armorType?: ArmorType,
    returnData: (data?: GearPopUpData) => void
}


type Props = {
    data: GearPopUpData,
    togglePopUp: (state: boolean) => void,
    weaponList: WeaponList,
    armorList: ArmorList
}

export default function GearPopUp(props: Props) {

  
  //check if weapon is of specific weapon type passed
  function isWeaponType(weapon: Weapon, type: SpecificWeaponType)
  {
    if(weapon.specificWeaponType === type) return weapon;
  }

  //create meleeprop obj based on string passed and specific weapon type passed
  function CreateMeleeProp(name: string, type: SpecificWeaponType)
  {
    return(
    {
      name: name,
      itemList: props.weaponList.meleeWeapons.filter(weapon => isWeaponType(weapon, type)),
      returnData: props.data.returnData,
      itemClass: props.data.itemClass
    })
  }

  //create array of meleeprop objs to be passed to the condenseditem for melee weapons
  const meleeProps =
  [
    CreateMeleeProp('Axes', SpecificWeaponType.Axe),
    CreateMeleeProp('Maces', SpecificWeaponType.Mace),
    CreateMeleeProp('Daggers', SpecificWeaponType.Dagger),
    CreateMeleeProp('Swords', SpecificWeaponType.Sword),
    CreateMeleeProp('Polearms', SpecificWeaponType.Polearm),
    
  ]

  function ReturnDataAndClose(data?: GearPopUpData)
  {
    props.data.returnData(data);
    props.togglePopUp(false);

  }

  return (
    <div className='Background'>
        <div className='MainContainer'>
          {props.data.itemClass == ItemClass.Weapon ? 
          <>
            <div className='GearDropDownContainer'>
              <h1 className='GearDropDownHeader GearFont' onClick={() => ReturnDataAndClose()}>None</h1>
            </div>
            <GearPopUpCondensedItem itemClass={props.data.itemClass} returnData={ReturnDataAndClose} name='Bows' itemList={props.weaponList.bows}/>
            <GearPopUpCondensedItem itemClass={props.data.itemClass} returnData={ReturnDataAndClose} name='Shields' itemList={props.weaponList.shields}/>
            <GearPopUpCondensedItem itemClass={props.data.itemClass} returnData={ReturnDataAndClose} name='Melee Weapons' children={meleeProps}/>
            <GearPopUpCondensedItem itemClass={props.data.itemClass} returnData={ReturnDataAndClose} name='Magic Weapons' itemList={props.weaponList.magicWeapons}/>
          </>
          :
          <ul>
            <li className='GearLI GearFont' onClick={() => ReturnDataAndClose()}>None</li>
            {props.armorList.filter(armor => armor.armorType == props.data.armorType).map(armor =>
              {
                return(
                  <GearPopUpItem itemClass={ItemClass.Armor} item={armor} returnData={ReturnDataAndClose}/>
                )
              })
            }
          </ul>
          }
        </div>
    </div>
  )
}