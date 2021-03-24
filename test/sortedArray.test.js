import * as arrayService from "../challenge/sortedArray";

describe("Sorted array list", () => {
  let firstElement, secondElement, lastElement;
  let arrayFixture;

  beforeEach(() => {
    firstElement = { label: "two", weight: 1 }
    secondElement = { label: "three", weight: 11 };
    lastElement = { label: "four", weight: 30 };

    arrayFixture = [
      firstElement,
      secondElement,
      { label: "six", weight: 18 },
      { label: "one", weight: 23 },
      { label: "ten", weight: 23 },
      lastElement,
    ];
  });

  describe("build array function", () => {
    it("should build a new object", () => {
      const builtArray = arrayService.buildArray("./data/1K_sorted.json");
      expect(typeof builtArray === "object").toBe(true);
    });

    it("should build a new array with length", () => {
      const builtArray = arrayService.buildArray("./data/1K_sorted.json");
      expect(builtArray.length).toEqual(1000);
    });

    it("should build a new array with well formated element", () => {
      const builtArray = arrayService.buildArray("./data/1K_sorted.json");
      expect(builtArray[0]).toEqual({ weight: 0, label: "heigth" });
    });
  });

  describe("search all from weight", () => {
    it("should return all occurences of weight 23", () => {
      expect(arrayService.searchAllFromWeight(arrayFixture, 23)).toEqual([
        { label: "one", weight: 23 },
        { label: "ten", weight: 23 }
      ]);
    });

    it("should return the only occurence of weight 1", () => {
      expect(arrayService.searchAllFromWeight(arrayFixture, 1)).toEqual([
        firstElement,
      ]);
    });

    it("should return an empty array if no element was found", () => {
      expect(arrayService.searchAllFromWeight(arrayFixture, 42)).toEqual([]);
    });
  });

  describe("Sort an array based on weight value", () => {
    it("should sort the full array", () => {
      arrayService.sortOnWeight(arrayFixture);
      
      expect(arrayFixture).toEqual([
        { label: "two", weight: 1 },
        { label: "three", weight: 11 },
        { label: "six", weight: 18 },
        { label: "one", weight: 23 },
        { label: "ten", weight: 23 },
        { label: "four", weight: 30 },
      ]);
    });

    it("should sort an array with one element", () => {
      const oneElemArray = [{ label: "two", weight: 30 }];
      arrayService.sortOnWeight(oneElemArray);

      expect(oneElemArray).toEqual([
        { label: "two", weight: 30 },
      ]);
    });

    it("should sort an empty array", () => {
      const emptyArray = [];
      arrayService.sortOnWeight(emptyArray);

      expect(emptyArray).toEqual([]);
    });
  });

  describe("Insert a new element in the array", () => {
    it("should insert the new element at first position", () => {
      arrayService.insert(arrayFixture, "zero", 0);
      expect(arrayFixture[0]).toEqual({ label: "zero", weight: 0 });
    });

    it("should insert the new element at last position", () => {
      arrayService.insert(arrayFixture, "fifty", 50);
      expect(arrayFixture[arrayFixture.length - 1]).toEqual({ label: "fifty", weight: 50 });
    });

    it("should insert the new element at the nth position", () => {
      arrayService.insert(arrayFixture, "seven", 19);
      expect(arrayFixture[3]).toEqual({ label: "seven", weight: 19 });
    });

    it("should change the length of the array", () => {
      const lengthBefore = arrayFixture.length;
      arrayService.insertFirst(arrayFixture, "zero", 0);
      expect(arrayFixture.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Remove an element from its weight and label", () => {
    
    it("should return the former position of the remove element", () => {
      expect(arrayService.removeFirst(arrayFixture, "four", 30)).toEqual(6);
    });

    it("should return -1 if no element was removed", () => {
      expect(arrayService.removeFirst(arrayFixture, "not exist", 99)).toEqual(-1);
    });

    it("should change the length of the array", () => {
      const lengthBefore = arrayFixture.length;
      arrayService.removeFirst(arrayFixture, "four", 30);
      expect(arrayFixture.length).toEqual(lengthBefore - 1);
    });
  });

  describe("Remove all elements from theire weight", () => {
    
    it("should return the number of removed elements", () => {
      expect(arrayService.removeAll(arrayFixture, 23)).toEqual(2);
    });

    it("should return 0 if no element was removed", () => {
      expect(arrayService.removeAll(arrayFixture, 99)).toEqual(0);
    });

    it("should change the length of the array", () => {
      arrayService.removeAll(arrayFixture, 23);
      expect(arrayFixture.length).toEqual(4);
    });
  });
});
