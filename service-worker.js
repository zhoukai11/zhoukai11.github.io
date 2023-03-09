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
    "revision": "12686e7371993a2b4382a3dcf8948aeb"
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
    "url": "assets/js/12.cc17d045.js",
    "revision": "5403e94e1671a8ad3322cae496b67a55"
  },
  {
    "url": "assets/js/13.ec9bb9ab.js",
    "revision": "f5714afc3cb3a2225934b98f7bab6be4"
  },
  {
    "url": "assets/js/14.e9552120.js",
    "revision": "d0cb48556f2a20e7034dd9ca06268ba8"
  },
  {
    "url": "assets/js/15.6ac5d01d.js",
    "revision": "1cf5487735c306f1be0d13126e63c689"
  },
  {
    "url": "assets/js/16.6683de2e.js",
    "revision": "47a28c5d8ed94f77e0d7cfc029cbf001"
  },
  {
    "url": "assets/js/17.f2f01119.js",
    "revision": "4276b515de26a1b7125bc6ab9819fdbe"
  },
  {
    "url": "assets/js/18.db8bebbd.js",
    "revision": "be31e857e4433c8b077edf7d02961846"
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
    "url": "assets/js/app.00879a4e.js",
    "revision": "eca6d70ed2152622277ff6533e915ac9"
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
    "revision": "08bd0077f224a17f702176183463e17d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "fbc9d64737bc3f331eb217ef8d6e0e38"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c95363a99fdbe8521428f2e377981d64"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e0a1e0d6e849ea8a92bef00b1ac5f81d"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "fce17c3aa1207bc70b5a5524f3f3cad0"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "86fc5af98e003c30e91b383c4566968b"
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
    "revision": "891625e3cf7da90cc6399f3406641689"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "e8cf97cdc7612aa55f2ec42a5f2a796a"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "4f92fb37ec2d31ed7baa3943b68ba875"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "f362d2a495beeb45b31fd6c583401cec"
  },
  {
    "url": "tags/js/index.html",
    "revision": "a57b111956acd115f49f79297875e6ea"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "3c48e10b7d3e3d9eb5aa2058c3156a4e"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "99fac877e5204feda945615450bf2ee2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "a54d1768147cc1ee0c58a7310032f27a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "eb9e81797f8476341a69234416b30ca3"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "077576dbbeec950364983d628a97754f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "fd9db9f2f48354e67ed1233dc9280ddc"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "92fd020819f69b9de65381651bf56d48"
  },
  {
    "url": "timeline/index.html",
    "revision": "c8ed8e2fb9ed50723ea6dfc2f3616109"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "879be877f058fb3469f0589ba5d4bbc2"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "cab30d1b34c81d7c183796b00b97997d"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "14b44c4e057b79c24cdd14719f24b99c"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "9b0a01b1664781e2cc5358d47bd16ada"
  },
  {
    "url": "生活分享/life.html",
    "revision": "fe713b08d616ff28a1842e9270f9b6b9"
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
