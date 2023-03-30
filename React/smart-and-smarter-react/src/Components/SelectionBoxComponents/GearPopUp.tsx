import React, { useState } from 'react';
import { Armor, ArmorList, ArmorType, ItemClass, Rarity, SpecificWeaponType, UserItem, Weapon, WeaponList, WeaponType } from '../PureTSX/WeaponAndArmorTypes';
import '../../CSS/GearPopUp.css';
import GearPopUpItem from './GearPopUpItem';
import GearPopUpCondensedItem from './GearPopUpCondensedItem';
import ItemEditor from './ItemEditor';

//data expected
//possibly null if item has not been set yet, but returnData must always be not null
export type GearPopUpData = {
    itemClass: ItemClass,
    item?: UserItem,
    armorType?: ArmorType,
    itemSlot: string,
    returnData: (item?: UserItem) => void
}



type Props = {
    data: GearPopUpData,
    togglePopUp: (state: boolean) => void,
    weaponList: WeaponList,
    armorList: ArmorList
}

export default function GearPopUp(props: Props) {

  const [userItem, setUserItem] = useState<UserItem>();

  const [hoverable, setHoverable] = useState<React.CSSProperties>({display:'inherit'});

  if(props.data.item && !userItem)
  {
    setUserItem(props.data.item);
  }
  
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
      returnItem: setItem,
      style: hoverable,
      itemClass: props.data.itemClass
    })
  }

  function setItem(item: Armor | Weapon)
  {
    setUserItem({
      item: item,
      attributes: userItem?.attributes ? userItem.attributes : [],
      damage: userItem?.damage ? userItem.damage : 0,
      rarity: userItem?.rarity ? userItem.rarity : Rarity.Black
    });
    setHoverable({display:'none'});
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

  function ReturnDataAndClose(item?: UserItem)
  {
    props.data.returnData(item);
    props.togglePopUp(false);

  }

  

  return (
    <div className='Background'>
      <div className='MainContainer'>
        <div className='ListContainer' onMouseEnter={() => setHoverable({display:'inherit'})}>
          
          {//this is the drop down list of items
          props.data.itemClass == ItemClass.Weapon ? 
          <>
            <div className='GearDropDownContainer'>
              <h1 className='GearDropDownHeader GearFont' onClick={() => { ReturnDataAndClose() }}>None</h1>
            </div>
            <GearPopUpCondensedItem itemClass={props.data.itemClass} returnItem={setItem} name='Bows' itemList={props.weaponList.bows} style={hoverable}/>
            <GearPopUpCondensedItem itemClass={props.data.itemClass} returnItem={setItem} name='Shields' itemList={props.weaponList.shields} style={hoverable}/>
            <GearPopUpCondensedItem itemClass={props.data.itemClass} returnItem={setItem} name='Melee Weapons' children={meleeProps} style={hoverable}/>
            <GearPopUpCondensedItem itemClass={props.data.itemClass} returnItem={setItem} name='Magic Weapons' itemList={props.weaponList.magicWeapons} style={hoverable}/>
          </>
          :
          <ul>
            <li className='GearLI GearFont' onClick={() => { ReturnDataAndClose() }}>None</li>
            {props.armorList.filter(armor => armor.armorType == props.data.armorType).map(armor =>
              {
                return(
                  <GearPopUpItem itemClass={ItemClass.Armor} item={armor} returnItem={setItem} style={hoverable}/>
                )
              })
            }
          </ul>
          }
        </div>
          {
            userItem ? 
            (
            <>
              <div style={{width:'10px'}}>
                <hr className='GearHr'/>
              </div>
              <ItemEditor itemSlot={props.data.itemSlot} itemClass={props.data.itemClass} item={userItem} returnItem={ReturnDataAndClose} key={userItem.item.name + " item editor"}/>
            </>
            )
            : null
          }
      </div>
    </div>
  )
}