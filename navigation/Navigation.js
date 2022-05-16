import React,{useContext} from 'react';
import {LoginScreen} from '../views/Login';
import {ProfileScreen} from '../views/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RegisterScreen} from '../views/Register';
import { AuthContext } from '../context/AuthContext';
import SearchScreen from '../views/Search';
import HomeScreen from '../views/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    
    const {isLoggedIn} = useContext(AuthContext);

    return (
        <NavigationContainer>
                {isLoggedIn ? (
                    <>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                if (route.name === 'Home') {
                                    iconName = 'home-outline';
                                } else if (route.name === 'Profile') {
                                    iconName = 'ellipse-outline';
                                }
                                else if (route.name === 'Search') {
                                    iconName = 'search-outline';
                                }
                                return <Ionicons name={iconName} size={size} color={color} />;
                            },
                            tabBarStyle: {
                                backgroundColor: '#FFFAF0',
                            },
                        })}
                    >
                    <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
                    <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                    </Tab.Navigator>
                    </>
                ) : (
                    <>
                        <Stack.Navigator>
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
                        </Stack.Navigator>
                    </>
                )}    
        </NavigationContainer>
    );
};


export default Navigation;