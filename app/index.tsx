import { useEffect, useState } from "react"; 
// Importing essential hooks from React for state and lifecycle management

import { View, Text } from "react-native"; 
// Importing basic UI components from React Native

import Login from './../components/Login'; 
// Importing the Login component from the designated path

import { auth } from './../configs/FirebaseConfig'; 
// Importing the authentication configuration from Firebase setup

import { User } from "firebase/auth"; 
// Importing User type definition from Firebase Authentication module

import { Redirect } from "expo-router"; 
// Importing Redirect utility from Expo Router for navigation purposes

const Index = () => { 
  // Defining the Index component as a functional component

  const [currentUser, setCurrentUser] = useState<User | null>(null); 
  // Setting up state to track the current authenticated user (initial state is null)

  const [isLoading, setIsLoading] = useState(true); 
  // Setting up state to track the loading status (initial state is true)

  useEffect(() => { 
    // Using useEffect to handle side effects and run code after component mounts

    const unsubscribeAuthListener = auth.onAuthStateChanged((user) => { 
      // Listening for authentication state changes

      setCurrentUser(user); 
      // Updating currentUser state with the authenticated user object

      setIsLoading(false); 
      // Setting isLoading state to false once auth state is resolved
    });

    return () => unsubscribeAuthListener(); 
    // Cleanup function to unsubscribe from auth state changes when component unmounts
  }, []);

  if (isLoading) { 
    // Conditional rendering: if loading, show a loading indicator
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text> 
        {/* Displaying a loading message */}
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}> 
      {/* Main container view */}
      {currentUser ? <Redirect href={'/mytrip'} /> : <Login />} 
      {/* Redirect to '/mytrip' if user is authenticated, else show the Login component */}
    </View>
  );
}

export default Index; 
// Exporting the Index component as default
