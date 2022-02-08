import React, { useEffect, useState } from "react";
import {
  Container,
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
} from "react-bootstrap";
import { doExange } from "./doExange";
import { getExange } from "./getExange";

export const Form = () => {
  const [data, setData] = useState();

  const [currencyData, setCurrencyData] = useState();
  const [currencyData2, setCurrencyData2] = useState();

  const [inputValue, setInputValue] = useState(0);
  const [exangeResult, setExangeResult] = useState();

  useEffect(() => {
    getExange().then((res) => {
      setData(res);
    });
  }, []);

  useEffect(() => {
    if (currencyData && currencyData2 && inputValue) {
      setExangeResult(doExange(currencyData, currencyData2, inputValue));
    }
  }, [currencyData, currencyData2, inputValue]);

  const onInputChange = (e) => {
    const currentValue = parseFloat(e.currentTarget.value);
    if (currentValue > 0) {
      setInputValue(currentValue);
    }
  };
  const onItemClick = (item, selectNumber) => {
    selectNumber === 1 ? setCurrencyData(item) : setCurrencyData2(item);
  };

  return (
    <Container>
      {data && (
        <div className="content-wrapper">
          <div className="content-title">Select currency to exchange</div>
          <div className="form-wrapper">
            <InputGroup className="mr-3 form-item">
              <DropdownButton
                variant="outline-secondary"
                title={currencyData?.ccy || "Set currency from"}
                id="input-group-dropdown-1"
              >
                {data
                  .filter((item) => item.ccy !== currencyData?.ccy)
                  .map((item, index) => (
                    <Dropdown.Item
                      onClick={() => onItemClick(item, 1)}
                      key={index}
                      href="#"
                    >
                      {item.ccy}
                    </Dropdown.Item>
                  ))}
              </DropdownButton>
              <FormControl
                onChange={(e) => onInputChange(e)}
                value={inputValue}
                type="number"
              />
            </InputGroup>
            <InputGroup className="ml-3 form-item">
              <DropdownButton
                variant="outline-secondary"
                title={currencyData2?.ccy || "Set currency to"}
                id="input-group-dropdown-1"
              >
                {data
                  .filter((item) => item.ccy !== currencyData2?.ccy)
                  .map((item, index) => (
                    <Dropdown.Item
                      onClick={() => onItemClick(item, 2)}
                      key={index}
                    >
                      {item.ccy}
                    </Dropdown.Item>
                  ))}
              </DropdownButton>
            </InputGroup>
            <span className="exange-result">
              {exangeResult || "Exchange Result"}
            </span>
          </div>
        </div>
      )}
    </Container>
  );
};
