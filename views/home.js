var Home = Backbone.View.extend({
    events: {

    },

    initialize: function(options) {
        this.el = options.el;
        this.render();
    },

    render: function() {
        this.$el.html(_.template(tpl.get('welcome'), {
            navLinks: [
                {title: 'Login', url:"#/login"},
                {title: 'Mess Around', url:"#/mess"}
            ]
        }));
    }
});