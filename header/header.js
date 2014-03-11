!function (exports) {
    Vue.component('vd-ello', {
        template: 'hello world',
        data: {
            title: '首页'
        },
        created: function () {
            console.log('header instance');
        }
    });

}(window);