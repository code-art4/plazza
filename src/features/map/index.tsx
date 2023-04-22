import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Zoom from '../../assets/zoom.svg';
import { TbCurrentLocation } from 'react-icons/tb';

function Map() {
  return (
    <div className='relative'>
      <button className='bg-white absolute z-[999] top-5 right-4 p-2 rounded'>
        <img src={Zoom} className='w-5 h-5' />
      </button>
      <button className='bg-white absolute z-[999] bottom-16 left-4 p-2 rounded'>
        <TbCurrentLocation size='1.2rem' color='#16962B' />
      </button>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '90vh' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
