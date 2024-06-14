import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    const logOut = ()=>{
       return signOut(auth).then(()=> setUser(null))
    }

    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    const updatePass = (newPassword)=>{
      return updatePassword(auth.currentUser, newPassword)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

          if (currentUser) {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser.email);
            if(currentUser?.email){
    
              const loggedUser = {email: currentUser?.email};
    
              fetch("https://show-hunt-backend.onrender.com/jwt", {
                method: "POST",
                headers: {
                  "content-type": "application/json"
              },
                body: JSON.stringify(loggedUser)
              })
              .then(res => res.json())
              .then(data => {
                localStorage.setItem("token", data.token)
                
              })
            }
          } else {
            setLoading(false);
            localStorage.removeItem("token");
          }
        });
        return () => {
          return unsubscribe();
        };
      }, []);

      const authData = {user, loading, signIn, createUser, googleLogin, logOut, updatePass} 

      return(
        <AuthContext.Provider value={authData} >
            {children}
        </AuthContext.Provider>
      )
};


export default AuthProvider;