require.config({
    baseUrl: "/src/javascript/regular-state-demo/",
    paths: {
        'rgl': '/lib/requirejs-regular/rgl',
        'regularjs': '/lib/regularjs/dist/regular',
        'restate': '/lib/regular-state/restate',
        'stateman': '/lib/stateman/stateman',
        'page': 'page',
        'module': 'module',
        'component': 'component',
        'base': 'base',
    },
    rgl: {
      BEGIN: '{',
      END: '}'
    }
});

define([
    'restate',
    'regularjs',
    'page/app',
    'page/main',
    'page/test1',
    'page/test2',
    'module/tablelist',
    'module/tabledetail',
    'module/tableedit',
], function(
    restate,
    Regular,
    App,
    Index,
    Test1,
    Test2,
    TableList,
    TableDetail,
    TableEdit
){
    // Start Stateman
    var stateman = restate({
        view: document.body,
        Component: Regular
    });
    try{
      var username = localStorage.getItem('username');
      if(username) stateman.user = {name: username, id: -1}
    }catch(e){}
   
    // Router
    stateman

    .state('app',App, '')
    // 首页
    .state('app.index', Index, {'url': ''})
    // 测试页面一
    .state('app.test1', Test1)
    // 测试页面一 table列表
    .state('app.test1.list', TableList, {url:''})
    // 测试页面一 table详情
    .state('app.test1.detail', TableDetail, {url:':id/detail'})
    // 测试页面一 table修改
    .state('app.test1.edit', TableEdit, {url:':id/edit'})
    // 测试页面二
    .state('app.test2', Test2)
    
    .on('notfound', function(){
        this.go('app.index', {replace: true})
    })
    .start({html5: false, prefix: ''});

    window.Regular = Regular;
});