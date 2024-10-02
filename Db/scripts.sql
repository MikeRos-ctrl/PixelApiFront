create table `role`(
	id int not null primary key auto_increment,
	`name` varchar(255)
);

select * from role;
drop table `roles`;

insert into `role` (`name`) values ('ADMIN');
insert into `role` (`name`) values ('CUSTOMER');
-- -------------------------------------------------------------------------------------------------------------------------------------------
create table `accountType`(
	id int not null primary key auto_increment,
	`name` varchar(255)
);
select * from `accountType`;
drop table `accountType`;

insert into `accountType` (`name`) values ('PREMIUM');
insert into `accountType` (`name`) values ('PREMIUM+');
-- -------------------------------------------------------------------------------------------------------------------------------------------

create table `client` (
	id int not null primary key  auto_increment,
    accountKey varchar(255) not null comment 'this is the password',
	email varchar(255) not null unique,
    `role` int not null,
    `accountType` int,
	foreign key(`role`) references `role` (id),
	foreign key(`accountType`) references `accountType` (id)
);

select id from `client` where email = 'princeMike@outlook.es';
select * from `client`;
truncate `client`;
drop table `client`;

-- -------------------------------------------------------------------------------------------------------------------------------------------
create table tokenaccount(
	token varchar (255) not null,
    `clientId` int not null not null,
    `confirmed` bit default 0,
    `reason` varchar (255) not null comment 'account fonfirmation or forgot pwd',
	foreign key(`clientId`) references `client`(id),
	primary key (`clientId`, token)
);

select * from tokenaccount;
truncate  tokenaccount;
drop table tokenaccount;

select count(*) as total from tokenaccount where `clientId` = 1 and reason = 'ACCOUNT-CONFIRMATION';
select count(*) as total from tokenaccount where `clientId` = 1 and reason = 'FORGOT-PWD' and confirmed = 0;
-- ------------------------------------------------------------------------------------------------------------------------------------------------

create table paypalorder(
	orderId varchar (255) primary key,
    suscriptionId varchar (255) not null,
    `clientId` int not null,
    `plan` varchar (255) not null comment 'premium or premium +',
	foreign key(`clientId`) references `client`(id)
);

select * from paypalorder;
drop table paypalorder;
truncate paypalorder;
-- ------------------------------------------------------------------------------------------------------------------------------------------------

-- animal  building landscape character
select * from  image;

truncate table `image`;
insert into `image` values('castle-1.jpeg','Romanian castle','landscape');
insert into `image` values('castle-2.jpeg','Chad castle','landscape');
insert into `image` values('castle-3.jpeg','King Ezreal castle','landscape');
insert into `image` values('castle-4.jpeg','Vampire castle','landscape');
insert into `image` values('castle-5.jpeg','Town on a hill','landscape');
insert into `image` values('castle-6.jpeg','Drakula castle','landscape');
insert into `image` values('landscape-1.jpeg','Freedom at a sight','landscape');
insert into `image` values('landscape-2.jpeg','Narnia','landscape');
insert into `image` values('tree-1.jpeg','Enjoy nature','landscape');
insert into `image` values('tree-2.jpeg','Big tree','landscape');
insert into `image` values('flower-1.jpeg','Miracle in a desert','landscape');
insert into `image` values('flower-2.jpeg','Sunflower','landscape');
insert into `image` values('village-1.jpeg','Mean ol´ moon','landscape');
insert into `image` values('village-2.jpeg','Moon city','landscape');
insert into `image` values('city-1.jpeg','Moon city','landscape');
insert into `image` values('city-2.jpeg','Bubble lights city','landscape');
insert into `image` values('city-3.jpeg','Miami','landscape');
insert into `image` values('city-4.jpeg','Lake city','landscape');
insert into `image` values('city-5.jpeg','City in mars','landscape');

insert into `image` values('cat-1.jpeg','Happy cat in a forest','animal');
insert into `image` values('cat-2.jpeg','Trebol the cat','animal');
insert into `image` values('bird-1.jpeg','Bird of hope','animal');
insert into `image` values('bird-2.jpeg','Eagle existing','animal');
insert into `image` values('cat-3.jpeg','Cat chilling','animal');
insert into `image` values('cat-4.jpeg','Cute white cat','animal');
insert into `image` values('cat-5.jpeg','Miss you Mitzo','animal');
insert into `image` values('cat-6.jpeg','Mighty Zeus','animal');
insert into `image` values('cat-7.jpeg','My garden','animal');
insert into `image` values('dog-1.jpeg','Justin the dog','animal');
insert into `image` values('dog-2.jpeg','Cookie','animal');
insert into `image` values('giraffe-1.jpeg','Day in a zoo','animal');
insert into `image` values('turtle-1.jpeg','Magic turtle','animal');
insert into `image` values('turtle-2.jpeg','Happy turtle','animal');
insert into `image` values('turtle-3.jpeg','Mia the turtle','animal');
insert into `image` values('wolf-1.jpeg','Wolf family','animal');
insert into `image` values('wolf-2.jpeg','Lonely wolf','animal');
insert into `image` values('wolf-3.jpeg','Winter wolf','animal');


insert into `image` values('man-1.jpeg','Chilling Mike','character');
insert into `image` values('man-10.jpeg','Clasic gentleman','character');
insert into `image` values('man-2.jpeg','Ricardo the chad','character');
insert into `image` values('man-3.jpeg','King Rosales','character');
insert into `image` values('man-4.jpeg','Prince Carlos in a beach','character');
insert into `image` values('man-5.jpeg','Handsome king','character');
insert into `image` values('man-6.jpeg','Royalty man','character');
insert into `image` values('man-7.jpeg','Emerald king','character');
insert into `image` values('man-8.jpeg','Rupert the knight','character');
insert into `image` values('man-9.jpeg','King phoenix','character');
insert into `image` values('woman-1.jpeg','Portrait of a Julie','character');
insert into `image` values('woman-10.jpeg','Cute girl','character');
insert into `image` values('woman-11.jpeg','Mia in a river','character');
insert into `image` values('woman-12.jpeg','Generic bolde girl','character');
insert into `image` values('woman-13.jpeg','Prom girl','character');
insert into `image` values('woman-2.jpeg','The only exeption','character');
insert into `image` values('woman-3.jpeg','My girl on a trip','character');
insert into `image` values('woman-4.jpeg','Princess Diana','character');
insert into `image` values('woman-5.jpeg','Twd maggie','character');
insert into `image` values('woman-6.jpeg','Brandy a fine girl','character');
insert into `image` values('woman-7.jpeg','My last dream','character');
insert into `image` values('woman-8.jpeg','Queen Yadira','character');
insert into `image` values('woman-9.jpeg','Princess Carol','character');


-- other category, likje objetcs, a guitar, and so on