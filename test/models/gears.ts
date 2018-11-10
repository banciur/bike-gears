import { expect } from "chai";

import { GearBox } from "../../src/models/gears";

describe("models", () => {
  describe("gears", () => {
    const initTable = [2, 1, 3];

    describe("GearBox", () => {
      it("should create gearbox with correct elements", () => {
        const gearBox = new GearBox(initTable);

        const arr = Array.from(gearBox);
        for (const element of initTable) {
          expect(arr).to.include(element);
        }
      });

      it("should create gearbox with correct length", () => {
        const gearBox = new GearBox(initTable);

        expect(gearBox).to.have.lengthOf(initTable.length);

        const arr = Array.from(gearBox);
        for (const element of initTable) {
          expect(arr).to.include(element);
        }
      });

      it("should create sorted gearbox", () => {
        const gearBoxArray = Array.from(new GearBox(initTable));
        const gearBoxArrayDesc = Array.from(new GearBox(initTable, false));

        for (let i = 0; i < gearBoxArray.length - 1; i++) {
          expect(gearBoxArray[i] <= gearBoxArray[i + 1]).to.be.true;
        }

        for (let i = 0; i < gearBoxArrayDesc.length - 1; i++) {
          expect(gearBoxArrayDesc[i] >= gearBoxArrayDesc[i + 1]).to.be.true;
        }
      });
    });
  });
});
