import React from 'react'
import axios, { AxiosResponse } from 'axios'
import { config } from 'process';
import Weapons from '../../HardData/Weapons.json';
import Armors from '../../HardData/Armors.json';
import { ArmorList, Weapon, WeaponList } from './WeaponAndArmorTypes';

export class ApiCalls {

    url = "https://localhost:7020/";
    useDatabase = false;

    //get all of the weapons
    public async GetAllWeapons(): Promise<AxiosResponse>
    {   
        return await axios.get<WeaponList>(this.url + "Weapon/GetAllWeapons")
        
    }

    public GetAllWeaponsNoDB() : Weapon[]
    {
        return JSON.parse(JSON.stringify(Weapons));
    }

    public async GetAllArmors(): Promise<AxiosResponse>
    {   
        return await axios.get<ArmorList>(this.url + "Weapon/GetAllArmors")
        
    }

    public GetAllArmorsNoDB() : ArmorList
    {
        return JSON.parse(JSON.stringify(Armors));
    }
}
