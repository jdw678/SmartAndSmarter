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
    const [item, setItem] = useState<UserItem | undefined>(localStorage.getItem(props.text) ? JSON.parse(localStorage.getItem(props.text) as string) : undefined);

    //toggle the GearPopUp component and pass it any stored data
    function togglePopUp() {
        props.setPopUpActive({item, itemClass: props.itemClass, returnData: saveUpdatedGearData, armorType: props.armorType, itemSlot: props.text});
    }

    //save data passed from the GearPopUp component
    function saveUpdatedGearData(item?: UserItem) {
        
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

    function getBoxShadowFromRarity() : string
    {
        var boxShadow = '';
        function addToShadow(left: number, right: number, blur?: number, color?: string)
        {
            if(item != undefined)
            {
                    
                if(!color) color = 'var(--' + item.rarity.toLocaleLowerCase() + ')';
                if(!blur) blur = 10;
                
                if(boxShadow != '') boxShadow += ', '
                boxShadow += left + 'px ' + right + 'px ' + blur + 'px ' + color;
            }
        }

        addToShadow(1, 1);
        addToShadow(1, -1);
        addToShadow(-1, 1);
        addToShadow(-1, -1);



        //remove the last comma and return
        return boxShadow;
    }

  return (
    <>
    <button onClick={togglePopUp} style={{background: 'transparent', boxShadow: getBoxShadowFromRarity()}} className='SelectionButton'>
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