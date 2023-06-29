export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, "Name");
    this._length = this._validateNumber(length, "Length");
    this._students = this._validateStudents(students, "Students");
  }

  _validateString(value, attribute) {
    if (typeof value !== "string") {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  _validateNumber(value, attribute) {
    if (typeof value !== "number") {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  _validateStudents(students, attribute) {
    if (!Array.isArray(students) || students.some((s) => typeof s !== "string")) {
      throw new TypeError(`${attribute} must be an array of strings`);
    }
    return students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._validateString(newName, "Name");
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this._validateNumber(newLength, "Length");
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this._validateStudent(newStudents, "Students");
  }
}
