import React, {createContext,useState} from 'react';
import { BASE_URL } from '../config';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

export const AuthContext=createContext();

export const AuthProvider = ({children}) => {

    const[userInfo,setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    /*
    const register =(forname,surname,email,pwd) => {
        axios
            .post(`${BASE_URL}/register`, {
                forname,
                surname,
                email,
                pwd,
            })
            .then(results => {
                let userInfo = results.data;
                console.log(userInfo);
            })
            .catch(e => {
                console.log(`error : ${e}`);
            })
    };
    */

    const register = (forename,surname,email,pwd) => {
        if (forename.length==0 || surname.length==0 || email.length==0 || pwd.length==0){
            alert("FILL PLS")
        }
        else {

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
                    if (response[0].Message=='user successfully registered'){
                        setIsLoggedIn(true);
                    }
                })
                .catch((e)=>{
                    console.log("Error"+e);
                    setIsLoading(false);
                })
        }
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

    return(
    <AuthContext.Provider value={{isLoading,userInfo,isLoggedIn,register,login,logout}}>{children}</AuthContext.Provider>
    );
};