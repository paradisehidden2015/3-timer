import React, { useEffect, useState } from "react";
import { Badge, Button, Col } from "react-bootstrap";

const TimerOne = ({ flag1, chnageTimer, num1, setNum2 }) => {
  console.log("timerOne");
  return (
    <Col>
      <h1 className="mt-3">
        <Badge bg="danger">{num1}</Badge>
      </h1>
      <Button
        variant="light"
        onClick={() => {
          if (flag1) {
            // setFlag1(false);
            // setFlag2(true);
            chnageTimer(false, true, false);
            setNum2(num1);
          }
        }}
      >
        next
      </Button>
    </Col>
  );
};

export default React.memo(TimerOne);
