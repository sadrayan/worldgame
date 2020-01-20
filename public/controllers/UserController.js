angular.module('myApp').controller('userCtrl', function ($scope, $http, tournamentService) {
    // $scope.selectedUserAccount = null;
    $scope.userAccounts = [];
    $scope.leaderBoardAccounts = [];

    var getAllUsers = function () {
        $http({
            method: 'get',
            url: 'usersList'
        }).then(function (response) {
            data = response.data;
            console.log(data, 'data');
            $scope.userAccounts = data;
            updateLeaderBoard(data);
        }, function (error) {
            console.log(error, 'can not get data.');
        });
    }

    getAllUsers();

    var updateLeaderBoard = function (userAccounts) {
        console.log('leaderBoard', userAccounts);
        leaderBoardAccounts = [];
        userAccounts.forEach(user => {
            if (user['matches']) {
                console.log(user)
                user['win'] = 0
                user['loss'] = 0
                user['score'] = 0
                user['numberMatches'] = user['matches'].length
                user['matches'].forEach(match => {
                    if (match['result'] == 1) user['win'] += 1
                    if (match['result'] == -1) user['loss'] += 1
                    user['score'] += match['result']
                })
                $scope.leaderBoardAccounts.push(user);
            }

        });

        // sort by score
        $scope.leaderBoardAccounts.sort(function (a, b) {
            if (a['score'] > b['score']) 
                return -1;
            if (a['score'] < b['score']) 
                return 1;
            // score must be equal
            return 0;
        });

        console.log($scope.leaderBoardAccounts);

    }



    $scope.update = function () {
        console.log("Selected Value: " + $scope.selectedUserAccount);
        tournamentService.getAvaialbleUserTournaments($scope.selectedUserAccount).then(function (response) {
            $scope.tournomentlist = response;
            console.log($scope.tournomentlist, 'in controller');
        });
    };
});