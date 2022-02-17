// import { Button, CssBaseline} from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import  ReactMapGL, {GeolocateControl} from 'react-map-gl';
// import React, {useState} from 'react';


// const Dashboard = () => {
//   const navigate = useNavigate()
//   const handleLogout = () => {
//     console.log("Logout Clicked");
//     navigate('/')
//   }
//   let [viewport, setViewport] = useState({
//     longitude: -100,
//       latitude: 40,
//       zoom: 3.5,
//       width: window.innerWidth,
//       height: window.innerHeight
//   });
//   return <>
//   <ReactMapGL
// accessToken = 'pk.eyJ1IjoiYmhhdnlhOTk5IiwiYSI6ImNrenF1NzY5MjBicnUydm85bXZsZWpyYnQifQ.QKeSw3VFxP54m6OfUR65fQ'
//    {...viewport}
//    onViewportChange = {(newView) => setViewport(newView)}
    
//   >
   
//   </ReactMapGL>
  
  
//         {/* <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button> */}
      
     
//   </>;
// };

// export default Dashboard;
import React, { useState } from "react";
import ReactMapGL, { GeolocateControl, Marker } from "react-map-gl";
import { Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "mapbox-gl/dist/mapbox-gl.css";
// import "./App.css";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 20;

const geolocateStyle = {
  position: "absolute",
  bottom: 100,
  left: 0,
  margin: 10,
};

const Dashboard= () => {
 const navigate = useNavigate()
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate('/')
  } 
  const [viewport, setViewport] = useState({
    latitude: 0.0,
    longitude: 0.0,
    width: "100vw",
    height: "100vh",
    zoom: 1.25,
  });
  const [userLocation, setUserLocation] = useState({});
  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxAccessToken = "pk.eyJ1IjoibmVlbGFtOTkiLCJhIjoiY2t6cXlmdzFvMHE1NDMxbGc3d3NqcHRlYiJ9.-uJmnV84dJhH1xyYOq80Qw"
        style={{width: 800, height: 600}}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <div style={geolocateStyle}>
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            showUserLocation={true}
            auto={true}
            onGeolocate={(PositionOptions) => {
              setUserLocation({
                ...userLocation,
                latitude: PositionOptions["coords"].latitude,
                longitude: PositionOptions["coords"].longitude,
              });
            }}
          />
        </div>
        {Object.keys(userLocation).length > 0 ? (
          <Marker
            longitude={userLocation.longitude}
            latitude={userLocation.latitude}
          >
            <svg
              height={SIZE}
              viewBox="0 0 24 24"
              style={{
                cursor: "pointer",
                fill: "#d00",
                stroke: "none",
                transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
              }}
            >
              <title>You are here</title>
              <path d={ICON} />
            </svg>
          </Marker>
        ) : null}
        <div className="viewPortnfo">
          <div>
            <strong>Zoom:</strong> <span>{viewport.zoom}</span>
          </div>
        </div>
      </ReactMapGL>
       <Button variant='contained' color='success' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
    </div>
  );
}

export default Dashboard;
