import React from 'react'
import { WikiUrl } from '../../../App';
import { Bow, Hand, MagicWeapon, MeleeWeapon, Sheild } from '../../PureTSX/WeaponAndArmorTypes';

type Props = {
    weapon: Bow | Sheild | MeleeWeapon | MagicWeapon
}

export default function ImageCell(props: Props) {

    function Capitalize(str: string | undefined)
    {
        if(str == null) return;
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    

  return (
    <div>
        <div>
            <a href={WikiUrl + props.weapon.name} title={props.weapon.name}>
                <img alt={props.weapon.name} src={props.weapon.imageLocation} decoding="async" srcSet={props.weapon.imageLocation + " 1.5x"} data-file-width="90" data-file-height="270" />
            </a>
        </div>
        <br />
        <a href={WikiUrl + props.weapon.name} title={props.weapon.name}>
            <strong>{props.weapon.name}
            <br />
            {props.weapon.hand ?
                props.weapon.hand == Hand.Both ?
                    "(Two-Handed)"
                    : "(" + Capitalize(props.weapon.hand?.toString()) + "-Hand)"
                : null}
            </strong>
        </a>
    </div>
  )
}