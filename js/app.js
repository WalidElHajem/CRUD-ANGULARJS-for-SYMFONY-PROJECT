
angular.module('animalApp',['ui.router','ngResource','animalApp.controllers','animalApp.services']);

angular.module('animalApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('animals',{
        url:'/animals',
        templateUrl:'partials/animal.html',
        controller:'AnimalListController'
    }).state('viewAnimal',{
       url:'/animals/:id/view',
       templateUrl:'partials/animal-view.html',
       controller:'AnimalViewController'
    }).state('newAnimal',{
        url:'/animals/new',
        templateUrl:'partials/animal-add.html',
        controller:'AnimalCreateController'
    }).state('editAnimal',{
        url:'/animals/:id/edit',
        templateUrl:'partials/animal-edit.html',
        controller:'AnimalEditController'
    });
}).run(function($state){
   $state.go('animals');
});