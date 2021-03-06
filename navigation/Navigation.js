import React,{useContext} from 'react';
import {LoginScreen} from '../views/Login';
import {ProfileScreen} from '../views/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RegisterScreen} from '../views/Register';
import { AuthContext } from '../context/AuthContext';
import HomeScreen from '../views/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoadingScreen } from '../views/Loading';
import SearchScreen from '../views/Search';
import { ModifyScreen } from '../views/ModifyProfile';
import { SpectateProfile } from '../views/SpectateProfile';
import MessageScreen from '../views/Message';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileScreenNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Afficher Profil" component={ProfileScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Modifier le profil" component={ModifyScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Inspecter Profil" component={SpectateProfile}/>
        </Stack.Navigator>
    )
}

const HomeScreenNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Afficher Rechercher" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Inspecter Profil" component={SpectateProfile}/>
        </Stack.Navigator>
    )
}

const SearchScreenNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Afficher Accueil" component={SearchScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Inspecter Profil" component={SpectateProfile}/>
        </Stack.Navigator>
    )
}

const MessageScreenNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Messages" component={MessageScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}



const Navigation = () => {
    
    const {isLoggedIn,isLoading} = useContext(AuthContext);

    return (
        <NavigationContainer>
            {isLoading ? (
                <>
                <Stack.Navigator>
                    <Tab.Screen name="Loading" component={LoadingScreen} options={{headerShown: false}}/>
                </Stack.Navigator>
                </>
            ): (
                <>
                    {isLoggedIn ? (
                    <>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                if (route.name === 'Accueil') {
                                    iconName = 'home-outline';
                                } else if (route.name === 'Profil') {
                                    iconName = 'ellipse-outline';
                                }
                                else if (route.name === 'Messages') {
                                    iconName = 'chatbubble-outline';
                                }
                                else if (route.name === 'Rechercher') {
                                    iconName = 'search-outline';
                                }
                               
                                
                                return <Ionicons name={iconName} size={size} color={color} />;
                            },
                            tabBarStyle: {
                                backgroundColor: '#FFFAF0',
                            }, 
                        })}
                    >
                    
                    <Tab.Screen  name="Accueil" component={HomeScreenNavigator} options={{headerShown: false, tabBarActiveTintColor:'#ffaf7a'}}/>
                    <Tab.Screen  name="Rechercher" component={SearchScreenNavigator} options={{headerShown: false, tabBarActiveTintColor:'#ffaf7a'}}/>
                    <Tab.Screen name="Messages" component={MessageScreenNavigator} options={{headerShown: false, tabBarActiveTintColor:'#ffaf7a'}}/>
                    <Tab.Screen name="Profil" component={ProfileScreenNavigator} options={{headerShown: false, tabBarActiveTintColor:'#ffaf7a'}}/>
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
                </>
            )}
            
            
                
        </NavigationContainer>
    );
};


export default Navigation;