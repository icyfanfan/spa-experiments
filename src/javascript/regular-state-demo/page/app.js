define([
	"base/base",
	"module/nav",
	"module/sidebar",
	"rgl!./app.html"],
function (Base, HeadNav, SideBar, tpl) {

	return Base.extend({
		template: tpl,

		config: function () {
			// this.supr(data);
		}

	})
})