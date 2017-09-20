(function() {
    function BlocChatAuthenticate($rootScope, $uibModal, Auth) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            var modalInstance = $uibModal.open({
            templateUrl: '/templates/modal_add_user.html',
            controller: 'ModalUserInstanceCtrl',
            controllerAs: '$ctrl',
            backdrop: 'static',
            keyboard: false
            });

            modalInstance.result.then(function (userName, userEmail, userPassword) {
                Auth.put('blocChatCurrentUser', userName);
                $rootScope.activeUser = userName;
                console.log("$rootScope.activeUser is ", $rootScope.activeUser)
                });
        }
        $rootScope.activeUser = currentUser;
        console.log("$rootScope.activeUser is: ", $rootScope.activeUser);
    }

    angular
    .module('blocChat')
    .run(['$rootScope', '$uibModal', 'Auth', BlocChatCookies]);
})();
