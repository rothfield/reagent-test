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
return (function (p1__5665_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__5665_SHARP_,path);
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
var seq__5670 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__5671 = null;
var count__5672 = (0);
var i__5673 = (0);
while(true){
if((i__5673 < count__5672)){
var s = cljs.core._nth.call(null,chunk__5671,i__5673);
var temp__4126__auto___5674 = (sheets[s]);
if(cljs.core.truth_(temp__4126__auto___5674)){
var sheet_5675 = temp__4126__auto___5674;
var temp__4126__auto___5676__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_5675.href,changed);
if(cljs.core.truth_(temp__4126__auto___5676__$1)){
var href_uri_5677 = temp__4126__auto___5676__$1;
sheet_5675.ownerNode.href = href_uri_5677.makeUnique().toString();
} else {
}
} else {
}

var G__5678 = seq__5670;
var G__5679 = chunk__5671;
var G__5680 = count__5672;
var G__5681 = (i__5673 + (1));
seq__5670 = G__5678;
chunk__5671 = G__5679;
count__5672 = G__5680;
i__5673 = G__5681;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__5670);
if(temp__4126__auto__){
var seq__5670__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5670__$1)){
var c__4340__auto__ = cljs.core.chunk_first.call(null,seq__5670__$1);
var G__5682 = cljs.core.chunk_rest.call(null,seq__5670__$1);
var G__5683 = c__4340__auto__;
var G__5684 = cljs.core.count.call(null,c__4340__auto__);
var G__5685 = (0);
seq__5670 = G__5682;
chunk__5671 = G__5683;
count__5672 = G__5684;
i__5673 = G__5685;
continue;
} else {
var s = cljs.core.first.call(null,seq__5670__$1);
var temp__4126__auto___5686__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4126__auto___5686__$1)){
var sheet_5687 = temp__4126__auto___5686__$1;
var temp__4126__auto___5688__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_5687.href,changed);
if(cljs.core.truth_(temp__4126__auto___5688__$2)){
var href_uri_5689 = temp__4126__auto___5688__$2;
sheet_5687.ownerNode.href = href_uri_5689.makeUnique().toString();
} else {
}
} else {
}

var G__5690 = cljs.core.next.call(null,seq__5670__$1);
var G__5691 = null;
var G__5692 = (0);
var G__5693 = (0);
seq__5670 = G__5690;
chunk__5671 = G__5691;
count__5672 = G__5692;
i__5673 = G__5693;
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
var seq__5698 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__5699 = null;
var count__5700 = (0);
var i__5701 = (0);
while(true){
if((i__5701 < count__5700)){
var s = cljs.core._nth.call(null,chunk__5699,i__5701);
var temp__4126__auto___5702 = (images[s]);
if(cljs.core.truth_(temp__4126__auto___5702)){
var image_5703 = temp__4126__auto___5702;
var temp__4126__auto___5704__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_5703.src,changed);
if(cljs.core.truth_(temp__4126__auto___5704__$1)){
var href_uri_5705 = temp__4126__auto___5704__$1;
image_5703.src = href_uri_5705.makeUnique().toString();
} else {
}
} else {
}

var G__5706 = seq__5698;
var G__5707 = chunk__5699;
var G__5708 = count__5700;
var G__5709 = (i__5701 + (1));
seq__5698 = G__5706;
chunk__5699 = G__5707;
count__5700 = G__5708;
i__5701 = G__5709;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__5698);
if(temp__4126__auto__){
var seq__5698__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5698__$1)){
var c__4340__auto__ = cljs.core.chunk_first.call(null,seq__5698__$1);
var G__5710 = cljs.core.chunk_rest.call(null,seq__5698__$1);
var G__5711 = c__4340__auto__;
var G__5712 = cljs.core.count.call(null,c__4340__auto__);
var G__5713 = (0);
seq__5698 = G__5710;
chunk__5699 = G__5711;
count__5700 = G__5712;
i__5701 = G__5713;
continue;
} else {
var s = cljs.core.first.call(null,seq__5698__$1);
var temp__4126__auto___5714__$1 = (images[s]);
if(cljs.core.truth_(temp__4126__auto___5714__$1)){
var image_5715 = temp__4126__auto___5714__$1;
var temp__4126__auto___5716__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_5715.src,changed);
if(cljs.core.truth_(temp__4126__auto___5716__$2)){
var href_uri_5717 = temp__4126__auto___5716__$2;
image_5715.src = href_uri_5717.makeUnique().toString();
} else {
}
} else {
}

var G__5718 = cljs.core.next.call(null,seq__5698__$1);
var G__5719 = null;
var G__5720 = (0);
var G__5721 = (0);
seq__5698 = G__5718;
chunk__5699 = G__5719;
count__5700 = G__5720;
i__5701 = G__5721;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function reload_js(changed,p__5724){
var map__5726 = p__5724;
var map__5726__$1 = ((cljs.core.seq_QMARK_.call(null,map__5726))?cljs.core.apply.call(null,cljs.core.hash_map,map__5726):map__5726);
var on_jsload = cljs.core.get.call(null,map__5726__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__5726,map__5726__$1,on_jsload){
return (function (p1__5722_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__5722_SHARP_,".js");
});})(map__5726,map__5726__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
return goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__5726,map__5726__$1,on_jsload){
return (function (p1__5723_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__5723_SHARP_).makeUnique());
});})(js_files,map__5726,map__5726__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__5726,map__5726__$1,on_jsload){
return (function() { 
var G__5727__delegate = function (_){
return on_jsload.call(null);
};
var G__5727 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__5728__i = 0, G__5728__a = new Array(arguments.length -  0);
while (G__5728__i < G__5728__a.length) {G__5728__a[G__5728__i] = arguments[G__5728__i + 0]; ++G__5728__i;}
  _ = new cljs.core.IndexedSeq(G__5728__a,0);
} 
return G__5727__delegate.call(this,_);};
G__5727.cljs$lang$maxFixedArity = 0;
G__5727.cljs$lang$applyTo = (function (arglist__5729){
var _ = cljs.core.seq(arglist__5729);
return G__5727__delegate(_);
});
G__5727.cljs$core$IFn$_invoke$arity$variadic = G__5727__delegate;
return G__5727;
})()
;})(js_files,map__5726,map__5726__$1,on_jsload))
,((function (js_files,map__5726,map__5726__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__5726,map__5726__$1,on_jsload))
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

var seq__5734_5738 = cljs.core.seq.call(null,things_to_log);
var chunk__5735_5739 = null;
var count__5736_5740 = (0);
var i__5737_5741 = (0);
while(true){
if((i__5737_5741 < count__5736_5740)){
var t_5742 = cljs.core._nth.call(null,chunk__5735_5739,i__5737_5741);
console.log(t_5742);

var G__5743 = seq__5734_5738;
var G__5744 = chunk__5735_5739;
var G__5745 = count__5736_5740;
var G__5746 = (i__5737_5741 + (1));
seq__5734_5738 = G__5743;
chunk__5735_5739 = G__5744;
count__5736_5740 = G__5745;
i__5737_5741 = G__5746;
continue;
} else {
var temp__4126__auto___5747 = cljs.core.seq.call(null,seq__5734_5738);
if(temp__4126__auto___5747){
var seq__5734_5748__$1 = temp__4126__auto___5747;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5734_5748__$1)){
var c__4340__auto___5749 = cljs.core.chunk_first.call(null,seq__5734_5748__$1);
var G__5750 = cljs.core.chunk_rest.call(null,seq__5734_5748__$1);
var G__5751 = c__4340__auto___5749;
var G__5752 = cljs.core.count.call(null,c__4340__auto___5749);
var G__5753 = (0);
seq__5734_5738 = G__5750;
chunk__5735_5739 = G__5751;
count__5736_5740 = G__5752;
i__5737_5741 = G__5753;
continue;
} else {
var t_5754 = cljs.core.first.call(null,seq__5734_5748__$1);
console.log(t_5754);

var G__5755 = cljs.core.next.call(null,seq__5734_5748__$1);
var G__5756 = null;
var G__5757 = (0);
var G__5758 = (0);
seq__5734_5738 = G__5755;
chunk__5735_5739 = G__5756;
count__5736_5740 = G__5757;
i__5737_5741 = G__5758;
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

var G__5760 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__5760,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__5760);

adzerk.boot_reload.reload.reload_css.call(null,G__5760);

adzerk.boot_reload.reload.reload_img.call(null,G__5760);

return G__5760;
});

//# sourceMappingURL=reload.js.map