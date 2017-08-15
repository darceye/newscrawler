var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'en,zh-CN;q=0.8,zh;q=0.6',
        'Cache-Control':'max-age=0',
        'Connection':'keep-alive',
        'Host':'news.baidu.com',
        // 'Referer':'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=%E7%83%AD%E7%82%B9%E6%96%B0%E9%97%BB&rsv_pq=930d26b30001c4b2&rsv_t=a073JJZ3kjDq%2BJlLpRBGplNrw5NtOSydn5%2Fj45I4FCgpwkNauR1S0%2FThdsI&rqlang=cn&rsv_enter=1&rsv_sug3=7&rsv_sug1=6&rsv_sug7=100&sug=%25E7%2583%25AD%25E7%2582%25B9%25E6%2596%25B0%25E9%2597%25BB&rsv_n=1',
        'Upgrade-Insecure-Requests':'1',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36'
    },
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("title").text());
            window.jq = $
            // console.log(res.body)
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue('http://news.baidu.com/ns?cl=2&tn=news&word=%E6%AF%94%E7%89%B9%E5%B8%81');
/*
// Queue a list of URLs
c.queue(['http://www.qq.com/','http://www.sina.com.cn']);

// Queue URLs with custom callbacks & parameters
c.queue([{
    uri: 'http://baidu.com/',
    jQuery: false,

    // The global callback won't be called
    callback: function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            console.log('Grabbed', res.body.length, 'bytes');
        }
        done();
    }
}]);

// Queue some HTML code directly without grabbing (mostly for tests)
c.queue([{
    html: '<p>This is a <strong>test</strong></p>'
}]);
*/