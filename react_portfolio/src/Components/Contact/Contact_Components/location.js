import React from 'react';
import {Map,Marker,Popup,TileLayer} from "react-leaflet";
import styles from 'styled-components';



const Location = (props) => {
    return ( <div>
        <Map center={[-33.792382, 150.945232]} zoom={15}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-33.792382, 150.945232]}>
          <Popup>
           75 Toongabbie Road. <br /> Toongabbie EAST 2146 NSW
          </Popup>
        </Marker>
      </Map>
      </div>
     );
}
 
export default Location;