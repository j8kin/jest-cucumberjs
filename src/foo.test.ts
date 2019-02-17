//import { Before, Given, Then, When } from 'cucumber';
import { sum } from './foo';

/*
Given("sum with zero parameters", () => {
	expect(sum()).toBe(0);
});
*/

test('basic', () => {
  expect(sum()).toBe(0);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});