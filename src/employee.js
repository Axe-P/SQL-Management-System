import inquirer from 'inquirer';
import { query } from './connect.js';

export async function viewEmployees() {
  try {
    const result = await query('SELECT * FROM employee');
    console.table(result.rows);
  } catch (err) {
    console.error('Error fetching employees:', err);
  }
}

export async function addEmployee() {
  const roles = await query('SELECT id, title FROM role');
  const managers = await query('SELECT id, first_name, last_name FROM employee');

  const answers = await inquirer.prompt([
    { type: 'input', name: 'first_name', message: 'First name:' },
    { type: 'input', name: 'last_name', message: 'Last name:' },
    { type: 'list', name: 'role_id', message: 'Role:', choices: roles.rows.map(role => ({ name: role.title, value: role.id })) },
    { type: 'list', name: 'manager_id', message: 'Manager (optional):', choices: [{ name: 'None', value: null }, ...managers.rows.map(manager => ({ name: `${manager.first_name} ${manager.last_name}`, value: manager.id }))] }
  ]);

  try {
    await query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
      [answers.first_name, answers.last_name, answers.role_id, answers.manager_id]
    );
    console.log('Employee added successfully.');
  } catch (err) {
    console.error('Error adding employee:', err);
  }
}

export async function updateEmployeeRole() {
  const employees = await query('SELECT id, first_name, last_name FROM employee');
  const roles = await query('SELECT id, title FROM role');

  const answers = await inquirer.prompt([
    { type: 'list', name: 'employee_id', message: 'Select employee:', choices: employees.rows.map(employee => ({ name: `${employee.first_name} ${employee.last_name}`, value: employee.id })) },
    { type: 'list', name: 'role_id', message: 'Select new role:', choices: roles.rows.map(role => ({ name: role.title, value: role.id })) }
  ]);

  try {
    await query(
      'UPDATE employee SET role_id = $1 WHERE id = $2',
      [answers.role_id, answers.employee_id]
    );
    console.log('Employee role updated successfully.');
  } catch (err) {
    console.error('Error updating employee role:', err);
  }
}