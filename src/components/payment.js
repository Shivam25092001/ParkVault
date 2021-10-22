import React, { useState } from 'react'
import "./payment.css"

function Payment() {
    const [tog, setTog] = useState(false);
    const [tg, setTg] = useState(false);
    const [net, setnet] = useState(false);
    const [card, setcard] = useState(false);
    const [upi, setupi] = useState(false);
    const [wallet, setwallet] = useState(false);
    const [cash, setcash] = useState(false);
    return (
        <div className="paycont">
            <div className="headerc">
                <img src="./images/logo3.png" alt="" />
                <div className="burger" id={tg ? "toggl" : ""} onClick={() => {
                    setTog(!tog);
                    setTg(!tg)
                }}>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
            </div>
            <div className="neechepayment">

                <div className="bill">
                    <p>Bill total : ₹230</p>
                </div>
                <div className="time">
                    <div className="pti">
                    <i class="far fa-clock"></i>
                        <div className="thp">
                            <p id ="dark">Time Parked (hrs:min | hrs :min)</p>
                            <p id = "light">16:54 | 18:31 IST </p>
                        </div>
                    </div>
                </div>
                <div className="paymentmethod">
                    <div className="paym">
                        <div className="typepay" id={net ? "net" : ""} onClick={() => {
                            setnet(!net);
                        }}>
                            <div className="uper"><p>
                                Net banking</p></div>
                            <div className="niche">
                                <img src="./images/user-flow.png" alt="" />
                                <p>Net Banking</p>
                            </div>
                        </div>
                        <div className="typepay" id={card ? "card" : ""} onClick={() => {
                            setcard(!card);
                        }}>
                            <div className="uper"><p>
                                CREDIT/DEBIT CARDS  </p></div>
                            <div className="nichee">
                                <div className="nmp">
                                    <img src="./images/plus.png" alt="" />
                                    <p className="orangish">ADD  NEW CARD</p>
                                </div>
                                <div className="ico">
                                    <img src="./images/user-flow.png" alt="" />
                                    <img src="./images/user-flow.png" alt="" />
                                    <img src="./images/user-flow.png" alt="" />
                                    <img src="./images/user-flow.png" alt="" /></div>
                            </div>
                        </div>
                        <div className="typepay" id={upi ? "upi" : ""} onClick={() => {
                            setupi(!upi);
                        }}>
                            <div className="uper"><p>
                                UPI</p></div>
                                <div className="nichee">
                                <div className="nmp">
                                    <img src="./images/plus.png" alt="" />
                                    <p className="orangish">ADD  A NEW UPI</p>
                                </div>
                                <div className="ico">
                                    <img src="./images/user-flow.png" alt="" />
                                    <img src="./images/user-flow.png" alt="" />
                                    <img src="./images/user-flow.png" alt="" />
                                    <img src="./images/user-flow.png" alt="" /></div>
                            </div>
                        </div>
                        <div className="typepay" id={wallet ? "wallet" : ""} onClick={() => {
                            setwallet(!wallet);
                        }}>
                            <div className="uper"><p>
                                MORE PAYMENT METHODS</p></div>
                            <div className="nicheee">
                                <img src="./images/user-flow.png" alt="" />
                                <p>Wallets</p>
                            </div>
                        </div>
                        <div className="typepay" id={cash ? "cash" : ""} onClick={() => {
                            setcash(!cash);
                        }}>
                            <div className="nicheee">
                                <img src="./images/user-flow.png" alt="" />
                                <p>Cash</p>
                            </div>
                        </div>
                    </div>
                    <a href="#"><button>Pay  ₹230 </button></a>
                </div>
            </div>
        </div>

    )
}

export default Payment
