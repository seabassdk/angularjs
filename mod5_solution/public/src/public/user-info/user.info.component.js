(function () {
"use strict";

angular.module('public')
.component('registeredUser', {
  templateUrl: 'src/public/user-info/registered-myinfo.html',
  controller: UserInfoController
});

UserInfoController.$inject = ['$rootScope','UserService', 'ApiPath'];
function UserInfoController($rootScope, UserService, ApiPath) {
  var infoCtrl = this;

  infoCtrl.basePath = ApiPath;

  infoCtrl.firstName = UserService.firstName
  infoCtrl.lastName = UserService.lastName
  infoCtrl.email = UserService.email
  infoCtrl.faveItem = UserService.faveItem

  infoCtrl.userExists = false;
  infoCtrl.userNotExists = true;

  if(infoCtrl.firstName){
    infoCtrl.userExists = true;
    infoCtrl.userNotExists = false;
    console.log("info controller: ", "the short name: " + infoCtrl.faveItem.short_name);
  }

}


})();
