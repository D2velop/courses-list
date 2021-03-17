import * as arrayList from "../challenge/array";

describe("Array list", () => {
  const firstElement = { label: "one", weight: 3 };
  const secondElement = { label: "two", weight: 1 };
  const lastElement = { label: "one", weight: 99 };
  const arrayFixture = [
    firstElement,
    secondElement,
    { label: "four", weight: 30 },
    { label: "six", weight: 18 },
    { label: "three", weight: 23 },
    lastElement,
  ];

  describe("build array function", () => {
    it("should build a new object", () => {
      const builtArray = arrayList.buildArray("./data/1K.json");
      expect(typeof builtArray === "object").toBe(true);
    });

    it("should build a new array with length", () => {
      const builtArray = arrayList.buildArray("./data/1K.json");
      expect(builtArray.length).toEqual(1000);
    });

    it("should build a new array with well formated element", () => {
      const builtArray = arrayList.buildArray("./data/1K.json");
      expect(builtArray[0]).toEqual({ weight: 32, label: "nine" });
    });
  });

  describe("search one from label", () => {
    it("should return an existing element", () => {
      expect(arrayList.searchOneFromLabel(arrayFixture, "two")).toEqual(
        secondElement
      );
    });

    it("should return null if no element was found", () => {
      expect(
        arrayList.searchOneFromLabel(arrayFixture, "not exist")
      ).toBeNull();
    });
  });

  describe("search nth from weight", () => {
    it("should return an existing element", () => {
      expect(arrayList.searchNthFromWeight(arrayFixture, "one", 2)).toEqual(
        lastElement
      );
    });

    it("should return null if no element was found", () => {
      expect(arrayList.searchNthFromWeight(arrayFixture, "one", 3)).toBeNull();
    });

    it("should return null if no element was found", () => {
      expect(
        arrayList.searchOneFromLabel(arrayFixture, "not exist", 0)
      ).toBeNull();
    });
  });
});
