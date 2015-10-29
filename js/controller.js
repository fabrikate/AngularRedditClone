var app = angular.module("redditClone");
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
  {
    title: 'Interstellar, a review',
    vote: 8,
    author: 'fabrikate',
    image: 'http://www.thegeeksclub.com/wp-content/uploads/2014/11/int4_bw_fullhd.jpg',
    description: 'To infinity and beyond goes “Interstellar,” an exhilarating slalom through the wormholes of Christopher Nolan’s vast imagination that is at once a science-geek fever dream and a formidable consideration of what makes us human. As visually and conceptually audacious as anything Nolan has yet done, the director’s ninth feature also proves more emotionally accessible than his coolly cerebral thrillers and Batman movies, touching on such eternal themes as the sacrifices parents make for their children (and vice versa) and the world we will leave for the next generation to inherit.',
    datePosted: moment([2014, 10, 28]),
    dateSincePost: moment([2014, 10, 28]).fromNow(),
    comments: [
    {
    content: 'Hans Zimmer fell asleep on the organ',
    author: 'person'
    },
    {content: 'really, Dr. Mann is the evil one?',
    author: 'Points out obvious stuff guy'}]},
  {
    title: "Why Aaron Sorkin's Steve Jobs is great",
    vote: 0,
    author: 'fabrikate',
    image: "http://thesecondtake.com/wp-content/uploads/2015/09/steve-jobs-movie-poster-800px-800x1259-copy.jpg",
    description: 'Steve Jobs became one of the most iconic men of the millennium.  He was a phoenix like figure that brought the company he founded back from the brink and transformed it into the most valuable corporation in the world.  Jobs was also a difficult man to work with who many people admired and just as many considered an a-hole.  Almost four years after his passing, director Danny Boyle and screenwriter Aaron Sorkin have collaborated on “Steve Jobs,” an ambitious new drama that culls material from Walter Isaacson’s best-selling biography of the legendary Apple CEO.',
    datePosted: moment([2015, 9, 27]).calendar(),
    dateSincePost: moment([2015, 9, 27]).fromNow(),
    comments:[]
  },
  {
    title: "My favorite Movie",
    vote: 10,
    author: 'fabrikate',
    image: 'https://infinitecrescendo.files.wordpress.com/2014/03/eternal-sunshine-of-the-spotless-mind-poster.jpg',
    description: "It's one thing to wash that man right outta your hair, and another to erase him from your mind. 'Eternal Sunshine of the Spotless Mind' imagines a scientific procedure that can obliterate whole fields of memory -- so that, for example, Clementine can forget that she ever met Joel, let alone fell in love with him. 'Is there any danger of brain damage?' the inventor of the process is asked. 'Well,' he allows, in his most kindly voice, 'technically speaking, the procedure is brain damage.'",
    datePosted: moment([2015, 9, 1]),
    dateSincePost: moment([2015, 9, 1]).fromNow(),
    comments:[]
  },
  {
    title:'The best animated movie of 2015!',
    vote: 10,
    author: 'a smart person',
    image: 'http://blogs-images.forbes.com/markhughes/files/2015/06/INSIDE-OUT-18.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    datePosted: moment([2015, 9, 28]),
    dateSincePost: moment([2015, 9, 28]).fromNow(),
    comments: []
  }];
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
