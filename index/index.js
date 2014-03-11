!function (exports) {
    'use strict;'

    var Index = Vue.extend({

        el: '#search',

        paramAttributes: ['message'],
        
        data: {
            searchInput: '',
            histories: [],
            boards: ['风云榜1', '风云榜2'],
            suggetions: [],
            historyPanelStatus: 'hide'
        },
        created: function () {
            console.log(this.message);
            this.fetchHistories();
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

    exports.Index = Index;

}(window);