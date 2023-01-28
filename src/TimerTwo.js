import React, { useEffect, useState } from "react";
import { Badge, Button, Col } from "react-bootstrap";

const TimerTwo = ({ flag2, chnageTimer, num2, setNum1, setNum3 }) => {
  console.log("timerTwo");
  return (
    <Col>
      <h1 className="mt-3">
        <Badge bg="danger">{num2}</Badge>
      </h1>
      <Button
        variant="light"
        onClick={() => {
          if (flag2) {
            // setFlag2(false);
            // setFlag1(true);
            chnageTimer(true, false, false);
            setNum1(num2);
          }
        }}
        className="mx-2"
      >
        prev
      </Button>
      <Button
        variant="light"
        onClick={() => {
          if (flag2) {
            // setFlag2(false);
            // setFlag3(true);
            chnageTimer(false, false, true);
            setNum3(num2);
          }
        }}
        className="mx-2"
      >
        next
      </Button>
    </Col>
  );
};

export default React.memo(TimerTwo);
