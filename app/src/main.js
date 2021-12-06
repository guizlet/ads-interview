require('./init');

//Hint: ads should never be loaded with setTimeout. Figure out how ads should be loaded after GPT is ready.
setTimeout(function() {
    // Load Ads
    googletag.pubads().refresh();
}, 3000);