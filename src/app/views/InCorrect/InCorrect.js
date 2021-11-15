import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Box, ImageWrap } from "../../styles/components";
import thumbdown from "../../assets/icons/thumbdown.png";
import { useNavigate } from "react-router";
import { routes } from "../../routes/routes";

const InCorrect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const id = setTimeout(() => {
      navigate(routes.score.path);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [navigate]);

  return (
    <Row className="p-2">
      <Col className="mb-5 text-center">
        <Box>
          <ImageWrap>
            <img src={thumbdown} alt="thumbs" />
          </ImageWrap>
        </Box>
      </Col>
    </Row>
  );
};

export default InCorrect;
