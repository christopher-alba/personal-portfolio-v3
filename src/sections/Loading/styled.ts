import styled from "styled-components";

export const MainWrapper = styled("div")`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  color: white;
  z-index: 10000;
  opacity: 1;
  transition: 500ms;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20vw;
  box-sizing: border-box;
`;

export const VideoWrapper = styled("div")`
  min-width: 100%;
  min-height: 100%;
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  z-index: -1;
  &:before {
    content: "";
    position: absolute;
    background: rgba(0, 38, 255, 0.9);
    border-radius: 5px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const StyledVideo = styled("video")``;

export const ContentWrapper = styled("div")`
  width: 100%;
`;

export const ProgressMainWrapper = styled("div")`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondaryMain};
  height: 25px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  overflow: hidden;
`;
export const ProgressBar = styled("div")`
  background: #ffffffa1;
  transition: 500ms;
  height: 25px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ProgressText = styled("h2")`
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors.tertiaryMain};
  font-size: 0.8rem;
`;

export const LoadingText = styled("h1")`
  text-align: center;
  font-size: 1rem;
  animation: loading linear 1s infinite;
  @keyframes loading {
    0% {
      color: #ffffff;
    }
    50% {
      color: #ffffff84;
    }
    100% {
      color: #ffffff;
    }
  }
`;
export const SuccessText = styled("h1")`
  color: white;
  text-align: center;
  font-size: 1rem;
`;
