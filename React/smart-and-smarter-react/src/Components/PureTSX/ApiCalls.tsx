import React from 'react'
import axios, { AxiosResponse } from 'axios'
import { config } from 'process';
import Bows from '../../HardData/Bows.json';
import Sheilds from '../../HardData/Sheilds.json';
import MeleeWeapons from '../../HardData/MeleeWeapons.json';
import MagicWeapons from '../../HardData/MagicWeapons.json';
import Armors from '../../HardData/Armors.json';
import { ArmorList, BowList, MagicWeaponList, MeleeWeaponList, SheildList, WeaponList } from './WeaponAndArmorTypes';

export class ApiCalls {

    url = "https://localhost:7020/";

    //get all of the weapons
    public async GetAllWeapons(): Promise<WeaponList>
    {   
        const meleeWeapons = await axios.get<MeleeWeaponList>(this.url + "MeleeWeapon/GetAllMeleeWeapons");
        const magicWeapons = await axios.get<MagicWeaponList>(this.url + "MagicWeapon/GetAllMagicWeapons");
        const sheilds = await axios.get<SheildList>(this.url + "Sheild/GetAllSheilds");
        const bows = await axios.get<BowList>(this.url + "Bow/GetAllBows");
        

        return {MeleeWeapons: meleeWeapons.data, MagicWeapons: magicWeapons.data, Sheilds: sheilds.data, Bows: bows.data}
    }

    public async GetAllArmors(): Promise<AxiosResponse>
    {   
        return await axios.get<WeaponList>(this.url + "Armor/GetAllArmors")
        
    }

    public GetAllWeaponsNoDB() : WeaponList
    {

        var bows: BowList = JSON.parse(JSON.stringify(Bows));
        var sheilds: SheildList =  JSON.parse(JSON.stringify(Sheilds));
        var magicWeapons: MagicWeaponList =  JSON.parse(JSON.stringify(MagicWeapons));
        var meleeWeapons: MeleeWeaponList =  JSON.parse(JSON.stringify(MeleeWeapons));


        return {Bows: bows, MeleeWeapons: meleeWeapons, Sheilds: sheilds, MagicWeapons: magicWeapons}
    }

    public GetAllArmorsNoDB() : ArmorList
    {
        return JSON.parse(JSON.stringify(Armors));
    }
}
