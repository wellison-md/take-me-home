CREATE DATABASE IF NOT EXISTS `tmh-db`;
USE `tmh-db`;

ALTER DATABASE `tmh-db`
CHARACTER SET utf8;

CREATE TABLE IF NOT EXISTS users (
	id VARCHAR(36) PRIMARY KEY NOT NULL,
  fname VARCHAR(36) NOT NULL,
  lname VARCHAR(36) NOT NULL,
  email VARCHAR(255) NOT NULL,
  pswd VARCHAR(255) NOT NULL
) ENGINE=INNODB;

INSERT INTO users (id, fname, lname, email, pswd) VALUES
('a4e54a24-9ebe-11ee-b889-0242ac170002', 'Erick', 'Forman', 'erick.forman@email.com', 'b7fb0394c7183fd5cac17fb41961c826212a185070e4c1d2f4920e51c1dee35f'),
('b3c07a80-9ebe-11ee-b889-0242ac170002', 'Donna', 'Pincioty', 'donna.pincioty@email.com', 'b7fb0394c7183fd5cac17fb41961c826212a185070e4c1d2f4920e51c1dee35f'),
('c93d788e-9ebe-11ee-b889-0242ac170002', 'James', 'Ney', 'jamesney@email.com', 'b7fb0394c7183fd5cac17fb41961c826212a185070e4c1d2f4920e51c1dee35f'),
(uuid(), 'Will', 'Smith', 'willsmith@email.com', 'b7fb0394c7183fd5cac17fb41961c826212a185070e4c1d2f4920e51c1dee35f');

CREATE TABLE IF NOT EXISTS cities (
	id INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL
) ENGINE=INNODB;

INSERT INTO cities (`name`) VALUES
('Águas Claras'),
('Asa Norte'),
('Asa Sul'),
('Núcleo Bandeirante'),
('Taguatinga'),
('Ceilândia'),
('Guará'),
('Vicente Pires'),
('Sudoeste');

CREATE TABLE IF NOT EXISTS categories (
	id INT AUTO_INCREMENT PRIMARY KEY,
  category VARCHAR(50) NOT NULL
) ENGINE=INNODB;

INSERT INTO categories (category) VALUES
('Dogs'),
('Felines'),
('Wild'),
('Birds'),
('Fishes');

CREATE TABLE IF NOT EXISTS ads (
	id VARCHAR(36) PRIMARY KEY NOT NULL UNIQUE,
  pet_name VARCHAR(50) NOT NULL,
  rescue_date TIMESTAMP NOT NULL,
  age DECIMAL(2,1),
  age_unit ENUM('month', 'year') DEFAULT 'year',
  gender ENUM('male', 'female') DEFAULT 'male',  category_id INT,

  FOREIGN KEY (category_id) REFERENCES categories(id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,

  city_id INT,
  FOREIGN KEY (city_id) REFERENCES cities(id)
		ON UPDATE CASCADE
    ON DELETE CASCADE,

	is_active BOOLEAN DEFAULT TRUE,
	create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  update_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=INNODB;

INSERT INTO ads (id, pet_name, rescue_date, age, age_unit, category_id, city_id) VALUES
('b14bfce5-9ea9-11ee-b889-0242ac170002', 'Alfred', '2023-01-15 16:11:43', 1, 'year', 2, 6),
('d757f580-9ea9-11ee-b889-0242ac170002', 'Batman', '2023-12-19 20:08:34', 2, 'year', 1, 5),
('f60b5996-9ea9-11ee-b889-0242ac170002', 'Fisher', '2023-11-17 12:24:30', 6, 'month', 5, 1),
('0121b49e-9eaa-11ee-b889-0242ac170002', 'Larinha', '2023-04-22 14:55:59', 3, 'year', 4, 2),
('0dcc6c49-9eaa-11ee-b889-0242ac170002', 'Mr Speedy', '2023-01-15 19:12:11', 6, 'year', 1, 3),
('ffa21018-9eaa-11ee-b889-0242ac170002', 'Cookie', '2023-08-02 02:03:23', 2.3, 'year', 1, 4),
('1aae3f2f-9eab-11ee-b889-0242ac170002', 'Galileu', '2023-12-10 16:27:34', 8, 'month', 1, 2),
('2147456c-9eab-11ee-b889-0242ac170002', 'Sombra', '2023-10-06 06:45:12', 1.3, 'year', 2, 7),
('2927d744-9eab-11ee-b889-0242ac170002', 'Salsicha', '2023-03-11', 1.4, 'year', 1, 8),
('346ef983-9eab-11ee-b889-0242ac170002', 'Miranha Parker', '2023-01-15 17:32:11', 1, 'year', 3, 9);

CREATE TABLE IF NOT EXISTS images (
	id INT AUTO_INCREMENT PRIMARY KEY,
  img_url VARCHAR(255) NOT NULL,
  ad_id VARCHAR(36),

  FOREIGN KEY (ad_id) REFERENCES ads(id)
	  ON UPDATE CASCADE
    ON DELETE CASCADE
) ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS donations (
	id INT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(36),
  amount DECIMAL(6,2) DEFAULT 5.00,
  donation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (user_id) REFERENCES users(id)
		ON UPDATE CASCADE
    ON DELETE CASCADE
) ENGINE=INNODB;

INSERT INTO donations (user_id, amount) VALUES
('a4e54a24-9ebe-11ee-b889-0242ac170002', 15.23),
('b3c07a80-9ebe-11ee-b889-0242ac170002', 52.80),
('b3c07a80-9ebe-11ee-b889-0242ac170002', 10.00),
('c93d788e-9ebe-11ee-b889-0242ac170002', 25.25),
('a4e54a24-9ebe-11ee-b889-0242ac170002', 20.00),
('b3c07a80-9ebe-11ee-b889-0242ac170002', 10.00);

