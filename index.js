'use strict'

const phantom = require('phantom');
const wallpaper = require('wallpaper');

// const url = "file:///E:/HPlace/Projects/NodeJs_Projects/DynamicWallpaper/Local/index.html";

// const url = "file:///E:/HPlace/Projects/NodeJs_Projects/PhantomNode/file.html";
const url = "Clock/index.html";

const _NORMAL = 1000;
const _FAST = 500;
const _VERY_FAST = 200;

const _RENDER_FILE = "render.jpg";

var dun = async function () {
    const instance = await phantom.create();
    const page = await instance.createPage();
    // await page.property("viewportSize", {
    //         width: 1366,
    //         height: 768
    //     });
    await page.property("viewportSize", {
        width: 2560,
        height: 1440
    });

    await page.property('zoomFactor', 2);
    // await page.on('onResourceRequested', function (requestData) {
    //     console.info('Requesting', requestData.url);
    // });
    const status = await page.open(url);
    var f = function () {
        page.render(_RENDER_FILE);
        wallpaper.set(_RENDER_FILE);
        // console.log("Rendered");
        setTimeout(f, _NORMAL);
    };
    f();
    // await instance.exit();
}

dun();