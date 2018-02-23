(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);


function UserService(){
  var userService = this;
  console.log("user Service: ", "Start of User Service");
  userService.firstName = "";
  userService.lastName = "";
  userService.email = "";
  userService.faveItem = "";

  userService.getFirstName = function(){
    console.log("user Service: ", "returning first name: " + userService.firstName);
    return userService.firstName;
  }

  userService.setFirstName = function(firstName){
    userService.firstName = firstName;
  }


}




})();
