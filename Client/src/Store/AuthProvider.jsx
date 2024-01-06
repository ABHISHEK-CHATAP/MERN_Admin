import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext();


export const AuthProvider = ({children}) => {

//need to create state variable to store token any use that token easily in form of variable
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [activeUser, setActiveUser] = useState("");
    const [serviceData, setServiceData] = useState("");
    const authorization = `Bearer ${token}` ;


    const storeTokenInLocalStorage = (serverToken) => {
        setToken(serverToken)
       return localStorage.setItem("token", serverToken);
    }

     const isLoggedIn = !!token;
     //matlab token hai toh [[true]] nhi toh [[false]] ==> [[isLoggedIn]]
     //double NOT returns Boolean value

     //For LOGOUT 
     const LogOutUser = ()=>{
        setToken("");
        return localStorage.removeItem("token");
     }

     //JWT AUTHENTICATION verify by token ==> to get currently loggin user data
     const userAuthentication = async ()=>{
        try {
            const response = await fetch("http://localhost:3000/api/auth/user",{
                method : "GET",
                headers :{
                    Authorization : authorization,
                }
            })
           if(response.ok == true){
            const data =await response.json();
            console.log("verify data", data.userData)
            setActiveUser(data.userData)
           }
            
        } catch (error) {
            console.log("user not verifird yet :",error)
        }
     }


     //Get Services Data from the database
     const getServices=async()=>{
        try {
            const response = await fetch("http://localhost:3000/api/data/service")
        
            if(response.ok){
                const data =await response.json();
                console.log("service data :", data)
                setServiceData(data);
            }

        } catch (error) {
          console.log("services error",error);  
        }
     }

     useEffect(()=>{
        getServices();
        userAuthentication();
     },[])


  return (
    <>
    
    <AuthContext.Provider value={{storeTokenInLocalStorage, LogOutUser, isLoggedIn, activeUser, serviceData, authorization}}>
        {children}
    </AuthContext.Provider>
    
    
    </>
  )
}

// --------------------------------------------------------------------------------------------

export const useAuth = () =>{
    const AuthContextValue =  useContext(AuthContext)

    if(!AuthContextValue){
        throw new Error("useAuth used outside of provider");
    }
    return AuthContextValue;
}