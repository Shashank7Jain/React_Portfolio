import React from 'react';
import {Map,TileLayer} from "react-leaflet";



const Location = (props) => {
    return ( <div >
        <Map center={[-33.792382, 150.945232]} zoom={15}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
      </Map>
      </div>
     );
}
 
export default Location;