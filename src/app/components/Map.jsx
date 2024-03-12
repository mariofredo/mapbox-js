'use client';
import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
export default function Map() {
  const mapbox_token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  useEffect(() => {
    mapboxgl.accessToken = mapbox_token;
    const map = new mapboxgl.Map({
      container: 'map_container',
      // style: 'mapbox://styles/mapbox/streets-v11',
    });
    // Set map container size
    map.resize();

    // Cleanup function
    return () => map.remove();
  }, []);

  return (
    <div style={{width: '100%', height: '100vh'}}>
      <div id='map_container' style={{width: '100%', height: '100%'}}></div>
    </div>
  );
}
