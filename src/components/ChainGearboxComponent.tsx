import * as React from "react";
import { Row, Col } from "reactstrap";

import { ChainGearbox } from "../models/ChainGearbox";
import { Gearbox } from "../models/Gearbox";
import { GearboxComponent } from "./GearboxComponent";
import { ListWithActionOnSide } from "./ListWithActionOnSide";

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
          <GearboxComponent
            header="Front gears"
            gearbox={this.state.chainGearbox.frontGears}
            gearboxChangeHandler={this.frontGearsChangeHandler}
          />
        </Col>
        <Col>
          <GearboxComponent
            header="Rear gears"
            gearbox={this.state.chainGearbox.rearGears}
            gearboxChangeHandler={this.rearGearsChangeHandler}
          />
        </Col>
        <Col>
          <ListWithActionOnSide
            header="Forbidden gears"
            arrayToDisplay={this.state.chainGearbox.forbiddenGears}
            clickHandlerGenerator={this.forbiddenGearsClickHandlerGenerator}
            side="right"
          />
        </Col>
        <Col>
          <ListWithActionOnSide
            header="Ratios"
            arrayToDisplay={this.state.chainGearbox.gears.map((gear) => `${gear[0]} - ${gear[2].toFixed(2)}`)}
            clickHandlerGenerator={this.ratiosClickHandlerGenerator}
            side="left"
          />
        </Col>
      </Row>
    );
  }
}
