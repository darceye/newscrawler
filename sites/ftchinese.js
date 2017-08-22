var reader = require('../libs/reader.js')

reader.search('www.ftchinese.com/search/?keys=比特币&ftsearchType=type_news', {
    siteOps:{
        getTitle($block){

        },
        getUrl($block){

        },
        getSummary($block){

        }
    },
    articleOps:{
        getContent($){

        },
        getTime($){

        }
    },
    isReadContent: false
})