import React, {useState , useEffect} from 'react'
import ReactMapGL , {Marker , NavigationControl , ScaleControl} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
function Map() {
    const [lat, setlat] = useState(26.8467);
    const [long, setlong] = useState(80.9462);

    const [viewport, setViewport] = useState({
        longitude: -122.45,
        latitude: 37.78,
        width : "100vw" ,
        height : "500px" ,
        zoom: 14
      });
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy: true});
    } , [lat] , [long])
    const success = (pos) => {
        let crd = pos.coords;
        let l = crd.latitude;
        let lo = crd.longitude;
        setlat(crd.latitude);
        setlong(crd.longitude);
        setViewport({...viewport , latitude : l , longitude : lo});
        }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  // console.log(lat , " " , long);
  // console.log(viewport)
    return (
        <>
        <ReactMapGL {...viewport} mapboxApiAccessToken='pk.eyJ1IjoiZDRya2RlbWlhbiIsImEiOiJja3pmdnoxcWoweTV4Mm9wZDlpZWRzMnE1In0.hNfz3whhzxB1nx_nUzH1Rw'
        mapStyle={'mapbox://styles/d4rkdemian/ckylcf4x4bpt815qqemts9ms3'}
        onViewportChange={(newviewport) => {
            setViewport(newviewport);
        }} >
        <Marker latitude={lat} longitude={long} offsetLeft={-20} offsetTop={-10}>
          <div style={{color : "red" }}><i class="fas fa-map-marker-alt fa-1x"></i></div>
        </Marker>
        <NavigationControl style={{right : 10 , top : 10}} />
        <ScaleControl maxWidth={100} unit="metric" style={{left:20 , bottom : 100}} />
        </ReactMapGL>
        </>
    )
}

export default Map
