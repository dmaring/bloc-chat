(function() {
    function Message($firebaseArray, $cookies) {
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
            var roomID = activeRoom.$id;

            console.log(">>>", roomID);
            // console.log("activeRoom.$id: ", activeRoom.$id)
            var roomMessagesRef = ref.orderByChild("roomID").equalTo(roomID);
            var roomMessagesArray = $firebaseArray(roomMessagesRef);
            // console.log(roomMessagesArray);
            return roomMessagesArray;
        };

        Message.send = function(newMessage, activeUser, activeRoom) {
            // get active user from cookie
            // var activeUser = $cookies.get('blocChatCurrentUser');
            // get the time-sent
            var timeSent = new Date().getTime();
            // insert variables into newMessageObject
            newMessageObject = {'username': activeUser,
                                'content': newMessage,
                                'roomID': activeRoom.$id,
                                'sentAt': timeSent,
                            };
            messages.$add(newMessageObject);
            console.log("added message: ", newMessageObject);

        };


        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})()
