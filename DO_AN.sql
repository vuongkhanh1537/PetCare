CREATE SCHEMA DA_DB;
USE DA_DB;
-- Create user table
CREATE TABLE employee (
    ID int PRIMARY KEY,
    employeeRole VARCHAR(30) NOT NULL,
    pos VARCHAR(30) NOT NULL,
    Place VARCHAR(30) NOT NULL,
    CCCDdate DATE NOT NULL,
    gender VARCHAR(6) NOT NULL,
    phone_num VARCHAR(10) NOT NULL,
    fname VARCHAR(40) NOT NULL,
    lname VARCHAR(20) NOT NULL,
    Bdate DATE NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Address VARCHAR(50) NOT  NULL,
    username VARCHAR(30) NOT NULL,
    userpassword VARCHAR(30) NOT NULL
);

-- Create customer table
CREATE TABLE customer (
    ID INT PRIMARY KEY,
    phonenum VARCHAR(10) NOT NULL,
    fname VARCHAR(40) NOT NULL,
    lname VARCHAR(20) NOT NULL,
    pos VARCHAR(30) NOT NULL,
    username VARCHAR(30) NOT NULL,
    userpassword VARCHAR(30) NOT NULL
);

CREATE TABLE orders (
    ID INT PRIMARY KEY,
    orderdate DATE NOT NULL,
    ordersStatus VARCHAR(30) NOT NULL,
    ordersType VARCHAR(30) NOT NULL,
    cusID INT NOT NULL,
    FOREIGN KEY(cusID) REFERENCES customer(ID)
);

-- Create sales employee and customer care employee tables
CREATE TABLE seller (
    ID INT UNIQUE,
    employeeTypes VARCHAR(20),
    FOREIGN KEY(ID) REFERENCES employee(ID)
);

CREATE TABLE Vet (
    ID INT UNIQUE,
    employeeTypes VARCHAR(20),
    FOREIGN KEY(ID) REFERENCES employee(ID)
);

-- Create and manage pet records
CREATE TABLE pet (
    ID INT PRIMARY KEY,
    Petname VARCHAR(30) NOT NULL,
    petType VARCHAR(20) NOT NULL,
    petkind VARCHAR(20) NOT NULL,
    gender VARCHAR(6) NOT NULL,
    age INT NOT NULL,
    weight FLOAT NOT NULL,
    cusID INT NOT NULL,
    FOREIGN KEY(cusID) REFERENCES customer(ID)
);

CREATE TABLE patientInfo (
    ID INT,
    STT INT NOT NULL,
    Infotype VARCHAR(30) NOT NULL,
    InfoDate DATE NOT NULL,
    FOREIGN KEY(ID) REFERENCES pet(ID)
);

CREATE TABLE managePatientInfo (
    petID INT,
    STT INT NOT NULL,
    vetID INT,
    FOREIGN KEY(petID) REFERENCES pet(ID),
    FOREIGN KEY(vetID) REFERENCES vet(ID)
);

-- Intermediate product tables
CREATE TABLE cart (
    ID INT PRIMARY KEY,
    cusID INT NOT NULL,
    FOREIGN KEY(cusID) REFERENCES customer(ID)
);

CREATE TABLE product (
    ID INT PRIMARY KEY,
    provider VARCHAR(50) NOT NULL,
    numberOf INT NOT NULL,
    productname VARCHAR(50) NOT NULL,
    descriptions VARCHAR(200) NOT NULL,
    type1 VARCHAR(30) NOT NULL,
    type2 VARCHAR(30) NOT NULL,
	-- PhamLoai VARCHAR(30) NOT NULL,
    cost INT NOT NULL
);

CREATE TABLE service (
    ID INT PRIMARY KEY,
    serviceName VARCHAR(30) NOT NULL,
    finishTime TIME NOT NULL,
    cost INT NOT NULL,
    serviceType varchar(30) NOT NULL,
    descriptions varchar(60) NOT NULL
);

-- Create product order tables
CREATE TABLE cart_product (
    cartID INT NOT NULL,
    productID INT NOT NULL,
    numberOf INT NOT NULL,
    FOREIGN KEY(cartID) REFERENCES cart(ID),
    FOREIGN KEY(productID) REFERENCES product(ID)
);

CREATE TABLE productOrders (
    ID INT PRIMARY KEY,
    sellerID INT NOT NULL,
    FOREIGN KEY(sellerID) REFERENCES seller(ID)
);

CREATE TABLE produc_productOrders (
    productID INT NOT NULL,
    ordersID INT NOT NULL,
    FOREIGN KEY(productID) REFERENCES product(ID),
    FOREIGN KEY(ordersID) REFERENCES productOrders(ID)
);

-- Create service order tables
CREATE TABLE serviceOrders (
    ID INT PRIMARY KEY,
    ordersDate DATE NOT NULL,
    ReturnPetDate DATE NOT NULL,
    PetID INT NOT NULL,
    FOREIGN KEY(PetID) REFERENCES pet(ID)
);

CREATE TABLE service_serviceOrders (
    serviceID INT NOT NULL,
    ordersID INT NOT NULL,
    FOREIGN KEY(serviceID) REFERENCES service(ID),
    FOREIGN KEY(ordersID) REFERENCES serviceOrders(ID)
);

CREATE TABLE cart_service (
    cartID INT NOT NULL,
    serviceID INT NOT NULL,
    FOREIGN KEY(cartID) REFERENCES cart(ID),
    FOREIGN KEY(serviceID) REFERENCES service(ID)
);

CREATE TABLE vet_serviceOrders (
    vetID INT NOT NULL,
    serviceOrdersID INT NOT NULL,
    FOREIGN KEY(vetID) REFERENCES vet(ID),
    FOREIGN KEY(serviceOrdersID) REFERENCES serviceOrders(ID)
);




-- drop schema DA_DB;
