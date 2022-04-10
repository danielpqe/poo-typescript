export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
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
}

const myDate = new MyDate(1991, 10, 4);
console.log(myDate.printFormat());
myDate.add(2, 'months');
console.log(myDate.printFormat());
