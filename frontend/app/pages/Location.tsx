/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import SearchSuggestion from "./SearchSuggestion";

function Location() {
  const ACCESS_TOKEN =
    "pk.eyJ1IjoiZW50b3VhbmVzIiwiYSI6ImNsenk3em85ZDB4bGQyeXNhNnY5Nmc0ZXAifQ.QwQp-Z5AywO59kh6DkRxjg";
  const [address, setAddress] = useState({
    streetAndNumber: "",
    place: "",
    region: "",
    postcode: "",
    country: "",
    latitude: 47.37,
    longitude: 8.54,
  });

  return (
    <>
      <h1 className="text-3xl font-bold">Choose a location</h1>
      <div className="flex justify-center gap-5">
        <Select defaultValue="2km">
          <SelectTrigger className="w-[8rem]">
            <SelectValue placeholder="Within" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Distance</SelectLabel>
              <SelectItem value="1km">1 km</SelectItem>
              <SelectItem value="1.5km">1.5 km</SelectItem>
              <SelectItem value="2km">2 km</SelectItem>
              <SelectItem value="3km">3 km</SelectItem>
              <SelectItem value="4km">4 km</SelectItem>
              <SelectItem value="5km">5 km</SelectItem>
              <SelectItem value="10km">10 km</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <SearchSuggestion setAddress={setAddress} access_token={ACCESS_TOKEN} />
      </div>
      <div className="flex justify-center w-full h-[30rem]">
        <Map
          mapboxAccessToken={ACCESS_TOKEN}
          initialViewState={{
            //47.37, 8.54
            longitude: address.longitude,
            latitude: address.latitude,
            zoom: 12,
          }}
          style={{ borderRadius: "1rem" }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        />
      </div>
    </>
  );
}

export default Location;
