/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { BitGetter } from './BitGetter';

const createBitGetter = (unitArray: Uint8Array) => {
  return new BitGetter(unitArray);
};

const bit = createBitGetter(new Uint8Array([0b1110, 0b1101]));

describe('BitGetter functions', () => {
  test('Recieve a bit value', () => {
    expect(bit.get(0, 1)).toBe(1);
    expect(bit.get(0, 0)).toBe(0);
    expect(bit.get(1, 1)).toBe(0);
  });
  test('Throw error when access out of range', () => {
    expect(() => bit.get(2, 1)).toThrow('The array index out of range');
    expect(() => bit.get(0, 8)).toThrow('The bit index must be the greater or equal to 7');
  });
});
