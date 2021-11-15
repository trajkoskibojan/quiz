import React, { useCallback, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { Box, Button, ImageWrap } from "../../styles/components";
import { Text } from "../../styles/components/Typography";
import thumbup from "../../assets/icons/thumbup.png";
import arrow from "../../assets/icons/arrow.png";
import { urlWithCurrent } from "../../helpers/url";
import { routes } from "../../routes/routes";
import { useNavigate } from "react-router";
import MainContext from "../../context/MainContext";

const Icon = styled.img`
  position: absolute;
  right: 24px;
  height: 40px;
  width: 40px;
`;

const Correct = () => {
  const navigate = useNavigate();
  const { data, handleScore, score } = useContext(MainContext);
  const curQuestion = Number(localStorage.getItem("question"));

  const handleQuestions = useCallback(() => {
    handleScore();
    localStorage.setItem("score", score + 1);
    data.length !== curQuestion
      ? navigate(
          urlWithCurrent(`${routes.question.path}`, {
            id: curQuestion + 1,
          }),
          {
            replace: true,
          }
        )
      : navigate(routes.score.path, {
          replace: true,
        });
  }, [curQuestion, data.length, handleScore, navigate, score]);

  return (
    <Row className="p-2">
      <Col className="mb-5 text-center">
        <Box>
          <ImageWrap mb={40}>
            <img src={thumbup} alt="thumbs" />
          </ImageWrap>
          <Button
            background="redLight"
            align="center"
            boxShadow="redLightShadow"
            onClick={handleQuestions}
          >
            <Text color="white" weight="bolder" mb="0">
              Next
            </Text>
            <Icon src={arrow} />
          </Button>
        </Box>
      </Col>
    </Row>
  );
};

export default Correct;
