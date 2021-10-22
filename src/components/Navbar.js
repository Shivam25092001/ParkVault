import React,{useState} from 'react'

export default function Navbar() {
    const [tog, setTog] = useState(false);
    const [tg, setTg] = useState(false);
    return (
        <div>
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
        </div>
    )
}
