angular.module('app.splashscreen.ctrls', [])

.controller('splashscreenCtrl', ['$scope', '$stateParams', 'InitSetup', '$state', '$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, InitSetup, $state, $timeout, newUserFactory) {
    InitSetup.init(function(b1,b2,b3,b4){
        $scope.$parent.badges = {};
        $scope.$parent.badges.home=b1;
        $scope.$parent.badges.learnerVoice=b2;
        $scope.$parent.badges.nusextra=b3;
        $scope.$parent.badges.account=b4;
        $timeout(function(){$state.go('tabs.derbyCollege');},2000);
    });

}])
