var Home = Backbone.View.extend({
    initialize: function(options) {
        this.el = options.el;
        this.render();
    },

    render: function() {
        this.$el.html(_.template(tpl.get('welcome'), {}));
    }
});