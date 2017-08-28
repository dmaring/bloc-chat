(function() {
    function HomeCtrl() {
        this.myMessage = "Drakaris!";
    }

    angular
        // tie controller to project module
        .module('blocChat')
        // name controller, add dependancies, call callback function last in list
        .controller('HomeCtrl', [HomeCtrl]);
})();
