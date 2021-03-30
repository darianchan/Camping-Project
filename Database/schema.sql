create database campingProject

create table waitlist (
  id SERIAL,
  firstName varchar(50),
  lastName varchar(50),
  email varchar(100),
  phoneNumber varchar(50) not null,
  campSite varchar (50),
  PRIMARY KEY (id)
)

create table confirmed (
  id SERIAL,
  firstName varchar(50),
  lastName varchar(50),
  email varchar(100),
  phoneNumber int not null,
  startDate

)