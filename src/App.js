import React from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const libraries = ["places"]
const containerStyle = {
  width: "800px",
  height: "600px",
  margin: "auto",
  marginTop: "50px",
  border: "1px solid #ccc",
  borderRadius: "8px",
}
const center = {
  lat: 36.84436497800324, // default latitude
  lng: 10.16960183068678, // default longitude


}

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAC_QG5jXnRt4cF53Yz0f-koYtVs91xDVA",
    libraries,
  })

  if (loadError) {
    return <div>Error loading maps</div>
  }

  if (!isLoaded) {
    return <div>Loading maps</div>
  }

  return (
    <div>
      <div style={{ margin: "100px" }}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  )
}

export default App
