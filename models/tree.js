// Trees act as collections, but do more than simple collections do

var Tree = Backbone.Model.extend({
    defaults: {
        cherries: []
    },
    initialize: function(options) {
        this.cherries = options.models;
    }
});
