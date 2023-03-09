import React from 'react'
import { Weapon } from '../../PureTSX/WeaponAndArmorTypes'
import SheildRecord from '../Records/ShieldRecord'

type Props = {
    weaponList: Weapon[]
}

export default function ShieldTable(props: Props) {
  return (
    <table cellSpacing={0}  className="wikitable" key="Sheilds">
                <thead>
                    <tr>
                        <th className="Th" tabIndex={0} title="Sort ascending">Name</th>
                        <th className="Th" tabIndex={0} title="Sort ascending">Class Name</th>
                        <th className="Th" tabIndex={0} title="Sort ascending">Attributes</th>
                        <th className="Th" tabIndex={0} title="Sort ascending">Armor Rating</th>
                        <th className="Th" tabIndex={0} title="Sort ascending">Movement Speed</th>
                        <th className="Th" tabIndex={0} title="Sort ascending">Combo</th>
                        <th className="Th" tabIndex={0} title="Sort ascending">Weapon Reach/Hitbox</th>
                        <th className="Th" tabIndex={0} title="Sort ascending">Action Movement Speed</th>
                        <th className="Th" tabIndex={0} title="Sort ascending">Unique</th>
                    </tr>
                </thead>
                <tbody>
                {props.weaponList?.map((weapon: Weapon) => {
                    return <SheildRecord weapon={weapon} key={weapon.name}/>
                })}                    
                </tbody>
            </table>

  )
}