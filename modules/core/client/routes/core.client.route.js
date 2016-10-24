'use strict';

angular
    .module('ContactsApp')
        .config(function($stateProvider){

                $stateProvider
                    .state('display',{
                            url:'/display',
                            templateUrl: 'modules/core/client/views/display.client.tpl.html'
                    })
                    .state('create',{
                            url:'/create',
                            templateUrl: 'modules/core/client/views/create.client.tpl.html'
                            })
                    .state('login',{
                        url:'/login',
                        templateUrl: 'modules/core/client/views/login.client.tpl.html'
                    })
                    .state('accord',{
                        url:'/accord',
                        templateUrl: 'modules/core/client/views/accordian.client.tpl.html'
                    })
                    .state('banklogin',{
                        url:'/banklogin',
                        templateUrl: 'modules/core/client/views/banklogin.client.tpl.html'

                    })
                    .state('mainbanklogin',{
                        url:'/',
                        templateUrl: 'modules/core/client/views/banklogin.client.tpl.html'

                    })
                    .state('edit',{
                        url:'/edit/:contactId',
                        templateUrl: 'modules/core/client/views/update.client.tpl.html',
                        resolve:{
                            contactId : function ($stateParams) {
                                return $stateParams.contactId;
                            }
                        },
                        controller: 'Ctrl'
                    })

        $stateProvider
            .state('calories',{
                url:'/calories',
                templateUrl: 'modules/core/client/views/caloriescalculator.client.views.html'
            })

    });
