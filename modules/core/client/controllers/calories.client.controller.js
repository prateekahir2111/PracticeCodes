/**
 * Created by Prateek on 10/10/2016.
 */

'use strict';


angular
    .module('ContactsApp')
    .controller('BodyBuildingCtrl', function($scope, $state,BodyBuildingServices) {
        $scope.calculateCalories = function (person) {

          var calVal =  BodyBuildingServices.getCalories(person)
                calVal.success(function (calorieVal) {
                    console.log(calorieVal)
                    $scope.status = calorieVal;
                    $scope.caloriesValue = calorieVal;
                })
                calVal.error(function(calorieVal){

                })

        }
    })