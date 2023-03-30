import React, { useState } from 'react'
import { Attribute, Rarity } from '../../PureTSX/WeaponAndArmorTypes'

type Props = {
    attributeCount: number,
    rarity: Rarity,
    attribute: Attribute,
    updateAttribute: (attribute: Attribute, index: number) => void
}

export default function AttributeItem(props: Props) {
    const [input, setInput] = useState<number>(props.attribute.value);
    const [inputAsStr, setInputAsStr] = useState<string>(props.attribute.value.toString());

    
  function getColorFromRarity()
  {
    return "var(--" + props.rarity.toLowerCase() + ")";
  }

  function updateInput(input: string)
  {
    setInput(Number(input));
    setInputAsStr(input);
    props.updateAttribute({...props.attribute, value: Number(input)}, props.attributeCount);
  }

  return (
    <h1 className='GearFont Attribute' style={{marginLeft: '10px', justifyItems:'center', boxShadow:'0 0px 4px 4px ' + getColorFromRarity()}} key={"Attribute " + props.attributeCount}>Attribute {props.attributeCount + 1}:
      <input
        className='AttributeInput'
        type='number'
        step='.1'
        onChange={(event) => updateInput(event.target.value)}
        onKeyDown={(e) => {if(["e", "E", "+", "-"].includes(e.key)) e.preventDefault()}}
        key={"Attribute Input " + props.attributeCount} value={inputAsStr}
      />
    </h1>
  )
}