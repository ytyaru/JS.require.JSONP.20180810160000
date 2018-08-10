require.config({
    enforceDefine: true,
    /*
    shim: {
        'js/lib/JsonToHtmlTable/jsonToHtmlTable': {
//            deps: ['lib/underscore-min'],
//            exports: 'jsonToHtmlTable'
            exports: 'module.exports'
        }
    }
    */
});
requirejs(['js/app/main.js']);
