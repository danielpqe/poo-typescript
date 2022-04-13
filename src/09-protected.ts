export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving as animal');
  }

  greeting() {
    console.log(`Hey!, I'm ${this.name}`);
  }

  protected doSomething() {
    console.log('Algoooo');
  }
}

export class Dog extends Animal {
  //owner: string;
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log(this.name + ' woof!');
    }
    this.doSomething();
  }

  move() {
    console.log('Moving as a Dog');
    super.move();
  }
}

const tico = new Dog('Tico', 'Dan');

tico.move();
tico.greeting();
tico.woof(5);
tico.move();
//tico.doSomething();
