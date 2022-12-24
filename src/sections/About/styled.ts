import styled from "styled-components";
import { ButtonTertiary } from "../../components/Buttons";
export const MainWrapper = styled("div")`
  box-sizing: border-box;
  width: 100%;
  min-height: 800px;
  display: inline-flex;
  position: relative;
`;

export const LeftWrapperOverlay = styled("div")`
  background: linear-gradient(
    0deg,
    rgba(0, 68, 255, 0.381),
    rgba(0, 4, 255, 0.734)
  );
  transition: 1500ms;
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const LeftWrapper = styled("div")`
  box-sizing: border-box;
  width: 55%;
  background: black;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 15px;
  overflow: hidden;
  position: relative;
  transition: 1500ms;
  ${MainWrapper}:hover & {
    ${LeftWrapperOverlay} {
      opacity: 0;
    }
  }
`;

export const RightWrapper = styled("div")`
  width: 44.65%;
  background: ${({ theme }) => theme.colors.primarySub};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 150px;
  margin-bottom: 150px;
  right: 200px;
  width: 100%;
  min-height: 700px;
  background: ${({ theme }) => theme.colors.primaryMain};
  clip-path: polygon(
    20% 0%,
    100% 0,
    100% 20%,
    100% 100%,
    80% 100%,
    20% 100%,
    0 100%,
    0 0
  );
  transition: 500ms;
  ${MainWrapper}:hover & {
    clip-path: polygon(
      20% 0%,
      100% 0,
      100% 20%,
      100% 80%,
      80% 100%,
      20% 100%,
      0 100%,
      0% 20%
    );
  }
  @media (max-width: 1400px) {
    width: 200%;
    right: 112%;
    clip-path: polygon(
      20% 0%,
      100% 0,
      100% 20%,
      100% 100%,
      80% 100%,
      20% 100%,
      0 100%,
      0 0
    ) !important;
  }
`;

export const Content = styled("div")`
  position: relative;
  padding: 150px;
  bottom: -700px;
  transition: 1000ms;
  ${MainWrapper}:hover & {
    bottom: 0;
  }
  @media (max-width: 700px) {
    padding: 10px;
  }
`;

export const SectionIntro = styled("div")`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.primaryMain};
  transition: 1000ms;
  ${MainWrapper}:hover & {
    top: -100%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  text-align: center;
`;

export const IntroText = styled("h1")`
  margin: 0;
  font-size: 5rem;
  @media (max-width: 700px) {
    font-size: 3rem;
  }
`;
export const IntroImg = styled("img")`
  width: 200px;
  height: 200px;
  border-radius: 20px;
`;

export const SpanTertiary = styled("span")`
  color: ${({ theme }) => theme.colors.tertiaryMain};
`;

export const MobileTrigger = styled(ButtonTertiary)`
  display: none;
  @media (max-width: 1400px) {
    display: block;
  }
`;

export const VideoWrapper = styled("div")`
  min-width: 100%;
  min-height: 100%;
  min-width: 100%;
  min-height: 100%;
  position: relative;

  z-index: -1;
`;

export const StyledVideo = styled("video")`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
