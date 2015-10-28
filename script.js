//setup moment.js and set "now"
moment().format()
var time = Date.now();

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
    dateSincePost: moment(time).fromNow(),
    comments: []
  };
  $scope.comment = {
      content: '',
      author: ''
    }
  // array of posts that are populated at pageload
  $scope.posts = [
  {title: 'Interstellar, a review',
  vote: 8,
  author: 'fabrikate',
  image: 'http://www.thegeeksclub.com/wp-content/uploads/2014/11/int4_bw_fullhd.jpg',
  description: 'Cool movie, yo',
  datePosted: moment([2014, 10, 28]),
  dateSincePost: moment([2014, 10, 28]).fromNow(),
  comments: [{
    content: 'Hans Zimmer fell asleep on the organ',
    author: 'person'
  },
  {content: 'really, Dr. Mann is the evil one?',
  author: 'Points out obvious stuff guy'}]},
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
  dateSincePost: moment([2015, 9, 1]).fromNow()},
  {title:'The best animated movie of 2015!',
  vote: 10,
  author: 'a smart person',
  image: 'http://blogs-images.forbes.com/markhughes/files/2015/06/INSIDE-OUT-18.jpg',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  datePosted: moment([2015, 9, 27, 9]),
  dateSincePost: moment(time).fromNow()}];
  // function to see if the form is valid and if it is push it to the posts
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
  },
  $scope.addComment = function(post) {
    console.log(post);
    console.log($scope.comment);
    post.comments.push($scope.comment)
  }
})

//jQuery for dynamic events
$(document).ready(function() {
  $('#addPost').hide();
  $('#navAddPost').on('click', function(e) {
    e.preventDefault();
    $('#addPost').toggle();
  });
})

