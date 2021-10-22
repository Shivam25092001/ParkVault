import React from 'react'
import { Link } from 'react-router-dom';

export default function Parkverified() {
    return (
        <div className ="gparkcont">
            <div className="gparkbod">
                <h1 id="parked">Parked .</h1>
                <img src="./images/checkmark2.png" alt="" id="imgpl"/>
                <p id="sspot">Unique QR Code generated</p>
                <Link to="/exit"><button className=" red login-submit" type="submit">Exit</button></Link>
            </div>
        </div>
    );
}
