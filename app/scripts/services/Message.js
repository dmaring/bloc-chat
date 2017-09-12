(function() {
    function Message($rootScope, $firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

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

        Message.send = function(newMessage) {
            // create message object and save to database
            var newMessageObject = {};
            // get active roomID from $rootScope
            var activeRoom = $rootScope.activeRoom.$id;
            // get active user from cookie
            var activeUser = $rootScope.activeUser;
            // get the time-sent
            var timeSent = new Date().getTime();
            // insert variables into newMessageObject
            newMessageObject = {'username': activeUser,
                                'content': newMessage,
                                'roomID': activeRoom,
                                'sentAt': timeSent,
                            };
            messages.$add(newMessageObject);
            console.log("added message: ", newMessageObject);

        };


        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$rootScope', '$firebaseArray', Message]);
})()
