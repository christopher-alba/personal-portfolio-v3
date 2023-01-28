import { useEffect, useState } from "react";
import themes from "./themes/schema.json";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Quote from "./sections/Quote";
import Navbar from "./components/Navbar";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(themes.light);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <>
        <Navbar setSelectedTheme={setSelectedTheme} />
        <Landing />
        <About />
        <Quote />
        <Journey />
        <Projects />
        <Education />
        <Contact />
      </>
    </ThemeProvider>
  );
}

export default App;
