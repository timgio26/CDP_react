import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

export function Map({latlng,setLatLng}){
    function MapClick() {
        useMapEvents({
          click: (e) => {
            // console.log(latlng);
            setLatLng((curstate) => ({
              ...curstate,
              lat: e.latlng.lat,
              lng: e.latlng.lng,
            }));
          },
        });
        return null;
      }
    return(
        // <div className='w-full h-full'>
            <MapContainer className='w-full h-full rounded-md' center={[-6.938553666274406, 107.57113629402194]} zoom={14} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapClick />
              {latlng?.lat && <Marker position={latlng} />}
            </MapContainer>
        // </div>
    )
}