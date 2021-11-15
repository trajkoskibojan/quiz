import styled, { css } from "styled-components";
import { spacing } from "../../helpers";

export const ImageWrap = styled.div`
  ${({ theme }) => css`
    width: 350px;
    height: 350px;
    background: ${theme.colors.blackLight};
    border-radius: 200px;
    ${spacing};

    img:first-child {
      height: 170px;
      width: 170px;
      padding: ${theme.spaces[36]};
      margin-bottom: ${theme.spaces[40]};
    }

    span {
      margin-bottom: ${theme.spaces[40]};
    }
  `}
`;
