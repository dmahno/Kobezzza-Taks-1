export class BitGetter {
  array: Uint8Array;

  constructor (array: Uint8Array) {
    this.array = array;
  }

  private handlerValidation (byteIndex: number, bitIndex: number, value?: number) {
    if (byteIndex < 0 || byteIndex >= this.array.length) {
      throw new Error('The array index out of range');
    }
    if (bitIndex > 7) {
      throw new Error('The bit index must be the greater or equal to 7');
    }
    if (bitIndex < 0) {
      throw new Error('The bit index must be the greater or equal to 0');
    }
    if (value !== undefined && value !== 1 && value !== 0) {
      throw new Error('Value must be 0 or 1');
    }
  };

  private setBitValue (byteIndex: number, bitIndex: number) {
    this.array[byteIndex] |= (1 << bitIndex);
  };

  private resetBitValue (byteIndex: number, bitIndex: number) {
    this.array[byteIndex] &= ~(1 << bitIndex);
  };

  get (byteIndex: number, bitIndex: number) {
    this.handlerValidation(byteIndex, bitIndex);
    return +(this.array[byteIndex] & (1 << bitIndex)) === 0 ? 0 : 1;
  };

  set (byteIndex: number, bitIndex: number, value?: number) {
    this.handlerValidation(byteIndex, bitIndex, value);
    value === 1 ? this.setBitValue(byteIndex, bitIndex) : this.resetBitValue(byteIndex, bitIndex);
  };
};
