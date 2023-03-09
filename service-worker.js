/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f742b6033c1f6ce2c0258c3b70d76750"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.9fb2b061.js",
    "revision": "e664de0f8bc3f8391a54bd4e597ab105"
  },
  {
    "url": "assets/js/10.a11da1b9.js",
    "revision": "76f842db331ce825ceb3561084f1869f"
  },
  {
    "url": "assets/js/11.2643825f.js",
    "revision": "c1bd680774acbbe9a01123dab9f8565b"
  },
  {
    "url": "assets/js/12.3c5d5bc1.js",
    "revision": "f6a60a3be307362b48977edffbc0b323"
  },
  {
    "url": "assets/js/13.57dae016.js",
    "revision": "d5bfafb9fd0ff567c0c0cc4116213697"
  },
  {
    "url": "assets/js/14.e9552120.js",
    "revision": "d0cb48556f2a20e7034dd9ca06268ba8"
  },
  {
    "url": "assets/js/15.60892002.js",
    "revision": "15a6106ce72939118e5e452286208c55"
  },
  {
    "url": "assets/js/16.23a0df47.js",
    "revision": "d887be0e3ca2ed4a565a9f710a5cc341"
  },
  {
    "url": "assets/js/17.ae2ed56a.js",
    "revision": "73380bf846777b6252329f32374e144f"
  },
  {
    "url": "assets/js/18.b2058909.js",
    "revision": "6622710524b8b26aa7c18c3843fbd06f"
  },
  {
    "url": "assets/js/4.3de6246a.js",
    "revision": "61ef2d3d66ccdc7eaf6a87f4cc8d90f8"
  },
  {
    "url": "assets/js/5.e4c00abf.js",
    "revision": "88ecf28e9dba665b9065d8b1e984ad89"
  },
  {
    "url": "assets/js/6.748537c5.js",
    "revision": "a98ef0a7b1afa840cee8471597e115eb"
  },
  {
    "url": "assets/js/7.dc411f38.js",
    "revision": "0aa1af3b00e01ce7401bfab3fff47332"
  },
  {
    "url": "assets/js/8.6b15f8f6.js",
    "revision": "d9924a3c0ce4b0cd7f4943c7fd61037f"
  },
  {
    "url": "assets/js/9.71494bfb.js",
    "revision": "702619421fee8ee3882a0ba35663ea75"
  },
  {
    "url": "assets/js/app.42c61227.js",
    "revision": "40825162f4cff3caf90c1ada8c1d17b9"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.11704b07.js",
    "revision": "5fceae3fc1fd5ef9881a984c0ccc8710"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "c53fae34b11715dd72d51b54151826d3"
  },
  {
    "url": "categories/java/index.html",
    "revision": "38dbc5b4e45c9be7db6834f913f81618"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "0be18469bed9a1fc3642afae4fcae8aa"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "843d836efe8f8d984eb85e59a9ff17da"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "d9f825eb71d610f22291e9e65c716852"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "daae0de51180f68394c789a29dcb6e7c"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "c92073c65de0ffb2a7f2e377647674d4"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "5298f5b24d6c0edc963e686d66091e8f"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "9a4f4d5e93216e4b6e7c0875ef02aa4b"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "df5195977a9c7c0133b9f42eb091cfb2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3946feca39745bee13bd758f96f5b9b3"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "3bef63ccf14074bd7f80cbefa568bdf3"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2401f70cc85f0a76313b6220578ec8b8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "bb2361345b1f990b8534d18245a89af1"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "967eb76c3fe91be514b5faa151b41804"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d7b140abb47d3e1cb92a59d8991157f1"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f8b67625b939b482af1e9a099c65961c"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "86874b50c72afb8f06ba1cc4298dd5d9"
  },
  {
    "url": "timeline/index.html",
    "revision": "8d541e8d14587905177766b37402bfe4"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "8ebcb5768ea207f1d3efd717ad95b6b1"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "4cf1dcbd8e3bb5b46367624cb58026ef"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "dd8cd5cc642ef122dfb344623daf193f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d2e31b7629cd8f77b0e8b5d6b0ec384c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f78576e8ba88e645d860d752d468127d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
