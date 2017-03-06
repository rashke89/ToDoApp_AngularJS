angular.module('mainController', [])
    .controller('mainCtrl', ['$scope', '$window', function($scope, $window) {
        $window.addEventListener('beforeunload', function() {
            $window.localStorage.db = JSON.stringify($scope.toDos);
        });
        if ($window.localStorage.db) {
        $scope.toDos = JSON.parse($window.localStorage.db);
        } else {
            $scope.toDos = [];
        }
        $scope.markAsDone = function(index) {
            $scope.toDos[index].done = true;
        };
        $scope.del = function(index) {
            $scope.toDos.splice(index, 1);
        };
        $scope.addTask = function() {
            $scope.toDos.push({
                message: $scope.message,
                done: false
            });
            $scope.message = "";
        };

    }])

angular.module("mainController", []).controller("mainCtrl", ["$scope", "$window", function(a, b) {
    b.addEventListener("beforeunload", function() {
        b.localStorage.db = JSON.stringify(a.toDos)
    }), b.localStorage.db ? a.toDos = JSON.parse(b.localStorage.db) : a.toDos = [], a.markAsDone = function(b) {
        a.toDos[b].done = !0
    }, a.del = function(b) {
        a.toDos.splice(b, 1)
    }, a.addTask = function() {
        a.toDos.push({
            message: a.message,
            done: !1
        }), a.message = ""
    }
}]);