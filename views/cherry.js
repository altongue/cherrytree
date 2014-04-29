// Renders each individual "Cherry"

var cherryView = Backbone.View.extend({
    initialize: function(options) {
        this.x = options.x;
        this.y = options.y;
    },

    render: function() {
        this.$el.css("left", this.x);
        this.$el.css("top", this.y);
    }
});
