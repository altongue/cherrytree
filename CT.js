var CT = {
    loadTemplates: function(callback) {
        var templates = ['cherry', 'welcome', 'editTree'];
        tpl.loadTemplates(templates, callback);
    }
};

CT.loadTemplates(function() {
    CT.app = new App();

    CT.router = new Router();

    CT.router.on("route:messRoute", function() {
        CT.app.messAround();
    });

    CT.router.on("route:defaultRoute", function() {
        CT.app.goHome();
    });

    CT.router.on("route:loginRoute", function() {
        CT.app.goLogin();
    });

    Backbone.history.start();
});
