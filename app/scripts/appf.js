'use strict';

angular.module('sa', [])
  .controller('DishDetailController', ['$scope',
    function($scope) {


      var dish = {
        name: 'Uthapizza',
        image: 'images/uthapizza.png',
        category: 'mains',
        label: 'Hot',
        price: '4.99',
        description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
        comments: [{
            rating: 5,
            comment: "Imagine all the eatables, living in conFusion!",
            author: "John Lemon",
            date: "2012-10-16T17:57:28.556094Z"
          }, {
            rating: 4,
            comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
            author: "Paul McVites",
            date: "2014-09-05T17:57:28.556094Z"
          }, {
            rating: 3,
            comment: "Eat it, just eat it!",
            author: "Michael Jaikishan",
            date: "2015-02-13T17:57:28.556094Z"
          }, {
            rating: 4,
            comment: "Ultimate, Reaching for the stars!",
            author: "Ringo Starry",
            date: "2013-12-02T17:57:28.556094Z"
          }, {
            rating: 2,
            comment: "It's your birthday, we're gonna party!",
            author: "25 Cent",
            date: "2011-12-02T17:57:28.556094Z"
          }

        ]
      };

      $scope.dish = dish;

    }
  ])

.controller('DishCommentController', ['$scope',
  function($scope) {

    //Step 1: Create a JavaScript object to hold the comment from the form
    $scope.comment = {
      rating: 5,
      comment: "",
      author: "",
      date: ""
    };
    $scope.submitComment = function() {

      //Step 2: This is how you record the date
      $scope.comment.date = new Date().toISOString();

      // Step 3: Push your comment into the dish's comment array
      $scope.dish.comments.push($scope.comment);

      //Step 4: reset your form to pristine
      $scope.commentForm.$setPristine();
      //Step 5: reset your JavaScript object that holds your comment
      $scope.comment = {
        rate: 5,
        comment: "",
        author: "",
        date: ""
      };
    }
  }
]);
