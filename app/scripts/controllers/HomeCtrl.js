(function() {
    function HomeCtrl($rootScope, Room, Message, Auth) {
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
        this.currentUser = Auth.currentUser;


    };

    angular
        // tie controller to project module
        .module('blocChat')
        // name controller, add dependancies, call callback function last in list
        .controller('HomeCtrl', ['$rootScope', 'Room', 'Message', 'Auth', HomeCtrl]);
})();
