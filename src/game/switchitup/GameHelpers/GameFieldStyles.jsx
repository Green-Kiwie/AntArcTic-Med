
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Style for the main container of your GameField component
    mainContainer: {
        flex: 1,
        width: '100%',
        height: 500,
        paddingHorizontal: 16, // add horizontal padding
        justifyContent: 'flex-start', // or 'center' if you want vertical centering
        alignItems: 'center', // center children horizontally
        // backgroundColor: 'lightblue', // For debugging: see its bounds
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
        minHeight: 80,             // ensures container is tall enough
        justifyContent: 'center',  // vertically center the button
        alignItems: 'center',      // horizontally center the button
    },
});