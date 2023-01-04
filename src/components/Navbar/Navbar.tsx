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
    const navbar = document.getElementById("Navbar") as HTMLElement;
    if (document.documentElement.scrollTop > 0) {
      navbar.style.background = theme.colors.primarySub;
    }

    let prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", () => {
      // NAVBAR BG BLUE ON SCROLL DOWN

      const spans = document.querySelectorAll(
        "#Navbar span"
      ) as NodeListOf<HTMLElement>;
      const brand = document.getElementsByTagName("path")[0] as SVGPathElement;
      if (document.documentElement.scrollTop > 0) {
        navbar.style.background = theme.colors.primarySub;
        spans.forEach((span) => {
          span.style.color = theme.colors.tertiaryMain;
        });
        brand.style.color = theme.colors.tertiaryMain;
      } else {
        navbar.style.background = "transparent";
        spans.forEach((span) => {
          span.style.color = theme.colors.primaryMain;
        });
        brand.style.color = theme.colors.primaryMain;
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
  }, [theme]);
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
        <Brand
          onClick={() =>
            document
              .getElementById("landing")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <NavLink
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <SpanPrimary>1.</SpanPrimary> About
        </NavLink>
        <NavLink
          onClick={() =>
            document
              .getElementById("journey")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <SpanPrimary>2.</SpanPrimary> Journey
        </NavLink>
        <NavLink
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <SpanPrimary>3.</SpanPrimary> Projects
        </NavLink>
        <NavLink
          onClick={() =>
            document
              .getElementById("education")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <SpanPrimary>4.</SpanPrimary> Education
        </NavLink>
        <NavLink
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <SpanPrimary>5.</SpanPrimary> Contact
        </NavLink>
      </NavLinksWrapper>
      <ButtonTheme onClick={toggleTheme}>{getThemeText()}</ButtonTheme>
    </MainWrapper>
  );
};

export default Navbar;
