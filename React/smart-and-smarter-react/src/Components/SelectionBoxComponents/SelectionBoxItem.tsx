import React from 'react'
import { UserItem } from '../PureTSX/WeaponAndArmorTypes'

type Props = {
    item?: UserItem
    itemImgSize?: "small" | "medium" | "large",
    style?: React.CSSProperties
}

export default function SelectionBoxItem(props: Props) {

    
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
    <div className={getItemImageContainer()} style={{...props.style, position:'absolute', zIndex:'2'}}>
        
        {props.item ?
                <img src={props.item.item.imageLocation} className={getItemImageSize()} key={props.item.item.name} />
        : null
        }
    </div>
  )
}