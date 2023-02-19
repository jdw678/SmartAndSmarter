import React from 'react'


type Props = {}




export default function ItemBox({}: Props) {
  return (

<div className="itembox" style={{margin:'1%',  backgroundColor: 'rgba(0,0,0,.5)', border:'solid', borderColor:'#000000', width: '85%', maxWidth: '400px', float: 'left'}}>
  <div className="itemboxheader">
    <div style={{float: 'left'}}>
      <div className="iconbox" style={{display: 'inline-block', maxWidth: 'initial'}}><div className="rarity rounded relative"><a href="https://darkanddarker.wiki.spellsandguns.com/images/thumb/b/b6/Barbarian.png/96px-Barbarian.png" className="image"><img alt="Barbarian.png" src="https://darkanddarker.wiki.spellsandguns.com/images/thumb/b/b6/Barbarian.png/96px-Barbarian.png" decoding="async" width={96} height={105} srcSet="https://darkanddarker.wiki.spellsandguns.com/images/thumb/b/b6/Barbarian.png/96px-Barbarian.png 1.5x" data-file-width={138} data-file-height={151} /></a></div></div>
    </div>
    <div style={{width: '60%', maxWidth: '280px', marginLeft: '15px', height: '100px', justifyContent: 'space-between!important', display: 'flex', flexDirection: 'column', float: 'left', marginTop: '0px'}}>
      <div className="bold" style={{marginTop: '0px!important', fontSize: '22px'}}>Barbarian</div>
      <div style={{width: '100%', justifyContent: 'space-between!important', display: 'flex', flexDirection: 'row', fontSize: '17px'}}>
        <div style={{color: 'rgb(221,149,42)'}}>'The Brawny Warrior'</div>
      </div>
    </div>
  </div>
  <div className="line" />
  <div className="stats-container" style={{clear: 'both', padding: '10px 0'}}>
    <div style={{float: 'left', width: '30%', fontWeight: 'bold', color: 'rgb(221,149,42)'}}>Strength</div>
    <div style={{float: 'right', width: '20%', color: 'rgb(132,176,5)', textAlignLast: 'right', fontWeight: 'bold'}}>30</div>
  </div>
  <div className="stats-container" style={{clear: 'both', padding: '10px 0'}}>
    <div style={{float: 'left', width: '30%', fontWeight: 'bold', color: 'rgb(221,149,42)'}}>Agility</div>
    <div style={{float: 'right', width: '20%', color: 'rgb(132,176,5)', textAlignLast: 'right', fontWeight: 'bold'}}>11</div>
  </div>
  <div className="stats-container" style={{clear: 'both', padding: '10px 0'}}>
    <div style={{float: 'left', width: '30%', fontWeight: 'bold', color: 'rgb(221,149,42)'}}>Will</div>
    <div style={{float: 'right', width: '20%', color: 'rgb(132,176,5)', textAlignLast: 'right', fontWeight: 'bold'}}>18</div>
  </div>
  <div className="stats-container" style={{clear: 'both', padding: '10px 0'}}>
    <div style={{float: 'left', width: '30%', fontWeight: 'bold', color: 'rgb(221,149,42)'}}>Knowledge</div>
    <div style={{float: 'right', width: '20%', color: 'rgb(132,176,5)', textAlignLast: 'right', fontWeight: 'bold'}}>6</div>
  </div>
  <div className="stats-container" style={{clear: 'both', padding: '10px 0'}}>
    <div style={{float: 'left', width: '30%', fontWeight: 'bold', color: 'rgb(221,149,42)'}}>Resourcefulness</div>
    <div style={{float: 'right', width: '20%', color: 'rgb(132,176,5)', textAlignLast: 'right', fontWeight: 'bold'}}>10</div>
  </div>
  <br /><div className="line" />
  <div className="stats-container" style={{clear: 'both', padding: '0 0 -75px 0'}}>
    <div style={{float: 'left', width: '30%', fontWeight: 'bold', color: 'rgb(221,149,42)'}}>Health</div>
    <div style={{float: 'right', width: '20%', textAlignLast: 'right', fontWeight: 'bold'}}>130 / 130</div>
  </div>
  <div className="stats-container" style={{clear: 'both', padding: '10px 0 -75px 0'}}>
    <div style={{float: 'left', width: '30%', fontWeight: 'bold', color: 'rgb(221,149,42)'}}>Weight Limit</div>
    <div style={{float: 'right', width: '20%', textAlignLast: 'right', fontWeight: 'bold'}}>0 / 0</div>
  </div>
  <div className="stats-container" style={{clear: 'both', padding: '10px 0 -75px 0'}}>
    <div style={{float: 'left', width: '30%', fontWeight: 'bold', color: 'rgb(221,149,42)'}}>Spell Memory</div>
    <div style={{float: 'right', width: '20%', textAlignLast: 'right', fontWeight: 'bold'}}>0 / 6</div>
  </div>
  <div className="stats-container" style={{clear: 'both', padding: '10px 0 -75px 0'}}>
    <div style={{float: 'left', width: '40%', fontWeight: 'bold', color: 'rgb(221,149,42)'}}>Utility Effectiveness</div>
    <div style={{float: 'right', width: '20%', textAlignLast: 'right', fontWeight: 'bold'}}>0</div>
  </div>
</div>)}
