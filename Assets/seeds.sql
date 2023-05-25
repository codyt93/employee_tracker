USE manage_db;
INSERT INTO department (name)
VALUES("sporting goods");
       
INSERT INTO role (title, salary, department_id)
VALUES("sales",45.000,1),
("manager",60.000,1);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES("tom","stuward",1,NULL),
   ("linda","rogers",2,1); 