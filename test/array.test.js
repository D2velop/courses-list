import * as arrayService from "../challenge/array";

describe("Array list", () => {
  let firstElement, secondElement, lastElement;
  let arrayFixture;

  beforeEach(() => {
    firstElement = { label: "ten", weight: 23 };
    secondElement = { label: "two", weight: 1 };
    lastElement = { label: "one", weight: 23 };

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
      const builtArray = arrayService.buildArray("./data/1K.json");
      expect(typeof builtArray === "object").toBe(true);
    });

    it("should build a new array with length", () => {
      const builtArray = arrayService.buildArray("./data/1K.json");
      expect(builtArray.length).toEqual(1000);
    });

    it("should build a new array with well formated element", () => {
      const builtArray = arrayService.buildArray("./data/1K.json");
      expect(builtArray[0]).toEqual({ weight: 32, label: "nine" });
    });
  });

  describe("search one from label", () => {
    it("should return an existing element", () => {
      expect(arrayService.searchOneFromLabel(arrayFixture, "two")).toEqual(
        secondElement
      );
    });

    it("should return null if no element was found", () => {
      expect(
        arrayService.searchOneFromLabel(arrayFixture, "not exist")
      ).toBeNull();
    });
  });

  describe("search nth from weight", () => {
    it("should return an existing element", () => {
      expect(arrayService.searchNthFromWeight(arrayFixture, 23, 2)).toEqual(
        lastElement
      );
    });

    it("should return null if not enough elements", () => {
      expect(arrayService.searchNthFromWeight(arrayFixture, 23, 3)).toBeNull();
    });

    it("should return null if element does not exist", () => {
      expect(arrayService.searchNthFromWeight(arrayFixture, 0, 1)).toBeNull();
    });
  });

  describe("search last from weight", () => {
    it("should return the second(last) occurence of weight 23", () => {
      expect(arrayService.searchLastFromWeight(arrayFixture, 23)).toEqual(
        lastElement
      );
    });

    it("should return the only occurence of weight 1", () => {
      expect(arrayService.searchLastFromWeight(arrayFixture, 1)).toEqual(
        secondElement
      );
    });

    it("should return null if no element was found", () => {
      expect(arrayService.searchLastFromWeight(arrayFixture, 42)).toBeNull();
    });
  });

  describe("search all from weight", () => {
    it("should return all occurences of weight 23", () => {
      expect(arrayService.searchAllFromWeight(arrayFixture, 23)).toEqual([
        firstElement,
        lastElement,
      ]);
    });

    it("should return the only occurence of weight 1", () => {
      expect(arrayService.searchAllFromWeight(arrayFixture, 1)).toEqual([
        secondElement,
      ]);
    });

    it("should return an empty array if no element was found", () => {
      expect(arrayService.searchAllFromWeight(arrayFixture, 42)).toEqual([]);
    });
  });

  describe("Get the nth element", () => {
    it("should return the existing element", () => {
      expect(arrayService.searchNthElement(arrayFixture, 2)).toEqual(
        secondElement
      );
    });

    it("should return null if no element was found", () => {
      expect(arrayService.searchNthElement(arrayFixture, 42)).toBeNull();
    });
  });

  describe("Sort an array based on weight value", () => {
    it("should sort the full array", () => {
      arrayService.sortOnWeight(arrayFixture);

      expect(arrayFixture).toEqual([
        { label: "two", weight: 1 },
        { label: "three", weight: 11 },
        { label: "six", weight: 18 },
        { label: "ten", weight: 23 },
        { label: "one", weight: 23 },
        { label: "four", weight: 30 },
      ]);
    });

    it("should sort a two elements array", () => {
      const twoElemArray = [
        { label: "two", weight: 30 },
        { label: "four", weight: 1 },
      ];

      arrayService.sortOnWeight(twoElemArray);

      expect(twoElemArray).toEqual([
        { label: "four", weight: 1 },
        { label: "two", weight: 30 },
      ]);
    });

    it("should sort an empty array", () => {
      const emptyArray = [];
      arrayService.sortOnWeight(emptyArray)

      expect(emptyArray).toEqual([]);
    });
  });

  describe("Sort an array based on weight value and at weight egual sort on label", () => {
    it("should sort the full array", () => {
      arrayService.sortOnWeightAndLabel(arrayFixture);

      expect(arrayFixture).toEqual([
        { label: "two", weight: 1 },
        { label: "three", weight: 11 },
        { label: "six", weight: 18 },
        { label: "one", weight: 23 },
        { label: "ten", weight: 23 },
        { label: "four", weight: 30 },
      ]);
    });

    it("should sort a two elements array", () => {
      const twoElemArray = [
        { label: "two", weight: 1 },
        { label: "four", weight: 1 },
      ];
      arrayService.sortOnWeightAndLabel(twoElemArray);

      expect(twoElemArray).toEqual([
        { label: "four", weight: 1 },
        { label: "two", weight: 1 },
      ]);
    });

    it("should sort an empty array", () => {
      const emptyArray = [];
      arrayService.sortOnWeightAndLabel(emptyArray)

      expect(emptyArray).toEqual([]);
    });
  });

  describe("Insert a new element at first position in the array", () => {
    it("should insert the new element at first position", () => {
      arrayService.insertFirst(arrayFixture, "five", 5);
      expect(arrayFixture[0]).toEqual({ label: "five", weight: 5 });
    });

    it("should change the length of the array", () => {
      const lengthBefore = arrayFixture.length;
      arrayService.insertFirst(arrayFixture, "five", 5);
      expect(arrayFixture.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Insert a new element at last position in the array", () => {
    it("should insert the new element at last position", () => {
      arrayService.insertEnd(arrayFixture, "five", 5);
      expect(arrayFixture[arrayFixture.length - 1]).toEqual({
        label: "five",
        weight: 5,
      });
    });

    it("should change the length of the array", () => {
      const lengthBefore = arrayFixture.length;
      arrayService.insertEnd(arrayFixture, "five", 5);
      expect(arrayFixture.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Insert a new element at nth position in the array", () => {
    it("should insert the new element at the nth position", () => {
      arrayService.insertNth(arrayFixture, "five", 5, 3);
      expect(arrayFixture[2]).toEqual({ label: "five", weight: 5 });
    });

    it("should change the length of the array", () => {
      const lengthBefore = arrayFixture.length;
      arrayService.insertNth(arrayFixture, "five", 5, 3);
      expect(arrayFixture.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Remove an element from its weight and label", () => {
    it("should return the former position of the remove element", () => {
      expect(arrayService.removeFirst(arrayFixture, "four", 30)).toEqual(3);
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

    it("should remove targeted element", () => {
      const weightToRemove = 23;
      arrayService.removeAll(arrayFixture, weightToRemove)
      expect(arrayFixture.findIndex((elem) => {
        return elem.weight === weightToRemove
      })).toEqual(-1);
    });

    it("should change the length of the array", () => {
      arrayService.removeAll(arrayFixture, 23);
      expect(arrayFixture.length).toEqual(4);
    });
  });
});
