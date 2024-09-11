class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `${this.name} - Salário: R$${this.salary}`;
  }
}

class Programmer extends Employee {
  constructor(name, salary, language) {
    super(name, salary);
    this.language = language;
  }

  getDetails() {
    return `${super.getDetails()} - Linguagem: ${this.language}`;
  }
}

class UIUXDeveloper extends Employee {
  constructor(name, salary, tool) {
    super(name, salary);
    this.tool = tool;
  }

  getDetails() {
    return `${super.getDetails()} - Ferramenta de design: ${this.tool}`;
  }
}

class CEO extends Employee {
  constructor(name, salary, company) {
    super(name, salary);
    this.company = company;
  }

  getDetails() {
    return `${super.getDetails()} - CEO da empresa: ${this.company}`;
  }
}

const programmer = new Programmer("Rhuan Pablo", 5000, "Python");
const uiuxDeveloper = new UIUXDeveloper("Louis Monteiro", 4000, "Figma");
const ceo = new CEO("Miles Elenwood", 10000, "Accenture");

function listEmployees(employees) {
  employees.forEach((employee) => {
    console.log(employee.getDetails());
  });
}

const employees = [programmer, uiuxDeveloper, ceo];

listEmployees(employees);
