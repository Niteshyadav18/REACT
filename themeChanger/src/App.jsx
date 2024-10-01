import { useEffect, useState } from 'react'; // Importing React hooks
import './App.css'; // Importing CSS for global styles
import { ThemeProvider } from './contexts/theme'; // Importing the ThemeProvider from context
import ThemeBtn from './components/ThemeBtn'; // Importing the ThemeBtn component for theme switching
import Card from './components/Card'; // Importing the Card component for display

function App() {
  // State to manage the current theme mode
  const [themeMode, setThemeMode] = useState("light"); // Default theme is light

  // Function to switch to light theme
  const lightTheme = () => {
    setThemeMode("light");
  };

  // Function to switch to dark theme
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Effect to update the class on the <html> element based on the themeMode
  useEffect(() => {
    // Remove any existing theme classes
    document.querySelector('html').classList.remove("light", "dark");
    // Add the new theme class
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]); // Dependency array ensures this runs whenever themeMode changes

  return (
    // Provide the theme context to the component tree
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          {/* Container for the ThemeBtn */}
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          {/* Container for the Card component */}
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
