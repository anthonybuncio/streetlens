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
        lat: 29.762778,
        lng: -95.383056,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 12,
        mapId: process.env.NEXT_PUBLIC_MAP_ID,
        disableDefaultUI: true,
      };

      const map = new Map(mapRef.current, mapOptions);
      const marker = new Marker({
        map: map,
        position: position,
      });

      if (list && list.length > 0) {
        list.map((item) => {
          const { lat, lng } = item.coords;

          if (lat !== "" || lng !== "") {
            const marker = new Marker({
              map: map,
              position: { lat: lat, lng: lng },
              title: `${item?.streets[0]} & ${item?.streets[1]}`,
            });
          }
        });
      }
    };

    initMap();
  }, []);

  return (
    <>
      <div
        // style={{ height: "800px", width: "1000px" }}
        className=" w-4/5 h-screen"
        ref={mapRef}
      />
    </>
  );
};
export default Map;
