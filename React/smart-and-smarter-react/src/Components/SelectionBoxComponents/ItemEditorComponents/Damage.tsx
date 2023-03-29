import React, { useState } from 'react'
import { Armor, Rarity, UserItem, Weapon } from '../../PureTSX/WeaponAndArmorTypes'

type Props = {
    item: UserItem
}

export default function Damage(props: Props) {
    
    const [input, setInput] = useState<number>(0)
    const itemIsArmor = isArmor(props.item.item);
    const itemDamages = getDamages();

    function isArmor(item: Weapon | Armor) : item is Armor
    {
        return (item as Armor).blackArmourMin !== undefined;
    }

    //set item damages array = all weapon damages or armour ratings from the item passed in
    //used because figuring out type over and over is a headache
    function getDamages()
    {
        if(itemIsArmor)
        {
            const armor = props.item.item as Armor
            return [armor.blackArmourMin, armor.blackArmourMax, armor.greyArmourMin, armor.greyArmourMax, armor.whiteArmourMin, armor.whiteArmourMax, armor.greenArmourMin, armor.greenArmourMax, armor.blueArmourMin, armor.blueArmourMax, armor.purpleArmourMin, armor.purpleArmourMax, armor.orangeArmourMin, armor.orangeArmourMax, armor.goldArmourMin, armor.goldArmourMax]
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

    //get the color from the damage passed in for use in box shadow
    function getColorFromDamage()
    {
        var damage = input;
        //get the color from the rarity calculated from the damage passed in (below)
        function getColorFromRarity(rarity: Rarity)
        {
        return "var(--" + rarity.toLowerCase() + ")";
        }

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
                return getColorFromRarity(Rarity.Black);
            case 1:
                return getColorFromRarity(Rarity.Grey);
            case 2:
                return getColorFromRarity(Rarity.White);
            case 3:
                return getColorFromRarity(Rarity.Green);
            case 4:
                return getColorFromRarity(Rarity.Blue);
            case 5:
                return getColorFromRarity(Rarity.Purple);
            case 6:
                return getColorFromRarity(Rarity.Orange);
            case 7:
                return getColorFromRarity(Rarity.Gold);
                
        }
    }

  return (
    <div className='DamageWrapper' style={{boxShadow:'0 0 4px 4px ' + getColorFromDamage()}}>
        <h1 className='GearFont DamageInputWrapper' style={{justifyItems:'center'}} key={"Damage "}>Damage:
            <input
            className='DamageInput'
            onChange={(event) => setInput(Number(event.target.value.replace(/\D/g,'')))}
            key="Damage Input" value={input.toString() == 'NaN' ? 0 : input}
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