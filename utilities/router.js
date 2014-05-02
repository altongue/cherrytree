var Router = Backbone.Router.extend({
    routes: {
        "mess": "messRoute",
        "login": "loginRoute",
        "": "defaultRoute"
    }
});
