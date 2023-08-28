# To Do List



## Description


* Create a front end experience that allows a user to create a Task.
* When the Task is created, it should be stored inside of a database (SQL)
* Whenever a Task is created the front end should refresh to show all tasks that need to be completed.
* Each Task should have an option to 'Complete' or 'Delete'.
* When a Task is complete, its visual representation should change on the front end. For example, the background of the task container could change from gray to green. The complete option should be  'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete.
* Whether or not a Task is complete should also be stored in the database.
* Deleting a Task should remove it both from the front end as well as the Database.

# Installation
1.Create a database named your database name,
2.The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3.Open up your editor of choice and run an npm install
4.Run npm run server in your terminal
5.Run npm run client in your terminal
6.The npm run client command will open up a new browser tab for you!

# Usage

1. Enter any current tasks into your database so they will load onto the page. 
2. Tasks can be marked as complete and the text will change color to show if the task is complete or still open. 
3. Delete tasks that are completed or no longer need to be on the list. 





Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
