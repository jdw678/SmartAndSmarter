import React from 'react'
import { Weapon } from '../../PureTSX/WeaponAndArmorTypes'
import BowRecord from '../Records/BowRecord'

type Props = {
    weaponList: Weapon[]
}

export default function BowTable(props: Props) {
  return (
    <table cellSpacing={0}  className="wikitable" key="Bows">
        <thead>
            <tr>
                <th className="Th" tabIndex={0} title="Sort ascending">Name</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Class Name</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Attributes</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Damage</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Movement Speed</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Reload Speed</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Quiver Size</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Action Movement Speed</th>
                <th className="Th" tabIndex={0} title="Sort ascending">Unique</th>
            </tr>
        </thead>
        <tbody>
        {props.weaponList?.map((weapon: Weapon) => {
            return <BowRecord weapon={weapon} key={weapon.name}/>
        })}                    
        </tbody>
    </table>
  )
}