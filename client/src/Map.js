import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl'
const mapboxApiAccessToken = "pk.eyJ1IjoiaWJyYS1oaW1hIiwiYSI6ImNrd2ZsMGl1ZjBmZ3Yyb3FiOGpxdm9lZHAifQ.TNUgo5DTV9m5SL-TyDpRWA"





function Map() {
    const [viewport, setViewport] = useState({
        latitude: 40.72893174760089,
        longitude: -74.00512191071573,
        zoom: 12
    });



    return (
        <div id="maPGL" >
            <div>
                <ReactMapGL
                    {...viewport}
                    
                    width='46vw' height='50vh'
                    mapboxA7piAccessToken={mapboxApiAccessToken}
                    mapStyle="mapbox://styles/ibra-hima/ckx5quc9f2zio15n1bgzy2n3h"
                    onViewportChange={viewport => setViewport(viewport)

                    }
                >
                    <Marker latitude={40.68134673820506} longitude={-73.94864650081735} offsetLeft={-10} offsetTop={-10}>
                        <div>
                            <svg width="12" height="19" viewBox="0 0 104 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_71_40)">
                                    <path d="M51.79 0C23.19 0 0 21.85 0 48.81C0 75.77 23.19 188.95 51.79 188.95C80.39 188.95 103.62 75.76 103.62 48.81C103.62 21.86 80.39 0 51.79 0ZM51.79 71.34C38.79 71.34 28.2 60.46 28.2 47.05C28.2 33.64 38.76 22.76 51.79 22.76C64.82 22.76 75.37 33.63 75.37 47.05C75.37 60.47 64.81 71.34 51.79 71.34Z" fill="url(#paint0_linear_71_40)" />
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_71_40" x1="0" y1="94.45" x2="103.57" y2="94.45" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#2B3990" />
                                        <stop offset="1" stop-color="#662D91" />
                                    </linearGradient>
                                    <clipPath id="clip0_71_40">
                                        <rect width="103.57" height="188.91" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                          </div>
                    </Marker>
                </ReactMapGL>
            </div>

        </div>
    );
}

export default Map

