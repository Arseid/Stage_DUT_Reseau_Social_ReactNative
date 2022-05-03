import React, {createContext,useState} from 'react';
import { BASE_URL } from '../config';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

export const AuthContext=createContext();

export const AuthProvider = ({children}) => {

    const[userInfo,setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [retrievedInfo,setRetrievedInfo] = useState(false);

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
                if (response[0].Message=='user successfully registered'){
                    setRetrievedInfo(false);
                    setIsLoggedIn(true);
                } 
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
                    setUserInfo(loginData);
                    console.log(userInfo);
                    AsyncStorageLib.setItem('userInfo',JSON.stringify(userInfo));
                    setIsLoading(false);
                    console.log(response[0].Message);
                    if (response[0].Message=='found'){
                        setRetrievedInfo(false);
                        setIsLoggedIn(true);
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
                setIsLoading(false);
                setRetrievedInfo(false);
            })
            .catch((e)=>{
                console.log("Error"+e);
                setIsLoading(false);
            })
        
    }

    const retrieveUserProfileInfo = (email) => {
        setIsLoading(true);

        var APIURLInsert=`${BASE_URL}/userProfile.php`;

        var profileHeaders={
            'Accept' : 'application/json',
            'Content-Type':'application.json'
        };

        var profileData={
            email:email
        };

        fetch(APIURLInsert,
            {
                method:'POST',
                headers:profileHeaders,
                body: JSON.stringify(profileData)
            })
            .then((response)=>response.json())
            .then((response)=>
            {
                profileData.forename=response[0].Forename;
                profileData.surname=response[0].Surname;
                profileData.pwd=response[0].Pwd;
                profileData.type=response[0].Type;
                profileData.option1=response[0].Option1;
                profileData.option2=response[0].Option2;
                profileData.gender=response[0].Gender;
                profileData.description=response[0].Description;
                profileData.pp=response[0].PP;
                profileData.followers=response[0].Followers;
                profileData.following=response[0].Following;

                console.log(response[0].Message);
                console.log(profileData);
                setUserInfo(profileData);
                AsyncStorageLib.setItem('userInfo',JSON.stringify(userInfo));
                setIsLoading(false);
                setRetrievedInfo(true);
            })
            .catch((e)=>{
                console.log("Error"+e);
                setIsLoading(false);
            })
    }

    const modifyProfilePicture = (uri,email) =>{
        var APIURLInsert=`${BASE_URL}/profilePicture.php`;

        var modifyProfilePictureData={
            uri:uri,
            email:email,
        }

        fetch(
            APIURLInsert,
            {
            method:'post',
            body:JSON.stringify(modifyProfilePictureData),
            headers:{
                'Content-Type':'multipart/form-data; ',
            },
            }
        )
        .then((response)=>response.json())
        .then((response)=>
            {
            console.log(response[0].Message);
            })
        .catch((e)=>{
            console.log("Error"+e);
        })
    }

    return(
    <AuthContext.Provider value={{isLoading,userInfo,isLoggedIn,retrievedInfo,register,login,logout,modify,retrieveUserProfileInfo,modifyProfilePicture}}>{children}</AuthContext.Provider>
    );
};