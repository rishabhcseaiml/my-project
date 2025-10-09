import React, { useState } from "react";
import "./traveldestination.css";

const initialDestinations = [
  { id: 1, place: "mumbai", country: "india" },
  { id: 2, place: "Tokyo", country: "Japan" },
  { id: 3, place: "Sydney", country: "Australia" },
];

function TravelDestination() {
  const [destinations, setDestinations] = useState(initialDestinations);

  const handleDelete = (id) => {
    setDestinations(destinations.filter((dest) => dest.id !== id));
  };

  return (
    <div>
      <h2>Travel Destinations</h2>
      <ul>
        {destinations.map((dest) => (
          <li key={dest.id}>
            <span>
              <strong>{dest.place}</strong>, {dest.country}
            </span>
            <button onClick={() => handleDelete(dest.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TravelDestination;