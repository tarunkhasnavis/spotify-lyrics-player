(this["webpackJsonpspotify-lyrics"]=this["webpackJsonpspotify-lyrics"]||[]).push([[0],{108:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(31),s=c.n(r),i=(c(48),c(49),c(109)),o=c(5);var u=function(){return Object(o.jsx)(i.a,{className:"d-flex justify-content-center align-items-center",style:{minHeight:"100vh"},children:Object(o.jsx)("a",{className:"btn btn-success btn-lg",href:"https://accounts.spotify.com/authorize?client_id=bc43d635979c4b9e8e108dcf47ecc4e0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",children:"Login with Spotify"})})},l=c(7),f=c(8),d=c.n(f);var h=function(e){var t=Object(n.useState)(),c=Object(l.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(),i=Object(l.a)(s,2),o=i[0],u=i[1],f=Object(n.useState)(),h=Object(l.a)(f,2),j=h[0],b=h[1];return Object(n.useEffect)((function(){d.a.post("http://localhost:3001/login",{code:e}).then((function(e){console.log(e.data),r(e.data.accessToken),u(e.data.refreshToken),b(e.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(){window.location="/"}))}),[e]),Object(n.useEffect)((function(){if(o&&j){var e=setInterval((function(){d.a.post("http://localhost:3001/refresh",{refreshToken:o}).then((function(e){r(e.data.accessToken),b(e.data.expiresIn)})).catch((function(){window.location="/"}))}),1e3*(j-60));return function(){return clearInterval(e)}}}),[o,j]),a},j=c(41);var b=function(e){var t=e.accessToken,c=e.trackUri,a=Object(n.useState)(!1),r=Object(l.a)(a,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){return i(!0)}),[c]),t?Object(o.jsx)(j.a,{token:t,showSaveIcon:!0,callback:function(e){e.isPlaying||i(!1)},play:s,uris:c?[c]:[]}):null},O=c(110),m=c(40);function p(e){var t=e.track,c=e.chooseTrack;return Object(o.jsxs)("div",{className:"d-flex m-2 align-items-center",style:{cursor:"pointer"},onClick:function(){c(t)},children:[Object(o.jsx)("img",{src:t.albumUrl,style:{height:"64px",width:"64px"}}),Object(o.jsxs)("div",{className:"ml-3",children:[Object(o.jsx)("div",{children:t.title}),Object(o.jsx)("div",{className:"text-muted",children:t.artist})]})]})}var v=new(c.n(m).a)({clientId:"bc43d635979c4b9e8e108dcf47ecc4e0"});var x=function(e){var t=e.code,c=h(t),a=Object(n.useState)(""),r=Object(l.a)(a,2),s=r[0],u=r[1],f=Object(n.useState)([]),j=Object(l.a)(f,2),m=j[0],x=j[1],y=Object(n.useState)(),g=Object(l.a)(y,2),k=g[0],w=g[1],S=Object(n.useState)(""),T=Object(l.a)(S,2),N=T[0],E=T[1];function I(e){w(e),u(""),E("")}function I(e){w(e),u("")}return Object(n.useEffect)((function(){k&&d.a.get("http://localhost:3001/lyrics",{params:{track:k.title,artist:k.artist}}).then((function(e){E(e.data.lyrics)}))}),[k]),Object(n.useEffect)((function(){c&&v.setAccessToken(c)}),[c]),Object(n.useEffect)((function(){if(!s)return x([]);if(c){var e=!1;return v.searchTracks(s).then((function(t){e||x(t.body.tracks.items.map((function(e){var t=e.album.images.reduce((function(e,t){return t.height<e.height?t:e}),e.album.images[0]);return{artist:e.artists[0].name,title:e.name,uri:e.uri,albumUrl:t.url}})))})),function(){return e=!0}}}),[s,c]),Object(o.jsxs)(i.a,{className:"d-flex flex-column py-2",style:{height:"100vh"},children:[Object(o.jsx)(O.a.Control,{type:"search",placeholder:"Search Songs/ Artists",value:s,onChange:function(e){return u(e.target.value)}}),Object(o.jsxs)("div",{className:"flex-grow-1 my-2",style:{overflowY:"auto"},children:[m.map((function(e){return Object(o.jsx)(p,{track:e,chooseTrack:I},e.uri)})),0===m.length&&Object(o.jsx)("div",{className:"text-center",style:{whiteSpace:"pre"},children:N})]}),Object(o.jsx)("div",{children:Object(o.jsx)(b,{accessToken:c,trackUri:null===k||void 0===k?void 0:k.uri})})]})},y=new URLSearchParams(window.location.search).get("code");var g=function(){return y?Object(o.jsx)(x,{code:y}):Object(o.jsx)(u,{})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))},48:function(e,t,c){},88:function(e,t){}},[[108,1,2]]]);
//# sourceMappingURL=main.500a450b.chunk.js.map