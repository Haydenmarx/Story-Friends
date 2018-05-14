create table USERS (
    ID serial primary key,
    USERNAME varchar NOT NULL,
    BIO varchar
);

create table STORIES (
    ID serial primary key,
    TITLE varchar NOT NULL,
    GENRE varchar NOT NULL
);

create table CHAPTERS (
    ID serial primary key,
    TEXT varchar NOT NULL,
    STORY_ID integer references STORIES,
    USER_ID integer references USERS
);
