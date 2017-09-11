(function() {
    function HomeCtrl($rootScope, Room, Message) {
        $rootScope.activeRoom = " ";
        $rootScope.activeMessages = " ";
        this.activeRoom = $rootScope.activeRoom;
        this.activeMessages = $rootScope.activeMessages;
        this.setRoom = Room.setRoom;
        this.roomMessages = function() {
            Message.getByRoomId($rootScope.activeRoom);
        }
    };

    angular
        // tie controller to project module
        .module('blocChat')
        // name controller, add dependancies, call callback function last in list
        .controller('HomeCtrl', ['$rootScope', 'Room', 'Message', HomeCtrl]);
})();
