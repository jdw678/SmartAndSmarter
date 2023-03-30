import React, { useState } from 'react'
import { ArmorType, ItemClass, UserItem, WeaponType } from '../PureTSX/WeaponAndArmorTypes';
import GearPopOut, { GearPopUpData } from './GearPopUp';

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

export default function SelectionBoxItem(props: Props) {

    //weapons dont use overlay
    const className = props.useOverlay ? "overlay" : "";

    //state to hold gear pop up data
    const [item, setItem] = useState<UserItem>(localStorage.getItem(props.text) ? JSON.parse(localStorage.getItem(props.text) as string) : undefined);

    //toggle the GearPopUp component and pass it any stored data
    function togglePopUp() {
        props.setPopUpActive({item, itemClass: props.itemClass, returnData: saveUpdatedGearData, armorType: props.armorType, itemSlot: props.text});
    }

    //save data passed from the GearPopUp component
    function saveUpdatedGearData(item?: UserItem) {
        if(item)
            setItem(item);
    }

    function getItemImageSize()
    {
        if(props.itemImgSize === 'small')
            return "SmallSelectionBoxItem";
        
        
        if(props.itemImgSize === 'medium')
            return "MediumSelectionBoxItem";

    
        if(props.itemImgSize === 'large')
            return "LargeSelectionBoxItem";

        return "";
    }

    function getItemImageContainer()
    {
        if(props.itemImgSize === 'small')
            return "SmallSelectionBoxContainer";
        
        
        if(props.itemImgSize === 'medium')
            return "MediumSelectionBoxContainer";

    
        if(props.itemImgSize === 'large')
            return "LargeSelectionBoxContainer";

        return "";
    }

  return (
    <>
    <button onClick={togglePopUp} style={{background: 'transparent'}} className='SelectionButton'>
        <div>
            <img src={props.img} alt={props.text} style={props.backgroundImgStyle}/>
            <div className={getItemImageContainer()} style={{position:'absolute'}}>
                
                {item ?
                        <img src={item.item.imageLocation} className={getItemImageSize()} key={item.item.name} />
                : null
                }
            </div>
        </div>
        <div className={className}>
            <span style={{color:"white"}}>{props.text}</span>
        </div>
    </button>

    </>

  )
}