!function (global) {
    // page('*', function (ctx, next) {
    //     console.log(ctx);
    //     next();
    // });
    // page('/index.html', function (ctx) {
    //     console.log('!!!!!!!!!!!!!!');
    //    new Index(); 
    // });
    // page();
    Router({
        '/index': function () {
            global.index();
        },
        '/search': function () {
            global.search();
        }
    }).init();
}(window);