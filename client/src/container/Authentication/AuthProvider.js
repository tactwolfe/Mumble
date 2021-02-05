import React, { useContext, useState , useEffect } from 'react';
import { auth } from '../../firebase';


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}


const AuthProvider = (props)=> {
    const [currentUser , setCurrentUser] = useState('')


    const signup = (email , password) => {
        return auth.createUserWithEmailAndPassword(email , password)
    }

    const  login = (email, password)=> {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logout = ()=> {
        return auth.signOut()
    }

    

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged( user => {
            setCurrentUser(user)
        })

        return unsubscribe

    },[])

    const value ={
        currentUser,
        signup,
        login,
        logout
    }

    console.log(currentUser);

    return(
        
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );

}

export default AuthProvider;
