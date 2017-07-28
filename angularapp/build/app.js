"use strict";var appConfig=window.appConfig||{};appConfig.debugState=!1,appConfig.debugStyle="font-weight: bold; color: #00f;",appConfig.debugStyle_green="font-weight: bold; font-style:italic; color: #46C246;",appConfig.debugStyle_red="font-weight: bold; color: #ed1c24;",appConfig.debugStyle_warning="background-color:yellow",appConfig.debugStyle_success="background-color:green; font-weight:bold; color:#fff;",appConfig.debugStyle_error="background-color:#ed1c24; font-weight:bold; color:#fff;",window.appConfig=appConfig;
"use strict";$(function(){angular.bootstrap(document,["app"])});
"use strict";angular.module("app",["ngSanitize","ui.router","app.layout","app.home"]).constant("APP_CONFIG",window.appConfig).run(["$rootScope","$state","$stateParams",function(a,t,o){a.$state=t,a.$stateParams=o}]);
"use strict";angular.module("app.home",["ui.router"]).config(["$stateProvider",function(e){e.state("app.home",{url:"/home",data:{title:"Blank"},views:{"content@app":{templateUrl:"app/home/views/home.html",controller:"HomeController"}}})}]);
"use strict";angular.module("app.layout",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(t,e){t.state("app",{"abstract":!0,views:{root:{templateUrl:"app/layout/layout.tpl.html"}}}),e.otherwise("/home")}]);
"use strict";angular.module("app.home").controller("HomeController",["$scope",function(o){}]);
angular.module("app").run(["$templateCache",function(a){a.put("app/layout/layout.tpl.html",'<!-- MAIN PANEL -->\n<div id="main" role="main">\n\t<p>AngularJS</p>\n\n    <div data-smart-router-animation-wrap="content content@app" data-wrap-for="#content">\n        <div data-ui-view="content" data-autoscroll="false"></div>\n    </div>\n\n</div>\n<!-- END MAIN PANEL -->\n\n\n\n'),a.put("app/layout/partials/footer.tpl.html",'<div class="page-footer">\n    <div class="row">\n\n        <div class="col-xs-6 col-sm-6 text-right hidden-xs">\n            \n        </div>\n    </div>\n</div>'),a.put("app/layout/partials/header.tpl.html",'<header id="header">\n\n\n\n</header>'),a.put("app/layout/partials/navigation.tpl.html",'<aside id="left-panel">\r\n\r\n\r\n\r\n</aside>'),a.put("app/layout/partials/sub-header.tpl.html",'<div class="col-xs-12 col-sm-5 col-md-5 col-lg-8">\n    \n</div>\n'),a.put("app/layout/partials/voice-commands.tpl.html",'<div class="modal-body">\n\n\t\n\n</div>\n')}]);