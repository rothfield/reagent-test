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
var get__delegate = function (k,p__12337){
var vec__12339 = p__12337;
var default$ = cljs.core.nth.call(null,vec__12339,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var get = function (k,var_args){
var p__12337 = null;
if (arguments.length > 1) {
var G__12340__i = 0, G__12340__a = new Array(arguments.length -  1);
while (G__12340__i < G__12340__a.length) {G__12340__a[G__12340__i] = arguments[G__12340__i + 1]; ++G__12340__i;}
  p__12337 = new cljs.core.IndexedSeq(G__12340__a,0);
} 
return get__delegate.call(this,k,p__12337);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__12341){
var k = cljs.core.first(arglist__12341);
var p__12337 = cljs.core.rest(arglist__12341);
return get__delegate(k,p__12337);
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
var get_in__delegate = function (ks,p__12342){
var vec__12344 = p__12342;
var default$ = cljs.core.nth.call(null,vec__12344,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__12342 = null;
if (arguments.length > 1) {
var G__12345__i = 0, G__12345__a = new Array(arguments.length -  1);
while (G__12345__i < G__12345__a.length) {G__12345__a[G__12345__i] = arguments[G__12345__i + 1]; ++G__12345__i;}
  p__12342 = new cljs.core.IndexedSeq(G__12345__a,0);
} 
return get_in__delegate.call(this,ks,p__12342);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__12346){
var ks = cljs.core.first(arglist__12346);
var p__12342 = cljs.core.rest(arglist__12346);
return get_in__delegate(ks,p__12342);
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
var G__12347__i = 0, G__12347__a = new Array(arguments.length -  1);
while (G__12347__i < G__12347__a.length) {G__12347__a[G__12347__i] = arguments[G__12347__i + 1]; ++G__12347__i;}
  args = new cljs.core.IndexedSeq(G__12347__a,0);
} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__12348){
var f = cljs.core.first(arglist__12348);
var args = cljs.core.rest(arglist__12348);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__12349_SHARP_){
return cljs.core.assoc_in.call(null,p1__12349_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__12350){
var vec__12352 = p__12350;
var default$ = cljs.core.nth.call(null,vec__12352,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var get_BANG_ = function (k,var_args){
var p__12350 = null;
if (arguments.length > 1) {
var G__12353__i = 0, G__12353__a = new Array(arguments.length -  1);
while (G__12353__i < G__12353__a.length) {G__12353__a[G__12353__i] = arguments[G__12353__i + 1]; ++G__12353__i;}
  p__12350 = new cljs.core.IndexedSeq(G__12353__a,0);
} 
return get_BANG___delegate.call(this,k,p__12350);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__12354){
var k = cljs.core.first(arglist__12354);
var p__12350 = cljs.core.rest(arglist__12354);
return get_BANG___delegate(k,p__12350);
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
var get_in_BANG___delegate = function (ks,p__12355){
var vec__12357 = p__12355;
var default$ = cljs.core.nth.call(null,vec__12357,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__12355 = null;
if (arguments.length > 1) {
var G__12358__i = 0, G__12358__a = new Array(arguments.length -  1);
while (G__12358__i < G__12358__a.length) {G__12358__a[G__12358__i] = arguments[G__12358__i + 1]; ++G__12358__i;}
  p__12355 = new cljs.core.IndexedSeq(G__12358__a,0);
} 
return get_in_BANG___delegate.call(this,ks,p__12355);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__12359){
var ks = cljs.core.first(arglist__12359);
var p__12355 = cljs.core.rest(arglist__12359);
return get_in_BANG___delegate(ks,p__12355);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__12360_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__12360_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__12361__i = 0, G__12361__a = new Array(arguments.length -  2);
while (G__12361__i < G__12361__a.length) {G__12361__a[G__12361__i] = arguments[G__12361__i + 2]; ++G__12361__i;}
  args = new cljs.core.IndexedSeq(G__12361__a,0);
} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__12362){
var ks = cljs.core.first(arglist__12362);
arglist__12362 = cljs.core.next(arglist__12362);
var f = cljs.core.first(arglist__12362);
var args = cljs.core.rest(arglist__12362);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;

//# sourceMappingURL=session.js.map