
angular.module('animalApp.controllers',[]).controller('AnimalListController',function($scope,$state,popupService,$window,Animal){

    $scope.animals=Animal.query();

    $scope.deleteAnimal=function(animal){
        if(popupService.showPopup('Really delete this?')){
            animal.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('AnimalViewController',function($scope,$stateParams,Animal){

    $scope.animal=Animal.get({id:$stateParams.id});

}).controller('AnimalCreateController',function($scope,$state,$stateParams,Animal){

    $scope.animal=new Animal();

    $scope.addAnimal=function(){
        $scope.animal.$save(function(){
            $state.go('animals');
        });
    }

}).controller('AnimalEditController',function($scope,$state,$stateParams,Animal){

    $scope.updateAnimal=function(){
        $scope.animal.$update(function(){
            $state.go('animals');
        });
    };

    $scope.loadAnimal=function(){
        $scope.animal=Animal.get({id:$stateParams.id});
    };

    $scope.loadAnimal();
});