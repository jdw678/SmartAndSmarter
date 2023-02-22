import React from 'react'
import { Hand, Weapon, WeaponList } from '../PureTSX/ApiCalls'
import WeaponADM from './WeaponADM'
import WeaponAttackSpeed from './WeaponAttackSpeed'
import WeaponAttackType from './WeaponAttackType'
import WeaponClasses from './WeaponClasses'
import WeaponDamage from './WeaponDamage'
import '../../CSS/WeaponTable.css';


type Props = {
  weapon: Weapon

}

export function Capitalize(str: string | undefined)
{
    if(str == null) return;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default function WeaponTableRecord(props: Props) {

    console.log(props.weapon);
  return(
        <tr>
            <td>
                <div>
                    <div className="rarity2 rounded relative">
                        <a href={props.weapon.imageLocation} title="Arming Sword">
                            <img alt="Arming Sword" src={props.weapon.imageLocation} decoding="async" width="60" height="180" srcSet={props.weapon.imageLocation + " 1.5x"} data-file-width="90" data-file-height="270" />
                        </a>
                    </div>
                    <br />
                    <a href={props.weapon.imageLocation} title="Arming Sword">
                        <strong>{props.weapon.name}
                        <br />
                        {props.weapon.hand == Hand.Both ? "(Two-Handed)" : "(" + Capitalize(props.weapon.hand?.toString()) + "-Hand)"}
                        </strong>
                    </a>
                </div>
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
              <WeaponAttackType type1={props.weapon.attack1Type} type2={props.weapon.attack2Type} type3={props.weapon.attack3Type} type4={props.weapon.attack4Type} type5={props.weapon.attack5Type}/>
              <br />
              <WeaponADM ADM1={props.weapon.attack1DamageMultiplier} ADM2={props.weapon.attack2DamageMultiplier} ADM3={props.weapon.attack3DamageMultiplier} ADM4={props.weapon.attack4DamageMultiplier} ADM5={props.weapon.attack5DamageMultiplier}/>
          </td>
          <td> 
              <WeaponAttackSpeed attack1Speed={props.weapon.attack1Speed} attack2Speed={props.weapon.attack2Speed} attack3Speed={props.weapon.attack3Speed} attack4Speed={props.weapon.attack4Speed} attack5Speed={props.weapon.attack5Speed} />
          </td>
          <td> {props.weapon.sweetSpot} </td>
          <td> {props.weapon.reach} </td>
          <td> {props.weapon.actionMovementSpeed} </td>
          <td> <a href="https://darkanddarker.wiki.spellsandguns.com/Arming_Sword#Unique" title="Arming Sword">Kuma's Claw</a></td>
      </tr>
  )

}