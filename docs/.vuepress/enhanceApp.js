import KonamiCode from 'vue-konami-code'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
    var memes = [
    "https://youtu.be/L_jWHffIx5E?t=40", 
    "https://youtu.be/q_WGA23uu9g?t=20", 
    "https://youtu.be/feA64wXhbjo", 
    "https://youtu.be/X2WH8mHJnhM" ,
    "https://youtu.be/xTKVcAeTxtE",
    
    ]  

    Vue.use(KonamiCode, {callback: function () {
        const c = Math.floor(Math.random() * memes.length); 
        window.open(memes[c], '_blank');
    }})
}

