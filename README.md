# Instanews App

A responsive web application that fetches the top 12 stories using the New York Times API

![alt text](https://github.com/sebatmohamed/instaNewsApp/blob/master/mobile-initial.png)

## Setup

Installation of a couple packages are required to run this game. Ensure you have [Node.js](https://nodejs.org/en/) installed first. Download the project before running the commands listed below:

**Install dependencies:**

`$ npm install`

`gulp ^4.0.2`

After you have downloaded the project, navigate to your project directory and open the terminal.

Run gulp. You can access your project at http://localhost:3000.

## NY Times API Key

Create an account to sign in and get a personalized API key from the [NY Times Developer website](https://developer.nytimes.com/apis).

In your main.js file when making a request to the API to grab the top stories, replace the placeholder text ```my key``` with your personalized API.

Example call:

```javascript
$.getJSON("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=my-key")
.done(function(data) {
    //enter code here to use data
})
```

#### Technologies Used

- HTML5
- Sass
- JavaScript
- jQuery
- Gulp
- Git
- AJAX
- JSON

#### Personal Learnings

- Using Sass, a pre-processor to make effective use of variables, mixins, and partials, to style layout more efficiently 
- Using gulp for running build tasks such as minification, Sass compilation, and error checking
- Using ```$.ajax 'GET' method``` or ```$.getJSON method``` to retrieve data via an API
- First introduction to CSS Grid to dislpay images and write code more efficiently

## Contribution

Please feel free to clone my project and contribute to it.

## Authors

Sebat Mohamed - [sebatmohamed](https://github.com/sebatmohamed)

Written Oct 2019

## Acknowledgements 

[Red Acamdemy](https://github.com/redacademy)