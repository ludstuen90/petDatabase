var petApp=angular.module('petApp', []);



petApp.controller('petViews', ['$scope', '$http', function($scope, $http){
  $scope.showPets = function(){
  $http({
    method: 'GET',
    url: '/seeAll',
  }).then(function(response){
    $scope.allPets = response.data;
    console.log($scope.allPets);
    // console.log("All pets is equal to");
    // console.log($scope.allPets);
    // console.log("Accessing a specific pet: " + response.data[1].name);
    //
    // var animalsLength = $scope.allPets.length;
    // console.log('animals length is ' + animalsLength);
    // console.log("And we currently have " + animalsLength + "animals in store.");
    //
    // $scope.petsArray= [];
    // $scope.petPet= [{name: "chile"},{name: "courtney"},{name: "eleanor"},{name: "angus"}];
    //
    // $scope.addPets= function(){
    //       for (var i = 0; i < animalsLength; i++){
    //         $scope.thisPet = $scope.allPets[i].name;
    //         $scope.petsArray.push($scope.thisPet);
          // }
    // //       console.log($scope.petsArray);
    // };
    // $scope.addPets();


  });
};

}]);


console.log("We made it, Jeronimo!");
