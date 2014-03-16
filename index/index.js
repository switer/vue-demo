!function (exports) {
    'use strict;'

    function index () {
        
        return new Vue({

            el: '#index',
            
            data: {
                notInit: true,
                title: 'index home page'
            },
            created: function () {
                this.notInit = false;
            },
            methods: {

            }
            
        });
    }

    exports.index = index;

}(window);