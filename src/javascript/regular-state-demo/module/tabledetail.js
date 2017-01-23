define([
    "base/base",
    "rgl!./tabledetail.html"],
function (Base, tpl) {

    return Base.extend({
        template: tpl,

        config: function () {
            this.supr();
        },

        enter: function(_option) {
            this.supr(_option);
            this.data.selectedId = _option.param.id;
        }

    })
})