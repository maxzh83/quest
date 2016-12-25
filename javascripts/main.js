/**
 * Created by Maxim on 25.12.2016.
 */
angular.module('wizard-sample', ['mgo-angular-wizard'])
    .controller('WizardCtrl', function ($scope, WizardHandler) {

        $scope.pass = {
            pass1: '',
            pass2: '',
            pass3: '',
            pass4: '',
            pass5: '',
            pass6: ''

        };


        $scope.check = function(param, val ){
            if (param == val) {
                WizardHandler.wizard().next();
            } else {
                alert("Неверный код, внимательней будь!")
            }
        };

        $scope.pass1 = function () {
            $scope.check($scope.pass.pass1, '489');
        };

        $scope.pass2 = function () {
            $scope.check($scope.pass.pass2, '44');
        };

        $scope.finished = function () {
            alert("Wizard finished :)");
        };

        $scope.logStep = function () {
            console.log("Step continued");
        };

        $scope.goBack = function () {
            WizardHandler.wizard().goTo(0);
        }
    });