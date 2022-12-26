import styled from "styled-components";

export const MainDiv = styled("div")`
  padding: 200px 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentMainDiv = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled("h1")`
  margin: 0;
  font-size: 1.3rem;
`;

export const StyledAnchor = styled("a")`
  text-decoration: none;
`;

export const HeaderDiv = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

export const Date = styled("p")`
  margin-top: 0;
`;

export const StyledHR = styled("hr")`
  border-color: ${({ theme }) => theme.colors.secondarySub};
  width: 100%;
  margin: 20px 0;
`;

export const SubTitle = styled("h2")`
  font-size: 1.1rem;
`;

export const TechWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const TechPill = styled("div")`
  font-size: 0.8rem;
  background: ${({ theme }) => theme.colors.tertiaryMain};
  color: ${({ theme }) => theme.colors.primaryMain};
  padding: 5px 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const LeftBackground = styled("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 50%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.primarySub};
  z-index: -1;
  margin-right: 20px;
`;

export const RightBackground = styled("div")`
  background: url("/images/turners.jpg");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 50%;
  box-sizing: border-box;
  z-index: -1;
`;

export const ContentWrapper = styled("div")`
  width: 60%;
  height: fit-content;
  background: ${({ theme }) => theme.colors.primaryMain};
  padding: 50px;
  box-sizing: border-box;

  @media (max-width: 800px) {
    width: 100%;
  }
  z-index: 1;
`;

export const Line = styled("div")`
  width: 15px;
  height: 100%;
  position: absolute;
  left: auto;
  right: auto;
  top: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.primaryMain};
`;
