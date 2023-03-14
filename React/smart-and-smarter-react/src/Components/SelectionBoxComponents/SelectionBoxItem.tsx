import React, { useState } from 'react'
import { ArmorType, ItemClass, WeaponType } from '../PureTSX/WeaponAndArmorTypes';
import GearPopOut, { GearPopUpData } from './GearPopUp';

type Props = {
    img: string,
    backgroundImgStyle: React.CSSProperties,
    itemImgSize?: "small" | "medium" | "large",
    text: string,
    useOverlay: boolean,
    armorType?: ArmorType,
    itemClass: ItemClass,
    
    setPopUpActive: (gearData?: GearPopUpData) => void
}

export default function SelectionBoxItem(props: Props) {

    //weapons dont use overlay
    const className = props.useOverlay ? "overlay" : "";

    //state to hold gear pop up data
    const [gearData, setGearData] = useState<GearPopUpData>();

    //toggle the GearPopUp component and pass it any stored data
    function togglePopUp() {
        props.setPopUpActive({...gearData, itemClass: props.itemClass, returnData: saveUpdatedGearData, armorType: props.armorType});
    }

    //save data passed from the GearPopUp component
    function saveUpdatedGearData(data?: GearPopUpData) {
        setGearData(data);
        console.log("Data Got!");
        console.log(data);
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

  return (
    <>
    <button onClick={togglePopUp} style={{background: 'transparent'}}>
        <div>
            <img src={props.img} alt={props.text} style={props.backgroundImgStyle}/>
            {gearData ? <img src={gearData.item?.imageLocation} className={getItemImageSize()} style={{position:'absolute'}}/> : null}
        </div>
        <div className={className}>
            <span style={{color:"white"}}>{props.text}</span>
        </div>
    </button>

    </>

  )
}