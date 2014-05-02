var EditTree = Backbone.View.extend({
    events: {
        "click": "newCherry"
    },

    initialize: function(options) {
        this.el = options.el;
        this.render();
    },

    render: function() {
        this.$el.html(_.template(tpl.get('editTree'), {
            treeID: 1,
            title: "Edit Tree"
        }));
    },

    newCherry: function(e) {
        new CherryView({
            model: new Cherry({}),
            x: e.pageX,
            y: e.pageY
        });
    }
})
