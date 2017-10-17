# Dynamic Wallpaper

Dynamic Wallpaper for Windows, based on webpages like lagom.io. <br>

For eg, change the wallpaper every second to reflect current time. </br>

## Usage:
- add `Runner.vbs` to Windows startup.
- `npm install && npm start`

## Dependencies:
- [phantomjs](http://phantomjs.org/download.html)
- [wallpaper](https://www.npmjs.com/package/wallpaper)

## Changes to the clock
- URL can be changed in the index.js.
- Using a remote URL makes the clock considerably laggy. 
- Use local files for optimal quality.
