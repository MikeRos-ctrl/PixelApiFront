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

select * from STRIPE_SUBSCRIPTION;
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

SELECT * FROM TOKEN;
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

SELECT * FROM image ORDER BY RAND(656456) LIMIT 4;
select * from  image;
truncate table `image`;
drop table image;

update image set `name`= 'Old Castle Vestiges' where image_id = 'image-85.jpeg';
delete from image where image_id = 'image-21.jpeg';

insert into `image` values('image-1.jpeg','Melancholic swan','Once a lover, now my swan carries its pink hues like a crown of solitude. Perhaps one day, destiny will weave their paths together again under a moonlit sky.');
insert into `image` values('image-2.jpeg','Toxin, Mexican Jaeger','A fiery spirit with a keen eye, ready to outsmart anyone who dares cross their path. Toxin flies not for glory, but for the thrill of proving resilience.');
insert into `image` values('image-3.jpeg','Moon field','Legend whispers of a woman who appears in the moonlit field when hearts are heavy, her presence offering silent solace to the restless.');
insert into `image` values('image-4.jpeg','Sabrina','Not all fairies glitter. Sabrina, an eternal seeker of love, dances through shadows, embracing a life that defies the need for validation or suffering.');
insert into `image` values('image-5.jpeg','Neonidas city','A city that consumes and transforms. Warnings flash in neon pink, but the allure is undeniable—once you belong, you’ll find it hard to leave.');
insert into `image` values('image-6.jpeg','Just a normal Owl','An unassuming presence by day, but at night its gaze holds secrets of the cosmos, far from normal yet hiding in plain sight.');
insert into `image` values('image-7.jpeg','The waste land','Tordania’s barren lands whisper stories of despair and resilience. Not all journeys are watched, and not all scars are meant to heal.');
insert into `image` values('image-8.jpeg','Life of my awesome dad','He once led with his weight, now he leads with his wisdom. From the shadows of self-doubt, he rose to be our chief. Someday, I’ll carve my own path, YouTube or beyond.');
insert into `image` values('image-9.jpeg','Unmagical forest','Magic isn’t found in mythical creatures, but in the courage to confront what lies within. Standing here, I wonder if the forest reflects my own doubts.');
insert into `image` values('image-10.jpeg','Youth fountain','They say eternal youth demands a sacrifice—a heart traded for time. Some call it a curse, others an opportunity. Would you dare drink from it?');
insert into `image` values('image-11.jpeg','Sleeping mountain troll','Silent as the winds that carve the mountain, the troll sleeps. Granny’s stories say it’s always been there, but perhaps silence itself is the mystery.');
insert into `image` values('image-12.jpeg','Parrots','Vivid hues of life, now fading into extinction. Their songs echo as a reminder that beauty requires protection, not just admiration.');
insert into `image` values('image-13.jpeg','Ancient pyramid','Built by hands whose names we’ve forgotten, but whose legacy endures. These stones hum with stories only the stars remember.');
insert into `image` values('image-14.jpeg','Alan the ogre','Alan chose a path of kindness in a world that demanded cruelty. A vegan among ogres, he found joy in forging his own destiny, far from expectations.');
insert into `image` values('image-15.jpeg','Mutant turtle','A creature born of chaos and radiation, waiting for its moment of greatness. Perhaps one day, it will truly embody the name Michelangelo.');
insert into `image` values('image-16.jpeg','Edu, a religious leader','The enigmatic figure of Edu remains shrouded in mystery. Some say he holds the keys to divine wisdom; others whisper caution—curiosity isn’t always rewarded.');
insert into `image` values('image-17.jpeg','Family playing','Laughter fills the air as the family creates memories to outlast time. Their bond is the foundation of a life without shadows or regrets.');
insert into `image` values('image-18.jpeg','Sexy turtle','Captured on a sunlit beach, this turtle’s natural charm turns heads and sparks smiles. Sometimes, the simplest moments are the most captivating.');
insert into `image` values('image-19.jpeg','Kayle','A fleeting infatuation with a game character, yet her presence lingers in the corners of my mind. Perhaps it’s not her, but what she represents, that I miss.');
insert into `image` values('image-20.jpeg','Just Ramero','Years of toil and craft have earned me respect, but it’s the quiet pride in my work that speaks louder. Parents, I hope you see me now and smile.');
insert into `image` values('image-22.jpeg','Legendary phoenix bird','A symbol of rebirth, its fiery feathers promise renewal for those bold enough to believe.');
insert into `image` values('image-24.jpeg','Folkloric dancer','Her movements echo the stories of her ancestors, weaving tradition into a living tapestry.');
insert into `image` values('image-25.jpeg','Big cat','A majestic feline whose gaze challenges you to earn its trust before you dare to rub its belly.');
insert into `image` values('image-26.jpeg','Arabian princess','She dreams of blueprints and bridges, proving even royalty can yearn for more than a crown.');
insert into `image` values('image-27.jpeg','Darking beach','A place where whispers of the ocean carry secrets only the stars can keep.');
insert into `image` values('image-28.jpeg','Fisher man','A life shaped by tides and patience, his strength lies in the simplicity of his toil.');
insert into `image` values('image-29.jpeg','Simple','Its unassuming form masks an ancient mystique; perhaps simplicity hides the extraordinary.');
insert into `image` values('image-31.jpeg','Arabic ballerina','Under shimmering lights, her every step defies gravity, blending heritage and elegance.');
insert into `image` values('image-32.jpeg','Forgotten ruins','These stones remember a king’s reign; now they stand as a monument to fleeting power.');
insert into `image` values('image-33.jpeg','Miracle','Even in desolation, hope finds a way to bloom, whispering resilience to all who listen.');
insert into `image` values('image-34.jpeg','Animal spirit','A spectral guardian of sorrow, it walks silently, leaving profound stillness in its wake.');
insert into `image` values('image-35.jpeg','Mr butt','A mischievous companion of youth, its playful presence etched forever in my memories.');
insert into `image` values('image-36.jpeg','LDS Missionary thought','Each sunrise brought new lessons, a testament to faith and growth across distant lands.');
insert into `image` values('image-37.jpeg','Mighty Lucas statue','Carved from the essence of friendship, a silent tribute to bonds that endure beyond time.');
insert into `image` values('image-38.jpeg','Oasis','A dreamscape of serenity, its still waters mirror the depths of unspoken desires.');
insert into `image` values('image-39.jpeg','Angelical chef','Crafting divine dishes, their heavenly touch turns hunger into gratitude.');
insert into `image` values('image-40.jpeg','Mars Giraffe','Proof that imagination knows no bounds—Elon’s Martian dreams now have a guardian.');
insert into `image` values('image-41.jpeg','Vacation man','A fleeting encounter at the crossroads of journeys—a memory sealed with admiration.');
insert into `image` values('image-42.jpeg','Llama land','A whimsical creation of a dreamy morning, where imagination roams free.');
insert into `image` values('image-43.jpeg','Ask and it is given','A celestial glimpse answering a silent prayer, proof that wonder is never out of reach.');
insert into `image` values('image-44.jpeg','Art class','A childhood vision reimagined, this piece speaks more of freedom than instruction.');
insert into `image` values('image-45.jpeg','Beyond twin mountains','Nestled between peaks, a sanctuary of emotions waiting to embrace wandering souls.');
insert into `image` values('image-46.jpeg','Lemur my pet','A joyful snapshot of friendship shared in the innocence of a sunlit afternoon.');
insert into `image` values('image-47.jpeg','Handsome guitar player','Strumming strings with passion, each note carries a story of love and longing.');
insert into `image` values('image-48.jpeg','Profile pic','An artful self-expression, capturing the essence of identity in simple strokes.');
insert into `image` values('image-49.jpeg','Colorful parrots','Their vibrant feathers mimic the dance of love, uniting in a melody of nature.');
insert into `image` values('image-50.jpeg','Indian golden statue','Radiating wisdom and grandeur, a timeless symbol of devotion and artistry.');
insert into `image` values('image-51.jpeg','Legendary Ninja','An homage to stealth and valor, its legacy continues to inspire battles of the mind.');
insert into `image` values('image-52.jpeg','Wendigo','A chilling presence, it lingers at the edge of myth and terror, daring you to look away.');
insert into `image` values('image-53.jpeg','Legendary turtle','Inspired by the mundane, it transformed into an emblem of quiet perseverance.');
insert into `image` values('image-54.jpeg','Another big cat','A majestic feline whose mere existence stirs awe and a longing for untamed freedom.');
insert into `image` values('image-55.jpeg','Ancient monk monument','Chiseled serenity, it invites introspection and the pursuit of timeless wisdom.');
insert into `image` values('image-56.jpeg','Angelical painting','A bittersweet memory, each stroke capturing a fleeting moment of connection.');
insert into `image` values('image-57.jpeg','Natural noise','Beneath the waves lies a world of echoes and mysteries waiting to be explored.');
insert into `image` values('image-58.jpeg','Pink land','A pastel paradise where dreams of joy and innocence take on tangible form.');
insert into `image` values('image-59.jpeg','Peaceful cat','A master of tranquility, its presence turns any space into a haven of calm.');
insert into `image` values('image-60.jpeg','Golden statue','Glinting in the light, it reminds us that true worth often lies beyond appearances.');
insert into `image` values('image-61.jpeg', 'Alien Creature', 'A mysterious being inspired by a frog, its odd yet fascinating features spark curiosity and wonder.');
insert into `image` values('image-62.jpeg', 'The Minotaur', 'A tormented soul haunted by its own demons, where dark magic is only part of the story behind its tragic madness. Will it ever find freedom?');
insert into `image` values('image-63.jpeg', 'Graveyard Guardian', 'A spectral figure that tirelessly roams graveyards, carrying out an eternal duty shrouded in mystery.');
insert into `image` values('image-64.jpeg', 'Baby Alien', 'While it might look peculiar to us, on its home planet, this little one is considered irresistibly adorable.');
insert into `image` values('image-66.jpeg', 'Majestic, the Elephant', 'A magnificent creature reminiscent of my first African safari, a memory of awe and admiration.');
insert into `image` values('image-67.jpeg', 'Waifu', 'A beautiful and enchanting girl, radiating charm and grace.');
insert into `image` values('image-68.jpeg', 'Victorian Gentleman', 'A sophisticated portrait inspired by my boyfriend, exuding timeless elegance and refinement.');
insert into `image` values('image-72.jpeg', 'Old Giant Lizard', 'A colossal reptile with a thunderous roar that echoes through the ages.');
insert into `image` values('image-73.jpeg', 'Fire Woman', 'A powerful figure engulfed in flames, embodying strength and resilience with a fiery aura.');
insert into `image` values('image-74.jpeg', 'Goth Angel Chef', 'A moody yet intriguing character, skillfully crafting a sandwich while carrying a dark, artistic vibe.');
insert into `image` values('image-75.jpeg', 'Beautiful Cat', 'A serene and majestic feline, its mere presence captures attention and admiration.');
insert into `image` values('image-76.jpeg', 'Alternative Egypt', 'An imaginative portrayal of how Egypt might appear in another universe, filled with wonder and mystique.');
insert into `image` values('image-77.jpeg', 'My Best Friend', 'A heartfelt depiction of an unforgettable Friday night shared with my closest companion.');
insert into `image` values('image-78.jpeg', 'Maybe in 50 Years', 'A vision of love and connection, gazing upon our planet in a moment of cosmic serenity.');
insert into `image` values('image-79.jpeg', 'Hometown Memory', 'A nostalgic painting of my cherished childhood haven, a place I long to revisit.');
insert into `image` values('image-80.jpeg', 'Lavender Dream', 'A whimsical castle that reflects my childhood fantasy, brimming with elegance and magic.');
insert into `image` values('image-81.jpeg', 'I Saw a Shooting Star', 'A vivid childhood memory of a shooting star, tied to a heartfelt wish to one day marry a Korean girlfriend.');
insert into `image` values('image-82.jpeg', 'Wisdom Tree', 'An ancient, mystical tree that teaches patience and imparts wisdom to those who seek its guidance.');
insert into `image` values('image-83.jpeg', 'Last Trip Turtle', 'A delightful and whimsical turtle captured in a unique and charming photograph.');
insert into `image` values('image-84.jpeg', 'Magic Town', 'A mystical town blessed by the moon spirit, flourishing against all odds in the heart of nowhere.');
insert into `image` values('image-85.jpeg', 'Old Castle Vestiges', 'The remains of a once-great kingdom, left in ruins after the death of Peter the Magnificent. Could it have been the hive mind?');
insert into `image` values('image-86.jpeg', 'Beautiful Painting', 'A breathtaking artwork that speaks for itself, inviting viewers to lose themselves in its beauty.');
insert into `image` values('image-87.jpeg', 'Family Wolf', 'A heartfelt illustration symbolizing the unbreakable bond between me and my brother.');
insert into `image` values('image-88.jpeg', 'Lonely Wolf', 'A poignant reminder to cherish family and never let pride drive loved ones apart.');
insert into `image` values('image-89.jpeg', 'Girl Thought', 'A self-reflective piece portraying Wendy, a stunning girl who feels a deep emptiness inside. Can anyone help her?');
insert into `image` values('image-91.jpeg', 'Princess Diana', 'A fierce and regal portrayal of a powerful and captivating woman.');
insert into `image` values('image-92.jpeg', 'Wisdom Tree', 'A mythical tree that reveals secrets with each drop of water. Are you ready to uncover its mysteries?');
insert into `image` values('image-93.jpeg', 'Maggie TWD Portrait', 'A heartfelt tribute to Maggie from The Walking Dead, painted with admiration and care.');
insert into `image` values('image-94.jpeg', 'Painting of a Girl', 'Inspired by a fleeting moment of beauty—captured in the image of a girl I saw at church.');
insert into `image` values('image-95.jpeg', 'Girl on a Lake', 'Another ethereal muse found at church, now immortalized in this serene and tranquil artwork.');
insert into `image` values('image-96.jpeg', 'Mount Zatura', 'A majestic painting of an otherworldly mountain, a dream destination for the soul.');
insert into `image` values('image-98.jpeg', 'Alternative Princess', 'A whimsical reimagining of a princess living in the heart of my hometown.');
insert into `image` values('image-99.jpeg', 'Girly Little Girl', 'A playful depiction of an Instagram model full of youthful charm.');
insert into `image` values('image-101.jpeg', 'Prince Carlos', 'A dignified portrait of Prince Carlos, proudly showcasing his favorite color: blue.');
insert into `image` values('image-102.jpeg', 'Flute Mountain Man', 'A mysterious and captivating figure playing melodies on a mountain, an ode to solitude and music.');
insert into `image` values('image-103.jpeg', 'Tasty Sea Fish', 'A fantastical marine creature, rich in Vitamin C, and absolutely delicious when grilled.');
insert into `image` values('image-104.jpeg', 'Elixir Field', 'Many claim the village elixir exists, but have you ever seen it with your own eyes?');
insert into `image` values('image-105.jpeg', 'Banished Soul City', 'A realm of contrasts—paradise or hell? Discover for yourself, as every wandering soul must.');
insert into `image` values('image-106.jpeg', 'Fluffy Bears', 'These little bears eagerly await their mom, hoping she hasn’t fallen victim to human hunters >.<');
insert into `image` values('image-107.jpeg', 'Fleeting Mountain', 'The only mountain where you can witness shooting stars on your deathbed, caused by vivid hallucinations.');
insert into `image` values('image-108.jpeg', 'Batman Copy', 'I tried replicating a fan art of Batman in a pose I saw in my dream. Haha!');
insert into `image` values('image-109.jpeg', 'Last Friday Night', 'This is what I imagine when listening to that song—and yes, that’s my dog, haha.');
insert into `image` values('image-110.jpeg', 'Wolf at a Campfire', 'A lone wolf waiting patiently by the campfire for its meal.');
insert into `image` values('image-111.jpeg', 'Luck Castle', 'The light at the end of the tunnel doesn’t always lead to paradise. In this castle, kind souls will help you continue your adventure.');
insert into `image` values('image-112.jpeg', 'Triangular Bay', 'So this is what a triangular bay looks like—not round, hehe. :p');
insert into `image` values('image-113.jpeg', 'The Corrupt King', 'A greedy ruler who spends all his gold on unnecessary things. Under his reign, be prepared to pay thousands of bronze coins in taxes.');
insert into `image` values('image-114.jpeg', 'Tao Island', 'You thought the immortals lived on the island? No—it is the island itself! Fear not, for you will be treated kindly here.');
insert into `image` values('image-115.jpeg', 'Reddish Forest', 'A magical forest where it’s always autumn or spring, offering breathtaking views year-round.');
insert into `image` values('image-116.jpeg', 'Unhaunted Castle', 'A peaceful castle inhabited by a friendly dragon, living in harmony.');
insert into `image` values('image-117.jpeg', 'Founded Kitty', 'After a long journey, the little kitten finally found its owner deep in the forest.');
insert into `image` values('image-118.jpeg', 'Fire Empress', 'A tribute to a legendary being who once mastered fire in the depths of the ocean, worshipped by many.');
insert into `image` values('image-119.jpeg', 'Chill Monkey', 'A solitary gorilla waits patiently, hoping for the return of its family.');
insert into `image` values('image-121.jpeg', 'Happy Happy Cat', 'This smiling cat just reunited with its owner, who captured this adorable photo as a keepsake.');
insert into `image` values('image-122.jpeg', 'In a Random Tribe', 'A joyful moment of someone playing with their siblings using a rope.');
insert into `image` values('image-123.jpeg', 'Night at My City', 'This is how my city looks from my window—hahaha.');
insert into `image` values('image-124.jpeg', 'Digital Armour', 'Inspired by Iron Man, I created this futuristic armor design.');
insert into `image` values('image-125.jpeg', 'Pop Granny', 'My grandma shocked me when she started dancing better than me—and even my dog joined in! 😨');
insert into `image` values('image-126.jpeg', 'Light Source', 'This is the origin of all light in the world, as the sun shines directly on the building’s tip.');
insert into `image` values('image-128.jpeg', 'Pixel Town', 'A unique place where cities and people exist in pixel form.');
-- ---------------------------------------------------------------------------------------------------

CREATE TABLE CATEGORY_IMAGE(
	CATEGORY_ID INT NOT NULL,
    IMAGE_ID VARCHAR(255) NOT NULL,
    FOREIGN KEY (CATEGORY_ID) REFERENCES CATEGORY(CATEGORY_ID),
	FOREIGN KEY (IMAGE_ID) REFERENCES IMAGE(IMAGE_ID)
);

SELECT 
IMAGE_ID,
CATEGORY_ID
FROM CATEGORY_IMAGE
WHERE CATEGORY_ID = 2 AND IMAGE_ID NOT IN ('image-104.jpeg')
ORDER BY RAND() LIMIT 4;

SELECT 
CM.IMAGE_ID,
(SELECT `NAME` FROM IMAGE WHERE IMAGE_ID = CM.IMAGE_ID) as IMAGE_NAME,
(SELECT `DESCRIPTION` FROM IMAGE WHERE IMAGE_ID = CM.IMAGE_ID) as IMAGE_DESCRIPTION,
GROUP_CONCAT(`NAME`) AS CATEGORY_NAME
FROM CATEGORY_IMAGE CM
INNER JOIN CATEGORY C
on CM.CATEGORY_ID = C.CATEGORY_ID
GROUP BY IMAGE_ID ORDER BY RAND() LIMIT 1;

SELECT IMAGE_ID, GROUP_CONCAT(CATEGORY_ID) AS CATEGORY_IDS FROM category_image GROUP BY IMAGE_ID ORDER BY RAND() LIMIT 1;
SELECT * FROM category_image where CATEGORY_ID = 1 ORDER BY RAND() LIMIT 4;
SELECT DISTINCT CATEGORY_ID, IMAGE_ID FROM category_image where IMAGE_ID NOT IN ('image-56.jpeg') ORDER BY RAND() LIMIT 4;
SELECT IMAGE_ID, CATEGORY_ID FROM category_image where image_id = 'image-1.jpeg';
TRUNCATE TABLE CATEGORY_IMAGE;
DROP TABLE CATEGORY_IMAGE;
DELETE FROM CATEGORY_IMAGE WHERE IMAGE_ID = 'image-30.jpeg';
-- 1 BUILDING, 
-- 2 FANTASY, 
-- 3 NATURE, 
-- 4 CUTE, 
-- 5 ANIMAL, 
-- 6 CHARACTER
-- 7 LANDSCAPE
-- 8 ALL
-- objects
-- food

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
INSERT INTO CATEGORY_IMAGE VALUES( 5,'image-6.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 2,'image-7.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 7,'image-7.jpeg');
INSERT INTO CATEGORY_IMAGE VALUES( 6,'image-8.jpeg');
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