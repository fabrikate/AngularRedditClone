var app = angular.module('redditClone', ['ngRoute']);
app.config(function($routeProvider) {
console.log('hi');
  $routeProvider
  .when('/', {
    templateUrl: 'partials/reddit_controller.html',
    controller: 'redditController'
  });
});


moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
var time = new Date();
