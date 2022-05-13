import React,{useContext} from 'react';
import {LoginScreen} from '../views/Login';
import {ProfileScreen} from '../views/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RegisterScreen} from '../views/Register';
import { AuthContext } from '../context/AuthContext';
import { ModifyProfileScreen } from '../views/ModifyProfile';
import { FeedScreen } from '../views/Feed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBase } from '@rneui/base/dist/Tab/Tab';
import Style from 'react-native-simple-radio-button/lib/Style';
import { color } from '@rneui/base';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { Title } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';


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

          if (route.name === 'Feed') {
            iconName = 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = 'ellipse-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
            backgroundColor: '#FFFAF0',
          },
      })}>
                        <Tab.Screen name="Feed" component={FeedScreen} options={{ headerShown: false, tabBarActiveTintColor:'#ffaf7a', title: "Fil d'actualité"}} />
                        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, tabBarActiveTintColor:'#ffaf7a', title: "Profil" }} />
                       
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