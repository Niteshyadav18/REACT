// Importing necessary functions from the 'react' library
import { createContext, useContext } from "react";

// Creating a context for the theme, with default values
// 'themeMode' is set to 'light' by default
// 'darkTheme' and 'lightTheme' are placeholders for functions that will toggle themes
export const ThemeContext = createContext({
    themeMode: "light",   // Default theme is light
    darkTheme: () => {},  // Placeholder function for setting dark theme
    lightTheme: () => {}, // Placeholder function for setting light theme
});

// Exporting the provider from ThemeContext so that it can be used to wrap components
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to use the ThemeContext
// This hook allows us to access the current theme and the functions to change it in any component
export default function useTheme(){
    return useContext(ThemeContext); // Access and return the context value (themeMode, darkTheme, lightTheme)
}
