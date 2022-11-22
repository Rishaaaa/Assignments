create table Student(usn varchar(20) primary key,Name varchar(30),address varchar(30),sem varch
ar(10),phoneNo varchar(20));

select * from Student;

insert into Student values('123','Nidhi','Bangalore','3','2335446');


insert into Student values('124','Ara','Chennai','2','2335646');

insert into Student values('127','Sanjana','Hyderabad','2','2335466');

select * from Student;

Select Name,address from Student;


select Name,address,sem from Student where sem='2';


update Student set address='Trichy' where Name='Ara';


select * from Student;


delete from Student where name='Sanjana';


select * from Student;
