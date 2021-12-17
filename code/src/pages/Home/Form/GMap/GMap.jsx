import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '40vw',
  height: '400px',
  marginLeft:"45px"
};

const center = {
  lat: 42.87448245700053, 
  lng:74.5920964669814242
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAyMCxnMp9wtONhyfjIDmLlHV0v_1Sr4Yc"
  })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

  return isLoaded ? (
      <GoogleMap
      
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
       
        
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)





