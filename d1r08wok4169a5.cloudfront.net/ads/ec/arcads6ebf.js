!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var i,t=n();for(i in t)("object"==typeof exports?exports:e)[i]=t[i]}}("undefined"!=typeof self?self:this,function(){return i={},e.m=n=[function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.initializeGPT=function(){window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],(0,t.appendResource)("script","//securepubads.g.doubleclick.net/tag/js/gpt.js",!0,!1)},n.refreshSlot=function(e){var n,i=e.ad,t=void 0!==(n=e.correlator)&&n,o=void 0===(n=e.prerender)?null:n,r=void 0===(e=e.info)?{}:e;new Promise(function(e){if(o)try{o(r).then(function(){e("Prerender function has completed.")})}catch(n){console.warn("ArcAds: Prerender function did not return a promise or there was an error.\n          Documentation: https://github.com/wapopartners/arc-ads/wiki/Utilizing-a-Prerender-Hook"),e("Prerender function did not return a promise or there was an error, ignoring.")}else e("No Prerender function was provided.")}).then(function(){!function e(){window.blockArcAdsLoad||(window.googletag&&googletag.pubadsReady?window.googletag.pubads().refresh([i],{changeCorrelator:t}):setTimeout(function(){e()},200))}()})},n.queueGoogletagCommand=function(e){window.googletag.cmd.push(e)},n.setTargeting=function(e,n){for(var i in n)n.hasOwnProperty(i)&&n[i]&&e.setTargeting(i,n[i])},n.dfpSettings=function(e){window.googletag.pubads().disableInitialLoad(),window.googletag.pubads().enableSingleRequest(),window.googletag.pubads().enableAsyncRendering(),this.collapseEmptyDivs&&window.googletag.pubads().collapseEmptyDivs(),window.googletag.enableServices(),e&&window.googletag.pubads().addEventListener("slotRenderEnded",e)},n.determineSlotName=function(e,n){var i=(0,o.expandQueryString)("adslot");return!i||""===i&&null===i?"/"+e+"/"+n:"/"+e+"/"+i};var t=i(5),o=i(6)},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.initializeBiddingServices=a,n.fetchBids=function(e){var n=this,i=e.ad,d=e.id,s=e.slotName,u=e.dimensions,c=e.wrapper,l=e.bidding,p=e.correlator,f=void 0!==p&&p,g=e.prerender,h=e.breakpoints,b={adUnit:i,adSlot:s,adDimensions:u,adId:d,bids:l};e=new Promise(function(e){var o;c.prebid&&c.prebid.enabled?(o=c.prebid.timeout||700,t.queuePrebidCommand.bind(n,(0,t.fetchPrebidBids)(i,c.prebid.useSlotForAdUnit?s:d,o,b,g,function(){e("Fetched Prebid ads!")}))):e("Prebid is not enabled on the wrapper...")}),l=new Promise(function(e){c.amazon&&c.amazon.enabled?(0,o.fetchAmazonBids)(d,s,u,h,function(){e("Fetched Amazon ads!")}):e("Amazon is not enabled on the wrapper...")});window.arcBiddingReady?Promise.all([e,l]).then(function(){(0,r.refreshSlot)({ad:i,correlator:f,prerender:g,info:b})}):setTimeout(function(){return a()},200)};var t=i(2),o=i(7),r=i(0);function a(e){var n,i=void 0!==(n=e.prebid)&&n,t=void 0!==(n=e.amazon)&&n;window.arcBiddingReady||(window.arcBiddingReady=!1,e=new Promise(function(e){var n;i&&i.enabled?("undefined"==typeof pbjs&&((n=n||{}).que=n.que||[]),e("Prebid has been initialized")):e("Prebid is not enabled on the wrapper...")}),n=new Promise(function(e){t&&t.enabled&&window.apstag?t.id&&""!==t.id?(0,o.queueAmazonCommand)(function(){window.apstag.init({pubID:t.id,adServer:"googletag"}),e("Amazon scripts have been added onto the page!")}):(console.warn("ArcAds: Missing Amazon account id. \n          Documentation: https://github.com/wapopartners/arc-ads#amazon-tama9"),e("Amazon is not enabled on the wrapper...")):e("Amazon is not enabled on the wrapper...")}),Promise.all([e,n]).then(function(){window.arcBiddingReady=!0}))}},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.queuePrebidCommand=function(e){pbjs.que.push(e)},n.fetchPrebidBids=function(e,n,i,o,r){var a=5<arguments.length&&void 0!==arguments[5]?arguments[5]:null;pbjs.requestBids({timeout:i,adUnitCodes:[n],bidsBackHandler:function(i){console.log("Bid Back Handler",i),pbjs.setTargetingForGPTAsync([n]),a?a():(0,t.refreshSlot)({ad:e,info:o,prerender:r})}})},n.addUnit=function(e,n,i){var t=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};(i={code:e,bids:i}).mediaTypes={banner:{sizes:n}},n=t.sizeConfig,t=t.config,pbjs.addAdUnits(i),t?pbjs.setConfig(t):n&&pbjs.setConfig({sizeConfig:n})};var t=i(0)},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ArcAds=void 0;var t=i(4),o=i(1),r=i(0),a=i(2),d=i(8);function s(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function u(e){if(Array.isArray(e)){for(var n=0,i=Array(e.length);n<e.length;n++)i[n]=e[n];return i}return Array.from(e)}function c(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;!function(e){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}(this),this.dfpId=e.dfp.id||"",this.wrapper=e.bidding||{},this.positions=[],this.collapseEmptyDivs=e.dfp.collapseEmptyDivs,window.isMobile=t.MobileDetection,""===this.dfpId?console.warn("ArcAds: DFP id is missing from the arcads initialization script. \n        Documentation: https://github.com/wapopartners/arc-ads#getting-started"):((0,r.initializeGPT)(),(0,r.queueGoogletagCommand)(r.dfpSettings.bind(this,n)),(0,o.initializeBiddingServices)(this.wrapper))}n.ArcAds=(function(e,n,i){n&&s(e.prototype,n),i&&s(e,i)}(c,[{key:"registerAd",value:function(e){var n,i,t,o=e.id,d=e.slotName,s=e.dimensions,c=void 0!==(t=e.adType)&&t,l=void 0===(t=e.targeting)?{}:t,p=void 0===(t=e.display)?"all":t,f=void 0!==(t=e.bidding)&&t,g=void 0===(t=e.iframeBidders)?["openx"]:t,h=[],b=[];s&&void 0!==s&&"number"==typeof s[0]||s&&void 0!==s&&0<s.length&&void 0===s[0][0][0]?h.push.apply(h,u(s)):s&&void 0!==s&&"string"==typeof s[0]?(s.forEach(function(e){"fluid"!==e&&b.push(e)}),h.push.apply(h,b)):s&&s.forEach(function(e){h.push.apply(h,u(e))});try{l&&l.hasOwnProperty("position")||!1===c||(i=this.positions[c]+1||1,this.positions[c]=i,i=Object.assign(l,{position:i}),Object.assign(e,{targeting:i})),(isMobile.any()&&"mobile"===p||!isMobile.any()&&"desktop"===p||"all"===p)&&(f.prebid&&f.prebid.bids&&this.wrapper.prebid&&this.wrapper.prebid.enabled&&h&&(pbjs&&0<g.length&&pbjs.setConfig({userSync:{filterSettings:{iframe:{bidders:"*",filter:"include"}}},priceGranularity:"dense"}),i=this.wrapper.prebid.useSlotForAdUnit?(0,r.determineSlotName)(this.dfpId,d):o,a.queuePrebidCommand.bind(this,(0,a.addUnit)(i,h,f.prebid.bids,this.wrapper.prebid))),(n=this.displayAd.bind(this,e))&&(0,r.queueGoogletagCommand)(n))}catch(e){console.error("ads error",e)}}},{key:"registerAdCollection",value:function(e){var n=this,i=[],t=window.location.pathname.indexOf("/futbol-internacional/"),o=window.location.pathname.indexOf("/futbol-peruano/"),r="elcomercio.pe"===window.location.host&&("blogs"===window.section||"blog"===window.section),a="elcomercio.pe"===window.location.host&&("autores"===window.section||"desdela-redaccion"===window.section);e.forEach(function(e){"depor.com"!==window.location.hostname||-1===t&&-1===o?"1"===e.bloque&&i.push(e):"1"!==e.bloque&&"gpt_caja2"!==e.id&&"gpt_caja3"!==e.id&&"gpt_caja4"!==e.id&&"gpt_caja5"!==e.id||i.push(e)}),(window.adsBloque1=i).forEach(function(e){a||r&&"gpt_skin"===e.id||n.registerAd(e)})}},{key:"registerAdCollection2",value:function(e){var n=this;e.forEach(function(e){n.registerAd(e)})}},{key:"displayAd",value:function(e){var n=e.id,i=e.slotName,t=e.dimensions,a=e.targeting,s=void 0!==(f=e.sizemap)&&f,u=void 0!==(g=e.bidding)&&g,c=e.prerender,l=void 0===c?null:c,p=(0,r.determineSlotName)(this.dfpId,i),f=t&&!t.length?null:t,g=t?window.googletag.defineSlot(p,f,n):window.googletag.defineOutOfPageSlot(p,n);if(s&&s.breakpoints&&t){if(c=(e=(0,d.prepareSizeMaps)(f,s.breakpoints)).mapping,i=e.breakpoints,e=e.correlators,!g)return!1;g.defineSizeMapping(c),s.refresh&&(0,d.setResizeListener)({ad:g,slotName:p,breakpoints:i,id:n,mapping:c,correlators:e,bidding:u,wrapper:this.wrapper,prerender:l})}g&&(g.addService(window.googletag.pubads()),(0,r.setTargeting)(g,a)),s=s&&s.breakpoints?s.breakpoints:[],t&&u&&(u.amazon&&u.amazon.enabled||u.prebid&&u.prebid.enabled)?(0,o.fetchBids)({ad:g,id:n,slotName:p,dimensions:f,wrapper:this.wrapper,prerender:l,bidding:u,breakpoints:s}):(0,r.refreshSlot)({ad:g,prerender:l,info:{adUnit:g,adSlot:p,adDimensions:f,adId:n}})}}]),c)},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(e,n,i){return n&&r(e.prototype,n),i&&r(e,i),e};t=n.MobileDetection=(t(o,null,[{key:"Android",value:function(){return!!navigator.userAgent.match(/Android/i)}},{key:"AndroidOld",value:function(){return!!navigator.userAgent.match(/Android 2.3.3/i)}},{key:"AndroidTablet",value:function(){return!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Mobile/i))}},{key:"Kindle",value:function(){return!!navigator.userAgent.match(/Kindle/i)}},{key:"KindleFire",value:function(){return!!navigator.userAgent.match(/KFOT/i)}},{key:"Silk",value:function(){return!!navigator.userAgent.match(/Silk/i)}},{key:"BlackBerry",value:function(){return!!navigator.userAgent.match(/BlackBerry/i)}},{key:"iOS",value:function(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)}},{key:"iPhone",value:function(){return!!navigator.userAgent.match(/iPhone|iPod/i)}},{key:"iPad",value:function(){return!!navigator.userAgent.match(/iPad/i)}},{key:"Windows",value:function(){return!!navigator.userAgent.match(/IEMobile/i)}},{key:"FirefoxOS",value:function(){return!!navigator.userAgent.match(/Mozilla/i)&&!!navigator.userAgent.match(/Mobile/i)}},{key:"Retina",value:function(){return window.retina||1<window.devicePixelRatio}},{key:"any",value:function(){return this.Android()||this.Kindle()||this.KindleFire()||this.Silk()||this.BlackBerry()||this.iOS()||this.Windows()||this.FirefoxOS()}}]),o);function o(){!function(e){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this)}function r(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}n.default=t},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.appendResource=function(e,n,i,t,o){var r=document.createElement(e);"script"===e&&(r.src=n,r.async=i||!1,r.defer=t||!1,(document.head||document.documentElement).appendChild(r),o&&o())}},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.expandQueryString=function(e){var n=window.location.href;e=e.replace(/[[\]]/g,"\\$&");return(n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(n))?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}},function(e,n,i){"use strict";function t(e){window.apstag&&e()}Object.defineProperty(n,"__esModule",{value:!0}),n.fetchAmazonBids=function(e,n,i,o){var r=4<arguments.length&&void 0!==arguments[4]?arguments[4]:null,a=i;if(o&&void 0!==window.innerWidth&&void 0!==i[0][0][0]){for(var d=window.innerWidth,s=-1,u=o.length,c=0;c<u;c++)if(d>=o[c][0]){s=c;break}a=i[s]}t(function(){var i={slotName:n,slotID:e,sizes:a};window.apstag.fetchBids({slots:[i]},function(){window.apstag.setDisplayBids(),r&&r()})})},n.queueAmazonCommand=t},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.resizeListeners=n.sizemapListeners=void 0,n.prepareSizeMaps=function(e,n){var i=[],t=[],o=[];return(n.length?n:null).forEach(function(n,r){i.push([n,e[r]]),-1===t.indexOf(n[0])&&(t.push(n[0]),o.push(!1))}),t.sort(function(e,n){return e-n}),{mapping:i,breakpoints:t,correlators:o}},n.parseSizeMappings=s,n.runResizeEvents=u,n.setResizeListener=function(e){var n=e.id,i=e.correlators;d[n]=(0,t.debounce)(u(e),250),window.addEventListener("resize",d[n]),a[n]={listener:d[n],correlators:i}};var t=i(9),o=i(1),r=i(0),a=n.sizemapListeners={},d=n.resizeListeners={};function s(e){try{var n,i=[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight];return 0<(n=0<(n=e.filter(function(e){return e[0][0]<=i[0]&&e[0][1]<=i[1]})).length?n[0][1]:[]).length&&n[0].constructor!==Array&&(n=[n]),n}catch(i){return e[e.length-1][1]}}function u(e){var n=void 0,i=!1;return function(){for(var t=e.ad,d=e.breakpoints,u=e.id,c=e.bidding,l=e.mapping,p=e.slotName,f=e.wrapper,g=e.prerender,h=window.innerWidth,b=0;b<d.length;b++){var m,w,v=d[b],y=d[b+1];(v<h&&(h<y||!y)&&n!==v||h===v&&!i)&&(n=v,i=!0,w={adUnit:t,adSlot:p,adDimensions:m=s(l),adId:u},c.prebid&&c.prebid.enabled||c.amazon&&c.amazon.enabled?(0,o.fetchBids)({ad:t,id:u,slotName:p,dimensions:m,bidding:c,wrapper:f,prerender:g,correlator:a[u].correlators[b],breakpoints:d}):(0,r.refreshSlot)({ad:t,correlator:a[u].correlators[b],prerender:g,info:w})),a[u].correlators[b]=!0}}}},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.debounce=function(e,n){var i=void 0;return function(){for(var t=this,o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];clearTimeout(i),i=setTimeout(function(){i=null,e.apply(t,r)},n)}}}],e.c=i,e.d=function(n,i,t){e.o(n,i)||Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(i,"a",i),i},e.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},e.p="",e(e.s=3);function e(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n,i});
