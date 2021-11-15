import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Header1, Paragraph } from "../../styles/components/Typography";
import { ErrorPage } from "./styles/ErrorPage";

const FallbackErrorPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ErrorPage>
            <Header1 color="danger">Error 404</Header1>
            <Paragraph>
              You reached a dead end. Go back to the{" "}
              <Link to="/" className="link">
                Homepage
              </Link>{" "}
            </Paragraph>
          </ErrorPage>
        </Col>
      </Row>
    </Container>
  );
};

export default FallbackErrorPage;
