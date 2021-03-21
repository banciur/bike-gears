import * as React from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

import { Wheel } from "../models/Wheel";

interface WheelComponentProps {
  wheel: Wheel;
  onChange(wheel: Wheel): void;
}

interface WheelPreferencesComponentState {
  wheel: Wheel;
}

export class WheelComponent extends React.Component<WheelComponentProps, WheelPreferencesComponentState> {
  constructor(props: WheelComponentProps) {
    super(props);
    this.state = {
      wheel: props.wheel,
    };
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const diameter = Number.parseInt(event.target.value, 10);
    this.props.onChange(new Wheel(diameter));
    this.setState({ wheel: new Wheel(diameter) });
  };

  render(): React.ReactNode {
    return (
      <>
        <Row>
          <Col>
            <h2>What is your wheel size?</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="wheelDiameter">Wheel diameter</Label>
              <Input type="text" id="wheelDiameter" value={this.state.wheel.diameter} onChange={this.onChange} />
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}
