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
var get__delegate = function (k,p__18949){
var vec__18951 = p__18949;
var default$ = cljs.core.nth.call(null,vec__18951,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var get = function (k,var_args){
var p__18949 = null;
if (arguments.length > 1) {
var G__18952__i = 0, G__18952__a = new Array(arguments.length -  1);
while (G__18952__i < G__18952__a.length) {G__18952__a[G__18952__i] = arguments[G__18952__i + 1]; ++G__18952__i;}
  p__18949 = new cljs.core.IndexedSeq(G__18952__a,0);
} 
return get__delegate.call(this,k,p__18949);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__18953){
var k = cljs.core.first(arglist__18953);
var p__18949 = cljs.core.rest(arglist__18953);
return get__delegate(k,p__18949);
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
var get_in__delegate = function (ks,p__18954){
var vec__18956 = p__18954;
var default$ = cljs.core.nth.call(null,vec__18956,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__18954 = null;
if (arguments.length > 1) {
var G__18957__i = 0, G__18957__a = new Array(arguments.length -  1);
while (G__18957__i < G__18957__a.length) {G__18957__a[G__18957__i] = arguments[G__18957__i + 1]; ++G__18957__i;}
  p__18954 = new cljs.core.IndexedSeq(G__18957__a,0);
} 
return get_in__delegate.call(this,ks,p__18954);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__18958){
var ks = cljs.core.first(arglist__18958);
var p__18954 = cljs.core.rest(arglist__18958);
return get_in__delegate(ks,p__18954);
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
var G__18959__i = 0, G__18959__a = new Array(arguments.length -  1);
while (G__18959__i < G__18959__a.length) {G__18959__a[G__18959__i] = arguments[G__18959__i + 1]; ++G__18959__i;}
  args = new cljs.core.IndexedSeq(G__18959__a,0);
} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__18960){
var f = cljs.core.first(arglist__18960);
var args = cljs.core.rest(arglist__18960);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__18961_SHARP_){
return cljs.core.assoc_in.call(null,p1__18961_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__18962){
var vec__18964 = p__18962;
var default$ = cljs.core.nth.call(null,vec__18964,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var get_BANG_ = function (k,var_args){
var p__18962 = null;
if (arguments.length > 1) {
var G__18965__i = 0, G__18965__a = new Array(arguments.length -  1);
while (G__18965__i < G__18965__a.length) {G__18965__a[G__18965__i] = arguments[G__18965__i + 1]; ++G__18965__i;}
  p__18962 = new cljs.core.IndexedSeq(G__18965__a,0);
} 
return get_BANG___delegate.call(this,k,p__18962);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__18966){
var k = cljs.core.first(arglist__18966);
var p__18962 = cljs.core.rest(arglist__18966);
return get_BANG___delegate(k,p__18962);
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
var get_in_BANG___delegate = function (ks,p__18967){
var vec__18969 = p__18967;
var default$ = cljs.core.nth.call(null,vec__18969,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__18967 = null;
if (arguments.length > 1) {
var G__18970__i = 0, G__18970__a = new Array(arguments.length -  1);
while (G__18970__i < G__18970__a.length) {G__18970__a[G__18970__i] = arguments[G__18970__i + 1]; ++G__18970__i;}
  p__18967 = new cljs.core.IndexedSeq(G__18970__a,0);
} 
return get_in_BANG___delegate.call(this,ks,p__18967);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__18971){
var ks = cljs.core.first(arglist__18971);
var p__18967 = cljs.core.rest(arglist__18971);
return get_in_BANG___delegate(ks,p__18967);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__18972_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__18972_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__18973__i = 0, G__18973__a = new Array(arguments.length -  2);
while (G__18973__i < G__18973__a.length) {G__18973__a[G__18973__i] = arguments[G__18973__i + 2]; ++G__18973__i;}
  args = new cljs.core.IndexedSeq(G__18973__a,0);
} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__18974){
var ks = cljs.core.first(arglist__18974);
arglist__18974 = cljs.core.next(arglist__18974);
var f = cljs.core.first(arglist__18974);
var args = cljs.core.rest(arglist__18974);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;

//# sourceMappingURL=session.js.map