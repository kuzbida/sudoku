angular.module('sudokuApp', [])
    .controller('GameController', function($scope) {
        $scope.numbers = [1,2,3,4,5,6,7,8,9];
        $scope.squares = [];


        $scope.square = {};
        var ceil = function(row, col){
            return '<input ng-model="square.sq_'+row+'_'+col+'" name="sq_'+row+'_'+col+'"  ' +
                'ng-class="{\'error\' : playForm.sq_'+row+'_'+col+'.$invalid}" ng-change="changeSqr(playForm, \'sq_'+row+'_'+col+'\')" data-row="'+row+'" data-col="'+col+'"/>';
        };
        //appending columns
        for(var i = 1; i < 10; i++){
            //appending rows
            for(var j = 1; j < 10; j++){
                $scope.squares.push({col: i, row: j});
            }
        }
        /*console.log($scope.squares);
        angular.forEach($scope.squares, function (square) {
            $('.gameSquare').append(ceil(square.col, square.row));
        });*/
        $scope.changeSqr = function(form, key){
            form[key].$invalid = true;
            console.log(form[key])
        };

    });