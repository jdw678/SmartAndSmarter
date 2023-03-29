import React, { useState } from 'react'
import { Armor, ItemClass, UserItem, Weapon } from '../PureTSX/WeaponAndArmorTypes'
import SelectionBoxItem from './SelectionBoxItem'
import WeaponInventoryImage from '../../images/Weapon_1.png';
import '../../CSS/ItemEditor.css';
import { GearPopUpData } from './GearPopUp';
import RarityList from './ItemEditorComponents/RarityList';
import AttributeList from './ItemEditorComponents/AttributeList';
import Damage from './ItemEditorComponents/Damage';

type Props = {
    itemClass: ItemClass,
    item: UserItem,
    returnItem: (item: UserItem) => void
}


export default function ItemEditor(props: Props) {

    const [item, setItem] = useState<UserItem>(props.item)
    const [attributeCount, setAttributeCount] = useState<number>(0);

    function returnItem()
    {
        props.returnItem(item);
    }



  return (
    <div className='ItemEditorMainContainer'>
        <button onClick={returnItem} className='ReturnButton'>Accept Changes</button>
        <img src={WeaponInventoryImage} className='ItemBackground' />
        <div className='ItemContainer' style={{position:'absolute'}}>
            <img src={item.item.imageLocation} className={'Item'} />
        </div>

        <div>
            <RarityList style={{marginLeft: '10px', justifyItems:'center'}} setAttributeCount={setAttributeCount}/>
            <Damage item={props.item}/>
            <AttributeList attributeCount={attributeCount}/>
        </div>

    </div>
  )
}