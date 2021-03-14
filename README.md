# Courses: list
The list course repository


## Data set
You can find data under the **data** directory. It holds different data files with different sizes. You also have sorted arrays here.

---
## Challenge

In this challenge you have to manipulate all list form. You have to **fork** this projet and add your code under a **challenge directory**. When the challenge is finished, you submit your solution through a **pull request** from **your fork to this repository**.

For this challenge all elements must be to the following type:

    { 
        weigth: NUMBER,
        label: STRING
    }

Develop each action (*in italic*) in a dedicated function.

**1. Array**

  *Add a method that takes a file path as a parameter and returns an array.*
  
  - Searching:
	- *search an element from its label*
	- *search the nth element from its weigth*
	- *search the last element from its weight*
	- *search all elements with a specific weight*
    - *get the nth element*

  - Sorting:
    - *Sort an array based on the weight attribute*
    - *Sort an array based on the weight attribute and at weight egual, element must sort on label*

  - Insertion:
    - *insert an element at the first place*
    - *insert an element at the end*
    - *insert an element at the nth place, with the position as a parameter*

  - Deletion:
    - *remove an element from its weigth and label, both pass as a parameter*
    - *remove all element with a specific weight*

**2. Sorted Array**

  *Add a method that takes a file path as a parameter and returns a sorted array. Sorting must be done on the weight attribute*

  Here we are looking for optimization based on the fact that the array is sort.

  - Searching:
	- *search all elements with a specific weight*

  - Sorting:
    - *Sort an array based on the weight attribute*

  - Insertion:
    - *insert an element in the array*

  - Deletion:
    - *remove an element from its weigth and label, both pass as a parameter*
    - *remove all element with a specific weight*

**3. Simple Linked List**

  *Add a method that takes a file path as a parameter and returns a simple linked list.*

  - Searching:
	- *search an element from its label*
	- *search the nth element from its weigth*
	- *search the last element from its weight*
	- *search all elements with a specific weight*
    - *search the nth element*

  - Sorting:
    - *Sort the list based on the weight attribute*

  - Insertion:
    - *insert an element at the first place*
    - *insert an element at the end*
    - *insert an element in the list*
    - *insert an element at the nth place, with the position as a parameter*

  - Deletion:
    - *remove all element with a specific weight*
    - *remove the first element*
    - *remove the last element*
    - *remove the nth element*

  *All the function above must work with a sorted and unsorted linked list*

**4. Double Linked List**

  *Add a method that takes a file path as a parameter and returns a double linked list.*

  - Insertion:
    - *insert an element at the first place*
    - *insert an element at the end*
    - *insert an element at the nth place, with the position as a parameter*

  - Deletion:
    - *remove all element with a specific weight*

**4. Circular Linked List**

  *Add a method that takes a file path as a parameter and returns a circular linked list.*

  - Insertion:
    - *insert an element at the first place*
    - *insert an element at the end*
