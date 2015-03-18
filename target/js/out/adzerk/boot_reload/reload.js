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
return (function (p1__9405_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9405_SHARP_,path);
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
var seq__9410 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9411 = null;
var count__9412 = (0);
var i__9413 = (0);
while(true){
if((i__9413 < count__9412)){
var s = cljs.core._nth.call(null,chunk__9411,i__9413);
var temp__4126__auto___9414 = (sheets[s]);
if(cljs.core.truth_(temp__4126__auto___9414)){
var sheet_9415 = temp__4126__auto___9414;
var temp__4126__auto___9416__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_9415.href,changed);
if(cljs.core.truth_(temp__4126__auto___9416__$1)){
var href_uri_9417 = temp__4126__auto___9416__$1;
sheet_9415.ownerNode.href = href_uri_9417.makeUnique().toString();
} else {
}
} else {
}

var G__9418 = seq__9410;
var G__9419 = chunk__9411;
var G__9420 = count__9412;
var G__9421 = (i__9413 + (1));
seq__9410 = G__9418;
chunk__9411 = G__9419;
count__9412 = G__9420;
i__9413 = G__9421;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__9410);
if(temp__4126__auto__){
var seq__9410__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9410__$1)){
var c__4340__auto__ = cljs.core.chunk_first.call(null,seq__9410__$1);
var G__9422 = cljs.core.chunk_rest.call(null,seq__9410__$1);
var G__9423 = c__4340__auto__;
var G__9424 = cljs.core.count.call(null,c__4340__auto__);
var G__9425 = (0);
seq__9410 = G__9422;
chunk__9411 = G__9423;
count__9412 = G__9424;
i__9413 = G__9425;
continue;
} else {
var s = cljs.core.first.call(null,seq__9410__$1);
var temp__4126__auto___9426__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4126__auto___9426__$1)){
var sheet_9427 = temp__4126__auto___9426__$1;
var temp__4126__auto___9428__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_9427.href,changed);
if(cljs.core.truth_(temp__4126__auto___9428__$2)){
var href_uri_9429 = temp__4126__auto___9428__$2;
sheet_9427.ownerNode.href = href_uri_9429.makeUnique().toString();
} else {
}
} else {
}

var G__9430 = cljs.core.next.call(null,seq__9410__$1);
var G__9431 = null;
var G__9432 = (0);
var G__9433 = (0);
seq__9410 = G__9430;
chunk__9411 = G__9431;
count__9412 = G__9432;
i__9413 = G__9433;
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
var seq__9438 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9439 = null;
var count__9440 = (0);
var i__9441 = (0);
while(true){
if((i__9441 < count__9440)){
var s = cljs.core._nth.call(null,chunk__9439,i__9441);
var temp__4126__auto___9442 = (images[s]);
if(cljs.core.truth_(temp__4126__auto___9442)){
var image_9443 = temp__4126__auto___9442;
var temp__4126__auto___9444__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_9443.src,changed);
if(cljs.core.truth_(temp__4126__auto___9444__$1)){
var href_uri_9445 = temp__4126__auto___9444__$1;
image_9443.src = href_uri_9445.makeUnique().toString();
} else {
}
} else {
}

var G__9446 = seq__9438;
var G__9447 = chunk__9439;
var G__9448 = count__9440;
var G__9449 = (i__9441 + (1));
seq__9438 = G__9446;
chunk__9439 = G__9447;
count__9440 = G__9448;
i__9441 = G__9449;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__9438);
if(temp__4126__auto__){
var seq__9438__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9438__$1)){
var c__4340__auto__ = cljs.core.chunk_first.call(null,seq__9438__$1);
var G__9450 = cljs.core.chunk_rest.call(null,seq__9438__$1);
var G__9451 = c__4340__auto__;
var G__9452 = cljs.core.count.call(null,c__4340__auto__);
var G__9453 = (0);
seq__9438 = G__9450;
chunk__9439 = G__9451;
count__9440 = G__9452;
i__9441 = G__9453;
continue;
} else {
var s = cljs.core.first.call(null,seq__9438__$1);
var temp__4126__auto___9454__$1 = (images[s]);
if(cljs.core.truth_(temp__4126__auto___9454__$1)){
var image_9455 = temp__4126__auto___9454__$1;
var temp__4126__auto___9456__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_9455.src,changed);
if(cljs.core.truth_(temp__4126__auto___9456__$2)){
var href_uri_9457 = temp__4126__auto___9456__$2;
image_9455.src = href_uri_9457.makeUnique().toString();
} else {
}
} else {
}

var G__9458 = cljs.core.next.call(null,seq__9438__$1);
var G__9459 = null;
var G__9460 = (0);
var G__9461 = (0);
seq__9438 = G__9458;
chunk__9439 = G__9459;
count__9440 = G__9460;
i__9441 = G__9461;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function reload_js(changed,p__9464){
var map__9466 = p__9464;
var map__9466__$1 = ((cljs.core.seq_QMARK_.call(null,map__9466))?cljs.core.apply.call(null,cljs.core.hash_map,map__9466):map__9466);
var on_jsload = cljs.core.get.call(null,map__9466__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9466,map__9466__$1,on_jsload){
return (function (p1__9462_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9462_SHARP_,".js");
});})(map__9466,map__9466__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
return goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__9466,map__9466__$1,on_jsload){
return (function (p1__9463_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__9463_SHARP_).makeUnique());
});})(js_files,map__9466,map__9466__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__9466,map__9466__$1,on_jsload){
return (function() { 
var G__9467__delegate = function (_){
return on_jsload.call(null);
};
var G__9467 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9468__i = 0, G__9468__a = new Array(arguments.length -  0);
while (G__9468__i < G__9468__a.length) {G__9468__a[G__9468__i] = arguments[G__9468__i + 0]; ++G__9468__i;}
  _ = new cljs.core.IndexedSeq(G__9468__a,0);
} 
return G__9467__delegate.call(this,_);};
G__9467.cljs$lang$maxFixedArity = 0;
G__9467.cljs$lang$applyTo = (function (arglist__9469){
var _ = cljs.core.seq(arglist__9469);
return G__9467__delegate(_);
});
G__9467.cljs$core$IFn$_invoke$arity$variadic = G__9467__delegate;
return G__9467;
})()
;})(js_files,map__9466,map__9466__$1,on_jsload))
,((function (js_files,map__9466,map__9466__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9466,map__9466__$1,on_jsload))
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

var seq__9474_9478 = cljs.core.seq.call(null,things_to_log);
var chunk__9475_9479 = null;
var count__9476_9480 = (0);
var i__9477_9481 = (0);
while(true){
if((i__9477_9481 < count__9476_9480)){
var t_9482 = cljs.core._nth.call(null,chunk__9475_9479,i__9477_9481);
console.log(t_9482);

var G__9483 = seq__9474_9478;
var G__9484 = chunk__9475_9479;
var G__9485 = count__9476_9480;
var G__9486 = (i__9477_9481 + (1));
seq__9474_9478 = G__9483;
chunk__9475_9479 = G__9484;
count__9476_9480 = G__9485;
i__9477_9481 = G__9486;
continue;
} else {
var temp__4126__auto___9487 = cljs.core.seq.call(null,seq__9474_9478);
if(temp__4126__auto___9487){
var seq__9474_9488__$1 = temp__4126__auto___9487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9474_9488__$1)){
var c__4340__auto___9489 = cljs.core.chunk_first.call(null,seq__9474_9488__$1);
var G__9490 = cljs.core.chunk_rest.call(null,seq__9474_9488__$1);
var G__9491 = c__4340__auto___9489;
var G__9492 = cljs.core.count.call(null,c__4340__auto___9489);
var G__9493 = (0);
seq__9474_9478 = G__9490;
chunk__9475_9479 = G__9491;
count__9476_9480 = G__9492;
i__9477_9481 = G__9493;
continue;
} else {
var t_9494 = cljs.core.first.call(null,seq__9474_9488__$1);
console.log(t_9494);

var G__9495 = cljs.core.next.call(null,seq__9474_9488__$1);
var G__9496 = null;
var G__9497 = (0);
var G__9498 = (0);
seq__9474_9478 = G__9495;
chunk__9475_9479 = G__9496;
count__9476_9480 = G__9497;
i__9477_9481 = G__9498;
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

var G__9500 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__9500,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__9500);

adzerk.boot_reload.reload.reload_css.call(null,G__9500);

adzerk.boot_reload.reload.reload_img.call(null,G__9500);

return G__9500;
});

//# sourceMappingURL=reload.js.map