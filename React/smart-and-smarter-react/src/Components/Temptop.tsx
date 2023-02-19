import React from 'react'
import invt from '../images/invt.png'
import ItemBox from './ItemBox';
type Props = {}

function AreaClicked(name: string)
{
  console.log(name);  
}


export default function Temptop({}: Props) {
  return (
  <div>
    
    
    <img src={invt} alt="Workplace" useMap="#workmap" style={{margin:'1%', float: 'left'}}/>
    <map name="workmap">
    <area shape="rect" coords="25,48,105,144" alt="1wp" onClick={() => AreaClicked("Weapon1")}/>
    <area shape="rect" coords="290,172,333,250" alt="Phone" onClick={() => AreaClicked("Phone")}/>
    <area shape="rect" coords="337,300,44" alt="Coffee" onClick={() => AreaClicked("Coffee")}/>
    </map>
    <ItemBox/>
  </div>
  )
}
