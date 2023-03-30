import React, { useEffect, useState } from 'react'
import { Armor, Attribute, AttributeType, AttributeValueType, ItemClass, Rarity, UserItem, Weapon } from '../PureTSX/WeaponAndArmorTypes'
import SelectionBoxItem from './SelectionBoxItem'
import WeaponInventoryImage from '../../images/Weapon_1.png';
import '../../CSS/ItemEditor.css';
import { GearPopUpData } from './GearPopUp';
import RarityList from './ItemEditorComponents/RarityList';
import AttributeList from './ItemEditorComponents/AttributeList';
import Damage from './ItemEditorComponents/Damage';
import { json } from 'stream/consumers';

type Props = {
    itemClass: ItemClass,
    item: UserItem,
    itemSlot: string,
    returnItem: (item: UserItem) => void
}


export default function ItemEditor(props: Props) {


    //pass RarityList the current set rarity if there is one
    //pass AttributeList the current attributes array
    //if the attributelist is not the size expected based upon the rarity (ex legendary has 5 attributes, junk has 0)
    ////then update the attributes list, deleting old values and adding default values where necissary

    const [item, setItem] = useState<UserItem>(props.item);
    const [autoUpdate, setAutoUpdate] = useState<boolean>(localStorage.getItem("AutoUpdate") ? localStorage.getItem("AutoUpdate") == "true" : true);

    useEffect(() => {
        initItem();
    },[])

    function returnItem()
    {
        localStorage.setItem(props.itemSlot, JSON.stringify(item));
        props.returnItem(item);
    }

    //initialize the attributes array, ensuring it is the correct size on load
    function initItem() : UserItem
    {
        var item = props.item;
        var expectedCount = item.rarity ? calculateAttributeCount(item.rarity) : 0;

        if(item.attributes.length != expectedCount)
            setItem({...item, attributes: updateAttributesByCount(item.attributes, expectedCount)});

            
        return item;
    }

    //calculate the amount of attributes to be displayed based on rarity, incase the item attribute array is not the right size
    function calculateAttributeCount(rarity: Rarity) : number
    {
        switch(rarity)
        {
            case Rarity.Black:
                return(0);
            case Rarity.Grey:
                return(0);
            case Rarity.White:
                return(0);
            case Rarity.Green:
                return(1);
            case Rarity.Blue:
                return(2);
            case Rarity.Purple:
                return(3);
            case Rarity.Orange:
                return(4);
            case Rarity.Gold:
                return(5);
        }
    }
    
    function updateRarity(rarity: Rarity)
    {
        setItem({...item, rarity, attributes: updateAttributesByCount(item.attributes, calculateAttributeCount( rarity))});
    }

    //update the attributes array based strictly on a length
    function updateAttributesByCount(attributes: Attribute[], count: number) : Attribute[]
    {
        console.log(attributes);

        //array is not correct size if true
        if(attributes.length != count)
        {
            console.log("len != count")
            //if the array is too large, shrink it
            if(attributes.length > count)
            {
                if(count > 0)
                    return attributes.slice(0, count);
                
                else return [];
            }
            
            //if the array is too small, add default items to it
            if(attributes.length < count)
            {
                console.log("len < count")
                var len = attributes.length;
                var newAttributes = [];
                for(let i = 0; i < count; i++)
                {
                    if(i < len)
                        newAttributes.push(attributes[i]);
                    
                    else
                        newAttributes.push({value: 0, valueType: AttributeValueType.Default, type: AttributeType.WeaponDamage})
                }

                return newAttributes;
            }

            
        }

        return item.attributes;
    }

    function updateDamage(damage: number, rarity?: Rarity)
    {
        if(autoUpdate && rarity)
        {
            setItem({...item, damage, rarity, attributes: updateAttributesByCount(item.attributes, calculateAttributeCount( rarity))});
        }
        else{
            
            setItem({...item, damage});
        }
    }

    function updateAttributes(attributes: Attribute[])
    {
        setItem({...item, attributes});
    }

    function updateAutoUpdate(autoUpdate: boolean)
    {
        setAutoUpdate(autoUpdate);
        localStorage.setItem("AutoUpdate", autoUpdate.toString());
    }


  return (
    <div className='ItemEditorMainContainer'>
        <button onClick={returnItem} className='ReturnButton'>Accept Changes</button>
        <img src={WeaponInventoryImage} className='ItemBackground' />
        <div className='ItemContainer' style={{position:'absolute'}}>
            <img src={item.item.imageLocation} className={'Item'} />
        </div>

        <div>
            <RarityList style={{marginLeft: '10px', justifyItems:'center'}} rarity={item.rarity} updateRarity={updateRarity} updateAutoUpdate={updateAutoUpdate} autoUpdate={autoUpdate}/>
            <Damage item={item} updateDamage={updateDamage} damage={item.damage}/>
            <AttributeList attributes={item.attributes} key={"Attributes List Size of " + item.attributes.length} updateAttributes={updateAttributes}/>
        </div>

    </div>
  )
}