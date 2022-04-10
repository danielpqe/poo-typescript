export class MyDate {
  constructor(
    public year: number = 2000,
    public month: number = 1,
    private day: number = 1
  ) {}

  printFormat(): string {
    const day = this.addPadding(this.day);
    return `${day}/${this.month}/${this.year}`;
  }

  add(ammount: number, type: 'days' | 'months' | 'years'): void {
    if (type === 'days') {
      this.day += ammount;
    }
    if (type == 'months') {
      this.month += ammount;
    }
    if (type == 'years') {
      this.year += ammount;
    }
  }

  private addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  public getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1991, 10, 4);
console.log(myDate.getDay());
console.log(myDate.printFormat());

const myDate2 = new MyDate(2022);
console.log(myDate2);

//console.log(myDate.day);
