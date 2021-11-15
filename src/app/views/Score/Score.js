import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { Box, Button, ImageWrap } from "../../styles/components";
import { Text } from "../../styles/components/Typography";
import again from "../../assets/icons/again.png";
import { useNavigate } from "react-router";
import { routes } from "../../routes/routes";
import MainContext from "../../context/MainContext";

const Icon = styled.img`
  position: absolute;
  right: 24px;
  height: 40px;
  width: 40px;
`;

const FormatNumber = styled.span`
  display: block;
  font-weight: 900;
  font-size: 207px;
  color: #ffffff;
  text-shadow: 0px 4px 30px rgba(0, 0, 0, 0.5);
`;

const Score = () => {
  const navigate = useNavigate();
  const { resetScore, score } = useContext(MainContext);
  const scoreLocal = localStorage.getItem("score");

  const handleAgain = () => {
    navigate(routes.welcome.path, {
      replace: true,
    });
    localStorage.removeItem("question");
    localStorage.removeItem("score");
    resetScore();
  };

  return (
    <Row className="p-2">
      <Col className="mb-5 text-center">
        <Box>
          <ImageWrap mb={40}>
            <FormatNumber>{scoreLocal || score}</FormatNumber>
          </ImageWrap>
          <Button
            background="redLight"
            align="center"
            boxShadow="redLightShadow"
            onClick={handleAgain}
          >
            <Text color="white" weight="bolder" mb="0">
              Again
            </Text>
            <Icon src={again} />
          </Button>
        </Box>
      </Col>
    </Row>
  );
};

export default Score;
