import React from 'react'
import axios, { AxiosResponse } from 'axios'
import { config } from 'process';

export enum AttackType {
    Slash = "Slash",
    Pierce = "Pierce",
    Blunt = "Blunt"
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
    sweetSpot?: string
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

    public GetAllWeaponsNoDB() : Weapon
    {
        var weapon: Weapon = {
            id: BigInt(0),
            name: "Arming Sword",
            imageLocation: "https://darkanddarker.wiki.spellsandguns.com/images/thumb/b/b4/Arming_Sword_2.png/60px-Arming_Sword_2.png",
            blackDamageMin: 22,
            blackDamageMax:22,
            greyDamageMin: 25,
            greyDamageMax: 26,
            whiteDamageMin: 27,
            whiteDamageMax: 29,
            greenDamageMin: 29,
            greenDamageMax: 31,
            blueDamageMin: 31,
            blueDamageMax: 34,
            purpleDamageMin: 34,
            purpleDamageMax: 37,
            orangeDamageMin: 37,
            orangeDamageMax: 40,
            goldDamageMin: 40,
            goldDamageMax: 42,
            attack1Speed: 0.66,
            attack2Speed: 0.62,
            attack3Speed: 0.81,
            attack1Type: AttackType.Slash,
            attack2Type: AttackType.Slash,
            attack3Type: AttackType.Slash,
            attack1DamageMultiplier: 100,
            attack2DamageMultiplier: 100,
            attack3DamageMultiplier: 100,
            barbarianCanUse: false,
            fighterCanUse: true,
            clericCanUse: false,
            rangerCanUse: true,
            rogueCanUse: false,
            wizardCanUse: false,
            movementSpeedWhileEquiped: -20,
            actionMovementSpeed: "Attack: -25%",
            reach: "Height: 54.78 Width: 11.6",
            uniqueName: "Kuma's Claw",
            uniqueLink: "https://darkanddarker.wiki.spellsandguns.com/Arming_Sword#Unique",
            hand: Hand.Main,
            sweetSpot: "100%/90%/70%"
        }

        return weapon;
    }
}
