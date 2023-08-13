--Create Database - "weekend-to-do-app"

--Table structure

CREATE TABLE "tasks" (
  "id" SERIAL PRIMARY KEY,
  "task" VARCHAR(100) NOT NULL,
  "complete" BOOLEAN DEFAULT false

);

INSERT INTO "tasks" ("task", "complete")
VALUES ('wash dishes', false),
('fold laundry', false),
('vacuum living room', false);