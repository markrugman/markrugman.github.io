angular.module('app.derbycollege.ctrls', [])

.controller('derbyCollegeCtrl', ['InitSetup', '$scope', '$stateParams',function (InitSetup, $scope, $stateParams) {
    $scope.$on('$ionicView.enter', function() {
        if($scope.$parent.$parent.badges){
            $scope.$parent.$parent.badges.home=0;
        }
    });

    $scope.onSwipeLeft = function(){
      $scope.swiped = true;
    }

}])
