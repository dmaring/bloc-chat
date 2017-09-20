(function() {
    function Auth($rootScope, $firebaseAuth) {
        var Auth = {};

        var authObject = $firebaseAuth();
        var currentUserObject = authObject.$getAuth();

        var setCurrentUser = function(user) {
            $rootScope.currentUser = user;
            console.log("set global currentUser", $rootScope.currentUser.email);
        }

        Auth.currentUser = currentUserObject;

        Auth.createUser = function(email, password) {
            var message = null;
            var returnedError = null;

            // Create a new user
            authObject.$createUserWithEmailAndPassword(email, password)
            .then(function(firebaseUser) {
                message = "User created with uid: " + firebaseUser.uid;
                console.log(message);
                }).catch(function(error) {
                    returnedError = error;
                    console.log(returnedError);
                    });
        };

        Auth.deleteUser = function() {
            var message = null;
            var returnedError = null;

            // Delete the currently signed-in user
            authObject.$deleteUser().then(function() {
                message = "User deleted";
                console.log(message);
                }).catch(function(error) {
                    returnedError = error;
                    console.log(returnedError);
                });
        };

        Auth.getUser = function() {
            if (!$rootScope.currentUser) {
                console.log("No user signed in")
            } else {
                var user = $firebaseAuth().$getAuth();
                console.log("Got user: ", user.email);
                // setCurrentUser(user);
                return user;
            };



        };

        Auth.signInUser = function(email, password) {
            authObject.$signInWithEmailAndPassword(email, password).then(function(firebaseUser) {
                console.log("Signed in as:", firebaseUser.uid);
                console.log(firebaseUser.email);
                setCurrentUser(firebaseUser)
                }).catch(function(error) {
                    console.error("Authentication failed:", error);
                    });

        };

        Auth.signOutUser = function() {
            authObject.$signOut();
        }

        return Auth;
    };


    angular
        .module('blocChat')
        .factory('Auth', ['$rootScope', '$firebaseAuth', Auth]);
})()
