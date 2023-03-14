
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
    MeleeWeapons: Weapon[],
    MagicWeapons: Weapon[],
    Shields: Weapon[],
    Bows: Weapon[]
}



export type Armor = {
    id: bigint,
    name: string,
    imageLocation: string,
    blackArmourMin: number,
    blackArmourMax: number,
    greyArmourMin: number,
    greyArmourMax: number,
    whiteArmourMin: number,
    whiteArmourMax: number,
    greenArmourMin: number,
    greenArmourMax: number,
    blueArmourMin: number,
    blueArmourMax: number,
    purpleArmourMin: number,
    purpleArmourMax: number,
    orangeArmourMin: number,
    orangeArmourMax: number,
    goldArmourMin: number,
    goldArmourMax: number,
    barbarianCanUse: boolean,
    fighterCanUse: boolean,
    clericCanUse: boolean,
    rangerCanUse: boolean,
    wizardCanUse: boolean,
    rogueCanUse: boolean,
    movementSpeed?: number,
    stats: string
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
    Chest,
    Feet,
    Hands,
    Head,
    Legs,
    Neck,
    Ring
}

//all possible rarities
export enum Rarity
{
    Black,
    Grey,
    White,
    Green,
    Blue,
    Purple,
    Orange,
    Gold
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

