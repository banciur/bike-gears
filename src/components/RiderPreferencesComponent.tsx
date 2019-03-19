import * as React from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

import { RiderPreferences } from "../models/RiderPreferences";

interface RiderPreferencesComponentProps {
  riderPreferences: RiderPreferences;

  onChange(riderPreferences: RiderPreferences): void;
}

interface RiderPreferencesComponentState {
  minCadence: number;
  maxCadence: number;
}

export class RiderPreferencesComponent extends React.Component<
  RiderPreferencesComponentProps,
  RiderPreferencesComponentState
> {
  constructor(props: RiderPreferencesComponentProps) {
    super(props);
    this.state = {
      minCadence: props.riderPreferences.minCadence,
      maxCadence: props.riderPreferences.maxCadence,
    };
  }

  onMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = Number.parseInt(event.target.value, 10);
    this.props.onChange(new RiderPreferences(number, this.state.maxCadence));
    this.setState({ minCadence: number });
  };

  onMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = Number.parseInt(event.target.value, 10);
    this.props.onChange(new RiderPreferences(this.state.minCadence, number));
    this.setState({ maxCadence: number });
  };

  render(): React.ReactNode {
    return (
      <>
        <Row>
          <Col>
            <h2>What are your cadence preferences?</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="minCadence">Minimum cadence</Label>
              <Input type="text" id="minCadence" value={this.state.minCadence} onChange={this.onMinChange} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="maxCadence">Maximum cadence</Label>
              <Input type="text" id="maxCadence" value={this.state.maxCadence} onChange={this.onMaxChange} />
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}
