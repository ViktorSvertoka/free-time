!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=t.parcelRequire27df;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){a[e]=t},t.parcelRequire27df=n);var c=n("bpxeT"),s=n("2TvXO"),o=(c=n("bpxeT"),n("8MBJY")),u=n("a2hTj"),i=(s=n("2TvXO"),n("dIxxU")),l=function(){"use strict";function t(){e(o)(this,t),this.key="992758a4802a699e8df27d4d6efc34fb",this.baseURL="https://api.themoviedb.org/3/",this.page=1}return e(u)(t,[{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"getTrends",value:function(t){var r=this;return e(c)(e(s).mark((function a(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.default.get("".concat(r.baseURL,"trending/movie/").concat(t,"?api_key=").concat(r.key));case 3:return n=e.sent,console.log(n.data.results),e.abrupt("return",n.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),a,null,[[0,8]])})))()}},{key:"getUpcoming",value:function(){var t=this;return e(c)(e(s).mark((function r(){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.default.get("".concat(t.baseURL,"movie/upcoming?api_key=").concat(t.key));case 3:return a=e.sent,console.log(a.data.results),e.abrupt("return",a.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),r,null,[[0,8]])})))()}},{key:"searchMovieByQuery",value:function(t){var r=this;return e(c)(e(s).mark((function a(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.default.get("".concat(r.baseURL,"search/movie?api_key=").concat(r.key,"&query=").concat(t));case 3:return n=e.sent,r.incrementPage(),console.log(n.data.results),e.abrupt("return",n.data.results);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),a,null,[[0,9]])})))()}},{key:"getMovieInfo",value:function(t){var r=this;return e(c)(e(s).mark((function a(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.default.get("".concat(r.baseURL,"movie/").concat(t,"?api_key=").concat(r.key));case 3:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),a,null,[[0,8]])})))()}},{key:"getMovieTrailer",value:function(t){var r=this;return e(c)(e(s).mark((function a(){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.default.get("".concat(r.baseURL,"movie/").concat(t,"/videos?api_key=").concat(r.key));case 3:return n=e.sent,console.log(n.data.results[0]),e.abrupt("return",n.data.results[0]);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),a,null,[[0,8]])})))()}},{key:"getGenresList",value:function(){var t=this;return e(c)(e(s).mark((function r(){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.default.get("".concat(t.baseURL,"genre/movie/list?api_key=").concat(t.key));case 3:return a=e.sent,console.log(a.data.genres),e.abrupt("return",a.data.genres);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),r,null,[[0,8]])})))()}},{key:"getMovieContries",value:function(){var t=this;return e(c)(e(s).mark((function r(){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.default.get("".concat(t.baseURL,"configuration/countries?api_key=").concat(t.key));case 3:return a=e.sent,console.log(a.data),e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),r,null,[[0,8]])})))()}}]),t}(),p=(c=n("bpxeT"),s=n("2TvXO"),n("hixsh")),f=(i=n("dIxxU")).default;function d(e){return v.apply(this,arguments)}function v(){return(v=e(c)(e(s).mark((function t(r){var a,n,c,o,u,i,l,p,f,d,v,y,b,k,x,w,S,_;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=document.querySelector(".cards__list"),n="https://image.tmdb.org/t/p/w500/",c="",o=!0,u=!1,i=void 0,e.prev=4,l=r[Symbol.iterator]();case 6:if(o=(p=l.next()).done){e.next=25;break}if(f=p.value,d=f.id,v=f.poster_path,y=f.title,b=f.release_date,k=f.vote_average,null!==v&&v){e.next=11;break}return e.abrupt("continue",22);case 11:return x=n+v,e.next=14,g(d);case 14:return w=e.sent,e.next=17,h(b);case 17:return S=e.sent,e.next=20,m(k);case 20:_=e.sent,c+="<li class='cards__list__item'>\n                    <img src='".concat(x,"' alt='").concat(y,"' width='395' height='574' />\n                    <div>\n                        <h3>").concat(y,"</h3>\n                        <p>").concat(w," <span>").concat(S,"</span></p>\n                        ").concat(_,"\n                    </div>\n                </li>");case 22:o=!0,e.next=6;break;case 25:e.next=31;break;case 27:e.prev=27,e.t0=e.catch(4),u=!0,i=e.t0;case 31:e.prev=31,e.prev=32,o||null==l.return||l.return();case 34:if(e.prev=34,!u){e.next=37;break}throw i;case 37:return e.finish(34);case 38:return e.finish(31);case 39:a.innerHTML=c;case 40:case"end":return e.stop()}}),t,null,[[4,27,31,39],[32,,34,38]])})))).apply(this,arguments)}function h(e){return e?year=e.slice(0,4):"There is no release date"}function g(e){return y.apply(this,arguments)}function y(){return(y=e(c)(e(s).mark((function t(r){var a,n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"992758a4802a699e8df27d4d6efc34fb","https://api.themoviedb.org/3/movie/",e.prev=2,e.next=5,f.get("".concat("https://api.themoviedb.org/3/movie/").concat(r),{params:{api_key:"992758a4802a699e8df27d4d6efc34fb"}});case 5:if(0!==(a=e.sent).data.genres.length){e.next=8;break}return e.abrupt("return",error);case 8:return n=a.data.genres.slice(0,2).map((function(e){return e.name})).join(", "),e.abrupt("return",n);case 12:return e.prev=12,e.t0=e.catch(2),console.log(e.t0),e.abrupt("return","There are no genres");case 16:case"end":return e.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}function m(e){var t="";if(!e)return t="".concat(p.emptyStar.repeat(5)),"<div>".concat(t,"</div>");switch(Math.round(e)){case 0:t="".concat(p.emptyStar.repeat(5));break;case 1:t="".concat(p.halfStar).concat(p.emptyStar.repeat(4));break;case 2:t="".concat(p.fullStar).concat(p.emptyStar.repeat(4));break;case 3:t="".concat(p.fullStar).concat(p.halfStar).concat(p.emptyStar.repeat(3));break;case 4:t="".concat(p.fullStar.repeat(2)).concat(p.emptyStar.repeat(3));break;case 5:t="".concat(p.fullStar.repeat(2)).concat(p.halfStar).concat(p.emptyStar.repeat(2));break;case 6:t="".concat(p.fullStar.repeat(3)).concat(p.emptyStar.repeat(2));break;case 7:t="".concat(p.fullStar.repeat(3)).concat(p.halfStar).concat(p.emptyStar);break;case 8:t="".concat(p.fullStar.repeat(4)).concat(p.emptyStar);break;case 9:t="".concat(p.fullStar.repeat(4)).concat(p.halfStar);break;case 10:t="".concat(p.fullStar.repeat(5));break;default:throw new Error("Invalid rating")}return"<div>".concat(t,"</div>")}var b=document.querySelector(".cards__list"),k=document.querySelector(".cards__message"),x=document.getElementById("search-form"),w=document.getElementById("searchQuery"),S=new l;function _(){return(_=e(c)(e(s).mark((function t(){var r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.getTrends("week");case 3:if(0!==(r=e.sent).length&&r){e.next=6;break}return e.abrupt("return",error);case 6:d(r.slice(0,10)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),b.classList.add("visually-hidden"),k.classList.remove("visually-hidden");case 15:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function L(){return(L=e(c)(e(s).mark((function t(r){var a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.searchMovieByQuery(r);case 3:if(0!==(a=e.sent).length&&a){e.next=6;break}return e.abrupt("return",error);case 6:d(a.slice(0,10)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),b.classList.add("visually-hidden"),k.classList.remove("visually-hidden");case 15:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}!function(){_.apply(this,arguments)}(),x.addEventListener("submit",(function(e){if(e.preventDefault(),b.innerHTML="",searchValue=w.value.trim(),!searchValue)return;b.classList.remove("visually-hidden"),k.classList.add("visually-hidden"),function(e){L.apply(this,arguments)}(searchValue)}))}();
//# sourceMappingURL=catalog.ba7bac80.js.map
