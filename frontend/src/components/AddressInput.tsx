
import styles from '@/styles/numberInput.module.css';
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
    <div className={styles.numberInputWrapper}>
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
          onChange={(e) => setAddress(e.target.value)} // Updates state when user types
          className={styles.addressInput} // Added className for external styling
          style={{
            width: "100%",
            padding: "18px",
            fontSize: "20px",
            border: "1px solid #f9f9f9",
            borderRadius: "4px",
            backgroundColor: "#121212",
            color: "#e0c097",
          }}
        />
      </Autocomplete>
      <p>
        Selected Address:{" "}
        <span className={styles.addressLink}
        //   style={{
        //     color: "#007BFF",
        //     textDecoration: "underline",
        //     cursor: "pointer",
        //   }}
          onClick={() =>
            address &&
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                address
              )}`,
              "_blank"
            )
          }
        >
          {address || "No address selected"}
        </span>
      </p>
    </div>
  );
};

export default AddressInput;
