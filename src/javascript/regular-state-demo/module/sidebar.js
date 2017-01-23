define([
	"base/base",
	"rgl!./sidebar.html"],
function (Base, tpl) {


	return Base.extend({
		template: tpl,
		name: 'sidebar',
		config: function () {
			this.defaults({
				menus: [
					{ title: '首页', hash: '#/index/' },
					{ title: '页面一', hash: '#/test1/' },
					{ title: '页面二', hash: '#/test2/' },
				]
			});
			this.data.curHash = (location.hash === '#/')?'#/index/':location.hash;
			
			// debugger;
		},
		active: function (_hash) {
			var _menus = this.data.menus;
			_menus.forEach(function(menu) {
				if(menu.hash === _hash){
					this.data.curHash = _hash;
				}
			}, this);
			// debugger;
		}
	})
})