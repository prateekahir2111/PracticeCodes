'use strict';

angular
    .module('ContactsApp')
        .controller('ContactsCtrl', function($scope, $state, ContactService){
            var display = function () {


            var contactsPromise = ContactService.getContacts();

            var successCallback = function(response){
                $scope.contacts = response;
                $scope.fields = Object.keys($scope.contacts[0]) || [];
            }
            var failureCallback = function(err){
                console.log("Error while fetching contacts");
            }

            contactsPromise
                .success(successCallback)
                .error(failureCallback);

        }
            display();

            $scope.deleteContact = function (idToDelete) {
                //var idToDelete = "57a6a2688ceb5ad022880ca8";
                ContactService.deleteContact(idToDelete);
                //$state.go('display')
                display();

            }

            
            // redirect to edit template
            $scope.editContact = function (contact) {
                $state.go('edit',{contactId: contact._id});
            }

        })

angular
    .module('ContactsApp')
    .controller('editCtrl', function($scope, contactId, ContactService){
        $scope.updatePContact = function (contact) {

            ContactService.updateContact(contactId,  contact)

        }
    })

angular
    .module('ContactsApp')
    .controller('banklogin', function($scope, $rootElement){
//        $rootElement.navBarDisplay = 1;
    })


angular
    .module('ContactsApp')
    .controller('saveCtrl', function($scope, $state,ContactService) {
        $scope.saveContact = function (contact) {

            ContactService.postContact(contact).success(function (msg) {
                $scope.status = msg;
            });
            $state.go('display')
        }
    })

angular
    .module('ContactsApp')
    .controller('loginCtrl', function($scope, $state,ContactService) {
        $scope.checkHr = function (contact) {

            ContactService.hrValidate(contact.email, contact.password)
                .success(function (msg) {
                    $scope.status = msg;});
            $state.go('display');
        }
    })



/*

angular
    .module('ContactsApp')
    .controller('saveCtrl', function($scope, SaveService) {
        //.controller('saveCtrl', ['$http', '$scope',
        //  function($http, $scope) {
        var savePro = SaveService.saveContact(contact)
    })

*/
/*
angular
    .module('ContactsApp')
        .controller('saveCtrl', ['$http', '$scope',
            function($http, $scope) {
            $scope.saveContact = function (contact) {

            $http.post('/api/contact', {firstName: contact.firstName, lastName: contact.lastName,
                email: contact.email,}).success(function (msg) {
                $scope.status = msg;
            });
        }
    }]);
/*
angular
    .module('ContactsApp')
    .controller('UpdateCtrl', ['$http', '$scope',
        function($http, $scope) {
            $scope.UpdateContact = function (contact) {

                $http.put('/api/contact/:contactID', {firstName: contact.firstName, lastName: contact.lastName,
                    email: contact.email,}).success(function (msg) {
                    $scope.status = msg;
                });
            }
        }]);
*/
/*
    .controller('editCtrl',['$scope','contactId','ContactService',function($scope, contactId, ContactService){
        //edit contact
        var editPromise = ContactService._editContact(contactId);
        var successCallBack = function (response) {
            $scope.contact = response;
        };

        var failureCallBack = function (err) {
            $scope.message = err;
        }
        editPromise
            .success(successCallBack)
            .error(failureCallBack);
    }])
    .controller('updateCtrl',['$scope','ContactService','$state',function($scope, ContactService,$state){
        //update contact
        $scope.updateContact = function(contact) {
            var updatePromise = ContactService._updateContact(contact._id, contact);
            var successCallBack = function (response) {
                console.log(response);
                $state.go('display');
            };

            var failureCallBack = function (err) {
                console.log(err);
                $state.go('edit');
            }
            updatePromise
                .success(successCallBack)
                .error(failureCallBack);
        }
    }])

    */