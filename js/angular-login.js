var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {
    $scope.openModal=function(){
        $('#myModal').modal('show');
        swal("Good job!", "You clicked the button!", "success");
    }



});