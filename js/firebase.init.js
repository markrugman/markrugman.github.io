angular.module('firebaseConfig', ['firebase'])

.run(function(){

  // Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAoRrVuNwbsOYo-lhaa20tJxogDAng4vlI",
    authDomain: "project-6229254241261409675.firebaseapp.com",
    databaseURL: "https://project-6229254241261409675.firebaseio.com",
    storageBucket: "project-6229254241261409675.appspot.com"
  };
  firebase.initializeApp(config);

})

/*

.service("TodoExample", ["$firebaseArray", function($firebaseArray){
    var ref = firebase.database().ref().child("todos");
    var items = $firebaseArray(ref);
    var todos = {
        items: items,
        addItem: function(title){
            items.$add({
                title: title,
                finished: false
            })
        },
        setFinished: function(item, newV){
            item.finished = newV;
            items.$save(item);
        }
    }
    return todos;
}])

*/
