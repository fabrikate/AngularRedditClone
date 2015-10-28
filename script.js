//setup moment.js and set "now"
moment().format()
var time = new Date();

// Angular Controller
var app = angular.module("redditClone", []);
app.controller("redditController", function($scope) {
  $scope.newPost = {
    title: '',
    vote: '',
    author: '',
    image: '',
    description: '',
    datePosted: time,
    dateSincePost: moment(time).fromNow()
  };
  $scope.posts = [
  {title: 'Interstellar, a review',
  vote: 8,
  author: 'fabrikate',
  image: 'http://www.thegeeksclub.com/wp-content/uploads/2014/11/int4_bw_fullhd.jpg',
  description: 'Cool movie, yo',
  datePosted: moment([2014, 10, 28]),
  dateSincePost: moment([2014, 10, 28]).fromNow()},
  {title: "Why Aaron Sorkin's Steve Jobs is great",
  vote: 0,
  author: 'fabrikate',
  image: "http://thesecondtake.com/wp-content/uploads/2015/09/steve-jobs-movie-poster-800px-800x1259-copy.jpg",
  description: 'Its Great!',
  datePosted: moment([2015, 9, 27]).calendar(),
  dateSincePost: moment([2015, 9, 27]).fromNow()},
  {title: "My favorite Movie",
  vote: 10,
  author: 'fabrikate',
  image: 'https://infinitecrescendo.files.wordpress.com/2014/03/eternal-sunshine-of-the-spotless-mind-poster.jpg',
  description: 'Eternal Sunshine of the Spotless Mind is the best movie. I absolutely love it.',
  datePosted: moment([2015, 9, 1]),
  dateSincePost: moment([2015, 9, 1]).fromNow()}];
  $scope.submitNewPost = function(isValid) {
    if (isValid) {
      $scope.posts.push($scope.newPost);
      $scope.newPost = {
        title: '',
        vote: '',
        author: '',
        image: '',
        description: '',
        datePosted: time,
        dateSincePost: moment(time).fromNow()
      };
    }
  },
  $scope.upVote = function(post) {
    post.vote ++;
  },
  $scope.downVote = function(post) {
    post.vote--;
  };
})

//jQuery for dynamic events
$(document).ready(function() {
  $('#addPost').hide();
  $('#navAddPost').on('click', function(e) {
    e.preventDefault();
    $('#addPost').toggle();
  });
})

