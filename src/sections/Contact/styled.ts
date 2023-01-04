import styled from "styled-components";

export const DivOuter = styled("div")`
  position: relative;
  min-height: fit-content;
`;
export const DivTop = styled("div")`
  background: ${({ theme }) => theme.colors.primarySub};
  height: 40vh;
  position: relative;
`;
export const VideoBottom = styled("video")`
  min-height: 60vh;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.tertiaryMain};
  object-fit: cover;
  object-position: center;
  position: relative;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  background: transparent;
  height: 70%;
  width: 60%;
  margin: auto auto;
  top: 150px;
  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export const ContentTop = styled("div")`
  background: ${({ theme }) => theme.colors.primaryMain};
  padding: 100px;
  text-align: center;
  @media (max-width: 1200px) {
    padding: 40px;
  }
`;

export const ContentBottom = styled("div")`
  background: ${({ theme }) => theme.colors.primaryMain};
  padding: 100px;
  text-align: center;
  margin-top: 10px;
  @media (max-width: 1200px) {
    padding: 40px;
  }
`;

export const TechWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const TechPill = styled("div")`
  font-size: 0.8rem;
  background: ${({ theme }) => theme.colors.tertiaryMain};
  color: white;
  padding: 5px 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  flex-grow: 1;
`;

export const SocialDiv = styled("div")`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const IconLinkWrapper = styled("a")`
  color: ${({ theme }) => theme.colors.secondaryMain};
  &:hover {
    color: ${({ theme }) => theme.colors.tertiaryMain};
  }
  margin-right: 30px;
  &:last-of-type {
    margin-right: 0;
  }
`;
