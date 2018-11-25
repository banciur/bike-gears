import * as React from "react";
import { Row, Col } from "reactstrap";

import { ChainGearbox } from "../models/ChainGearbox";

export interface ChainGearBoxProps {
  chainGearBox: ChainGearbox;
}

export const ChainGearBoxComponent: React.FunctionComponent<ChainGearBoxProps> = ({ chainGearBox }) => (
  <Row>
    <Col>
      <h4>Front gears</h4>
      {Array.from(chainGearBox.frontGears).map((ratio, index) => (
        <div key={index}>{ratio}</div>
      ))}
    </Col>
    <Col>
      <h4>Rear gears</h4>
      {Array.from(chainGearBox.rearGears).map((ratio, index) => (
        <div key={index}>{ratio}</div>
      ))}
    </Col>
    <Col>
      <h4>Forbidden gears</h4>
      {Array.from(chainGearBox.forbiddenGears).map((gear, index) => (
        <div key={index}>{gear}</div>
      ))}
    </Col>
    <Col>
      <h4>Ratios</h4>
      {Array.from(chainGearBox.gears).map(gear => (
        <div key={gear[0]}>
          {gear[0]} - {gear[2].toFixed(2)}
        </div>
      ))}
    </Col>
  </Row>
);
