var app = angular.module("propertysk", []);

app.controller('propsk',function ($scope, $http) {


    $scope.btn_find = function () {

        console.log($scope.checkin2);
        console.log($scope.checkout2);
        console.log($scope.guest2);
        console.log($scope.check);
        console.log($scope.check1);
        console.log($scope.check2);
        console.log($scope.Search);
        $http({
            method: "POST",
            url: '/checknewproperty_sk',
            data: {
                "destination": $scope.Search,
                "checkin": $scope.checkin2,
                "checkout": $scope.checkout2,
                "guest": $scope.guest2,
                "room1": $scope.check,
                "room2": $scope.check1,
                "room3": $scope.check2

            }
        }).success(function (data) {
            console.log(data.statuscode);
            if (data.statuscode == 200) {
                console.log("in angular homepage");
                //console.log(data.results.result);
                //newResult = data.results.result;
                window.location.assign("/homepage_sk");
            }
            else if (data.statuscode == 401) {
                console.log("in angular location does not exists");

            }
        }).error(function (error) {
            console.log("In angular - error to process request");
        });


    }

    //
    $scope.bidDetail = function(propertycode) {
        console.log("I am bidding");
        $scope.value = propertycode;
        console.log($scope.Search);
        console.log($scope.checkin2);
        console.log($scope.checkout2);
        $http({
            method: "POST",
            url: '/bidDesc_sk',
            data: {
                "propertyId": $scope.value,
                "checkin": $scope.checkin2,
                "checkout": $scope.checkout2,
                "guest":$scope.guest2,
                "destination": $scope.Search

            }
        }).success(function (data) {
            console.log(data.statuscode);
            if (data.statuscode == 200) {
                console.log("in angular homepage");
                //console.log(data.results.result);
                //newResult = data.results.result;
                window.location.assign("/biddetail_sk");
            }
            else if (data.statuscode == 401) {
                console.log("in angular location does not exists");

            }
        }).error(function (error) {
            console.log("In angular - error to process request");
        });
    }
    //


    $scope.showDetail = function(propertycode) {
        console.log("I am SAHIL");
        $scope.value = propertycode;
        console.log($scope.value);
        console.log($scope.Search);
        console.log($scope.checkin2);
        console.log($scope.checkout2);
        $http({
            method: "POST",
            url: '/propertydesc_sk',
            data: {
                "propertyId": $scope.value,
                "checkin": $scope.checkin2,
                "checkout": $scope.checkout2,
                "guest":$scope.guest2,
                "destination": $scope.Search

            }
        }).success(function (data) {
            console.log(data.statuscode);
            if (data.statuscode == 200) {
                console.log("in angular homepage");
                //console.log(data.results.result);
                //newResult = data.results.result;
                window.location.assign("/propdetail_sk");
            }
            else if (data.statuscode == 401) {
                console.log("in angular location does not exists");

            }
        }).error(function (error) {
            console.log("In angular - error to process request");
        });
    }
});





