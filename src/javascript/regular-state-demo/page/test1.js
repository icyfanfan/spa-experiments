define([
    "base",
    "rgl!./test1.html"],
function (Base, tpl) {

    return Base.extend({
        template: tpl,

        config: function () {
            this.defaults({
            
            });
            this.supr();
        }

    })
})