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
('M15', '.48', '.83', '.61', true),
('M20', '.99', '1.00', '.84', true);


INSERT INTO oee (machine_number)
VALUES
('M09'),
('M16'),
('M17'),
('M18');

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
('5', '2PM', '.11'),
('6', '8AM', '.89'),
('6', '9AM', '.91'),
('6', '10AM', '.90'),
('6', '11AM', '.82'),
('6', '12PM', '.75'),
('6', '1PM', '.80'),
('6', '2PM', '.83'),
('7', '8AM', '0'),
('7', '9AM', '0'),
('7', '10AM', '0'),
('7', '11AM', '0'),
('7', '12PM', '0'),
('7', '1PM', '0'),
('7', '2PM', '0'),
('8', '8AM', '0'),
('8', '9AM', '0'),
('8', '10AM', '0'),
('8', '11AM', '0'),
('8', '12PM', '0'),
('8', '1PM', '0'),
('8', '2PM', '0'),
('9', '8AM', '0'),
('9', '9AM', '0'),
('9', '10AM', '0'),
('9', '11AM', '0'),
('9', '12PM', '0'),
('9', '1PM', '0'),
('9', '2PM', '0'),
('10', '8AM', '0'),
('10', '9AM', '0'),
('10', '10AM', '0'),
('10', '11AM', '0'),
('10', '12PM', '0'),
('10', '1PM', '0'),
('10', '2PM', '0');