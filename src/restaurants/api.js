import { database } from "../config/firebase";

const RestaurantApi = {
  add: (user, restaurant) =>
    database
      .collection("users")
      .doc(user)
      .collection("restaurant")
      .add(restaurant),
  update: (user, id, restaurant) =>
    database
      .collection("users")
      .doc(user)
      .collection("restaurant")
      .doc(id)
      .update(restaurant),
  delete: (user, id) =>
    database
      .collection("users")
      .doc(user)
      .collection("restaurant")
      .doc(id)
      .delete(),
  get: (user, id, callback) =>
    database
      .collection("users")
      .doc(user)
      .collection("restaurant")
      .doc(id)
      .onSnapshot((restaurant) => {
        callback({ id: restaurant.id, ...restaurant.data() });
      }),
  getAll: (user, callback) =>
    database
      .collection("users")
      .doc(user)
      .collection("restaurant")
      .onSnapshot((snapshot) =>
        callback(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      ),
  onChange: (user, callback) =>
    database
      .collection("users")
      .doc(user)
      .collection("restaurant")
      .onSnapshot((snapshot) =>
        callback(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      ),
};

export default RestaurantApi;
