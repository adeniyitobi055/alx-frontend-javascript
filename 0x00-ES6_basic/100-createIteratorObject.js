export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  function* employeeIterator() {
    for (const employees of departments) {
      for (const employee of employees) {
        yield employee;
      }
    }
  }

  return employeeIterator();
}
