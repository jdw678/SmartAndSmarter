import React from 'react'
import '../CSS/THING_STYLE.css';

type Props = {
    rarity: string
}

function GetColor(rarity: string)
{
    if(rarity == "blue") return "rgb(0, 0, 155, .9)";
    if(rarity == 'red') return "#FF0000";
    return "FFFFFF";
}

export default function THING(props: Props) {
  return (
    <div style={{WebkitFilter: 'blur', filter: 'blur', marginLeft: '50%', marginTop: '10%'}}>
        <div style={{backgroundColor: GetColor("blue"), width: '10%'}}>
            <img className="Item-Img" style={{borderColor: GetColor(props.rarity)}} src="https://render.worldofwarcraft.com/us/icons/56/inv_plate_oribosdungeon_c_01_shoulder.jpg"/>
        </div>
    </div>
  )
}