import React, { Component } from "react";
import styled from "styled-components";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Gmap = () => {
  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey="AIzaSyCSIKk_7Ly7O2YPFQopN7xLxIiiqZMEr1c"
    >
      <GoogleMap
        mapContainerStyle={{
          height: "400px",
          width: "800px"
        }}
        id="example-map"
      />
    </LoadScript>
  );
};

// const GmapContainer = styled.div``;

export default Gmap;

// import React from "react";
// import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// import Gmarker from "./Gmarker";

// const Gmap = withScriptjs(
//   withGoogleMap(props => {
//     const markers = props.gogo.map(go => (
//       <Gmarker
//         key={go.uid}
//         go={go}
//         location={{ lat: go.closestPractice.lat, lng: go.closestPractice.lon }}
//       />
//     ));

//     return (
//       <GoogleMap defaultZoom={14} center={{ lat: 42.3601, lng: -71.0589 }}>
//         {markers}
//       </GoogleMap>
//     );
//   })
// );

// export default Gmap;
