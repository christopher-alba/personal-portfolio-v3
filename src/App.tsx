import { useState } from "react";
import themes from "./themes/schema.json";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";
import Landing from "./sections/Landing";
import About from "./sections/About";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(themes.light);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Landing />
      <About />
    </ThemeProvider>
  );
}

export default App;
