import React, { useState } from 'react'
import Todo from './Todo';
import './First.css';
import { Link } from 'react-router-dom';
function Firstpage() {
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
            <div className="bodee">
                <div className="drive">
                    <h1>You are driving...</h1>
                </div>
                <div className="cars">
                    {
                        cars.map((car,idx) => {
                            
                            return <Link to="/slotpreference"><Todo key ={car.toString()}  cars={car} /></Link> 
                        })
                    }
                </div>
                <div className="addCar">
                    <form action=""onSubmit={submit} >
                        <input className="username" type="text" placeholder ="Enter car name" value ={name} onChange={(e)=>setname(e.target.value)}/>
                        <input className="username" type="text" placeholder = "Enter car number" value={num} onChange={(e)=>setnum(e.target.value)}/>
                        <br />
                        <button className ="lo" type = "submit">Add Car +</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Firstpage
