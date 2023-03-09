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
    "revision": "b99e5e0d69dd30f8836165979cdfcacd"
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
    "url": "assets/js/13.1b85b26e.js",
    "revision": "aca23ad3a745f97b689d7750773aa009"
  },
  {
    "url": "assets/js/14.7efcdc24.js",
    "revision": "7d55bfe1b322cd36c30635a3c3217c5e"
  },
  {
    "url": "assets/js/15.3b73ff98.js",
    "revision": "6d7ad453f37f797c0f2bfae389ef6844"
  },
  {
    "url": "assets/js/16.23a0df47.js",
    "revision": "d887be0e3ca2ed4a565a9f710a5cc341"
  },
  {
    "url": "assets/js/17.2dee0fb0.js",
    "revision": "622d6936320aaae2051c5c39e4dfec05"
  },
  {
    "url": "assets/js/18.d4efea0d.js",
    "revision": "d8badd6c280d2a0c5f3f2e6c59990429"
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
    "url": "assets/js/app.43ffa953.js",
    "revision": "d9e76fb1ca3dfec6fd9dcccb4b7559e8"
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
    "revision": "51319ca1baf71de49a08c80020a37ab9"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ce09d4cec37b4932b6fffa0cf474c559"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "09e0406b21efa4791f8aa786ab1886b7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "b006a664c8ca501858056e943ef54391"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "80e2b274109127200c1273786016a238"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a67f362bab3f9b8a361f09c50ad51216"
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
    "revision": "12baf270c257c8b378896672242395bf"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "856d9555c26a030764f6f0d0fb1c2670"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "92d89ace9d57af3d1cdb495fa5519019"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c3e4110bdec3196ed01ac0a37fde3712"
  },
  {
    "url": "tags/js/index.html",
    "revision": "ee5fcf1209565c05a87915e86a40d405"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8129d413b1d02b83408122e24ab2c2ba"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "f5bc9596b5709245e4f8eef2390309e6"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "80ef85a7e039f89b3c79da9e80e81f59"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "e59ed00b5a4466cdd7dcffae1116374e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "6e84d04e632e13d50a519087e3ebefc8"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "f8a93a300888bcd4b54c29dd90e98348"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "43d7278f4020396ef928578efb1e3850"
  },
  {
    "url": "timeline/index.html",
    "revision": "63992f67bd2a58c01f43528c28d85f07"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1cfb9e934899a01277fb8bb135f7cb75"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "d6ca493f1855d5551ecdf16924fa2180"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "343ea74c192efcb462a0bdb4b3878f49"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f6df3b2952b825fb78cd7f019df2eb36"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8435a999d1dcbc2907aa7a30471949e4"
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
