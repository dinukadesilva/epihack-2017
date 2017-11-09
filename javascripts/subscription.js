var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.subscribes = [];
  $scope.subscriptions = [
    {name: 'Royal College'},
    {name: 'Cinnamon Lakeside'},
    {name: 'Bambalapitiya'},
    {name: 'Kollupitiya'},
    {name: 'Kalutara'},
  ];

  $scope.addMe = function(item) {
    $scope.subscribes.push(item)
  }

  $scope.removeMe = function(item) {

  }


});
