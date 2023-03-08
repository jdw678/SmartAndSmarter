import React from 'react'
import { MeleeWeapon, MeleeWeaponList, SpecificWeaponType } from '../../PureTSX/WeaponAndArmorTypes'
import MeleeWeaponRecord from '../Records/MeleeWeaponRecord'

type Props = {
    weaponList: MeleeWeaponList}

export default function MeleeTable(props: Props) {
  return (
    <table cellSpacing={0}  className="wikitable" key="MeleeWeapons">
        <thead>
            <tr>
                <th className="Th" tabIndex={0} title="Sort ascending">Name</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Class Name</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Attributes</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Damage</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Movement Speed</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Combo</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Attack Speed</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Sweet/Sour Spot</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Weapon Reach/Hitbox</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Action Movement Speed</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Unique</th>
            </tr>
        </thead>
        <tbody>
        {
        //map all swords
        props.weaponList?.map((weapon: MeleeWeapon) => {

            return <MeleeWeaponRecord weapon={weapon} key={weapon.name}/>
        })}                    
        </tbody>
    </table>
  )
}