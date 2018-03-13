import React, { Component } from "react";

import "tachyons";

import rp from "request-promise";

import Control from "react-leaflet-control";

import { Map, GeoJSON, TileLayer, Marker, Popup } from "react-leaflet";
import brewDogs from "./assets/brew-dogs.json";
import brewDogsComingSoon from "./assets/brew-dogs-coming-soon.json";

const brewDogLocations = brewDogs.locations;
const brewDogComingSoonLocations = brewDogsComingSoon.locations;

// read data from cloud storage
const measureOptions = {
  uri:
    "https://storage.googleapis.com/thesis-191617-composite-measure/composite-measure-output.json",
  json: true // Automatically parses the JSON string in the response
};

const lsoaOptions = {
  uri: "https://storage.googleapis.com/thesis-lsoa/lsoa.json",
  json: true // Automatically parses the JSON string in the response
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      geoLSOAs: {},
      outputDataLoaded: false,
      center: [52.797919, -1.35631],
      zoom: 6.5,
      showLSOAs: false,
      showCompositeMeasure: false,
      showBrewDogs: false,
      showBrewDogsComingSoon: false
    };

    this.style = this.style.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  componentDidMount() {
    var tempGeoLSOAs = {};
    rp(lsoaOptions)
      .then(resGeoLSOA => {
        tempGeoLSOAs = resGeoLSOA;

        return rp(measureOptions).then(analysisOutput => {
          // index output LSOA geography code
          var geoToMeasure = {};
          for (var key in analysisOutput) {
            var output = analysisOutput[key];
            geoToMeasure[output["geography_code"]] =
              output["Composite_Measure"];
          }

          // add output to GeoJSON properties
          for (var index in tempGeoLSOAs["features"]) {
            var feature = tempGeoLSOAs["features"][index];
            var compositeMeasure = geoToMeasure[feature.properties.lsoa11cd];
            feature.properties["composite_measure"] = compositeMeasure;
            tempGeoLSOAs["features"][index] = feature;
          }

          this.setState({
            outputDataLoaded: true,
            geoLSOAs: tempGeoLSOAs
          });
        });
      })
      .catch(err => {
        alert("Failed to load output results");
      });
  }

  // Color Selection
  getColor(d) {
    return d > 0.75
      ? "#b2182b"
      : d > 0.5
        ? "#d6604d"
        : d > 0.25
          ? "#f4a582"
          : d > 0.01
            ? "#fddbc7"
            : d > 0
              ? "#f7f7f7"
              : d > -0.01
                ? "#d1e5f0"
                : d > -0.25 ? "#92c5de" : d > -0.5 ? "#4393c3" : "#2166ac";
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
              onClick={() =>
                this.setState({ showBrewDogs: !this.state.showBrewDogs })
              }
            >
              Show BrewDogs
            </p>

            {/* BrewDogs Button */}
            <p
              className={`tc pointer pa2 ba ${
                this.state.showBrewDogsComingSoon ? "bg-light-gray" : "bg-white"
              }`}
              onClick={() =>
                this.setState({
                  showBrewDogsComingSoon: !this.state.showBrewDogsComingSoon
                })
              }
            >
              Show BrewDogs Coming Soon
            </p>

            {/* LSOAs Button */}
            <p
              className={`tc pointer pa2 ba ${
                this.state.showLSOAs ? "bg-light-gray" : "bg-white"
              }`}
              onClick={() => {
                if (!this.state.outputDataLoaded) {
                  alert(
                    "Be patient young padawan! Still waiting on data from server."
                  );
                  return;
                }
                this.setState({
                  showLSOAs: !this.state.showLSOAs,
                  showCompositeMeasure: !this.state.showLSOAs
                    ? false
                    : this.showCompositeMeasure
                });
              }}
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
                this.setState({
                  showLSOAs: !this.state.showCompositeMeasure
                    ? false
                    : this.showLSOAs,
                  showCompositeMeasure: !this.state.showCompositeMeasure
                });
              }}
            >
              Show Composite Measure
            </p>

            <hr />

            {/* City Zoom Buttons */}
            <p
              className={`tc pointer pa2 ba br-white`}
              onClick={() => {
                this.setState({
                  center: [51.5116731, -0.1108892],
                  zoom: 13
                });
              }}
            >
              London
            </p>
            <p
              className={`tc pointer pa2 ba br-white`}
              onClick={() => {
                this.setState({
                  center: [53.4801082, -2.2404605],
                  zoom: 13
                });
              }}
            >
              Manchester
            </p>
            <p
              className={`tc pointer pa2 ba br-white`}
              onClick={() => {
                this.setState({
                  center: [53.4064681, -2.9949352],
                  zoom: 13
                });
              }}
            >
              Liverpool
            </p>
            <p
              className={`tc pointer pa2 ba br-white`}
              onClick={() => {
                this.setState({
                  center: [52.4794161, -1.9057012],
                  zoom: 13
                });
              }}
            >
              Birmingham
            </p>
          </div>
        </div>
        <Map
          center={this.state.center}
          zoom={this.state.zoom}
          className={`fr w-50 vh-100`}
        >
          {this.state.showLSOAs || this.state.showCompositeMeasure ? (
            <GeoJSON data={this.state.geoLSOAs} style={this.style} />
          ) : (
            ""
          )}
          <TileLayer
            // https://www.mapbox.com/studio/styles/mapbox/light-v9/
            url="https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2FtZXJvbnBvcnRlciIsImEiOiJjamVjdGgwZW4wcm9kMnhwYnA2NzgxOWF2In0.RVXtackCUG_tFb3OZUf95g"
          />
          {this.state.showBrewDogs
            ? brewDogLocations.map(brewDog => {
                return (
                  <Marker position={brewDog.pos} key={brewDog.url}>
                    <Popup>
                      <a href={brewDog.url}>{brewDog.url}</a>
                    </Popup>
                  </Marker>
                );
              })
            : ""}
          {this.state.showBrewDogsComingSoon
            ? brewDogComingSoonLocations.map(brewDog => {
                return (
                  <Marker position={brewDog.pos} key={brewDog.url}>
                    <Popup>
                      <a href={brewDog.url}>{brewDog.url}</a>
                    </Popup>
                  </Marker>
                );
              })
            : ""}
          <Control position="topright">
            <div
              className={`pa3 ma2 flex flex-column bg-near-white shadow-1 tc`}
            >
              <div className={`f6 b tc pa2`}>Composite Measure</div>
              <div>
                <div className={`r1 w1 h1 tl dib ma1`} />
                <div className={`dib v-top ma1 tr w3`}>> 0.75</div>
              </div>
              <div>
                <div className={`r2 w1 h1 tl dib ma1`} />
                <div className={`dib v-top ma1 tr w3`}>> 0.50</div>
              </div>
              <div>
                <div className={`r3 w1 h1 tl dib ma1`} />
                <div className={`dib v-top ma1 tr w3`}>> 0.25</div>
              </div>
              <div>
                <div className={`r4 w1 h1 tl dib ma1`} />
                <div className={`dib v-top ma1 tr w3`}>> 0.007</div>
              </div>
              <div>
                <div className={`n1 w1 h1 tl dib ma1`} />
                <div className={`dib v-top ma1 tr w3`} />
              </div>
              <div>
                <div className={`b1 w1 h1 tl dib ma1`} />
                <div className={`dib v-top ma1 tr w3`}>{"< -0.007"}</div>
              </div>
              <div>
                <div className={`b2 w1 h1 tl dib ma1`} />
                <div className={`dib v-top ma1 tr w3`}>{"< -0.25"}</div>
              </div>
              <div>
                <div className={`b3 w1 h1 tl dib ma1`} />
                <div className={`dib v-top ma1 tr w3`}>{"< -0.50"}</div>
              </div>
              <div>
                <div className={`b4 w1 h1 tl dib ma1`} />
                <div className={`dib v-top ma1 tr w3`}>{"< -0.75"}</div>
              </div>
            </div>
          </Control>
        </Map>
      </div>
    );
  }
}

export default App;
