(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"3c18":function(e,t,a){"use strict";var o=a("80fb"),l=a.n(o);l.a},"41f0":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"column",attrs:{padding:""}},[a("tool-bar",{attrs:{moduleName:e.moduleName}}),a("q-card",{staticClass:"settings-tabs col"},[a("facial-record")],1)],1)},l=[],n=a("ded3"),r=a.n(n),s=a("2f62"),i={name:"PageFacial",data(){return{moduleName:"facial-module"}},mounted(){this.getDevices(),this.getMonitors()},computed:r()({},Object(s["d"])("facial",["cameras"])),methods:r()(r()({},Object(s["b"])("devices",["getDevices"])),Object(s["b"])("shinobi",["getMonitors","addMonitor"])),components:{"tool-bar":a("5bd4").default,"facial-record":a("ec54").default,"empty-state":a("2101").default}},c=i,d=a("2877"),u=a("9989"),p=a("f09f"),y=a("eebe"),f=a.n(y),m=Object(d["a"])(c,o,l,!1,null,null,null);t["default"]=m.exports;f()(m,"components",{QPage:u["a"],QCard:p["a"]})},"80fb":function(e,t,a){},ec54:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"player"},[a("h3",[e._v("Using Html5 to play m3u8 media file")]),a("video-player",{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{options:e.playerOptions},on:{play:function(t){return e.onPlayerPlay(t)},ready:function(t){return e.onPlayerReady(t)}}})],1)},l=[],n=a("89f1"),r={name:"home",components:{VideoPlayer:n["a"]},data(){return{playerOptions:{autoplay:!0,controls:!0,controlBar:{timeDivider:!1,durationDisplay:!1}}}},computed:{player(){return this.$refs.videoPlayer.player}},methods:{onPlayerPlay(e){console.log("player play!",e)},onPlayerReady(e){console.log("player ready!",e),this.player.play()},playVideo:function(e){const t={withCredentials:!1,type:"application/x-mpegurl",src:e};this.player.reset(),this.player.src(t),this.player.play()}},mounted(){const e="http://192.168.1.26:8080/b5b29f033784484847c10399efbd31aa/hls/dnU07P50ws/undefined/s.m3u8";this.playVideo(e)}},s=r,i=(a("3c18"),a("2877")),c=Object(i["a"])(s,o,l,!1,null,"ccfc06d4",null);t["default"]=c.exports}}]);