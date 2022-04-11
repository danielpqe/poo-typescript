class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    let max = numbers[0];
    numbers.forEach((number) => {
      if (number > max) {
        max = number;
      }
    });
    return max;
  }
}

// const math = new MyMath();
// math.PI;

console.log(MyMath.PI);
console.log(MyMath.max(-1, -8, -9));
//MyMath.PI=2
