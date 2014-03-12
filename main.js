!function () {
    page('*', function (ctx, next) {
        console.log(ctx);
        next();
    });
    page('/index.html', function (ctx) {
        console.log('!!!!!!!!!!!!!!');
       new Index(); 
    });
    page();
}();