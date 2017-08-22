var reader = require('../libs/reader.js')

reader.search('https://www.ft.com/search?q=bitcoin', {
    listOps:{
        getBlocks($){
            return $('.o-teaser__content')
        },
        getTitle($block){
            try{
                return $block.find('a')[1].children[0].data.trim()
            }catch(e){
                return ''
            }
        },
        getUrl($block){
            try{
                return $block.find('a')[1].attribs.href
            }catch(e){
                return ''
            }
        },
        getSummary($block){
            return ''
        },
        getTime($block){
            return ''
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