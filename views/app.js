// This is the main view for the app.
// It'll house all the functionality that is consistent across
// all pages, e.g. navigation
var App = Backbone.View.extend({
    el: $("#app")[0],

    events: {
        'click': 'newCherry'
    },

    initialize: function() {
        
    },

    messAround: function() {
        this.currentPage = new EditTree({el: this.el});
    },

    goHome: function() {
        this.currentPage = new Home({el: this.el});
    },

    goLogin: function() {
        this.currentPage = new Login({el: this.el});
    }
});
