import React,{useState, useRef} from 'react'
import '../components/Slotsection.css'

export default function Slotsection(props) {
    const [booked, updatebook] = useState([{location:''}]);
    const [sel, toggle] = useState(false);

    const locationemitter = (e)=>{
        console.log(e.target.id);
        toggle(!sel);
    }
    return (
        <div className="floor">
            <p className="floor-num">{props.floor} floor</p>
            <div className="slots">
                <div className={`slot ${sel?'active':''}`} onClick={locationemitter} id={`${props.floor}.1`}></div>
                <div className="slot" onClick={locationemitter} id={`${props.floor}.2`}></div>
                <div className="slot" onClick={locationemitter} id={`${props.floor}.3`}></div>
                <div className="slot" onClick={locationemitter} id={`${props.floor}.4`}></div>
                <div className="slot" onClick={locationemitter} id={`${props.floor}.5`}></div>
                <div className="slot" onClick={locationemitter} id={`${props.floor}.6`}></div>
                <div className="slot" onClick={locationemitter} id={`${props.floor}.7`}></div>
                <div className="slot" onClick={locationemitter} id={`${props.floor}.8`}></div>
                <div className="slot" onClick={locationemitter} id={`${props.floor}.9`}></div>
                <div className="slot" onClick={locationemitter} id={`${props.floor}.10`}></div>
            </div>

        </div>
    )
}
