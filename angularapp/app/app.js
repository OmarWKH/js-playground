'use strict';

angular.module('app', [
    'ngSanitize',
    'ui.router',

    // App
    'app.layout',
    'app.home'
])
.constant('APP_CONFIG', window.appConfig)

.run(function ($rootScope
    , $state, $stateParams
    ) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    // editableOptions.theme = 'bs3';

});


