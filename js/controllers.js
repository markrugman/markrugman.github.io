angular.module('app.controllers', [])

.controller('myAccountCtrl', ['InitSetup', '$scope', '$stateParams', 'newUserFactory', function (InitSetup, $scope, $stateParams, newUserFactory) {
    $scope.$on('$ionicView.enter', function() {
        if($scope.$parent.$parent.badges){
            $scope.$parent.$parent.badges.account=0;
        }
    });
    $scope.user = newUserFactory.getUser();
}])
