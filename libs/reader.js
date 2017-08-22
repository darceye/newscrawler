var Crawler = require("crawler");

var headers =  {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Encoding':'gzip, deflate',
    'Accept-Language':'en,zh-CN;q=0.8,zh;q=0.6',
    'Cache-Control':'max-age=0',
    'Connection':'keep-alive',
    // 'Host':'news.baidu.com',
    // 'Referer':'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=%E7%83%AD%E7%82%B9%E6%96%B0%E9%97%BB&rsv_pq=930d26b30001c4b2&rsv_t=a073JJZ3kjDq%2BJlLpRBGplNrw5NtOSydn5%2Fj45I4FCgpwkNauR1S0%2FThdsI&rqlang=cn&rsv_enter=1&rsv_sug3=7&rsv_sug1=6&rsv_sug7=100&sug=%25E7%2583%25AD%25E7%2582%25B9%25E6%2596%25B0%25E9%2597%25BB&rsv_n=1',
    'Upgrade-Insecure-Requests':'1',
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36'
}

var listCrawler = new Crawler({
    maxConnections : 10,
    // headers: headers,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            window.res = res
            var list = readList(res.$, res.options.op.listOps);
            if(res.options.op.isReadContent){
                for(var i = 0 ; i < list.length; i+=1){
                    articleCrawler.queue({uri: list[i].url, op: res.options.op, article: list[i]})
                }   
            }else{
                console.table(list)
            }
        }
        done();
    }
});

var articleCrawler = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var article = readArticle(res.options.article, res.$, res.options.op.ArticleOps);
            save(article)
            stat(article)
        }
        done();
    }

})

function search(uri, op){
    listCrawler.queue({uri, op})
}

function readList($, options){
    var list = []
    var blocks = options.getBlocks($)
    for(var i = 0; i < blocks.length; i+=1){
        var $block = $(blocks[i])
        var title = options.getTitle($block)
        var url = options.getUrl($block)
        var time = options.getTime($block)
        var summary = options.getSummary($block)
        list.push({
            title, url, time, summary
        })

    }
    return list
}

// to complete article
function readArticle(article, $, options){
    // var title = options.getTitle()
    article.time = options.getTime($)
    article.content = options.getContent($) 
    return article
}

function save(article){
    console.log('saved', article)
}

function stat(article){
    console.log('stated')

}

module.exports = {search}