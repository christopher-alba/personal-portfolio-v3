import { useEffect, useState } from "react";
import themes from "./themes/schema.json";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./themes/globalStyles";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Quote from "./sections/Quote";
import Loading from "./sections/Loading";
import Navbar from "./components/Navbar";

function App() {
  const [selectedTheme, setSelectedTheme] = useState(themes.light);
  const [msCount, setMsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "hidden";

    const counter = setInterval(() => {
      setMsCount((msCount) => {
        console.log(msCount);
        if ((msCount / 4000) * 100 >= 100) {
          clearInterval(counter);
          setTimeout(() => {
            (document.getElementById("Loading") as any).style.opacity = 0;

            setTimeout(() => {
              setLoading(false);
              document.body.style.overflowY = "scroll";
            }, 500);
          }, 1000);
          return msCount;
        }
        return msCount + 4;
      });
    }, 4);
  }, []);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      {loading && <Loading msCount={msCount} />}
      <Navbar setSelectedTheme={setSelectedTheme} />
      <Landing />
      <About />
      <Quote />
    </ThemeProvider>
  );
}

export default App;
