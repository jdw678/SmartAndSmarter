import React from 'react'
import axios, { AxiosResponse } from 'axios'
import { config } from 'process';
import Weapons from '../../HardData/Weapons.json';

export enum AttackType {
    Slash = "Slash",
    Pierce = "Pierce",
    Blunt = "Blunt",
    Bow = "Bow",
    Block = "Block",
    GroundDeployment = "GroundDeployment"
}

export enum Hand {
    Main = "Main",
    Off = "Off",
    Both = "Both"
}

export type Weapon = {


    id: bigint,
    name: string,
    imageLocation: string,
    blackDamageMin: number,
    blackDamageMax: number,
    greyDamageMin: number,
    greyDamageMax: number,
    whiteDamageMin: number,
    whiteDamageMax: number,
    greenDamageMin: number,
    greenDamageMax: number,
    blueDamageMin: number,
    blueDamageMax: number,
    purpleDamageMin: number,
    purpleDamageMax: number,
    orangeDamageMin: number,
    orangeDamageMax: number,
    goldDamageMin: number,
    goldDamageMax: number,
    attack1Speed: number,
    attack2Speed?: number,
    attack3Speed?: number,
    attack4Speed?: number,
    attack5Speed?: number,
    attack1Type: AttackType,
    attack2Type?: AttackType,
    attack3Type?: AttackType,
    attack4Type?: AttackType,
    attack5Type?: AttackType,
    attack1DamageMultiplier: number,
    attack2DamageMultiplier?: number,
    attack3DamageMultiplier?: number,
    attack4DamageMultiplier?: number,
    attack5DamageMultiplier?: number,
    barbarianCanUse: boolean,
    fighterCanUse: boolean,
    clericCanUse: boolean,
    rangerCanUse: boolean,
    wizardCanUse: boolean,
    rogueCanUse: boolean,
    movementSpeedWhileEquiped?: number,
    actionMovementSpeed?: string,
    reach?: string,
    uniqueName?: string,
    uniqueLink?: string,
    hand?: Hand,
    sweetSpot?: string,
    clipSize?: bigint,
    reloadSpeed?: number
}

export type WeaponList = Weapon[];

export class ApiCalls {

    url = "https://localhost:7020/";
    useDatabase = false;

    //get all of the weapons
    public async GetAllWeapons(): Promise<AxiosResponse>
    {   
        return await axios.get<WeaponList>(this.url + "Weapon/GetAllWeapons")
        
    }

    public GetAllWeaponsNoDB() : WeaponList
    {
        return JSON.parse(JSON.stringify(Weapons));
    }
}
