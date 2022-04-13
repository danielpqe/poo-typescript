import { Animal, Dog } from './09-protected';
// Restringe la creacion de instancias a partir de una clase madre.
// const animal = new Animal('Tico');
// animal.greeting();

const cheis = new Dog('cheis', 'Dan');
cheis.woof(3);
