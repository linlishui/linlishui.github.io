    // The code below is injected by flutter web optimizer, do not edit!!!!!!
    
    // window.assetBase
    var assetBase = "https://linlishui.github.io/app-demo/";
    
    // window.mainjsManifest
    var mainjsManifest = {
  "main.dart.js": "main.dart.1680019c.js",
  "main.dart_0.js": "main.dart_0.8794ae7f.js",
  "main.dart_1.js": "main.dart_1.fd124dee.js",
  "main.dart_2.js": "main.dart_2.bf94edd7.js",
  "main.dart_3.js": "main.dart_3.b59c6c2b.js",
  "main.dart_4.js": "main.dart_4.9abf11de.js",
  "main.dart_5.js": "main.dart_5.c723947e.js"
};
    
    // window.hashFileManifest
    var hashFileManifest = {
  "assets/AssetManifest.json": "assets/AssetManifest.3e39462d.json",
  "assets/FontManifest.json": "assets/FontManifest.ca3c6e49.json",
  "assets/fonts/MaterialIcons-Regular.otf": "assets/fonts/MaterialIcons-Regular.ff6eb508.otf",
  "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "assets/packages/cupertino_icons/assets/CupertinoIcons.6d342eb6.ttf",
  "assets/packages/fluttertoast/assets/toastify.css": "assets/packages/fluttertoast/assets/toastify.a8567505.css",
  "assets/packages/fluttertoast/assets/toastify.js": "assets/packages/fluttertoast/assets/toastify.56e2c9ce.js",
  "favicon.png": "favicon.5dcef449.png",
  "flutter.js": "flutter.822458aa.js",
  "icons/Icon-192.png": "icons/Icon-192.ac9a721a.png",
  "icons/Icon-512.png": "icons/Icon-512.96e75261.png",
  "icons/Icon-maskable-192.png": "icons/Icon-maskable-192.c457ef57.png",
  "icons/Icon-maskable-512.png": "icons/Icon-maskable-512.301a7604.png",
  "main.dart.js": "main.dart.1680019c.js",
  "main.dart_0.js": "main.dart_0.8794ae7f.js",
  "main.dart_1.js": "main.dart_1.fd124dee.js",
  "main.dart_2.js": "main.dart_2.bf94edd7.js",
  "main.dart_3.js": "main.dart_3.b59c6c2b.js",
  "main.dart_4.js": "main.dart_4.9abf11de.js",
  "main.dart_5.js": "main.dart_5.c723947e.js",
  "manifest.json": "manifest.9f2e1b0e.json"
};
    
    // hook dynamic create element `src` `href` property
    (function(){
      var _defineProperty = function (element, property) {
        var value;
        Object.defineProperty(element, property, {
          get: function () {
            return value;
          },
          set: function (v) {
            value = v;
            if (typeof v === 'string') {
              if (v.startsWith('./')) {
                v = v.replace('./', '');
              }
              if (hashFileManifest[v]) {
                value = assetBase + hashFileManifest[v];
              }
            }
            element.setAttribute(property, value);
          }
        })
  
        var _setAttribute = element.setAttribute;
        element.setAttribute = function () {
          var args = Array.prototype.slice.call(arguments);
          // if (args[0] === 'src') {
          //   //do something here
          //   console.log('setAttribute', args[1])
          // }
          _setAttribute.apply(element, args);
        }
      }
  
      var _createElement = document.createElement;
      var _hookProperties = {'link': 'href', 'script': 'src', 'audio': 'src', 'video': 'src', 'map': 'src', 'img': 'src'};
      document.createElement = function (tagName) {
        var element = _createElement.call(document, tagName);
        var property = _hookProperties[tagName.toLowerCase()];
        if (property) {
          _defineProperty(element, property);
        }
        return element;
      }  
    })();

    // load main.dart.js_xxx.part js
    function dartDeferredLibraryLoader(uri, successCallback, errorCallback, loadId) {
      console.info('uri: ' + uri + ', loadId: '+ loadId);
      var src;
      try {
        var url = new URL(uri);
        var key = url.pathname.replaceAll(/(.*)(main\.dart\.(.+)\.js)/g, '$2');
        src = assetBase + mainjsManifest[key];
      } catch (e) {
        var key = uri.replaceAll(/(.*)(main\.dart\.(.+)\.js)/g, '$2');
        src = assetBase + mainjsManifest[key];
      }
    
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      script.addEventListener("load", successCallback, false);
      script.addEventListener("error", errorCallback, false);
      document.body.appendChild(script);
    }
    