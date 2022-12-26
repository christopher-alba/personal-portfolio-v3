import styled from "styled-components";

export const MainDiv = styled("div")`
  display: flex;
  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;
interface IOptionsDiv {
  minWidth: string;
}
export const OptionsDiv = styled("div")<IOptionsDiv>`
  flex-shrink: 1;
  min-width: ${({ minWidth }) => minWidth};
  height: fit-content;
  padding-right: 50px;
  position: relative;
  display: flex;
  transition: 500ms;
  @media (max-width: 1400px) {
    margin-bottom: 50px;
  }
`;
export const OptionsWrapper = styled("div")`
  width: 90%;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;
export const ContentDiv = styled("div")`
  flex-grow: 1;
`;

export const OptionDiv = styled("div")`
  width: 100%;
  padding: 20px;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) =>
      theme.name === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.05);"};
  }
`;
export const SelectedOptionDiv = styled("div")`
  width: 100%;
  padding: 20px;
  font-size: 1.1rem;
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1);"};
  color: ${({ theme }) => theme.colors.tertiaryMain};
`;

export const OptionSlider = styled("div")`
  position: relative;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: ${({ theme }) => theme.colors.primarySub};
  transition: 500ms;
`;

export const OptionsSliderBar = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.tertiaryMain};
  transition: 500ms;
`;
