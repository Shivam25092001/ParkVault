import React,{useState} from 'react'
import './Slotpreference.css'
import Slotsection from '../components/Slotsection'
import { Link } from 'react-router-dom';

export default function Slotpreference() {
    const [sssel, toggless] = useState(false);
    const selectpressed = (e)=>{
        toggless(!sssel);
    }
    return (
        <div className="slot-pref">
            <h1 className="parking-loc">
                Ram Mandir Parking
            </h1>
            <Slotsection floor="Ground"/>
            <Slotsection floor="First"/>
            <Slotsection floor="Second"/>

            <button className={`ss-button ${sssel?'ss-button-active':''}`} onClick={selectpressed}>Select Slot</button>
            <input type="text" name="time" id="time" placeholder="  Enter expected time"/>
            <Link to="/gopark">
                <button className="pref-submit" type="submit">Submit</button>
            </Link>
        </div>
    )
}

