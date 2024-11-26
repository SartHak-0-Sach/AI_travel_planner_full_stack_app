import { View, Text } from 'react-native';
// Importing core components from React Native

import React, { useState } from 'react';
// Importing React and the useState hook for state management

import { Colors } from '../../constants/Colors';
// Importing color constants for consistent styling

import Ionicons from "@expo/vector-icons/Ionicons";
// Importing Ionicons for icon usage

import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
// Importing a custom component for starting a new trip

const MyTrip = () => {
  // Defining MyTrip as a functional component using arrow function syntax

  const [userTrips, setUserTrips] = useState([]);
  // Initializing state to hold the user's trips, starting with an empty array

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 60,
        backgroundColor: Colors.BACKGROUND,
        flex: 1,
      }}
    >
      {/* Main container view with slight adjustments to styling */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Header section with flex styling */}
        <Text
          style={{
            fontFamily: "roboto-bold",
            fontSize: 32,
            color: Colors.TEXT,
          }}
        >
          My Trips
        </Text>
        {/* Header text with adjusted font size and color */}
        <Ionicons name="add-circle-outline" size={40} color={Colors.ICON} />
        {/* Add icon with adjusted size and dynamic color */}
      </View>
      
      {userTrips.length === 0 ? <StartNewTripCard /> : null}
      {/* Conditional rendering: show StartNewTripCard if userTrips array is empty */}
      
    </View>
  );
}

export default MyTrip;
// Exporting MyTrip component as the default export
