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
        templateUrl: 'templates/derbyCollege.html',
        controller: 'derbyCollegeCtrl'
      }
    }
  })

  .state('tabs.feedback', {
    url: '/feedback',
    views: {
      'tab2': {
        templateUrl: 'templates/feedback.html',
        controller: 'feedbackCtrl'
      }
    }
  })

  .state('tabs.myAccount', {
    url: '/myAccount',
    views: {
      'tab3': {
        templateUrl: 'templates/myAccount.html',
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
    templateUrl: 'templates/splashscreen.html',
    controller: 'splashscreenCtrl'
  })

  .state('tabs.nUSExtraCard', {
    url: '/nusExtra',
    views: {
      'tab5': {
        templateUrl: 'templates/nUSExtraCard.html',
        controller: 'nUSExtraCardCtrl'
      }
    }
  })

  .state('tabs.learnerVoice', {
    url: '/learnerVoice',
    views: {
      'tab2': {
        templateUrl: 'templates/learnerVoice.html',
        controller: 'learnerVoiceCtrl'
      }
    }
  })

  .state('tabs.currentDiscussions', {
    url: '/stage1',
    views: {
      'tab2': {
        templateUrl: 'templates/currentDiscussions.html',
        controller: 'currentDiscussionsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/splashscreen')

  

});