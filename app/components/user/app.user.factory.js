angular.module('app.user.factory', [])

.factory('newUserFactory', ['Firebase', function(Firebase){

    var UserCollection = {};
    var LoggedIn = false;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) { //check if user logged in
            if(UserCollection !== user){ //check if already saved user object
                UserCollection = user; //set user details
                LoggedIn = true;
                console.log('logged in from Auth Changed');
            }
        } else {
            if(LoggedIn){
                console.log('Logged out');
                LoggedIn = false;
                UserCollection = {};
            }
        }
    });

    this.signout = signout;
    this.login = login;
    this.getUser = getUser;
    this.isLoggedIn = isLoggedIn;

    console.log('set up functions;');


    function signout(callback){
        firebase.auth().signOut().then(function() {
            callback(true);
        }, function(error) {
            callback(error);
        });
    }

    function login(email,password,callback){
        return firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          callback(error.message);
          // ...
        });
    }

    function isLoggedIn(callback){
      return LoggedIn;
    }

    function getUser(callback){
        UserCollection = firebase.auth().currentUser;
        return UserCollection;
    }

    return this;


}])
