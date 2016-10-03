angular.module('app.learnervoice.ctrls', [])

.controller('learnerVoiceCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.currentTopicsCount = 2;
    $scope.closedTopicsCount = 0;
    $scope.feedbackTopicsCount = 5;

}])

.controller('currentDiscussionsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.discussions = [];
    //var displayedItems = 0;

    $scope.showFilters = {};
    $scope.showFilters.checked = false;

    $scope.toggleToggle = function(curState){
        if(curState){$scope.showFilters.checked = false} else {$scope.showFilters.checked=true}
    };


    $scope.countItems = function(tagName){
        var counter = 0;
        for(i=0;i<$scope.discussions.length;i++){
            for(j=0;j<$scope.discussions[i].tags.length;j++){
                if($scope.discussions[i].tags[j].name === tagName){
                    counter++;
                }
            }
        }
        return counter;
    };

    $scope.toShow = function(item){
        //var ret = false;
        for(i=0;i<item.tags.length;i++){
            //console.log('Checking:'+item.title+' with tag:'+item.tags[i].name);
            if($scope.checkboxes[item.tags[i].name].checked===true){
                //displayedItems ++;
                return true;
            }
        }
        //displayedItems --;
        return false;
    };


    //SAVE CHECKBOXES TO LOCALSTORAGE FOR FUTURE
    $scope.checkboxes = {
        'Broomfield Hall':{
            name:'Broomfield Hall',
            checked:true
        },
        'Joseph Wright Center':{
            name:'Joseph Wright Center',
            checked: false
        },
        'Roundhouse':{
            name:'Roundhouse',
            checked: true
        },
        'Ilkeston':{
            name:'Ilkeston',
            checked: true
        },
        'Lessons':{
            name:'Lessons',
            checked: false
        },
        'College Wide':{
            name:'College Wide',
            checked: true
        }
    };

    $scope.discussions = [{
        title:'Longer Lessons',
        subtitle: 'Posted on 01/09/2016 @ 11:34 AM',
        isNew: true,
        topic:'Some people would like longer lessons - our evening course finishes at 4.30pm and most of us would like to stay until 5.00pm',
        lovedby: 126,
        commentcount: 1,
        news:0,
        tags: [{
            name:'Broomfield Hall'
        },
        {
            name:'Lessons'
        }]
    },{
        title: '23',
        subtitle: 'Posted on 02/09/2016 @ 04:32 PM',
        isNew: false,
        topic:'sdadad',
        lovedby: 1,
        news:10,
        commentcount: 5,
        tags: [{
            name: 'College Wide'
        },{
            name: 'Joseph Wright Center'
        }]
    },{
        title: 'Test 2',
        subtitle: 'Posted on 22/09/2016 @ 01:15 PM',
        isNew: false,
        topic:'Test Item',
        lovedby: 3,
        news:1,
        commentcount: 2,
        tags: [{
            name: 'Broomfield Hall'
        }]
    },{
        title: 'Little Stevie @ JWC',
        subtitle: 'Posted on 23/09/2016 @ 01:15 PM',
        isNew: false,
        topic:'Get rid of Little Stevie, he\'s not little anymore and he smells',
        lovedby: 1278923,
        news:13,
        commentcount: 234,
        tags: [{
            name: 'Joseph Wright Center'
        }]
    }];

}])

.controller('feedbackCtrl', ['InitSetup', '$scope', '$stateParams', 'LearnerVoice', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
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
