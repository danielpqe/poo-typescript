export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving');
  }

  greeting() {
    console.log(`Hey!, I'm ${this.name}`);
  }
}

export class Dog extends Animal {
  //owner: string;
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}

const tico = new Dog('Tico', 'Dan');

tico.move();
tico.greeting();
tico.woof(5);
console.log(tico);
