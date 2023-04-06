import React, { useState } from 'react'
import GearPopUpMenu from './GearPopUpMenu'
import { ArmorList, ArmorType, ItemClass, UserItem, WeaponList } from '../PureTSX/WeaponAndArmorTypes'
import { json } from 'stream/consumers'

type Props = {
    gearData: GearPopUpData
    togglePopUp: (state: boolean) => void,
    weaponList: WeaponList,
    armorList: ArmorList
}


//data expected
//possibly null if item has not been set yet, but returnData must always be not null
export type GearPopUpData = {
  itemClass: ItemClass,
  mainHand?: UserItem,
  offHand?: UserItem,
  armorType?: ArmorType,
  itemSlot: string,
  returnData: (items?: (UserItem|undefined)[]) => void
}



export default function GearPopUp(props: Props) {

  const [mainHand, setMainHand] = useState<UserItem | undefined>(props.gearData.mainHand);

  const [offHand, setOffHand] = useState<UserItem | undefined>(props.gearData.offHand);

  const [mainHandAutoUpdate, setMainHandAutoUpdate] = useState<boolean>(localStorage.getItem(props.gearData.itemSlot.toString() + "AutoUpdateMainHand") !== 'undefined' ? JSON.parse(localStorage.getItem(props.gearData.itemSlot.toString() + "AutoUpdateMainHand") as string) : undefined);
  const [offHandAutoUpdate, setOffHandAutoUpdate] = useState<boolean>(localStorage.getItem(props.gearData.itemSlot.toString() + "AutoUpdateOffHand") !== 'undefined' ? JSON.parse(localStorage.getItem(props.gearData.itemSlot.toString() + "AutoUpdateOffHand") as string) : undefined);

  const [isOffHand, toggleOffHand] = useState(false);

  function returnItems()
  {
    props.gearData.returnData([mainHand, offHand]);
    props.togglePopUp(false);
  }

  function updateMainHand(item: UserItem | undefined)
  {
    setMainHand(item);
    localStorage.setItem(props.gearData.itemSlot + " MainHand", JSON.stringify(item));
  }

  function updateOffHand(item: UserItem | undefined)
  {
    setOffHand(item);
    localStorage.setItem(props.gearData.itemSlot + " OffHand", JSON.stringify(item));
  }

  function updateMainHandAutoUpdate(autoUpdate: boolean)
  {
    setMainHandAutoUpdate(autoUpdate);
    localStorage.setItem(props.gearData.itemSlot + "AutoUpdateMainHand", autoUpdate.toString());
  }

  
  function updateOffHandAutoUpdate(autoUpdate: boolean)
  {
    setOffHandAutoUpdate(autoUpdate);
    localStorage.setItem(props.gearData.itemSlot + "AutoUpdateOffHand", autoUpdate.toString());
  }

  return (
    
    <div className='Background'>
      <div className='MainContainerWrapper'>
        <div className='MainContainer'>
          <button onClick={returnItems} className='ReturnButton'>Accept Changes</button>
            {props.gearData.itemClass == ItemClass.Weapon && isOffHand ? 
              <GearPopUpMenu autoUpdate={mainHandAutoUpdate} setAutoUpdate={updateMainHandAutoUpdate} item={offHand} data={props.gearData} weaponList={props.weaponList} armorList={props.armorList} updateUserItem={updateOffHand}/>
              :
              <GearPopUpMenu autoUpdate={offHandAutoUpdate}  setAutoUpdate={updateOffHandAutoUpdate}  item={mainHand} data={props.gearData} weaponList={props.weaponList} armorList={props.armorList} updateUserItem={updateMainHand}/>
            }
        </div>
        <div className='TabSelector'>
            <div className='Tab' style={{boxShadow: isOffHand ? '0 0 0 0' : '', zIndex: isOffHand ? '0' : '1'}} onClick={() => toggleOffHand(false)}>
              <div className={isOffHand ? 'UnselectedTab' : 'SelectedTab'}>Main Hand</div>
            </div>
            <div className='Tab' style={{marginLeft: '0px', boxShadow: !isOffHand ? '0 0 0 0' : '', zIndex: !isOffHand ? '0' : '1'}} onClick={() => toggleOffHand(true)}>
              <div className={!isOffHand ? 'UnselectedTab' : 'SelectedTab'}>Off Hand</div>
            </div>
          </div>
      </div>
    </div>
  )
}