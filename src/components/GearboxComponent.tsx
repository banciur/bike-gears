import * as React from "react";
import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";
import { debounce } from "lodash";

import { Gearbox } from "../models/Gearbox";

const DEBOUNCE_WAIT = 300;

interface GearboxComponentProps {
  header: string;
  gearbox: Gearbox;
  gearboxChangeHandler: (gearbox: Gearbox) => void;
}

interface GearboxComponentState {
  gearbox: number[];
}

export class GearboxComponent extends React.Component<GearboxComponentProps, GearboxComponentState> {
  private readonly notifyParent: (gearbox: Gearbox) => void;
  private readonly ascending: boolean;
  private header: string;

  constructor(props: GearboxComponentProps) {
    super(props);

    this.header = props.header;
    this.notifyParent = props.gearboxChangeHandler;
    this.ascending = props.gearbox.ascending;
    this.state = {
      gearbox: Array.from(props.gearbox),
    };
  }

  recalculateAndNotify = (gearbox?: number[]) => {
    const newGears = gearbox === undefined ? this.state.gearbox : gearbox;
    const newGearbox = new Gearbox(newGears, this.ascending);
    this.setState({
      gearbox: Array.from(newGearbox),
    });
    this.notifyParent(newGearbox);
  };

  debouncedRecalculateAndNotify = debounce(this.recalculateAndNotify, DEBOUNCE_WAIT);

  handleChangeGearGenerator = (index: number) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const number = Number.parseInt(event.target.value, 10);
      const newGears = Array.from(this.state.gearbox);
      newGears[index] = number;
      this.setState({
        gearbox: newGears,
      });
      this.debouncedRecalculateAndNotify();
    };
  };

  handleRemoveGearGenerator = (index: number) => {
    return () => {
      const newGears = Array.from(this.state.gearbox);
      newGears.splice(index, 1);
      this.setState({
        gearbox: newGears,
      });
      this.debouncedRecalculateAndNotify();
    };
  };

  debouncedNewGear = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const newGears = Array.from(this.state.gearbox);
    newGears.push(Number.parseInt(event.target.value, 10));
    event.target.value = "";
    this.recalculateAndNotify(newGears);
  }, DEBOUNCE_WAIT);

  handleNewGear = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    this.debouncedNewGear(event);
  };

  render(): React.ReactNode {
    return (
      <>
        <h4>{this.header}</h4>
        {Array.from(this.state.gearbox).map((gear, index) => (
          <InputGroup size="sm" className="mb-2" key={index}>
            <InputGroupAddon addonType="prepend">{`${index + 1}`}</InputGroupAddon>
            <Input value={gear} onChange={this.handleChangeGearGenerator(index)} />
            <InputGroupAddon addonType="append">
              <Button onClick={this.handleRemoveGearGenerator(index)}>x</Button>
            </InputGroupAddon>
          </InputGroup>
        ))}
        <InputGroup size="sm">
          <InputGroupAddon addonType="prepend">new gear</InputGroupAddon>
          <Input onChange={this.handleNewGear} />
        </InputGroup>
      </>
    );
  }
}
