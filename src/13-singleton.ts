//Singleton: Garantiza la creacion de una sola instancia de un objeto.

export class MyService {
  static instancia: MyService | null = null;
  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if (!MyService.instancia) {
      console.log('Solo una vez');
      MyService.instancia = new MyService(name);
    }
    return MyService.instancia;
  }
}

const myService2 = MyService.create('service 2');
console.log(myService2.getName());

const myService1 = MyService.create('service 1');
console.log(myService1.getName());

const myService3 = MyService.create('service 3');
console.log(myService3.getName());
console.log(myService1 === myService2);
