(function() {
    function HomeCtrl(Room, Message, $cookies) {
        var ctrl = this;
        //this.activeRoom = Room.activeRoom;
        //this.activeMessages = null;
        this.currentUser = $cookies.get('blocChatCurrentUser');
        this.setRoom = function (roomObject) {
            console.log("Test");
            Room.setRoom(roomObject);
            ctrl.activeRoom = roomObject;
            console.log(this.activeRoom);
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
