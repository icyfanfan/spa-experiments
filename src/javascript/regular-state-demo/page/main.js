define([
    "base/base",
    "rgl!./main.html"],
function (Base, tpl) {

    return Base.extend({
        template: tpl,

        config: function () {
            this.defaults({
                title: '单页DEMO',
                subTitle: 'Based',
                depends: [
                    { name: 'stateman', ver: '0.2.0' },
                    { name: 'regularjs', ver: '0.4.3' },
                    { name: 'regular-state', ver: '0.2.1' }
                ]
            });
        }
        

    })
})