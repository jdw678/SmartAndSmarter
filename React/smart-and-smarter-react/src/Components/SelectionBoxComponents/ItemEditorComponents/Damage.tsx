import React, { useEffect, useState } from 'react'
import { Armor, ItemClass, Rarity, UserItem, Weapon } from '../../PureTSX/WeaponAndArmorTypes'

type Props = {
    item: UserItem,
    damage: number,
    itemClass: ItemClass,
    updateDamage: (damage: number, rarity?: Rarity) => void
}

export default function Damage(props: Props) {
    
    const [input, setInput] = useState<number>(props.damage);
    const [inputAsStr, setInputAsStr] = useState<string>(props.damage.toString());
    const itemIsArmor = isArmor();
    const itemDamages = getDamages();

    function isArmor()
    {
        return props.itemClass == ItemClass.Armor;
    }


    //set item damages array = all weapon damages or armor ratings from the item passed in
    //used because figuring out type over and over is a headache
    function getDamages()
    {
        if(itemIsArmor)
        {
            const armor = props.item.item as Armor
            return [armor.blackArmorMin, armor.blackArmorMax, armor.greyArmorMin, armor.greyArmorMax, armor.whiteArmorMin, armor.whiteArmorMax, armor.greenArmorMin, armor.greenArmorMax, armor.blueArmorMin, armor.blueArmorMax, armor.purpleArmorMin, armor.purpleArmorMax, armor.orangeArmorMin, armor.orangeArmorMax, armor.goldArmorMin, armor.goldArmorMax]
        }
        else
        {
            const weapon = props.item.item as Weapon
            return [weapon.blackDamageMin, weapon.blackDamageMax, weapon.greyDamageMin, weapon.greyDamageMax, weapon.whiteDamageMin, weapon.whiteDamageMax, weapon.greenDamageMin, weapon.greenDamageMax, weapon.blueDamageMin, weapon.blueDamageMax, weapon.purpleDamageMin, weapon.purpleDamageMax, weapon.orangeDamageMin, weapon.orangeDamageMax, weapon.goldDamageMin, weapon.goldDamageMax]
        }
    }

    //get the damage string to be displayed in damage rarity
    function getDamageString(min: number, max: number) : string
    {
        if(min != max)
            return min + " ~ " + max;
        
        return min.toString();
    }

    //get the color from the rarity calculated from the damage passed in (below)
    function getColorFromRarity(rarity: Rarity)
    {
    return "var(--" + rarity.toLowerCase() + ")";
    }

    //get the color from the damage passed in for use in box shadow
    function getRarityFromDamage(damage: number)
    {


        //loop through the item damage / armor array and check each pair to see which range the damage value falls between
        var damageIndex = 0;
        for(let i = 0; i < itemDamages.length; i++)
        {
            if(damage >= itemDamages[i] && damage <= itemDamages[i + 1])
                damageIndex = ((i - (i % 2)) / 2);
        }

        //if damageIndex = 0 then either the damage is higher or lower than the min / max of the damage range (ex. 1dmg or 999dmg)
        //check to see if it is max, if not, leave it at 0
        if(damageIndex == 0)
            if(damage > itemDamages[itemDamages.length - 1])
                damageIndex = (itemDamages.length / 2) - 1;

        
        switch(damageIndex)
        {
            case 0:
                return Rarity.Black;
            case 1:
                return Rarity.Grey;
            case 2:
                return Rarity.White;
            case 3:
                return Rarity.Green;
            case 4:
                return Rarity.Blue;
            case 5:
                return Rarity.Purple;
            case 6:
                return Rarity.Orange;
            case 7:
                return Rarity.Gold;
            default:
                return Rarity.Black;
        }
    }

    function getColorFromDamage()
    {
        getColorFromRarity(getRarityFromDamage(input));
    }

    function updateInput(input: string)
    {
        var inputNum = Number(input);
        props.updateDamage(inputNum, getRarityFromDamage(inputNum));
        setInput(inputNum);
        setInputAsStr(input);
    }


  return (
    <div className='DamageWrapper' style={{boxShadow:'0 0 4px 4px ' + getColorFromDamage()}}>
        <h1 className='GearFont DamageInputWrapper' style={{justifyItems:'center'}} key={"Damage "}>{itemIsArmor ? "Armor Rating:" : "Damage:"}
            <input
            className='DamageInput'
            type='number'
            step='.1'
            onChange={(event) => updateInput(event.target.value)}
            onKeyDown={(e) => {if(["e", "E", "+", "-"].includes(e.key)) e.preventDefault()}}
            key="Damage Input" value={inputAsStr}
            />
        </h1>
        <div key="Damage Rarity Range Wrapper" className='DamageRarityWrapper'>
            <h2 className='DamageRarity LightMode' style={{color:'var(--junk)'}}>{getDamageString(itemDamages[0], itemDamages[1])}</h2>
            <h2 className='DamageRarity DarkMode' style={{color:'var(--poor)'}}>{getDamageString(itemDamages[2], itemDamages[3])}</h2>
            <h2 className='DamageRarity DarkMode' style={{color:'var(--common)'}}>{getDamageString(itemDamages[4], itemDamages[5])}</h2>
            <h2 className='DamageRarity DarkMode' style={{color:'var(--uncommon)'}}>{getDamageString(itemDamages[6], itemDamages[7])}</h2>
            <h2 className='DamageRarity DarkMode' style={{color:'var(--rare)'}}>{getDamageString(itemDamages[8], itemDamages[9])}</h2>
            <h2 className='DamageRarity DarkMode' style={{color:'var(--epic)'}}>{getDamageString(itemDamages[10], itemDamages[11])}</h2>
            <h2 className='DamageRarity DarkMode' style={{color:'var(--legendary)'}}>{getDamageString(itemDamages[12], itemDamages[13])}</h2>
            <h2 className='DamageRarity DarkMode' style={{color:'var(--unique)'}}>{getDamageString(itemDamages[14], itemDamages[15])}</h2>
            
        </div>
    </div>
  )
}