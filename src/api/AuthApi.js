import { auth, providers } from "../config/firebase";

const AuthApi = {
  signIn: () => auth.signInWithPopup(providers.google),
  signOut: () => auth.signOut(),
  onChange: (callback) => auth.onAuthStateChanged(callback),
};

export default AuthApi;
