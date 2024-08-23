import inquirer from 'inquirer';
import { viewRoles, addRole } from './src/role.js';
import { viewDepartments, addDepartment } from './src/department.js';
import { viewEmployees, addEmployee, updateEmployeeRole } from './src/employee.js';

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View All Roles',
        'Add a Role',
        'View All Departments',
        'Add a Department',
        'View All Employees',
        'Add an Employee',
        'Update Employee Role',
        'Exit'
      ]
    }
  ]);

  switch (answers.action) {
    case 'View All Roles':
      await viewRoles();
      break;
    case 'Add a Role':
      await addRole();
      break;
    case 'View All Departments':
      await viewDepartments();
      break;
    case 'Add a Department':
      await addDepartment();
      break;
    case 'View All Employees':
      await viewEmployees();
      break;
    case 'Add an Employee':
      await addEmployee();
      break;
    case 'Update Employee Role':
      await updateEmployeeRole();
      break;
    case 'Exit':
      console.log('Exiting application...');
      process.exit();
      break;
    default:
      console.log('Invalid choice');
      process.exit();
  }

  main();
}

main().catch(err => {
  console.error('An error occurred:', err);
  process.exit(1);
});