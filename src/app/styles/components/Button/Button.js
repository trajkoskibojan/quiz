import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ boxShadow, background, theme }) => css`
    height: ${theme.components.button.normal.height};
    display: flex;
    align-items: center;
    background: ${theme.colors[background]};
    border-radius: 200px;
    cursor: pointer;
    margin-bottom: ${theme.spaces[4]};
    border: none;
    width: 100%;
    justify-content: center;
    position: relative;
    box-shadow: ${theme.colors[boxShadow]};
  `}
`;
