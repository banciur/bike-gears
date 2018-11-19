import { expect } from "chai";

import { Gearbox } from "../../src/models/Gearbox";

describe("models", () => {
  describe("Gearbox", () => {
    const initTable = [2, 1, 3];

    it("should create gearbox with correct elements", () => {
      const gearBox = new Gearbox(initTable);

      const arr = Array.from(gearBox);
      for (const element of initTable) {
        expect(arr).to.include(element);
      }
    });

    it("should create gearbox with correct length", () => {
      const gearBox = new Gearbox(initTable);

      expect(gearBox).to.have.lengthOf(initTable.length);

      const arr = Array.from(gearBox);
      for (const element of initTable) {
        expect(arr).to.include(element);
      }
    });

    it("should create sorted gearbox", () => {
      const gearBoxArray = Array.from(new Gearbox(initTable));
      const gearBoxArrayDesc = Array.from(new Gearbox(initTable, false));

      for (let i = 0; i < gearBoxArray.length - 1; i++) {
        expect(gearBoxArray[i] <= gearBoxArray[i + 1]).to.be.true;
      }

      for (let i = 0; i < gearBoxArrayDesc.length - 1; i++) {
        expect(gearBoxArrayDesc[i] >= gearBoxArrayDesc[i + 1]).to.be.true;
      }
    });
  });
});
