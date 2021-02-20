DROP TABLE oee;
DROP TABLE oee_hourly_numbers;

CREATE TABLE oee (
	id SERIAL PRIMARY KEY,
	machine_number VARCHAR NOT NULL,
	availability DEC DEFAULT 0,
	performance DEC DEFAULT 0,
	quality DEC DEFAULT 0,
	running BOOLEAN DEFAULT false
);

CREATE TABLE oee_hourly_numbers (
	id SERIAL PRIMARY KEY,
	machine_id INT REFERENCES oee,
	hourly VARCHAR(4),
	oee_reading DEC
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

INSERT INTO oee_hourly_numbers (machine_id, hourly, oee_reading)
VALUES
('1', '8AM', '.93'),
('1', '9AM', '.94'),
('1', '10AM', '.93'),
('1', '11AM', '.91'),
('1', '12PM', '.90'),
('1', '1PM', '.87'),
('1', '2PM', '.85'),
('2', '8AM', '.88'),
('2', '9AM', '.89'),
('2', '10AM', '.91'),
('2', '11AM', '.90'),
('2', '12PM', '.92'),
('2', '1PM', '.85'),
('2', '2PM', '.80'),
('3', '8AM', '.78'),
('3', '9AM', '.74'),
('3', '10AM', '.70'),
('3', '11AM', '.65'),
('3', '12PM', '.67'),
('3', '1PM', '.71'),
('3', '2PM', '.70'),
('4', '8AM', '.98'),
('4', '9AM', '.96'),
('4', '10AM', '.97'),
('4', '11AM', '.95'),
('4', '12PM', '.98'),
('4', '1PM', '.99'),
('4', '2PM', '.97'),
('5', '8AM', '.78'),
('5', '9AM', '.60'),
('5', '10AM', '.38'),
('5', '11AM', '.27'),
('5', '12PM', '0'),
('5', '1PM', '0'),
('5', '2PM', '.11');
