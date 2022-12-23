import styled from "styled-components";
export const MainWrapper = styled("div")`
  width: 100%;
  min-height: 800px;
  display: flex;
`;

export const LeftWrapper = styled("div")`
  box-sizing: border-box;
  width: 55%;
  background: linear-gradient(
      0deg,
      rgba(0, 68, 255, 0.381),
      rgba(0, 4, 255, 0.734)
    ),
    url("/images/skyscraper2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 15px;
`;

export const RightWrapper = styled("div")`
  width: 45%;
  background: ${({ theme }) => theme.colors.primarySub};
`;
