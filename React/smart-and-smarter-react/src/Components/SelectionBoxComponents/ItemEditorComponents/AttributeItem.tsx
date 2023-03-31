import React, { useState } from 'react'
import { AttributeType, Attribute, Rarity, AttributeValueType } from '../../PureTSX/WeaponAndArmorTypes'
import AttributeTypeInput from './AttributeTypeInput';
import AttributeValueTypeInput from './AttributeValueTypeInput';

type Props = {
    attributeCount: number,
    rarity: Rarity,
    attribute: Attribute,
    updateAttribute: (attribute: Attribute, index: number) => void
}

export default function AttributeItem(props: Props) {
    const [input, setInput] = useState<number>(props.attribute.value);
    const [inputAsStr, setInputAsStr] = useState<string>(props.attribute.value.toString());
    const [attributeType, setAttributeType] = useState<AttributeType>(props.attribute.type);
    const [attributeValueType, setAttributeValueType] = useState<AttributeValueType>(props.attribute.valueType);

    
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

  function updateAttributeType(attributeType: AttributeType)
  {
    setAttributeType(attributeType);
    props.updateAttribute({...props.attribute, type: attributeType}, props.attributeCount);
  }

  function updateAttributeValueType(attributeValueType: AttributeValueType)
  {
    setAttributeValueType(attributeValueType);
    props.updateAttribute({...props.attribute, valueType: attributeValueType}, props.attributeCount);
  }

  return (
    <h1 className='GearFont Attribute' style={{marginLeft: '10px', justifyItems:'center', boxShadow:'0 0px 4px 4px ' + getColorFromRarity()}} key={"Attribute " + props.attributeCount}>
      <AttributeTypeInput setAttributeType={updateAttributeType} attributeType={attributeType}/>
      <input
        className='AttributeInput'
        type='number'
        step='.1'
        onChange={(event) => updateInput(event.target.value)}
        onKeyDown={(e) => {if(["e", "E", "+", "-"].includes(e.key)) e.preventDefault()}}
        key={"Attribute Input " + props.attributeCount} value={inputAsStr}
      />
      <AttributeValueTypeInput attributeValueType={attributeValueType} setAttributeValueType={updateAttributeValueType} />
    </h1>
  )
}