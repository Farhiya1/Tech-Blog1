# Tech-Blog1

Model-View-Controller (MVC): Tech Blog

# Why did I build this project?

To build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```
md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

WHEN I click on the homepage option
THEN I am taken to the homepage

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

WHEN I choose to sign up
THEN I am prompted to create a username and password

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation
THEN I am signed out of the site

WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

# To access this project the following links are provided:

To access Github Repository

1. https://github.com/Farhiya1/Tech-Blog1.git

To access Application via Heroku

2. https://dashboard.heroku.com/apps/immense-mesa-63124

# Screenshot of application)

1. Screenshot displaying Homepage with posts

![Screenshot of completed application](./images/Screenshot1-HomePage.png)

2. Screenshot displaying users dashboard

![Screenshot of completed application](./images/Screenshot2-Dashboard.png)

![Screenshot of completed application])

3. Screenshot displaying comments

![Screenshot of completed application](./images/Screenshot3-Comments.png)

4.  Screenshot displaying user input in mysql database

![Screenshot of completed application](./images/Screenshot4-DatabaseMysql.png)

# References

1. https://www.npmjs.com
2. https://www.w3schools.com/nodejs/nodejs_filesystem.asp
3. https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/
4. https://www.npmjs.com/package/mysql2
5. https://www.npmjs.com/package/sequelize
6. https://www.npmjs.com/package/dotenv
7. https://www.w3schools.com/js/js_api_fetch.asp
8. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
9. https://handlebarsjs.com/guide/partials.html#partial-parameters
10. https://www.tabnine.com/code/javascript/functions/bcrypt-nodejs/compareSync
11. https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API
12. http://expressjs.com/en/resources/middleware/session.html
13. https://handlebarsjs.com/guide/
