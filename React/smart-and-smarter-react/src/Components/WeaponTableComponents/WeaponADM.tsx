import React from 'react'
import '../../CSS/WeaponTable.css';

type Props = {
    ADM1: number,
    ADM2?: number,
    ADM3?: number,
    ADM4?: number,
    ADM5?: number

}

export default function WeaponADM(props: Props) {

    function BuildStrings()
    {
        var strings: string[] = [];

        strings.push(props.ADM1.toString());

        if(props.ADM2) strings.push(props.ADM2.toString());
        if(props.ADM3) strings.push(props.ADM3.toString());
        if(props.ADM4) strings.push(props.ADM4.toString());
        if(props.ADM5) strings.push(props.ADM5.toString());


        
        return strings;
    }

    const strings = BuildStrings();
  return (
    <>
        {strings[0]}%
        {
            strings.map((str, index) =>
            {
                if(index !== 0)
                    return(
                        <>/{str}%</>
                    )
            })
        }
    </>
  )
}