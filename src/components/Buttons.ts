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
