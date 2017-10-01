'use strict'

const phantom = require('phantom');
const wallpaper = require('wallpaper');

// const url = "file:///E:/HPlace/Projects/NodeJs_Projects/DynamicWallpaper/Local/index.html";

// const url = "file:///E:/HPlace/Projects/NodeJs_Projects/PhantomNode/file.html";
const url = "Clock/index.html";

var dun = async function () {
    const instance = await phantom.create();
    const page = await instance.createPage();
    // await page.property("viewportSize", {
    //         width: 1366,
    //         height: 768
    //     })
    await page.property("viewportSize", {
        width: 2560,
        height: 1440
    })
    await page.on('onResourceRequested', function (requestData) {
        console.info('Requesting', requestData.url);
    });
    const status = await page.open(url);
    var f = function () {
        page.render('render.jpg');
        wallpaper.set('render.jpg');
        setTimeout(f, 1000)
    };
    f();
    // await instance.exit();
}

dun();