export class MyDate {
  constructor(
    public year: number = 2000,
    public month: number = 1,
    private _day: number = 1
  ) {}

  // _day means private property, read-only property

  printFormat(): string {
    return `${this._day}/${this.month}/${this.year}`;
  }

  get day() {
    // code to evaluate
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(2024, 10, 4);
// Can not modify
//myDate.day = 5;
console.log(myDate.day);
console.log(myDate.isLeapYear);
