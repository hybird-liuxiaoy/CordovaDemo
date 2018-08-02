# CordovaDemo
a demo used React of cordova


## use platform
```
cordova platform add android --save
cordova platform rm android --nosave
```

## build
``````
npm run build && cordova run android
``````


## use other plugins
```
cordova plugin add cordova-plugin-crosswalk-webview
cordova plugin remove cordova-plugin-crosswalk-webview
```

注：如果第三方的 plugin 时间太久远，那肯定用不了，可以使用其他类似 plugin

如：
```
cordova-plugin-image-picker
```

## use node.js library
```
npm install lodash --save
```
