import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

// Helper to map Tailwind-like classes to actual colors.
// You might want to define a comprehensive color palette here.
const COLOR_MAP = {
    // Blue theme
    "bg-blue-300": "#93c5fd",   // Tailwind blue-300
    "hover:bg-blue-600": "#2563eb", // Tailwind blue-600

    // Red theme
    "bg-red-300": "#fca5a5",    // Tailwind red-300
    "hover:bg-red-600": "#dc2626", // Tailwind red-600

    // Green theme
    "bg-green-300": "#86efad",  // Tailwind green-300
    "hover:bg-green-600": "#16a34a", // Tailwind green-600

    // --- NEW: Stone theme ---
    "bg-stone-300": "#d4d4d4",   // Tailwind stone-300
    "hover:bg-stone-600": "#525252" // Tailwind stone-600

    // Add any other specific Tailwind color classes you use if needed
};

// Helper to map size prop to font size
const FONT_SIZE_MAP = {
    'xs': 12,
    'sm': 14,
    'base': 16,
    'lg': 18,
    'xl': 20,
    // Add more font sizes if desired
};

function Designed_Button({
                             id,
                             content,
                             onClick,
                             onClickParameters,
                             disable,
                             isHidden,
                             colorClass = "bg-blue-300",
                             hoverColorClass = "hover:bg-blue-600",
                             size = 'base'
                         }) {
    const baseBackgroundColor = COLOR_MAP[colorClass] || "#93c5fd";
    const hoverBackgroundColor = COLOR_MAP[hoverColorClass] || "#2563eb";
    const buttonFontSize = FONT_SIZE_MAP[size] || FONT_SIZE_MAP['base'];

    return (
        <Pressable
            testID={id}
            onPress={() => onClick(onClickParameters)}
            // Make sure the button is disabled if it's meant to be hidden
            disabled={disable || isHidden}
            style={({ pressed, hovered }) => ([
                styles.buttonBase,
                {
                    backgroundColor: hovered ? hoverBackgroundColor : baseBackgroundColor,
                },
                pressed && styles.buttonPressed,
                disable && styles.buttonDisabled,
                isHidden && styles.buttonHidden,
            ])}
        >
            <Text
                style={[
                    styles.buttonTextBase,
                    { fontSize: buttonFontSize },
                    disable && styles.buttonTextDisabled,
                ]}
            >
                {content}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonBase: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonPressed: {
        opacity: 0.8,
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    buttonTextBase: {
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
    },
    buttonTextDisabled: {
        color: '#ccc',
    },
    buttonHidden: {
        opacity: 0,
        pointerEvents: 'none',
    }
});

export default Designed_Button;