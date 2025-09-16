import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DesignedButton = ({
  id,
  content,
  onPress, // Renamed for React Native conventions
  onPressParameters,
  disabled,
  colorClass = 'bg-sky-400', // Note: These will need to be mapped to a color value
  hoverColorClass = 'hover:bg-sky-400', // Note: Not directly supported in React Native
  size = 'base', // Note: Will need to be mapped to a font size
  style = {}, // Added to allow for custom styles from parent component
}) => {
  // A simple mapping for colors and sizes
  const buttonColors = {
    'bg-sky-400': '#38bdf8',
  };

  const textColors = {
    'text-white': '#ffffff',
    'text-sky-800': '#075985',
  };

  const fontSizes = {
    base: 16, // Example font sizes
    // Add more sizes as needed
  };

  // The final style object for the button
  const buttonStyle = [
    styles.defaultButton,
    { backgroundColor: buttonColors[colorClass] },
    // You can't directly translate hover states, you'd use a state variable
    // and change the style dynamically with `onPressIn` and `onPressOut`.
    disabled && styles.disabledButton,
    style, // Apply any custom styles passed in
  ];

  // The final style object for the text
  const textStyle = [
    styles.defaultText,
    { color: textColors['text-white'], fontSize: fontSizes[size] },
    // This is a simple approach. A more complex one would manage state for hover/press.
  ];

  return (
    <TouchableOpacity
      id={id}
      onPress={(event) => onPress(event, onPressParameters)}
      disabled={disabled}
      style={buttonStyle}>
      <Text style={textStyle}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    paddingHorizontal: 32, // Equivalent to px-8
    paddingVertical: 16, // Equivalent to py-4
    alignItems: 'center', // Centers the text horizontally
    justifyContent: 'center', // Centers the text vertically
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, // for Android shadow
    borderRadius: 25,
  },
  defaultText: {
    fontWeight: '600',
    textAlign: 'center',
  },
  disabledButton: {
    backgroundColor: 'gray', // Example disabled color
  },
});

export default DesignedButton;