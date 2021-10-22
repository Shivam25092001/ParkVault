import React,{useState} from 'react'
import "./gopark.css"
function Gopark() {
    const [tog, setTog] = useState(false);
    const [tg, setTg] = useState(false);
    return (
        <div className ="gparkcont">
          <div className="headerc">
                <img src="./images/logo3.png" alt="" />
                <div className={ tog?"hidden":"links"}>
                        <img src="./images/acount.png" alt="" />
                        <a href="/all">MY CARS</a>
                        <a href="/frequent">PAYMENTS</a>
                        <a href="/cars">HELP</a>
                        <a href="/bikes">ABOUT US</a>
                        <a href="/hardware" id ="signol">Log Out</a>
                    </div>
                <div className="burger" id={tg ? "toggl" : ""} onClick={() => {
                    setTog(!tog);
                    setTg(!tg)
                }}>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
            </div>  
            <div className="gparkbod">
                <p id="goodtg">All Good to  Go. :)</p>
                <img src="./images/parking-time.png" alt="" id="imgpl"/ >
                <p id="sspot">Park Your Car At the Selected spot</p>
                <a href=""><img src="./images/MaskGroup.png" alt="" id="imglink" /></a>
            </div>
        </div>
    )
}

export default Gopark
