
global.generateEntries = function generateEntries() {
  return [{
  	"name": "http://localhost:17000/",
  	"entryType": "navigation",
  	"startTime": 0,
  	"duration": 1415.88,
  	"initiatorType": "navigation",
  	"workerStart": 0,
  	"redirectStart": 0,
  	"redirectEnd": 0,
  	"fetchStart": 0.07500000000000001,
  	"domainLookupStart": 0.07500000000000001,
  	"domainLookupEnd": 0.07500000000000001,
  	"connectStart": 0.07500000000000001,
  	"connectEnd": 0.07500000000000001,
  	"secureConnectionStart": 0,
  	"requestStart": 0,
  	"responseStart": 0,
  	"responseEnd": 661.8400000000001,
  	"transferSize": 512,
  	"encodedBodySize": 220,
  	"decodedBodySize": 220,
  	"unloadEventStart": 662.1,
  	"unloadEventEnd": 662.2750000000001,
  	"domInteractive": 1415.6000000000001,
  	"domContentLoadedEventStart": 1415.6200000000001,
  	"domContentLoadedEventEnd": 1415.6200000000001,
  	"domComplete": 1415.8500000000001,
  	"loadEventStart": 1415.8750000000002,
  	"loadEventEnd": 1415.88,
  	"type": "reload",
  	"redirectCount": 0
  }, {
  	"name": "http://localhost:17000/test/__resources__/index.js",
  	"entryType": "resource",
  	"startTime": 666.4300000000001,
  	"duration": 642.0550000000001,
  	"initiatorType": "script",
  	"workerStart": 0,
  	"redirectStart": 0,
  	"redirectEnd": 0,
  	"fetchStart": 666.4300000000001,
  	"domainLookupStart": 666.4300000000001,
  	"domainLookupEnd": 666.4300000000001,
  	"connectStart": 666.4300000000001,
  	"connectEnd": 666.4300000000001,
  	"secureConnectionStart": 0,
  	"requestStart": 668.0950000000001,
  	"responseStart": 1298.42,
  	"responseEnd": 1308.4850000000001,
  	"transferSize": 1072961,
  	"encodedBodySize": 1072712,
  	"decodedBodySize": 1072712
  }, {
  	"name": "http://localhost:17000/sockjs-node/info?t=1505306301720",
  	"entryType": "resource",
  	"startTime": 2819.6600000000003,
  	"duration": 4.539999999999964,
  	"initiatorType": "xmlhttprequest",
  	"workerStart": 0,
  	"redirectStart": 0,
  	"redirectEnd": 0,
  	"fetchStart": 2819.6600000000003,
  	"domainLookupStart": 2819.6600000000003,
  	"domainLookupEnd": 2819.6600000000003,
  	"connectStart": 2819.6600000000003,
  	"connectEnd": 2819.6600000000003,
  	"secureConnectionStart": 0,
  	"requestStart": 2821.42,
  	"responseStart": 2823.8050000000003,
  	"responseEnd": 2824.2000000000003,
  	"transferSize": 367,
  	"encodedBodySize": 78,
  	"decodedBodySize": 78
  }, {
  	"name": "first-paint",
  	"entryType": "paint",
  	"startTime": 14777.985,
  	"duration": 0
  }, {
  	"name": "first-contentful-paint",
  	"entryType": "paint",
  	"startTime": 14778.010000000002,
  	"duration": 0
  }, {
  	"name": "https://laasweb-dev.aexp.com/v1/log",
  	"entryType": "resource",
  	"startTime": 80310.115,
  	"duration": 1565.3399999999965,
  	"initiatorType": "xmlhttprequest",
  	"workerStart": 0,
  	"redirectStart": 0,
  	"redirectEnd": 0,
  	"fetchStart": 80310.115,
  	"domainLookupStart": 0,
  	"domainLookupEnd": 0,
  	"connectStart": 0,
  	"connectEnd": 0,
  	"secureConnectionStart": 0,
  	"requestStart": 0,
  	"responseStart": 0,
  	"responseEnd": 81875.455,
  	"transferSize": 0,
  	"encodedBodySize": 0,
  	"decodedBodySize": 0
  }];
}

global.generateChromeCSI = function generateChromeCSI() {
  return {"startE":1505306298901,"onloadT":1505306300316,"pageT":879780.15,"tran":16};
}

global.generateChromeLoadTimes = function generateChromeLoadTimes() {
  return {
    "requestTime": 1505306298.901,
    "startLoadTime": 1505306298.901,
    "commitLoadTime": 1505306299.561,
    "finishDocumentLoadTime": 1505306300.316,
    "finishLoadTime": 1505306300.317,
    "firstPaintTime": 1505306313.679,
    "firstPaintAfterLoadTime": 0,
    "navigationType": "Reload",
    "wasFetchedViaSpdy": false,
    "wasNpnNegotiated": false,
    "npnNegotiatedProtocol": "unknown",
    "wasAlternateProtocolAvailable": false,
    "connectionInfo": "http/1.1"
  };
}

global.generateChromeMemory = function generateChromeMemory() {
  return {
    jsHeapSizeLimit: 2190000000,
    totalJSHeapSize: 17100000,
    usedJSHeapSize: 11900000,
  }
}

global.generateChromeNavigation = function generateChromeNavigation() {
  return {
    redirectCount:0,
    type :1
  }
}

function performanceNow() {
  return new Date().getTime();
}

global.generateChromeTiming = function generateChromeTiming() {
  return {
    toJSON: (() => {
      return {
        "navigationStart": 1505306298901,
        "unloadEventStart": 1505306299563,
        "unloadEventEnd": 1505306299563,
        "redirectStart": 0,
        "redirectEnd": 0,
        "fetchStart": 1505306298901,
        "domainLookupStart": 1505306298901,
        "domainLookupEnd": 1505306298901,
        "connectStart": 1505306298901,
        "connectEnd": 1505306298901,
        "secureConnectionStart": 0,
        "requestStart": 1505306298904,
        "responseStart": 1505306299561,
        "responseEnd": 1505306299563,
        "domLoading": 1505306299566,
        "domInteractive": 1505306300316,
        "domContentLoadedEventStart": 1505306300316,
        "domContentLoadedEventEnd": 1505306300316,
        "domComplete": 1505306300317,
        "loadEventStart": 1505306300317,
        "loadEventEnd": 1505306300317
      };
    }),
  	"navigationStart": 1505306298901,
  	"unloadEventStart": 1505306299563,
  	"unloadEventEnd": 1505306299563,
  	"redirectStart": 0,
  	"redirectEnd": 0,
  	"fetchStart": 1505306298901,
  	"domainLookupStart": 1505306298901,
  	"domainLookupEnd": 1505306298901,
  	"connectStart": 1505306298901,
  	"connectEnd": 1505306298901,
  	"secureConnectionStart": 0,
  	"requestStart": 1505306298904,
  	"responseStart": 1505306299561,
  	"responseEnd": 1505306299563,
  	"domLoading": 1505306299566,
  	"domInteractive": 1505306300316,
  	"domContentLoadedEventStart": 1505306300316,
  	"domContentLoadedEventEnd": 1505306300316,
  	"domComplete": 1505306300317,
  	"loadEventStart": 1505306300317,
  	"loadEventEnd": 1505306300317
  }
}

function generate() {
  Object.defineProperty(window, 'navigator', {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
    bluetooth: {},
    budget: {},
    cookieEnabled: true,
    credentials: {},
    doNotTrack: null,
    geolocation: {},
    hardwareConcurrency: 8,
    language: "en-US",
    languages: ["en-US", "en"],
    maxTouchPoints: 0,
    mediaDevices: {
      ondevicechange: null
    },
    mimeTypes: {},
    onLine: true,
    permissions: {},
    platform:"MacIntel",
    plugins: {},
    presentation: {
      defaultRequest: null,
      receiver: null
    },
    product: "Gecko",
    productSub:"20030107",
    serviceWorker: {
      controller: null,
      ready: null,
      oncontrollerchange: null,
      onmessage: null
    },
    storage: {},
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
    vendor: "Google Inc.",
    vendorSub:"",
    webkitPersistentStorage: {},
    webkitTemporaryStorage: {},
  });

  window.performance = {
    getEntries: generateEntries,
    memory: generateChromeMemory(),
    navigation: generateChromeNavigation(),
    onresourcetimingbufferfull: null,
    timing: generateChromeTiming(),
    now: performanceNow
  };

  window.chrome = {
    csi: generateChromeCSI,
    loadTimes: generateChromeLoadTimes,
  }
}

global.jestBrowserPerformance = generate;