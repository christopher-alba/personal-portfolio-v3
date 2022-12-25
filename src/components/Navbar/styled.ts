import styled from "styled-components";
import { ReactComponent as SVGBrand } from "../../svg/logo.svg";
import { MainWrapper as LandingWrapper } from "../../sections/Landing/styled";

export const MainWrapper = styled("div")`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 70px;
  z-index: 100;
  padding: 5px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 500ms;
`;

export const Brand = styled(SVGBrand)`
  height: 50px;
  width: 50px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryMain};
  margin-right: 50px;
  transition: 500ms;
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(
      2px 2px 2px ${({ theme }) => theme.colors.secondaryMain}
    );
  }
`;

export const NavLink = styled("button")`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.secondaryMain};
  font-weight: 900;
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  ${LandingWrapper} :hover & {
    text-shadow: 2px 2px 2px white;
    text-decoration: underline;
  }
  @media(max-width:1100px){
    display: none;
  }
`;
export const NavLinksWrapper = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  ${NavLink} {
    margin-right: 30px;
  }
`;

export const SpanPrimary = styled("span")`
  color: ${({ theme }) => theme.colors.primaryMain};
`;
