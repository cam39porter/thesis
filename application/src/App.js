import React, { Component } from "react";
import "tachyons";

import { Map, GeoJSON, TileLayer } from "react-leaflet";

import lsoa from "./assets/Lower_Layer_Super_Output_Areas_December_2011_Super_Generalised_Clipped__Boundaries_in_England_and_Wales.json";

const position = [51.505, -0.09];

class App extends Component {
  render() {
    return (
      <div className={`w-100 vh-100`}>
        <Map center={position} zoom={6} className={`w-100 vh-100`}>
          <GeoJSON data={lsoa} />
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      </div>
    );
  }
}

export default App;
