import inquirer from 'inquirer';
import { query } from './connect.js';

export async function viewRoles() {
  try {
    const result = await query('SELECT * FROM role');
    console.table(result.rows);
  } catch (err) {
    console.error('Error fetching roles:', err);
  }
}

export async function addRole() {
  const answers = await inquirer.prompt([
    { type: 'input', name: 'title', message: 'Role title:' },
    { type: 'number', name: 'salary', message: 'Salary:' },
    { type: 'number', name: 'department_id', message: 'Department ID:' }
  ]);

  try {
    await query(
      'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)',
      [answers.title, answers.salary, answers.department_id]
    );
    console.log('Role added successfully.');
  } catch (err) {
    console.error('Error adding role:', err);
  }
}