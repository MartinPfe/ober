import React, { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantApi from "../../api/RestaurantApi";
import useUser from "../../hooks/useUser";

const Restaurants = () => {
  const user = useUser();

  const [Restaurants, setRestaurants] = useState([]);

  React.useEffect(() => {
    console.log("usuario:", user);
    console.log("usuario.uid:", user.uid);

    RestaurantApi.getAll(user.uid, (restaurants) => {
      console.log("restaurantes:", restaurants);
      setRestaurants(restaurants);
    });
  }, [user]);

  return (
    <div>
      Restaurants
      <Link to="/restaurants/add">
        {" "}
        <button>Agregar Restaurante</button>
      </Link>
      <div>
        {Restaurants.map((restaurant) => (
          <div key={restaurant.id}>
            {restaurant.name} - {restaurant.address}
            <Link to={`/restaurants/add/${restaurant.id}`}>
              <button>Editar</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
