import React from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import Example from "./components/Example"

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
        <Example />
      </div>
    </ThemeProvider>
  );
}

export default App;