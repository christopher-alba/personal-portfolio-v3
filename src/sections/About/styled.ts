import styled from "styled-components";
export const MainWrapper = styled("div")`
  width: 100%;
  min-height: 800px;
  display: flex;
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
  background: url("/images/skyscraper2.png");
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
  width: 45%;
  background: ${({ theme }) => theme.colors.primarySub};
`;
