import * as React from "react";

import { ChainGearboxComponent } from "./components/ChainGearboxComponent";
import { ChainGearbox } from "./models/ChainGearbox";
import { RiderPreferences } from "./models/RiderPreferences";
import { RiderPreferencesComponent } from "./components/RiderPreferencesComponent";
import { WheelComponent } from "./components/WheelComponent";
import { Wheel } from "./models/Wheel";
import { ChartComponent } from "./components/ChartComponent";

export interface AppState {
  chainGearbox: ChainGearbox;
  riderPreferences: RiderPreferences;
  wheel: Wheel;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    const frontGears = [50, 34];
    const rearGears = [11, 12, 13, 16, 18, 20, 22, 25, 28, 32];
    const forbiddenGears = ["1-10", "1-9", "1-8", "2-1", "2-2", "2-3"];

    this.state = {
      chainGearbox: new ChainGearbox(frontGears, rearGears, forbiddenGears),
      riderPreferences: new RiderPreferences(80, 120),
      wheel: new Wheel(28),
    };
  }

  handlePreferencesChange = (riderPreferences: RiderPreferences): void => {
    this.setState({
      ...this.state,
      riderPreferences,
    });
  };

  handleWheelChange = (wheel: Wheel): void => {
    this.setState({
      ...this.state,
      wheel,
    });
  };

  handleChainGearboxChange = (chainGearbox: ChainGearbox): void => {
    this.setState({
      ...this.state,
      chainGearbox,
    });
  };

  render() {
    return (
      <>
        <ChartComponent {...this.state} />

        <RiderPreferencesComponent
          riderPreferences={this.state.riderPreferences}
          onChange={this.handlePreferencesChange}
        />
        <WheelComponent wheel={this.state.wheel} onChange={this.handleWheelChange} />
        <ChainGearboxComponent chainGearbox={this.state.chainGearbox} onChange={this.handleChainGearboxChange} />
      </>
    );
  }
}
