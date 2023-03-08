
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

export type Bow = {
    id: bigint,
    name: string,
    weaponType: WeaponType,
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
    barbarianCanUse: boolean,
    fighterCanUse: boolean,
    clericCanUse: boolean,
    rangerCanUse: boolean,
    wizardCanUse: boolean,
    rogueCanUse: boolean,
    movementSpeedWhileEquiped?: number,
    actionMovementSpeed?: string,
    uniqueName?: string,
    uniqueLink?: string,
    hand?: Hand,
    specificWeaponType: SpecificWeaponType
    
    quiverSize?: bigint,
    reloadSpeed?: number,
    attack1Speed: number,
    attack1Type: AttackType,
    attack1DamageMultiplier: number
}

export type Sheild = {
    id: bigint,
    name: string,
    weaponType: WeaponType,
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
    barbarianCanUse: boolean,
    fighterCanUse: boolean,
    clericCanUse: boolean,
    rangerCanUse: boolean,
    wizardCanUse: boolean,
    rogueCanUse: boolean,
    movementSpeedWhileEquiped?: number,
    actionMovementSpeed?: string,
    uniqueName?: string,
    uniqueLink?: string,
    hand?: Hand,
    specificWeaponType: SpecificWeaponType
    
    reach?: string,
    attack1Type: AttackType,
    attack2Type?: AttackType,
}

export type MeleeWeapon = {
    id: bigint,
    name: string,
    weaponType: WeaponType,
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
    barbarianCanUse: boolean,
    fighterCanUse: boolean,
    clericCanUse: boolean,
    rangerCanUse: boolean,
    wizardCanUse: boolean,
    rogueCanUse: boolean,
    movementSpeedWhileEquiped?: number,
    actionMovementSpeed?: string,
    uniqueName?: string,
    uniqueLink?: string,
    hand?: Hand,
    specificWeaponType: SpecificWeaponType
    
    reach?: string,
    sweetSpot?: string,
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
}

export type MagicWeapon = {
    id: bigint,
    name: string,
    weaponType: WeaponType,
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
    barbarianCanUse: boolean,
    fighterCanUse: boolean,
    clericCanUse: boolean,
    rangerCanUse: boolean,
    wizardCanUse: boolean,
    rogueCanUse: boolean,
    movementSpeedWhileEquiped?: number,
    actionMovementSpeed?: string,
    uniqueName?: string,
    uniqueLink?: string,
    hand?: Hand,
    specificWeaponType: SpecificWeaponType

    
    attack1Speed: number,
    attack2Speed?: number,
    attack3Speed?: number,
    attack1Type: AttackType,
    attack2Type?: AttackType,
    attack3Type?: AttackType,
    attack1DamageMultiplier: number,
    attack2DamageMultiplier?: number,
    attack3DamageMultiplier?: number,
    sweetSpot?: string,
    reach: string
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

export type MeleeWeaponList = MeleeWeapon[];
export type MagicWeaponList = MagicWeapon[];
export type SheildList = Sheild[];
export type BowList = Bow[];

export type WeaponList = {
    MeleeWeapons: MeleeWeaponList,
    MagicWeapons: MagicWeaponList,
    Sheilds: SheildList,
    Bows: BowList
}

export type ArmorList = Armor[];


export enum ItemClass {
    Weapon,
    Armor
}

export enum WeaponType {
    Bow,
    Magic,
    Melee,
    Sheild
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