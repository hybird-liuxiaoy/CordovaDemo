# CordovaDemo

a demo used React of cordova

## use platform

```
cordova platform add android --save
cordova platform rm android --nosave
```

## build

```
npm run build && cordova run android
```

## use other plugins

```
cordova plugin add cordova-plugin-crosswalk-webview
cordova plugin remove cordova-plugin-crosswalk-webview
```

### core plugins

```
apache/cordova-plugin-battery-status
apache/cordova-plugin-camera
apache/cordova-plugin-device
apache/cordova-plugin-dialogs
apache/cordova-plugin-file
apache/cordova-plugin-geolocation
apache/cordova-plugin-inappbrowser
apache/cordova-plugin-media
apache/cordova-plugin-media-capture
apache/cordova-plugin-network-information
apache/cordova-plugin-screen-orientation
apache/cordova-plugin-splashscreen
apache/cordova-plugin-statusbar
apache/cordova-plugin-vibration
apache/cordova-plugin-whitelist
apache/cordova-plugin-wkwebview-engine

cordova-plugin-abi-filter
cordova-plugin-add-swift-support
cordova-plugin-bluetooth
cordova-plugin-customurlscheme
cordova-plugin-qrscanner
es6-promise-plugin
```

#### plugins note

- apache/cordova-plugin-file conflict with web stander api File
- apache/cordova-plugin-media depend apache/cordova-plugin-file
- apache/cordova-plugin-media-capture depend apache/cordova-plugin-file
- apache/cordova-plugin-screen-orientation depend es6-promise-plugin

### deprecated plugins

```
apache/cordova-plugin-console
apache/cordova-plugin-contacts
apache/cordova-plugin-device-motion
apache/cordova-plugin-device-orientation
apache/cordova-plugin-file-transfer
apache/cordova-plugin-globalization
apache/cordova-plugin-legacy-whitelist

cordova-plugin-image-picker
```

## use node.js library

```
npm install lodash --save
```
