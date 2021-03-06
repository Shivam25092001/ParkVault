import QRCode from "qrcode"
import React,{useState,useEffect} from 'react'
import "./Qr.css"
import { Link } from "react-router-dom"
const Qr = ()=> {
    const[src,setSrc] =useState('');
    const[obj,setobj]=useState({carname:"Hyudayi Grand i10",carid:"UP32KY2548",userid:"Saksham089"});
    const text = obj.toString();
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
                <Link to="/paymentmethod"><button className=" black login-submit" type="submit">Payment</button></Link>
            </div>
        </div>
    )
}

export default Qr;
