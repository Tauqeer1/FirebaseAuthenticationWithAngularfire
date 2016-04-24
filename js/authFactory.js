/**
 * Created by Tauqeer Ahmed on 4/24/2016.
 */

angular.module('authentication')
    .factory('auth',['$firebaseAuth',function($firebaseAuth){

        var ref = new Firebase("https://appphotosharing.firebaseio.com/");
        var authObject = $firebaseAuth(ref);

        return authObject;


    }])
