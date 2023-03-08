import React, { useEffect, useState } from 'react'
import '../CSS/SelectionBox.css'
import Item from '../images/Item.png'
import Weapon_1 from '../images/Weapon_1.png'
import Weapon_2 from '../images/Weapon_2.png'
import '../CSS/ItemBox.css';
import SelectionBoxItem from './SelectionBoxComponents/SelectionBoxItem'
import GearPopOut, { GearPopUpData } from './SelectionBoxComponents/GearPopUp'
import { ArmorList, ArmorType, ItemClass, WeaponList } from './PureTSX/WeaponAndArmorTypes';

type Props = {
  armorList: ArmorList | undefined,
  weaponList: WeaponList | undefined
}


export default function SelectionBox(props: Props) {
    
  /*
    Flow Chart:

               Selection box
              /             \
      SelectionBoxItem(s)    GearPopUp
                                \
                              GearPopUpItem

    1 - Selection box handles transactions between SelectionBoxItem(s) and the GearPopUp components
    2 - The SelectionBoxItem does three things
      A - display the image / highlighting for armor / weapon item (ex, helmet)
      B - store the data of the item select with useState (ex helmet image, rarity, armor rating, name)
      C - has an onclick that passes the data stored in it's state back to the SelectionBox component
    3 - The GearPopUp component does 4 things
      A - Recieve the data passed from the SelectionBoxItem, containing a item class (armor or weapon), item type (helmet, chest, or sword / bow, etc), and any stored item (if one is selected)
      B - Use the selected weapon (if not null) and item class to display a list of all of the items
      C - Allow item selection from the list, and input for it's values (damage, bonus attributes)
      D - Pass item selected back to the appropriate SelectionBoxItem
  */




  const [popUpActive, setPopUpActive] = useState(false);
  const [gearData, setGearData] = useState<GearPopUpData>({itemClass: ItemClass.Armor, itemType: ArmorType.Chest, returnData: () => {console.error("Error returning Gear data. Not initialized.")}});

  //called by SelectionBoxItem(s), passes any stored data from the selection box to the pop up
  function togglePopUp(data: GearPopUpData) {
    setGearData(data);
    setPopUpActive(!popUpActive);
  }

  return (
    <div className="BoxBorder" style={{height:'550px', margin: '1%', backgroundColor: 'rgba(0,0,0,.5)', border:'solid', borderColor:'#000000', width: '85%', maxWidth: '400px', float: 'left', padding:'16px', display:'block', textAlign:'center'}}>

        <h2 className="heading-text">Item <span>Selection</span></h2>

        <div className='child1'> 
          <div className="container">

            <ul className="image-gallery">
                
            <li>
                <SelectionBoxItem itemClass={ItemClass.Armor} armorType={ArmorType.Head} setPopUpActive={togglePopUp} useOverlay={true} img={Item} style={{float: 'left'}}  text="Head"/>
            </li>

            <li>
              <SelectionBoxItem itemClass={ItemClass.Armor} armorType={ArmorType.Neck} setPopUpActive={togglePopUp} useOverlay={true} img={Item} style={{float: 'left'}}  text="Neck"/>
            </li>

            <li>
              <SelectionBoxItem itemClass={ItemClass.Armor} armorType={ArmorType.Chest} setPopUpActive={togglePopUp} useOverlay={true} img={Item} style={{float: 'left'}}  text="Chest"/>
            </li>

            <li>
              <SelectionBoxItem itemClass={ItemClass.Armor} armorType={ArmorType.Hands} setPopUpActive={togglePopUp} useOverlay={true} img={Item} style={{float: 'left'}}  text="Hands"/>
            </li>

            <li>
              <SelectionBoxItem itemClass={ItemClass.Armor} armorType={ArmorType.Chest} setPopUpActive={togglePopUp} useOverlay={false} img={Weapon_1} style={{float: 'left'}}  text="Weapon 1"/>
            </li>

            </ul>
          </div>  
        </div>

    
        <div className='child2'> 
          <div className="container">
            <ul className="image-gallery">

              <li>
                <SelectionBoxItem itemClass={ItemClass.Armor} armorType={ArmorType.Legs} setPopUpActive={togglePopUp} useOverlay={true} img={Item} style={{float: 'right'}}  text="Legs"/>
              </li>

              <li>
                <SelectionBoxItem itemClass={ItemClass.Armor} armorType={ArmorType.Feet} setPopUpActive={togglePopUp} useOverlay={true} img={Item} style={{float: 'right'}}  text="Boots"/>
              </li>

              <li>
                <SelectionBoxItem itemClass={ItemClass.Armor} armorType={ArmorType.Ring} setPopUpActive={togglePopUp} useOverlay={true} img={Item} style={{float: 'right'}}  text="Ring 1"/>
              </li>

              <li>
                <SelectionBoxItem itemClass={ItemClass.Armor} armorType={ArmorType.Ring} setPopUpActive={togglePopUp} useOverlay={true} img={Item} style={{float: 'right'}}  text="Ring 2"/>
              </li>

              <li>
                <SelectionBoxItem itemClass={ItemClass.Armor} armorType={ArmorType.Chest} setPopUpActive={togglePopUp} useOverlay={false} img={Weapon_2} style={{float: 'right'}}  text="Weapon 2"/>
              </li>
              
            </ul>
          
          </div>
        </div>
        
        {popUpActive ? //the pop up
        <GearPopOut data={gearData} togglePopUp={setPopUpActive} weaponList={props.weaponList} armorList={props.armorList}/>
        :
        null
        }
    </div>

  )
}