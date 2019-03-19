import * as React from "react";

import { ChainGearboxComponent } from "./components/ChainGearboxComponent";
import { ChainGearbox } from "./models/ChainGearbox";
import { RiderPreferences } from "./models/RiderPreferences";
import { RiderPreferencesComponent } from "./components/RiderPreferencesComponent";
import { WheelComponent } from "./components/WheelComponent";
import { Wheel } from "./models/Wheel";

const frontGears = [44, 32, 22];
const rearGears = [11, 13, 15, 17, 19, 20, 22];
const forbiddenGears = ["2-1", "3-2", "1-7", "1-6", "2-7", "3-1"];

const chainGearbox = new ChainGearbox(frontGears, rearGears, forbiddenGears);
const riderPreferences = new RiderPreferences(80, 120);
const wheel = new Wheel(28);

const riderPreferencesChange = (newPrefs: RiderPreferences): void => {
  console.log(newPrefs);
};

const wheelChange = (newWheel: Wheel): void => {
  console.log(newWheel);
};

export const App = () => (
  <>
    <RiderPreferencesComponent riderPreferences={riderPreferences} onChange={riderPreferencesChange} />
    <WheelComponent wheel={wheel} onChange={wheelChange} />
    <ChainGearboxComponent chainGearbox={chainGearbox} />
  </>
);
