import React from "react";
import ReactMapboxGL from "react-mapbox-gl";

const Map = ReactMapboxGL({
  accessToken:
    "pk.eyJ1Ijoic3RvcmNrcGhvdG9zIiwiYSI6ImNrN3ptM2Z2azA1eHQzbGxuc3FocmE2azIifQ.HJ-XGcxecYN2rm2SY_y6vw"
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -122,
      lat: 48,
      zoom: 5
    };
  }

  render() {
    return (
      <div>
        <Map //eslint-disable-next-line
          style="mapbox://styles/mapbox/streets-v11"
          containerStyle={{
            height: '100vh',
            width: '100vw'
          }}
        />
      </div>
    );
  }
}

export default App;
