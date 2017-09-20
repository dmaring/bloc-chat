(function() {
    function ModalUserInstanceCtrl($uibModalInstance) {
        var $ctrl = this;
        $ctrl.userName = undefined;

        $ctrl.ok = function () {
            console.log($ctrl.userName, $ctrl.userEmail, $ctrl.userPassword);
            $uibModalInstance.close($ctrl.userName, $ctrl.userEmail, $ctrl.userPassword);
        };
    }

  angular
    .module('blocChat')
    .controller('ModalUserInstanceCtrl', ['$uibModalInstance', ModalUserInstanceCtrl]);

})();
