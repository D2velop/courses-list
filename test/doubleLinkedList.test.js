import * as linkedList from "../challenge/doubleLinkedList";

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
      prev: fiftElement,
    };
    fiftElement = {
      value: { label: "three", weight: 11 },
      next: lastElement,
      prev: fourthElement,
    };
    fourthElement = {
      value: { label: "six", weight: 18 },
      next: fiftElement,
      prev: thirdElement,
    };
    thirdElement = {
      value: { label: "four", weight: 30 },
      next: fourthElement,
      prev: secondElement,
    };
    secondElement = {
      value: { label: "two", weight: 1 },
      next: thirdElement,
      prev: firstElement,
    };
    firstElement = {
      value: { label: "ten", weight: 23 },
      next: secondElement,
      prev: null,
    };

    doubleLinkedList.head = firstElement;
    doubleLinkedList.tail = lastElement;
    doubleLinkedList.length = 6;
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

      expect(builtList.head.prev).toEqual(null);
      expect(builtList.head.next.value).toEqual(82);
    });
  });

  describe("Insert a new element at first position in the list", () => {
    it("should insert the new element at first position", () => {
      linkedList.insertHead(doubleLinkedList, "five", 5);
      expect(doubleLinkedList.head).toEqual({
        label: "five",
        weight: 5,
        next: firstElement,
        prev: null,
      });
    });

    it("should change the length of the array", () => {
      const lengthBefore = doubleLinkedList.length;
      linkedList.insertHead(doubleLinkedList, "five", 5);
      expect(doubleLinkedList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Insert a new element at last position in the list", () => {
    it("should insert the new element at last position", () => {
      linkedList.insertTail(doubleLinkedList, "five", 5);
      expect(doubleLinkedList.tail).toEqual({
        label: "five",
        weight: 5,
        prev: lastElement,
        next: null,
      });
    });

    it("should change the length of the list", () => {
      const lengthBefore = doubleLinkedList.length;
      linkedList.insertTail(doubleLinkedList, "five", 5);
      expect(doubleLinkedList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Insert a new element at nth position in the list", () => {
    it("should insert the new element at the nth position", () => {
      linkedList.insertNth(doubleLinkedList, "five", 5, 2);

      const expectedInsertElement = {
        label: "five",
        weight: 5,
        next: secondElement,
        prev: firstElement,
      };
      const insertedElement = doubleLinkedList.head.next;

      expect(insertedElement).toEqual({
        label: "five",
        weight: 5,
        next: secondElement,
        prev: firstElement,
      });
      expect(secondElement.prev).toEqual(expectedInsertElement);
    });

    it("should change the length of the list", () => {
      const lengthBefore = doubleLinkedList.length;
      linkedList.insertNth(doubleLinkedList, "five", 5, 3);
      expect(doubleLinkedList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Remove all elements from theire weight", () => {
    it("should return the number of removed elements", () => {
      expect(linkedList.removeAll(doubleLinkedList, 23)).toEqual(2);
    });

    it("should return 0 if no element was removed", () => {
      expect(linkedList.removeAll(doubleLinkedList, 99)).toEqual(-1);
    });

    it("should remove elements", () => {
      linkedList.removeAll(doubleLinkedList, 23);
      expect(doubleLinkedList.head).toEqual(secondElement);
      expect(doubleLinkedList.tail).toEqual(fiftElement);
    });

    it("should change the length of the array", () => {
      const lengthBefore = doubleLinkedList.length;
      const nbRemoved = linkedList.removeAll(doubleLinkedList, 23);
      expect(doubleLinkedList.length).toEqual(lengthBefore - nbRemoved);
    });
  });
});
