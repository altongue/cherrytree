var CT = {
    loadTemplates: function(callback) {
        var templates = ['cherry', 'welcome'];
        tpl.loadTemplates(templates, callback);
    },

    goHome: function() {
        this.currentPage = new Home({el: $("#app")[0]});
    },

    app: new App()
    
};

CT.loadTemplates(CT.goHome);
console.log(CT.app);
