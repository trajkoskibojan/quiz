import React, { useCallback, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Question } from "../../components";
import MainContext from "../../context/MainContext";
import { Box } from "../../styles/components";
import { Header3 } from "../../styles/components/Typography";
import { useNavigate, useParams } from "react-router";
import { v4 as uuid } from "uuid";
import { routes } from "../../routes/routes";

const Questions = () => {
  const { data } = useContext(MainContext);
  const navigate = useNavigate();
  const params = useParams();
  const curQuestion = Number(params.id);

  let question, answers;

  if (data.length > 0) {
    question = data[curQuestion - 1];
    answers = [question.correct_answer, ...question.incorrect_answers];
  }

  const handleQuestions = useCallback(
    (answer) => {
      localStorage.setItem("question", curQuestion);
      answer === question.correct_answer
        ? navigate(routes.correct.path, {
            replace: true,
          })
        : navigate(routes.incorrect.path, {
            replace: true,
          });
    },
    [curQuestion, question.correct_answer, navigate]
  );

  return (
    <Row className="p-2">
      <Col className="mb-5 text-center">
        <Box>
          <Header3 color="white" weight="bolder" pt="20" pb="20">
            {question?.question}
          </Header3>
          {answers.map((answer) => (
            <Question
              key={uuid()}
              text={answer}
              onClick={() => handleQuestions(answer)}
            />
          ))}
        </Box>
      </Col>
    </Row>
  );
};

export default Questions;
