import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const CalenderNew = (props) => {
  const { day, date, time1, time2, time3 } = props;
  const fontColor = date === 31 ? "#DDDDDD" : "#27548A";

  const getBgColorTime2 = () => {
    if (date === 26) return "navy";
    if (date === 28) return "lavender";
    return "transparent";
  };

  const getColorTime2 = () => {
    if (date === 26 || date === 28) return "white";
    return fontColor;
  };

  const getBgColorTime1 = () => {
    if (date === 30 || date === 31) return "lavender";
    return "transparent";
  };

  const getColorTime1 = () => {
    if (date === 30 || date === 31) return "white";
    return fontColor;
  };

  return (
    <Container
      className="d-flex flex-column align-items-center p-2"
      style={{
        backgroundColor: date === 26 ? "lavender" : "transparent",
        borderRadius: "0.5rem",
        gap: "0.5rem",
        width: "fit-content", // prevents expanding
      }}
    >
      <Row>
        <Col className="text-center">
          <div
            style={{
              fontFamily: "sans-serif",
              color: fontColor,
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            {day}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: "22px",
              color: fontColor,
              fontWeight: "bold",
            }}
          >
            {date}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <div
            style={{
              fontFamily: "sans-serif",
              color: getColorTime1(),
              fontSize: "13px",
              fontWeight: "bold",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              backgroundColor: getBgColorTime1(),
            }}
          >
            {time1}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <div
            style={{
              fontFamily: "sans-serif",
              color: getColorTime2(),
              fontSize: "13px",
              fontWeight: "bold",
              padding: "0.5rem",
              borderRadius: "0.5rem",
              backgroundColor: getBgColorTime2(),
            }}
          >
            {time2}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <div
            style={{
              fontFamily: "sans-serif",
              color: fontColor,
              fontSize: "13px",
              fontWeight: "bold",
              padding: "0.5rem",
              borderRadius: "0.5rem",
            }}
          >
            {time3}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CalenderNew;
