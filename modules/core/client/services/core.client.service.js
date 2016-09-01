'use strict';

angular
    .module('ContactsApp')
        .factory('ContactService', function($http){

            var _getContacts = function(){
                var promise = $http.get('/api/contact');
                return promise;
            }

            var _postContacts = function(contact){
                var PostPromise = $http.post('/api/contact', {firstName: contact.firstName, lastName: contact.lastName,
                    email: contact.email});
                return PostPromise;
            }
            var _deleteContact = function(contactId){
                var deletePromise = $http.delete('/api/contact/'+contactId);
                return deletePromise;
            }

           // var _updateContact = function(contactId, contact){
             //   var updatePromise = $http.put('/api/contact/'+contactId, {firstName: contact.firstName, lastName: contact.lastName,
               //     email: contact.email});
                //return updatePromise;
            //}

            var _editContact = function (id) {
                var editPromise = $http.get('/api/contact' + '/' + id);
                return editPromise;
            }
              var  _updateContact = function (id,contact) {
                    var updatePromise = $http.put('/api/contact/' + '/' + id +'/' + contact);
                    return updatePromise;
                }

            var _hrValidate = function(username, password){
                var promise = $http.get('/api/contact/login/'+username + '/' + password);
                return promise;
            }

            var _readStory = function(){
                var storyPromise = $http.get('/api/story');
                return storyPromise;
            }

            return {
                getContacts: _getContacts,
                postContact: _postContacts,
                deleteContact: _deleteContact,
                updateContact: _updateContact,
                editContact: _editContact,
                hrValidate: _hrValidate,
                readStory: _readStory
            };

        })
/*
angular
    .module('ContactsApp')
    .factory('SaveService', function($http, contact) {

      var _saveContact =  $http.post('/api/contact', {
            firstName: contact.firstName, lastName: contact.lastName,
            email: contact.email,
        }).success(function (msg) {
            $scope.status = msg;
        });
        return {
            SaveContact: _saveContact
        };
    })

    */