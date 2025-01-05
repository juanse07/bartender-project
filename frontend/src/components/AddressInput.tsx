
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import React, { useRef, useState } from "react";

const libraries: ("places")[] = ["places"];

const AddressInput: React.FC = () => {
  const [address, setAddress] = useState<string>(""); // React's state for the input value
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });

  if (loadError) return <div>Error loading Google Maps API</div>;
  if (!isLoaded) return <div>Loading...</div>;

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();
    if (place) {
      const addressComponents = place.address_components || [];
      const state = addressComponents.find((component) =>
        component.types.includes("administrative_area_level_1")
      )?.short_name;

      if (state === "CO") {
        setAddress(place.formatted_address || "");
      } else {
        alert("Please select an address in Colorado.");
        setAddress("");
      }
    }
  };

  return (
    <div>
      <Autocomplete
        onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
        onPlaceChanged={handlePlaceChanged}
        options={{
          componentRestrictions: { country: "us" },
        }}
      >
        <input
          type="text"
          placeholder="Enter address"
          defaultValue={address} // Use defaultValue instead of value
          onChange={(e) => setAddress(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </Autocomplete>
      <p>Selected Address: {address}</p>
    </div>
  );
};

export default AddressInput;
