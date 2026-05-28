CREATE DATABASE IF NOT EXISTS cardapio_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE cardapio_db;

CREATE TABLE IF NOT EXISTS foods (
  id      BIGINT       NOT NULL AUTO_INCREMENT,
  title   VARCHAR(255) NOT NULL,
  image   VARCHAR(500) NOT NULL,
  price   INT          NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO foods (title, image, price) VALUES
  ('X-Burguer',        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', 2990),
  ('Pizza Margherita', 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400', 3990),
  ('Coca-Cola 350ml',  'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400', 699),
  ('Batata Frita',     'https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=400', 1490),
  ('Acai 500ml',       'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400', 1990);
