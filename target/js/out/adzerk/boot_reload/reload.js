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
return (function (p1__5519_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__5519_SHARP_,path);
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
var seq__5524 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__5525 = null;
var count__5526 = (0);
var i__5527 = (0);
while(true){
if((i__5527 < count__5526)){
var s = cljs.core._nth.call(null,chunk__5525,i__5527);
var temp__4126__auto___5528 = (sheets[s]);
if(cljs.core.truth_(temp__4126__auto___5528)){
var sheet_5529 = temp__4126__auto___5528;
var temp__4126__auto___5530__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_5529.href,changed);
if(cljs.core.truth_(temp__4126__auto___5530__$1)){
var href_uri_5531 = temp__4126__auto___5530__$1;
sheet_5529.ownerNode.href = href_uri_5531.makeUnique().toString();
} else {
}
} else {
}

var G__5532 = seq__5524;
var G__5533 = chunk__5525;
var G__5534 = count__5526;
var G__5535 = (i__5527 + (1));
seq__5524 = G__5532;
chunk__5525 = G__5533;
count__5526 = G__5534;
i__5527 = G__5535;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__5524);
if(temp__4126__auto__){
var seq__5524__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5524__$1)){
var c__4340__auto__ = cljs.core.chunk_first.call(null,seq__5524__$1);
var G__5536 = cljs.core.chunk_rest.call(null,seq__5524__$1);
var G__5537 = c__4340__auto__;
var G__5538 = cljs.core.count.call(null,c__4340__auto__);
var G__5539 = (0);
seq__5524 = G__5536;
chunk__5525 = G__5537;
count__5526 = G__5538;
i__5527 = G__5539;
continue;
} else {
var s = cljs.core.first.call(null,seq__5524__$1);
var temp__4126__auto___5540__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4126__auto___5540__$1)){
var sheet_5541 = temp__4126__auto___5540__$1;
var temp__4126__auto___5542__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_5541.href,changed);
if(cljs.core.truth_(temp__4126__auto___5542__$2)){
var href_uri_5543 = temp__4126__auto___5542__$2;
sheet_5541.ownerNode.href = href_uri_5543.makeUnique().toString();
} else {
}
} else {
}

var G__5544 = cljs.core.next.call(null,seq__5524__$1);
var G__5545 = null;
var G__5546 = (0);
var G__5547 = (0);
seq__5524 = G__5544;
chunk__5525 = G__5545;
count__5526 = G__5546;
i__5527 = G__5547;
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
var seq__5552 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__5553 = null;
var count__5554 = (0);
var i__5555 = (0);
while(true){
if((i__5555 < count__5554)){
var s = cljs.core._nth.call(null,chunk__5553,i__5555);
var temp__4126__auto___5556 = (images[s]);
if(cljs.core.truth_(temp__4126__auto___5556)){
var image_5557 = temp__4126__auto___5556;
var temp__4126__auto___5558__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_5557.src,changed);
if(cljs.core.truth_(temp__4126__auto___5558__$1)){
var href_uri_5559 = temp__4126__auto___5558__$1;
image_5557.src = href_uri_5559.makeUnique().toString();
} else {
}
} else {
}

var G__5560 = seq__5552;
var G__5561 = chunk__5553;
var G__5562 = count__5554;
var G__5563 = (i__5555 + (1));
seq__5552 = G__5560;
chunk__5553 = G__5561;
count__5554 = G__5562;
i__5555 = G__5563;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__5552);
if(temp__4126__auto__){
var seq__5552__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5552__$1)){
var c__4340__auto__ = cljs.core.chunk_first.call(null,seq__5552__$1);
var G__5564 = cljs.core.chunk_rest.call(null,seq__5552__$1);
var G__5565 = c__4340__auto__;
var G__5566 = cljs.core.count.call(null,c__4340__auto__);
var G__5567 = (0);
seq__5552 = G__5564;
chunk__5553 = G__5565;
count__5554 = G__5566;
i__5555 = G__5567;
continue;
} else {
var s = cljs.core.first.call(null,seq__5552__$1);
var temp__4126__auto___5568__$1 = (images[s]);
if(cljs.core.truth_(temp__4126__auto___5568__$1)){
var image_5569 = temp__4126__auto___5568__$1;
var temp__4126__auto___5570__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_5569.src,changed);
if(cljs.core.truth_(temp__4126__auto___5570__$2)){
var href_uri_5571 = temp__4126__auto___5570__$2;
image_5569.src = href_uri_5571.makeUnique().toString();
} else {
}
} else {
}

var G__5572 = cljs.core.next.call(null,seq__5552__$1);
var G__5573 = null;
var G__5574 = (0);
var G__5575 = (0);
seq__5552 = G__5572;
chunk__5553 = G__5573;
count__5554 = G__5574;
i__5555 = G__5575;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function reload_js(changed,p__5578){
var map__5580 = p__5578;
var map__5580__$1 = ((cljs.core.seq_QMARK_.call(null,map__5580))?cljs.core.apply.call(null,cljs.core.hash_map,map__5580):map__5580);
var on_jsload = cljs.core.get.call(null,map__5580__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__5580,map__5580__$1,on_jsload){
return (function (p1__5576_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__5576_SHARP_,".js");
});})(map__5580,map__5580__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
return goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__5580,map__5580__$1,on_jsload){
return (function (p1__5577_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__5577_SHARP_).makeUnique());
});})(js_files,map__5580,map__5580__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__5580,map__5580__$1,on_jsload){
return (function() { 
var G__5581__delegate = function (_){
return on_jsload.call(null);
};
var G__5581 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__5582__i = 0, G__5582__a = new Array(arguments.length -  0);
while (G__5582__i < G__5582__a.length) {G__5582__a[G__5582__i] = arguments[G__5582__i + 0]; ++G__5582__i;}
  _ = new cljs.core.IndexedSeq(G__5582__a,0);
} 
return G__5581__delegate.call(this,_);};
G__5581.cljs$lang$maxFixedArity = 0;
G__5581.cljs$lang$applyTo = (function (arglist__5583){
var _ = cljs.core.seq(arglist__5583);
return G__5581__delegate(_);
});
G__5581.cljs$core$IFn$_invoke$arity$variadic = G__5581__delegate;
return G__5581;
})()
;})(js_files,map__5580,map__5580__$1,on_jsload))
,((function (js_files,map__5580,map__5580__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__5580,map__5580__$1,on_jsload))
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

var seq__5588_5592 = cljs.core.seq.call(null,things_to_log);
var chunk__5589_5593 = null;
var count__5590_5594 = (0);
var i__5591_5595 = (0);
while(true){
if((i__5591_5595 < count__5590_5594)){
var t_5596 = cljs.core._nth.call(null,chunk__5589_5593,i__5591_5595);
console.log(t_5596);

var G__5597 = seq__5588_5592;
var G__5598 = chunk__5589_5593;
var G__5599 = count__5590_5594;
var G__5600 = (i__5591_5595 + (1));
seq__5588_5592 = G__5597;
chunk__5589_5593 = G__5598;
count__5590_5594 = G__5599;
i__5591_5595 = G__5600;
continue;
} else {
var temp__4126__auto___5601 = cljs.core.seq.call(null,seq__5588_5592);
if(temp__4126__auto___5601){
var seq__5588_5602__$1 = temp__4126__auto___5601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5588_5602__$1)){
var c__4340__auto___5603 = cljs.core.chunk_first.call(null,seq__5588_5602__$1);
var G__5604 = cljs.core.chunk_rest.call(null,seq__5588_5602__$1);
var G__5605 = c__4340__auto___5603;
var G__5606 = cljs.core.count.call(null,c__4340__auto___5603);
var G__5607 = (0);
seq__5588_5592 = G__5604;
chunk__5589_5593 = G__5605;
count__5590_5594 = G__5606;
i__5591_5595 = G__5607;
continue;
} else {
var t_5608 = cljs.core.first.call(null,seq__5588_5602__$1);
console.log(t_5608);

var G__5609 = cljs.core.next.call(null,seq__5588_5602__$1);
var G__5610 = null;
var G__5611 = (0);
var G__5612 = (0);
seq__5588_5592 = G__5609;
chunk__5589_5593 = G__5610;
count__5590_5594 = G__5611;
i__5591_5595 = G__5612;
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

var G__5614 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__5614,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__5614);

adzerk.boot_reload.reload.reload_css.call(null,G__5614);

adzerk.boot_reload.reload.reload_img.call(null,G__5614);

return G__5614;
});

//# sourceMappingURL=reload.js.map