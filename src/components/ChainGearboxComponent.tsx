import * as React from "react";
import { Row, Col } from "reactstrap";

import { ChainGearbox } from "../models/ChainGearbox";
import { Gearbox } from "../models/Gearbox";
import { GearboxComponent } from "./GearboxComponent";

export interface ChainGearboxProps {
  chainGearbox: ChainGearbox;
}

export interface ChainGearboxState {
  chainGearbox: ChainGearbox;
}

export class ChainGearboxComponent extends React.Component<ChainGearboxProps, ChainGearboxState> {
  constructor(props: ChainGearboxProps) {
    super(props);
    this.state = {
      chainGearbox: props.chainGearbox,
    };
  }

  frontGearsChangeHandler = (gearbox: Gearbox) => {
    this.setState({
      chainGearbox: new ChainGearbox(
        Array.from(gearbox),
        Array.from(this.state.chainGearbox.rearGears),
        this.state.chainGearbox.forbiddenGears,
      ),
    });
  };

  rearGearsChangeHandler = (gearbox: Gearbox) => {
    this.setState({
      chainGearbox: new ChainGearbox(
        Array.from(this.state.chainGearbox.frontGears),
        Array.from(gearbox),
        this.state.chainGearbox.forbiddenGears,
      ),
    });
  };

  render() {
    return (
      <Row>
        <Col>
          <h4>Front gears</h4>
          <GearboxComponent
            gearbox={this.state.chainGearbox.frontGears}
            gearboxChangeHandler={this.frontGearsChangeHandler}
          />
        </Col>
        <Col>
          <h4>Rear gears</h4>
          <GearboxComponent
            gearbox={this.state.chainGearbox.rearGears}
            gearboxChangeHandler={this.rearGearsChangeHandler}
          />
        </Col>
        <Col>
          <h4>Forbidden gears</h4>
          {Array.from(this.state.chainGearbox.forbiddenGears).map((gear, index) => (
            <div key={index}>{gear}</div>
          ))}
        </Col>
        <Col>
          <h4>Ratios</h4>
          {Array.from(this.state.chainGearbox.gears).map(gear => (
            <div key={gear[0]}>
              {gear[0]} - {gear[2].toFixed(2)}
            </div>
          ))}
        </Col>
      </Row>
    );
  }
}
