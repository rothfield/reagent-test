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
var get__delegate = function (k,p__12326){
var vec__12328 = p__12326;
var default$ = cljs.core.nth.call(null,vec__12328,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var get = function (k,var_args){
var p__12326 = null;
if (arguments.length > 1) {
var G__12329__i = 0, G__12329__a = new Array(arguments.length -  1);
while (G__12329__i < G__12329__a.length) {G__12329__a[G__12329__i] = arguments[G__12329__i + 1]; ++G__12329__i;}
  p__12326 = new cljs.core.IndexedSeq(G__12329__a,0);
} 
return get__delegate.call(this,k,p__12326);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__12330){
var k = cljs.core.first(arglist__12330);
var p__12326 = cljs.core.rest(arglist__12330);
return get__delegate(k,p__12326);
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
var get_in__delegate = function (ks,p__12331){
var vec__12333 = p__12331;
var default$ = cljs.core.nth.call(null,vec__12333,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__12331 = null;
if (arguments.length > 1) {
var G__12334__i = 0, G__12334__a = new Array(arguments.length -  1);
while (G__12334__i < G__12334__a.length) {G__12334__a[G__12334__i] = arguments[G__12334__i + 1]; ++G__12334__i;}
  p__12331 = new cljs.core.IndexedSeq(G__12334__a,0);
} 
return get_in__delegate.call(this,ks,p__12331);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__12335){
var ks = cljs.core.first(arglist__12335);
var p__12331 = cljs.core.rest(arglist__12335);
return get_in__delegate(ks,p__12331);
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
var G__12336__i = 0, G__12336__a = new Array(arguments.length -  1);
while (G__12336__i < G__12336__a.length) {G__12336__a[G__12336__i] = arguments[G__12336__i + 1]; ++G__12336__i;}
  args = new cljs.core.IndexedSeq(G__12336__a,0);
} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__12337){
var f = cljs.core.first(arglist__12337);
var args = cljs.core.rest(arglist__12337);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__12338_SHARP_){
return cljs.core.assoc_in.call(null,p1__12338_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__12339){
var vec__12341 = p__12339;
var default$ = cljs.core.nth.call(null,vec__12341,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var get_BANG_ = function (k,var_args){
var p__12339 = null;
if (arguments.length > 1) {
var G__12342__i = 0, G__12342__a = new Array(arguments.length -  1);
while (G__12342__i < G__12342__a.length) {G__12342__a[G__12342__i] = arguments[G__12342__i + 1]; ++G__12342__i;}
  p__12339 = new cljs.core.IndexedSeq(G__12342__a,0);
} 
return get_BANG___delegate.call(this,k,p__12339);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__12343){
var k = cljs.core.first(arglist__12343);
var p__12339 = cljs.core.rest(arglist__12343);
return get_BANG___delegate(k,p__12339);
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
var get_in_BANG___delegate = function (ks,p__12344){
var vec__12346 = p__12344;
var default$ = cljs.core.nth.call(null,vec__12346,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__12344 = null;
if (arguments.length > 1) {
var G__12347__i = 0, G__12347__a = new Array(arguments.length -  1);
while (G__12347__i < G__12347__a.length) {G__12347__a[G__12347__i] = arguments[G__12347__i + 1]; ++G__12347__i;}
  p__12344 = new cljs.core.IndexedSeq(G__12347__a,0);
} 
return get_in_BANG___delegate.call(this,ks,p__12344);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__12348){
var ks = cljs.core.first(arglist__12348);
var p__12344 = cljs.core.rest(arglist__12348);
return get_in_BANG___delegate(ks,p__12344);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__12349_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__12349_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__12350__i = 0, G__12350__a = new Array(arguments.length -  2);
while (G__12350__i < G__12350__a.length) {G__12350__a[G__12350__i] = arguments[G__12350__i + 2]; ++G__12350__i;}
  args = new cljs.core.IndexedSeq(G__12350__a,0);
} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__12351){
var ks = cljs.core.first(arglist__12351);
arglist__12351 = cljs.core.next(arglist__12351);
var f = cljs.core.first(arglist__12351);
var args = cljs.core.rest(arglist__12351);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;

//# sourceMappingURL=session.js.map