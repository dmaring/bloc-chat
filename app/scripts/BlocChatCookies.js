(function() {
    function BlocChatCookies($rootScope, $cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            var modalInstance = $uibModal.open({
            templateUrl: '/templates/modal_add_user.html',
            controller: 'ModalUserInstanceCtrl',
            controllerAs: '$ctrl',
            backdrop: 'static',
            keyboard: false
            });

            modalInstance.result.then(function (userName) {
                console.log("Adding user ", userName);
                $cookies.put('blocChatCurrentUser', userName);
                $rootScope.activeUser = userName;
                console.log("$rootScope.activeUser is ", $rootScope.activeUser)
                });
        }
        $rootScope.activeUser = currentUser;
    }

    angular
    .module('blocChat')
    .run(['$rootScope', '$cookies', '$uibModal', BlocChatCookies]);
})();
