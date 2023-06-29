const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');

class Car {
  constructor(brand, motor, color) {
    this[brandSymbol] = brand;
    this[motorSymbol] = motor;
    this[colorSymbol] = color;
  }

  cloneCar() {
    const { [brandSymbol]: brand, [motorSymbol]: motor, [colorSymbol]: color } = this;
    const constructor = Object.getPrototypeOf(this).constructor;
    return new constructor(brand, motor, color);
  }
}

export default Car;
