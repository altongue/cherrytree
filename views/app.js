var App = Backbone.View.extend({
    el: $("#app")[0],

    events: {
        'click': 'newCherry'
    },

    newCherry: function(e) {
        new CherryView({
            model: new Cherry({}),
            x: e.pageX,
            y: e.pageY
        });
    }
});
