import * as linkedListService from "../challenge/circularLinkedList";

describe("Circular linked list", () => {
  let circularLinkedList = {};
  let firstElement, secondElement, thirdElement, fiftElement, lastElement;

  beforeEach(() => {
    lastElement = {
      value: { label: "one", weight: 23 },
      next: null,
    };

    fiftElement = {
      value: { label: "three", weight: 11 },
      next: null,
    };

    const fourElement = {
      value: { label: "six", weight: 18 },
      next: null,
    };

    thirdElement = {
      value: { label: "four", weight: 30 },
      next: null,
    };

    secondElement = {
      value: { label: "two", weight: 1 },
      next: null,
    };

    firstElement = {
      value: { label: "ten", weight: 23 },
      next: null,
    };

    firstElement.next = secondElement;
    secondElement.next = thirdElement;
    thirdElement.next = fourElement;
    fourElement.next = fiftElement;
    fiftElement.next = lastElement;
    lastElement.next = firstElement;

    circularLinkedList.head = firstElement;
    circularLinkedList.tail = lastElement;
    circularLinkedList.length = 6;
  });

  describe("build circular linked list function", () => {
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

    it("should build a circular list", () => {
      const builtList = linkedListService.buildLinkedList("./data/1K.json");
      expect(builtList.tail.next.value).toEqual({
        weight: 32,
        label: "nine",
      });
    });
  });

  describe("Insert a new element at first position in the list", () => {
    it("should insert the new element at first position", () => {
      linkedListService.insertHead(circularLinkedList, "five", 5);
      const insertedElement = {
        value: { label: "five", weight: 5 },
        next: firstElement,
      };

      expect(circularLinkedList.head).toEqual(insertedElement);
      expect(circularLinkedList.tail.next).toEqual(insertedElement);
    });

    it("should change the length of the array", () => {
      const lengthBefore = circularLinkedList.length;
      linkedListService.insertHead(circularLinkedList, "five", 5);
      expect(circularLinkedList.length).toEqual(lengthBefore + 1);
    });
  });

  describe("Insert a new element at last position in the list", () => {
    it("should insert the new element at last position", () => {
      linkedListService.insertTail(circularLinkedList, "five", 5);
      expect(circularLinkedList.tail).toEqual({
        value: { label: "five", weight: 5 },
        next: circularLinkedList.head,
      });
    });

    it("should change the length of the list", () => {
      const lengthBefore = circularLinkedList.length;
      linkedListService.insertTail(circularLinkedList, "five", 5);
      expect(circularLinkedList.length).toEqual(lengthBefore + 1);
    });
  });
});
