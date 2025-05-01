import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function RestaurantsList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then(setRestaurants);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-12">


      <div className="w-full max-w-xl bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 text-green-400 text-center">Restaurants</h1>
        <ul className="space-y-4">
          {restaurants.map((restaurant) => (
            <li key={restaurant.id} className="bg-gray-700 rounded p-4 shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-white">{restaurant.name}</h2>
              <p className="text-sm text-gray-300">{restaurant.address}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantsList;
