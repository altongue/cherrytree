var tpl = {
    templates: {},

    loadTemplates: function(names, callback) {

        var that = this;

        var loadTemplate = function (index) {
            var name = names[index];
            $.get('/templates/' + name + '.ejs', function (data) {
                that.templates[name] = data;
                index++;
                if (index < names.length) {
                    loadTemplate(index);
                } else {
                    callback();
                }
            });
        }

        loadTemplate(0);
    },

    get: function (name) {
        return this.templates[name];
    }
};

var renderTemplates = function(templates, params, callback) {
    tpl.loadTemplates(templates, function() {
        templates.forEach(function(template, index) {
            $("#" + template).append(_.template(tpl.get(template), params[index]));
        });

        callback();
    });
};
