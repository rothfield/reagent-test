// Compiled by ClojureScript 0.0-2760 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_11893 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_11893;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj11895 = {};
return obj11895;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__11899__delegate = function (x,p__11896){
var map__11898 = p__11896;
var map__11898__$1 = ((cljs.core.seq_QMARK_.call(null,map__11898))?cljs.core.apply.call(null,cljs.core.hash_map,map__11898):map__11898);
var validator = cljs.core.get.call(null,map__11898__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__11898__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__11899 = function (x,var_args){
var p__11896 = null;
if (arguments.length > 1) {
var G__11900__i = 0, G__11900__a = new Array(arguments.length -  1);
while (G__11900__i < G__11900__a.length) {G__11900__a[G__11900__i] = arguments[G__11900__i + 1]; ++G__11900__i;}
  p__11896 = new cljs.core.IndexedSeq(G__11900__a,0);
} 
return G__11899__delegate.call(this,x,p__11896);};
G__11899.cljs$lang$maxFixedArity = 1;
G__11899.cljs$lang$applyTo = (function (arglist__11901){
var x = cljs.core.first(arglist__11901);
var p__11896 = cljs.core.rest(arglist__11901);
return G__11899__delegate(x,p__11896);
});
G__11899.cljs$core$IFn$_invoke$arity$variadic = G__11899__delegate;
return G__11899;
})()
;
atom = function(x,var_args){
var p__11896 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__11902 = null;
if (arguments.length > 1) {
var G__11903__i = 0, G__11903__a = new Array(arguments.length -  1);
while (G__11903__i < G__11903__a.length) {G__11903__a[G__11903__i] = arguments[G__11903__i + 1]; ++G__11903__i;}
G__11902 = new cljs.core.IndexedSeq(G__11903__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__11902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__11910 = self__.ratom;
if(G__11910){
var bit__4234__auto__ = (G__11910.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4234__auto__) || (G__11910.cljs$core$IDeref$)){
return true;
} else {
if((!G__11910.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__11910);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__11910);
}
})())?reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY))?((function (this$){
return (function (p1__11905_SHARP_,p2__11904_SHARP_){
return cljs.core.reset_BANG_.call(null,self__.ratom,p2__11904_SHARP_);
});})(this$))
:((function (this$){
return (function (p1__11907_SHARP_,p2__11906_SHARP_){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,p2__11906_SHARP_);
});})(this$))
)):reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return self__.ratom.call(null,self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((function (this$){
return (function (p1__11909_SHARP_,p2__11908_SHARP_){
return self__.ratom.call(null,self__.path,p2__11908_SHARP_);
});})(this$))
));
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_11911 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_11911;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer.call(null,a__$1._peek(),writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref.call(null,this$__$1._reaction());
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function cursor(src,path){
if((function (){var G__11916 = path;
if(G__11916){
var bit__4234__auto__ = (G__11916.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4234__auto__) || (G__11916.cljs$core$IDeref$)){
return true;
} else {
if((!G__11916.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__11916);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__11916);
}
})()){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,path)),cljs.core.str(")")].join(''));
} else {
}

if((function (){var G__11917 = path;
if(G__11917){
var bit__4234__auto__ = null;
if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4234__auto__;
if(cljs.core.truth_(or__3553__auto__)){
return or__3553__auto__;
} else {
return G__11917.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__11917.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__11917);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__11917);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.call(null,path))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__3553__auto__ = (function (){var G__11919 = src;
if(G__11919){
var bit__4234__auto__ = null;
if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4234__auto__;
if(cljs.core.truth_(or__3553__auto__)){
return or__3553__auto__;
} else {
return G__11919.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__11919.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__11919);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__11919);
}
})();
if(or__3553__auto__){
return or__3553__auto__;
} else {
return (cljs.core.ifn_QMARK_.call(null,src)) && (!(cljs.core.vector_QMARK_.call(null,src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.call(null,src))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj11921 = {};
return obj11921;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3541__auto__ = this$;
if(and__3541__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3541__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4197__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3553__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj11923 = {};
return obj11923;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3541__auto__ = this$;
if(and__3541__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3541__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4197__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3553__auto__ = (reagent.ratom.run[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (reagent.ratom.run["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj11925 = {};
return obj11925;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3541__auto__ = this$;
if(and__3541__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3541__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4197__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3553__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3541__auto__ = k;
if(and__3541__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3541__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4197__auto__ = (((k == null))?null:k);
return (function (){var or__3553__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3541__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3541__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3541__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3553__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3553__auto__)){
return or__3553__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__11926_11938 = cljs.core.seq.call(null,derefed);
var chunk__11927_11939 = null;
var count__11928_11940 = (0);
var i__11929_11941 = (0);
while(true){
if((i__11929_11941 < count__11928_11940)){
var w_11942 = cljs.core._nth.call(null,chunk__11927_11939,i__11929_11941);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_11942)){
} else {
cljs.core.add_watch.call(null,w_11942,this$__$1,reagent.ratom._handle_change);
}

var G__11943 = seq__11926_11938;
var G__11944 = chunk__11927_11939;
var G__11945 = count__11928_11940;
var G__11946 = (i__11929_11941 + (1));
seq__11926_11938 = G__11943;
chunk__11927_11939 = G__11944;
count__11928_11940 = G__11945;
i__11929_11941 = G__11946;
continue;
} else {
var temp__4126__auto___11947 = cljs.core.seq.call(null,seq__11926_11938);
if(temp__4126__auto___11947){
var seq__11926_11948__$1 = temp__4126__auto___11947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11926_11948__$1)){
var c__4340__auto___11949 = cljs.core.chunk_first.call(null,seq__11926_11948__$1);
var G__11950 = cljs.core.chunk_rest.call(null,seq__11926_11948__$1);
var G__11951 = c__4340__auto___11949;
var G__11952 = cljs.core.count.call(null,c__4340__auto___11949);
var G__11953 = (0);
seq__11926_11938 = G__11950;
chunk__11927_11939 = G__11951;
count__11928_11940 = G__11952;
i__11929_11941 = G__11953;
continue;
} else {
var w_11954 = cljs.core.first.call(null,seq__11926_11948__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_11954)){
} else {
cljs.core.add_watch.call(null,w_11954,this$__$1,reagent.ratom._handle_change);
}

var G__11955 = cljs.core.next.call(null,seq__11926_11948__$1);
var G__11956 = null;
var G__11957 = (0);
var G__11958 = (0);
seq__11926_11938 = G__11955;
chunk__11927_11939 = G__11956;
count__11928_11940 = G__11957;
i__11929_11941 = G__11958;
continue;
}
} else {
}
}
break;
}

var seq__11930_11959 = cljs.core.seq.call(null,self__.watching);
var chunk__11931_11960 = null;
var count__11932_11961 = (0);
var i__11933_11962 = (0);
while(true){
if((i__11933_11962 < count__11932_11961)){
var w_11963 = cljs.core._nth.call(null,chunk__11931_11960,i__11933_11962);
if(cljs.core.contains_QMARK_.call(null,derefed,w_11963)){
} else {
cljs.core.remove_watch.call(null,w_11963,this$__$1);
}

var G__11964 = seq__11930_11959;
var G__11965 = chunk__11931_11960;
var G__11966 = count__11932_11961;
var G__11967 = (i__11933_11962 + (1));
seq__11930_11959 = G__11964;
chunk__11931_11960 = G__11965;
count__11932_11961 = G__11966;
i__11933_11962 = G__11967;
continue;
} else {
var temp__4126__auto___11968 = cljs.core.seq.call(null,seq__11930_11959);
if(temp__4126__auto___11968){
var seq__11930_11969__$1 = temp__4126__auto___11968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11930_11969__$1)){
var c__4340__auto___11970 = cljs.core.chunk_first.call(null,seq__11930_11969__$1);
var G__11971 = cljs.core.chunk_rest.call(null,seq__11930_11969__$1);
var G__11972 = c__4340__auto___11970;
var G__11973 = cljs.core.count.call(null,c__4340__auto___11970);
var G__11974 = (0);
seq__11930_11959 = G__11971;
chunk__11931_11960 = G__11972;
count__11932_11961 = G__11973;
i__11933_11962 = G__11974;
continue;
} else {
var w_11975 = cljs.core.first.call(null,seq__11930_11969__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_11975)){
} else {
cljs.core.remove_watch.call(null,w_11975,this$__$1);
}

var G__11976 = cljs.core.next.call(null,seq__11930_11969__$1);
var G__11977 = null;
var G__11978 = (0);
var G__11979 = (0);
seq__11930_11959 = G__11976;
chunk__11931_11960 = G__11977;
count__11932_11961 = G__11978;
i__11933_11962 = G__11979;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__11934_11980 = cljs.core.seq.call(null,self__.watching);
var chunk__11935_11981 = null;
var count__11936_11982 = (0);
var i__11937_11983 = (0);
while(true){
if((i__11937_11983 < count__11936_11982)){
var w_11984 = cljs.core._nth.call(null,chunk__11935_11981,i__11937_11983);
cljs.core.remove_watch.call(null,w_11984,this$__$1);

var G__11985 = seq__11934_11980;
var G__11986 = chunk__11935_11981;
var G__11987 = count__11936_11982;
var G__11988 = (i__11937_11983 + (1));
seq__11934_11980 = G__11985;
chunk__11935_11981 = G__11986;
count__11936_11982 = G__11987;
i__11937_11983 = G__11988;
continue;
} else {
var temp__4126__auto___11989 = cljs.core.seq.call(null,seq__11934_11980);
if(temp__4126__auto___11989){
var seq__11934_11990__$1 = temp__4126__auto___11989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11934_11990__$1)){
var c__4340__auto___11991 = cljs.core.chunk_first.call(null,seq__11934_11990__$1);
var G__11992 = cljs.core.chunk_rest.call(null,seq__11934_11990__$1);
var G__11993 = c__4340__auto___11991;
var G__11994 = cljs.core.count.call(null,c__4340__auto___11991);
var G__11995 = (0);
seq__11934_11980 = G__11992;
chunk__11935_11981 = G__11993;
count__11936_11982 = G__11994;
i__11937_11983 = G__11995;
continue;
} else {
var w_11996 = cljs.core.first.call(null,seq__11934_11990__$1);
cljs.core.remove_watch.call(null,w_11996,this$__$1);

var G__11997 = cljs.core.next.call(null,seq__11934_11990__$1);
var G__11998 = null;
var G__11999 = (0);
var G__12000 = (0);
seq__11934_11980 = G__11997;
chunk__11935_11981 = G__11998;
count__11936_11982 = G__11999;
i__11937_11983 = G__12000;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

self__.on_set.call(null,oldval,newval);
} else {
}

cljs.core._notify_watches.call(null,a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches.call(null,this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f__$1){
f__$1.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if((cljs.core.empty_QMARK_.call(null,self__.watches)) && (cljs.core.not.call(null,self__.auto_run))){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,(function (){var or__3553__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3553__auto__)){
return or__3553__auto__;
} else {
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_12001 = self__.state;
self__.state = self__.f.call(null);

if((oldstate_12001 === self__.state)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldstate_12001,self__.state);
}
} else {
}

return self__.state;
} else {
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__12002){
var map__12004 = p__12002;
var map__12004__$1 = ((cljs.core.seq_QMARK_.call(null,map__12004))?cljs.core.apply.call(null,cljs.core.hash_map,map__12004):map__12004);
var derefed = cljs.core.get.call(null,map__12004__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__12004__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__12004__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__12004__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__12002 = null;
if (arguments.length > 1) {
var G__12005__i = 0, G__12005__a = new Array(arguments.length -  1);
while (G__12005__i < G__12005__a.length) {G__12005__a[G__12005__i] = arguments[G__12005__i + 1]; ++G__12005__i;}
  p__12002 = new cljs.core.IndexedSeq(G__12005__a,0);
} 
return make_reaction__delegate.call(this,f,p__12002);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__12006){
var f = cljs.core.first(arglist__12006);
var p__12002 = cljs.core.rest(arglist__12006);
return make_reaction__delegate(f,p__12002);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write.call(null,writer,"#<wrap: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not.call(null,self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldval,newval);
}

self__.callback.call(null,newval);

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3541__auto__ = self__.changed;
if(cljs.core.truth_(and__3541__auto__)){
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__3541__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.call(null,this$__$1))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});

//# sourceMappingURL=ratom.js.map