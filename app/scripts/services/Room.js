(function() {
    function Room($rootScope, $firebaseArray) {
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
            roomsList.$add(room).then(function(ref) {
                var id = ref.key;
                console.log("added record with id " + id);
                console.log(roomsList.$indexFor(id)); // returns location in the array
            });
        };
        /**
        * @function Room.setRoom
        * @desc Set the active room to be displayed
        * @param {object} room
        */
        Room.setRoom = function(room) {
            // set active room
            // Room.activeRoom = room
            $rootScope.activeRoom = room;
            console.log("New room set to: ", $rootScope.activeRoom);
            console.log("New room id: ", $rootScope.activeRoom.$id);
        };

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$rootScope', '$firebaseArray', Room]);
})();
