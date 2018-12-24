import * as React from "react";
import { Row, Col } from "reactstrap";

import { ChainGearbox } from "../models/ChainGearbox";

export interface ChainGearboxProps {
  chainGearbox: ChainGearbox;
}

export const ChainGearboxComponent: React.FunctionComponent<ChainGearboxProps> = ({ chainGearbox }) => (
  <Row>
    <Col>
      <h4>Front gears</h4>
      {Array.from(chainGearbox.frontGears).map((ratio, index) => (
        <div key={index}>{ratio}</div>
      ))}
    </Col>
    <Col>
      <h4>Rear gears</h4>
      {Array.from(chainGearbox.rearGears).map((ratio, index) => (
        <div key={index}>{ratio}</div>
      ))}
    </Col>
    <Col>
      <h4>Forbidden gears</h4>
      {Array.from(chainGearbox.forbiddenGears).map((gear, index) => (
        <div key={index}>{gear}</div>
      ))}
    </Col>
    <Col>
      <h4>Ratios</h4>
      {Array.from(chainGearbox.gears).map(gear => (
        <div key={gear[0]}>
          {gear[0]} - {gear[2].toFixed(2)}
        </div>
      ))}
    </Col>
  </Row>
);
