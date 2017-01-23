define([
    "base/base",
    "rgl!./test2.html"],
function (Base, tpl) {

    return Base.extend({
        template: tpl,

        config: function () {
            this.defaults({
                
            });
        }

    })
})