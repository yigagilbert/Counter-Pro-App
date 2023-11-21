// Import React and React Native components
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

// Define the ColorPicker component
const ColorPicker = ({ color, setColor }) => {
    // Define an array of color options
    const colorOptions = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

    // Return the JSX elements that make up the color picker
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            {colorOptions.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: option, margin: 5 }}
                    onPress={() => setColor(option)}
                />
            ))}
        </View>
    );
};

// Export the ColorPicker component
export default ColorPicker;
