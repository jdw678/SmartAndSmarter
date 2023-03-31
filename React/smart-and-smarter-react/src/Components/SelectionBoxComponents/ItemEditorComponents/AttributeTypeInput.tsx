import React, { useState } from 'react'
import { AttributeType } from '../../PureTSX/WeaponAndArmorTypes'

type Props = {
    attributeType: AttributeType,
    setAttributeType: (AttributeType: AttributeType) => void
}

export default function AttributeTypeInput(props: Props) {

    const [hoverable, setHoverable] = useState(false);

    const attributeAsString = parseAttributeTypeAsString(props.attributeType);

    const attributeTypeKeys = (Object.keys(AttributeType) as Array<keyof typeof AttributeType>);

    function parseAttributeTypeAsString(attribute: string): string
    {
        var split: string[] = attribute.split(/(?=[A-Z])/);
        var str : string = "";
        split.forEach((arrayStr: string) => {
            str += arrayStr + " ";
        });

        return str;
    }


  return (
    <div className='AttributeTypeWrapper'>
        <div className='AttributeTypeButton' onMouseEnter={() => setHoverable(true)} onMouseLeave={() => setHoverable(false)}>
            <h1 className="GearFont DarkMode AttributeTypeButtonText">{attributeAsString}</h1>
            <hr  style={{display: hoverable ? '' : 'none', border:'solid 1px var(--button-color)', borderTop:'solid 1px black', width:'88%', marginLeft:'6%'}}/>
            <ul className='AttributeTypeList' style={{display: hoverable ? 'inherit' : 'none'}}>
            {attributeTypeKeys.map((key, index) =>
            {
                return(
                    <li 
                        className='AttributeTypeLI' onClick={() => {props.setAttributeType(AttributeType[key]); setHoverable(false)}}
                        style={{paddingBottom: (index == attributeTypeKeys.length - 1 ? '10px' : '0')}}
                        
                    >
                        {parseAttributeTypeAsString(key)}
                    </li>
                )
            })}
            </ul>
        </div>

    </div>
  )
}