import React, { useState } from 'react'
import "./payment.css"

function Payment() {
    const [net, setnet] = useState(false);
    const [card, setcard] = useState(false);
    const [upi, setupi] = useState(false);
    const [wallet, setwallet] = useState(false);
    const [cash, setcash] = useState(false);
    return (
        <div className="paycont">
            <div className="neechepayment">
                
                <div className="bill">
                    <p>Bill total : ₹230</p>
                </div>
                <div className="time">
                    <div className="pti">
                    <i className="far fa-clock"></i>
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
                                <img src="./images/payment/bank.png" id="bank-img" alt="" />
                                <p id="NB">Net Banking</p>
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
                                    <img src="./images/payment/card.svg" id="n-card" alt="" />
                                    <img src="./images/payment/master.png" alt="" />
                                    <img src="./images/payment/visa.png" id="visa" alt="" />
                                    <img src="./images/payment/rupay.png" alt="" /></div>
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
                                    <img src="./images/payment/gpay.png" alt="" />
                                    <img src="./images/payment/bhim.png" alt="" />
                                    <img src="./images/payment/phonepe.png" alt="" />
                                    <img src="./images/payment/pocket.png" alt="" /></div>
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
                                <img src="./images/payment/cash.png" id="cash" alt="" />
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
