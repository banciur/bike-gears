import * as React from "react";
import { Container, Row, Col } from "reactstrap";

import { ChainGearboxComponent } from "./components/ChainGearboxComponent";
import { ChainGearbox } from "./models/ChainGearbox";

const frontGears = [44, 32, 22];
const rearGears = [11, 13, 15, 17, 19, 20, 22];
const forbiddenGears = ["2-1", "3-2", "1-7", "1-6", "2-7", "3-1"];

const chainGearbox = new ChainGearbox(frontGears, rearGears, forbiddenGears);

export const App = () => (
  <Container>
    <Row>
      <Col>
        <h1>Just another bike gears calculator</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <ChainGearboxComponent chainGearbox={chainGearbox} />
      </Col>
    </Row>
  </Container>
);
