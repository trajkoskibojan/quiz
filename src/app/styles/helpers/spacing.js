import { css } from "styled-components";

export const spacing = css`
  ${({ mb, ml, mr, mt, pb, pl, pr, pt, theme }) => css`
    ${mb && `margin-bottom: ${theme.spaces[mb] || mb};`};
    ${ml && `margin-left: ${theme.spaces[ml] || ml};`};
    ${mr && `margin-right: ${theme.spaces[mr] || mr};`};
    ${mt && `margin-top: ${theme.spaces[mt] || mt};`};
    ${pb && `padding-bottom: ${theme.spaces[pb] || pb};`};
    ${pl && `padding-left: ${theme.spaces[pl] || pl};`};
    ${pr && `padding-right: ${theme.spaces[pr] || pr};`};
    ${pt && `padding-top: ${theme.spaces[pt] || pt};`};
  `}
`;
