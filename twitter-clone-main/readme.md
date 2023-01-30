Software Requirements Document

Introduction
This document provides an overview of the system architecture and system requirements for a Twitter clone application. The application will be built using the MERN web stack. The application will be deployed on a cloud platform such as Heroku (if possible) or Vercel.

System Architecture

Web Stack:

- React: The front-end of the application will be built using React, a JavaScript library for building user interfaces. React allows for the creation of reusable UI components and efficient updates to the user interface.
- Redux: The state of the application will be managed using Redux, a JavaScript library that allows for predictable and organized management of the application state.
- Node.js: The server-side logic for the application will be built using Node.js, a JavaScript runtime that allows for the execution of JavaScript on the server side.
- MongoDB: The application's data will be stored in a MongoDB database, a popular NoSQL database that stores data in a JSON-like format.

Deployment:

The application will be deployed on a cloud platform such as Heroku or Vercel. This allows for easy scalability and ensures that the application is accessible from anywhere with an internet connection.

Styling:

Tailwind CSS: The application will be styled using Tailwind CSS, a utility-first CSS framework that provides a set of pre-defined CSS classes that can be used to quickly and easily apply styles to the application. Tailwind CSS allows for consistent styling throughout the application and is easy to learn and use.

System Requirements

Functionality:

- User authentication: Users will be able to sign up and log in to the application using their email and password.
- Creating tweets: Users will be able to create tweets and post them to their profile.
- Following and unfollowing: Users will be able to follow and unfollow other users.
- Viewing other user's tweets: Users will be able to view the tweets of the users they follow, but will not be able to edit tweets that are not their own
- Profile: Users will have a profile page where they can view their tweets, followers, and the users they follow.
- Admin functionality: Users will be the admin of their own profile, with the ability to update their profile picture and post their own tweets. They will not have access to make changes on profiles other than their own. 

User Stories:

- As a user, I want to be able to sign up and log in to the application so that I can access the features of the application.
- As a user, I want to be able to create tweets and post them to my profile so that I can share my thoughts and ideas with others.
- As a user, I want to be able to follow and unfollow other users so that I can see the tweets that are most relevant to me.
Non-Functional Requirements:

Security: The application will use JWT tokens and cookies for user authentication and will be built with security best practices in mind.
Usability: The application will have a simple and easy-to-use interface.

Comparison with existing software:

There are already many Twitter clones available. My goal is to make this application very simple and easy to use. 

Conclusion
This software requirements document provides an overview of the system architecture and system requirements for a Twitter clone application. The application will be built using a MERN web stack and will demostrate CRUD functionality, as well as JWT authentication.


--- 
Part 2

How to use the app:
- First, navigate to the http://localhost:8000/signup and sign up for an account using your username, email and password.
- Once you have successfully signed up and logged in, you will be taken to your home page. On this page, you will be able to view your tweets, your followers tweets, and post new tweets. When you post a tweet, it will display on the list of  tweets below. 
- To create a new tweet, simply write in the text container and click Tweet.
- To follow or unfollow other users, go to their profile page and click on the "Follow" or "Unfollow" button.
- To view the tweets of the users of everyone on twitter, even people you don't follow, go to the "Explore" page. 
- To delete your profile, go to the profile page, click edit profile and then delete. 

Installation Instructions:
1. First, navigate to the app's GitHub repository and click on the "Clone or download" button to download the source code.
2. Next, open a terminal and navigate to the directory where you've downloaded the source code.
3. Run the command npm install to install all the dependencies required to run the app.
4. Next, open the .env file and modify the MongoDB URI and API keys to match your own local MongoDB setup and API keys.
5. Then, you can start the development server by running the command npm start. This will start the server and run the app on your local machine.
6. To test the app, cd to client and run the command npm test.
7. The app should now be running on http://localhost:8000 and you can access it by opening your web browser and navigating to that URL.
