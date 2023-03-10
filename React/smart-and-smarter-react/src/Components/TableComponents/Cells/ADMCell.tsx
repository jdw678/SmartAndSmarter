import React from 'react'
import '../../../CSS/CompleteTable.css';

type Props = {
    ADM1: number,
    ADM2?: number,
    ADM3?: number,
    ADM4?: number,
    ADM5?: number

}

export default function ADMCell(props: Props) {

    function BuildStrings()
    {
        var str = props.ADM1.toString() + "%";

        function AddString(strToAdd: string)
        {
            str += "/" + strToAdd + "%";
        }

        if(props.ADM2) AddString(props.ADM2.toString());
        if(props.ADM3) AddString(props.ADM3.toString());
        if(props.ADM4) AddString(props.ADM4.toString());
        if(props.ADM5) AddString(props.ADM5.toString());
        return str;
    }

    const str = BuildStrings();
  return (
    <>
        {str}
    </>
  )
}