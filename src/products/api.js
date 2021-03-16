import { database } from "../config/firebase";

const ProductsApi = {
  add: (user, product) =>
    database.collection("users").doc(user).collection("products").add(product),
  update: (user, id, product) =>
    database
      .collection("users")
      .doc(user)
      .collection("products")
      .doc(id)
      .update(product),
  delete: (user, id) =>
    database
      .collection("users")
      .doc(user)
      .collection("products")
      .doc(id)
      .delete(),
  get: (user, id, callback) =>
    database
      .collection("users")
      .doc(user)
      .collection("products")
      .doc(id)
      .onSnapshot((product) => {
        callback({ id: product.id, ...product.data() });
      }),
  getAll: (user, callback) =>
    database
      .collection("users")
      .doc(user)
      .collection("products")
      .onSnapshot((snapshot) =>
        callback(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      ),
  onChange: (user, callback) =>
    database
      .collection("users")
      .doc(user)
      .collection("products")
      .onSnapshot((snapshot) =>
        callback(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      ),
};

export default ProductsApi;
