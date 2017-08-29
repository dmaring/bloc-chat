(function () {
    function RoomCtrl(Room) {
        this.all = Room.all;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
