create database feedb;
create table student (
    studentID int primary key,
    studentName varchar(255),
    userId int,
    password varchar(255),
    semesterId int,
    batchId int,
    contact varchar(10),
    address varchar(255)
);

create table Admin (
    userId int, 
    password varchar(255)
);

create table Semester (
    semesterId int, 
    startDate date, 
    endDate date
);
create table FeeStructure (
    batchId int,
    tutionFee int,
    hostelFee int
    messFee int,
);
create table Transaction_details (
    studentId int,
    transactionId int primary key,
    semesterId int,
    transactionDate Date,
    paymentMode varchar(25),
    feePaid int,
    scholarship int
);
INSERT INTO student (
        Student_ID,
        Name,
        Password,
        Batch_id,
        Sem_id,
        Contact,
        Address
    )
VALUES (
        1,
        'John Doe',
        'mypassword1',
        101,
        1,
        '9876543210',
        '1234 Elm St, Springfield'
    ),
    (
        2,
        'Jane Smith',
        'mypassword2',
        102,
        1,
        '9876543211',
        '5678 Oak St, Shelbyville'
    ),
    (
        3,
        'Michael Johnson',
        'mypassword3',
        101,
        2,
        '9876543212',
        '9101 Maple St, Capital City'
    ),
    (
        4,
        'Sarah Lee',
        'mypassword4',
        102,
        2,
        '9876543213',
        '2468 Birch St, Shelbyville'
    ),
    (
        5,
        'David Brown',
        'mypassword5',
        101,
        3,
        '9876543214',
        '1357 Cedar St, Capital City'
    );
INSERT INTO Admin (Admin_id, Password)
VALUES (1, 'adminpassword1'),
    (2, 'adminpassword2'),
    (3, 'adminpassword3'),
    (4, 'adminpassword4'),
    (5, 'adminpassword5');
INSERT INTO Semester (Semester_id, Start_date, End_date)
VALUES (1, '2023-01-01', '2023-05-15'),
    (2, '2023-06-01', '2023-10-15'),
    (3, '2024-01-01', '2024-05-15'),
    (4, '2024-06-01', '2024-10-15'),
    (5, '2025-01-01', '2025-05-15');
INSERT INTO FeeStructure (Batch_id, tutionFee, messFee, hostelFee)
VALUES (101, 5000, 2000, 3000),
    (102, 5500, 2500, 3500),
    (103, 6000, 3000, 4000),
    (104, 6500, 3500, 4500),
    (105, 7000, 4000, 5000);
INSERT INTO Transaction_details (
        Transaction_id,
        Student_id,
        Sem_id,
        Date,
        mode,
        Scholarship
    )
VALUES (1, 1, 1, '2023-02-15', 'Online', 1000),
    (2, 2, 1, '2023-02-16', 'Cash', 0),
    (3, 3, 2, '2023-03-01', 'Online', 500),
    (4, 4, 2, '2023-03-02', 'Card', 0),
    (5, 5, 3, '2023-04-01', 'Online', 0);