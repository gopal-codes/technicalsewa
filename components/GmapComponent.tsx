import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  MarkerF,
} from "@react-google-maps/api";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import LoadingComponent from "./LoadingComponent";
// import locationIcon from '@iconify/react'

const Map = (props: any) => {
  const latlong = props.latlong;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC2iS_ad-zpImBQFaY3XeZVdzxNLU4nz8s",
  });
  if (!isLoaded) return <LoadingComponent />;
  return <GMap />;
};

export default Map;

// const center = { lat: 44, lng: 80 };
const GMap = (props: any) => {
  const latlong = useSelector((state: any) => state.mapSlice.location);
  return (
    <div className="w-[300px] border-2 border-black">
      <GoogleMap
        zoom={15}
        center={{ lat: 27.6700695, lng: 85.3198825 }}
        mapContainerClassName="map-container w-[400px] h-[250px]"
      >
        <MarkerF position={{ lat: 27.6700695, lng: 85.3198825 }} />
      </GoogleMap>
    </div>
  );
};
