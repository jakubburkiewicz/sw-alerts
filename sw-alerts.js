'use strict';

/**
 * sw-alerts
 * https://github.com/jakubburkiewicz/sw-alerts
 *
 * Version: 0.0.1 - 2014.09.04
 * License: MIT
 */

angular.module('sw.alerts', []).

  /* Alerts constants */
  constant('ALERTS', {
    add: 'alerts-add',
    clear: 'alerts-clear'
  }). // /end Alerts constants

  /* Alert Service */
  service('AlertService', ['$timeout', function() {
    return {

      /**
       * Add new alert
       * @param type (Sting)
       * @param message (String)
       * @returns void
       */
      add: function(type, message, dismissible, single) {
        if(this.alerts === undefined || single !== undefined)
          this.alerts = [];

        this.alerts.push({
          type: type,
          message: message,
          dismissible: dismissible
        });

        if(dismissible == 'auto') {
          var alertIndex = this.alerts.length - 1;
          var scope = this;

          $timeout(function() {
            scope.close(alertIndex);
          }, 2000);
        }
      }, // /end add

      /**
       * Remove an alert
       * @param index (Number)
       * @returns void
       */
      remove: function(index) {
        this.alerts.splice(index, 1);
      }, // /end remove

      /**
       * Remove all alerts
       * @params void
       * @returns void
       */
      clear: function() {
        delete this.alerts;
      } // /end clear

    };
  }]). // /end Alert Service


  /* Alert Controller */
  controller('AlertController', ['$scope', '$rootScope', '$location', 'AlertService', 'ALERTS', function($scope, $rootScope, $location, AlertService, ALERTS) {

    /**
     * Open alert
     * <> Alias to AlertService.add
     */
    $scope.open = AlertService.add;

    /**
     * Close alert
     * <> Alias to AlertService.remove
     */
    $scope.close = AlertService.remove;

    /**
     * Close all alerts
     * <> Alias to AlertService.clear
     */
    $scope.closeAll = AlertService.clear;

    /**
     * Add alert event handling
     */
    $rootScope.$on('alerts-add', function(event, args) {
      $scope.open(args.type, args.message, args.dismissible, $scope.single);
    }); // /end alerts-add

    /**
     * Clear alerts event handling
     */
    $rootScope.$on('alerts-clear', function(event) {
      $scope.closeAll();
    }); // /end alerts-clear

    /**
     * Clear alerts set on change router state
     */
    $rootScope.$on('$locationChangeStart', function() {
      if(AlertService.alerts && AlertService.alerts.length > 0)
        $scope.closeAll();
    }); // /end $locationChangeStart

  }]). // /end Alert Controller


  /* sw-alerts directive */
  directive('swAlerts', function() {
    return {

      restrict: 'E',
      replace: true,
      template: '<div class="alerts" ng-if="alerts"><sw-alert ng-repeat="alert in alerts"></sw-alert></div>',
      link: function(scope, element, attrs) {
        scope.single = attrs.single;
      }

    };
  }). // /end sw-alerts directive

  /* sw-alert directive */
  directive('swAlert', function() {
    return {

      restrict: 'E',
      replace: true,
      template: '<div class="alert" ng-class="{\'alert-success\': alert.type == \'success\', \'alert-info\': alert.type == \'info\', \'alert-warning\': alert.type == \'warning\', \'alert-danger\': alert.type == \'danger\', \'alert-dismissible\': alert.dismissible}" role="alert"><button type="button" ng-show="alert.dismissible" class="close" ng-click="close($index)"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><div>{{alert.message}}</div></div>'

    };
  }); // /end sw-alert directive
