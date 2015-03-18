// Compiled by ClojureScript 0.0-2760 {}
goog.provide('adzerk.boot_reload.client');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.reload');
goog.require('goog.net.jsloader');
goog.require('adzerk.boot_reload.websocket');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.reader');
adzerk.boot_reload.client.ws_conn = cljs.core.atom.call(null,null);
adzerk.boot_reload.client.alive_QMARK_ = (function alive_QMARK_(){
return !((cljs.core.deref.call(null,adzerk.boot_reload.client.ws_conn) == null));
});
adzerk.boot_reload.client.patch_goog_base_BANG_ = (function patch_goog_base_BANG_(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = (function (file){
if(cljs.core.truth_(goog.inHtmlDocument_())){
return goog.net.jsloader.load(file);
} else {
return null;
}
});
});
/**
* @param {...*} var_args
*/
adzerk.boot_reload.client.connect = (function() { 
var connect__delegate = function (url,p__9261){
var vec__9263 = p__9261;
var opts = cljs.core.nth.call(null,vec__9263,(0),null);
var conn = adzerk.boot_reload.websocket.websocket_connection.call(null);
adzerk.boot_reload.client.patch_goog_base_BANG_.call(null);

cljs.core.reset_BANG_.call(null,adzerk.boot_reload.client.ws_conn,conn);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"opened","opened",-1451743091),((function (conn,vec__9263,opts){
return (function (evt){
clojure.browser.net.transmit.call(null,conn,cljs.core.pr_str.call(null,window.location.protocol));

return console.info("Reload websocket connected.");
});})(conn,vec__9263,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"message","message",-406056002),((function (conn,vec__9263,opts){
return (function (evt){
var msg = cljs.reader.read_string.call(null,evt.message);
if(cljs.core.vector_QMARK_.call(null,msg)){
return adzerk.boot_reload.reload.reload.call(null,opts,msg);
} else {
return null;
}
});})(conn,vec__9263,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"closed","closed",-919675359),((function (conn,vec__9263,opts){
return (function (evt){
cljs.core.reset_BANG_.call(null,adzerk.boot_reload.client.ws_conn,null);

return console.info("Reload websocket connection closed.");
});})(conn,vec__9263,opts))
);

clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"error","error",-978969032),((function (conn,vec__9263,opts){
return (function (evt){
return console.error("Reload websocket error:",evt);
});})(conn,vec__9263,opts))
);

return clojure.browser.net.connect.call(null,conn,url);
};
var connect = function (url,var_args){
var p__9261 = null;
if (arguments.length > 1) {
var G__9264__i = 0, G__9264__a = new Array(arguments.length -  1);
while (G__9264__i < G__9264__a.length) {G__9264__a[G__9264__i] = arguments[G__9264__i + 1]; ++G__9264__i;}
  p__9261 = new cljs.core.IndexedSeq(G__9264__a,0);
} 
return connect__delegate.call(this,url,p__9261);};
connect.cljs$lang$maxFixedArity = 1;
connect.cljs$lang$applyTo = (function (arglist__9265){
var url = cljs.core.first(arglist__9265);
var p__9261 = cljs.core.rest(arglist__9265);
return connect__delegate(url,p__9261);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;

//# sourceMappingURL=client.js.map