import React, { Component } from "react";

import "tachyons";

import { Map, GeoJSON, TileLayer } from "react-leaflet";
import geoLSOAs from "./assets/lsoa.json";
import analysisOutput from "./assets/composite-measure-output.json";

// index output LSOA geography code
var geoToMeasure = {};
for (var key in analysisOutput) {
  var output = analysisOutput[key];
  geoToMeasure[output["geography_code"]] = output["Composite_Measure"];
}

// add output to GeoJSON properties
for (var index in geoLSOAs["features"]) {
  var feature = geoLSOAs["features"][index];
  var compositeMeasure = geoToMeasure[feature.properties.lsoa11cd];
  feature.properties["composite_measure"] = compositeMeasure;
  geoLSOAs["features"][index] = feature;
}

// Color Selection
function getColor(d) {
  return d > 0.5
    ? "#800026"
    : d > 0.25
      ? "#BD0026"
      : d > 0.07
        ? "#E31A1C"
        : d > 0.001
          ? "#FC4E2A"
          : d > -0.06
            ? "#FD8D3C"
            : d > -0.25 ? "#FEB24C" : d > -0.5 ? "#FED976" : "#FFEDA0";
}

//  Style the GeoJSON
function style(feature) {
  return {
    fillColor: getColor(feature.properties.composite_measure),
    weight: 0.1,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7
  };
}

const position = [51.505, -0.09];

class App extends Component {
  render() {
    return (
      <div className={`w-100 vh-100`}>
        <Map center={position} zoom={6} className={`w-100 vh-100`}>
          <GeoJSON data={geoLSOAs} style={style} />
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
