import * as React from "react";
import { Row, Col } from "reactstrap";

import { ChainGearbox } from "../models/ChainGearbox";
import { Gearbox } from "../models/Gearbox";
import { GearboxComponent } from "./GearboxComponent";
import { ClickableSomething } from "./ClickableSomething";

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

  forbiddenGearsClickHandlerGenerator = (index: number) => {
    return () => {
      const newForbiddenArray = this.state.chainGearbox.forbiddenGears;
      newForbiddenArray.splice(index, 1);
      this.setState({
        chainGearbox: new ChainGearbox(
          Array.from(this.state.chainGearbox.frontGears),
          Array.from(this.state.chainGearbox.rearGears),
          newForbiddenArray,
        ),
      });
    };
  };

  ratiosClickHandlerGenerator = (index: number) => {
    return () => {
      const newForbiddenArray = this.state.chainGearbox.forbiddenGears;
      newForbiddenArray.push(this.state.chainGearbox.gears[index][0]);
      this.setState({
        chainGearbox: new ChainGearbox(
          Array.from(this.state.chainGearbox.frontGears),
          Array.from(this.state.chainGearbox.rearGears),
          newForbiddenArray,
        ),
      });
    };
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
          <ClickableSomething
            arrayToDisplay={this.state.chainGearbox.forbiddenGears}
            clickHandlerGenerator={this.forbiddenGearsClickHandlerGenerator}
          />
        </Col>
        <Col>
          <h4>Ratios</h4>
          <ClickableSomething
            arrayToDisplay={this.state.chainGearbox.gears.map(gear => `${gear[0]} - ${gear[2].toFixed(2)}`)}
            clickHandlerGenerator={this.ratiosClickHandlerGenerator}
          />
        </Col>
      </Row>
    );
  }
}
