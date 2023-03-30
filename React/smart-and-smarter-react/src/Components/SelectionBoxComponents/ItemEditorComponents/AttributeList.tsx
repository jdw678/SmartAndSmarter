import React from 'react'
import { Attribute, Rarity } from '../../PureTSX/WeaponAndArmorTypes';
import AttributeItem from './AttributeItem';

type Props = {
    attributes: Attribute[],
    updateAttributes: (attributes: Attribute[]) => void
}

export default function AttributeList(props: Props) {

    
  const attributes = []
  const rarities = [Rarity.Green, Rarity.Blue, Rarity.Purple, Rarity.Orange, Rarity.Gold]

  //let the mapped attributes pass their index (attributeCount) and update their values
  function updateAttribute(attribute: Attribute, index: number)
  {
    var attributes = props.attributes;
    attributes[index] = attribute;
    props.updateAttributes(attributes)
  }

  for(let i = 0; i < props.attributes.length; i++)
  {
    attributes.push(
      <AttributeItem attributeCount={i} key={"Attribute Component " + i} rarity={rarities[i]} attribute={props.attributes[i]} updateAttribute={updateAttribute}/>
      );
  }
  return (
    <>{attributes}</>
  )
  
}