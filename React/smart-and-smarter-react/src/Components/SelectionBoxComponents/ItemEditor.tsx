import React, { useEffect, useState } from 'react'
import { Armor, Attribute, AttributeType, AttributeValueType, ItemClass, Rarity, UserItem, Weapon } from '../PureTSX/WeaponAndArmorTypes'
import SelectionBoxItem from './SelectionBoxItemSelector'
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
    secondaryItemImageLocation?: string,
    itemSlot: string,
    autoUpdate: boolean,
    updateItem: (item: UserItem) => void,
    setAutoUpdate: (autoUpdate: boolean) => void
}


export default function ItemEditor(props: Props) {


    //pass RarityList the current set rarity if there is one
    //pass AttributeList the current attributes array
    //if the attributelist is not the size expected based upon the rarity (ex legendary has 5 attributes, junk has 0)
    ////then update the attributes list, deleting old values and adding default values where necissary


    useEffect(() => {
        initItem();
    },[])

    //initialize the attributes array, ensuring it is the correct size on load
    function initItem() : UserItem
    {
        var item = props.item;
        var expectedCount = item.rarity ? calculateAttributeCount(item.rarity) : 0;

        if(item.attributes.length != expectedCount)
            props.updateItem({...props.item, attributes: updateAttributesByCount(item.attributes, expectedCount)});

            
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
        props.updateItem({...props.item, rarity, attributes: updateAttributesByCount(props.item.attributes, calculateAttributeCount( rarity))});
    }

    //update the attributes array based strictly on a length
    function updateAttributesByCount(attributes: Attribute[], count: number) : Attribute[]
    {

        //array is not correct size if true
        if(attributes.length != count)
        {
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
                var len = attributes.length;
                var newAttributes = [];

                //attributes in local storage
                var storedAttributes: Attribute[] = localStorage.getItem(getAttributesString()) ? JSON.parse(localStorage.getItem(getAttributesString()) as string) : []

                for(let i = 0; i < count; i++)
                {
                    if(i < len)
                        newAttributes.push(attributes[i]);
                    
                    else
                    {
                        if(storedAttributes[i])
                        {
                            newAttributes.push(storedAttributes[i])
                        }
                        else newAttributes.push({value: 0, valueType: AttributeValueType.Default, type: AttributeType.WeaponDamage})
                    }
                }

                return newAttributes;
            }

            
        }

        return props.item.attributes;
    }

    function updateDamage(damage: number, rarity?: Rarity)
    {
        if(props.autoUpdate && rarity)
        {
            props.updateItem({...props.item, damage, rarity, attributes: updateAttributesByCount(props.item.attributes, calculateAttributeCount( rarity))});
        }
        else{
            
            props.updateItem({...props.item, damage});
        }
    }

    function updateAttributes(attributes: Attribute[])
    {
        props.updateItem({...props.item, attributes});
    }

    function updateAutoUpdate(autoUpdate: boolean)
    {
        props.setAutoUpdate(autoUpdate);
        localStorage.setItem(getAutoUpdateString(), autoUpdate.toString());
    }

    function getAutoUpdateString()
    {
        return "AutoUpdate " + props.itemSlot;
    }

    function getAttributesString()
    {
        return "Attributes " + props.itemSlot;
    }



  return (
    <div className='ItemEditorMainContainer'>
        <img src={WeaponInventoryImage} className='ItemBackground' />
        <div className='ItemContainer' style={{position:'absolute'}}>
            <img src={props.item.item.imageLocation} className={'Item'} />
        </div>
        {props.secondaryItemImageLocation ? 
        
            <div className='ItemContainer' style={{position:'absolute'}}>
                <img src={props.secondaryItemImageLocation} className={'Item'} />
            </div>
            :
            null
        }

        <div>
            <RarityList style={{marginLeft: '10px', justifyItems:'center'}} rarity={props.item.rarity} updateRarity={updateRarity} updateAutoUpdate={updateAutoUpdate} autoUpdate={props.autoUpdate}/>
            <Damage item={props.item} updateDamage={updateDamage} damage={props.item.damage} itemClass={props.itemClass}/>
            <AttributeList attributes={props.item.attributes} key={"Attributes List Size of " + props.item.attributes.length} updateAttributes={updateAttributes}/>
        </div>

    </div>
  )
}