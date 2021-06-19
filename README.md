# votify : React-Redux app for votes

This is a practice project for redux and react , it is the final project in React Nanodegree in Udacity

## App Features :

- user can create questions
- answer others questions
- show poll results
- a minimum leaderboard based on how many questions and answers per user
- a minimum authentication. ( to be improved )

## Run instructions :

### install dependencies

#### `yarn install`

#### or

`npm install`

### Start app

#### `yarn start`

#### or

`npm start`

## project tree

```cmd
├── actions
│   ├── answer.js
│   ├── auth.js
│   ├── questions.js
│   ├── shared.js
│   └── users.js
├── App.css
├── App.test.js
├── components
│   ├── AddQuestion.js
│   ├── App.js
│   ├── Dashboard.js
│   ├── DashboardTabs.js
│   ├── header.js
│   ├── Leaderboard.js
│   ├── LoginForm.js
│   ├── Login.js
│   ├── Question.js
│   ├── questionsList.js
│   ├── ScoreList.js
│   ├── TabPanel.js
│   ├── UserScore.js
│   └── VotesBar.js
├── index.css
├── index.js
├── logo.svg
├── middleware
│   ├── index.js
│   └── logger.js
├── reducers
│   ├── auth.js
│   ├── index.js
│   ├── questions.js
│   └── users.js
├── reportWebVitals.js
├── routes.js
├── setupTests.js
└── utils
    └── _DataAPI.js
```
