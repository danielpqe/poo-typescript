export class MyDate {
  constructor(
    public year: number = 2000,
    private _month: number = 1,
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

  get month() {
    return this._month;
  }

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('Invalid month');
    }
  }
}

const myDate = new MyDate(2024, 10, 4);
// Can not modify
//myDate.day = 5;
console.log(myDate.month);
myDate.month = 13;
console.log(myDate.month);
