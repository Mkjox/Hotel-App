import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Schedule from "../screens/Schedule";
import Bookmark from "../screens/Bookmark";
import Profile from "../screens/Profile";
import CustomTabBar from "../components/CustomTabBar";
import Details from '../screens/Details';
import PostDetails from '../screens/PostDetails';
import Liked from '../screens/Liked';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home" tabBar={(props) => <CustomTabBar {...props} />} screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={Home}
            />

            <Tab.Screen
                name="Schedule"
                component={Schedule}
            />

            <Tab.Screen
                name="Bookmark"
                component={Bookmark}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    );
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false, drawerType: 'back' }}>
            <Drawer.Screen
                name='Home'
                component={StackNavigator}
            />
            <Drawer.Screen
                name='Details'
                component={Details}
            />
        </Drawer.Navigator>
    )
}

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TabNavigator"
                component={TabNavigator}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PostDetails"
                component={PostDetails}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Liked'
                component={Liked}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
}