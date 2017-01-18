

angular.module('animalApp.services',[])
    .factory('Animal',function($resource){
    return $resource('http://localhost:8000/api/animals/:id.json',{id:'@id'},{
        update: {
            method: 'POST'
        }
    });
    
    
})
  
    .service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});