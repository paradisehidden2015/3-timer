import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import TimerOne from "./TimerOne";
import TimerTwo from "./TimerTwo";
import TimerThree from "./TimerThree";
import { Button, Col, Container, Row } from "react-bootstrap";

function App() {
  const [flag1, setFlag1] = useState(true);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

  useEffect(() => {
    // let time = null;
    // if (flag1) {
    //   time = setInterval(() => {
    //     setNum1((last) => last + 1);
    //   }, 300);
    // }
    // if (flag2) {
    //   time = setInterval(() => {
    //     setNum2((last) => last + 1);
    //   }, 300);
    // }
    // if (flag3) {
    //   time = setInterval(() => {
    //     setNum3((last) => last + 1);
    //   }, 300);
    // }
    const time = flag1
      ? setInterval(() => {
          setNum1((last) => last + 1);
        }, 1000)
      : flag2
      ? setInterval(() => {
          setNum2((last) => last + 1);
        }, 1000)
      : flag3 &&
        setInterval(() => {
          setNum3((last) => last + 1);
        }, 1000);

    return () => clearInterval(time);
  }, [flag1, flag2, flag3]);

  // const chnageTimer = (timer1, timer2, timer3) => {
  //   setFlag1(timer1);
  //   setFlag2(timer2);
  //   setFlag3(timer3);
  // };

  const chnageTimer = useCallback((timer1, timer2, timer3) => {
    setFlag1(timer1);
    setFlag2(timer2);
    setFlag3(timer3);
  }, []);

  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <Container fluid>
        <Row>
          <TimerOne
            flag1={flag1}
            chnageTimer={chnageTimer}
            num1={num1}
            setNum2={setNum2}
          />
          <TimerTwo
            flag2={flag2}
            chnageTimer={chnageTimer}
            num2={num2}
            setNum1={setNum1}
            setNum3={setNum3}
          />
          <TimerThree
            flag3={flag3}
            chnageTimer={chnageTimer}
            num3={num3}
            setNum2={setNum2}
          />
        </Row>
        <Row className="mt-5">
          <Col>
            <Button
              variant="light"
              onClick={() => {
                if (flag1 == false && flag2 == false && flag3 == false) {
                  setInterval(() => {
                    setNum1((last) => last + 1);
                  }, 1000);
                }
              }}
            >
              start
            </Button>
          </Col>
          <Col>
            <Button
              variant="light"
              onClick={() => {
                chnageTimer(false, false, false);
                setNum1(0);
                setNum2(0);
                setNum3(0);
              }}
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
