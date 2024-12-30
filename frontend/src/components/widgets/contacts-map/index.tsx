"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const center1 = {
  lat: 40.509294649167195,
  lng: 72.81225447009318,
};

const center2 = {
  lat: 40.531567,
  lng: 72.807029,
};

function ContactsMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
  });

  if (!isLoaded) return <div></div>;

  return (
    <GoogleMap mapContainerClassName="w-full aspect-[335/220] md:aspect-[560/682]" center={center1} zoom={12}>
      <Marker
        position={center1}
        animation={window.google.maps.Animation.BOUNCE}
      />
      <Marker
        position={center2}
        animation={window.google.maps.Animation.BOUNCE}
      />
    </GoogleMap>
  );
}

export default ContactsMap;
