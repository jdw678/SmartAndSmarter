import React, { useState } from 'react'
import { Rarity } from '../../PureTSX/WeaponAndArmorTypes'

type Props = {
    attributeCount: number,
    rarity: Rarity
}

export default function Attribute(props: Props) {
    const [input, setInput] = useState<number>(22);

    
  function getColorFromRarity()
  {
    return "var(--" + props.rarity.toLowerCase() + ")";
  }

  return (
    <h1 className='GearFont Attribute' style={{marginLeft: '10px', justifyItems:'center', boxShadow:'0 0px 4px 4px ' + getColorFromRarity()}} key={"Attribute " + props.attributeCount}>Attribute {props.attributeCount + 1}:
      <input
        className='AttributeInput'
        onChange={(event) => setInput(Number(event.target.value.replace(/\D/g,'')))}
        key={"Attribute Input " + props.attributeCount} value={input.toString() == 'NaN' ? 0 : input}
      />
    </h1>
  )
}