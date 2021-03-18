import * as arrayList from "../challenge/array";

describe("Array list", () => {
  const firstElement = { label: "ten", weight: 23 };
  const secondElement = { label: "two", weight: 1 };
  const lastElement = { label: "one", weight: 23 };

  let arrayFixture;

  beforeEach(() => {
    arrayFixture = [
      firstElement,
      secondElement,
      { label: "four", weight: 30 },
      { label: "six", weight: 18 },
      { label: "three", weight: 11 },
      lastElement,
    ];
  });

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
      expect(arrayList.searchNthFromWeight(arrayFixture, 23, 2)).toEqual(
        lastElement
      );
    });

    it("should return null if not enough elements", () => {
      expect(arrayList.searchNthFromWeight(arrayFixture, 23, 3)).toBeNull();
    });

    it("should return null if element does not exist", () => {
      expect(arrayList.searchNthFromWeight(arrayFixture, 0, 1)).toBeNull();
    });
  });

  describe("search last from weight", () => {
    it("should return the second(last) occurence of weight 23", () => {
      expect(arrayList.searchLastFromWeight(arrayFixture, 23)).toEqual(
        lastElement
      );
    });

    it("should return the only occurence of weight 1", () => {
      expect(arrayList.searchLastFromWeight(arrayFixture, 1)).toEqual(
        secondElement
      );
    });

    it("should return null if no element was found", () => {
      expect(arrayList.searchLastFromWeight(arrayFixture, 42)).toBeNull();
    });
  });

  describe("search all from weight", () => {
    it("should return all occurences of weight 23", () => {
      expect(arrayList.searchAllFromWeight(arrayFixture, 23)).toEqual([
        firstElement,
        lastElement,
      ]);
    });

    it("should return the only occurence of weight 1", () => {
      expect(arrayList.searchAllFromWeight(arrayFixture, 1)).toEqual([
        secondElement,
      ]);
    });

    it("should return an empty array if no element was found", () => {
      expect(arrayList.searchAllFromWeight(arrayFixture, 42)).toEqual([]);
    });
  });

  describe("Get the nth element", () => {
    it("should return the existing element", () => {
      expect(arrayList.searchNthElement(arrayFixture, 2)).toEqual(
        secondElement
      );
    });

    it("should return null if no element was found", () => {
      expect(arrayList.searchNthElement(arrayFixture, 42)).toBeNull();
    });
  });

  describe("Sort an array based on weight value", () => {
    it("should sort the full array", () => {
      expect(arrayList.sortOnWeight(arrayFixture)).toEqual([
        { label: "two", weight: 1 },
        { label: "three", weight: 11 },
        { label: "six", weight: 18 },
        { label: "ten", weight: 23 },
        { label: "one", weight: 23 },
        { label: "four", weight: 30 },
      ]);
    });

    it("should sort a two elements array", () => {
      expect(
        arrayList.sortOnWeight([
          { label: "two", weight: 30 },
          { label: "four", weight: 1 },
        ])
      ).toEqual([
        { label: "four", weight: 1 },
        { label: "two", weight: 30 },
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

  describe("Sort an array based on weight value and at weight egual sort on label", () => {
    it("should sort the full array", () => {
      expect(arrayList.sortOnWeightAndLabel(arrayFixture)).toEqual([
        { label: "two", weight: 1 },
        { label: "three", weight: 11 },
        { label: "six", weight: 18 },
        { label: "one", weight: 23 },
        { label: "ten", weight: 23 },
        { label: "four", weight: 30 },
      ]);
    });

    it("should sort a two elements array", () => {
      expect(
        arrayList.sortOnsortOnWeightAndLabelWeight([
          { label: "two", weight: 1 },
          { label: "four", weight: 1 },
        ])
      ).toEqual([
        { label: "four", weight: 1 },
        { label: "two", weight: 1 },
      ]);
    });

    it("should sort an array with one element", () => {
      expect(arrayList.sortOnWeightAndLabel([{ label: "two", weight: 30 }])).toEqual([
        { label: "two", weight: 30 },
      ]);
    });

    it("should sort an empty array", () => {
      expect(arrayList.sortOnWeightAndLabel([])).toEqual([]);
    });
  });

  describe("Insert a new element at first position in the array", () => {
    it("should insert the new element at first position", () => {
      arrayList.insertFirst(arrayFixture, "five", 5);
      expect(arrayList[0]).toEqual({ label: "five", weight: 5 });
    });

    it("should change the length of the array", () => {
      const lengthBefore = arrayList.length;
      arrayList.insertFirst(arrayFixture, "five", 5);
      expect(arrayList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Insert a new element at last position in the array", () => {
    it("should insert the new element at last position", () => {
      arrayList.insertEnd(arrayFixture, "five", 5);
      expect(arrayList[arrayList.length - 1]).toEqual({ label: "five", weight: 5 });
    });

    it("should change the length of the array", () => {
      const lengthBefore = arrayList.length;
      arrayList.insertEnd(arrayFixture, "five", 5);
      expect(arrayList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Insert a new element at nth position in the array", () => {
    
    it("should insert the new element at the nth position", () => {
      arrayList.insertEnd(arrayFixture, "five", 5, 3);
      expect(arrayList[2]).toEqual({ label: "five", weight: 5 });
    });

    it("should change the length of the array", () => {
      const lengthBefore = arrayList.length;
      arrayList.insertEnd(arrayFixture, "five", 5, 3);
      expect(arrayList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Remove an element from its weight and label", () => {
    
    it("should return the former position of the remove element", () => {
      expect(arrayList.removeFirst(arrayFixture, "four", 30)).toEqual(3);
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
