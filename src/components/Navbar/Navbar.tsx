import { FC, useContext, useEffect } from "react";
import {
  Brand,
  MainWrapper,
  NavLink,
  NavLinksWrapper,
  SpanPrimary,
} from "./styled";
import { ButtonTheme } from "../Buttons";
import themes from "../../themes/schema.json";
import { ThemeContext } from "styled-components";

const Navbar: FC<{ setSelectedTheme: any }> = ({ setSelectedTheme }) => {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", () => {
      // NAVBAR BG BLUE ON SCROLL DOWN
      const navbar = document.getElementById("Navbar") as HTMLElement;
      if (document.documentElement.scrollTop > 0) {
        navbar.style.background = theme.colors.tertiaryOverlay;
        navbar.style.backdropFilter = "blur(4px)";
      } else {
        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
      }
      // NAVBAR DISAPPEAR ON SCROLL DOWN
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-200px";
      }
      prevScrollpos = currentScrollPos;
    });
  }, []);
  const toggleTheme = () => {
    if (theme.name === "light") {
      setSelectedTheme(themes.dark);
    } else {
      setSelectedTheme(themes.light);
    }
  };
  const getThemeText = () => {
    if (theme.name === "light") {
      return "Dark Mode";
    } else {
      return "Light Mode";
    }
  };
  return (
    <MainWrapper id="Navbar">
      <NavLinksWrapper>
        <Brand />
        <NavLink>
          <SpanPrimary>1.</SpanPrimary> About
        </NavLink>
        <NavLink>
          <SpanPrimary>2.</SpanPrimary> Journey
        </NavLink>
        <NavLink>
          <SpanPrimary>3.</SpanPrimary> Projects
        </NavLink>
        <NavLink>
          <SpanPrimary>4.</SpanPrimary> Education
        </NavLink>
        <NavLink>
          <SpanPrimary>5.</SpanPrimary> Contact
        </NavLink>
      </NavLinksWrapper>
      <ButtonTheme onClick={toggleTheme}>{getThemeText()}</ButtonTheme>
    </MainWrapper>
  );
};

export default Navbar;
