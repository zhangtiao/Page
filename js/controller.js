function juliCtrl($scope, $state, $rootScope) {
    $scope.clic = function (id, img,tit) {
        $state.go("xq");
        $rootScope.img = img;
        $rootScope.tit = tit;
    }
}

function xqCtrl($scope, $rootScope,$state) {
    $scope.close = function () {
        $state.go("juli");
    }
}
angular.module("uapp")
    .controller("juliCtrl", juliCtrl)
    .controller("xqCtrl", xqCtrl)
    .controller("ctrl", ["$scope", "$http", function ($scope, $http) {
    $http.get("js/index.json")
        .then(function (response) {
            $scope.data = response.data;
        })
}]);
