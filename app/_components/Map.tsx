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

      const { Map, InfoWindow } = (await loader.importLibrary(
        "maps"
      )) as google.maps.MapsLibrary;
      const { AdvancedMarkerElement, PinElement } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const localCoords = {
        lat: 29.762778,
        lng: -95.383056,
      };

      const mapOptions: google.maps.MapOptions = {
        center: localCoords,
        zoom: 12,
        mapId: process.env.NEXT_PUBLIC_MAP_ID,
        disableDefaultUI: true,
      };

      const map = new Map(mapRef.current, mapOptions);
      const infoWindow = new InfoWindow();
      // const marker = new Marker({
      //   map: map,
      //   position: position,
      // });

      if (list && list.length > 0) {
        list.map((item) => {
          const { lat, lng } = item.coords;

          if (lat !== "" || lng !== "") {
            // Customize the marker.
            const pinStyle = new PinElement({
              background: "#616A6B",
              borderColor: "black",
              glyphColor: "white",
              scale: 0.8,
            });

            const marker = new AdvancedMarkerElement({
              map: map,
              position: { lat: lat, lng: lng },
              title: `${item?.streets[0]} & ${item?.streets[1]}`,
              content: pinStyle.element,
            });

            // Add a click listener for each marker, and set up the info window.
            marker.addListener("click", ({ domEvent, latLng }) => {
              const { target } = domEvent;
              infoWindow.close();
              infoWindow.setContent(marker.title);
              infoWindow.open(marker.map, marker);
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
        className=" w-4/5 h-screen text-black"
        ref={mapRef}
      />
    </>
  );
};
export default Map;
