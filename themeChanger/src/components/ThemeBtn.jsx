// Importing the custom hook 'useTheme' from the theme context file
import useTheme from '../contexts/theme';

export default function ThemeBtn() {
    
    // Destructuring 'themeMode', 'lightTheme', and 'darkTheme' from the custom hook 'useTheme'
    // 'themeMode' holds the current theme ("light" or "dark")
    // 'lightTheme' and 'darkTheme' are functions to switch between light and dark themes
    const { themeMode, lightTheme, darkTheme } = useTheme();

    // Event handler for the theme toggle button
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked; // Check if the toggle is checked (dark mode)
        if (darkModeStatus) {
            darkTheme(); // If checked, switch to dark theme
        } else {
            lightTheme(); // If unchecked, switch to light theme
        }
    };

    return (
        // Label and input for the theme toggle switch
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer" // Hidden input element styled as a peer for the toggle switch
                onChange={onChangeBtn} // Event handler for detecting theme change
                checked={themeMode === "dark"} // Checkbox is checked when themeMode is 'dark'
            />
            {/* Toggle switch styled using Tailwind classes */}
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            
            {/* Label text displayed next to the toggle */}
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}
