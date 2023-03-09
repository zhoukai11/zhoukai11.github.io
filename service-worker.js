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
    "revision": "1f14c1cdd199579fcccf8442013cbe10"
  },
  {
    "url": "assets/css/0.styles.4102293f.css",
    "revision": "663a72039540d88ab5e5267bced891e0"
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
    "url": "assets/js/1.82d00e53.js",
    "revision": "b166d78be792c16eab96d0300e5aa09e"
  },
  {
    "url": "assets/js/10.c2eaece1.js",
    "revision": "22624e3a096fb00aac8813eb56c963b2"
  },
  {
    "url": "assets/js/11.c9e3c66d.js",
    "revision": "548706debfb2b6b3d5aa48dd55260e64"
  },
  {
    "url": "assets/js/12.0e786924.js",
    "revision": "ece2dece7c5b3ee700aca7aa9c34d41c"
  },
  {
    "url": "assets/js/13.76f8de04.js",
    "revision": "c22251376f3a8b2bfc54b90d94b1a3dd"
  },
  {
    "url": "assets/js/14.5ba3c6e1.js",
    "revision": "46ad1edd6a042f9ca8a7fb85c80c90d4"
  },
  {
    "url": "assets/js/15.7369bcbf.js",
    "revision": "71cda21791d3166fa76cda5f0ac74390"
  },
  {
    "url": "assets/js/16.64f24ced.js",
    "revision": "0136279756d42ceed75ef3474ae649d2"
  },
  {
    "url": "assets/js/17.db6d0887.js",
    "revision": "cccf5ba31c502b02c24c610583e4883c"
  },
  {
    "url": "assets/js/4.2ccc0cc6.js",
    "revision": "5311d9a07e131f6dfa37920c109547b3"
  },
  {
    "url": "assets/js/5.d84ae6a5.js",
    "revision": "40c9416d37c28848b5c5777dd1be9577"
  },
  {
    "url": "assets/js/6.6bd50c68.js",
    "revision": "e10aa67f0cb223ce0788612424715967"
  },
  {
    "url": "assets/js/7.cc1b55e5.js",
    "revision": "5dfd51cee94dd4f780acf99214f7c0ec"
  },
  {
    "url": "assets/js/8.622a0cca.js",
    "revision": "36e10d3eb897b574bca91a54a4ac85de"
  },
  {
    "url": "assets/js/9.1ff274ed.js",
    "revision": "23247e5421502e5d1b6144efa5fc922c"
  },
  {
    "url": "assets/js/app.0163908a.js",
    "revision": "adf4242731f056832fdeba66fa1e24e1"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.eb58e2c8.js",
    "revision": "71e394d74c51daa78a77f2b46fed8cc3"
  },
  {
    "url": "categories/index.html",
    "revision": "cad98c17be1b2c90138b6afa0d52eaf7"
  },
  {
    "url": "categories/java/index.html",
    "revision": "893ea6c0b2922fcb0ca57432bb659ad4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "bf58d9dc25e15fbde8b5c3d697e2079a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7a8468e2288f06b0bd41564555342b88"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "f3b41f5b50523c34b686a2f0c2f13475"
  },
  {
    "url": "css/style.css",
    "revision": "9e4b4a3c87f52185399bf1385207457b"
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
    "revision": "d8bfabff994fcfed50933abce141b6c8"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "17be5b4948592420b20a0685b4c061ad"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "9d0ca93377e4cc5b9fd01229d1bc8eaa"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "15e343ec9ad4723696ac10a9c8dc9627"
  },
  {
    "url": "tags/js/index.html",
    "revision": "17a7e1550b02cbb0ad76654438aca2f9"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "8eca38f54c811cc0ee0ebc1da7f15852"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b25eb46d595cce25d51827a327b190d1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "aeff52d4f55c939ae218697f1da9a547"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "82ae1fc0a6084e07de723d2de675a22d"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "17e44715180f08f06d973b897496101b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7ea475058ccd9196cba982ded642932a"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "22c44b5206eee9475528367c5cb31a03"
  },
  {
    "url": "timeline/index.html",
    "revision": "bdf7f8c43283d61514131c63f63b25a2"
  },
  {
    "url": "技术文章/index.html",
    "revision": "dea242516b758cff42d501a64ccbbe26"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "a089c44c73b2126d84197f23191afb4d"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "90cc6940a5d06c3b146fbaec936f63af"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ec1275f96a956619451860ecc5edb4d7"
  },
  {
    "url": "生活分享/life.html",
    "revision": "2330374079083d5ccc950fd4b9ee0278"
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
