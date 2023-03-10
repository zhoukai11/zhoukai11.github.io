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
    "revision": "4357906acdfd197e7b1943b11bec5b0a"
  },
  {
    "url": "assets/css/0.styles.ff0f35da.css",
    "revision": "d9139bceac646951292ac6dc902b2bf9"
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
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/js/1.a1843ea0.js",
    "revision": "6a13f027acc4f1eb5039a760a6697e9d"
  },
  {
    "url": "assets/js/10.9c530806.js",
    "revision": "eeb17bc4573a54aa5635bfde48f17e9d"
  },
  {
    "url": "assets/js/11.e7ce1a2e.js",
    "revision": "e05a0f20fc64b8de71163a3d684666be"
  },
  {
    "url": "assets/js/12.f61d66ed.js",
    "revision": "86a5aacbfa3bbe60133d105d03fe540b"
  },
  {
    "url": "assets/js/13.b2e1586b.js",
    "revision": "25b6157e9d4ce691c204b455a0e8b8c6"
  },
  {
    "url": "assets/js/14.d3e04aeb.js",
    "revision": "4f3c4f6f9c303025bd0a4bbe6a1659ab"
  },
  {
    "url": "assets/js/15.87548c39.js",
    "revision": "9dd1fc303b24fdbd3cf4b1e377c1ee9a"
  },
  {
    "url": "assets/js/16.64f24ced.js",
    "revision": "0136279756d42ceed75ef3474ae649d2"
  },
  {
    "url": "assets/js/4.78435356.js",
    "revision": "57a2336078457cf5ecdd767f6f2af318"
  },
  {
    "url": "assets/js/5.7baab181.js",
    "revision": "c935132d662336496571dcba078873c9"
  },
  {
    "url": "assets/js/6.d3133293.js",
    "revision": "793c901cac18ea1691e0f675dbf4622f"
  },
  {
    "url": "assets/js/7.95e12dd6.js",
    "revision": "61c7d1b98a1ef15842d6b977e39e4a9d"
  },
  {
    "url": "assets/js/8.cbec92b8.js",
    "revision": "cb86d52112abd46896eb787811016ec9"
  },
  {
    "url": "assets/js/9.e424a41f.js",
    "revision": "c092b0a1c5e65f4ceb32c144895c29d7"
  },
  {
    "url": "assets/js/app.ceeb8266.js",
    "revision": "3c2301ee0166c4dcff4fdd1750638814"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.c7fb18f9.js",
    "revision": "4d6c4ad2a6628028a56cc30089052859"
  },
  {
    "url": "categories/index.html",
    "revision": "1c97ccf8c2b0b1efdecb4775541a5af0"
  },
  {
    "url": "categories/java/index.html",
    "revision": "82818c987e6c677e514645c08e7a99dc"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "84d2ecebfecfffd4d9566585d826bf08"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "19435c0f6a257c3b3b0ec635fbf62ad0"
  },
  {
    "url": "css/style.css",
    "revision": "2dd75a5ed2af61d2dad1377e6f37104f"
  },
  {
    "url": "img/avatar.jpg",
    "revision": "a52066b5195e99ffa682b98187539494"
  },
  {
    "url": "img/bg-logo.svg",
    "revision": "a2d1cf1ad2becdd79823541dae101fcd"
  },
  {
    "url": "img/logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "index.html",
    "revision": "c8c4653617ae100e5e2c58eac2b02158"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "62ac612bdfe96a39efcae4d428f04449"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "b9d5a16381526ecc4ba8042d18b447b2"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "eeb9cf21b24620fa259ff6942bcd290a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7ebc66bc330cee50b4acc5728a8e725e"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "f4900bcc87d373251dbdd846ea710c8f"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "faad09d36328999d90da0f9d297b92f1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "05313df55f52c05f8dfeb572cea9f7a4"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "bfba27697ee2dd0192d35d04eca5d4d2"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "4b7e255292d59f6ee344658c44a4fd96"
  },
  {
    "url": "timeline/index.html",
    "revision": "a351e37268039a0374f73c7402c25e9e"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c6c1cbda8e9a5eb3fd36b0ba77424007"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2dc47379dc641b531e21b2e13fd43e0a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "8adcca088fe3ae980e327028f671663d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e7e095a1ed5cd7937f7383c7798b364c"
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
