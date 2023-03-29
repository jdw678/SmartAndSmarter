import React from 'react'
import Fighter from '../images/presskit/artworks/c_m_fighter.png';
import Background from '../images/presskit/artworks/dungeon_outside_draft_11.png';

type Props = {}

export default function HomePage({}: Props) {
  return (
    <div>
        <div style={{height: '100vh', width:'20vw', position:'absolute', top:'0', left:'0', border:'solid', overflow:'hidden', backgroundImage:'url(' + Background + ')', background:'no-repeat'}}>
            <h1>Fighter</h1>
            <hr />
            <img src={Fighter} style={{width:'900px', position:'absolute', left:'-500px', top:'100px'}}/>
        </div>
    </div>
  )
}