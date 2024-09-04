import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  ///// register

  const [user, setUser] = useState(null);
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (result) => console.log(result.user)
    );
  };
  /// login pass email
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then((result) =>
      console.log(result.user)
    );
  };

  /// gitHub  login
  const gitHub = new GithubAuthProvider();
  const githubLogin = () => {
    return signInWithPopup(auth, gitHub);
  };
  /// google login
  const google = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, google);
  };
  /// facebook login
  const facebook = new FacebookAuthProvider();
  const facebookLogin = () => {
    return signInWithPopup(auth, facebook);
  };
  ///// value sen auth ifo
  const authInfo = {
    registerUser,
    loginUser,
    githubLogin,
    googleLogin,
    facebookLogin,
    user,
    setUser,
  };

  // useEffect(()=>{

  // },[])

  return (
    <div>
      {" "}
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
