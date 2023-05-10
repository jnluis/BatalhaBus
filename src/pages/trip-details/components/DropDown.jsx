import React from "react"
import image from './download.png';
import {ExpandMore } from '@mui/icons-material';

export default function dropdown() {
    return (
        <div className="dropdown" style={{marginTop:50, marginLeft:-10}}>

             <label tabIndex={0} className="btn m-1" style={{textTransform: "none", fontSize:20, backgroundColor: "#ffffff8f",color: "#000000bf"}}>
             <img src={image} alt="MapIcon" className="mr-5"/>
             Albergaria-a-Velha
             <ExpandMore className="ml-5"/></label> 
             
            <div tabIndex={0} className="dropdown-content card card-compact w-[300px] p-2 bg-primary" style={{ backgroundColor: "#ffffffcf"}}>
                <div className="card-body text-black" style={{ fontSize:18}}>
                    <p>Albergaria-a-Velha is a small town in Portugal, located in the district of Aveiro.</p>
                    <p>It has the longest bridge in Portugal, the Vouga Viaduct, which is 5.6 km long and an engineering marvel made of reinforced concrete.</p>
                </div>
            </div>
        </div>
    )
}
