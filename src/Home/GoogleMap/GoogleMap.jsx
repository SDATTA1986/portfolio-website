import GoogleMapReact from 'google-map-react';
import {  FaMapMarkerAlt } from 'react-icons/fa';

const AnyReactComponent = ({ text }) => <div style={{color:'red'}}><FaMapMarkerAlt className='text-2xl'></FaMapMarkerAlt></div>;
const GoogleMap = () => {
    const defaultProps = {
        center: {
            lat: 22.57785,
            lng: 88.32867
        },
        zoom: 12
    };
    return (
        <div>
            {/* <div style={{ height: '300px', width: '300px' }}> */}
            <div className='h-[350px] md:h-[700px] w-[350px] md:w-[700px]'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: `${import.meta.env.VITE_GOOGLE_API_KEY}` }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={defaultProps.center.lat}
                        lng={defaultProps.center.lng}
                        text=""
                    />
                </GoogleMapReact>
            </div>
            
        </div>
    );
};

export default GoogleMap;