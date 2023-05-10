import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import DropDown from './components/DropDown';


function TripDetails() {
  useEffect(() => {
    // create a new map instance
    const map = L.map('map').setView([40.6894, -8.4629], 14);

    // add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(map);

    // add a marker to the map
    const myIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      });
    L.marker([40.68662, -8.46908],{ icon: myIcon }).addTo(map)
      
      

    // return cleanup function to remove the map instance
    return () => {
      map.remove();
    };
  }, []);

  return (

    <div className='flex'>
    <div>
    <h1 style={{color:"#fff", marginTop:-30, fontSize:24, marginLeft: 120}}>Current location:</h1>
    <div id="map" style={{ height: '455px', width: '460px' , borderRadius: '10px', left: '120px' }}>
    </div>
    </div>  
     <div className="ml-[290px] text-[24px]"> {/* mexer aqui quando se acrescentar o botão do TRIP ID */}
     <span className="text-white font-semibold  mt-[30px] ">
      Want to get information 
      <br/>
      about your full trip? <br/>
      <br/>
    </span>
    
     <button className="font-bold w-[274px] h-[80px] text-white text-[24px] bg-[#259D49] border-[#3ED26A] border-4 rounded-[10px]">CHECK YOUR TRIP DETAILS</button>
    <DropDown/>
    </div>
  </div>
 
  );
}

export default TripDetails;
