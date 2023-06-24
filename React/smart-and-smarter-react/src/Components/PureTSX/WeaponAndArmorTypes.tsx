import { json } from "stream/consumers"

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
    weaponType: WeaponType,
    specificWeaponType: SpecificWeaponType,
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
    quiverSize?: bigint,
    reloadSpeed?: number,
    slowDownOnHit?: string
}

export type WeaponList = {
    meleeWeapons: Weapon[],
    magicWeapons: Weapon[],
    shields: Weapon[],
    bows: Weapon[]
}

export type UserItem = {
    item: Weapon | Armor,
    rarity: Rarity,
    attributes: Attribute[],
    damage: number
}

export type Armor = {
    id: bigint,
    name: string,
    imageLocation: string,
    blackArmorMin: number,
    blackArmorMax: number,
    greyArmorMin: number,
    greyArmorMax: number,
    whiteArmorMin: number,
    whiteArmorMax: number,
    greenArmorMin: number,
    greenArmorMax: number,
    blueArmorMin: number,
    blueArmorMax: number,
    purpleArmorMin: number,
    purpleArmorMax: number,
    orangeArmorMin: number,
    orangeArmorMax: number,
    goldArmorMin: number,
    goldArmorMax: number,
    barbarianCanUse: boolean,
    fighterCanUse: boolean,
    clericCanUse: boolean,
    rangerCanUse: boolean,
    wizardCanUse: boolean,
    rogueCanUse: boolean,
    movementSpeed?: number,
    stats: string,
    armorType: ArmorType
}

export type ArmorList = Armor[];


export enum ItemClass {
    Weapon = "Weapon",
    Armor = "Armor"
}

export enum WeaponType {
    Bow = "Bow",
    Magic = "Magic",
    Melee = "Melee",
    Shield = "Shield"
}

//all possible gear types
export enum ArmorType {
    Chest = "Chest",
    Feet = "Feet",
    Hands = "Hands",
    Head = "Head",
    Legs = "Legs",
    Neck = "Neck",
    Ring = "Ring"
}

//all possible rarities
export enum Rarity
{
    Black = "Junk",
    Grey = "Poor",
    White = "Common",
    Green = "Uncommon",
    Blue = "Rare",
    Purple = "Epic",
    Orange = "Legendary",
    Gold = "Unique"
}

//helps to break apart items into more descriptive tables
export enum SpecificWeaponType
{
    Sword = "Sword",
    Mace = "Mace",
    Dagger = "Dagger",
    Polearm = "Polearm",
    Axe = "Axe",
    Bow = "Bow",
    Crossbow = "Crossbow",
    Magical = "Magical",
    Shield = "Shield"
}

export type Attribute = {
    value: number,
    valueType: AttributeValueType,
    type: AttributeType
}

export enum AttributeType
{
    Strength = "Strength",
    Agility = "Agility",
    Will = "Will",
    Knowledge = "Knowledge",
    Resourcefulness = "Resourcefulness",
    PhysicalDamageReduction = "PhysicalDamageReduction",
    WeaponDamage = "WeaponDamage",
    MagicDamage = "MagicDamage"
}

export enum AttributeValueType
{
    Percent = "Percent",
    True = "True",
    Default = "Default"
}

export class GenericClass {
    strength: number;
    will: number;
    knowledge: number;
    agility: number;
    resourcefulness: number;

    constructor(strength: number, will: number, knowledge: number, agility: number, resourcefulness: number)
    {
        this.strength = strength;
        this.agility = agility;
        this.will = will;
        this.knowledge = knowledge;
        this.resourcefulness = resourcefulness;
    }

    //based on https://darkanddarker.wiki.spellsandguns.com/Stats#Strength
    CalculateStrength(additionalStrength?: number, additionalStrengthMultiplier?: number) : number
    {
        if(!additionalStrength) additionalStrength = 0;
        if(!additionalStrengthMultiplier) additionalStrengthMultiplier = 1;
        if(additionalStrengthMultiplier) additionalStrengthMultiplier = 1 + additionalStrengthMultiplier / 100;

        var strength = Math.round((this.strength + additionalStrength) * additionalStrengthMultiplier);
        var calculatedStrength = -.8;

        if(strength > 5)
            calculatedStrength += (5 * 10) / 100;
        else return calculatedStrength + (strength * 10) / 100;

        if(strength > 7)
            calculatedStrength += (2 * 5) / 100
        else return calculatedStrength + (strength - 5) * 5 / 100;

        if(strength > 11)
            calculatedStrength += (4 * 3) / 100;
        else return calculatedStrength + (strength - 7) * 3 / 100;

        if(strength > 15)
            calculatedStrength += (4 * 2) / 100;
        else return calculatedStrength + (strength - 11) * 2 / 100;

        if(strength > 50)
            calculatedStrength += strength * 1 / 100;
        else return calculatedStrength + (strength - 15) * 1 / 100;

        return calculatedStrength + (strength - 50) * .5 / 100;

    }

    //based on https://darkanddarker.wiki.spellsandguns.com/Stats#Will
    CalculateMagicPower(additionalMagicPower?: number, additionalMagicPowerMultiplier?: number) : number
    {
        if(!additionalMagicPower) additionalMagicPower = 0;
        if(!additionalMagicPowerMultiplier) additionalMagicPowerMultiplier = 0;
        else additionalMagicPowerMultiplier = 1 + additionalMagicPowerMultiplier / 100;

        var power = Math.round((this.will + additionalMagicPower) * additionalMagicPowerMultiplier);
        var calculatedPower = -.9;

        //0 power for first point, so skip it
        if(power > 5)
            calculatedPower += (4 * 10) / 100;
        else return (power - 1) * 10 / 100;

        if(power > 15)
            calculatedPower += (10 * 5) / 100;
        else return calculatedPower + (power - 5) * 5 / 100; 

        if(power > 25)
            calculatedPower += (10 * 3) / 100;
        else return calculatedPower + (power - 15) * 3 / 100;

        if(power > 40)
            calculatedPower += (15 * 2) / 100;
        else return calculatedPower + (power - 25) * 2 / 100;

        if(power > 50)
            calculatedPower += (10 * 1) / 100;
        else return calculatedPower + (power - 40) * 1 / 100;

        return calculatedPower + (power - 50) * .5 / 100;
    }
}

export const Classes =
{
    barbarian: new GenericClass(30, 18, 6, 11, 10),
    cleric: new GenericClass(13, 30, 12, 12, 8),
    fighter: new GenericClass(15, 15, 15, 15, 15),
    ranger: new GenericClass(10, 10, 10, 20, 25),
    rogue: new GenericClass(8, 5, 12, 35, 15),
    wizard: new GenericClass(5, 25, 20, 20, 5)
}

export type DamageCalculationParams = {
    
    class: GenericClass,
    powerType: "strength" | "magic",
    baseWeaponDamage: number,
    weaponDamage?: number,
    weaponDamagePercent?: number,
    damage?: number,
    damagePercent?: number,
    strength?: number,
    strengthPercent?: number,
    magicPower?: number
    magicPowerPercent?: number,
    trueDamage?: number,
    trueDamagePercent?: number
}

//power is either Strength or Magic power
//the calculation is base damage * strength multiplier
//base damage = sum(all damages) * sum(all damage multipliers)
export function damageCalculation(params: DamageCalculationParams) : number
{
    if(!params.damage) params.damage = 0;
    if(!params.weaponDamage) params.weaponDamage = 0;
    if(!params.strength) params.strength = 0;
    if(!params.damagePercent) params.damagePercent = 0;
    if(!params.weaponDamagePercent) params.weaponDamagePercent = 0;
    if(!params.strengthPercent) params.strengthPercent = 0;
    if(!params.magicPowerPercent) params.magicPowerPercent = 0;
    if(!params.trueDamage) params.trueDamage = 0;
    if(!params.trueDamagePercent) params.trueDamagePercent = 0;

    var baseDamage = (params.baseWeaponDamage + params.weaponDamage + params.damage);
    var baseDamageMultiplier = 1 + (params.weaponDamagePercent + params.damagePercent) / 100;
    var strengthMultiplier = (params.powerType == "strength" ?
                            params.class.CalculateStrength(params.strength, params.strengthPercent)
                            : params.class.CalculateMagicPower(params.magicPower, params.magicPowerPercent)
                            )
    var damage = (baseDamage * baseDamageMultiplier);
    damage *= strengthMultiplier;
    damage += params.trueDamage;
    damage *= params.trueDamagePercent;

    return damage;
}