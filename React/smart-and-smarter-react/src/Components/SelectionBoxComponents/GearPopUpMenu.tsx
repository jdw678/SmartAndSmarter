import React, { useState } from 'react';
import { Armor, ArmorList, ArmorType, ItemClass, Rarity, SpecificWeaponType, UserItem, Weapon, WeaponList } from '../PureTSX/WeaponAndArmorTypes';
import '../../CSS/GearPopUp.css';
import GearPopUpItem from './GearPopUpItem';
import GearPopUpCondensedItem from './GearPopUpCondensedItem';
import ItemEditor from './ItemEditor';
import { GearPopUpData } from './GearPopUp';


type Props = {
    data: GearPopUpData,
    weaponList: WeaponList,
    armorList: ArmorList,
    updateUserItem: (item?: UserItem) => void,
    item?: UserItem,
    autoUpdate: boolean,
    setAutoUpdate: (autoUpdate: boolean) => void
}

export default function GearPopUpMenu(props: Props) {


  const [hoverable, setHoverable] = useState<React.CSSProperties>({display:'inherit'});

  
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
    props.updateUserItem({
      item: item,
      attributes: props.item?.attributes ? props.item.attributes : [],
      damage: props.item?.damage ? props.item.damage : 0,
      rarity: props.item?.rarity ? props.item.rarity : Rarity.Black
    });
    setHoverable({display:'none'});
  }

  function updateItem(item: UserItem)
  {
    props.updateUserItem(item);
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

  return (
    <>
        <div className='ListContainer' onMouseEnter={() => setHoverable({display:'inherit'})}>
          
          {//this is the drop down list of items
          props.data.itemClass == ItemClass.Weapon ? 
          <>
            <div className='GearDropDownContainer'>
              <h1 className='GearDropDownHeader GearFont' onClick={() => { props.updateUserItem() }}>None</h1>
            </div>
            <GearPopUpCondensedItem itemClass={props.data.itemClass} returnItem={setItem} name='Bows' itemList={props.weaponList.bows} style={hoverable}/>
            <GearPopUpCondensedItem itemClass={props.data.itemClass} returnItem={setItem} name='Shields' itemList={props.weaponList.shields} style={hoverable}/>
            <GearPopUpCondensedItem itemClass={props.data.itemClass} returnItem={setItem} name='Melee Weapons' children={meleeProps} style={hoverable}/>
            <GearPopUpCondensedItem itemClass={props.data.itemClass} returnItem={setItem} name='Magic Weapons' itemList={props.weaponList.magicWeapons} style={hoverable}/>
          </>
          :
          <ul>
            <li className='GearLI GearFont' onClick={() => { props.updateUserItem() }}>None</li>
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
            props.item ? 
            (
            <>
              <div style={{width:'10px'}}>
                <hr className='GearHr'/>
              </div>
              <ItemEditor autoUpdate={props.autoUpdate} setAutoUpdate={props.setAutoUpdate} itemSlot={props.data.itemSlot} itemClass={props.data.itemClass} item={props.item} updateItem={updateItem} key={props.item.item.name + " item editor"}/>
            </>
            )
            : null
          }
    </>
  )
}