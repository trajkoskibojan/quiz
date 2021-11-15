import styled, { css } from "styled-components";
import { spacing } from "../../helpers";

export const Text = styled.p`
  ${({ color, theme, weight }) => css`
    font-size: ${theme.components.text.fontSize};
    color: ${theme.colors[color]};
    font-weight: ${theme.components.text.weight[weight]};
    word-wrap: break-word;
    padding: 0 ${theme.spaces[2]};
    line-height: ${theme.spaces[12]};
    ${spacing};
  `}
`;
