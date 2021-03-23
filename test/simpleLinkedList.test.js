import * as linkedListService from "../challenge/simpleLinkedList";

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
      const builtList = linkedListService.buildLinkedList("./data/1K.json");
      expect(typeof builtList === "object").toBe(true);
    });

    it("should build a new list with length", () => {
      const builtList = linkedListService.buildLinkedList("./data/1K.json");
      expect(builtList.length).toEqual(1000);
    });

    it("should build a new list with well formated element", () => {
      const builtList = linkedListService.buildLinkedList("./data/1K.json");
      expect(builtList.head.value).toEqual({
        weight: 32,
        label: "nine",
      });
    });
  });

  describe("search one from label", () => {
    it("should return an existing element", () => {
      expect(
        linkedListService.searchOneFromLabel(simpleLinkedList, "two")
      ).toEqual(secondElement);
    });

    it("should return null if no element was found", () => {
      expect(
        linkedListService.searchOneFromLabel(simpleLinkedList, "not exist")
      ).toBeNull();
    });
  });

  describe("search nth from weight", () => {
    it("should return an existing element", () => {
      expect(
        linkedListService.searchNthFromWeight(simpleLinkedList, 23, 2)
      ).toEqual(lastElement);
    });

    it("should return null if not enough elements", () => {
      expect(
        linkedListService.searchNthFromWeight(simpleLinkedList, 23, 3)
      ).toBeNull();
    });

    it("should return null if element does not exist", () => {
      expect(
        linkedListService.searchNthFromWeight(simpleLinkedList, 0, 1)
      ).toBeNull();
    });
  });

  describe("search last from weight", () => {
    it("should return the second(last) occurence of weight 23", () => {
      expect(
        linkedListService.searchLastFromWeight(simpleLinkedList, 23)
      ).toEqual(lastElement);
    });

    it("should return the only occurence of weight 1", () => {
      expect(
        linkedListService.searchLastFromWeight(simpleLinkedList, 1)
      ).toEqual(secondElement);
    });

    it("should return null if no element was found", () => {
      expect(
        linkedListService.searchLastFromWeight(simpleLinkedList, 42)
      ).toBeNull();
    });
  });

  describe("search all from weight", () => {
    it("should return all occurences of weight 23", () => {
      expect(
        linkedListService.searchAllFromWeight(simpleLinkedList, 23)
      ).toEqual([firstElement, lastElement]);
    });

    it("should return the only occurence of weight 1", () => {
      expect(
        linkedListService.searchAllFromWeight(simpleLinkedList, 1)
      ).toEqual([secondElement]);
    });

    it("should return an empty array if no element was found", () => {
      expect(
        linkedListService.searchAllFromWeight(simpleLinkedList, 42)
      ).toEqual([]);
    });
  });

  describe("Get the nth element", () => {
    it("should return the existing element", () => {
      expect(linkedListService.searchNthElement(simpleLinkedList, 2)).toEqual(
        secondElement
      );
    });

    it("should return null if no element was found", () => {
      expect(
        linkedListService.searchNthElement(simpleLinkedList, 42)
      ).toBeNull();
    });
  });

  describe("Sort a list based on weight value", () => {
    it("should sort the full list", () => {
      const lastElement = {
        value: { label: "four", weight: 30 },
        next: null,
      };
      const fiftElement = {
        value: { label: "ten", weight: 23 },
        next: lastElement,
      };
      const fourElement = {
        value: { label: "one", weight: 23 },
        next: fiftElement,
      };
      const thirdElement = {
        value: { label: "six", weight: 18 },
        next: fourElement,
      };
      const secondElement = {
        value: { label: "three", weight: 11 },
        next: thirdElement,
      };
      const firstElement = {
        value: { label: "two", weight: 1 },
        next: secondElement,
      };

      const expectedList = {};
      expectedList.head = firstElement;
      expectedList.tail = lastElement;
      expectedList.length = 6;
      linkedListService.sortOnWeight(simpleLinkedList);
      expect(simpleLinkedList).toEqual(expectedList);
    });

    it("should sort a list with one element", () => {
      const list = [{ label: "two", weight: 30, next: null }];
      linkedListService.sortOnWeight(list);
      expect(list).toEqual([
        { value: { label: "two", weight: 30 }, next: null },
      ]);
    });

    it("should sort an empty list", () => {
      const list = [];
      linkedListService.sortOnWeight(list);
      expect(list).toEqual([]);
    });
  });

  describe("Insert a new element at first position in the list", () => {
    it("should insert the new element at first position", () => {
      linkedListService.insertHead(simpleLinkedList, "five", 5);
      expect(simpleLinkedList.head).toEqual({
        value: { label: "five", weight: 5 },
        next: firstElement,
      });
    });

    it("should change the length of the list", () => {
      const lengthBefore = simpleLinkedList.length;
      linkedListService.insertHead(simpleLinkedList, "five", 5);
      expect(simpleLinkedList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Insert a new element at last position in the list", () => {
    it("should insert the new element at last position", () => {
      linkedListService.insertTail(simpleLinkedList, "five", 5);
      expect(simpleLinkedList.tail).toEqual({
        value: { label: "five", weight: 5 },
        next: null,
      });
    });

    it("should change the length of the list", () => {
      const lengthBefore = simpleLinkedList.length;
      linkedListService.insertTail(simpleLinkedList, "five", 5);
      expect(simpleLinkedList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Insert a new element at nth position in the list", () => {
    it("should insert the new element at the nth position", () => {
      linkedListService.insertNth(simpleLinkedList, "five", 5, 2);
      const insertedElement = simpleLinkedList.head.next;
      expect(insertedElement).toEqual({
        value: { label: "five", weight: 5 },
        next: secondElement,
      });
    });

    it("should change the length of the list", () => {
      const lengthBefore = simpleLinkedList.length;
      linkedListService.insertNth(simpleLinkedList, "five", 5, 3);
      expect(simpleLinkedList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Insert a new element in the list", () => {
    it("should insert the new element in the list", () => {
      linkedListService.insert(simpleLinkedList, "five", 5);

      expect(simpleLinkedList.head.equals).toEqual({ value: { label: "five", weight: 5 }, next: firstElement });
    });

    it("should change the length of the list", () => {
      const lengthBefore = simpleLinkedList.length;
      linkedListService.insert(simpleLinkedList, "five", 5);
      expect(simpleLinkedList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Remove all elements from theire weight", () => {
    it("should return the number of removed elements", () => {
      expect(linkedListService.removeAll(simpleLinkedList, 23)).toEqual(2);
    });

    it("should return 0 if no element was removed", () => {
      expect(linkedListService.removeAll(simpleLinkedList, 99)).toEqual(-1);
    });

    it("should remove elements", () => {
      linkedListService.removeAll(simpleLinkedList, 23);
      expect(simpleLinkedList.head).toEqual(secondElement);
      expect(simpleLinkedList.tail).toEqual(fiftElement);
    });

    it("should change the length of the array", () => {
      const lengthBefore = simpleLinkedList.length;
      const nbRemoved = linkedListService.removeAll(simpleLinkedList, 23);
      expect(simpleLinkedList.length).toEqual(lengthBefore - nbRemoved);
    });
  });

  describe("Remove the first element", () => {
    it("should return the new list size", () => {
      expect(linkedListService.removeHead(simpleLinkedList)).toEqual(5);
    });

    it("should return 0 if the list is empty", () => {
      expect(linkedListService.removeHead({ head: null, length: 0 })).toEqual(
        0
      );
    });

    it("should remove element", () => {
      linkedListService.removeHead(simpleLinkedList);
      expect(simpleLinkedList.head).toEqual(secondElement);
    });

    it("should change the length of the list", () => {
      const lengthBefore = simpleLinkedList.length;
      linkedListService.removeHead(simpleLinkedList);
      expect(simpleLinkedList.length).toEqual(lengthBefore - 1);
    });
  });

  describe("Remove the last element", () => {
    it("should return the new list size", () => {
      expect(linkedListService.removeTail(simpleLinkedList)).toEqual(5);
    });

    it("should return 0 if the list is empty", () => {
      expect(linkedListService.removeTail({ tail: null, length: 0 })).toEqual(
        0
      );
    });

    it("should remove element", () => {
      linkedListService.removeTail(simpleLinkedList);
      expect(simpleLinkedList.tail).toEqual(fiftElement);
    });

    it("should change the length of the list", () => {
      const lengthBefore = simpleLinkedList.length;
      linkedListService.removeTail(simpleLinkedList);
      expect(simpleLinkedList.length).toEqual(lengthBefore - 1);
    });
  });

  describe("Remove the nth element", () => {
    it("should return the new list size", () => {
      expect(linkedListService.removeNth(simpleLinkedList), 2).toEqual(5);
    });

    it("should return 0 if the list is empty", () => {
      expect(linkedListService.removeNth({ head: null, length: 0 }, 2)).toEqual(
        0
      );
    });

    it("should remove element", () => {
      linkedListService.removeNth(simpleLinkedList, 2);
      expect(simpleLinkedList.head.next).toEqual(thirdElement);
    });

    it("should change the length of the list", () => {
      const lengthBefore = simpleLinkedList.length;
      linkedListService.removeNth(simpleLinkedList);
      expect(simpleLinkedList.length).toEqual(lengthBefore - 1);
    });
  });
});
