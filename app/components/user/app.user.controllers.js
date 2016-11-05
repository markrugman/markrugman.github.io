angular.module('app.user.controllers', [])

.controller('loginCtrl', ['newUserFactory', '$ionicHistory', '$scope', '$state', '$stateParams', function (newUserFactory, $ionicHistory, $scope, $state) {
  $scope.$on('$ionicView.beforeEnter', function(){  //Check if LoggedIn else goto login page
    if(newUserFactory.isLoggedIn()){
      $ionicHistory.goBack(); //already loggedin so forget going here!
    } // Anything you can think of
  });  

  $scope.user = {};
  $scope.logindetails = {};
  $scope.signupdetails = {};

  $scope.checkEmailaddress = function(){
      //alert('checking');
      if($scope.signupdetails.email.endsWith('@derby-college.ac.uk') || $scope.signupdetails.email.endsWith('@student.derby-college.ac.uk')){
          $scope.signupdetails.validEmail = true;
      } else {
          $scope.signupdetails.validEmail = false;
      }
  };

  $scope.checkPasswords = function(){
      if($scope.signupdetails.password === $scope.signupdetails.repeatpassword){
          $scope.signupdetails.passwordsMatch = true;
          //alert('match');
      } else {
          $scope.signupdetails.passwordsMatch = false;
      }
  };

  $scope.login = function(){

    newUserFactory.login($scope.logindetails.email, $scope.logindetails.password,function(errormessage){
      alert(errormessage);
    }).then(function(){
      if(newUserFactory.isLoggedIn() === true){
        alert('loggedIn');
        $state.go('tabs.derbyCollege')
      }else{alert('not logged in');}
    });
  };

  $scope.cancel = function(){
      $state.go('tabsController.homePage');
  };
}])

.controller('myAccountCtrl', ['newUserFactory', '$state', '$scope', '$stateParams', function (newUserFactory, $state, $scope, $stateParams) {
  $scope.$on('$ionicView.beforeEnter', function(){  //Check if LoggedIn else goto login page
    if(!newUserFactory.isLoggedIn()){
      $state.go('login');
    } // Anything you can think of
  });
  $scope.$on('$ionicView.enter', function() {
      if($scope.$parent.$parent.badges){
          $scope.$parent.$parent.badges.account=0;
      }
  });
  $scope.user = newUserFactory.getUser();
  $scope.signOut = function(){
    console.log('signingout');
    newUserFactory.signout(function(err){
      if(err){console.log(err);}
      $state.go('derbyCollege')
    });
  }
}]);
