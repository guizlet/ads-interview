//Ads libraries initialization
!function () {
    //Load GPT Library
    !function(){
        let tag = document.createElement('script');
        tag.type = 'text/javascript';
        tag.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
        let node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(tag, node);
    }();

    //Load APS Library
    !function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");

    //Initalize GPT
    window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function () {
        googletag.pubads().enableAsyncRendering();
        googletag.pubads().enableSingleRequest();
        googletag.pubads().disableInitialLoad();
        googletag.defineSlot('/6396803/SetRectangleHeader', [[300, 250]], 'SetRectangleHeader').addService(googletag.pubads());
        googletag.defineSlot('/6396803/SetPageFooter', [[728, 90]], 'SetPageFooter').addService(googletag.pubads());
        googletag.enableServices();
    });

    // Initialize APS
    apstag.init({
     pubID: '3742',
     adServer: 'googletag'
    });
}();