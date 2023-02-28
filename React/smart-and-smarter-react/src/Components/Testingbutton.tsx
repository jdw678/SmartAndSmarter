import React from 'react'
import '../CSS/SelectionBox.css'
import Item from '../images/Item.png'
import Weapon_1 from '../images/Weapon_1.png'
import Weapon_2 from '../images/Weapon_2.png'
import '../CSS/ItemBox.css';

type Props = {}

export default function testing1({}: Props) {
  return (
<div className="BoxBorder, parent" style={{height:'550px', margin: '1%', backgroundColor: 'rgba(0,0,0,.5)',border:'solid',borderColor:'#000000', width: '85%', maxWidth: '400px', float: 'left', padding:'16px',display:'block', textAlign:'center'}}>

<h2 className="heading-text">Item <span>Selection</span></h2>

    <div className='child1'> 
      <div className="container">

        <ul className="image-gallery">
            
             <button>
              <img src={Item} alt="1"style={{float:'left'}} />
              <div className="overlay"><span>Head</span></div>
            </button> 
             <button>
              <img src={Item} alt="2"style={{float:'left'}} />
              <div className="overlay"><span>Neck</span></div>
            </button> 
             <button>
              <img src={Item} alt="3" style={{float:'left'}}/>
              <div className="overlay"><span>Chest</span></div>
            </button> 
             <button>
              <img src={Item} alt="4" style={{float:'left'}}/>
              <div className="overlay"><span>Hands</span></div>
            </button> 
             <button>
              <img src={Weapon_1} alt="5"style={{float:'left'}} />
              <div className="overlay"><span>Weapon1</span></div>
            </button> 
        </ul>
      </div>  
    </div>

 
    <div className='child2'> 
      <div className="container">
        <ul className="image-gallery">
           <button>
            <img src={Item} alt="6" style={{float:'right'}} />
            <div className="overlay"><span>Legs</span></div>
          </button> 
           <button>
            <img src={Item} alt="7" style={{float:'right'}}/>
            <div className="overlay"><span>Boots</span></div>
          </button> 
           <button>
            <img src={Item} alt="8" style={{float:'right'}}/>
            <div className="overlay"><span>Ring1</span></div>
          </button> 

           <button>
            <img src={Item} alt="9" style={{float:'right'}}/>
            <div className="overlay"><span>Ring2</span></div>
          </button> 
           <button>
            <img src={Weapon_2} alt="10" style={{float:'right'}}/>
            <div className="overlay"><span>Weapon2</span></div>
          </button> 
        </ul>
      
      </div>
    </div>
</div>

  )
}