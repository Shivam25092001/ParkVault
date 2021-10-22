import React, { useState } from 'react'
import Todo from './Todo';
import './First.css';
function Firstpage() {
    const [tog, setTog] = useState(false);
    const [tg, setTg] = useState(false);
    const[name,setname] = useState("");
    const[num,setnum] = useState("");
    const [cars, setcars] = useState([{
        carname: "Hyundayi i10",
        carnumber: "UP32KC2021"
    }, {
        carname: "TATA Nexon PU17",
        carnumber: "UP71BN13021"
    }
    ])
    const submit =(e)=>{
        e.preventDefault();
        if(!name||!num)
        alert("Please Enter Valid Input")
        else{
       const mycar ={
           carname:name,
           carnumber:num
       }
       setcars([...cars,mycar]);
       setname("");
       setnum("");}
    }
    return (
        <div className="cont">
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
            <div className="bodee">
                <div className="drive">
                    <h1>You are driving...</h1>
                </div>
                <div className="cars">
                    {
                        cars.map((car,idx) => {
                            
                            return <a href=""><Todo key ={car.toString()}  cars={car} /></a> 
                        })
                    }
                </div>
                <div className="addCar">
                    <form action=""onSubmit={submit} >
                        <input type="text" placeholder ="Enter car name" value ={name} onChange={(e)=>setname(e.target.value)} />
                        <input type="text" placeholder = "Enter car number" value={num} onChange={(e)=>setnum(e.target.value)}/>
                        <br />
                        <button type = "submit">Add Car +</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Firstpage
