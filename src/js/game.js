angular.module('sudokuApp', [])
    .controller('GameController', function($scope) {
        $scope.numbers = [1,2,3,4,5,6,7,8,9];
        $scope.square = {};
        var ceil = function(row, col){
            return '<input ng-model="square.'+row+'_'+col+'"/>';
        };
        //appending columns
        for(var i = 0; i < 9; i++){
            //appending rows
            for(var j = 0; j < 9; j++){
                $('.gameSquare').append(ceil(i,j))
            }
        }
    });