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
    "revision": "3c844a13abd06f888685738c11a39997"
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
    "url": "assets/js/12.fbb0ab3d.js",
    "revision": "1df28892a496a5def3873d33489bfd13"
  },
  {
    "url": "assets/js/13.ec9bb9ab.js",
    "revision": "f5714afc3cb3a2225934b98f7bab6be4"
  },
  {
    "url": "assets/js/14.7efcdc24.js",
    "revision": "7d55bfe1b322cd36c30635a3c3217c5e"
  },
  {
    "url": "assets/js/15.b7510bbb.js",
    "revision": "6f5346dcd73dba851925e1c26ae7686a"
  },
  {
    "url": "assets/js/16.58a3754e.js",
    "revision": "422610702b043f7027a93c2e7269de3a"
  },
  {
    "url": "assets/js/17.f2f01119.js",
    "revision": "4276b515de26a1b7125bc6ab9819fdbe"
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
    "url": "assets/js/app.0d7cce7a.js",
    "revision": "e01db81fa7f9bdaa730b9a0d5fb1c213"
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
    "revision": "1e5b34aac3c93924a37a1757a14f6b5d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "298970fae313fbf28ab36300099ae3d2"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "22bde1cdbec1596ffa57743907c0529d"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "18825a4b13f31a06ff04b29993bba19f"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "f3825df1e2f34e0ba2b464fc8e56ab30"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ce9edaafb9e4802c2823e734b9ccd25f"
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
    "revision": "76ea54be8f7f98a63fe90247e1cca4c6"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "4cf57e8b6f1167f9152428a8cd73d8f9"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "0ff5fcb40b9e68d8f074857581d6c0ac"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b84fc8d09e3e0404f4ec614af00b711b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "a6f8092df667de862acd396be842e313"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "92a474a8d37237ab48b1e0ce2639bfc7"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b5e38016f95b9785a555c1bf5bc2f99c"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a57ff7336617c9f83a3c6484e46e4f6d"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "f963419e9c0a6827a671939ebb0ab741"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "9269218269e40780fafcfe9cd9627b1e"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "94d2173c6d81ca12b7cb74f7f17ce24f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "87852d21fc27fa485ea55fb5c83fc47d"
  },
  {
    "url": "timeline/index.html",
    "revision": "1f32cd1856015fac1159403647427b37"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "6131632e23ec4f1b4f0b8d69bddb080a"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "49c4a9f20224cc53656167451ba618e2"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "460f359ac6b99ff32adbfe4805473fcd"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "c658302c6c576689a528fb61d38b43ed"
  },
  {
    "url": "生活分享/life.html",
    "revision": "fb1d6a7cacc3cd83047c42d0b0110b12"
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
