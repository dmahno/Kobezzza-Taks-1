// import { BitAccessor } from './BitAccessor/BitAccessor';
import { BitGetter } from './BitGetter/BitGetter';

export const createBitGetter = (unitArray: Uint8Array) => {
  return new BitGetter(unitArray);
};

// export const createBitAccessor = (unitArray: Uint8Array) => {
//   return new BitAccessor(unitArray);
// };
