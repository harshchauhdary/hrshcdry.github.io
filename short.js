const endpoint = "https://jsonbox.io/demobox_6d9e326c183fde7b"

new Vue({
    el: '#app',

    data: {
        longurl : '',
        url:'',
        finalurl:'',
        shortr:'https://sumit.codes/',
        urlhash:'',
        windowurl:''
        
        
    },

    mounted(){

            if(window.location.hash!=''){
                windowurl = window.location.hash
                console.log(windowurl);
                windowurl.replace('#','');
                this.fetch(windowurl)  
            }
    },

    methods : {

        buildurl(){
            urlhash = Math.random().toString(36).substring(9);
            
            finalurl = this.shortr+"#"+urlhash
            console.log(finalurl);
            longurl=this.longurl

            this.posturl(urlhash,longurl)
        },

    
        posturl(urlhash,longurl){
            axios.post(endpoint,{
                hash:urlhash,
                link:longurl
                
            })
            .then(function(response){
                console.log(response);
            });
            
        },

        fetch(windowurl){
            axios.get(endpoint+'?q=hash:'+windowurl)
            .then(function(response){
                console.log(response.data[0].link);
                var redirecturl = response.data[0].link
                window.location.replace(redirecturl);
            });
        }

        
    }
});