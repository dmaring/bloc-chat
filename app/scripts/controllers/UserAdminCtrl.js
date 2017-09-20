(function() {
    function UserAdminCtrl($rootScope, Auth) {

        this.currentUser = $rootScope.currentUser;

        this.getUser = function() {
            Auth.getUser();
        }

        this.createUser = function(newUserEmail, newUserPassword) {
            console.log(newUserEmail, newUserPassword);
            Auth.createUser(newUserEmail, newUserPassword);
        }

        this.deleteUser = function() {
            Auth.deleteUser();
        }

        this.signInUser = function(existingUserEmail, existingUserPassword) {
            Auth.signInUser(existingUserEmail, existingUserPassword);
        }

        this.signOutUser = function() {
            Auth.signOutUser();
        }
    };

    angular
        // tie controller to project module
        .module('blocChat')
        // name controller, add dependancies, call callback function last in list
        .controller('UserAdminCtrl', ['$rootScope', 'Auth', UserAdminCtrl]);
})();
