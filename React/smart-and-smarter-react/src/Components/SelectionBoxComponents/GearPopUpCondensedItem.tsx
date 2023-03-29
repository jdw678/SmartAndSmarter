import React, { useState } from 'react'
import { Armor, ItemClass, Weapon } from '../PureTSX/WeaponAndArmorTypes'
import GearPopUpItem from './GearPopUpItem'
import Arrow from '../../images/Arrow.png';
import { GearPopUpData } from './GearPopUp';

type Props = {
    itemList?: Weapon[] | Armor[],
    itemClass: ItemClass,
    name: string,
    children?: Props[],
    style: React.CSSProperties,
    returnItem: (item: Armor | Weapon) => void
}

export default function GearPopUpCondensedItem(props: Props) {


  return (
    <div className='GearDropDownContainer'>
        <h1 className='GearDropDownHeader GearFont'>
            <div>{props.name}</div> <img src={Arrow} className='ArrowImage' style={{width: '15px'}}/>
        </h1>
        
        <ul className='GearDropDownList GearFont'>
            {
            //if no children simple display the gear pop up item
            //if there are children, create a new list of condensed items with said children
            //will recursively call itself until no children are left
            props.itemList && !props.children ?
                props.itemList.map((item: Weapon | Armor) =>
                {
                    return <GearPopUpItem itemClass={props.itemClass} returnItem={props.returnItem} item={item} key={item.name} style={props.style}/>
                })
            : null}
            {!props.itemList && props.children ?
                props.children.map((prop: Props) =>
                {
                    return <GearPopUpCondensedItem itemClass={props.itemClass} returnItem={props.returnItem} name={prop.name} itemList={prop.itemList} children={prop.children} key={prop.name}  style={props.style}/>
                })
            : null}
        </ul>
    </div>
  )
}