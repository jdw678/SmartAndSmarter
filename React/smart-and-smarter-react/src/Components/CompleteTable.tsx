import '../CSS/CompleteTable.css';
import MagicTable from './TableComponents/Tables/MagicTable';
import BowTable from './TableComponents/Tables/BowTable';
import { WeaponList } from './PureTSX/WeaponAndArmorTypes';
import ShieldTable from './TableComponents/Tables/ShieldTable';
import CompleteMeleeTable from './TableComponents/Tables/CompleteMeleeTable';
//draw attack damage multiplier string based on if the damage is null or not

type Props = {
    weaponList: WeaponList
}


export default function WeaponTable(props: Props) {

    
    //return this after api calls finish
    return (

        <div id="content" style={{ overflow:'auto1', float:'left', backgroundColor: 'rgba(0,0,0,.7)', padding:'2%', paddingTop: '0', marginRight: '2%', margin: '1%', borderRadius: '5px'}}>

            <CompleteMeleeTable weaponList={props.weaponList.meleeWeapons}/>

            <h1 >Magic Weapons</h1>
            <hr />
            <MagicTable weaponList={props.weaponList.magicWeapons}/>
            
            <h1>Shields</h1>
            <hr />
            <ShieldTable weaponList={props.weaponList.shields}/>
            
            <h1>Bows</h1>
            <hr />
            <BowTable weaponList={props.weaponList.bows}/>
            
        </div>
    )
}
