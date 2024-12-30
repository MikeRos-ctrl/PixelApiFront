create table `ROLE`(
	ROLE_ID int not null primary key auto_increment,
	NAME varchar(255)
);

select * from role;
drop table `role`;

insert into `ROLE` (`NAME`) values ('ADMIN');
insert into `ROLE` (`NAME`) values ('CUSTOMER');
-- -------------------------------------------------------------------------------------------------------------------------------------------
create table `PLAN_TYPE`(
	PLAN_TYPE_ID int not null primary key auto_increment,
	`NAME` varchar(255)
);
select * from `ACCT_TYPE`;
drop table `PLAN_TYPE`;

insert into `ACCT_TYPE` (`name`) values ('PREMIUM');
insert into `ACCT_TYPE` (`name`) values ('PREMIUM+');
-- -------------------------------------------------------------------------------------------------------------------------------------------

create table `CLIENT` (
	CLIENT_ID int not null primary key auto_increment,
    ACCT_KEY varchar(255) comment 'this is the password',
	EMAIL varchar(255) not null unique,
    `ROLE` int not null,
	foreign key(`role`) references `ROLE` (ROLE_ID)
);

select * from `client`;
select id from `client` where email = 'princeMike@outlook.es';
truncate `client`;
drop table `client`;

-- -------------------------------------------------------------------------------------------------------------------------------------------

create table STRIPE_SUBSCRIPTION(
	STRIPE_SUBSCRIPTION_ID varchar (255) primary key,
    `CLIENT` int not null,
    `PLAN_TYPE`int not null comment 'PREMIUM|PREMIUM+',
	START_DAY timestamp default now(),
    `ACTIVE` bit,    
    ACTIVE_MONTHS int,
    foreign key(`CLIENT`) references `CLIENT`(CLIENT_ID),
	foreign key(`PLAN_TYPE`) references `PLAN_TYPE`(PLAN_TYPE_ID)
);

select * from paypalorder;
drop table STRIPE_SUBSCRIPTION;
truncate paypalorder;
-- ------------------------------------------------------------------------------------------------------------------------------------------------

create table TOKEN(
	TOKEN_ID varchar (255) primary key,
	CLIENT int not null not null,
    CREATION timestamp default now(),
	EXPIRATION_DATE timestamp,
    REASON varchar (255) not null comment 'ACCT_CONFIRMATION|RECOVER_PWD|USE_APP',
    ACTIVE bit,
	foreign key(`CLIENT`) references `CLIENT`(CLIENT_ID)
);

drop table TOKEN;

select count(*) as total from tokenaccount where `clientId` = 1 and reason = 'ACCOUNT-CONFIRMATION';
select count(*) as total from tokenaccount where `clientId` = 1 and reason = 'FORGOT-PWD' and confirmed = 0;
-- ------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE CATEGORY(
    CATEGORY_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(255) NOT NULL   
); -- BUILDING, FANTASY, NATURE, CUTE, ANIMAL, FANTASY, CHARACTER  -- other category, likje objetcs, a guitar, and so on
SELECT * FROM CATEGORY;

INSERT INTO CATEGORY (NAME) VALUES('Building');
INSERT INTO CATEGORY (NAME) VALUES('Fantasy');
INSERT INTO CATEGORY (NAME) VALUES('Nature');
INSERT INTO CATEGORY (NAME) VALUES('Cute');
INSERT INTO CATEGORY (NAME) VALUES('Animal');
INSERT INTO CATEGORY (NAME) VALUES('Character');
INSERT INTO CATEGORY (NAME) VALUES('Landscape');
-- ------------------------------------------------------------------------------------
CREATE TABLE IMAGE(
	IMAGE_ID VARCHAR(255) NOT NULL PRIMARY KEY,
	NAME VARCHAR(255) NOT NULL,
	DESCRIPTION VARCHAR(255) NOT NULL
);

select * from  image;
truncate table `image`;
drop table image;

update image set `name`= 'Handsome guitar player' where image_id = 'image-47.jpeg';
delete from image where image_id = 'image-97.jpeg';
-- ANIMAL
insert into `image` values('image-1.jpeg','Melancholic swan','Once a lover, now my magic swan has to carry its own pink color, hopefully someday will meet her lover again...');
insert into `image` values('image-2.jpeg','Toxin, Mexican Jaeger','Ready to beat some arrogant devs');
insert into `image` values('image-3.jpeg','Moon field','It is been said that a woman appears each time you feel trapped by this image');
insert into `image` values('image-4.jpeg','Sabrina','Not all fairies are like tinkerbell, Sabrina never felt loved, a life without love is not suffering, perhaps it is just life...');
insert into `image` values('image-5.jpeg','Neonidas city','Once you get there you become part of it, eventually you start to like it, some warning are given in pinker colors though');
insert into `image` values('image-6.jpeg','Just a normal Owl','Nothing magnificent about it...');
insert into `image` values('image-7.jpeg','The waste land','Not all nations are perfect, Tordania has its own failures, feel free to delve a bit more, you will not be followed...');
insert into `image` values('image-8.jpeg','Life of my awesome dad','He was fat, but given its own time morphed in our tribe chief, actually someday I expect to create my own path, I wanted to be a youtuber');
insert into `image` values('image-9.jpeg','Unmagical forest','Magic does not involve "mythical creatures", perhaps it lies within you, crazy because I am standing here in that forest, maybe i am wrong');
insert into `image` values('image-10.jpeg','Youth fountain','Not gonna say it, but once you drink it you shall give up who you love the most, soul for soul');
insert into `image` values('image-11.jpeg','Sleeping mountain troll','Be quiet, nobody knows why or when, my granny told me that when younger it was still there, anyway, be quiet');
insert into `image` values('image-12.jpeg','Parrots','Beautiful specimens, sadly are in danger of extinction');
insert into `image` values('image-13.jpeg','Ancient pyramid','Built by them, you already know who am I referring to...');
insert into `image` values('image-14.jpeg','Alan the ogre','Never really liked to eat humans, he is vegan, at certain point he decided to be himself rather to follow its family path, happiness was chosen');
insert into `image` values('image-15.jpeg','Mutant turtle','Maybe after some more radiation his name will be Michael Angelo');
insert into `image` values('image-16.jpeg','Edu, a religious leader','Last reporter to write something about him was disappeared, so I should not say a thing...');
insert into `image` values('image-17.jpeg','Family playing','Children will grow up without daddy issues');
insert into `image` values('image-18.jpeg','Sexy turtle','Picture taken on a random beach');
insert into `image` values('image-19.jpeg','Kayle','Had a little crush on a game character, please do not ask me about it...');
insert into `image` values('image-20.jpeg','Just Ramero','Took ages but I am a well respected craftmaker, hopefully my parents are proud');
insert into `image` values('image-21.jpeg','Princess Telissa','This is how I picture her in my mind, I asked her out but received no answer, any advice?');
insert into `image` values('image-22.jpeg','Legendary phoenix bird','Feel lucky, you have seen it, this is the signal you were waiting for');
insert into `image` values('image-24.jpeg','Folkloric dancer','Scenarium or not, all she wanted to do was dance...');
insert into `image` values('image-25.jpeg','Big cat','Want to rub his belly');
insert into `image` values('image-26.jpeg','Arabian prcincess','Secretly she wanted to be an engineer, being a princess is so dull');
insert into `image` values('image-27.jpeg','Darking beach','Wish I could go there before my death...');
insert into `image` values('image-28.jpeg','Fisher man','Just a hardworking man');
insert into `image` values('image-29.jpeg','Simple','Believe it or not, that animal is a nahual...');
insert into `image` values('image-30.jpeg','My prom date','She is hot');
insert into `image` values('image-31.jpeg','Arabic ballerina','Dazzling Lights, chill colors, all she ever wanted to do was dance');
insert into `image` values('image-32.jpeg','Forgotten ruins','Once King Peter ruled that world, sadly he may never come back');
insert into `image` values('image-33.jpeg','Miracle','Even in the hardest places hope is still available');
insert into `image` values('image-34.jpeg','Animal spirit','Wanders only in saddest forests, once you see it any pray will not help, surrender to it');
insert into `image` values('image-35.jpeg','Mr butt','Vivid image of my happiest partner of my childhood');
insert into `image` values('image-36.jpeg','LDS Missionary thought','I am from Canada, I served my mission in Mexico, this is a representation of all my mormings, I hope you find it interesting');
insert into `image` values('image-37.jpeg','Mighty Lucas statue','Inspired in my best friend from chilhood, really miss you buddy');
insert into `image` values('image-38.jpeg','Oasis','I just though about my dream backyard, nothing more');
insert into `image` values('image-39.jpeg','Angelical chef','Even god has to eat');
insert into `image` values('image-40.jpeg','Mars Giraffe','Elon musk wanted to find life on mars an he did...');
insert into `image` values('image-41.jpeg','Vacation man','Met hin on an airpot, actually he was hot, was an IT Dev from Berlin');
insert into `image` values('image-42.jpeg','No name','Woke up and I thought about it. ');
insert into `image` values('image-43.jpeg','Ask and it is given','I asked a heaven picture and I got it');
insert into `image` values('image-44.jpeg','Art class','I was asked to draw an animal, and I thought about this painting, that is all');
insert into `image` values('image-45.jpeg','Beyond twin mountains','Peace, joy, cold wheather, and so more feelings');
insert into `image` values('image-46.jpeg','Lemur my pet','Just a happy day in a park');
insert into `image` values('image-47.jpeg','Handsome guitar player','Ngl, I love musicians');
insert into `image` values('image-48.jpeg','Profile pic','My art homework');
insert into `image` values('image-49.jpeg','Colorful parrots','They are a couple, why cannot we be one?');
insert into `image` values('image-50.jpeg','Indian golden statue','That is how I picture it on my mind');
insert into `image` values('image-51.jpeg','Legendary Ninja','Inspired by my best character in LOL');
insert into `image` values('image-52.jpeg','Wendigo','You see it, you die');
insert into `image` values('image-53.jpeg','Legendary turtle','Inspired by my normal turtle');
insert into `image` values('image-54.jpeg','Another big cat','I wish I had him as a pet, I am not afraid of big cats');
insert into `image` values('image-55.jpeg','Ancient monk monument','Think like a monk');
insert into `image` values('image-56.jpeg','Angelical painting','A couple played me for this painting');
insert into `image` values('image-57.jpeg','Natural noise','Wonder what kind of fishes may I found?');
insert into `image` values('image-58.jpeg','Pink land','Each girls paradise');
insert into `image` values('image-59.jpeg','Peaceful cat','Peaceful cat on a couch');
insert into `image` values('image-60.jpeg','Golden statue','Not all that glitters is gold...');
insert into `image` values('image-61.jpeg','Alien creatue','Inspired by a frog');
insert into `image` values('image-62.jpeg','The Minotaur','Haunted by its own demons, dark magic is not the main reason of his madness, perhaps someday will he be free');
insert into `image` values('image-63.jpeg','Graveyard guardian','Spooky or not it wanders each graveyard doing an endless job, wanna find out?');
insert into `image` values('image-64.jpeg','Baby Alien','Looks ugly, but in his planet he is a cute little boy');
insert into `image` values('image-65.jpeg','Indigenous woman','Just how it is...');
insert into `image` values('image-66.jpeg','Majestic, the Elephant','reminds me of my first African Safari tour, that was where we met');
insert into `image` values('image-67.jpeg','Waifu','Beautiful girl');
insert into `image` values('image-68.jpeg','Victorian gentleman ','Inspired by my boyfriend');
insert into `image` values('image-72.jpeg','Old gigant lizard','Roarrrr');
insert into `image` values('image-73.jpeg','Fire woman','This girl is on fire');
insert into `image` values('image-74.jpeg','Goth angel chef','She is mad, but anyway I asked her to make me a sandwich');
insert into `image` values('image-75.jpeg','Beautiful cat','Watch it how it exists');
insert into `image` values('image-76.jpeg','Alternative egypt','In another universe this is how Egypt looks like');
insert into `image` values('image-77.jpeg','My best friend','Best friday night ever, me and my best friend');
insert into `image` values('image-78.jpeg','Maybe in 50 years','Imagine falling in love watching our beloved planet, should I take her out?');
insert into `image` values('image-79.jpeg','Home town memory','I am 35, I have not been in my town in ages, I still dream about my childhood favorite place, I did my best effort to picture it and show you all');
insert into `image` values('image-80.jpeg','Lavander dream','As a girl i ever wanted was a castle like this one');
insert into `image` values('image-81.jpeg','I saw a shooting star','This is a memory from my childhood, my wish was to marry a korean gf xd');
insert into `image` values('image-82.jpeg','Wisdom tree','Best teacher ever, (patience) it said...');
insert into `image` values('image-83.jpeg','Turtle I found in my last trip','I thought it was a cut photo');
insert into `image` values('image-84.jpeg','Magic town','Blessed by the moon spirit, this town managed to thrive in the middle of nowhere');
insert into `image` values('image-85.jpeg','Vestiges of an old castle','After The death of Peter The magnific this kingdom fell, wonder why? Hive mind...');
insert into `image` values('image-86.jpeg','Beautiful painting','I have nothing to say...');
insert into `image` values('image-87.jpeg','Family wolf','Inspired by me and my brother');
insert into `image` values('image-88.jpeg','Lonely wolf','Please, do not be that guy..., never let your pride to let your family go');
insert into `image` values('image-89.jpeg','Girl thought','Hello my name is wendy, even though I look beautiful I feel empty, can you help me please?');
insert into `image` values('image-91.jpeg','Princess Diana','Hot powerful woman');
insert into `image` values('image-92.jpeg','Wisdom tree','Each time you water it reveals a secret, wanna try it?');
insert into `image` values('image-93.jpeg','Maggie Twd portrait','I just wanted to paint her');
insert into `image` values('image-94.jpeg','Painting of a girl','Inpired by a girl I saw at church');
insert into `image` values('image-95.jpeg','Girl on a lake','Inspired by another girl I saw at church');
insert into `image` values('image-96.jpeg','Mount Zatura','Beautiful painting, I really wish I could go someday, I would love to try new airs');
insert into `image` values('image-98.jpeg','My version of prince peach','I just imagine her in my hometown');
insert into `image` values('image-99.jpeg','Girly little girl','Ig model according to her...');
insert into `image` values('image-100.jpeg','Sorry, but I have just arrived','I was told not to expect nothing from this city, never had I thought to be amazed by its beauty');
insert into `image` values('image-101.jpeg','Prince Carlos','Portrait of prince Carlos, as you can see, his favorite color is blue');
insert into `image` values('image-102.jpeg','Flute mountain man','Nothing to add, just enjoy it');
insert into `image` values('image-103.jpeg','pescao de mar sabroso','Es un monstruo marino, rico en vitamina c y sabe muy bueno, más si está frito a la parrilla.');
insert into `image` values('image-104.jpeg','Campo del elixir','Muchos afirman que el elixir de la villa existe pero...alguna vez lo haz visto?');
insert into `image` values('image-105.jpeg','Banished soul city','Paraíso o infierno?...descúbrelo por ti mismo, de todas formas eres un alma en pena.');
insert into `image` values('image-106.jpeg','tres ositos bien esponjositos','Estos ositos están ansiosos esperando a su mamá, esperando que no haya sido cazada por los humanos >.<');
insert into `image` values('image-107.jpeg','Monte fugaz','La única montaña donde se puede ver las estrellas fugaces en tu lecho de muerte causada por alucinaciones.');
insert into `image` values('image-108.jpeg','copia de Batman','Quería replicar un fan art de Batman en una pose que ví en mi sueño haha.');
insert into `image` values('image-109.jpeg','vibes de dancing Queen','Me imagino esto cuando escucho esa canción, y ese es mi perro xd');
insert into `image` values('image-110.jpeg','Lobo en una fogata','Lobo sobre una fogata mientras espera su comida');
insert into `image` values('image-111.jpeg','Castillo de la suerte','La luz al final del túnel no necesariamente tiene que ser un paraíso, en este castillo son muy amables y te ayudarán para seguir con tu aventura');
insert into `image` values('image-112.jpeg','bahia triangular','Así es una había triangular, no redonda :p');
insert into `image` values('image-113.jpeg','El rey corrupto','Este es un corrupto que gasta todo su oro en cosas innecesarias, si estás bajo su mandato prepárate para pagar Miles de monedas de bronce');
insert into `image` values('image-114.jpeg','Tao Island','Creías que los seres inmortales estaban en la isla?, pues es la isla, no temas puesto que te tratarán muy bien');
insert into `image` values('image-115.jpeg','bosque rojizo','En este bosque siempre es otoño o primavera, y siempre es muy bonito a la vista.');
insert into `image` values('image-116.jpeg','castillo no embrujado','Es un castillo donde vive un dragón bastante amigable y pacíficamente');
insert into `image` values('image-117.jpeg','gatito encontrado','El gatito por fin, después de un largo viaje encontró a su dueño en el bosque');
insert into `image` values('image-118.jpeg','La emperatriz del fuego','La figura representa lo que muchos alaban, en una época existio un ser que era capaz de dominar el fuego en las profundidades del agua.');
insert into `image` values('image-119.jpeg','chango solitario','Un gorilla solitario, espero que su familia llegue pronto...');
insert into `image` values('image-121.jpeg','gatito happy happy','Este gatito está sonriendo ya que hace poco se reencontró con su dueño y este le sacó una linda fotito de recuerdo ');
insert into `image` values('image-122.jpeg','alguna tribu por ahí','Alguien jugando con sus hermanos con la cuerda');
insert into `image` values('image-123.jpeg','la noche en mi ciudad','Así se ve la cuidad desde mi ventana hahahah.');
insert into `image` values('image-124.jpeg','no iron man ultra super mega','Me inspire en iron man para hacer este diseño');
insert into `image` values('image-125.jpeg','pop grandms','Mi abuela me sorprendió cuando se puso a bailar mejor que yo y mi perro la siguió 😨');
insert into `image` values('image-126.jpeg','fuente de luz','De aquí proviene toda la luz del mundo ya que el sol da directamente en la punta del edificio.');
insert into `image` values('image-128.jpeg','cuidadela pixelada','En un lugar más donde existen las ciudades y personas con forma de pixel.');
-- ---------------------------------------------------------------------------------------------------

CREATE TABLE CATEGORY_IMAGE(
	CATEGORY_ID INT NOT NULL,
    IMAGE_ID VARCHAR(255) NOT NULL
);

-- 1 BUILDING, 
-- 2 FANTASY, 
-- 3 NATURE, 
-- 4 CUTE, 
-- 5 ANIMAL, 
-- 6 CHARACTER
-- 7 LANDSCAPE
-- objects
-- food

SELECT * FROM category_image;
TRUNCATE TABLE CATEGORY_IMAGE;
DROP TABLE CATEGORY_IMAGE;

INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-1.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-1.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-1.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-2.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-2.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-3.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-4.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-4.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-4.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 1,'image-5.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-5.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-5.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-6.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-7.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-7.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-8.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-8.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-9.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-10.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-10.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-11.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-11.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-12.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-12.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-13.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-13.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-14.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-14.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-14.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-15.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-16.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-16.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-17.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-17.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-17.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-18.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-19.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-19.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-20.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-21.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-22.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-22.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-24.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-25.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-26.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-26.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-27.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-27.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-28.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-28.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-28.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-29.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-29.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-30.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-31.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-31.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 1,'image-32.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-32.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-32.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-33.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-34.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-34.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-35.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-35.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-36.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-36.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-37.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-38.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-39.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-39.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-39.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-40.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-40.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-41.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-41.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-42.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-42.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-42.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-43.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-43.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-44.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-44.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-45.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-45.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-46.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-46.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-47.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-48.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-48.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-49.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-49.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-50.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-51.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-51.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-52.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-52.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-53.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-53.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-54.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-54.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-54.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-55.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-56.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 1,'image-56.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-57.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-57.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-58.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-58.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-59.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-59.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-60.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-61.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-61.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-62.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-62.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-63.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-63.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-64.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-64.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-65.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-65.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-66.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-66.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-67.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-67.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-68.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-72.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-72.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-73.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-74.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-74.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-75.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-75.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-75.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-76.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-76.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-77.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-77.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-77.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 1,'image-78.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-78.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-79.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-80.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-80.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-81.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-81.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-82.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-83.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-84.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-84.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-85.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 1,'image-85.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-86.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-87.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-87.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-88.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-88.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-89.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-91.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-92.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-93.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-94.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-95.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-96.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-96.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-98.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-99.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-100.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 1,'image-100.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-100.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-101.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-102.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-102.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-102.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-103.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-103.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-104.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-104.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-104.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-105.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 1,'image-105.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-106.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-106.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-107.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-107.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-108.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-108.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-109.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-109.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-109.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-110.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 1,'image-111.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-112.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-112.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-113.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-114.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-114.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-115.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 1,'image-116.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-116.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-117.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-117.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-117.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-118.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-118.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-119.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-119.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-119.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 3,'image-121.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 4,'image-121.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-121.jpeg');