'use strict';

angular.module('confusionApp', [])
.controller('MenuController', ['$scope', function($scope) {
  $scope.tab= 1; //pagina 1 do index tab, vai ser a selecionada
  $scope.filtText='';
  $scope.showDetails = false;
  $scope.dishes=[
    {
      name:'Uthapizza',
      image: 'images/uthapizza.png',
      category: 'mains',
      label:'Hot',
      price:'4.99',
      description: 'A unique combinantion of many things, not sure just waiting to load the page',
      comment: 'abc'

    },
    {
      name:'Zucchipakoda',
      image: 'images/Zucchipakoda.png',
      category: 'appetizer',
      label: '',
      price:'1.99',
      description: 'A deep fried combinantion of many things',
      comment: 'abc'

    },
    {
      name:'Vadonut',
      image: 'images/Vadonut.png',
      category: 'appetizer',
      label:'New',
      price:'1.99',
      description: 'A quintessense  fried combinantion of many things',
      comment: 'abc'

    },
    {
      name:'ElaiCheese Cake',
      image: 'images/elaicheesecake.png',
      category: 'dessert',
      label:'New',
      price:'1.99',
      description: 'A quintessense  fried combinantion of many things',

    }


  ];

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

    $scope.isSelected =function(checkTab){return ($scope.tab===checkTab);
    };
$scope.toggleDetails = function(){
  $scope.showDetails = !$scope.showDetails;
};

  }]);
