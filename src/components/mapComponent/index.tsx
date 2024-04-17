import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { useEffect, useRef, useState } from "react";

interface MapComponentProps {
  initialMarker?: { lat: number; lng: number };
}

export default function MapComponent({ initialMarker }: MapComponentProps) {
  const [map, setMap] = useState<google.maps.Map>();
  const ref = useRef<HTMLDivElement>(null);
  const [markerCluster, setMarkerClusters] = useState<MarkerClusterer>();
  const [marker, setMarker] = useState<{ lat: number; lng: number } | undefined>(initialMarker);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: { lat: 6.270932528366708, lng: -75.57752374552615 },
          zoom: 10,
        })
      );
    }
  }, [map]);

  useEffect(() => {
    if (map && !markerCluster) {
      map.addListener("click", (e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
          const { lat, lng } = e.latLng;
          setMarker({ lat: lat(), lng: lng() });
        }
      });
      setMarkerClusters(new MarkerClusterer({ map, markers: [] }));
    }
  }, [map, markerCluster]);

  useEffect(() => {
    if (marker && markerCluster) {
      markerCluster.clearMarkers();
      markerCluster.addMarker(
        new window.google.maps.Marker({
          position: { lat: marker.lat, lng: marker.lng },
        })
      );
    }
  }, [marker, markerCluster]);

  // Update marker when initialMarker prop changes
  useEffect(() => {
    if (initialMarker) {
      setMarker(initialMarker);
    }
  }, [initialMarker]);

  return (
    <>
      <div ref={ref} style={{ width: "100%", minHeight: "400px", borderRadius: "20px" }}></div>
    </>
  );
}
