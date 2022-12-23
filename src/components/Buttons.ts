import styled from "styled-components";
export const ButtonTertiary = styled("button")`
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
      transform: translateY(0px) scale(1);
      box-shadow: 0px 0px 10px 2px transparent;
    }
    25% {
      transform: translateY(-5px) scale(1);
      box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.secondaryShadow};
    }
    50% {
      transform: translateY(0px) scale(1);
      box-shadow: 0px 0px 10px 2px transparent;
    }
    75% {
      transform: translateY(-5px) scale(1);
      box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.secondaryShadow};
    }
    100% {
      transform: translateY(0px) scale(1);
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
