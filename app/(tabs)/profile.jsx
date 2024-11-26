import { View, Text } from 'react-native';
// Bringing in essential components from React Native

import React from 'react';
// Importing React to enable JSX syntax in the functional component

const Profile = () => {
  // Defining Profile as a functional component using arrow function syntax

  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      {/* Adding some padding and centering the content */}
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Profile</Text>
      {/* Displaying "Profile" text with added styling */}
    </View>
  );
}

export default Profile;
// Exporting Profile as the default export
