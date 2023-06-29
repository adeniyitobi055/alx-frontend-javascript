export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._verifyString(name);
    this._length = this._verifyNumber(length);
    this._students = this._verifyArray(students);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._verifyString(newName);
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this._verifyNumber(newLength);
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this._verifyArray(newStudents);
  }

  _verifyString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Value must be a string');
    }
    return value;
  }

  _verifyNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Value must be a number');
    }
    return value;
  }

  _verifyArray(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Value must be an array');
    }
    return value;
  }
}
