'use strict';

angular
    .module('ContactsApp')
    .controller('myCtrl', function($scope, ContactService) {


        var accr = function () {


            var storysPromise = ContactService.readStory();

            var successCallback = function(response){
                $scope.storys = response;
                console.log(response[0].Story);
            }
            var failureCallback = function(err){
                console.log("Error while fetching contacts");
            }

            storysPromise
                .success(successCallback)
                .error(failureCallback);

        }
        accr();
        // initiate an array to hold all active tabs
        $scope.activeTabs = [];

        // check if the tab is active
        $scope.isOpenTab = function (tab) {
            // check if this tab is already in the activeTabs array
            if ($scope.activeTabs.indexOf(tab) > -1) {
                // if so, return true
                return true;
            } else {
                // if not, return false
                return false;
            }
        }

        // function to 'open' a tab
        $scope.openTab = function (tab) {
            // check if tab is already open
            if ($scope.isOpenTab(tab)) {
                //if it is, remove it from the activeTabs array
                $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
            } else {
                // if it's not, add it!
                $scope.activeTabs.push(tab);
            }
        }
    })