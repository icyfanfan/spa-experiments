define([
    "base",
    "rgl!./tablelist.html"],
    function (Base, tpl) {

        return Base.extend({
            template: tpl,

            config: function () {
                this.defaults({

                    thList: [
                        { title: 'id' },
                        { title: 'name' },
                        { title: 'description' },
                    ],
                    tbList: [
                        { id: '1', name: '开发一', description: '测试' },
                        { id: '2', name: '开发二', description: '测试' },
                        { id: '3', name: '开发三', description: '测试' }
                    ]

                })
            },

            onLink: function (state,tb) {
                this.$state.go(state,{param:{id:tb.id}});
            }


        })
    })