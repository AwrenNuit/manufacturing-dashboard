DROP TABLE oee;

CREATE TABLE oee (
	id SERIAL PRIMARY KEY,
	machine_number VARCHAR NOT NULL,
	availability DEC DEFAULT 0,
	performance DEC DEFAULT 0,
	quality DEC DEFAULT 0,
	running BOOLEAN DEFAULT false
);

INSERT INTO oee (machine_number, availability, performance, quality, running)
VALUES
('M05', '.86', '.98', '.95', true),
('M08', '.88', '.98', '.90', true),
('M10', '.75', '.92', '.99', true),
('M14', '.98', '1.00', '.97', true),
('M15', '.48', '.83', '.61', true);


INSERT INTO oee (machine_number)
VALUES ('M09');