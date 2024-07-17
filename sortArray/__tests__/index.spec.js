const sortArray = require("../index");

test("should sort the array in ascending order", () => {
  expect(sortArray([3, 1, 4, 2])).toEqual([1, 2, 3, 4]);
  expect(sortArray([9, 5, 7, 2])).toEqual([2, 5, 7, 9]);
  expect(sortArray([6, 8, 1, 3])).toEqual([1, 3, 6, 8]);
});

test("should return an empty array if the input array is empty", () => {
  expect(sortArray([])).toEqual([]);
});

test("should return the same array if it is already sorted", () => {
  expect(sortArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  expect(sortArray([5, 6, 7, 8])).toEqual([5, 6, 7, 8]);
  expect(sortArray([9, 10, 11, 12])).toEqual([9, 10, 11, 12]);
});
