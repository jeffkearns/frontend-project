BEGIN;
DROP TABLE IF EXISTS players;

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    first_name varchar(20),
    last_name varchar(20), 
    sport varchar(20), 
    team varchar(20), 
    rating integer 
);

INSERT INTO players (first_name, last_name, sport, team, rating) VALUES 
('Steph', 'Curry', 'basketball', 'Warriors', 95),
('Jerry', 'Rice', 'football', '49ers', 99),
('Mark', 'McGwire', 'baseball', 'Athletics', 89);


COMMIT;