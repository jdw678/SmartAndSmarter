import React from 'react'
import { AttackType } from '../PureTSX/ApiCalls';

type Props = {
    type1: AttackType,
    type2?: AttackType,
    type3?: AttackType,
    type4?: AttackType,
    type5?: AttackType,

}

export default function WeaponAttackType(props: Props) {
    function BuildStrings()
    {
        var strings: string[] = [];

        strings.push(props.type1.toString());

        if(props.type2) strings.push(props.type2.toString());
        if(props.type3) strings.push(props.type3.toString());
        if(props.type4) strings.push(props.type4.toString());
        if(props.type5) strings.push(props.type5.toString());
        
        return strings;
    }

    const strings = BuildStrings();
  return (
    <>
        {strings[0]}
        {
            strings.map((str, index) =>
            {
                if(index !== 0)
                    return(
                        <>/{str}</>
                    )
            })
        }
    </>
  )
}