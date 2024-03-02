import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '90%',
  height: '600px'
};

const center = {
  lat: 39.8283,
  lng: -98.5795
};

// if i want to make the user able to toggle marker visibility, I need to dynamically use either [] or [hideLabelsStyle] in the options prop
const hideLabelsStyle = [
  {
    featureType: "administrative",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }]
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "off" }]
  }
  // Add more styles as needed
];

export default function MyMapComponent() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4.5}
        options={{ styles: hideLabelsStyle }} // Apply custom styles here
      >
        {/* Child components, like markers or shapes */}
      </GoogleMap>
    </LoadScript>
  )
}
