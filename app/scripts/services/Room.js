(function() {
    function Room($firebaseArray) {
        /**
        * @desc Global object to hold room properties
        * @type {object}
        */
        var Room = {};
        /**
        * @desc a reference to relative path in the database where
        * the rooms are stored
        * firebase.database.ref() references the root of the db
        * @type
        */
        var ref = firebase.database().ref().child("rooms");
        /**
        * @desc js array of data at the provided ref location
        * @type {array}
        */
        var roomsList = $firebaseArray(ref);

        var createNewRoom = function(roomName) {
            // find the new room number based on number of rooms
            var roomNumber = roomsList.length + 1;
            // concatenate roomNumber to "room"
            var roomKey = "room" + roomNumber;
            // create room object
            var newRoomObject = {roomKey: roomName};
            return newRoomObject;
        }
        /**
        * @desc Public property that holds the array of all the rooms within Room object
        * @type {array}
        */
        Room.all = roomsList;
        /**
        * @function Room.add
        * @desc abstracts firebase $add to add a room to the object
        * @param {object} room
        */
        Room.add = function(room) {
            var newRoom = createNewRoom(room)
            roomsList.$add(newRoom).then(function(ref) {
                var id = ref.key;
                console.log("added record with id " + id);
                console.log(roomsList.$indexFor(id)); // returns location in the array
            });
        }


        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
