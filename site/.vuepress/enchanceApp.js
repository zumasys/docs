export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData, // site metadata
    isServer // is this enhancement applied in server-rendering or client
}) => {

    // Google Tag Manager integration
    //www.analyticsmania.com/post/single-page-web-app-with-google-tag-manager/#developers-help
    if (process.env.NODE_ENV === 'production' && process.env.VUE_APP_GOOGLE_TAG_MANAGER && typeof window !== 'undefined') {
        (function(w,d,s,l,i)    {
            w[l] = w[l] || [];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f = d.getElementsByTagName(s)[0];
            var j = d.createElement(s);
            var dl = l !='dataLayer' ? '&l='+ l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id='+ i + dl;
            f.parentNode.insertBefore(j,f);
        })(window, document, 'script', 'dataLayer', process.env.VUE_APP_GOOGLE_TAG_MANAGER);

        router.afterEach(function (to) {

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'Pageview',
                'pagePath': to.fullPath
                //'pageTitle': 'Contact us'
            });

        })
    }

}