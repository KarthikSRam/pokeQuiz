# pokeQuiz
## Summary

pokeQuiz is a fun Pokemon quiz app that can be played by anyone.

## Planning Documents

* [User Stories](https://trello.com/b/XawBCUNe/pokequiz)
* [Wireframes](https://drive.google.com/open?id=1BWoSvHp7cMB4Wc8LrutN0cQQD_eSJZGN)
* [Data Model ERD](https://drive.google.com/open?id=1mPNNmGoYYpj5BaS3tU4VQHZVjo-DeSD4)

## Deployed Link

[https://cryptic-depths-83377.herokuapp.com/](https://cryptic-depths-83377.herokuapp.com/)

## Offline Installation Instructions

You can go to the above Heroku link for the deployed website. To try running it offline for yourself:
* Clone this repository (fork first if desired) [Instructions for cloning a Git repo](https://help.github.com/articles/cloning-a-repository/)
* Go to the folder containing package.json in your command line and run
```
npm install
```
* Make sure you have installed mongoDB and have 'mongod' running [Mac](https://treehouse.github.io/installation-guides/mac/mongo-mac.html) | [Linux](https://docs.mongodb.com/manual/administration/install-on-linux/) | [Windows](https://docs.mongodb.com/tutorials/install-mongodb-on-windows/)
* Run ```node seed.js``` in the same folder as step 2. You will need to stop it with Control-C when it finishes.
* From the same folder as above, run
```
node server.js
```
or if you have nodemon:
```
nodemon
```
* Go to http://localhost:3000 to see the home screen
