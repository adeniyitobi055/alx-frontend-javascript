class Teacher {
  private firstName: string;
  private lastName: string;
  private fullTimeEmployee: boolean;
  private yearsOfExperience?: number;
  private location: string;
  private additionalAttributes: { [key: string]: any };

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    this.additionalAttributes = {};
  }

  public setYearsOfExperience(yearsOfExperience: number): void {
    this.yearsOfExperience = yearsOfExperience;
  }

  public addAttribute(name: string, value: any): void {
    this.additionalAttributes[name] = value;
  }

  public getAttribute(name: string): any {
    return this.additionalAttributes[name];
  }
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return `${firstInitial}. ${formattedLastName}`;
}
