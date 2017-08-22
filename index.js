var db = new PouchDB('newscrawler')
PouchDB.debug.enable('*')

window.bus = new Vue()

var vm = new Vue({
    el: "#app",
    data: {
        test: 'ok'
    },
    methods:{

    }
})

// var ft = require('./sites/ft.js')
var ft = require('./sites/ftchinese.js')