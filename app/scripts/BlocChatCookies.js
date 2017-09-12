(function() {
    function BlocChatCookies($cookies, $uibModal) {
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
                });
        }
    }

    angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
