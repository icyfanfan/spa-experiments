define(["regularjs", "rgl!./nav.html"], function (Regular, tpl) {


    return Regular.extend({
        template: tpl,
        name: 'mnav',
        config: function (data) {
            // debugger;
            this.supr(data);
        }

    })
})