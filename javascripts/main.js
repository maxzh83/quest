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

        $scope.resolved = {
            q1: false,
            q2: false,
            q3: false,
            q4: false,
            q5: false,
            q6: false
        };


        $scope.check = function(param, val){
            if (param == val) {
                WizardHandler.wizard().next();
                return true;
            } else {
                alert("Неверный код, внимательней будь!");
                return false;
            }
        };

        $scope.pass1 = function () {
            $scope.resolved.q1 = $scope.check($scope.pass.pass1, '489');
            console.log($scope.resolved.q1);
        };

        $scope.pass2 = function () {
            $scope.resolved.q2 = $scope.check($scope.pass.pass2, '44');
        };

        $scope.pass3 = function () {
            $scope.resolved.q3 = $scope.check($scope.pass.pass3, '165');
        };

        $scope.pass4 = function () {
            $scope.resolved.q4 = $scope.check($scope.pass.pass4, '52');
        };

        $scope.pass5 = function () {
            if (($scope.pass.pass5 > 300) && ($scope.pass.pass5 < 350)) {
                WizardHandler.wizard().next();
                $scope.resolved.q5 = true;
            } else {
                alert("Неверный код, внимательней будь!");
                $scope.resolved.q5 = false;
            }
        };

        $scope.pass6 = function () {
            $scope.resolved.q6 = $scope.check($scope.pass.pass6, 'King');
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