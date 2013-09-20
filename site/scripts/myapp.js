var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var bs;
(function (bs) {
    /*
    
    This class only tells the routes what methods to call.
    
    */
    (function (routers) {
        var ProjectRouter = (function (_super) {
            __extends(ProjectRouter, _super);
            function ProjectRouter(options) {
                options.appRoutes = {
                    "": "analysisPage",
                    "about/": "aboutPage",
                    "analysis/": "analysisPage"
                };

                _super.call(this, options);
            }
            return ProjectRouter;
        })(Marionette.AppRouter);
        routers.ProjectRouter = ProjectRouter;
    })(bs.routers || (bs.routers = {}));
    var routers = bs.routers;
})(bs || (bs = {}));
var bs;
(function (bs) {
    /*
    
    MasterLayout
    L- ProjectLayout (Layout)
    
    */
    (function (layouts) {
        var ProjectLayout = (function (_super) {
            __extends(ProjectLayout, _super);
            function ProjectLayout(options) {
                options.template = "#project-template";

                var regionManager = new Marionette.RegionManager();
                this.regions = regionManager.addRegions({
                    projectContainer: "#project-container"
                });

                this.on("show", function (view) {
                    console.log('project layout rendered');
                });

                _super.call(this, options);
            }
            ProjectLayout.prototype.showAbout = function () {
                var item = new Backbone.Model();
                item.set("title", "about");

                var aboutLayout = new bs.layouts.AboutLayout({ model: item });
                this.regions.projectContainer.show(aboutLayout);

                console.log('about page rendered');
            };

            ProjectLayout.prototype.showAnalysis = function () {
                var item = new Backbone.Model();
                item.set("title", "analysis");

                var analysisLayout = new bs.layouts.AnalysisLayout({ model: item });
                this.regions.projectContainer.show(analysisLayout);

                console.log('analysis page rendered');
            };
            return ProjectLayout;
        })(Marionette.Layout);
        layouts.ProjectLayout = ProjectLayout;
    })(bs.layouts || (bs.layouts = {}));
    var layouts = bs.layouts;
})(bs || (bs = {}));
var bs;
(function (bs) {
    (function (views) {
        var HeaderView = (function (_super) {
            __extends(HeaderView, _super);
            function HeaderView(options) {
                options.template = "#header-template";

                _super.call(this, options);
            }
            return HeaderView;
        })(Marionette.ItemView);
        views.HeaderView = HeaderView;
    })(bs.views || (bs.views = {}));
    var views = bs.views;
})(bs || (bs = {}));
var bs;
(function (bs) {
    (function (views) {
        var FooterView = (function (_super) {
            __extends(FooterView, _super);
            function FooterView(options) {
                options.template = "#footer-template";

                _super.call(this, options);
            }
            return FooterView;
        })(Marionette.ItemView);
        views.FooterView = FooterView;
    })(bs.views || (bs.views = {}));
    var views = bs.views;
})(bs || (bs = {}));
var bs;
(function (bs) {
    /*
    
    Master layout is only responsible for header and footer.
    The main section is for another view to handle.
    
    */
    /// <reference path="../views/headerview.ts" />
    /// <reference path="../views/footerview.ts" />
    (function (layouts) {
        layouts.masterLayout;

        var MasterLayout = (function (_super) {
            __extends(MasterLayout, _super);
            function MasterLayout(options) {
                options.template = '#master-template';

                var regionManager = new Marionette.RegionManager();
                this.regions = regionManager.addRegions({
                    header: "#header",
                    main: "#main",
                    footer: "#footer"
                });

                this.on("show", function (view) {
                    console.log('master layout rendered');
                    this.showMasterLayout();
                });

                _super.call(this, options);
            }
            MasterLayout.prototype.showMasterLayout = function () {
                var headerView = new bs.views.HeaderView({});
                this.regions.header.show(headerView);

                var footerView = new bs.views.FooterView({});
                this.regions.footer.show(footerView);
            };
            return MasterLayout;
        })(Marionette.Layout);
        layouts.MasterLayout = MasterLayout;
    })(bs.layouts || (bs.layouts = {}));
    var layouts = bs.layouts;
})(bs || (bs = {}));
var bs;
(function (bs) {
    /*
    
    MasterLayout
    L- ProjectLayout (Layout)
    L- AboutLayout (Layout)
    L- AboutSubView (ItemView)
    
    */
    (function (views) {
        var AboutSubView = (function (_super) {
            __extends(AboutSubView, _super);
            function AboutSubView(options) {
                options.template = "#about-subview-template";

                _super.call(this, options);
            }
            return AboutSubView;
        })(Marionette.ItemView);
        views.AboutSubView = AboutSubView;
    })(bs.views || (bs.views = {}));
    var views = bs.views;
})(bs || (bs = {}));
var bs;
(function (bs) {
    /*
    
    MasterLayout
    L- Project Layout
    L- About Layout
    
    */
    /// <reference path="../views/aboutview.ts" />
    (function (layouts) {
        var AboutLayout = (function (_super) {
            __extends(AboutLayout, _super);
            function AboutLayout(options) {
                options.template = "#about-template";

                var regionManager = new Marionette.RegionManager();
                this.regions = regionManager.addRegions({
                    aboutSubView: ".subview"
                });

                this.on("show", function (view) {
                    var aboutSubviewView = new bs.views.AboutSubView({});
                    this.regions.aboutSubView.show(aboutSubviewView);
                });

                _super.call(this, options);
            }
            return AboutLayout;
        })(Marionette.Layout);
        layouts.AboutLayout = AboutLayout;
    })(bs.layouts || (bs.layouts = {}));
    var layouts = bs.layouts;
})(bs || (bs = {}));
var bs;
(function (bs) {
    /*
    
    MasterLayout
    L- ProjectLayout (Layout)
    L- AnalysisLayout (Layout)
    
    */
    (function (layouts) {
        var AnalysisLayout = (function (_super) {
            __extends(AnalysisLayout, _super);
            function AnalysisLayout(options) {
                options.template = "#analysis-template";

                _super.call(this, options);
            }
            return AnalysisLayout;
        })(Marionette.Layout);
        layouts.AnalysisLayout = AnalysisLayout;
    })(bs.layouts || (bs.layouts = {}));
    var layouts = bs.layouts;
})(bs || (bs = {}));
var bs;
(function (bs) {
    /*
    
    This is a js object with a list of function for the router to call.
    
    */
    /// <reference path="myapp.ts" />
    /// <reference path="layouts/projectlayout.ts" />
    /// <reference path="layouts/masterlayout.ts" />
    /// <reference path="layouts/aboutlayout.ts" />
    /// <reference path="layouts/analysislayout.ts" />
    (function (project) {
        project.projectController = {
            aboutPage: function () {
                var projectView = bs.layouts.masterLayout.regions.main.currentView;
                projectView.showAbout();
            },
            analysisPage: function () {
                var projectView = bs.layouts.masterLayout.regions.main.currentView;
                projectView.showAnalysis();
            },
            start: function () {
                // grab container id and render the master layout on it
                var regionManager = new Marionette.RegionManager();
                var regions = regionManager.addRegions({
                    container: "#container"
                });

                bs.layouts.masterLayout = new bs.layouts.MasterLayout({});
                regions.container.show(bs.layouts.masterLayout);

                // render the projects section inside the master layout's main section
                var projectLayout = new bs.layouts.ProjectLayout({});
                bs.layouts.masterLayout.regions.main.show(projectLayout);
            }
        };
    })(bs.project || (bs.project = {}));
    var project = bs.project;
})(bs || (bs = {}));
/// <reference path="lib/jquery/jquery.d.ts" />
/// <reference path="lib/underscore/underscore.d.ts" />
/// <reference path="lib/backbone/backbone.d.ts" />
/// <reference path="lib/underscore/underscore.d.ts" />
/// <reference path="lib/marionette/marionette.d.ts" />
/// <reference path="routers/projectrouter.ts" />
/// <reference path="projectcontroller.ts" />
var bs;
(function (bs) {
    bs.myApp;

    var MyApp = (function (_super) {
        __extends(MyApp, _super);
        function MyApp() {
            console.log('initialize');

            _super.call(this);
        }
        return MyApp;
    })(Marionette.Application);
    bs.MyApp = MyApp;
})(bs || (bs = {}));

bs.myApp = new bs.MyApp();

bs.myApp.addInitializer(function () {
    // Create a new router using a controller
    var appRouter = new bs.routers.ProjectRouter({ controller: bs.project.projectController });
    bs.project.projectController.start();

    Backbone.history.start();
});

bs.myApp.start();
