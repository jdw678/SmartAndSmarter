import React from 'react'
import { Rarity } from '../../PureTSX/WeaponAndArmorTypes';
import Attribute from './Attribute';

type Props = {
    attributeCount: number
}

export default function AttributeList(props: Props) {

    const attributes = []
    const rarities = [Rarity.Green, Rarity.Blue, Rarity.Purple, Rarity.Orange, Rarity.Gold]

    for(let i = 0; i < props.attributeCount; i++)
    {
      attributes.push(
        <Attribute attributeCount={i} key={"Attribute Component " + i} rarity={rarities[i]}/>
        );
    }
    return (
      <>{attributes}</>
    )
  
}