import styled from "styled-components";
export const ButtonTertiary = styled("button")`
  position: relative;
  padding: 10px 40px;
  margin-top: 20px;
  margin-right: 10px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.tertiaryMain};
  color: ${({ theme }) => theme.colors.tertiaryMain};
  transition: 300ms;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.tertiaryMain};
    color: ${({ theme }) => theme.colors.primaryMain};
    animation: bg-spin 1s linear;
  }

  @keyframes bg-spin {
    0% {
      bottom: 0;
      box-shadow: 0px 0px 10px 2px transparent;
    }
    25% {
      bottom: 5px;
      box-shadow: 0px 0px 10px 2px
        ${({ theme }) => theme.colors.secondaryShadow};
    }
    50% {
      bottom: 0;
      box-shadow: 0px 0px 10px 2px transparent;
    }
    75% {
      bottom: 5px;
      box-shadow: 0px 0px 10px 2px
        ${({ theme }) => theme.colors.secondaryShadow};
    }
    100% {
      bottom: 0;
      box-shadow: 0px 0px 10px 2px transparent;
    }
  }
`;

export const ButtonSecondary = styled("button")`
  padding: 10px 40px;
  margin-top: 20px;
  background: transparent;
  transition: 300ms;
  border: 2px solid ${({ theme }) => theme.colors.secondaryMain};
  color: ${({ theme }) => theme.colors.secondaryMain};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryMain};
    color: ${({ theme }) => theme.colors.primaryMain};
  }
`;

export const ButtonYouTube = styled("button")`
  padding: 10px 40px;
  margin-top: 20px;
  background: #ff3434;
  border: none;
  transition: 300ms;
  color: ${({ theme }) => theme.colors.secondaryMain};
  cursor: pointer;
  &:hover {
    background: #ff6666;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ButtonTheme = styled("button")`
  padding: 10px 40px;
  white-space: nowrap;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.tertiaryOverlayLight};
  transition: 300ms;
  color: ${({ theme }) => theme.colors.secondaryMain};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.tertiaryOverlayLight};
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
