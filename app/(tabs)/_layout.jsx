import { View, Text } from 'react-native';
// Import essential UI components from React Native

import React from 'react';
// Import React to create a functional component

import { Tabs } from 'expo-router';
// Import Tabs component from expo-router for managing tab-based navigation

import Ionicons from "@expo/vector-icons/Ionicons";
// Import Ionicons for adding icons to the tabs

import { Colors } from './../../constants/Colors';
// Import color constants for styling

const TabLayout = () => {
  // Define TabLayout as a functional component

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // Do not show headers for screens in the tab navigator

        tabBarActiveTintColor: Colors.PRIMARY,
        // Color for active tab text

        tabBarInactiveTintColor: Colors.GRAY,
        // Color for inactive tab text
      }}
    >
      <Tabs.Screen
        name="mytrip"
        // Define the screen named "mytrip" within the Tabs navigator

        options={{
          tabBarLabel: "My Trip",
          // Label for the "My Trip" tab

          tabBarIcon: ({ color }) => (
            <Ionicons name="location-outline" size={24} color={color} />
            // Icon for the "My Trip" tab with dynamic color
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        // Define the screen named "discover" within the Tabs navigator

        options={{
          tabBarLabel: "Discover",
          // Label for the "Discover" tab

          tabBarIcon: ({ color }) => (
            <Ionicons name="globe-outline" size={24} color={color} />
            // Icon for the "Discover" tab with dynamic color
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        // Define the screen named "profile" within the Tabs navigator

        options={{
          tabBarLabel: "Profile",
          // Label for the "Profile" tab

          tabBarIcon: ({ color }) => (
            <Ionicons name="people-outline" size={24} color={color} />
            // Icon for the "Profile" tab with dynamic color
          ),
        }}
      />
    </Tabs>
  );
}

export default TabLayout;
// Export the TabLayout component as the default export
