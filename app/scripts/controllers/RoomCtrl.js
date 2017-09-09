(function () {
    function RoomCtrl(Room) {
        this.all = Room.all;
        this.addRoom = Room.add;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
