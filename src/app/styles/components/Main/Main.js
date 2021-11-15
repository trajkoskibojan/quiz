import { Container } from "react-bootstrap";
import styled, { css } from "styled-components";

export const Main = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.background.default};
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    padding: 0;
  `}
`;
