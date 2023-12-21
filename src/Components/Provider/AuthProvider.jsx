import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    // google login

    // eslint-disable-next-line no-unused-vars
    const googleIn = (value) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // create user

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
             setUser(currentUser)
             console.log('current user', currentUser)
            //  if(currentUser){
            //      const userInfo={email:currentUser.email}
            //      axiosPublic.post('/jwt',userInfo)
            //      .then(res=>{
            //          if(res.data.token){
            //              localStorage.setItem('access-token', res.data.token)
            //          }
            //          setLoading(false)
            //      })
            //  }
            //  else{
            //      localStorage.removeItem('access-token')
            //      setLoading(false)
            //  }
            setLoading(false)
             
         })
         return ()=>{
             return unsubscribe;
         }
     },[])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;