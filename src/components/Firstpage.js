import React,{useState} from 'react'
import './First.css';
function Firstpage() {
    const [carA, setcarA] =useState(false);
    const [carB, setcarB] =useState(false);
    return (
       <div className="cont">
           <div className="headerc"></div>
           <div className="bodee">
               <div className="drive">
                   <h1>You are driving...</h1>
               </div>
               <div className="cars">
                   <a href="#"><div className="car1" id ={carA ?"clicka":""} onClick={() => {setcarA(!carA)}}>
                       <div className="carname"><p>Hyundai i10</p></div>
                       <div className="carnmbr"><p>UP32KC4568</p></div>
                   </div>
                   </a>
                  <a href="#">
                   <div className="car2" id ={carB ?"clickb":""} onClick={() => {setcarB(!carB)}}>
                       <div className="carname"><p>Tata Nexon</p></div>
                       <div className="carnmbr"><p>UP32JK6900</p></div>
                   </div>
                   </a>
               </div>
               <div className="addAcar">
                   <a href="">Add a car +</a>
                 
               </div>
           </div>
       </div>
    )
}

export default Firstpage
