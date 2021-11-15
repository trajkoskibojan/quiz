import React from "react";
import styled, { css } from "styled-components";
import star from "../../assets/icons/star.png";
import { Button } from "../../styles/components";
import { Text } from "../../styles/components/Typography";

const Image = styled.img`
  ${({ theme }) => css`
    height: 40px;
    width: 40px;
    padding: ${theme.spaces[7]};
    position: absolute;
    left: 5px;
  `}
`;

export const Question = ({ activeMode, level, text, onClick }) => (
  <Button background="blackLight" onClick={onClick}>
    {activeMode && activeMode[level] && <Image src={star} />}
    <Text color="white" weight="bolder" mb="0">
      {text}
    </Text>
  </Button>
);
