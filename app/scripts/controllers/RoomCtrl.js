(function () {
    function RoomCtrl(Room, Message) {
        this.all = Room.all;
        this.addRoom = Room.add;
        this.setRoom = Room.setRoom;

    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', RoomCtrl]);
})();
