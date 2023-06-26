// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxList,
//   ComboboxOption,
//   ComboboxPopover,
// } from "@reach/combobox";
// import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
// import React, { useEffect, useMemo, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import { setServiceLocation } from "../redux/gmap";
// import { setUserLocation } from "../redux/userSlice";

// const Places = (props: any) => {
//   return (
//     <>
//       <GoogleeMap />
//     </>
//   );
// };

// const GoogleeMap = () => {
//   const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
//   const latlong = useSelector((state: any) => state.mapSlice.location);
//   const [selected, setSelectedPlace] = useState({
//     lat: latlong[0] || 27.6700695,
//     lng: latlong[1] || 85.3198825,
//   });

//   const setSelected = (location: any) => {
//     // console.log(location);
//     setSelectedPlace(location);
//   };

//   // Adding Users location to Redux
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(setUserLocation(selected));
//   }, [selected]);

//   return (
//     <div className="flex flex-col ">
//       <div className="places-container md:w-[600px]">
//         <PlacesAutocomplete setSelected={setSelected} />
//       </div>
//       <GoogleMap
//         zoom={15}
//         center={selected}
//         mapContainerClassName="map-container h-[140px] md:w-[600px] md:h-[270px] mt-5 p-[10px] border-2 border-[var(--primary-color)] rounded-xl "
//       >
//         <MarkerF position={selected} />
//       </GoogleMap>
//     </div>
//   );
// };

// const PlacesAutocomplete = ({ setSelected }: any) => {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   const dispatch = useDispatch();
//   const handleSelect = async (address: any) => {
//     setValue(address, false);
//     // console.log(address);
//     dispatch(setServiceLocation(address));
//     clearSuggestions();

//     const results = await getGeocode({ address });
//     const { lat, lng } = await getLatLng(results[0]);
//     setSelected({ lat, lng });
//     dispatch(setUserLocation([lat, lng]));
//     // console.log(value);
//     // dispatch(setUserServiceAddress(value));
//   };

//   return (
//     <Combobox onSelect={handleSelect}>
//       <ComboboxInput
//         value={value}
//         onChange={(e) => {
//           e.preventDefault();
//           setValue(e?.target?.value);
//         }}
//         // disabled={!ready}
//         className="combobox-input xsm:p-2 md:p-3  rounded-xl outline-none w-full"
//         placeholder="Search an address"
//       />
//       <ComboboxPopover className="bg-white combobox-input p-3 rounded-xl outline-none w-full mt-2 hover:cursor-pointer">
//         <ComboboxList>
//           {status === "OK" &&
//             data.map(({ place_id, description }) => (
//               <ComboboxOption key={place_id} value={description} />
//             ))}
//         </ComboboxList>
//       </ComboboxPopover>
//     </Combobox>
//   );
// };

const Places = (props: any) => {
  return (
    <>
     
    </>
  );
};


export default Places