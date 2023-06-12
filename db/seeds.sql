-- insert of sample departments --
INSERT INTO department (name) 
VALUES  ('Engineering'),
        ('Marketing'),
        ('Sales'),
        ('Accounting/Finance'),
        ('Human Resources');
-- sample roles --
INSERT INTO role (title, salary, department_id) 
VALUES  ('Engineer', 50000, 1),
        ('Advertisement Specialist', 70000, 2),
        ('Salesperson', 20000, 3),
        ('Sales Representative', 25000, 3)
        ('Accountant I', 60000, 4),
        ('Finance Assistant', 65000, 4)
        ('HR Generalist', 35000, 5);
-- sample employee names --
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES  ('Kenny', 'Smith', 1, NULL),
        ('Christina', 'Williams', 2, 1),
        ('Luke', 'Johnson', 3, 2),
        ('Mark', 'Lewis', 4, 3),
        ('Crystal', 'Tyson', 5, 4),
        ('Nicholas', 'Ingram', 6, 5)
        ('Emily', 'Rouse', 7, 5);