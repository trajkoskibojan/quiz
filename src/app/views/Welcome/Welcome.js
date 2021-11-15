import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Col, Row } from "react-bootstrap";
import { Question } from "../../components";
import MainContext from "../../context/MainContext";
import { Box, Button } from "../../styles/components";
import { Header1, Header3, Text } from "../../styles/components/Typography";
import { v4 as uuid } from "uuid";
import { routes } from "../../routes/routes";
import { urlWithCurrent } from "../../helpers/url";

const modes = [
  { text: "Go easy on me", level: "easy" },
  { text: "Bring it on", level: "medium" },
  { text: "Insanity mode", level: "hard" },
];

const Welcome = () => {
  const { activeMode, toggleActive } = useContext(MainContext);
  const navigate = useNavigate();

  return (
    <Row className="p-2">
      <Col className="mb-5 text-center">
        <Box>
          <Header1 color="white" weight="bolder" mb="1rem">
            TriviaTime
          </Header1>
          <Header3 color="white" weight="bolder" mb="8">
            Pick your level of difficulty
          </Header3>
          {modes.map((mode, i) => (
            <Question
              key={uuid()}
              {...mode}
              onClick={() => toggleActive(mode.level)}
              activeMode={activeMode}
            />
          ))}
          <Button
            background="redLight"
            boxShadow="redLightShadow"
            onClick={() =>
              navigate(urlWithCurrent(`${routes.question.path}`, { id: "1" }), {
                replace: true,
              })
            }
          >
            <Text color="white" weight="bolder" mb="0">
              Play Now
            </Text>
          </Button>
        </Box>
      </Col>
    </Row>
  );
};

export default Welcome;
