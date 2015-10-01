angular.module('sudokuApp', [])
    .controller('GameController', function($scope) {
        $scope.numbers = [1,2,3,4,5,6,7,8,9];
        $scope.square = {};
        var ceil = function(row, col){
            return '<input ng-model="square.'+row+'_'+col+'" data-row="'+row+'" data-col="'+col+'"/>';
        };
        //appending columns
        for(var i = 1; i < 10; i++){
            //appending rows
            for(var j = 1; j < 10; j++){
                $('.gameSquare').append(ceil(i,j));
            }
        }

        $scope.$watch('square', function(newValue, oldValue){
            console.log(newValue, oldValue)
        })
    });