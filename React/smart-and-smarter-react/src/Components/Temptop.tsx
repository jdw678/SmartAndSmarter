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
    
    
    
    <ItemBox/>
  </div>
  )
}
