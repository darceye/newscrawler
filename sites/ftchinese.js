var reader = require('../libs/reader.js')

reader.search('http://m.ftchinese.com/search/?keys=%E6%AF%94%E7%89%B9%E5%B8%81&type=default&category=', {
    listOps:{
        getBlocks($){
            return $('.item-inner')
        },
        getTitle($block){
            try{
                return $block.find('h2>a').text().trim()
            }catch(e){
                return ''
            }
        },
        getUrl($block){
            try{
                return 'http://m.ftchinese.com/'+ $block.find('h2>a').href
            }catch(e){
                return ''
            }
        },
        getSummary($block){
            try{
                return  $block.find('.item-lead').text().trim()
            }catch(e){
                return ''

            }
        },
        getTime($block){
            try{
                return $block.find('.item-time').text().trim()
            }catch(e){
                return ''
            }
        }
    },
    articleOps:{
        getContent($){
            try{

            }catch(e){
                return ''
            }
        },
        getTime($){
            try{

            }catch(e){
                return ''
            }
            
        }
    },
    isReadContent: false
})