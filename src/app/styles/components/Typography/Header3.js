import styled, { css } from "styled-components";
import { spacing } from "../../helpers";

export const Header3 = styled.h3`
  ${({ color, theme, weight }) => css`
    font-size: ${theme.headers[3]};
    color: ${theme.colors[color]};
    font-weight: ${theme.components.header[weight]};
    text-shadow: ${theme.shadow.text};
    ${spacing}
  `}
`;
