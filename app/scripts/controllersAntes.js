'use strict';

angular.module('confusionApp')
.controller('DishDetailController', ['$scope', 'menuFactory',
function($scope, menuFactory) {

  $scope.tab= 1; //pagina 1 do index tab, vai ser a selecionada
  $scope.filtText='';
  $scope.showDetails = false;
  $scope.dishes = menuFactory.getDishes();

  $scope.select = function(setTab){
    $scope.tab=setTab;
    if(setTab===2) {
      $scope.filtText="appetizer";
    }
    else if (setTab===3){
      $scope.filtText='mains';
    }
    else if (setTab===4){
      $scope.filtText="dessert";
    }
    else{
      $scope.filtText="";
    }};


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
    $scope.dishes.comments.push($scope.comment);

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
