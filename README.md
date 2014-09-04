sw-alerts
=========

Alerts support for AngularJS

Installation
------------
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
```
// Open an alert
$rootScope('alerts-add', { type: 'danger', message: 'Lorem ipsum', 'dismissible': true });

// Close all alerts
$rootScope('alerts-clear');
```
