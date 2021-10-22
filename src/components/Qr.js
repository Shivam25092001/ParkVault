import QRCode from "qrcode"
import React,{useState,useEffect} from 'react'
import "./Qr.css"
const Qr = ({text})=> {
    const [tog, setTog] = useState(false);
    const [tg, setTg] = useState(false);
    const[src,setSrc] =useState('');
    useEffect(() => {
    QRCode.toDataURL(text).then((data)=>{
        setSrc(data);
    })
    }, [])
    return (
        <div className = "qrcont">
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
            <div className="qbodyn">
                <div className="exit">
                    <p>EXIT PARKING</p>
                </div>
                <div className="qgen">
                 <img src={src}  />
                </div>
                <div className="viewqr"><p> View QR</p></div>
            </div>
            
        </div>
    )
}

export default Qr;
