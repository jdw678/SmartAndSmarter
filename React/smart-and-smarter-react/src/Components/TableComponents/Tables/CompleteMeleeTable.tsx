import React from 'react';
import { Type } from 'typescript';
import { MeleeWeapon, MeleeWeaponList, SpecificWeaponType } from '../../PureTSX/WeaponAndArmorTypes';
import MeleeWeaponRecord from '../Records/MeleeWeaponRecord';
import MeleeTable from './MeleeTable';

type Props = {
    weaponList: MeleeWeaponList
}

export default function CompleteMeleeTable(props: Props) {

    

   //split the melee weapons up into 5 tables: Axes, Swords, Maces, Daggers, and Polearms
  return (
    <>
    <h1>Swords</h1>
    <hr />
    <MeleeTable weaponList={props.weaponList.filter((wep: MeleeWeapon) =>
        {
            if(wep.specificWeaponType == SpecificWeaponType.Sword) return wep;
        })}/>

    <h1>Maces</h1>
    <hr />
    <MeleeTable weaponList={props.weaponList.filter((wep: MeleeWeapon) =>
        {
            if(wep.specificWeaponType == SpecificWeaponType.Mace) return wep;
        })}/>

    <h1>Axes</h1>
    <hr />
    <MeleeTable weaponList={props.weaponList.filter((wep: MeleeWeapon) =>
        {
            if(wep.specificWeaponType == SpecificWeaponType.Axe) return wep;
        })}/>

    <h1>Polearms</h1>
    <hr />
    <MeleeTable weaponList={props.weaponList.filter((wep: MeleeWeapon) =>
        {
            if(wep.specificWeaponType == SpecificWeaponType.Polearm) return wep;
        })}/>

    <h1>Daggers</h1>
    <hr />
    <MeleeTable weaponList={props.weaponList.filter((wep: MeleeWeapon) =>
        {
            if(wep.specificWeaponType == SpecificWeaponType.Dagger) return wep;
        })}/>
    </>
  )
}