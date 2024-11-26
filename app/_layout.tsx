import { Stack } from "expo-router"; 
// Importing Stack component from expo-router for setting up navigation stack

import { useFonts } from "expo-font"; 
// Importing useFonts hook from expo-font to handle custom font loading

const RootLayout = () => { 
  // Defining RootLayout as a functional component

  useFonts({ 
    // Applying useFonts hook to load custom fonts

    'roboto-regular': require('./../assets/fonts/Roboto-Regular.ttf'), 
    // Loading Roboto Regular font

    'roboto-medium': require('./../assets/fonts/Roboto-Medium.ttf'), 
    // Loading Roboto Medium font

    'roboto-bold': require('./../assets/fonts/Roboto-Bold.ttf') 
    // Loading Roboto Bold font
  });

  return (
    <Stack screenOptions={{ headerMode: 'screen', gestureEnabled: false }}> 
      {/* Setting Stack screen options to not show header and disable gestures */}

      {/* 
      <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="index" />
      </Stack> 
      */}
      {/* Commented out Stack configuration for index screen */}

      <Stack.Screen name="(tabs)" /> 
      {/* Defining Stack screen named "(tabs)" for tab-based navigation */}
      
    </Stack>
  );
}

export default RootLayout; 
// Exporting RootLayout component as default export
