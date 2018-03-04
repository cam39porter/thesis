import React, { Component } from "react";
import "tachyons";

import { Map, Marker, Popup, GeoJSON } from "react-leaflet";

import lsoa from "./assets/lsoa.json";

const position = [51.505, -0.09];

class App extends Component {
  render() {
    return (
      <div className={`w-100 vh-100`}>
        <Map center={position} zoom={13} className={`w-100 vh-100`}>
          <GeoJSON data={lsoa} />
          <Marker position={position}>
            <Popup>
              <span>
                A pretty CSS3 popup.<br />Easily customizable.
              </span>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default App;
