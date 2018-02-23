(function () {
"use strict";

angular.module('public')
.component('signupUser', {
  templateUrl: 'src/public/user-signup/registration-form.html',
  controller: UserSignupController
});

UserSignupController.$inject = ['$rootScope','UserService','MenuService', 'ApiPath'];
function UserSignupController($rootScope, UserService, MenuService, ApiPath) {
  var user = this;

  user.basePath = ApiPath;


  user.$onInit= function() {
    user.showApplication = true;
  }

  user.submit = function () {
      user.favenameFound = false;
      user.favenameNotFound = false;

      MenuService.getMenuItem(user.faveShortName)
      .then(function(response){

        user.showApplication = false;
        user.favenameFound = true;
        user.ctrlToService(response.data);
        return response.data;
      })
      .catch(function (response) {
        user.favenameNotFound = true;
      });
    };

  user.ctrlToService = function(item){
      UserService.firstName = user.firstName;
      UserService.lastName = user.lastName;
      UserService.email = user.email;
      UserService.faveItem = item;
  }
}


})();
