angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabs.derbyCollege', {
    url: '/DerbyCollege',
    views: {
      'tab1': {
        templateUrl: 'app/components/derbycollege/derbyCollege.html',
        controller: 'derbyCollegeCtrl'
      }
    }
  })

  .state('tabs.feedback', {
    url: '/feedback',
    views: {
      'tab2': {
        templateUrl: 'app/components/learnervoice/feedback.html',
        controller: 'feedbackCtrl'
      }
    }
  })

  .state('tabs.myAccount', {
    url: '/myAccount',
    views: {
      'tab3': {
        templateUrl: 'app/components/user/myAccount.html',
        controller: 'myAccountCtrl'
      }
    }
  })

  .state('tabs', {
    url: '/tabs',
    templateUrl: 'templates/tabs.html',
    abstract:true
  })

  .state('splashscreen', {
    url: '/splashscreen',
    templateUrl: 'app/components/splashscreen/splashscreen.html',
    controller: 'splashscreenCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'app/components/user/login.html',
    controller: 'loginCtrl'
  })

  .state('tabs.nUSExtraCard', {
    url: '/nusExtra',
    views: {
      'tab5': {
        templateUrl: 'app/components/nusextra/nUSExtraCard.html',
        controller: 'nUSExtraCardCtrl'
      }
    }
  })

  .state('tabs.learnerVoice', {
    url: '/learnerVoice',
    views: {
      'tab2': {
        templateUrl: 'app/components/learnervoice/learnerVoice.html',
        controller: 'learnerVoiceCtrl'
      }
    }
  })

  .state('tabs.currentDiscussions', {
    url: '/stage1',
    views: {
      'tab2': {
        templateUrl: 'app/components/learnervoice/currentDiscussions.html',
        controller: 'currentDiscussionsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/splashscreen')



});
