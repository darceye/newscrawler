var Crawler = require("crawler");
function cb(e,r,d){
    console.log(r, r.options)
    d()
}
var listCrawler = new Crawler({
    callback: cb
})

listCrawler.queue({uri: 'http://m.ftchinese.com/search/?keys=%E6%AF%94%E7%89%B9%E5%B8%81&type=default&category=', 
    op1: 1,
    op2: {x:2,y:3}
})