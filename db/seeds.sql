-- insert of company departments --
INSERT INTO department (name) 
VALUES ('Engineering'),
       ('Marketing'),
       ('Sales'),
       ('Accounting/Finance'),
       ('Human Resources');

-- employee roles --
INSERT INTO role (title, salary, department_id) 
VALUES ('Engineer', 150000, 1),
       ('Advertisement Specialist', 70000, 2),
       ('Sales Manager', 100000, 3),
       ('Sales Representative', 75000, 3),
       ('Accountant I', 65000, 4),
       ('Finance Assistant', 55000, 4),
       ('HR Generalist', 62000, 5);

-- sample employee names --
INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES ('Kenny', 'Smith', 1, NULL),
       ('Christina', 'Williams', 2, 1),
       ('Luke', 'Johnson', 3, NULL),
       ('Mark', 'Lewis', 4, 1),
       ('Crystal', 'Tyson', 4, 1),
       ('Nicholas', 'Ingram', 4, 2),
       ('Emily', 'Rouse', 5, NULL);

