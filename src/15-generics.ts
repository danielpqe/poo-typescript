// function getValue(value: number | string) {
//   return value;
// }

// function getValue(value: unknow) {
//   return value;
// }

import { Dog } from './09-protected';

function getValue<MyType>(value: MyType) {
  return value;
}

getValue(12).toFixed(2);
getValue<string>('12').length;
getValue([]).forEach((item) => item);

const dog = new Dog('tico', 'dan');
getValue<Dog>(dog).greeting;
