/**
 * Created by Prateek on 10/10/2016.
 */

'use strict';

angular
    .module('ContactsApp')
    .factory('BodyBuildingServices', function($http){

        var _getCalories = function(person){
            var promiseCalories = $http.post('/api/bodybuilding/', {age: person.age, height: person.height,
                weight: person.weight, gender: person.gender});
            return promiseCalories;
        }


        return {
            getCalories: _getCalories,
        };

    })