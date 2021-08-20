import firebase from "firebase";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";
import { useCallback } from "react";
import { createContext } from "react";
import { useContext } from "react";
import type { AuthEmission } from "@react-firebase/auth/dist/types";
import type { FC } from "react";

const config = {
  apiKey: "AIzaSyDzfyI93UptMgOge1LIX7kf4cbzJmfksgA",
  authDomain: "mamu-96d9e.firebaseapp.com",
  projectId: "mamu-96d9e",
  storageBucket: "mamu-96d9e.appspot.com",
  messagingSenderId: "553590226141",
  appId: "1:553590226141:web:07a922b1fe07b99fd4af34",
  measurementId: "G-03TBZC6X0Q",
  databaseURL: "https://mamu-96d9e.firebaseio.com",
};

const FireBaseStateContext = createContext<AuthEmission>({} as AuthEmission);

export const useFireBaseState = () => useContext(FireBaseStateContext);
export const useFireBase = () => {
  const googleLogin = useCallback(() => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleAuthProvider);
  }, []);

  return {
    googleLogin,
  };
};

export const FireBaseProvider: FC = ({ children }) => {
  return (
    <FirebaseAuthProvider firebase={firebase} {...config}>
      <FirebaseAuthConsumer>
        {(fireBaseState) => (
          <FireBaseStateContext.Provider value={fireBaseState}>
            {children}
          </FireBaseStateContext.Provider>
        )}
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  );
};
