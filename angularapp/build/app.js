'use strict';



var appConfig = window.appConfig || {};


/*
* DEBUGGING MODE
* debugState = true; will spit all debuging message inside browser console.
* The colors are best displayed in chrome browser.
*/


appConfig.debugState = false;	
appConfig.debugStyle = 'font-weight: bold; color: #00f;';
appConfig.debugStyle_green = 'font-weight: bold; font-style:italic; color: #46C246;';
appConfig.debugStyle_red = 'font-weight: bold; color: #ed1c24;';
appConfig.debugStyle_warning = 'background-color:yellow';
appConfig.debugStyle_success = 'background-color:green; font-weight:bold; color:#fff;';
appConfig.debugStyle_error = 'background-color:#ed1c24; font-weight:bold; color:#fff;';

window.appConfig = appConfig;

/*
* END APP.appConfig
*/
'use strict';

$(function () {

    angular.bootstrap(document, ['app']);
 
});

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



"use strict";


angular.module('app.home', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.home', {
            url: '/home',
            data: {
                title: 'Blank'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/home/views/home.html',
                    controller: 'HomeController'
                }
            }
        })
});

"use strict";


angular.module('app.layout', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('app', {
            abstract: true,
            views: {
                root: {
                    templateUrl: 'app/layout/layout.tpl.html'
                }
            }
        });
    $urlRouterProvider.otherwise('/home');

})


'use strict';

angular.module('app.home').controller('HomeController', function ($scope) {


});
angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("app/layout/layout.tpl.html","<!-- MAIN PANEL -->\n<div id=\"main\" role=\"main\">\n\n\n    <div data-smart-router-animation-wrap=\"content content@app\" data-wrap-for=\"#content\">\n        <div data-ui-view=\"content\" data-autoscroll=\"false\"></div>\n    </div>\n\n</div>\n<!-- END MAIN PANEL -->\n\n\n\n");
$templateCache.put("app/layout/partials/footer.tpl.html","<div class=\"page-footer\">\n    <div class=\"row\">\n\n        <div class=\"col-xs-6 col-sm-6 text-right hidden-xs\">\n            \n        </div>\n    </div>\n</div>");
$templateCache.put("app/layout/partials/header.tpl.html","<header id=\"header\">\n\n\n\n</header>");
$templateCache.put("app/layout/partials/navigation.tpl.html","<aside id=\"left-panel\">\r\n\r\n\r\n\r\n</aside>");
$templateCache.put("app/layout/partials/sub-header.tpl.html","<div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-8\">\n    \n</div>\n");
$templateCache.put("app/layout/partials/voice-commands.tpl.html","<div class=\"modal-body\">\n\n	\n\n</div>\n");}]);