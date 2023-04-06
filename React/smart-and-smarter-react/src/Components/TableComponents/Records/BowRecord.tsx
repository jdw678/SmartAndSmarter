import React from 'react'
import WeaponClasses from '../Cells/ClassesCell'
import WeaponDamage from '../Cells/DamageCell'
import '../../../CSS/CompleteTable.css';
import TableImage from '../Cells/ImageCell'
import { ParsePercentSplit } from './MeleeWeaponRecord';
import { Weapon } from '../../PureTSX/WeaponAndArmorTypes';
import SDOHCell from '../Cells/SDOHCell';


type Props = {
  weapon: Weapon

}

export default function BowRecord(props: Props) {
  return(
        <tr>
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
            <td key={props.weapon.name + " attributes"}>
                <a>Attribute 1</a>
                <input style={{borderRadius: 10}}></input>
                <a>Attribute 2</a>
                <input style={{borderRadius: 10}}></input>
                <a>Attribute 3</a>
                <input style={{borderRadius: 10}}></input>
                <a>Attribute 4</a>
                <input style={{borderRadius: 10}}></input>
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