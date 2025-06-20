CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  type_id INT NOT NULL,
  name VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS responses (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS combinations (
  id SERIAL PRIMARY KEY,
  response_id INT REFERENCES responses(id),
  combo JSONB
);


INSERT INTO items (type_id, name) VALUES
  (1, 'A1'), (1, 'A2'),
  (2, 'B1'), (2, 'B2'),
  (3, 'C1');