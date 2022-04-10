const date = new Date();
console.log(date);

const date2 = new Date(1991, 9, 4);
console.log(date2);

class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

export const myDate = new MyDate(2022, 4, 9);
console.log(myDate);
