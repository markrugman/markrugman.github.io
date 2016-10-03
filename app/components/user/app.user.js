angular.module('app.user.factory', [])

.factory('newUserFactory', ['$state', '$ionicLoading', 'Firebase', function($state, $ionicLoading, Firebase){
    var UserCollection = {};

    this.signout = signout;
    this.login = login;
    this.getUser = getUser;

    function init(){
        $ionicLoading.show({
            template: 'Loading...'
        });
        firebase.auth().onAuthStateChanged(function(user) {
            $ionicLoading.hide();
            if (user) { //check if user logged in
                if(UserCollection !== user){ //check if already saved user object
                    UserCollection = user; //set user details
                    alert('logged in');
                    //$state.go('tabsController.theStudentHub'); //go to first page for users
                }
                return;
            } else {
                if(UserCollection !== {}){
                    UserCollection = {};
                    //$state.go('login');
                }
                return;
            }
        });
    }

    function signout(callback){
        firebase.auth().signOut().then(function() {
            callback(true);
        }, function(error) {
            callback(false);
        });
    }

    function login(email,password,callback){
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          callback(error.message);
          // ...
        });
    }

    function getUser(){
        return UserCollection;
    }

    init();
    return this;
}])
