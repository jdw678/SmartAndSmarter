import React, { useState } from 'react'
import { ArmorType, ItemClass, WeaponType } from '../PureTSX/WeaponAndArmorTypes';
import GearPopOut, { GearPopUpData } from './GearPopUp';

type Props = {
    img: string,
    style: React.CSSProperties,
    text: string,
    useOverlay: boolean,
    itemType?: ArmorType,
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
        props.setPopUpActive({...gearData, itemClass: props.itemClass, returnData: saveUpdatedGearData});
    }

    //save data passed from the GearPopUp component
    function saveUpdatedGearData(data?: GearPopUpData) {
        setGearData(data);
        console.log("Data Got!");
        console.log(data);
    }


  return (
    <>
    <button onClick={togglePopUp}>
        <img src={gearData ? gearData.item?.imageLocation : props.img} alt="9" style={props.style}/>
        <div className={className}>
            <span>{props.text}</span>
        </div>
    </button>

    </>

  )
}