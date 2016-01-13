'use strict';

angular.module('confusionApp', [])
.controller('menuController', function(){
  this.tab= 1; //pagina 1 do index tab, vai ser a selecionada
this.filtText='';

  var dishes=[
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

  this.dishes = dishes;



  this.select = function(setTab){
    this.tab=setTab;


  if(setTab===2) {
    this.filtText="appetizer";
    }
  else if (setTab===3){
    this.filtText='mains';
    }
  else if (setTab===4){
    this.filtText="dessert";
    }
  else{
    this.filtText="";
  }};

  this.isSelected =function(checkTab){return (this.tab===checkTab);
  };

});
