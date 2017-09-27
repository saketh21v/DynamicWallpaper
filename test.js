// var page = require('webpage').create();
// console.log('The default user agent is ' + page.settings.userAgent);
// page.settings.userAgent = 'SpecialAgent';
// page.open('http://lagom.io/', function(status) {
//   if (status !== 'success') {
//     console.log('Unable to access network');
//   } else {
//     var ua = page.evaluate(function() {
//       return document.getElementsByClassName('exit')[0];
//     });
//     console.log(ua);
//     ua.click();
//     page.render('screen.png');
//   }
//   phantom.exit();
// });

var page = require('webpage').create();

page.onError = function (msg, trace) {
    console.log(msg);
    trace.forEach(function(item) {
        console.log('  ', item.file, ':', item.line);
    });
};

page.open('http://lagom.io', function() {
  page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
    var pos = page.evaluate(function() {
      return $(".exit").position();
    });
    console.log(pos.top + ", " + pos.left);
    sendEvent('click', pos.left, pos.top);
    page.render('screen.png');
    phantom.exit()
  });
});