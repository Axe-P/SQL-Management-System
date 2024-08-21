-- Insert departments
INSERT INTO department (name) VALUES ('Financial');
INSERT INTO department (name) VALUES ('Development');
INSERT INTO department (name) VALUES ('Retail');
INSERT INTO department (name) VALUES ('Management');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES ('Accountant', 75000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Engineer', 90000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Representative', 55000, 3);
INSERT INTO role (title, salary, department_id) VALUES ('CEO', 65000, 4);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Blu', 'Haws', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jack', 'Johnson', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Joseph', 'Davis', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Walter', 'White', 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Zak', 'Haws', 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Felica', 'Uribe', 3, 3);