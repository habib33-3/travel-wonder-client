import PropTypes from "prop-types";
import { useState, createContext, useEffect } from "react";
export const AuthContext = createContext(null);
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { useAxiosPublic } from "../hooks";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("CurrentUser-->", currentUser);
      setLoading(false);
      const userInfo = {
        email: currentUser.email,
      };

      if (currentUser) {
        axiosPublic.post("/auth/createToken", userInfo).then((res) => {
          console.log(res.data);
        });
      } else {
        axiosPublic.post("/logOut", userInfo).then((res) => {
          console.log(res.data);
        });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    user,
    createUser,
    logIn,
    updateUserProfile,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
