// Renders each individual "Cherry"

var CherryView = Backbone.View.extend({
    className: "cherry",
    tagName: "div",

    initialize: function(options) {
        this.model = options.model;
        this.x = options.x;
        this.y = options.y;
        this.render();
    },

    render: function() {
        this.$el.css("left", this.x);
        this.$el.css("top", this.y);

        $("#app").append(this.$el.html(_.template(tpl.get('cherry'), this.model.toJSON())));
    }
});
