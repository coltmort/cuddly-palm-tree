# Blogisms

Blogisms is a blog website that allows users to create, edit and view blog posts. This site is built with Node.js, Tailwind CSS, Handlebars and uses Sequelize for its database. The site is deployed on Heroku and implemented by JawsDB on Heroku.

## Features

* Sign up and Login: Users can sign up and login to their accounts.
* View all posts: Users can view all the posts on the website.
* Dashboard: Once logged in, users can view their dashboard where they can add, delete and edit their own posts.
* Comment: Users can comment on posts and edit or delete their comments.
* Authorization: Users that are not logged in can view posts, but if they try to interact with anything else, they will be routed to the login page.

## Tech Stack

### Blogisms is built using the following technologies:

- Node.js: A server-side JavaScript runtime environment.
- Tailwind CSS: A utility-first CSS framework.
- Handlebars: A templating engine.
- Sequelize: A promise-based ORM for Node.js.
- JawsDB on Heroku: A fully managed MySQL database.

### MVC Architecture

Blogisms is built using the Model-View-Controller (MVC) architecture pattern. This pattern separates the application logic into three interconnected components: the model, view and controller.

* Model: The model component represents the data and the business logic of the application. In Blogisms, Sequelize is used as the ORM to interact with the database.
* View: The view component represents the user interface of the application. In Blogisms, Handlebars is used as the templating engine to generate dynamic HTML.
* Controller: The controller component handles the user's input and communicates with the model and view to update the state of the application. In Blogisms, the controllers are responsible for handling the routes and the logic behind user actions.


## Deployment

Blogisms is deployed on Heroku, which is a cloud platform that allows developers to deploy, manage and scale applications. JawsDB on Heroku is used as the database for the application.

## Links

[Blogisms](https://blogisms.herokuapp.com/)

[GitHub](https://github.com/coltmort/cuddly-palm-tree)