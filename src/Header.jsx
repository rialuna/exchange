import React, { useEffect, useState } from "react";
import { Col, Container, Navbar } from "react-bootstrap";
import { getExange } from "./getExange";

export const Header = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getExange().then((res) => setData(res));
  }, []);
  return (
    <Navbar className="header" bg="light">
      <Container className="header-container">
        <Navbar.Brand className="title">Currency exchange</Navbar.Brand>
        <div className="currency-wrapper">
          {data &&
            data.map((item, index) => {
              return (
                <Col className="currency" key={index}>
                  <span>{item.ccy}</span> buy: {parseFloat(item.buy)} sale:{" "}
                  {parseFloat(item.sale)}
                </Col>
              );
            })}
        </div>
      </Container>
    </Navbar>
  );
};
