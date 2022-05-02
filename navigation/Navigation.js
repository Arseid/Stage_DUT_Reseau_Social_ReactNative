import React,{useContext} from 'react';
import {LoginScreen} from '../views/Login';
import {ProfileScreen} from '../views/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RegisterScreen} from '../views/Register';
import { AuthContext } from '../context/AuthContext';
import { ModifyProfileScreen } from '../views/ModifyProfile';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    
    const {isLoggedIn} = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isLoggedIn ? (
                    <>
                    <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}  />
                    <Stack.Screen name="ModifyProfile" component={ModifyProfileScreen} options={{headerShown: false}} />
                    </>
                ) : (
                    <>
                        <Stack.Screen 
                            name="Login" 
                            component={LoginScreen}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen 
                            name="Register" 
                            component={RegisterScreen}
                            options={{headerShown: false}} 
                        />
                    </>
                )}    
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Navigation;