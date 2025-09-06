
import { StyleSheet } from 'react-native';

//currently following switch it up. feel free to change accordingly

export default StyleSheet.create({
    // Style for the main container of your GameField component
    mainContainer: {
        flex: 1, // Make it take up all available vertical space in its parent
        alignItems: 'center', // Center content (like the grid) horizontally
        // backgroundColor: 'lightblue', // For debugging: see its bounds
        paddingHorizontal: 0, // Ensure no default horizontal padding
        marginHorizontal: 0,  // Ensure no default horizontal margin
        width: '100%', // Ensure it expands to full width
    },
    // Style for the container that holds the grid of buttons
    buttonGridContainer: {
        // Flexbox properties to simulate a grid layout with 4 columns
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center', // Center items horizontally within this container

        // Calculate the exact width needed for 4 buttons + 3 gaps
        // Button width: 60px (from Designed_Button)
        // Gap-4 (Tailwind) typically means 16px. So 3 gaps = 3 * 16px = 48px
        // Total width = (4 * 60px) + (3 * 16px) = 240px + 48px = 288px
        width: 288, // Set an explicit width for the grid container

        // React Native way to handle 'gap' using margins on children
        // We will apply a margin to each button in Designed_Button or here
        // If applying margin to children, this container might need negative margins
        // to prevent outer gaps.
        // Let's assume buttons will handle their own margins, and this container is fixed.
    },
    // Style for each individual button wrapper to handle spacing
    buttonWrapper: {
        margin: 8, // Half of 16px gap, creates 16px gap between buttons
        // backgroundColor: 'lightcoral', // For debugging: see button wrapper bounds
    },
    // Styles for other elements like prompt message if needed
    promptMessageText: {
        fontSize: 20, // Example font size
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    // Styles for the End Game button's container if needed
    endGameButtonContainer: {
        marginTop: 20,
    }
});