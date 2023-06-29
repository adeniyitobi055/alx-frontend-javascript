export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const { [brandSymbol]: brand, [motorSymbol]: motor, [colorSymbol]: color } = this;
    return new Car(_brand, _motor, _color);
  }
}
