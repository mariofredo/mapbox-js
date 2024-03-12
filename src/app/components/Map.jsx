'use client';
import React, {useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
export default function Map() {
  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiaGFubnlrdW5hZGkiLCJhIjoiY2x0bzRkZXM5MGVvbTJxbWV2YzcyenR4byJ9.MnfyKtkUp-198Xq7qhVIjA';
    console.log(process.env.MAPBOX_TOKEN, 'process.env.MAPBOX_TOKEN');
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
