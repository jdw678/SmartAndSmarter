
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

//power is either Strength or Magic power
export function damageCalculation(baseWeaponDamage: number, additionalWeaponDamage: number, additionalDamage: number, power: number) : number
{
    return 999;
}