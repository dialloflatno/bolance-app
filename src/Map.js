import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';





const mapboxApiAccessToken = "pk.eyJ1IjoiaWJyYS1oaW1hIiwiYSI6ImNrd2ZsMGl1ZjBmZ3Yyb3FiOGpxdm9lZHAifQ.TNUgo5DTV9m5SL-TyDpRWA"
function Map() {
    const [viewport, setViewport] = useState({
        latitude: 40.72893174760089,
        longitude: -74.00512191071573,
        zoom: 12
    });

    return (
        <div id="maPGL" >
            <ReactMapGL
                {...viewport}
                width="40vw" height="60vh"
                mapboxApiAccessToken={mapboxApiAccessToken}
                mapStyle="mapbox://styles/ibra-hima/ckx5quc9f2zio15n1bgzy2n3h"
                onViewportChange={viewport => setViewport(viewport)

                }
            >
                <Marker latitude={40.68134673820506} longitude={-73.94864650081735} offsetLeft={-10} offsetTop={-10}>
                <div>
                    
                </div>
                </Marker>
            </ReactMapGL>

        </div>
    );
}

export default Map

