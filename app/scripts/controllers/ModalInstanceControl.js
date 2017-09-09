(function() {
    function ModalInstanceCtrl($uibModalInstance) {
        var $ctrl = this;
        $ctrl.roomName = undefined;

        $ctrl.ok = function () {
            console.log($ctrl.roomName);
          $uibModalInstance.close($ctrl.roomName);
        };

        $ctrl.cancel = function () {
          $uibModalInstance.dismiss('cancel');
      };
  }

  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);

})();
