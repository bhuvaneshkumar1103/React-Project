import { useState } from "react";

export default function NumberOps(props) {
    const imgBack = {
        backgroundImage: 
        "url('https://img.lovepik.com/photo/40008/0362.jpg_wh860.jpg')",
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const card = {
        
        height:"170px",
        width:"300px",
        textAlign: "center",
                
    };
    const number = {
        fontSize:"25px",
    };
    const[num, setnum]=useState(0)
    function IncrementbyOne(){        
        setnum(num+1)
    }
    function DecrementbyOne(){
        setnum(num-1)
    }
    return(
        <>
        <div style ={imgBack}>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <div class = "w3-card-4 w3-pale-red w3-display-middle w3-round-xlarge" style = {card}>
            <header class="w3-container w3-yellow"  >
                <h1 style={{color:"red"}} ><strong>Inci R Deci</strong> </h1>
            </header>
            <div >
                <p style = {number}><strong>{num}</strong></p>
            </div>
            <footer class="w3-container w3-grey" id="footer">
                    <button class = "w3-button w3-blue w3-hover-green w3-round-xlarge w3-hover-shadow w3-hover-border-yellow" style = {{border:"6px solid green"}}  onClick={IncrementbyOne}>Increment</button>
                    <button class = "w3-button w3-blue w3-hover-red  w3-round-xlarge w3-hover-shadow w3-hover-border-yellow" style = {{border:"6px solid red",marginLeft: "10px"  }}  onClick={DecrementbyOne}>Decrement</button>
            </footer>
        </div>
        </div>
        </>
    );    
}