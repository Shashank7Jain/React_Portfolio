import React from 'react';
import {Map,Marker,Popup,TileLayer} from "react-leaflet";




const Location = (props) => {
    return ( <div>
        <Map center={[-33.792382, 150.945232]} zoom={15}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-33.792382, 150.945232]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
      </div>
     );
}
 
export default Location;