import inquirer from 'inquirer';
import { query } from './connect.js';

export async function viewDepartments() {
  try {
    const result = await query('SELECT * FROM department');
    console.table(result.rows);
  } catch (err) {
    console.error('Error fetching departments:', err);
  }
}

export async function addDepartment() {
  const answers = await inquirer.prompt([
    { type: 'input', name: 'name', message: 'Department name:' }
  ]);

  try {
    await query(
      'INSERT INTO department (name) VALUES ($1)',
      [answers.name]
    );
    console.log('Department added successfully.');
  } catch (err) {
    console.error('Error adding department:', err);
  }
}