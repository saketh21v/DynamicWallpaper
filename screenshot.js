'use strict'

var webpage = require('webpage').create();

// width: 2560,
// height: 1440

webpage.viewportSize = {
    width: 2560,
    height: 1440
};

var urlLocal = 'file:///E:/HPlace/Projects/NodeJs_Projects/DynamicWallpaper/Local/index.html';
var url = 'https://codepen.io/HughDai/full/MKKXJp/';
webpage.open(url, function (status) {
    console.log('Logging. You see me.');
    if (status === 'success') {
        var render = function () {
            webpage.render('scotch.jpg');
            console.log('rendered');
            // var h = webpage.evaluate(function(){

            // });
            // console.log('Hours = ' + h);
            setTimeout(render, 5000);

        };
        setTimeout(render, 5000);
    } else console.log("Fuck");
    console.log('Logging. Can you see me?');
    // phantom.exit();
});