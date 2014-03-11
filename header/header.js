!function (exports) {
    Vue.component('vd-header', {
        template: '#tpl-header',
        data: {
            title: '首页'
        },
        created: function () {
            console.log('header instance');
        }
    });

}(window);