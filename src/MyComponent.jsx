import './App.css'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom';


const center ={lat: 48.8584, lng: 2.2945}

function MyComponent(prop) {

    const location= useLocation()
    const h = location.state

  const { isLoaded} =useJsApiLoader({
    googleMapsApiKey: "AIzaSyCDF81DH6VVPskZ7nmv1U1-RmmfPecitp8"
  })

  if(!isLoaded){
    return<h1>Loding...................</h1>
  }

  return (
    <div style={{width:"100vw",height:"100vh"}}>
        <div>
            <div style={{textAlign: "center",backgroundColor:" rgb(204, 246, 114)"}}>
                <h1><u>
                    Aryush's Information
                </u>
                </h1>
                <p><strong>Name:{h.name}</strong></p>
                <p> <strong>E-Mail:aryush@gmail.com</strong></p>
                <p> <strong>Created At:Null</strong></p>
            </div>
        </div>
      <div>
          <GoogleMap center={center} zoom={15} mapContainerStyle={{width:"100vw",height:"100vh"}}>

          </GoogleMap>
      </div>
    </div>
  )
}

export default MyComponent
