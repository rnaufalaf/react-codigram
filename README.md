# react-codigram

A social media designed for users to share articles and thoughts related to the Programming World. The app is powered with React with help of Bootstrap to make the overall layout and components in the front-end side, and Node.js with Express.js to build the server-side of the project, also utilizing Sequelize ORM and PostgreSQL to build the database environment. This project also utilizes Redux for maintaining state throughout the app.

This is the ERD representation of the project

![Brand Item (3)](https://user-images.githubusercontent.com/61466456/169881009-5e2536e9-bd11-4254-91d9-04828ddb4c80.png)

URL for Routing

| No  | Route URL                         | Description                |
| --- | ----------------------------------| ---------------------------|
| 1   | localhost:3001/login              | Display Login Page         |
| 2   | localhost:3001/register           | Display Register Page      |
| 3   | localhost:3001/home/*             | Contains inner route       |
| 4   | localhost:3001/home/account       | Display Account Page       |
| 5   | localhost:3001/home/search/:query | Display Searched Post Page |
| 6   | localhost:3001/home/editUser      | Display Edit User Page     |
| 7   | localhost:3001/home/editPost/:id  | Display Edit Post Page     |
| 8   | localhost:3001/home/myPosts       | Display My Posts Page      |
| 9   | localhost:3001/home/details/:id   | Display Post Details Page  |

API Documentation

| No  | HTTP Method | Endpoint URL                     | Description                |
| --- | ----------- | -------------------------------- | ---------------------------|
| 1   | GET         | localhost:3000/                  | Route root                 |
| 2   | POST        | localhost:3000/users/register    | Register User              |
| 3   | POST        | localhost:3000/users/login       | Login User                 |
| 4   | GET         | localhost:3000/users/details     | Get User Details           |
| 5   | GET         | localhost:3000/users/            | Get Users                  |
| 6   | PUT         | localhost:3000/users/edit        | Edit User                  |
| 7   | GET         | localhost:3000/posts/details/:id | Get Post Details by Post ID|
| 8   | GET         | localhost:3000/posts/            | Get Posts                  |
| 9   | GET         | localhost:3000/posts/userPosts/  | Get User Posts             |
| 10  | POST        | localhost:3000/posts/add         | Add Post                   |
| 11  | PUT         | localhost:3000/posts/edit/:id    | Edit Post by Post ID       |
| 12  | DELETE      | localhost:3000/posts/delete/:id  | Delete Post by Post ID     |
