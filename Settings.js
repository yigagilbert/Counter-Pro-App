// Import React and React Native components 
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';

// Import the ColorPicker component, which we will create later 
import ColorPicker from './ColorPicker';

// Define the Settings component 
const Settings = ({ modalVisible, closeSettings, updateSettings, increment, decrement, color, }) => {
    // Define the initial state of the input fields and the color picker 
    const [incrementInput, setIncrementInput] = useState(increment.toString());
    const [decrementInput, setDecrementInput] = useState(decrement.toString());
    const [colorInput, setColorInput] = useState(color);

    // Define a function that validates the input fields and updates the settings 
    const saveSettings = () => {
        // Convert the input strings to numbers 
        let newIncrement = parseInt(incrementInput);
        let newDecrement = parseInt(decrementInput);

        // Check if the input values are valid numbers
        if (isNaN(newIncrement) || isNaN(newDecrement)) {
            // If not, alert the user and return
            alert('Please enter valid numbers for increment and decrement');
            return;
        }

        // Check if the input values are positive
        if (newIncrement <= 0 || newDecrement <= 0) {
            // If not, alert the user and return
            alert('Please enter positive numbers for increment and decrement');
            return;
        }

        // Check if the color input is a valid hex code
        if (!/^#[0-9a-fA-F]{6}$/.test(colorInput)) {
            // If not, alert the user and return
            alert('Please enter a valid hex code for color');
            return;
        }

        // If everything is valid, call the updateSettings function with the new values
        updateSettings(newIncrement, newDecrement, colorInput);

        // Close the settings modal
        closeSettings();
    };

    // Return the JSX elements that make up the UI 
    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeSettings}>
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Settings</Text>
              <View style={styles.modalRow}>
                <Text style={styles.modalLabel}>Increment:</Text>
                <TextInput style={styles.modalInput} value={incrementInput} onChangeText={setIncrementInput} keyboardType="numeric" />
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.modalLabel}>Decrement:</Text>
                <TextInput style={styles.modalInput} value={decrementInput} onChangeText={setDecrementInput} keyboardType="numeric" />
              </View>
              <View style={styles.modalRow}>
                <Text style={styles.modalLabel}>Color:</Text>
                <TextInput style={styles.modalInput} value={colorInput} onChangeText={setColorInput} />
                <ColorPicker color={colorInput} setColor={setColorInput} />
              </View>
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.modalButton} onPress={closeSettings}>
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={saveSettings}>
                  <Text style={styles.modalButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      );
};

// Define the styles for the UI elements 
const styles = StyleSheet.create({
    modal: {
        flex: 1, alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        height: 300,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    modalLabel: {
        flex: 1,
        fontSize: 16,
    },
    modalInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalButton: {
        flex: 1,
        backgroundColor: '#007BFF',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    modalButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

// Export the Settings component
export default Settings;