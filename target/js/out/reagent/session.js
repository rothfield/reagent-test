// Compiled by ClojureScript 0.0-2760 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Get the key's value from the session, returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get = (function() { 
var get__delegate = function (k,p__18989){
var vec__18991 = p__18989;
var default$ = cljs.core.nth.call(null,vec__18991,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var get = function (k,var_args){
var p__18989 = null;
if (arguments.length > 1) {
var G__18992__i = 0, G__18992__a = new Array(arguments.length -  1);
while (G__18992__i < G__18992__a.length) {G__18992__a[G__18992__i] = arguments[G__18992__i + 1]; ++G__18992__i;}
  p__18989 = new cljs.core.IndexedSeq(G__18992__a,0);
} 
return get__delegate.call(this,k,p__18989);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__18993){
var k = cljs.core.first(arglist__18993);
var p__18989 = cljs.core.rest(arglist__18993);
return get__delegate(k,p__18989);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
reagent.session.put_BANG_ = (function put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
* Gets the value at the path specified by the vector ks from the session,
* returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get_in = (function() { 
var get_in__delegate = function (ks,p__18994){
var vec__18996 = p__18994;
var default$ = cljs.core.nth.call(null,vec__18996,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__18994 = null;
if (arguments.length > 1) {
var G__18997__i = 0, G__18997__a = new Array(arguments.length -  1);
while (G__18997__i < G__18997__a.length) {G__18997__a[G__18997__i] = arguments[G__18997__i + 1]; ++G__18997__i;}
  p__18994 = new cljs.core.IndexedSeq(G__18997__a,0);
} 
return get_in__delegate.call(this,ks,p__18994);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__18998){
var ks = cljs.core.first(arglist__18998);
var p__18994 = cljs.core.rest(arglist__18998);
return get_in__delegate(ks,p__18994);
});
get_in.cljs$core$IFn$_invoke$arity$variadic = get_in__delegate;
return get_in;
})()
;
/**
* Replace the current session's value with the result of executing f with
* the current value and args.
* @param {...*} var_args
*/
reagent.session.swap_BANG_ = (function() { 
var swap_BANG___delegate = function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
};
var swap_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__18999__i = 0, G__18999__a = new Array(arguments.length -  1);
while (G__18999__i < G__18999__a.length) {G__18999__a[G__18999__i] = arguments[G__18999__i + 1]; ++G__18999__i;}
  args = new cljs.core.IndexedSeq(G__18999__a,0);
} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__19000){
var f = cljs.core.first(arglist__19000);
var args = cljs.core.rest(arglist__19000);
return swap_BANG___delegate(f,args);
});
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___delegate;
return swap_BANG_;
})()
;
/**
* Remove all data from the session and start over cleanly.
*/
reagent.session.clear_BANG_ = (function clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
* Remove a key from the session
*/
reagent.session.remove_BANG_ = (function remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
* Associates a value in the session, where ks is a
* sequence of keys and v is the new value and returns
* a new nested structure. If any levels do not exist,
* hash-maps will be created.
*/
reagent.session.assoc_in_BANG_ = (function assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__19001_SHARP_){
return cljs.core.assoc_in.call(null,p1__19001_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__19002){
var vec__19004 = p__19002;
var default$ = cljs.core.nth.call(null,vec__19004,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var get_BANG_ = function (k,var_args){
var p__19002 = null;
if (arguments.length > 1) {
var G__19005__i = 0, G__19005__a = new Array(arguments.length -  1);
while (G__19005__i < G__19005__a.length) {G__19005__a[G__19005__i] = arguments[G__19005__i + 1]; ++G__19005__i;}
  p__19002 = new cljs.core.IndexedSeq(G__19005__a,0);
} 
return get_BANG___delegate.call(this,k,p__19002);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__19006){
var k = cljs.core.first(arglist__19006);
var p__19002 = cljs.core.rest(arglist__19006);
return get_BANG___delegate(k,p__19002);
});
get_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_BANG___delegate;
return get_BANG_;
})()
;
/**
* Destructive get from the session. This returns the current value of the path
* specified by the vector ks and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_in_BANG_ = (function() { 
var get_in_BANG___delegate = function (ks,p__19007){
var vec__19009 = p__19007;
var default$ = cljs.core.nth.call(null,vec__19009,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__19007 = null;
if (arguments.length > 1) {
var G__19010__i = 0, G__19010__a = new Array(arguments.length -  1);
while (G__19010__i < G__19010__a.length) {G__19010__a[G__19010__i] = arguments[G__19010__i + 1]; ++G__19010__i;}
  p__19007 = new cljs.core.IndexedSeq(G__19010__a,0);
} 
return get_in_BANG___delegate.call(this,ks,p__19007);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__19011){
var ks = cljs.core.first(arglist__19011);
var p__19007 = cljs.core.rest(arglist__19011);
return get_in_BANG___delegate(ks,p__19007);
});
get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_in_BANG___delegate;
return get_in_BANG_;
})()
;
/**
* 'Updates' a value in the session, where ks is a
* sequence of keys and f is a function that will
* take the old value along with any supplied args and return
* the new value. If any levels do not exist, hash-maps
* will be created.
* @param {...*} var_args
*/
reagent.session.update_in_BANG_ = (function() { 
var update_in_BANG___delegate = function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__19012_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__19012_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__19013__i = 0, G__19013__a = new Array(arguments.length -  2);
while (G__19013__i < G__19013__a.length) {G__19013__a[G__19013__i] = arguments[G__19013__i + 2]; ++G__19013__i;}
  args = new cljs.core.IndexedSeq(G__19013__a,0);
} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__19014){
var ks = cljs.core.first(arglist__19014);
arglist__19014 = cljs.core.next(arglist__19014);
var f = cljs.core.first(arglist__19014);
var args = cljs.core.rest(arglist__19014);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;

//# sourceMappingURL=session.js.map