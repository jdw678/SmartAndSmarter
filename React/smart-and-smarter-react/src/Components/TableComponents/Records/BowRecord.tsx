import React, { useState } from 'react'
import WeaponClasses from '../Cells/ClassesCell'
import WeaponDamage from '../Cells/DamageCell'
import '../../../CSS/CompleteTable.css';
import TableImage from '../Cells/ImageCell'
import { ParsePercentSplit } from './MeleeWeaponRecord';
import { Rarity, UserItem, Weapon } from '../../PureTSX/WeaponAndArmorTypes';
import SDOHCell from '../Cells/SDOHCell';
import { UserInfo } from 'os';


type Props = {
  weapon: Weapon,
  weaponOneDamage?: number,
  weaponTwoDamage?: number
}

export default function BowRecord(props: Props) {

    const [weapon, setWeapon] = useState<UserItem>({item: props.weapon, rarity: Rarity.Black, attributes: [], damage: props.weapon.blackDamageMin});
    
    

  return(
        <tr style={{width:'100%', height:'100%'}}>
            <td>
                <TableImage weapon={props.weapon}/>
            </td>
            <td key={props.weapon.name + " classes"}>
                <WeaponClasses
                    barbarianCanUse ={props.weapon.barbarianCanUse}
                    clericCanUse = {props.weapon.clericCanUse}
                    fighterCanUse = {props.weapon.fighterCanUse}
                    rangerCanUse = {props.weapon.rangerCanUse}
                    rogueCanUse = {props.weapon.rogueCanUse}
                    wizardCanUse = {props.weapon.wizardCanUse}
                />
            </td>
            {/*TODO: Use the calculator from WeaponAndArmorTypes in SelectionBoxItemSelector, pass the damage to here,
                     use state to store attributes and calculate damage needed to match damage from main and secondary weapons passed */}
            <td key={props.weapon.name + " attributes"}>
                <div className='AttributeCellWrapper'>
                    <a className='AttributeInputWrapper'>
                        Attribute 1
                        <input style={{borderRadius: 10}} />
                    </a>
                    <br />
                    <a className='AttributeInputWrapper'>
                        Attribute 2
                        <input style={{borderRadius: 10}} />
                    </a>
                    <br />
                    <a className='AttributeInputWrapper'>
                        Attribute 3
                        <input style={{borderRadius: 10}} />
                    </a>
                    <br />
                    <a className='AttributeInputWrapper'>
                        Attribute 4
                        <input style={{borderRadius: 10}} />
                    </a>
                    <br />
                    <a className='AttributeInputWrapper'>
                        Attribute 5
                        <input style={{borderRadius: 10}} />
                    </a>
                </div>
            </td>
            <td key={props.weapon.name + " damages"}>
                <WeaponDamage damageMin={props.weapon.blackDamageMin} damageMax={props.weapon.blackDamageMax} color="rgb(50, 50, 50)" />
                <WeaponDamage damageMin={props.weapon.greyDamageMin} damageMax={props.weapon.greyDamageMax} color="rgb(100, 100, 100)" />
                <WeaponDamage damageMin={props.weapon.whiteDamageMin} damageMax={props.weapon.whiteDamageMax} color="rgb(222, 222, 222)" />
                <WeaponDamage damageMin={props.weapon.greenDamageMin} damageMax={props.weapon.greenDamageMax} color="rgb(98, 190, 11)" />
                <WeaponDamage damageMin={props.weapon.blueDamageMin} damageMax={props.weapon.blueDamageMax} color="rgb(74, 155, 209)" />
                <WeaponDamage damageMin={props.weapon.purpleDamageMin} damageMax={props.weapon.purpleDamageMax} color="rgb(173, 90, 255)" />
                <WeaponDamage damageMin={props.weapon.orangeDamageMin} damageMax={props.weapon.orangeDamageMax} color="rgb(247, 162, 45)" />
                <WeaponDamage damageMin={props.weapon.goldDamageMin} damageMax={props.weapon.goldDamageMax} color="rgb(227, 216, 140)" />
                
                <span style={{textAlign:'left'}}>Primary: </span>
                <br />
                <span style={{textAlign:'left'}}>Secondary: </span>
            </td>
            <td key={props.weapon.name + " movement speed"}>
                {props.weapon.movementSpeedWhileEquiped}
            </td>         
            <td key={props.weapon.name + " reload speed"}>
                {props.weapon.reloadSpeed}
            </td>
            <td key={props.weapon.name + " quiver size"}>
                {props.weapon.quiverSize ? props.weapon.quiverSize.toString() : "1"}
            </td>
            <td> {ParsePercentSplit(props.weapon.actionMovementSpeed)} </td>
            <td key={props.weapon.name + "slow down on hit"}><SDOHCell text={props.weapon.slowDownOnHit} /></td>
            <td> 
            {
                !props.weapon.uniqueName ? "None"
                : <a href={props.weapon.uniqueLink} title={props.weapon.name}>{props.weapon.uniqueName}</a>
            }
            </td>
      </tr>
  )

}