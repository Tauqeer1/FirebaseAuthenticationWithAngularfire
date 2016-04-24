/**
 * Created by Tauqeer Ahmed on 4/24/2016.
 */

angular.module('authentication')
    .controller('loginController', ['auth','$http', function (auth,$http) {
        var _self = this;


        auth.$onAuth(function (authData) {
            _self.authData = authData;
            if(authData){
                getRepos();
            }
            console.log(_self.authData);
        });

        _self.login = function () {
            auth.$authWithOAuthPopup("github")
                .then(function (authData) {

                })
                .catch(function (error) {
                    console.error(error);
                })
        }
        _self.logout = function () {
            auth.$unauth();
        }

        function getRepos(){
            $http.get(_self.authData.github.cachedUserProfile.repos_url)
                .success(function(repos){
                    _self.repos = repos;
                })
                .error(function(err){
                    console.error(err);
                })
        }
    }]);
