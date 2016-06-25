var petApp=angular.module('petApp', []);



petApp.controller('petViews', ['$scope', '$http', function($scope, $http){
  $scope.showPets = function(){
  $http({
    method: 'GET',
    url: '/seeAll',
  }).then(function(response){
    $scope.allPets = response;
    console.log($scope.allPets);
  });
};

}]);


console.log("We made it, Jeronimo!");
