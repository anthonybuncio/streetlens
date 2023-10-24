"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

const Map = ({ list }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");

      const position = {
        lat: 29.749907,
        lng: -95.358421,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 10,
      };

      const map = new Map(mapRef.current, mapOptions);

      const marker = new Marker({
        map: map,
        position: position,
      });

      if (list && list.length > 0) {
        list.map((item) => {
          const { lat, long } = item.coords;
          console.log(item.coords);
          if (lat !== "" || long !== "") {
            const marker = new Marker({
              map: map,
              position: { lat: lat, lng: long },
            });
          }
        });
      }
    };

    initMap();
  }, []);

  return (
    <>
      <div style={{ height: "600px" }} ref={mapRef} />
    </>
  );
};
export default Map;
