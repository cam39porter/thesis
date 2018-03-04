import React, { Component } from "react";

import "tachyons";

import { Map, GeoJSON, TileLayer } from "react-leaflet";
import geoLSOAs from "./assets/lsoa.json";

import rp from "request-promise";

// read output data from cloud storage
var options = {
  uri:
    "https://storage.googleapis.com/thesis-191617-composite-measure/composite-measure-output.json",
  json: true // Automatically parses the JSON string in the response
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      outputDataLoaded: false,
      center: [52.797919, -1.35631],
      zoom: 6.5,
      showLSOAs: false,
      showCompositeMeasure: false,
      showBrewDogs: false
    };

    this.style = this.style.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  componentDidMount() {
    rp(options)
      .then(analysisOutput => {
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

        this.setState({
          outputDataLoaded: true
        });
      })
      .catch(err => {
        alert("Failed to load output results");
      });
  }

  // Color Selection
  getColor(d) {
    return d > 0.75
      ? "#2166ac"
      : d > 0.5
        ? "#4393c3"
        : d > 0.25
          ? "#92c5de"
          : d > 0.07
            ? "#d1e5f0"
            : d > 0.001
              ? "#f7f7f7"
              : d > -0.06
                ? "#fddbc7"
                : d > -0.25 ? "#f4a582" : d > -0.5 ? "#d6604d" : "#b2182b";
  }

  //  Style the GeoJSON
  style(feature) {
    return {
      fillColor: this.state.showCompositeMeasure
        ? this.getColor(feature.properties.composite_measure)
        : "black",
      weight: 0.2,
      opacity: 1,
      color: "white",
      fillOpacity: 0.5
    };
  }

  render() {
    return (
      <div className={`w-100 vh-100 code`}>
        <div className={`fl w-50 vh-100`}>
          <h1 className={`f3 tc`}>BrewDog Analysis</h1>

          {/* Map Features Menu */}
          <div className={`f6 pa3 center tc measure`}>
            {/* BrewDogs Button */}
            <p
              className={`tc pointer pa2 ba ${
                this.state.showBrewDogs ? "bg-light-gray" : "bg-white"
              }`}
            >
              Show BrewDogs
            </p>

            {/* LSOAs Button */}
            <p
              className={`tc pointer pa2 ba ${
                this.state.showLSOAs ? "bg-light-gray" : "bg-white"
              }`}
              onClick={() =>
                this.setState({ showLSOAs: true, showCompositeMeasure: false })
              }
            >
              Show LSOAs
            </p>

            {/* Composite Measure Button */}
            <p
              className={`tc pointer pa2 ba ${
                this.state.showCompositeMeasure ? "bg-light-gray" : "bg-white"
              }`}
              onClick={() => {
                if (!this.state.outputDataLoaded) {
                  alert(
                    "Be patient young padawan! Still waiting on data from server."
                  );
                  return;
                }
                this.setState({ showLSOAs: false, showCompositeMeasure: true });
              }}
            >
              Show Composite Measure
            </p>
          </div>
        </div>
        <Map
          center={this.state.center}
          zoom={this.state.zoom}
          className={`fr w-50 vh-100`}
        >
          {this.state.showLSOAs || this.state.showCompositeMeasure ? (
            <GeoJSON data={geoLSOAs} style={this.style} />
          ) : (
            ""
          )}
          <TileLayer
            // https://www.mapbox.com/studio/styles/mapbox/light-v9/
            url="https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FtZXJvbnBvcnRlciIsImEiOiJjamVjdGgwZW4wcm9kMnhwYnA2NzgxOWF2In0.RVXtackCUG_tFb3OZUf95g"
          />
        </Map>
      </div>
    );
  }
}

export default App;
