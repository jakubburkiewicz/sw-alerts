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
// Open an alert (type, message, dismissible, single)
open('danger', 'Lorem ipsum', true, true);
open('success', 'Lorem ipsum', 'auto', false);

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
$rootScope.$broadcast(ALERTS.add, { type: 'success', message: 'Lorem ipsum', 'dismissible': 'auto' });

// Close all alerts
$rootScope.$broadcast(ALERTS.clear);
```
