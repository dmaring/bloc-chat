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
        var rooms = $firebaseArray(ref);
        /**
        * @desc property that holds the array of all the rooms within Room object
        * @type {array}
        */
        Room.all = rooms;

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
