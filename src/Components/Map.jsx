import { MapContainer, TileLayer } from 'react-leaflet'

export function Map(){
    return(
        // <div className='w-full h-full'>
            <MapContainer className='w-full h-full rounded-md' center={[-6.938553666274406, 107.57113629402194]} zoom={14} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
        // </div>
    )
}