import styled from "styled-components";
import { ReactComponent as SVGsquare } from "../../svg/patternSquare.svg";
import { ReactComponent as SVGrectangleSquare } from "../../svg/patternRectangleSquare.svg";

export const MainWrapper = styled("div")`
  width: 100%;
  height: 70vh;
  display: flex;
  margin-bottom: 15px;
`;

export const LeftWrapper = styled("div")`
  width: 55%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;
export const LeftWrapperBackground = styled("div")`
  box-sizing: border-box;
  width: 100%;
  padding: 50px;
  background: ${({ theme }) => theme.colors.tertiaryMain};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(
    0 0,
    50% 0,
    100% 0,
    100% 50%,
    100% 100%,
    50% 100%,
    0 100%,
    0 50%
  );
  transition: clip-path 1500ms;
  ${MainWrapper}:hover & {
    clip-path: polygon(
      50% 50%,
      50% 25%,
      50% 50%,
      75% 50%,
      50% 50%,
      50% 75%,
      50% 50%,
      25% 50%
    );
  }
`;

export const HiddenImg = styled("div")`
  background: linear-gradient(
      0deg,
      rgba(0, 8, 255, 0.734),
      rgba(0, 51, 255, 0.381)
    ),
    url("/images/jasper2.jpg");
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-right: 15px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: clip-path 1500ms;
  clip-path: polygon(
    50% 50%,
    50% 25%,
    50% 50%,
    75% 50%,
    50% 50%,
    50% 75%,
    50% 50%,
    25% 50%
  );
  ${MainWrapper}:hover & {
    clip-path: polygon(
      0 0,
      50% 0,
      100% 0,
      100% 50%,
      100% 100%,
      50% 100%,
      0 100%,
      0 50%
    );
  }
`;

export const RightWrapper = styled("div")`
  box-sizing: border-box;
  padding: 50px;
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled("h1")`
  margin: 0;
  font-size: 7rem;
  font-weight: 900;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 15px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.secondaryMain};
    transform-origin: bottom right;
    transition: transform 0.5s ease-out;
    @media (max-width: 800px) {
      display: none;
    }
  }
  ${MainWrapper}:hover &::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const SubHeadingWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const SubHeadingWrapperInnerLeft = styled("div")`
  display: flex;
  align-items: flex-end;
`;

export const SubHeading = styled("h1")`
  margin: 0;
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primaryMain};
  position: relative;
  top: 12px;
`;

export const LastName = styled("h1")`
  margin: 0;
  font-size: 4rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primaryMain};
  position: relative;
  bottom: 5px;
  text-align: right;
`;

export const PatternSquare = styled(SVGsquare)`
  width: 48px;
  height: 48px;
  color: ${({ theme }) => theme.colors.primaryTransparent};
  transition: 1500ms;
  ${MainWrapper}:hover & {
    color: ${({ theme }) => theme.colors.primaryMain};
  }
  margin-right: 10px;
`;
export const PatternRectangleSquare = styled(SVGrectangleSquare)`
  width: 196px;
  height: 163px;
  color: ${({ theme }) => theme.colors.primaryTransparent};
  transition: 1500ms;
  ${MainWrapper}:hover & {
    color: ${({ theme }) => theme.colors.primaryMain};
  }
`;

export const JobPosition = styled("h2")`
  margin: 0 0 15px 0;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.tertiaryMain};
`;

export const OtherTitles = styled("h3")`
  margin: 0;
`;
