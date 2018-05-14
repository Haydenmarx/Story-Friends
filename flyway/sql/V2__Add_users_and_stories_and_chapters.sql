INSERT INTO USERS (USERNAME) VALUES ('Hayden');
INSERT INTO USERS (USERNAME) VALUES ('Not Hayden');

INSERT INTO STORIES (TITLE, GENRE) VALUES ('Hayden''s First Story', 'Comedy');
INSERT INTO STORIES (TITLE, GENRE) VALUES ('Hayden''s Second Story', 'Tragedy');
INSERT INTO STORIES (TITLE, GENRE) VALUES ('Not Hayden''s First Story', 'Action');
INSERT INTO STORIES (TITLE, GENRE) VALUES ('Not Hayden''s Second Story', 'Romance');

INSERT INTO CHAPTERS (TEXT, STORY_ID, USER_ID) VALUES ('It was a dark and story night.', 1, 1);
INSERT INTO CHAPTERS (TEXT, STORY_ID, USER_ID) VALUES ('It was the best of times, it was the worst of times.', 2, 1);
INSERT INTO CHAPTERS (TEXT, STORY_ID, USER_ID) VALUES ('Dectective John McClain crawed into an air duct.', 3, 2);
INSERT INTO CHAPTERS (TEXT, STORY_ID, USER_ID) VALUES ('The vampire was shiny.', 4, 2);
