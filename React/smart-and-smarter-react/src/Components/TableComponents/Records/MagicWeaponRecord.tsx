import React from 'react'
import WeaponADM from '../Cells/ADMCell'
import WeaponAttackSpeed from '../Cells/AttackSpeedCell'
import WeaponAttackType from '../Cells/AttackTypeCell'
import WeaponClasses from '../Cells/ClassesCell'
import WeaponDamage from '../Cells/DamageCell'
import '../../../CSS/CompleteTable.css';
import TableImage from '../Cells/ImageCell'
import { MagicWeapon } from '../../PureTSX/WeaponAndArmorTypes'
import { ParsePercentSplit, ParseSpaceSplit } from './MeleeWeaponRecord'


type Props = {
  weapon: MagicWeapon

}

export function Capitalize(str: string | undefined)
{
    if(str == null) return;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default function MagicWeaponRecord(props: Props) {

  return(
        <tr>
            <td>
                <TableImage weapon={props.weapon}/>
            </td>
          
          {/*TODO: Add weapon sweet / sour spot*/}
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
            <td>
                <WeaponAttackType type1={props.weapon.attack1Type} type2={props.weapon.attack2Type} type3={props.weapon.attack3Type}/>
                <br />
                <WeaponADM ADM1={props.weapon.attack1DamageMultiplier} ADM2={props.weapon.attack2DamageMultiplier} ADM3={props.weapon.attack3DamageMultiplier}/>
            </td>
            <td> 
                <WeaponAttackSpeed attack1Speed={props.weapon.attack1Speed} attack2Speed={props.weapon.attack2Speed} attack3Speed={props.weapon.attack3Speed}/>
            </td>
            <td> {props.weapon.sweetSpot} </td>
            <td> {ParseSpaceSplit(props.weapon.reach)} </td>
            <td> {ParsePercentSplit(props.weapon.actionMovementSpeed)} </td>
            <td> 
            {
                !props.weapon.uniqueName ? "None"
                : <a href={props.weapon.uniqueLink} title={props.weapon.name}>{props.weapon.uniqueName}</a>
            }
            </td>
      </tr>
  )

}