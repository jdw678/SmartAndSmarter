import React, { useState } from 'react'
import { ArmorType, ItemClass, UserItem, Weapon, WeaponType } from '../PureTSX/WeaponAndArmorTypes';
import GearPopOut, { GearPopUpData } from './GearPopUp';
import SelectionBoxItem from './SelectionBoxItem';
import { getSuggestedQuery } from '@testing-library/react';

type Props = {
    img: string,
    backgroundImgStyle?: React.CSSProperties,
    itemImgSize?: "small" | "medium" | "large",
    text: string,
    useOverlay: boolean,
    armorType?: ArmorType,
    itemClass: ItemClass
    
    setPopUpActive: (gearData: GearPopUpData) => void
}

export default function SelectionBoxItemSelector(props: Props) {

    //weapons dont use overlay
    const className = props.useOverlay ? "overlay" : "";

    //state to hold gear pop up data
    const [item, setItem] = useState<UserItem | undefined>(localStorage.getItem(props.text + " MainHand") != "undefined" ? JSON.parse(localStorage.getItem(props.text + " MainHand") as string) : undefined);

    const [secondaryItem, setSecondaryItem] = useState<UserItem | undefined>(localStorage.getItem(props.text + " OffHand") != "undefined" ? JSON.parse(localStorage.getItem(props.text + " OffHand") as string) : undefined)

    //toggle the GearPopUp component and pass it any stored data
    function togglePopUp() {
        props.setPopUpActive(
            
                {mainHand: item, offHand: secondaryItem, itemClass: props.itemClass, returnData: saveUpdatedGearData, armorType: props.armorType, itemSlot: props.text},
            );
    }

    //save data passed from the GearPopUp component
    function saveUpdatedGearData(items?: (UserItem|undefined)[]) {
        
        if(items)
        {
            if(items.length > 0)
                setItem(items[0]);
            else setItem(undefined);

            if(items.length > 1)
                setSecondaryItem(items[1])
            else setSecondaryItem(undefined);
        }
        else{
            setItem(undefined);
            setSecondaryItem(undefined);
        }
    }

    function getShadowColor(): string
    {
        if(secondaryItem && item)
            return 'linear-gradient(to right, var(--' + item.rarity.toLowerCase() + '), var(--' + secondaryItem.rarity.toLowerCase() + '))';

        if(item)
            return 'var(--' + item.rarity.toLowerCase() + ')';
        
        return '';
    }


  return (
    <>
    <button onClick={togglePopUp} style={{background: 'transparent', boxShadow: (item || secondaryItem) ? '0 0 0' : ''}} className='SelectionButton'>
        <div className='Shadow' style={{display: !(secondaryItem || item) ? 'none' : '', background: getShadowColor()}}/>
        <div>
            <img src={props.img} alt={props.text} style={{...props.backgroundImgStyle, zIndex:'2'}}/>
            <SelectionBoxItem item={item} itemImgSize={props.itemImgSize}/>
            {props.itemClass == ItemClass.Weapon ? <SelectionBoxItem item={secondaryItem} itemImgSize={props.itemImgSize} style={{left: '42px'}}/> : null}

        </div>
        <div className={className} style={ className != 'overlay' ? {backgroundColor:'var(--button-color)', height:'130px', width:'100%', position:'absolute', zIndex:'1', display:'flex', alignItems:'end', justifyContent:'center'} : {zIndex:'2'}}>
            <span style={{color:'var(--text-white)'}}>{props.text}</span>
        </div>
    </button>

    </>

  )
}