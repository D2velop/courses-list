import * as linkedList from "../challenge/simpleLinkedList";

describe("Simple linked list", () => {
  let simpleLinkedList = {};
  let firstElement, secondElement, thirdElement, fiftElement, lastElement;

  beforeEach(() => {
    lastElement = { value: { label: "one", weight: 23 }, next: null };
    fiftElement = {
      value: { label: "three", weight: 11 },
      next: lastElement,
    };
    const fourElement = {
      value: { label: "six", weight: 18 },
      next: fiftElement,
    };
    thirdElement = {
      value: { label: "four", weight: 30 },
      next: fourElement,
    };
    secondElement = {
      value: { label: "two", weight: 1 },
      next: thirdElement,
    };
    firstElement = {
      value: { label: "ten", weight: 23 },
      next: secondElement,
    };

    simpleLinkedList.head = firstElement;
    simpleLinkedList.tail = lastElement;
    simpleLinkedList.length = 6;
  });

  describe("build simple linked list function", () => {
    it("should build a new object", () => {
      const builtList = linkedList.buildLinkedList("./data/1K.json");
      expect(typeof builtList === "object").toBe(true);
    });

    it("should build a new list with length", () => {
      const builtList = linkedList.buildLinkedList("./data/1K.json");
      expect(builtList.length).toEqual(1000);
    });

    it("should build a new list with well formated element", () => {
      const builtList = linkedList.buildLinkedList("./data/1K.json");
      expect(builtList.head.value).toEqual({
        weight: 32,
        label: "nine",
      });
    });
  });

  describe("search one from label", () => {
    it("should return an existing element", () => {
      expect(linkedList.searchOneFromLabel(simpleLinkedList, "two")).toEqual(
        secondElement
      );
    });

    it("should return null if no element was found", () => {
      expect(
        linkedList.searchOneFromLabel(simpleLinkedList, "not exist")
      ).toBeNull();
    });
  });

  describe("search nth from weight", () => {
    it("should return an existing element", () => {
      expect(linkedList.searchNthFromWeight(simpleLinkedList, 23, 2)).toEqual(
        lastElement
      );
    });

    it("should return null if not enough elements", () => {
      expect(
        linkedList.searchNthFromWeight(simpleLinkedList, 23, 3)
      ).toBeNull();
    });

    it("should return null if element does not exist", () => {
      expect(linkedList.searchNthFromWeight(simpleLinkedList, 0, 1)).toBeNull();
    });
  });

  describe("search last from weight", () => {
    it("should return the second(last) occurence of weight 23", () => {
      expect(linkedList.searchLastFromWeight(simpleLinkedList, 23)).toEqual(
        lastElement
      );
    });

    it("should return the only occurence of weight 1", () => {
      expect(linkedList.searchLastFromWeight(simpleLinkedList, 1)).toEqual(
        secondElement
      );
    });

    it("should return null if no element was found", () => {
      expect(linkedList.searchLastFromWeight(simpleLinkedList, 42)).toBeNull();
    });
  });

  describe("search all from weight", () => {
    it("should return all occurences of weight 23", () => {
      expect(linkedList.searchAllFromWeight(simpleLinkedList, 23)).toEqual([
        firstElement,
        lastElement,
      ]);
    });

    it("should return the only occurence of weight 1", () => {
      expect(linkedList.searchAllFromWeight(simpleLinkedList, 1)).toEqual([
        secondElement,
      ]);
    });

    it("should return an empty array if no element was found", () => {
      expect(linkedList.searchAllFromWeight(simpleLinkedList, 42)).toEqual([]);
    });
  });

  describe("Get the nth element", () => {
    it("should return the existing element", () => {
      expect(linkedList.searchNthElement(simpleLinkedList, 2)).toEqual(
        secondElement
      );
    });

    it("should return null if no element was found", () => {
      expect(linkedList.searchNthElement(simpleLinkedList, 42)).toBeNull();
    });
  });

  describe("Sort a list based on weight value", () => {
    it("should sort the full list", () => {
      const expectedList = {
        head: secondElement,
        tail: thirdElement,
        length: 6,
      };
      linkedList.sortOnWeight(simpleLinkedList);
      expect(simpleLinkedList).toEqual(expectedList);
    });

    it("should sort a list with one element", () => {
      const list = [{ label: "two", weight: 30, next: null }];
      linkedList.sortOnWeight(list);
      expect(list).toEqual([{ label: "two", weight: 30, next: null }]);
    });

    it("should sort an empty list", () => {
      const list = [];
      linkedList.sortOnWeight(list);
      expect(list).toEqual([]);
    });
  });

  describe("Insert a new element at first position in the list", () => {
    it("should insert the new element at first position", () => {
      linkedList.insertHead(simpleLinkedList, "five", 5);
      expect(simpleLinkedList.head).toEqual({
        label: "five",
        weight: 5,
        next: firstElement,
      });
    });

    it("should change the length of the array", () => {
      const lengthBefore = simpleLinkedList.length;
      linkedList.insertHead(simpleLinkedList, "five", 5);
      expect(simpleLinkedList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Insert a new element at last position in the list", () => {
    it("should insert the new element at last position", () => {
      linkedList.insertTail(simpleLinkedList, "five", 5);
      expect(simpleLinkedList.tail).toEqual({
        label: "five",
        weight: 5,
        next: null,
      });
    });

    it("should change the length of the list", () => {
      const lengthBefore = simpleLinkedList.length;
      linkedList.insertTail(simpleLinkedList, "five", 5);
      expect(simpleLinkedList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Insert a new element at nth position in the list", () => {
    it("should insert the new element at the nth position", () => {
      linkedList.insertNth(simpleLinkedList, "five", 5, 2);
      const insertedElement = simpleLinkedList.head.next;
      expect(insertedElement).toEqual({
        label: "five",
        weight: 5,
        next: secondElement,
      });
    });

    it("should change the length of the list", () => {
      const lengthBefore = simpleLinkedList.length;
      linkedList.insertNth(simpleLinkedList, "five", 5, 3);
      expect(simpleLinkedList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Insert a new element in the list", () => {
    it("should insert the new element in the list", () => {
      linkedList.insert(simpleLinkedList, "five", 5);
      success =
        simpleLinkedList.head ===
          { value: "five", weight: 5, next: firstElement } ||
        simpleLinkedList.tail === { value: "five", weight: 5, next: null };

      expect(success).toEqual(true);
    });

    it("should change the length of the list", () => {
      const lengthBefore = simpleLinkedList.length;
      linkedList.insert(simpleLinkedList, "five", 5);
      expect(simpleLinkedList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Remove all elements from theire weight", () => {
    it("should return the number of removed elements", () => {
      expect(linkedList.removeAll(simpleLinkedList, 23)).toEqual(2);
    });

    it("should return 0 if no element was removed", () => {
      expect(linkedList.removeAll(simpleLinkedList, 99)).toEqual(-1);
    });

    it("should remove elements", () => {
      linkedList.removeAll(simpleLinkedList, 23);
      expect(simpleLinkedList.head).toEqual(secondElement);
      expect(simpleLinkedList.tail).toEqual(fiftElement);
    });

    it("should change the length of the array", () => {
      const lengthBefore = simpleLinkedList.length;
      const nbRemoved = linkedList.removeAll(simpleLinkedList, 23);
      expect(simpleLinkedList.length).toEqual(lengthBefore - nbRemoved);
    });
  });

  describe("Remove the first element", () => {
    it("should return the new list size", () => {
      expect(linkedList.removeHead(simpleLinkedList)).toEqual(5);
    });

    it("should return 0 if the list is empty", () => {
      expect(linkedList.removeHead({ head: null, length: 0 })).toEqual(0);
    });

    it("should remove element", () => {
      linkedList.removeHead(simpleLinkedList);
      expect(simpleLinkedList.head).toEqual(secondElement);
    });

    it("should change the length of the list", () => {
      const lengthBefore = simpleLinkedList.length;
      linkedList.removeHead(simpleLinkedList);
      expect(simpleLinkedList.length).toEqual(lengthBefore - 1);
    });
  });

  describe("Remove the last element", () => {
    it("should return the new list size", () => {
      expect(linkedList.removeTail(simpleLinkedList)).toEqual(5);
    });

    it("should return 0 if the list is empty", () => {
      expect(linkedList.removeTail({ tail: null, length: 0 })).toEqual(0);
    });

    it("should remove element", () => {
      linkedList.removeTail(simpleLinkedList);
      expect(simpleLinkedList.tail).toEqual(fiftElement);
    });

    it("should change the length of the list", () => {
      const lengthBefore = simpleLinkedList.length;
      linkedList.removeTail(simpleLinkedList);
      expect(simpleLinkedList.length).toEqual(lengthBefore - 1);
    });
  });

  describe("Remove the nth element", () => {
    it("should return the new list size", () => {
      expect(linkedList.removeNth(simpleLinkedList), 2).toEqual(5);
    });

    it("should return 0 if the list is empty", () => {
      expect(linkedList.removeNth({ head: null, length: 0 }, 2)).toEqual(0);
    });

    it("should remove element", () => {
      linkedList.removeNth(simpleLinkedList, 2);
      expect(simpleLinkedList.head.next).toEqual(thirdElement);
    });

    it("should change the length of the list", () => {
      const lengthBefore = simpleLinkedList.length;
      linkedList.removeNth(simpleLinkedList);
      expect(simpleLinkedList.length).toEqual(lengthBefore - 1);
    });
  });
});
