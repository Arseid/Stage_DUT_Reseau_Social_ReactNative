import React, {createContext,useState} from 'react';
import { BASE_URL } from '../config';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

export const AuthContext=createContext();

export const AuthProvider = ({children}) => {

    const [userInfo,setUserInfo] = useState({});
    const [userProfilesInfo,setUserProfilesInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [retrievedInfo,setRetrievedInfo] = useState(0);
    const [showProfiles,setShowprofiles] = useState(0);

    const register = (forename,surname,email,pwd,type,option1,option2) => {

        setIsLoading(true);

        var APIURL=`${BASE_URL}/insert.php`;

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

        fetch(APIURL,
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
            var APIURL=`${BASE_URL}/login.php`;

            var loginHeaders={
                'Accept' : 'application/json',
                'Content-Type':'application.json'
            };

            var loginData={
                email:email,
                pwd:pwd,
            };

            fetch(APIURL,
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
                    console.log(response[0].Message);
                    if (response[0].Message=='found'){
                        setIsLoading(true);
                        setIsLoggedIn(true);
                        setIsLoading(false);
                    }
                    else alert('INCORRECT');
                    
                })
                .catch((e)=>{
                    console.log("Error"+e);
                    setIsLoading(false);
                })
        }   
    }

    const logout = () =>{
        AsyncStorageLib.removeItem('userInfo');
        setUserInfo({});
        setUserProfilesInfo({});
        console.log('user logged out successfully')
        setIsLoggedIn(false);
    }

    const modify = (pronouns,bio,email) => {
        var APIURL=`${BASE_URL}/modify.php`;

        var modifyHeaders={
            'Accept' : 'application/json',
            'Content-Type':'application.json'
        };

        var modifyData={
            pronouns:pronouns,
            bio:bio,
            email:email
        };

        fetch(APIURL,
            {
                method:'POST',
                headers:modifyHeaders,
                body: JSON.stringify(modifyData)
            })
            .then((response)=>response.json())
            .then((response)=>
            {
                console.log(response[0].Message);
                setRetrievedInfo(retrievedInfo+1);
            })
            .catch((e)=>{
                console.log("Error"+e);
            })
    }

    const retrieveUserProfileInfo = (email) => {

        var APIURL=`${BASE_URL}/userProfile.php`;

        var profileHeaders={
            'Accept' : 'application/json',
            'Content-Type':'application.json'
        };

        var profileData={
            email:email
        };

        fetch(APIURL,
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
                profileData.backgroundPicture=response[0].BackgroundPicture;
                profileData.followers=response[0].Followers;
                profileData.followersCounter=response[0].FollowersCounter;
                profileData.following=response[0].Following;
                profileData.followingCounter=response[0].FollowingCounter;
                profileData.interest=response[0].Interest;

                console.log(response[0].Message);
                console.log(profileData);
                setUserInfo(profileData);
                AsyncStorageLib.setItem('userInfo',JSON.stringify(userInfo));
            })
            .catch((e)=>{
                console.log("Error"+e);
            })
    }

    const modifyProfilePicture = (pickerResult,email,date) =>{
        var APIURL=`${BASE_URL}/profilePicture.php`;

        let data = {
            method: 'POST',
            body: JSON.stringify({
                date:date,
                email:email,
                profilePicture: pickerResult,
            }),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            }
        }

        fetch(APIURL, data)
        .then((response) => response.json())  // promise
        .then((response) => {
            console.log(response);
            setRetrievedInfo(retrievedInfo+1);
            setIsLoading(false);
        })
        .catch((e)=>{
            console.log("Error"+e);
        })
    }

    const backgroundPicture = (pickerResult,email,date) =>{

        var APIURL=`${BASE_URL}/backgroundPicture.php`;

        let data = {
            method: 'POST',
            body: JSON.stringify({
                date:date,
                email:email,
                background: pickerResult,
            }),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            }
        }

        fetch(APIURL, data)
        .then((response) => response.json())  // promise
        .then((response) => {
            console.log(response);
            setRetrievedInfo(retrievedInfo+1);
        })
        .catch((e)=>{
            console.log("Error"+e);
        })
    }

    const showUserProfiles = (email) =>{

        var APIURL=`${BASE_URL}/showUserProfiles.php`;

        let data={
            method: 'POST',
            body : JSON.stringify({
                email:email,
            }),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            }
        }

        fetch(APIURL, data)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            setUserProfilesInfo(response);
            AsyncStorageLib.setItem('userProfilesInfo',JSON.stringify(userProfilesInfo));
        })
        .catch((e)=>{
            console.log("Error"+e);
        })
    }

    const followUser = (email,targetEmail) => {

        var APIURL=`${BASE_URL}/follow.php`;

        let data={
            method: 'POST',
            body : JSON.stringify({
                email:email,
                targetEmail:targetEmail,
            }),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            }
        }

        fetch(APIURL, data)
        .then((response) => response.json())
        .then((response) => {
            retrieveUserProfileInfo(userInfo.email);
            console.log(response);
        })
        .catch((e)=>{
            console.log("Error"+e);
        })
    }

    const refresh = (email) =>{
        setShowprofiles(showProfiles+1);
    }

    const post = (email,body,pickerResult,date) => {

        var APIURL=`${BASE_URL}/post.php`;

        let data={
            method: 'POST',
            body : JSON.stringify({
                file: pickerResult,
                body:body,
                email:email,
                date:date,
            }),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            }
        }

        fetch(APIURL, data)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
        })
        .catch((e)=>{
            console.log("Error"+e);
        })
    }

    const test = (email) => {
        var APIURL=`${BASE_URL}/test.php`;

        let data={
            method: 'POST',
            body : JSON.stringify({
                email:email,
            }),
            headers: {
                'Accept':       'application/json',
                'Content-Type': 'application/json',
            }
        }

        fetch(APIURL, data)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            setIsLoading(false);
        })
        .catch((e)=>{
            console.log("Error"+e);
            setIsLoading(false);
        })
    }

    return(
    <AuthContext.Provider value={{isLoading,userInfo,userProfilesInfo,isLoggedIn,retrievedInfo,showProfiles,register,login,logout,modify,retrieveUserProfileInfo,modifyProfilePicture,backgroundPicture,showUserProfiles,followUser,refresh,post,test}}>{children}</AuthContext.Provider>
    );
};