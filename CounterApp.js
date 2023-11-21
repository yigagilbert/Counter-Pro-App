

// Import React and React Native components 
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Import the Settings component, which we will create later 
import Settings from './Settings';

// Define the Counter component 
const CounterApp = () => {
    // Define the initial state of the counter and the settings 
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(1);
    const [decrement, setDecrement] = useState(1);
    const [color, setColor] = useState('#000000');
    const [modalVisible, setModalVisible] = useState(false);

    // Define a function that increases the count by the increment value 
    const increaseCount = () => { setCount(count + increment); };

    // Define a function that decreases the count by the decrement value 
    const decreaseCount = () => { setCount(count - decrement); };

    // Define a function that resets the count to zero 
    const resetCount = () => { setCount(0); };

    // Define a function that opens the settings modal 
    const openSettings = () => {
        // Set the modal visible state to true 
        setModalVisible(true);
    };

    // Define a function that closes the settings modal 
    const closeSettings = () => {
        // Set the modal visible state to false 
        setModalVisible(false);
    };

    // Define a function that updates the settings based on the user’s input 
    const updateSettings = (newIncrement, newDecrement, newColor) => {
        // Set the increment, decrement, and color state to the new values 
        setIncrement(newIncrement); setDecrement(newDecrement); setColor(newColor);
    };

    // Return the JSX elements that make up the UI 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter Pro App</Text>
            <Text style={[styles.count, { color: color }]}>{count}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={increaseCount}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={decreaseCount}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.reset} onPress={resetCount}>
                <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.settings} onPress={openSettings}>
                <Image style={styles.settingsIcon} source={require('./assets/settings.png')} />
            </TouchableOpacity>
            <Settings modalVisible={modalVisible} closeSettings={closeSettings} updateSettings={updateSettings} increment={increment} decrement={decrement} color={color} />
        </View>);
};

// Define the styles for the UI elements 
const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', },
    title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20, },
    count: { fontSize: 64, fontWeight: 'bold', marginBottom: 20, },
    buttons: { flexDirection: 'row', marginBottom: 20, },
    button: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#f0f0f0', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10, },
    buttonText: { fontSize: 48, fontWeight: 'bold', color: '#000000', },
    reset: { width: 100, height: 40, borderRadius: 20, backgroundColor: ' #f0f0f0', alignItems: 'center', justifyContent: 'center', marginBottom: 20, },
    resetText: { fontSize: 16, fontWeight: 'bold', color: '#000000', }, settings: { position: 'absolute', top: 40, right: 20, },
    settingsIcon: { width: 40, height: 40, },
});

// Export the Counter component 
export default CounterApp;