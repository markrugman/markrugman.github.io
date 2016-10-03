angular.module('app.services', [])

.factory('InitSetup', ['$state', function($state){
    var initialized = false;

    // if(!$state.includes('splashscreen')){
    //     if(!initialized){
    //         $state.go('splashscreen');
    //         //return true;
    //     }
    // }

    this.init = init;
    this.initialized = initialized;

    function init(callback){
        initialized = true;
        callback(5,16,1,0);
        //return true;
    }

   // init();

    return this;
}])

.service('BlankService', [function(){

}]);
