import styled from "styled-components";

export const MainWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 150px;
  @media (max-width: 700px) {
    padding: 10px;
  }
`;

export const IconWrapper = styled("div")`
  font-size: 5rem;
`;
