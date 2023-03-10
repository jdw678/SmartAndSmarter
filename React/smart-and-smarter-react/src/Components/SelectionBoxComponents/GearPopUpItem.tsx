import React from 'react'
import { Armor, ItemClass, Weapon } from '../PureTSX/WeaponAndArmorTypes'
import { GearPopUpData } from './GearPopUp'

type Props = {
  itemClass: ItemClass,
  item: Weapon | Armor,
  returnData:  (data?: GearPopUpData) => void 
}

export default function GearPopUpItem(props: Props) {

  //onclick return whatever item this is
  return (
    <li className='GearLI' onClick={() => {props.returnData({itemClass: props.itemClass, item: props.item, returnData: props.returnData})}}>
      {props.item.name}
    </li>
  )
}