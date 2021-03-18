import * as arrayList from "../challenge/sortedArray";

describe("Sorted array list", () => {
  const firstElement = { label: "two", weight: 1 }
  const secondElement = { label: "three", weight: 11 };
  const lastElement = { label: "four", weight: 30 };

  let arrayFixture;

  beforeEach(() => {
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
      const builtArray = arrayList.buildArray("./data/1K_sorted.json");
      expect(typeof builtArray === "object").toBe(true);
    });

    it("should build a new array with length", () => {
      const builtArray = arrayList.buildArray("./data/1K_sorted.json");
      expect(builtArray.length).toEqual(1000);
    });

    it("should build a new array with well formated element", () => {
      const builtArray = arrayList.buildArray("./data/1K_sorted.json");
      expect(builtArray[0]).toEqual({ weight: 0, label: "heigth" });
    });
  });

  describe("search all from weight", () => {
    it("should return all occurences of weight 23", () => {
      expect(arrayList.searchAllFromWeight(arrayFixture, 23)).toEqual([
        { label: "one", weight: 23 },
        { label: "ten", weight: 23 }
      ]);
    });

    it("should return the only occurence of weight 1", () => {
      expect(arrayList.searchAllFromWeight(arrayFixture, 1)).toEqual([
        firstElement,
      ]);
    });

    it("should return an empty array if no element was found", () => {
      expect(arrayList.searchAllFromWeight(arrayFixture, 42)).toEqual([]);
    });
  });

  describe("Sort an array based on weight value", () => {
    it("should sort the full array", () => {
      expect(arrayList.sortOnWeight(arrayFixture)).toEqual([
        { label: "two", weight: 1 },
        { label: "three", weight: 11 },
        { label: "six", weight: 18 },
        { label: "one", weight: 23 },
        { label: "ten", weight: 23 },
        { label: "four", weight: 30 },
      ]);
    });

    it("should sort an array with one element", () => {
      expect(arrayList.sortOnWeight([{ label: "two", weight: 30 }])).toEqual([
        { label: "two", weight: 30 },
      ]);
    });

    it("should sort an empty array", () => {
      expect(arrayList.sortOnWeight([])).toEqual([]);
    });
  });

  describe("Insert a new element in the array", () => {
    it("should insert the new element at first position", () => {
      arrayList.insert(arrayFixture, "zero", 0);
      expect(arrayList[0]).toEqual({ label: "zero", weight: 0 });
    });

    it("should insert the new element at last position", () => {
      arrayList.insert(arrayFixture, "fifty", 50);
      expect(arrayList[arrayList.length - 1]).toEqual({ label: "fifty", weight: 50 });
    });

    it("should insert the new element at the nth position", () => {
      arrayList.insert(arrayFixture, "seven", 19);
      expect(arrayList[3]).toEqual({ label: "seven", weight: 19 });
    });

    it("should change the length of the array", () => {
      const lengthBefore = arrayList.length;
      arrayList.insertFirst(arrayFixture, "zero", 0);
      expect(arrayList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Remove an element from its weight and label", () => {
    
    it("should return the former position of the remove element", () => {
      expect(arrayList.removeFirst(arrayFixture, "four", 30)).toEqual(6);
    });

    it("should return -1 if no element was removed", () => {
      expect(arrayList.removeFirst(arrayFixture, "not exist", 99)).toEqual(-1);
    });

    it("should change the length of the array", () => {
      const lengthBefore = arrayList.length;
      arrayList.removeFirst(arrayFixture, "four", 30);
      expect(arrayList.length).toEqual(lengthBefore - 1);
    });
  });

  describe("Remove all elements from theire weight", () => {
    
    it("should return the number of removed elements", () => {
      expect(arrayList.removeAll(arrayFixture, 23)).toEqual(2);
    });

    it("should return 0 if no element was removed", () => {
      expect(arrayList.removeAll(arrayFixture, 99)).toEqual(0);
    });

    it("should change the length of the array", () => {
      const lengthBefore = arrayList.length;
      const nbRemoved = arrayList.removeAll(arrayFixture, 23);
      expect(arrayList.length).toEqual(lengthBefore - nbRemoved);
    });
  });
});
