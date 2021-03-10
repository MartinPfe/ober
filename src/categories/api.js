import { database } from "../config/firebase";

const CategoryApi = {
  add: (user, category) =>
    database.collection("users").doc(user).collection("category").add(category),
  update: (user, id, category) =>
    database
      .collection("users")
      .doc(user)
      .collection("category")
      .doc(id)
      .update(category),
  delete: (user, id) =>
    database
      .collection("users")
      .doc(user)
      .collection("category")
      .doc(id)
      .delete(),
  get: (user, id, callback) =>
    database
      .collection("users")
      .doc(user)
      .collection("category")
      .doc(id)
      .onSnapshot((category) => {
        callback({ id: category.id, ...category.data() });
      }),
  getAll: (user, callback) =>
    database
      .collection("users")
      .doc(user)
      .collection("category")
      .onSnapshot((snapshot) =>
        callback(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      ),
  onChange: (user, callback) =>
    database
      .collection("users")
      .doc(user)
      .collection("category")
      .onSnapshot((snapshot) =>
        callback(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      ),
};

export default CategoryApi;
