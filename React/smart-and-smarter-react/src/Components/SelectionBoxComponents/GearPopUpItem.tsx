import React from 'react'
import { Armor, ItemClass, Weapon } from '../PureTSX/WeaponAndArmorTypes'
import { GearPopUpData } from './GearPopUp'

type Props = {
  itemClass: ItemClass,
  item: Weapon | Armor,
  style: React.CSSProperties,
  returnItem:  (item: Weapon | Armor) => void 
}

export default function GearPopUpItem(props: Props) {

  //onclick return whatever item this is
  return (
    <li className='GearLI GearFont' onClick={() => {props.returnItem(props.item)}} style={props.style}>
      {props.item.name}
    </li>
  )
}