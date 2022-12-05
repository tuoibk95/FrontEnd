# FrontEnd

 create table Employee (
	id int identity(1,1) primary key,
	name nvarchar(50),
	age int,
	status bit,
	createdAt Date
  )

create table COMPANY (
	id int identity(1,1) primary key,
	companyName nvarchar(50)
)
