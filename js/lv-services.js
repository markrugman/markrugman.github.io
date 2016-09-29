angular.module('lv.services', [])

.factory('LearnerVoice', [function(){
    this.getNews = getNews;
    
    function getNews(){
        var news = [{
                title: 'Learner Voice Request',
                date: '01/09/2016 at 11:01am',
                description: 'item desc',
                type: 'lv'
            },{
                title: 'News at Broomfield Hall',
                date: '02/09/2016 at 12:03pm',
                description:'desc',
                type: 'bh'
            },{
                title: 'Students\' Union Apprentices',
                date: '02/09/2016 at 12:03pm',
                description:'We have new apprentices starting in the Students\' Union.\n\nThe apprentices will be starting monday...',
                type: 'su'
            }
            ];
        return news;
    }
    
    return this;
}])

.service('BlankService', [function(){

}]);
