(function() {
    function HomeCtrl($rootScope, Room, Message) {
        $rootScope.activeRoom = undefined;
        $rootScope.activeMessages = " ";
        this.activeRoom = $rootScope.activeRoom;
        this.activeMessages = $rootScope.activeMessages;
        this.setRoom = Room.setRoom;
        this.all = Room.all;
        this.roomMessages = function() {
            Message.getByRoomId($rootScope.activeRoom);
            }
        this.newMessage = " ";
        this.send = function(newMessage) {
            Message.send(newMessage);
            this.newMessage = " ";
            }

        // authentication control

        this.createUser = function() {
            this.message = null;
            this.error = null;

            // Create a new user
            Auth.$createUserWithEmailAndPassword(this.email, this.password)
            .then(function(firebaseUser) {
                this.message = "User created with uid: " + firebaseUser.uid;
                }).catch(function(error) {
                    this.error = error;
                    });
        };
    };

    angular
        // tie controller to project module
        .module('blocChat')
        // name controller, add dependancies, call callback function last in list
        .controller('HomeCtrl', ['$rootScope', 'Room', 'Message', HomeCtrl]);
})();
