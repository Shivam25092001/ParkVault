import React,{useState} from 'react'
import "./gopark.css"
import {Link} from 'react-router-dom'

function Gopark() {
    return (
        <div className ="gparkcont">
            <div className="gparkbod">
                <p id="goodtg">All Good to  Go. :{")"}</p>
                <img src="./images/parking-time.png" alt="" id="imgpl"/>
                <p id="sspot">Park Your Car At the Selected spot</p>
                <Link to="/parkingverified"><img src="./images/MaskGroup.png" alt="" id="imglink" /></Link>
            </div>
        </div>
    );
}

export default Gopark
