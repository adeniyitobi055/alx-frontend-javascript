export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const constructor = Object.getPrototypeOf(this).constructor;
    const { _brand, _motor, _color } = this;
    return new constructor(_brand, _motor, _color);
  }
}
