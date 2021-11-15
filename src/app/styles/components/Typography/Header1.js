import styled, { css } from "styled-components";
import { spacing } from "../../helpers";

export const Header1 = styled.h1`
  ${({ color, theme, weight }) => css`
    font-size: ${theme.headers[1]};
    color: ${theme.colors[color]};
    font-weight: ${theme.components.header[weight]};
    text-shadow: ${theme.shadow.text};
    ${spacing}
  `}
`;
