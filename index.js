var crawler = require('./crawler.js')

var db = new PouchDB('newscrawler')
PouchDB.debug.enable('*')


var vm = new Vue({
    el: "#app",
    data: {
        test: 'ok'
    },
    methods:{

    }
})