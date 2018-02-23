(function () {
"use strict";

angular.module('public')
.controller('UserSignupControllerUnused', UserSignupControllerUnused);

UserSignupControllerUnused.$inject = ['$rootScope'];
function UserSignupControllerUnused($rootScope) {
  var ctrl = this;

  var cancelListener = $rootScope.$on('userRegistration:registered', function (event, data) {
    console.log("TEST Info Controller","In the listener");
    console.log("TEST Info Controller","data.reg: " + data.reg);
    if (data.reg) {
      //infoCtrl.serviceToCtrl();
      ctrl.userExists = true;
      console.log("Info Controller","User Exists? " + ctrl.userExists);
    }
    else {
      ctrl.userExists = false;
    }
  });

  ctrl.$onDestroy = function () {
    cancelListener();
  };
}

})();
