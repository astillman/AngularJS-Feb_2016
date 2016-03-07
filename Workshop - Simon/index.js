
angular.module('MyApp', ['MyServices']) //second argument [] causes angular to 
//make a new container, holds names of dependencies -- e.g. modules you need to run


//pass value services in by name
.controller('MainController', function($timeout, $scope, Sequence, Utilities) {

   var self = this;

   self.simonSequence = new Sequence();
   self.userSequence = [];
   self.usersTurn = false;
   self.outcome = "Waiting for you...";
   self.firstClick = true;

   self.clearDisplaySequence = function() {
      $timeout(function() {
         self.displaySequence = [];
      }, 1000);
   };

   self.toggleTurn = function() {
      $timeout(function() {
         self.usersTurn = !self.usersTurn;
      }, 1000);
   }

   self.squareSelected = function(color) {
      if (self.firstClick) {
         self.displaySequence = [];
      }
      self.firstClick = false;
      self.toggleSquare(color);
      self.userSequence.push(color);
      self.displaySequence.push(color);
      self.outcome = Utilities.evaluateUserInput(self.userSequence, self.simonSequence);
      if (self.outcome === 'Wrong!') {
         self.toggleTurn();
         self.userSequence = [];
         self.simonSequence = new Sequence();
         self.clearDisplaySequence();
      } else if (self.outcome === 'Correct!') {
         self.toggleTurn();
         self.userSequence = [];
         self.clearDisplaySequence();
      } else {
         self.outcome = "Waiting for you...";
      }
   };

   self.toggleSquare = function(color, last) {
      self.colorSelected = color;
      $timeout(function(){
         self.colorSelected = '';
         if (last) {
            self.toggleTurn();
            self.outcome = "Waiting for you...";
            self.clearDisplaySequence();
         }
      }, 700);
   }

   self.letSimonPlay = function() {
      self.firstClick = true;
      self.displaySequence = [];
      self.userSequence = [];
      self.outcome = "Playing...";
      self.simonSequence.extendByOne();
      var colors = self.simonSequence.colors;
      var toggleColor = function(color, index, last) {
         $timeout(function() {
            self.toggleSquare(color, last);
            self.displaySequence.push(color);
         }, index*1000);
      }
      for (var i=0; i<colors.length; i++) {
         toggleColor(colors[i], i, i === (colors.length - 1));
      }
   }
});