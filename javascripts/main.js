/**
 * Created by Maxim on 25.12.2016.
 */
angular.module('wizard-sample', ['mgo-angular-wizard'])
    .controller('WizardCtrl', function($scope, WizardHandler) {

        $scope.pass = {pass1 : '123'};

        console.log("Started");

        $scope.pass1 = function() {
            if ($scope.pass.pass1 == '124'){
                WizardHandler.wizard().next();
            } else{
                alert("Неверный код!")
            }
        };

        $scope.finished = function() {
            alert("Wizard finished :)");
        };

        $scope.logStep = function() {
            console.log("Step continued");
        };

        $scope.goBack = function() {
            WizardHandler.wizard().goTo(0);
        }
    });