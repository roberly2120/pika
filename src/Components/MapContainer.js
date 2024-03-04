import React, { useEffect, useState, useRef, useContext } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import axios from 'axios';
import { AppContext } from '../State';

const containerStyle = {
  width: '70%',
  height: '600px'
};

const center = {
  lat: 2.7110,
  lng: -76.0721
};
const zoom = 6;
const hideLabelsStyle = [
  // {
  //   featureType: "administrative",
  //   elementType: "labels",
  //   stylers: [{ visibility: "off" }]
  // },
  // {
  //   featureType: "poi",
  //   stylers: [{ visibility: "off" }]
  // },
  // {
  //   featureType: "road",
  //   elementType: "labels.icon",
  //   stylers: [{ visibility: "off" }]
  // },
  // {
  //   featureType: "transit",
  //   stylers: [{ visibility: "off" }]
  // }
];

const coordinatesArray = [
  { lat: 40.7128, lng: -74.0060 }, // New York
  { lat: 34.0522, lng: -118.2437 }, // Los Angeles
  { lat: 41.8781, lng: -87.6298 }   // Chicago
]

export default function MyMapComponent({ occurrences }) {
  // const [markerVisible, setMarkerVisible] = useState(true); // State to toggle visibility
  const mapRef = useRef(null);
  const coordinates = useState(coordinatesArray)
  const [isMapLoaded, setIsMapLoaded] = useState(false); // this ensures the map is loaded before we add markers
  const { state, setState } = useContext(AppContext);


  const getOccurrence = async (id) => {
    const res = await axios.get(`https://api.gbif.org/v1/occurrence/${id}`)
    console.log(res.data)
    setState({ ...state, currentOccurrence: res.data })
  }
  useEffect(() => {
    if (mapRef.current && window.google) {
        occurrences.forEach(occurrence => {
          const coord = { lat: occurrence.decimalLatitude, lng: occurrence.decimalLongitude }
          const marker = new window.google.maps.Marker({
            position: coord,
            map: mapRef.current,
            icon: {
              url: '../olinguito.svg',
              scaledSize: new window.google.maps.Size(20,20),
            }
          });
          marker.addListener('click', () => {
            getOccurrence(occurrence.gbifID)
          })
        });
    }
  }, [isMapLoaded, occurrences]);


  return (
    <>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={{ styles: hideLabelsStyle }}
          onLoad={map => {
            mapRef.current = map
            setIsMapLoaded(true)
          }}
        >
        </GoogleMap>
      </LoadScript>

    </>
  )
}
