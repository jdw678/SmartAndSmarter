import React, { useState } from 'react'
import { Rarity } from '../../PureTSX/WeaponAndArmorTypes';
import '../../../CSS/ItemEditor.css';

type Props = {
    style?: React.CSSProperties,
    setAttributeCount: (attributeCount: number) => void
}

export default function RarityList(props: Props) {

  const [rarity, setRarity] = useState<Rarity>(Rarity.Black);
  const [hoverable, setHoverable] = useState<boolean>(false);


  function getColorFromRarity()
  {
    return "var(--" + rarity.toLowerCase() + ")";
  }

  function useLightMode() : boolean
  {
    if(rarity == Rarity.Black)
      return true;

    return false;
  }

  //update the rarity and set how many attributes are available on the weapon based on the rarity set
  function updateRarity(rarity: Rarity)
  {
    setRarity(rarity);
    setHoverable(false)
    switch(rarity)
    {
      case Rarity.Black:
        props.setAttributeCount(0);
        break;
      case Rarity.Grey:
        props.setAttributeCount(0);
        break;
      case Rarity.White:
        props.setAttributeCount(0);
        break;
      case Rarity.Green:
        props.setAttributeCount(1);
        break;
      case Rarity.Blue:
        props.setAttributeCount(2);
        break;
      case Rarity.Purple:
        props.setAttributeCount(3);
        break;
      case Rarity.Orange:
        props.setAttributeCount(4);
        break;
      case Rarity.Gold:
        props.setAttributeCount(5);
        break;
    }
  }
  return (
    <div style={props.style}>
      <div className='RarityMainContainer'>
        <h1 className='GearFont' style={{margin:'0'}}>Rarity:</h1>
        <div className='RarityDropDownButton ' style={{marginLeft:'30px', boxShadow:'0 0px 10px 6px ' + getColorFromRarity()}} onMouseEnter={() => setHoverable(true)} onMouseLeave={() => setHoverable(false)}>
          <h1 className={'GearFont ' + (useLightMode() ? 'LightMode' : 'DarkMode')} style={{color: getColorFromRarity(), textAlign:'center'}} key={rarity.length + " "}>{rarity}</h1>
          <ul className='RarityDropDownList' style={{display: hoverable ? 'inherit' : 'none', position: 'absolute'}}>
              <li className='LightMode' style={{color: 'var(--junk)'}} key='junk' onClick={() => updateRarity(Rarity.Black)}>Junk</li>
              <li className='DarkMode' style={{color: 'var(--poor)'}} key='poor'  onClick={() => updateRarity(Rarity.Grey)}>Poor</li>
              <li className='DarkMode' style={{color: 'var(--common)'}} key='common'  onClick={() => updateRarity(Rarity.White)}>Common</li>
              <li className='DarkMode' style={{color: 'var(--uncommon)'}} key='uncommon'  onClick={() => updateRarity(Rarity.Green)}>Uncommon</li>
              <li className='DarkMode' style={{color: 'var(--rare)'}} key='rare'  onClick={() => updateRarity(Rarity.Blue)}>Rare</li>
              <li className='DarkMode' style={{color: 'var(--epic)'}} key='epic'  onClick={() => updateRarity(Rarity.Purple)}>Epic</li>
              <li className='DarkMode' style={{color: 'var(--legendary)'}} key='legendary'  onClick={() => updateRarity(Rarity.Orange)}>Legendary</li>
              <li className='DarkMode' style={{color: 'var(--unique)'}} key='unique'  onClick={() => updateRarity(Rarity.Gold)}>Unique</li>

          </ul>
        </div>
      </div>
    </div>
  )
}