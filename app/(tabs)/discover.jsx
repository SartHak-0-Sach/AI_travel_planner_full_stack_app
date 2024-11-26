import { View, Text } from 'react-native';
// Bringing in core components from React Native

import React from 'react';
// Importing React to enable JSX syntax in the functional component

const Discover = () => {
  // Defining Discover as a functional component using arrow function syntax

  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      {/* Using a View with some styling for better presentation */}
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Discover</Text>
      {/* Displaying "Discover" text with added styling */}
    </View>
  );
}

export default Discover;
// Exporting Discover as the default export
