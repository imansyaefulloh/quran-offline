(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{173:function(t,e,n){"use strict";var r=n(174),o=n.n(r),c="https://www.quran-offline.xyz/",l=c,f={SURAH_INFO:"".concat(l,"data/surah-info.json"),SURAH_BY_ID:function(t){return"".concat(l,"data/surah/").concat(t,".json")},AYAT_KURSI:"".concat(l,"data/ayat-kursi.json"),ASMAUL_HUSNA:"".concat(l,"data/asmaul-husna.json"),DAILY_DOA:"".concat(l,"data/daily-doa.json")};n.d(e,"a",function(){return d}),n.d(e,"e",function(){return h}),n.d(e,"c",function(){return _}),n.d(e,"b",function(){return v}),n.d(e,"d",function(){return y});var d=function(){return o.a.get(f.SURAH_INFO)},h=function(t){return o.a.get(f.SURAH_BY_ID(t))},_=function(){return o.a.get(f.AYAT_KURSI)},v=function(){return o.a.get(f.ASMAUL_HUSNA)},y=function(){return o.a.get(f.DAILY_DOA)}},186:function(t,e,n){var content=n(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("07d8907c",content,!0,{sourceMap:!1})},187:function(t,e,n){var content=n(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("4a92d55e",content,!0,{sourceMap:!1})},230:function(t,e,n){"use strict";var r=n(186);n.n(r).a},231:function(t,e,n){(t.exports=n(22)(!1)).push([t.i,".surah__header[data-v-999430b2]{display:flex;align-items:center;justify-content:space-between}.surah__title[data-v-999430b2]{font-size:2rem;width:100%;float:right;text-align:right}.surah__title--latin[data-v-999430b2]{width:100%;font-size:1.5rem}.surah__trans[data-v-999430b2]{font-style:italic;line-height:2}.surah__count[data-v-999430b2],.surah__trans[data-v-999430b2]{text-align:right}",""])},232:function(t,e,n){"use strict";var r=n(187);n.n(r).a},233:function(t,e,n){(t.exports=n(22)(!1)).push([t.i,".feed[data-v-417753a5]{display:block;width:90%;margin:1em auto;padding-bottom:1em;border-bottom:1px solid #ccc}.feed__title[data-v-417753a5]{display:flex;align-items:center;justify-content:flex-start;font-size:1.5rem}.feed__title svg[data-v-417753a5]{margin-right:.2em}.feed__empty[data-v-417753a5]{text-align:left;padding-top:1em;color:#333;font-style:italic}",""])},260:function(t,e,n){"use strict";n.r(e);n(56),n(75),n(52),n(53);var r,o=n(4),c=(n(35),n(7)),l=n(5),f=n(81),d=n.n(f),h={translation:"",arabic:"",latin:"",ayah_count:0,index:0,opening:"",closing:""},_=(r=function(t,b){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),v=function(t,e,n,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,n,l):r(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return _(e,t),e.prototype.getSurahDetailUrl=function(t,e){return"/"+t+"#verse-"+e},e.prototype.goToSurahDetail=function(t,e){var path=this.getSurahDetailUrl(t,e);this.$router.push(path)},v([Object(c.b)({default:function(){return h}})],e.prototype,"surah",void 0),e=v([c.a],e)}(c.c),m=(n(230),n(6)),w=Object(m.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"surah__root"},[n("a",{staticClass:"surah block_content has-shadow",on:{click:function(e){e.preventDefault(),t.goToSurahDetail(t.surah.index,t.surah.verse)}}},[n("div",{staticClass:"surah__header"},[n("div",{staticClass:"surah__header--left"},[n("div",{staticClass:"surah__index tag_index",staticStyle:{width:"130px"}},[t._v("\n          Ayat ke "+t._s(t.surah.verse)+"\n        ")])]),t._v(" "),n("div",{staticClass:"surah__header--right"},[n("div",{staticClass:"divider clearfix"},[n("div",{staticClass:"surah__title"},[t._v("\n            "+t._s(t.surah.arabic)+"\n          ")])]),t._v(" "),n("div",{staticClass:"divider clearfix"},[n("div",{staticClass:"surah__title surah__title--latin"},[t._v("\n            "+t._s(t.surah.latin)+"\n          ")])])])])])])},[],!1,null,"999430b2",null).exports,O=n(25),j=n(19),x=n(173),A=function(){var t=function(e,b){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(e,b)};return function(e,b){function n(){this.constructor=e}t(e,b),e.prototype=null===b?Object.create(b):(n.prototype=b.prototype,new n)}}(),R=function(t,e,n,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,n,l):r(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},S=function(t,e,n,r){return new(n||(n=Promise))(function(o,c){function l(t){try{d(r.next(t))}catch(t){c(t)}}function f(t){try{d(r.throw(t))}catch(t){c(t)}}function d(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(l,f)}d((r=r.apply(t,e||[])).next())})},k=function(t,body){var e,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(l){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(t,o)}catch(t){c=[6,t],n=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}},C=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return A(e,t),Object.defineProperty(e.prototype,"metaHead",{get:function(){var title="Ayat terakhir dibaca | Qur'an Offline";return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isHaveLastRead",{get:function(){return Object(j.c)(this.lastReadVerse&&this.lastReadVerse.surah)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lastReadVerseData",{get:function(){var t=this;if(this.isHaveLastRead){var e=this.allSurahList.find(function(e){return e.index===t.lastReadVerse.surah});return Object.assign({},e,{verse:this.lastReadVerse.verse})}return null},enumerable:!0,configurable:!0}),e.prototype.head=function(){return this.metaHead},e.prototype.asyncData=function(){return S(this,void 0,void 0,function(){return k(this,function(t){switch(t.label){case 0:return[4,Object(x.a)()];case 1:return[2,{allSurahList:t.sent().data.surah_info.map(function(t,e){return Object.assign({},t,{index:e+1})})}]}})})},e.prototype.fetch=function(t){t.store.commit("setHeaderTitle",O.a.LAST_READ)},R([l.c],e.prototype,"settingActiveTheme",void 0),R([l.c],e.prototype,"lastReadVerse",void 0),e=R([Object(c.a)({components:{IosBookmarkIcon:d.a,LastReadCard:w}})],e)}(c.c),D=(n(232),Object(m.a)(C,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"feed clearfix"},[e("div",{staticClass:"feed__title"},[e("IosBookmarkIcon",{attrs:{w:"1em",h:"1em"}}),this._v("Ayat terakhir dibaca:\n    ")],1),this._v(" "),e("div",{staticClass:"feed__item clearfix"},[this.isHaveLastRead?e("div",[e("LastReadCard",{attrs:{surah:this.lastReadVerseData}})],1):e("div",{staticClass:"feed__empty"},[this._v("\n        Anda belum pernah menandai salah satu ayat sebagai terakhir dibaca.\n      ")])])])])},[],!1,null,"417753a5",null));e.default=D.exports}}]);