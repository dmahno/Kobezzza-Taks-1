import { bitAccessor } from './bitAccessor';

test('adds 1 + 2 to equal 3', () => {
  expect(bitAccessor(1, 2)).toBe(3);
});
