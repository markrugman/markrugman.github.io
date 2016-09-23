angular.module('app.controllers', [])
  
.controller('derbyCollegeCtrl', ['InitSetup', '$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function (InitSetup, $scope, $stateParams) {
    $scope.$on('$ionicView.enter', function() { 
        if($scope.$parent.$parent.badges){
            $scope.$parent.$parent.badges.home=0;
        }
    });

}])
   
.controller('learnerVoiceCtrl', ['InitSetup', '$scope', '$stateParams', 'LearnerVoice', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function (InitSetup, $scope, $stateParams, LearnerVoice) {
    $scope.$on('$ionicView.enter', function() { 
        if($scope.$parent.$parent.badges){
            $scope.$parent.$parent.badges.learnerVoice=0;
        }
    });

    
    $scope.showFilters = {};
    
    $scope.showFilters.checked = false;
    
    $scope.feedback = LearnerVoice.getNews();
    
    //SAVE CHECKBOXES TO LOCALSTORAGE FOR FUTURE
    $scope.checkboxes = { 
        'bh':{
            name:'Broomfield Hall',
            checked:true
        },
        'lv':{
            name:'Learner Voice',
            checked: false
        },
        'su':{
            name:'Students\' Union',
            checked: true
        }
    };
}])
   
.controller('myAccountCtrl', ['InitSetup', '$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function (InitSetup, $scope, $stateParams) {
    $scope.$on('$ionicView.enter', function() { 
        if($scope.$parent.$parent.badges){
            $scope.$parent.$parent.badges.account=0; 
        }
    });
}])
      
.controller('splashscreenCtrl', ['$scope', '$stateParams', 'InitSetup', '$state', '$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, InitSetup, $state, $timeout) {
    
    InitSetup.init(function(b1,b2,b3,b4){
        $scope.$parent.badges = {};
        $scope.$parent.badges.home=b1;
        $scope.$parent.badges.learnerVoice=b2;
        $scope.$parent.badges.nusextra=b3; 
        $scope.$parent.badges.account=b4; 
        $timeout(function(){$state.go('tabs.derbyCollege');},2000);
    });

}])
   
.controller('nUSExtraCardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.$on('$ionicView.enter', function() { 
        if($scope.$parent.$parent.badges){
            $scope.$parent.$parent.badges.nusextra=0; 
        }
    });


}])
 