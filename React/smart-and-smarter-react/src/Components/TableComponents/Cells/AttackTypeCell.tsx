import React from 'react'
import { AttackType } from '../../PureTSX/WeaponAndArmorTypes';

type Props = {
    type1: AttackType,
    type2?: AttackType,
    type3?: AttackType,
    type4?: AttackType,
    type5?: AttackType,

}

export default function AttackTypeCell(props: Props) {
    function BuildStrings()
    {
        var str = props.type1.toString();

        function AddString(strToAdd: string)
        {
            str += "/" + strToAdd;
        }

        if(props.type2) AddString(props.type2.toString());
        if(props.type3) AddString(props.type3.toString());
        if(props.type4) AddString(props.type4.toString());
        if(props.type5) AddString(props.type5.toString());
        return str;
    }

    const str = BuildStrings();
  return (
    <>
        {str}
    </>
  )
}