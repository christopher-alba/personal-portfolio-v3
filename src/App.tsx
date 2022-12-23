import { useState } from "react";
import themes from "./themes/schema.json";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(themes.dark);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <h1>App</h1>
    </ThemeProvider>
  );
}

export default App;
