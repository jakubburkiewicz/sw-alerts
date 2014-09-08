sw-alerts
=========

Alerts support for AngularJS

Installation
------------
```
bower install sw-alerts --save
```
```
angular.module('myModule', ['sw.alerts']);
```

Directives
----------
Just additionally. You can use your own elements/directives with ng-repeat or Angular UI Bootstrap `alert` as well
```
<sw-alerts></sw-alerts>

<sw-alert></sw-alert>
```

Directive attributes
--------------------
```
// 'single' allows to show only one alert a a time
<sw-alerts single></sw-alerts>
```

Controller methods
------------------
```
// Open an alert (type, message, dismissible)
open('danger', 'Lorem ipsum', true);

// Close an alert
close(index);

// Close all alerts
closeAll();
```

Controller events
-----------------
```
// Open an alert
$rootScope.$broadcast(ALERTS.add, { type: 'danger', message: 'Lorem ipsum', 'dismissible': true });

// Close all alerts
$rootScope.$broadcast(ALERTS.clear);
```
