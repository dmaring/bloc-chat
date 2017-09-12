(function() {
    function ModalUserInstanceCtrl($uibModalInstance) {
        var $ctrl = this;
        $ctrl.userName = undefined;

        $ctrl.ok = function () {
            console.log($ctrl.userName);
            $uibModalInstance.close($ctrl.userName);
        };
    }

  angular
    .module('blocChat')
    .controller('ModalUserInstanceCtrl', ['$uibModalInstance', ModalUserInstanceCtrl]);

})();
