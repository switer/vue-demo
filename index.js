!function (exports) {
    'use strict;'

    var index = new Vue({

        el: '#search',

        data: {
            searchInput: '',
            histories: [],
            boards: ['风云榜1', '风云榜2'],
            suggetions: [],
            historyPanelStatus: 'hide'
        },
        directives: {

        },
        created: function () {
            this.fetchHistories();
        },
        computed: {
        },
        methods: {
            clearHistories: function () {
                this.historyPanelStatus = 'hide';
            },
            fetchHistories: function () {
                var that = this;
                setTimeout( function() {
                    console.log('loaded ~~~~!');
                    that.histories = [{name: '爸爸去哪儿'}, {name: '我是歌手'}];
                    that.historyPanelStatus = '';
                }, 2000);
            },
            fetchSuggetion: function () {
                var that = this;
                setTimeout( function() {
                    that.suggetions = [
                        {name: '爸爸去哪儿' + that.searchInput}, 
                        {name: '我是歌手' + that.searchInput}];
                }, 10);
            }
        }
        
    });

    exports.index = index;

}(window);