import { database } from "../config/firebase";

const MenuApi = {
  get: (userId, id, callback) =>
    database
      .collection("users")
      .doc(userId)
      .collection("restaurant")
      .doc(id)
      .onSnapshot((restaurant) => {
        console.log("api:", restaurant.data());
        callback({ id: restaurant.id, ...restaurant.data() });
      }),

  getProducts: (userId, id, callback) =>
    database
      .collection("users")
      .doc(userId)
      .collection("restaurant")
      .doc(id)
      .onSnapshot((restaurant) => {
        console.log("api:", restaurant.data());
        callback({ id: restaurant.id, ...restaurant.data() });
      }),
  onChange: (user, callback) =>
    database
      .collection("users")
      .doc(user)
      .collection("restaurant")
      .onSnapshot((snapshot) =>
        callback(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      ),
};

export default MenuApi;
