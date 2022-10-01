INSERT INTO department (name)
VALUES ("Inventory", "Marketing", "Finance", "Sales", "Management");

INSERT INTO role (title, salary, department_id)
VALUES  ("Inventory Manager", 32221, 1),("Inventory Technician", 33063, 1), ("Marketing Director", 93775, 2), ("Brand Strategist", 60292, 2),("Data Analyst", 50569, 2), ("Visual Desginer", 40008, 2), ("PR Manager", 48553, 2), ("Accountant", 29851, 3), ("Finance Controls", 64469, 3), ("Payroll", 32500, 3), ("Sales Adminstrator", 21000, 4),("Customer Success Rep", 27347, 4), ("Sales Associate", 24594, 4), ("Sales Manager", 44946, 5), ("Assistant Store Manager", 26555, 5), ("Store Manager", 31112, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES   ("Mike", "Smith", 3, 1), 
         ("Amanda", "Johnson", 4, 2), 
         ("Bob", "Peterson", 1, 5),
         ("Alex", "Brown", 5, NULL),
         ("Christian", "Dior", 2, 5),
         ("Lee", "Junior", 5, NULL),
         ("Tom", "Hanks", 4, 3), 
         ("Sarah", "Smith", 4, 3),
         ("Louis", "Allen", 5, 5);

