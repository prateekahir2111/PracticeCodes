/**
 * Created by Prateek on 10/9/2016.
 */

'use strict'


module.exports.calories = function (height, age, gender, weight){

    var bmrForWomen = 655 + ( 4.35 * weight) + (4.7 * height) - (4.7 * age);
    var bmrForMen = 66 + ( 6.23 * weight) + ( 12.7 * height) - ( 6.8 * age);

    if(gender == "Male"){
        return bmrForMen;
    }
    else return bmrForWomen;

}