(function() {
    function Message($rootScope, $firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        // var activeRoom = $rootScope.activeRoom;
        // var activeMessages = $rootScope.activeMessages;


        /**
        * @function Message.getByRoomId
        * @desc Takes a room object and sets $rootScope.activeMessages by room
        * @param {object} room
        * @return array of messages based on the roomId
        */
        Message.getByRoomId = function(activeRoom) {
            // console.log("Message.getByRoomID argument passed: ", activeRoom);
            var roomId = activeRoom.$id;
            // console.log("activeRoom.$id: ", activeRoom.$id)
            var roomMessagesRef = ref.orderByChild("roomID").equalTo(roomId);
            var roomMessagesArray = $firebaseArray(roomMessagesRef);
            // console.log(roomMessagesArray);
            $rootScope.activeMessages = roomMessagesArray;
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$rootScope', '$firebaseArray', Message]);
})()
