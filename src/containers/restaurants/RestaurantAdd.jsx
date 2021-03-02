import React, { useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import RestaurantApi from "../../api/RestaurantApi";
import useUser from "../../hooks/useUser";

const RestaurantAdd = () => {
  const form = useRef(null);
  const history = useHistory();
  const user = useUser();

  const { restaurantId } = useParams();

  const initialState = {
    form: {
      name: "",
      address: "",
    },
  };

  const [currentRestaurant, setCurrentRestaurant] = useState(initialState);

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const formRestaurant = {
      name: formData.get("name"),
      address: formData.get("address"),
    };
    console.log("restaurantId:", restaurantId);

    if (restaurantId != null) {
      RestaurantApi.update(user.uid, restaurantId, formRestaurant);
      alert("restaurante Actualizado!");
    } else {
      RestaurantApi.add(user.uid, formRestaurant);
      alert("restaurante agregado!");
    }

    history.push("/restaurants");
  };

  React.useEffect(() => {
    if (user != null) {
      if (restaurantId != null) {
        console.log("Haciendo el get?");
        RestaurantApi.get(user.uid, restaurantId, (restaurant) => {
          const updatedState = {
            form: {
              name: restaurant.name,
              address: restaurant.address,
            },
          };

          setCurrentRestaurant(updatedState);
        });
      }
    }
  }, [user, restaurantId]);

  const handleChange = (e) => {
    setCurrentRestaurant({
      form: {
        ...currentRestaurant.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div>
      <h2>Nuevo restaurante</h2>
      <form ref={form}>
        <input
          type="text"
          name="name"
          id="name"
          value={currentRestaurant.form.name || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          id="address"
          value={currentRestaurant.form.address || ""}
          onChange={handleChange}
        />

        <input
          type="button"
          value={
            restaurantId != null ? "Editar restaurant" : "Agregar restaurant"
          }
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default RestaurantAdd;
