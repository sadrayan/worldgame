angular.module('myApp').service('tournamentService', function ($http, $q, $location) {
    var query = function (platform) {

        let url = $location.host() + ':' + $location.port();
        var deferred = $q.defer();

        if (platform === 'xbox') {
            url =  'tournaments/xbox';
        } else if (platform === 'ps4') {
            url = 'tournaments/ps4';
        } else {
            url = 'tournaments/steam';
        }

        $http({
            method: 'get',
            url: url
        }).then(function (response) {
            data = response.data;
            deferred.resolve(data);
        }, function (error) {
            console.log(error, 'can not get data.');
            deferred.reject("Failed to get tournaments");
        });

        return deferred.promise;
    };

    this.getAvaialbleUserTournaments = function (userId) {

        let url;
        var deferred = $q.defer();

        $http.get('user/' + userId).then(function (response) {
            user = response.data;
            console.log('user', user);
        });

        allPlatforms = []

        var platforms = ['xbox', 'ps4', 'steam']
        platforms.forEach(function (item) {
            query(item).then(function (response) {
                // console.log(response, 'getting tournament response');
                response.forEach(function(item){
                    if (user['balance'] >= item['entryFee'])
                        allPlatforms.push(item);
                  });
                
            });
        });

        deferred.resolve(allPlatforms);
        console.log('allPlatforms', allPlatforms);
        return deferred.promise;

    }

});