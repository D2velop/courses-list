import * as linkedListService from "../challenge/doubleLinkedList";

describe("Double linked list", () => {
  let doubleLinkedList = {};
  let firstElement,
    secondElement,
    thirdElement,
    fourthElement,
    fiftElement,
    lastElement;

  beforeEach(() => {
    lastElement = {
      value: { label: "one", weight: 23 },
      next: null,
      prev: null,
    };
    fiftElement = {
      value: { label: "three", weight: 11 },
      next: null,
      prev: null,
    };
    fourthElement = {
      value: { label: "six", weight: 18 },
      next: null,
      prev: null,
    };
    thirdElement = {
      value: { label: "four", weight: 30 },
      next: null,
      prev: null,
    };
    secondElement = {
      value: { label: "two", weight: 1 },
      next: null,
      prev: null,
    };
    firstElement = {
      value: { label: "ten", weight: 23 },
      next: null,
      prev: null,
    };

    firstElement.prev = null;
    firstElement.next = secondElement;
    secondElement.prev = firstElement;
    secondElement.next = thirdElement;
    thirdElement.prev = secondElement;
    thirdElement.next = fourthElement;
    fourthElement.prev = thirdElement;
    fourthElement.next = fiftElement;
    fiftElement.prev = fourthElement;
    fiftElement.next = lastElement;
    lastElement.prev = fiftElement;
    lastElement.next = null;

    doubleLinkedList.head = firstElement;
    doubleLinkedList.tail = lastElement;
    doubleLinkedList.length = 6;
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

      expect(builtList.head.prev).toEqual(null);
      expect(builtList.head.next.value).toEqual({label: "six", weight: 82});
    });
  });

  describe("Insert a new element at first position in the list", () => {
    it("should insert the new element at first position", () => {
      linkedListService.insertHead(doubleLinkedList, "five", 5);
      expect(doubleLinkedList.head).toEqual({
        value: { label: "five", weight: 5 },
        next: firstElement,
        prev: null,
      });
    });

    it("should change the length of the array", () => {
      const lengthBefore = doubleLinkedList.length;
      linkedListService.insertHead(doubleLinkedList, "five", 5);
      expect(doubleLinkedList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Insert a new element at last position in the list", () => {
    it("should insert the new element at last position", () => {
      linkedListService.insertTail(doubleLinkedList, "five", 5);
      expect(doubleLinkedList.tail).toEqual({
        value: { label: "five", weight: 5 },
        prev: lastElement,
        next: null,
      });
    });

    it("should change the length of the list", () => {
      const lengthBefore = doubleLinkedList.length;
      linkedListService.insertTail(doubleLinkedList, "five", 5);
      expect(doubleLinkedList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Insert a new element at nth position in the list", () => {
    it("should insert the new element at the nth position", () => {
      linkedListService.insertNth(doubleLinkedList, "five", 5, 2);

      const expectedInsertElement = {
        value: { label: "five", weight: 5 },
        next: secondElement,
        prev: firstElement,
      };
      const insertedElement = doubleLinkedList.head.next;

      expect(insertedElement).toEqual({
        value: { label: "five", weight: 5 },
        next: secondElement,
        prev: firstElement,
      });
      expect(secondElement.prev).toEqual(expectedInsertElement);
    });

    it("should change the length of the list", () => {
      const lengthBefore = doubleLinkedList.length;
      linkedListService.insertNth(doubleLinkedList, "five", 5, 3);
      expect(doubleLinkedList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Remove all elements from theire weight", () => {
    it("should return the number of removed elements", () => {
      expect(linkedListService.removeAll(doubleLinkedList, 23)).toEqual(2);
    });

    it("should return 0 if no element was removed", () => {
      expect(linkedListService.removeAll(doubleLinkedList, 99)).toEqual(-1);
    });

    it("should remove elements", () => {
      linkedListService.removeAll(doubleLinkedList, 23);
      expect(doubleLinkedList.head).toEqual(secondElement);
      expect(doubleLinkedList.tail).toEqual(fiftElement);
    });

    it("should change the length of the array", () => {
      const lengthBefore = doubleLinkedList.length;
      const nbRemoved = linkedListService.removeAll(doubleLinkedList, 23);
      expect(doubleLinkedList.length).toEqual(lengthBefore - nbRemoved);
    });
  });
});
