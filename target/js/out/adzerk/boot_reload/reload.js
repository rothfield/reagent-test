// Compiled by ClojureScript 0.0-2760 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('goog.net.jsloader');
goog.require('goog.async.DeferredList');
goog.require('goog.Uri');
goog.require('clojure.string');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var uri = (new goog.Uri(href_or_uri));
var path = adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (uri,path){
return (function (p1__9418_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9418_SHARP_,path);
});})(uri,path))
,changed)))){
return uri;
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function reload_css(changed){
var sheets = document.styleSheets;
var seq__9423 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9424 = null;
var count__9425 = (0);
var i__9426 = (0);
while(true){
if((i__9426 < count__9425)){
var s = cljs.core._nth.call(null,chunk__9424,i__9426);
var temp__4126__auto___9427 = (sheets[s]);
if(cljs.core.truth_(temp__4126__auto___9427)){
var sheet_9428 = temp__4126__auto___9427;
var temp__4126__auto___9429__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_9428.href,changed);
if(cljs.core.truth_(temp__4126__auto___9429__$1)){
var href_uri_9430 = temp__4126__auto___9429__$1;
sheet_9428.ownerNode.href = href_uri_9430.makeUnique().toString();
} else {
}
} else {
}

var G__9431 = seq__9423;
var G__9432 = chunk__9424;
var G__9433 = count__9425;
var G__9434 = (i__9426 + (1));
seq__9423 = G__9431;
chunk__9424 = G__9432;
count__9425 = G__9433;
i__9426 = G__9434;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__9423);
if(temp__4126__auto__){
var seq__9423__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9423__$1)){
var c__4340__auto__ = cljs.core.chunk_first.call(null,seq__9423__$1);
var G__9435 = cljs.core.chunk_rest.call(null,seq__9423__$1);
var G__9436 = c__4340__auto__;
var G__9437 = cljs.core.count.call(null,c__4340__auto__);
var G__9438 = (0);
seq__9423 = G__9435;
chunk__9424 = G__9436;
count__9425 = G__9437;
i__9426 = G__9438;
continue;
} else {
var s = cljs.core.first.call(null,seq__9423__$1);
var temp__4126__auto___9439__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4126__auto___9439__$1)){
var sheet_9440 = temp__4126__auto___9439__$1;
var temp__4126__auto___9441__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_9440.href,changed);
if(cljs.core.truth_(temp__4126__auto___9441__$2)){
var href_uri_9442 = temp__4126__auto___9441__$2;
sheet_9440.ownerNode.href = href_uri_9442.makeUnique().toString();
} else {
}
} else {
}

var G__9443 = cljs.core.next.call(null,seq__9423__$1);
var G__9444 = null;
var G__9445 = (0);
var G__9446 = (0);
seq__9423 = G__9443;
chunk__9424 = G__9444;
count__9425 = G__9445;
i__9426 = G__9446;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function reload_img(changed){
var images = document.images;
var seq__9451 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9452 = null;
var count__9453 = (0);
var i__9454 = (0);
while(true){
if((i__9454 < count__9453)){
var s = cljs.core._nth.call(null,chunk__9452,i__9454);
var temp__4126__auto___9455 = (images[s]);
if(cljs.core.truth_(temp__4126__auto___9455)){
var image_9456 = temp__4126__auto___9455;
var temp__4126__auto___9457__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_9456.src,changed);
if(cljs.core.truth_(temp__4126__auto___9457__$1)){
var href_uri_9458 = temp__4126__auto___9457__$1;
image_9456.src = href_uri_9458.makeUnique().toString();
} else {
}
} else {
}

var G__9459 = seq__9451;
var G__9460 = chunk__9452;
var G__9461 = count__9453;
var G__9462 = (i__9454 + (1));
seq__9451 = G__9459;
chunk__9452 = G__9460;
count__9453 = G__9461;
i__9454 = G__9462;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__9451);
if(temp__4126__auto__){
var seq__9451__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9451__$1)){
var c__4340__auto__ = cljs.core.chunk_first.call(null,seq__9451__$1);
var G__9463 = cljs.core.chunk_rest.call(null,seq__9451__$1);
var G__9464 = c__4340__auto__;
var G__9465 = cljs.core.count.call(null,c__4340__auto__);
var G__9466 = (0);
seq__9451 = G__9463;
chunk__9452 = G__9464;
count__9453 = G__9465;
i__9454 = G__9466;
continue;
} else {
var s = cljs.core.first.call(null,seq__9451__$1);
var temp__4126__auto___9467__$1 = (images[s]);
if(cljs.core.truth_(temp__4126__auto___9467__$1)){
var image_9468 = temp__4126__auto___9467__$1;
var temp__4126__auto___9469__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_9468.src,changed);
if(cljs.core.truth_(temp__4126__auto___9469__$2)){
var href_uri_9470 = temp__4126__auto___9469__$2;
image_9468.src = href_uri_9470.makeUnique().toString();
} else {
}
} else {
}

var G__9471 = cljs.core.next.call(null,seq__9451__$1);
var G__9472 = null;
var G__9473 = (0);
var G__9474 = (0);
seq__9451 = G__9471;
chunk__9452 = G__9472;
count__9453 = G__9473;
i__9454 = G__9474;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function reload_js(changed,p__9477){
var map__9479 = p__9477;
var map__9479__$1 = ((cljs.core.seq_QMARK_.call(null,map__9479))?cljs.core.apply.call(null,cljs.core.hash_map,map__9479):map__9479);
var on_jsload = cljs.core.get.call(null,map__9479__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9479,map__9479__$1,on_jsload){
return (function (p1__9475_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9475_SHARP_,".js");
});})(map__9479,map__9479__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
return goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__9479,map__9479__$1,on_jsload){
return (function (p1__9476_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__9476_SHARP_).makeUnique());
});})(js_files,map__9479,map__9479__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__9479,map__9479__$1,on_jsload){
return (function() { 
var G__9480__delegate = function (_){
return on_jsload.call(null);
};
var G__9480 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9481__i = 0, G__9481__a = new Array(arguments.length -  0);
while (G__9481__i < G__9481__a.length) {G__9481__a[G__9481__i] = arguments[G__9481__i + 0]; ++G__9481__i;}
  _ = new cljs.core.IndexedSeq(G__9481__a,0);
} 
return G__9480__delegate.call(this,_);};
G__9480.cljs$lang$maxFixedArity = 0;
G__9480.cljs$lang$applyTo = (function (arglist__9482){
var _ = cljs.core.seq(arglist__9482);
return G__9480__delegate(_);
});
G__9480.cljs$core$IFn$_invoke$arity$variadic = G__9480__delegate;
return G__9480;
})()
;})(js_files,map__9479,map__9479__$1,on_jsload))
,((function (js_files,map__9479,map__9479__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9479,map__9479__$1,on_jsload))
);
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = ((adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__9487_9491 = cljs.core.seq.call(null,things_to_log);
var chunk__9488_9492 = null;
var count__9489_9493 = (0);
var i__9490_9494 = (0);
while(true){
if((i__9490_9494 < count__9489_9493)){
var t_9495 = cljs.core._nth.call(null,chunk__9488_9492,i__9490_9494);
console.log(t_9495);

var G__9496 = seq__9487_9491;
var G__9497 = chunk__9488_9492;
var G__9498 = count__9489_9493;
var G__9499 = (i__9490_9494 + (1));
seq__9487_9491 = G__9496;
chunk__9488_9492 = G__9497;
count__9489_9493 = G__9498;
i__9490_9494 = G__9499;
continue;
} else {
var temp__4126__auto___9500 = cljs.core.seq.call(null,seq__9487_9491);
if(temp__4126__auto___9500){
var seq__9487_9501__$1 = temp__4126__auto___9500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9487_9501__$1)){
var c__4340__auto___9502 = cljs.core.chunk_first.call(null,seq__9487_9501__$1);
var G__9503 = cljs.core.chunk_rest.call(null,seq__9487_9501__$1);
var G__9504 = c__4340__auto___9502;
var G__9505 = cljs.core.count.call(null,c__4340__auto___9502);
var G__9506 = (0);
seq__9487_9491 = G__9503;
chunk__9488_9492 = G__9504;
count__9489_9493 = G__9505;
i__9490_9494 = G__9506;
continue;
} else {
var t_9507 = cljs.core.first.call(null,seq__9487_9501__$1);
console.log(t_9507);

var G__9508 = cljs.core.next.call(null,seq__9487_9501__$1);
var G__9509 = null;
var G__9510 = (0);
var G__9511 = (0);
seq__9487_9491 = G__9508;
chunk__9488_9492 = G__9509;
count__9489_9493 = G__9510;
i__9490_9494 = G__9511;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function reload(opts,changed){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__9513 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__9513,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__9513);

adzerk.boot_reload.reload.reload_css.call(null,G__9513);

adzerk.boot_reload.reload.reload_img.call(null,G__9513);

return G__9513;
});

//# sourceMappingURL=reload.js.map