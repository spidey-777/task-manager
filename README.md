# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
live demo https://task-manager-ten-ebon.vercel.app/

Login Functionality
Users can enter a username to "log in".
Username is saved in localStorage (not secure/authenticated, but suitable for mock/demo).
If a user is not logged in, they’re redirected to the login page.

 Dashboard
Displays a list of tasks.
Contains an "Add Task" button that toggles the task creation form (TaskForm).
Shows task filters (All / Completed / Pending) and total task count.

.TaskForm
Form for creating new tasks.
Inputs:
Title
Description
On submission:
Saves task to localStorage using a uuid.
Updates createdAt with a timestamp.
Clears the form and hides it.
Triggers a refresh in the task list using a refresh state.

TaskList
Displays a list of tasks from localStorage.
Filters tasks based on the selected radio input:
All
Completed
Pending
Uses useEffect to re-fetch tasks on refresh.

Displays individual task:
Toggleable description section (accordion-style).
Completion checkbox.
Delete button.
When checkbox is toggled:
Calls toggleTaskCompletion() from localStorage utils.
When delete is clicked:
Calls removeTask() and notifies parent to re-fetch tasks.

 localStorage Utility Functions
 created utility functions in localStorage.js:
addTask(task) – adds a task to storage.
getTask() – fetches tasks.
removeTask(id) – removes a task by ID.
toggleTaskCompletion(id) – toggles the isCompleted flag.




