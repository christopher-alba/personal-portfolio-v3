import { useState } from "react";
import themes from "./themes/schema.json";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Quote from "./sections/Quote";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(themes.light);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Landing />
      <About />
      <Quote />
    </ThemeProvider>
  );
}

export default App;
