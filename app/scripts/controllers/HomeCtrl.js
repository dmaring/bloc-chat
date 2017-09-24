(function() {
    function HomeCtrl(Room, Message, $cookies) {
        var ctrl = this;
        this.currentUser = $cookies.get('blocChatCurrentUser');
        this.setRoom = function (roomObject) {
            Room.setRoom(roomObject);
            ctrl.activeRoom = roomObject;
            this.roomMessages(roomObject);
        };
        this.all = Room.all;
        this.roomMessages = function(roomObject) {
            this.activeMessages = Message.getByRoomId(roomObject);
        };
        this.newMessage = " ";
        this.send = function(newMessage) {
            Message.send(newMessage, this.currentUser, this.activeRoom);
            this.newMessage = " ";
        }
    };

    angular
        // tie controller to project module
        .module('blocChat')
        // name controller, add dependancies, call callback function last in list
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
