'use strict';

angular
    .module('ContactsApp', [])
    .filter('NameSpace', function() {
        return function(input) {

         input =  input.replace(/([A-Z])/g, '$1');
            return input[0].toUpperCase +input.slice(1);
           // var lengthOfIn = input.length;
            //if(input[lengthOfIn - 3] === 'N'&& input[lengthOfIn - 2] === 'a'&& input[lengthOfIn - 1] === 'm'&& input[lengthOfIn] === 'e'){

//                var Name = 'NAME';
    //            var rest = input[0,lengthOfIn-3]
  //              var total = Name + rest;
      //      }

//            return total;
        }
    });