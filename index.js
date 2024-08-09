#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
console.log(chalk.bold.italic.bgGreenBright("\n *** WELCOME TO THE OBJECT-ORIENTED PROGRAM*** "));
console.log(chalk.bold.bgBlueBright("\n *** ADMINISTRATIVE DETAILS *** "));
// Base class for common properties
class Administrator {
    name;
    employeeId;
    designation;
    salary;
    bonus;
    medicalFacility;
    leaves;
    constructor(name, employeeId, designation, salary, bonus, medicalFacility, leaves) {
        this.name = name;
        this.employeeId = employeeId;
        this.designation = designation;
        this.salary = salary;
        this.bonus = bonus;
        this.medicalFacility = medicalFacility;
        this.leaves = leaves;
    }
    displayInfo() {
        console.log(chalk.blue(`Name: ${this.name}`));
        console.log(chalk.green(`Employee ID: ${this.employeeId}`));
        console.log(chalk.yellow(`Designation: ${this.designation}`));
        console.log(chalk.cyan(`Salary: ${this.salary}`));
        console.log(chalk.magenta(`Bonus: ${this.bonus}`));
        console.log(chalk.red(`Medical Facility: ${this.medicalFacility}`));
        console.log(chalk.gray(`Leaves: ${this.leaves}`));
    }
}
// GM class extending Employee
class GM extends Administrator {
}
class DeputyGeneralManager extends Administrator {
}
class DeputyManager extends Administrator {
}
// Example usage
const gm = new GM('Sir Muhammad Noor', 1001, 'GM', 150000, 10000, 'Comprehensive Health Insurance', 30);
const deputyGeneralManager = new DeputyGeneralManager('Sir Bilawal Khan', 2002, 'Deputy General Manager', 120000, 8000, 'Health Insurance', 25);
const deputyManager = new DeputyManager('Sir Moshin Naqvi', 3003, 'Deputy Manager', 100000, 6000, 'Dental Insurance', 20);
gm.displayInfo();
deputyGeneralManager.displayInfo();
deputyManager.displayInfo();
console.log(chalk.bold.italic.bgYellowBright("\n *** NEW EMPLOYEE DETAILS *** "));
// Function to prompt for new employee details
async function addNewEmployee() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name:",
        },
        {
            type: 'number',
            name: 'employeeId',
            message: "Enter the employee's ID:",
        },
        {
            type: 'input',
            name: 'designation',
            message: "Enter the employee's designation:",
        },
        {
            type: 'number',
            name: 'salary',
            message: "Enter the employee's salary:",
        },
        {
            type: 'number',
            name: 'bonus',
            message: "Enter the employee's bonus:",
        },
        {
            type: 'input',
            name: 'medicalFacility',
            message: "Enter the employee's medical facility:",
        },
        {
            type: 'number',
            name: 'leaves',
            message: "Enter the employee's number of leaves:",
        },
    ]);
    const newEmployee = new Administrator(answers.name, answers.employeeId, answers.designation, answers.salary, answers.bonus, answers.medicalFacility, answers.leaves);
    newEmployee.displayInfo();
    console.log(chalk.bold.italic.bgMagentaBright("\n *** NEW EMPLOYEE SUCCESSFULLY ADDED! *** "));
}
// Add new employee
addNewEmployee();
