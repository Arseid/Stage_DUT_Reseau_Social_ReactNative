import React, {createContext,useState} from 'react';
import { BASE_URL } from '../config';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

export const AuthContext=createContext();

export const AuthProvider = ({children}) => {

    const[userInfo,setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const register = (forename,surname,email,pwd,type,option1,option2) => {

        setIsLoading(true);

        var APIURLInsert=`${BASE_URL}/insert.php`;

        var registerHeaders={
            'Accept' : 'application/json',
            'Content-Type':'application.json'
        };

        var registerData={
            forename:forename,
            surname:surname,
            email:email,
            pwd:pwd,
            type:type,
            option1:option1,
            option2:option2,
        };

        fetch(APIURLInsert,
            {
                method:'POST',
                headers:registerHeaders,
                body: JSON.stringify(registerData)
            })
            .then((response)=>response.json())
            .then((response)=>
            {
                setUserInfo(registerData);
                console.log(userInfo);
                AsyncStorageLib.setItem('userInfo',JSON.stringify(userInfo));
                setIsLoading(false);
                console.log(response[0].Message);
                if (response[0].Message=='user successfully registered') setIsLoggedIn(true);
                if (response[0].Message=='already exists') alert('Email déjà utilisé');
            })
            .catch((e)=>{
                console.log("Error"+e);
                setIsLoading(false);
            })
    
    };

    const login = (email,pwd) => {
        if (email.length==0 || pwd.length==0){
            alert("FILL PLS")
        }
        else {
            setIsLoading(true);

            var APIURLInsert=`${BASE_URL}/login.php`;

            var loginHeaders={
                'Accept' : 'application/json',
                'Content-Type':'application.json'
            };

            var loginData={
                email:email,
                pwd:pwd,
            };

            fetch(APIURLInsert,
                {
                    method:'POST',
                    headers:loginHeaders,
                    body: JSON.stringify(loginData)
                })
                .then((response)=>response.json())
                .then((response)=>
                {
                    setIsLoading(false);
                    console.log(response[0].Message);
                    if (response[0].Message=='found'){
                        setIsLoggedIn(true);
                        loginData.forename=response[0].Forename;
                        loginData.surname=response[0].Surname;
                        console.log(loginData);
                        setUserInfo(loginData);
                        AsyncStorageLib.setItem('userInfo',JSON.stringify(userInfo));
                    }
                })
                .catch((e)=>{
                    console.log("Error"+e);
                    setIsLoading(false);
                })
        }   
    }

    const logout = () =>{
        setIsLoading(true);
        AsyncStorageLib.removeItem('userInfo');
        setUserInfo({});
        console.log('user logged out successfully')
        setIsLoggedIn(false);
        setIsLoading(false);
    }

    const modify = (forename,surname,email) => {

        setIsLoading(true);

        var APIURLInsert=`${BASE_URL}/modify.php`;

        var modifyHeaders={
            'Accept' : 'application/json',
            'Content-Type':'application.json'
        };

        var modifyData={
            forename:forename,
            surname:surname,
            email:email
        };

        fetch(APIURLInsert,
            {
                method:'POST',
                headers:modifyHeaders,
                body: JSON.stringify(modifyData)
            })
            .then((response)=>response.json())
            .then((response)=>
            {
                modifyData.pwd=response[0].Password;
                console.log(response[0].Message);
                console.log(modifyData);
                setUserInfo(modifyData);
                AsyncStorageLib.setItem('userInfo',JSON.stringify(userInfo));
                setIsLoading(false);
            })
            .catch((e)=>{
                console.log("Error"+e);
                setIsLoading(false);
            })
        
    };

    return(
    <AuthContext.Provider value={{isLoading,userInfo,isLoggedIn,register,login,logout,modify}}>{children}</AuthContext.Provider>
    );
};