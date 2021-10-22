import QRCode from "qrcode"
import React,{useState,useEffect} from 'react'
import "./Qr.css"
const Qr = ({text})=> {
    const[src,setSrc] =useState('');
    useEffect(() => {
    QRCode.toDataURL(text).then((data)=>{
        setSrc(data);
    })
    }, [])
    return (
        <div className = "qrcont">
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
