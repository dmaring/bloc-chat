(function() {
    function ModalAddRoomCtrl(Room, $uibModal) {
        console.log("Controller loaded");
        this.roomName = Room.roomName;

        this.open = function () {
            console.log("Open modal");
            var modalInstance = $uibModal.open({
            templateUrl: '/templates/modaladdroom.html',
            controller: 'ModalRoomInstanceCtrl',
            controllerAs: '$ctrl'
            });

            modalInstance.result.then(function (roomName) {
                console.log("Creating room ", roomName);
                Room.add(roomName);
                });
        };

    }

    angular
        .module('blocChat')
        .controller('ModalAddRoomCtrl', ['Room', '$uibModal', ModalAddRoomCtrl]);
})();
