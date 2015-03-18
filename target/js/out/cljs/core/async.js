// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t15964 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15964 = (function (f,fn_handler,meta15965){
this.f = f;
this.fn_handler = fn_handler;
this.meta15965 = meta15965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15964.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15964.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t15964.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t15964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15966){
var self__ = this;
var _15966__$1 = this;
return self__.meta15965;
});

cljs.core.async.t15964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15966,meta15965__$1){
var self__ = this;
var _15966__$1 = this;
return (new cljs.core.async.t15964(self__.f,self__.fn_handler,meta15965__$1));
});

cljs.core.async.t15964.cljs$lang$type = true;

cljs.core.async.t15964.cljs$lang$ctorStr = "cljs.core.async/t15964";

cljs.core.async.t15964.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t15964");
});

cljs.core.async.__GT_t15964 = (function __GT_t15964(f__$1,fn_handler__$1,meta15965){
return (new cljs.core.async.t15964(f__$1,fn_handler__$1,meta15965));
});

}

return (new cljs.core.async.t15964(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),15,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/42k/-ytkm87/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__15968 = buff;
if(G__15968){
var bit__4234__auto__ = null;
if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4234__auto__;
if(cljs.core.truth_(or__3553__auto__)){
return or__3553__auto__;
} else {
return G__15968.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__15968.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15968);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15968);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_15969 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15969);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15969,ret){
return (function (){
return fn1.call(null,val_15969);
});})(val_15969,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4440__auto___15970 = n;
var x_15971 = (0);
while(true){
if((x_15971 < n__4440__auto___15970)){
(a[x_15971] = (0));

var G__15972 = (x_15971 + (1));
x_15971 = G__15972;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__15973 = (i + (1));
i = G__15973;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t15977 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15977 = (function (flag,alt_flag,meta15978){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15978 = meta15978;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15977.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15977.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t15977.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t15977.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15979){
var self__ = this;
var _15979__$1 = this;
return self__.meta15978;
});})(flag))
;

cljs.core.async.t15977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15979,meta15978__$1){
var self__ = this;
var _15979__$1 = this;
return (new cljs.core.async.t15977(self__.flag,self__.alt_flag,meta15978__$1));
});})(flag))
;

cljs.core.async.t15977.cljs$lang$type = true;

cljs.core.async.t15977.cljs$lang$ctorStr = "cljs.core.async/t15977";

cljs.core.async.t15977.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t15977");
});})(flag))
;

cljs.core.async.__GT_t15977 = ((function (flag){
return (function __GT_t15977(flag__$1,alt_flag__$1,meta15978){
return (new cljs.core.async.t15977(flag__$1,alt_flag__$1,meta15978));
});})(flag))
;

}

return (new cljs.core.async.t15977(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),135,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),130,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/42k/-ytkm87/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t15983 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15983 = (function (cb,flag,alt_handler,meta15984){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15984 = meta15984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15983.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15983.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t15983.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t15983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15985){
var self__ = this;
var _15985__$1 = this;
return self__.meta15984;
});

cljs.core.async.t15983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15985,meta15984__$1){
var self__ = this;
var _15985__$1 = this;
return (new cljs.core.async.t15983(self__.cb,self__.flag,self__.alt_handler,meta15984__$1));
});

cljs.core.async.t15983.cljs$lang$type = true;

cljs.core.async.t15983.cljs$lang$ctorStr = "cljs.core.async/t15983";

cljs.core.async.t15983.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t15983");
});

cljs.core.async.__GT_t15983 = (function __GT_t15983(cb__$1,flag__$1,alt_handler__$1,meta15984){
return (new cljs.core.async.t15983(cb__$1,flag__$1,alt_handler__$1,meta15984));
});

}

return (new cljs.core.async.t15983(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),143,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),138,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/42k/-ytkm87/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15986_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15986_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15987_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15987_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3553__auto__ = wport;
if(cljs.core.truth_(or__3553__auto__)){
return or__3553__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15988 = (i + (1));
i = G__15988;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3553__auto__ = ret;
if(cljs.core.truth_(or__3553__auto__)){
return or__3553__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3541__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3541__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3541__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__15989){
var map__15991 = p__15989;
var map__15991__$1 = ((cljs.core.seq_QMARK_.call(null,map__15991))?cljs.core.apply.call(null,cljs.core.hash_map,map__15991):map__15991);
var opts = map__15991__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

};
var alts_BANG_ = function (ports,var_args){
var p__15989 = null;
if (arguments.length > 1) {
var G__15992__i = 0, G__15992__a = new Array(arguments.length -  1);
while (G__15992__i < G__15992__a.length) {G__15992__a[G__15992__i] = arguments[G__15992__i + 1]; ++G__15992__i;}
  p__15989 = new cljs.core.IndexedSeq(G__15992__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__15989);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15993){
var ports = cljs.core.first(arglist__15993);
var p__15989 = cljs.core.rest(arglist__15993);
return alts_BANG___delegate(ports,p__15989);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t16001 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16001 = (function (ch,f,map_LT_,meta16002){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16002 = meta16002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16001.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16001.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t16001.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16001.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t16004 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16004 = (function (fn1,_,meta16002,map_LT_,f,ch,meta16005){
this.fn1 = fn1;
this._ = _;
this.meta16002 = meta16002;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16005 = meta16005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16004.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16004.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t16004.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t16004.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15994_SHARP_){
return f1.call(null,(((p1__15994_SHARP_ == null))?null:self__.f.call(null,p1__15994_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t16004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16006){
var self__ = this;
var _16006__$1 = this;
return self__.meta16005;
});})(___$1))
;

cljs.core.async.t16004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16006,meta16005__$1){
var self__ = this;
var _16006__$1 = this;
return (new cljs.core.async.t16004(self__.fn1,self__._,self__.meta16002,self__.map_LT_,self__.f,self__.ch,meta16005__$1));
});})(___$1))
;

cljs.core.async.t16004.cljs$lang$type = true;

cljs.core.async.t16004.cljs$lang$ctorStr = "cljs.core.async/t16004";

cljs.core.async.t16004.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t16004");
});})(___$1))
;

cljs.core.async.__GT_t16004 = ((function (___$1){
return (function __GT_t16004(fn1__$1,___$2,meta16002__$1,map_LT___$1,f__$1,ch__$1,meta16005){
return (new cljs.core.async.t16004(fn1__$1,___$2,meta16002__$1,map_LT___$1,f__$1,ch__$1,meta16005));
});})(___$1))
;

}

return (new cljs.core.async.t16004(fn1,___$1,self__.meta16002,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),220,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),214,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/42k/-ytkm87/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3541__auto__ = ret;
if(cljs.core.truth_(and__3541__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3541__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t16001.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16001.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16001.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16003){
var self__ = this;
var _16003__$1 = this;
return self__.meta16002;
});

cljs.core.async.t16001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16003,meta16002__$1){
var self__ = this;
var _16003__$1 = this;
return (new cljs.core.async.t16001(self__.ch,self__.f,self__.map_LT_,meta16002__$1));
});

cljs.core.async.t16001.cljs$lang$type = true;

cljs.core.async.t16001.cljs$lang$ctorStr = "cljs.core.async/t16001";

cljs.core.async.t16001.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t16001");
});

cljs.core.async.__GT_t16001 = (function __GT_t16001(ch__$1,f__$1,map_LT___$1,meta16002){
return (new cljs.core.async.t16001(ch__$1,f__$1,map_LT___$1,meta16002));
});

}

return (new cljs.core.async.t16001(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),226,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),205,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/42k/-ytkm87/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t16010 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16010 = (function (ch,f,map_GT_,meta16011){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16011 = meta16011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16010.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16010.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t16010.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16010.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16010.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16010.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16012){
var self__ = this;
var _16012__$1 = this;
return self__.meta16011;
});

cljs.core.async.t16010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16012,meta16011__$1){
var self__ = this;
var _16012__$1 = this;
return (new cljs.core.async.t16010(self__.ch,self__.f,self__.map_GT_,meta16011__$1));
});

cljs.core.async.t16010.cljs$lang$type = true;

cljs.core.async.t16010.cljs$lang$ctorStr = "cljs.core.async/t16010";

cljs.core.async.t16010.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t16010");
});

cljs.core.async.__GT_t16010 = (function __GT_t16010(ch__$1,f__$1,map_GT___$1,meta16011){
return (new cljs.core.async.t16010(ch__$1,f__$1,map_GT___$1,meta16011));
});

}

return (new cljs.core.async.t16010(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),241,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),232,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/42k/-ytkm87/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t16016 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16016 = (function (ch,p,filter_GT_,meta16017){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16017 = meta16017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16016.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16016.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t16016.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16016.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16016.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16016.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16016.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16018){
var self__ = this;
var _16018__$1 = this;
return self__.meta16017;
});

cljs.core.async.t16016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16018,meta16017__$1){
var self__ = this;
var _16018__$1 = this;
return (new cljs.core.async.t16016(self__.ch,self__.p,self__.filter_GT_,meta16017__$1));
});

cljs.core.async.t16016.cljs$lang$type = true;

cljs.core.async.t16016.cljs$lang$ctorStr = "cljs.core.async/t16016";

cljs.core.async.t16016.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t16016");
});

cljs.core.async.__GT_t16016 = (function __GT_t16016(ch__$1,p__$1,filter_GT___$1,meta16017){
return (new cljs.core.async.t16016(ch__$1,p__$1,filter_GT___$1,meta16017));
});

}

return (new cljs.core.async.t16016(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),262,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),250,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/42k/-ytkm87/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6645__auto___16101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___16101,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___16101,out){
return (function (state_16080){
var state_val_16081 = (state_16080[(1)]);
if((state_val_16081 === (7))){
var inst_16076 = (state_16080[(2)]);
var state_16080__$1 = state_16080;
var statearr_16082_16102 = state_16080__$1;
(statearr_16082_16102[(2)] = inst_16076);

(statearr_16082_16102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16081 === (1))){
var state_16080__$1 = state_16080;
var statearr_16083_16103 = state_16080__$1;
(statearr_16083_16103[(2)] = null);

(statearr_16083_16103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16081 === (4))){
var inst_16062 = (state_16080[(7)]);
var inst_16062__$1 = (state_16080[(2)]);
var inst_16063 = (inst_16062__$1 == null);
var state_16080__$1 = (function (){var statearr_16084 = state_16080;
(statearr_16084[(7)] = inst_16062__$1);

return statearr_16084;
})();
if(cljs.core.truth_(inst_16063)){
var statearr_16085_16104 = state_16080__$1;
(statearr_16085_16104[(1)] = (5));

} else {
var statearr_16086_16105 = state_16080__$1;
(statearr_16086_16105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16081 === (6))){
var inst_16062 = (state_16080[(7)]);
var inst_16067 = p.call(null,inst_16062);
var state_16080__$1 = state_16080;
if(cljs.core.truth_(inst_16067)){
var statearr_16087_16106 = state_16080__$1;
(statearr_16087_16106[(1)] = (8));

} else {
var statearr_16088_16107 = state_16080__$1;
(statearr_16088_16107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16081 === (3))){
var inst_16078 = (state_16080[(2)]);
var state_16080__$1 = state_16080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16080__$1,inst_16078);
} else {
if((state_val_16081 === (2))){
var state_16080__$1 = state_16080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16080__$1,(4),ch);
} else {
if((state_val_16081 === (11))){
var inst_16070 = (state_16080[(2)]);
var state_16080__$1 = state_16080;
var statearr_16089_16108 = state_16080__$1;
(statearr_16089_16108[(2)] = inst_16070);

(statearr_16089_16108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16081 === (9))){
var state_16080__$1 = state_16080;
var statearr_16090_16109 = state_16080__$1;
(statearr_16090_16109[(2)] = null);

(statearr_16090_16109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16081 === (5))){
var inst_16065 = cljs.core.async.close_BANG_.call(null,out);
var state_16080__$1 = state_16080;
var statearr_16091_16110 = state_16080__$1;
(statearr_16091_16110[(2)] = inst_16065);

(statearr_16091_16110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16081 === (10))){
var inst_16073 = (state_16080[(2)]);
var state_16080__$1 = (function (){var statearr_16092 = state_16080;
(statearr_16092[(8)] = inst_16073);

return statearr_16092;
})();
var statearr_16093_16111 = state_16080__$1;
(statearr_16093_16111[(2)] = null);

(statearr_16093_16111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16081 === (8))){
var inst_16062 = (state_16080[(7)]);
var state_16080__$1 = state_16080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16080__$1,(11),out,inst_16062);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6645__auto___16101,out))
;
return ((function (switch__6580__auto__,c__6645__auto___16101,out){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_16097 = [null,null,null,null,null,null,null,null,null];
(statearr_16097[(0)] = state_machine__6581__auto__);

(statearr_16097[(1)] = (1));

return statearr_16097;
});
var state_machine__6581__auto____1 = (function (state_16080){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_16080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e16098){if((e16098 instanceof Object)){
var ex__6584__auto__ = e16098;
var statearr_16099_16112 = state_16080;
(statearr_16099_16112[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16113 = state_16080;
state_16080 = G__16113;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_16080){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_16080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___16101,out))
})();
var state__6647__auto__ = (function (){var statearr_16100 = f__6646__auto__.call(null);
(statearr_16100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___16101);

return statearr_16100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___16101,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto__){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto__){
return (function (state_16279){
var state_val_16280 = (state_16279[(1)]);
if((state_val_16280 === (7))){
var inst_16275 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
var statearr_16281_16322 = state_16279__$1;
(statearr_16281_16322[(2)] = inst_16275);

(statearr_16281_16322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (20))){
var inst_16245 = (state_16279[(7)]);
var inst_16256 = (state_16279[(2)]);
var inst_16257 = cljs.core.next.call(null,inst_16245);
var inst_16231 = inst_16257;
var inst_16232 = null;
var inst_16233 = (0);
var inst_16234 = (0);
var state_16279__$1 = (function (){var statearr_16282 = state_16279;
(statearr_16282[(8)] = inst_16233);

(statearr_16282[(9)] = inst_16234);

(statearr_16282[(10)] = inst_16232);

(statearr_16282[(11)] = inst_16256);

(statearr_16282[(12)] = inst_16231);

return statearr_16282;
})();
var statearr_16283_16323 = state_16279__$1;
(statearr_16283_16323[(2)] = null);

(statearr_16283_16323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (1))){
var state_16279__$1 = state_16279;
var statearr_16284_16324 = state_16279__$1;
(statearr_16284_16324[(2)] = null);

(statearr_16284_16324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (4))){
var inst_16220 = (state_16279[(13)]);
var inst_16220__$1 = (state_16279[(2)]);
var inst_16221 = (inst_16220__$1 == null);
var state_16279__$1 = (function (){var statearr_16285 = state_16279;
(statearr_16285[(13)] = inst_16220__$1);

return statearr_16285;
})();
if(cljs.core.truth_(inst_16221)){
var statearr_16286_16325 = state_16279__$1;
(statearr_16286_16325[(1)] = (5));

} else {
var statearr_16287_16326 = state_16279__$1;
(statearr_16287_16326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (15))){
var state_16279__$1 = state_16279;
var statearr_16291_16327 = state_16279__$1;
(statearr_16291_16327[(2)] = null);

(statearr_16291_16327[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (21))){
var state_16279__$1 = state_16279;
var statearr_16292_16328 = state_16279__$1;
(statearr_16292_16328[(2)] = null);

(statearr_16292_16328[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (13))){
var inst_16233 = (state_16279[(8)]);
var inst_16234 = (state_16279[(9)]);
var inst_16232 = (state_16279[(10)]);
var inst_16231 = (state_16279[(12)]);
var inst_16241 = (state_16279[(2)]);
var inst_16242 = (inst_16234 + (1));
var tmp16288 = inst_16233;
var tmp16289 = inst_16232;
var tmp16290 = inst_16231;
var inst_16231__$1 = tmp16290;
var inst_16232__$1 = tmp16289;
var inst_16233__$1 = tmp16288;
var inst_16234__$1 = inst_16242;
var state_16279__$1 = (function (){var statearr_16293 = state_16279;
(statearr_16293[(8)] = inst_16233__$1);

(statearr_16293[(9)] = inst_16234__$1);

(statearr_16293[(10)] = inst_16232__$1);

(statearr_16293[(14)] = inst_16241);

(statearr_16293[(12)] = inst_16231__$1);

return statearr_16293;
})();
var statearr_16294_16329 = state_16279__$1;
(statearr_16294_16329[(2)] = null);

(statearr_16294_16329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (22))){
var state_16279__$1 = state_16279;
var statearr_16295_16330 = state_16279__$1;
(statearr_16295_16330[(2)] = null);

(statearr_16295_16330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (6))){
var inst_16220 = (state_16279[(13)]);
var inst_16229 = f.call(null,inst_16220);
var inst_16230 = cljs.core.seq.call(null,inst_16229);
var inst_16231 = inst_16230;
var inst_16232 = null;
var inst_16233 = (0);
var inst_16234 = (0);
var state_16279__$1 = (function (){var statearr_16296 = state_16279;
(statearr_16296[(8)] = inst_16233);

(statearr_16296[(9)] = inst_16234);

(statearr_16296[(10)] = inst_16232);

(statearr_16296[(12)] = inst_16231);

return statearr_16296;
})();
var statearr_16297_16331 = state_16279__$1;
(statearr_16297_16331[(2)] = null);

(statearr_16297_16331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (17))){
var inst_16245 = (state_16279[(7)]);
var inst_16249 = cljs.core.chunk_first.call(null,inst_16245);
var inst_16250 = cljs.core.chunk_rest.call(null,inst_16245);
var inst_16251 = cljs.core.count.call(null,inst_16249);
var inst_16231 = inst_16250;
var inst_16232 = inst_16249;
var inst_16233 = inst_16251;
var inst_16234 = (0);
var state_16279__$1 = (function (){var statearr_16298 = state_16279;
(statearr_16298[(8)] = inst_16233);

(statearr_16298[(9)] = inst_16234);

(statearr_16298[(10)] = inst_16232);

(statearr_16298[(12)] = inst_16231);

return statearr_16298;
})();
var statearr_16299_16332 = state_16279__$1;
(statearr_16299_16332[(2)] = null);

(statearr_16299_16332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (3))){
var inst_16277 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16279__$1,inst_16277);
} else {
if((state_val_16280 === (12))){
var inst_16265 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
var statearr_16300_16333 = state_16279__$1;
(statearr_16300_16333[(2)] = inst_16265);

(statearr_16300_16333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (2))){
var state_16279__$1 = state_16279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16279__$1,(4),in$);
} else {
if((state_val_16280 === (23))){
var inst_16273 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
var statearr_16301_16334 = state_16279__$1;
(statearr_16301_16334[(2)] = inst_16273);

(statearr_16301_16334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (19))){
var inst_16260 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
var statearr_16302_16335 = state_16279__$1;
(statearr_16302_16335[(2)] = inst_16260);

(statearr_16302_16335[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (11))){
var inst_16245 = (state_16279[(7)]);
var inst_16231 = (state_16279[(12)]);
var inst_16245__$1 = cljs.core.seq.call(null,inst_16231);
var state_16279__$1 = (function (){var statearr_16303 = state_16279;
(statearr_16303[(7)] = inst_16245__$1);

return statearr_16303;
})();
if(inst_16245__$1){
var statearr_16304_16336 = state_16279__$1;
(statearr_16304_16336[(1)] = (14));

} else {
var statearr_16305_16337 = state_16279__$1;
(statearr_16305_16337[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (9))){
var inst_16267 = (state_16279[(2)]);
var inst_16268 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16279__$1 = (function (){var statearr_16306 = state_16279;
(statearr_16306[(15)] = inst_16267);

return statearr_16306;
})();
if(cljs.core.truth_(inst_16268)){
var statearr_16307_16338 = state_16279__$1;
(statearr_16307_16338[(1)] = (21));

} else {
var statearr_16308_16339 = state_16279__$1;
(statearr_16308_16339[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (5))){
var inst_16223 = cljs.core.async.close_BANG_.call(null,out);
var state_16279__$1 = state_16279;
var statearr_16309_16340 = state_16279__$1;
(statearr_16309_16340[(2)] = inst_16223);

(statearr_16309_16340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (14))){
var inst_16245 = (state_16279[(7)]);
var inst_16247 = cljs.core.chunked_seq_QMARK_.call(null,inst_16245);
var state_16279__$1 = state_16279;
if(inst_16247){
var statearr_16310_16341 = state_16279__$1;
(statearr_16310_16341[(1)] = (17));

} else {
var statearr_16311_16342 = state_16279__$1;
(statearr_16311_16342[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (16))){
var inst_16263 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
var statearr_16312_16343 = state_16279__$1;
(statearr_16312_16343[(2)] = inst_16263);

(statearr_16312_16343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (10))){
var inst_16234 = (state_16279[(9)]);
var inst_16232 = (state_16279[(10)]);
var inst_16239 = cljs.core._nth.call(null,inst_16232,inst_16234);
var state_16279__$1 = state_16279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16279__$1,(13),out,inst_16239);
} else {
if((state_val_16280 === (18))){
var inst_16245 = (state_16279[(7)]);
var inst_16254 = cljs.core.first.call(null,inst_16245);
var state_16279__$1 = state_16279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16279__$1,(20),out,inst_16254);
} else {
if((state_val_16280 === (8))){
var inst_16233 = (state_16279[(8)]);
var inst_16234 = (state_16279[(9)]);
var inst_16236 = (inst_16234 < inst_16233);
var inst_16237 = inst_16236;
var state_16279__$1 = state_16279;
if(cljs.core.truth_(inst_16237)){
var statearr_16313_16344 = state_16279__$1;
(statearr_16313_16344[(1)] = (10));

} else {
var statearr_16314_16345 = state_16279__$1;
(statearr_16314_16345[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6645__auto__))
;
return ((function (switch__6580__auto__,c__6645__auto__){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_16318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16318[(0)] = state_machine__6581__auto__);

(statearr_16318[(1)] = (1));

return statearr_16318;
});
var state_machine__6581__auto____1 = (function (state_16279){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_16279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e16319){if((e16319 instanceof Object)){
var ex__6584__auto__ = e16319;
var statearr_16320_16346 = state_16279;
(statearr_16320_16346[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16347 = state_16279;
state_16279 = G__16347;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_16279){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_16279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto__))
})();
var state__6647__auto__ = (function (){var statearr_16321 = f__6646__auto__.call(null);
(statearr_16321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto__);

return statearr_16321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto__))
);

return c__6645__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6645__auto___16442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___16442){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___16442){
return (function (state_16418){
var state_val_16419 = (state_16418[(1)]);
if((state_val_16419 === (7))){
var inst_16414 = (state_16418[(2)]);
var state_16418__$1 = state_16418;
var statearr_16420_16443 = state_16418__$1;
(statearr_16420_16443[(2)] = inst_16414);

(statearr_16420_16443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16419 === (1))){
var state_16418__$1 = state_16418;
var statearr_16421_16444 = state_16418__$1;
(statearr_16421_16444[(2)] = null);

(statearr_16421_16444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16419 === (4))){
var inst_16397 = (state_16418[(7)]);
var inst_16397__$1 = (state_16418[(2)]);
var inst_16398 = (inst_16397__$1 == null);
var state_16418__$1 = (function (){var statearr_16422 = state_16418;
(statearr_16422[(7)] = inst_16397__$1);

return statearr_16422;
})();
if(cljs.core.truth_(inst_16398)){
var statearr_16423_16445 = state_16418__$1;
(statearr_16423_16445[(1)] = (5));

} else {
var statearr_16424_16446 = state_16418__$1;
(statearr_16424_16446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16419 === (13))){
var state_16418__$1 = state_16418;
var statearr_16425_16447 = state_16418__$1;
(statearr_16425_16447[(2)] = null);

(statearr_16425_16447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16419 === (6))){
var inst_16397 = (state_16418[(7)]);
var state_16418__$1 = state_16418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16418__$1,(11),to,inst_16397);
} else {
if((state_val_16419 === (3))){
var inst_16416 = (state_16418[(2)]);
var state_16418__$1 = state_16418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16418__$1,inst_16416);
} else {
if((state_val_16419 === (12))){
var state_16418__$1 = state_16418;
var statearr_16426_16448 = state_16418__$1;
(statearr_16426_16448[(2)] = null);

(statearr_16426_16448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16419 === (2))){
var state_16418__$1 = state_16418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16418__$1,(4),from);
} else {
if((state_val_16419 === (11))){
var inst_16407 = (state_16418[(2)]);
var state_16418__$1 = state_16418;
if(cljs.core.truth_(inst_16407)){
var statearr_16427_16449 = state_16418__$1;
(statearr_16427_16449[(1)] = (12));

} else {
var statearr_16428_16450 = state_16418__$1;
(statearr_16428_16450[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16419 === (9))){
var state_16418__$1 = state_16418;
var statearr_16429_16451 = state_16418__$1;
(statearr_16429_16451[(2)] = null);

(statearr_16429_16451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16419 === (5))){
var state_16418__$1 = state_16418;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16430_16452 = state_16418__$1;
(statearr_16430_16452[(1)] = (8));

} else {
var statearr_16431_16453 = state_16418__$1;
(statearr_16431_16453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16419 === (14))){
var inst_16412 = (state_16418[(2)]);
var state_16418__$1 = state_16418;
var statearr_16432_16454 = state_16418__$1;
(statearr_16432_16454[(2)] = inst_16412);

(statearr_16432_16454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16419 === (10))){
var inst_16404 = (state_16418[(2)]);
var state_16418__$1 = state_16418;
var statearr_16433_16455 = state_16418__$1;
(statearr_16433_16455[(2)] = inst_16404);

(statearr_16433_16455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16419 === (8))){
var inst_16401 = cljs.core.async.close_BANG_.call(null,to);
var state_16418__$1 = state_16418;
var statearr_16434_16456 = state_16418__$1;
(statearr_16434_16456[(2)] = inst_16401);

(statearr_16434_16456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6645__auto___16442))
;
return ((function (switch__6580__auto__,c__6645__auto___16442){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_16438 = [null,null,null,null,null,null,null,null];
(statearr_16438[(0)] = state_machine__6581__auto__);

(statearr_16438[(1)] = (1));

return statearr_16438;
});
var state_machine__6581__auto____1 = (function (state_16418){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_16418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e16439){if((e16439 instanceof Object)){
var ex__6584__auto__ = e16439;
var statearr_16440_16457 = state_16418;
(statearr_16440_16457[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16458 = state_16418;
state_16418 = G__16458;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_16418){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_16418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___16442))
})();
var state__6647__auto__ = (function (){var statearr_16441 = f__6646__auto__.call(null);
(statearr_16441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___16442);

return statearr_16441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___16442))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6645__auto___16559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___16559,tc,fc){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___16559,tc,fc){
return (function (state_16534){
var state_val_16535 = (state_16534[(1)]);
if((state_val_16535 === (7))){
var inst_16530 = (state_16534[(2)]);
var state_16534__$1 = state_16534;
var statearr_16536_16560 = state_16534__$1;
(statearr_16536_16560[(2)] = inst_16530);

(statearr_16536_16560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (1))){
var state_16534__$1 = state_16534;
var statearr_16537_16561 = state_16534__$1;
(statearr_16537_16561[(2)] = null);

(statearr_16537_16561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (4))){
var inst_16511 = (state_16534[(7)]);
var inst_16511__$1 = (state_16534[(2)]);
var inst_16512 = (inst_16511__$1 == null);
var state_16534__$1 = (function (){var statearr_16538 = state_16534;
(statearr_16538[(7)] = inst_16511__$1);

return statearr_16538;
})();
if(cljs.core.truth_(inst_16512)){
var statearr_16539_16562 = state_16534__$1;
(statearr_16539_16562[(1)] = (5));

} else {
var statearr_16540_16563 = state_16534__$1;
(statearr_16540_16563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (13))){
var state_16534__$1 = state_16534;
var statearr_16541_16564 = state_16534__$1;
(statearr_16541_16564[(2)] = null);

(statearr_16541_16564[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (6))){
var inst_16511 = (state_16534[(7)]);
var inst_16517 = p.call(null,inst_16511);
var state_16534__$1 = state_16534;
if(cljs.core.truth_(inst_16517)){
var statearr_16542_16565 = state_16534__$1;
(statearr_16542_16565[(1)] = (9));

} else {
var statearr_16543_16566 = state_16534__$1;
(statearr_16543_16566[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (3))){
var inst_16532 = (state_16534[(2)]);
var state_16534__$1 = state_16534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16534__$1,inst_16532);
} else {
if((state_val_16535 === (12))){
var state_16534__$1 = state_16534;
var statearr_16544_16567 = state_16534__$1;
(statearr_16544_16567[(2)] = null);

(statearr_16544_16567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (2))){
var state_16534__$1 = state_16534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16534__$1,(4),ch);
} else {
if((state_val_16535 === (11))){
var inst_16511 = (state_16534[(7)]);
var inst_16521 = (state_16534[(2)]);
var state_16534__$1 = state_16534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16534__$1,(8),inst_16521,inst_16511);
} else {
if((state_val_16535 === (9))){
var state_16534__$1 = state_16534;
var statearr_16545_16568 = state_16534__$1;
(statearr_16545_16568[(2)] = tc);

(statearr_16545_16568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (5))){
var inst_16514 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16515 = cljs.core.async.close_BANG_.call(null,fc);
var state_16534__$1 = (function (){var statearr_16546 = state_16534;
(statearr_16546[(8)] = inst_16514);

return statearr_16546;
})();
var statearr_16547_16569 = state_16534__$1;
(statearr_16547_16569[(2)] = inst_16515);

(statearr_16547_16569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (14))){
var inst_16528 = (state_16534[(2)]);
var state_16534__$1 = state_16534;
var statearr_16548_16570 = state_16534__$1;
(statearr_16548_16570[(2)] = inst_16528);

(statearr_16548_16570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (10))){
var state_16534__$1 = state_16534;
var statearr_16549_16571 = state_16534__$1;
(statearr_16549_16571[(2)] = fc);

(statearr_16549_16571[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (8))){
var inst_16523 = (state_16534[(2)]);
var state_16534__$1 = state_16534;
if(cljs.core.truth_(inst_16523)){
var statearr_16550_16572 = state_16534__$1;
(statearr_16550_16572[(1)] = (12));

} else {
var statearr_16551_16573 = state_16534__$1;
(statearr_16551_16573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6645__auto___16559,tc,fc))
;
return ((function (switch__6580__auto__,c__6645__auto___16559,tc,fc){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_16555 = [null,null,null,null,null,null,null,null,null];
(statearr_16555[(0)] = state_machine__6581__auto__);

(statearr_16555[(1)] = (1));

return statearr_16555;
});
var state_machine__6581__auto____1 = (function (state_16534){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_16534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e16556){if((e16556 instanceof Object)){
var ex__6584__auto__ = e16556;
var statearr_16557_16574 = state_16534;
(statearr_16557_16574[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16575 = state_16534;
state_16534 = G__16575;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_16534){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_16534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___16559,tc,fc))
})();
var state__6647__auto__ = (function (){var statearr_16558 = f__6646__auto__.call(null);
(statearr_16558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___16559);

return statearr_16558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___16559,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto__){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto__){
return (function (state_16622){
var state_val_16623 = (state_16622[(1)]);
if((state_val_16623 === (7))){
var inst_16618 = (state_16622[(2)]);
var state_16622__$1 = state_16622;
var statearr_16624_16640 = state_16622__$1;
(statearr_16624_16640[(2)] = inst_16618);

(statearr_16624_16640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16623 === (6))){
var inst_16608 = (state_16622[(7)]);
var inst_16611 = (state_16622[(8)]);
var inst_16615 = f.call(null,inst_16608,inst_16611);
var inst_16608__$1 = inst_16615;
var state_16622__$1 = (function (){var statearr_16625 = state_16622;
(statearr_16625[(7)] = inst_16608__$1);

return statearr_16625;
})();
var statearr_16626_16641 = state_16622__$1;
(statearr_16626_16641[(2)] = null);

(statearr_16626_16641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16623 === (5))){
var inst_16608 = (state_16622[(7)]);
var state_16622__$1 = state_16622;
var statearr_16627_16642 = state_16622__$1;
(statearr_16627_16642[(2)] = inst_16608);

(statearr_16627_16642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16623 === (4))){
var inst_16611 = (state_16622[(8)]);
var inst_16611__$1 = (state_16622[(2)]);
var inst_16612 = (inst_16611__$1 == null);
var state_16622__$1 = (function (){var statearr_16628 = state_16622;
(statearr_16628[(8)] = inst_16611__$1);

return statearr_16628;
})();
if(cljs.core.truth_(inst_16612)){
var statearr_16629_16643 = state_16622__$1;
(statearr_16629_16643[(1)] = (5));

} else {
var statearr_16630_16644 = state_16622__$1;
(statearr_16630_16644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16623 === (3))){
var inst_16620 = (state_16622[(2)]);
var state_16622__$1 = state_16622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16622__$1,inst_16620);
} else {
if((state_val_16623 === (2))){
var state_16622__$1 = state_16622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16622__$1,(4),ch);
} else {
if((state_val_16623 === (1))){
var inst_16608 = init;
var state_16622__$1 = (function (){var statearr_16631 = state_16622;
(statearr_16631[(7)] = inst_16608);

return statearr_16631;
})();
var statearr_16632_16645 = state_16622__$1;
(statearr_16632_16645[(2)] = null);

(statearr_16632_16645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__6645__auto__))
;
return ((function (switch__6580__auto__,c__6645__auto__){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_16636 = [null,null,null,null,null,null,null,null,null];
(statearr_16636[(0)] = state_machine__6581__auto__);

(statearr_16636[(1)] = (1));

return statearr_16636;
});
var state_machine__6581__auto____1 = (function (state_16622){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_16622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e16637){if((e16637 instanceof Object)){
var ex__6584__auto__ = e16637;
var statearr_16638_16646 = state_16622;
(statearr_16638_16646[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16647 = state_16622;
state_16622 = G__16647;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_16622){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_16622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto__))
})();
var state__6647__auto__ = (function (){var statearr_16639 = f__6646__auto__.call(null);
(statearr_16639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto__);

return statearr_16639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto__))
);

return c__6645__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto__){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto__){
return (function (state_16721){
var state_val_16722 = (state_16721[(1)]);
if((state_val_16722 === (7))){
var inst_16703 = (state_16721[(2)]);
var state_16721__$1 = state_16721;
var statearr_16723_16746 = state_16721__$1;
(statearr_16723_16746[(2)] = inst_16703);

(statearr_16723_16746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16722 === (1))){
var inst_16697 = cljs.core.seq.call(null,coll);
var inst_16698 = inst_16697;
var state_16721__$1 = (function (){var statearr_16724 = state_16721;
(statearr_16724[(7)] = inst_16698);

return statearr_16724;
})();
var statearr_16725_16747 = state_16721__$1;
(statearr_16725_16747[(2)] = null);

(statearr_16725_16747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16722 === (4))){
var inst_16698 = (state_16721[(7)]);
var inst_16701 = cljs.core.first.call(null,inst_16698);
var state_16721__$1 = state_16721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16721__$1,(7),ch,inst_16701);
} else {
if((state_val_16722 === (13))){
var inst_16715 = (state_16721[(2)]);
var state_16721__$1 = state_16721;
var statearr_16726_16748 = state_16721__$1;
(statearr_16726_16748[(2)] = inst_16715);

(statearr_16726_16748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16722 === (6))){
var inst_16706 = (state_16721[(2)]);
var state_16721__$1 = state_16721;
if(cljs.core.truth_(inst_16706)){
var statearr_16727_16749 = state_16721__$1;
(statearr_16727_16749[(1)] = (8));

} else {
var statearr_16728_16750 = state_16721__$1;
(statearr_16728_16750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16722 === (3))){
var inst_16719 = (state_16721[(2)]);
var state_16721__$1 = state_16721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16721__$1,inst_16719);
} else {
if((state_val_16722 === (12))){
var state_16721__$1 = state_16721;
var statearr_16729_16751 = state_16721__$1;
(statearr_16729_16751[(2)] = null);

(statearr_16729_16751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16722 === (2))){
var inst_16698 = (state_16721[(7)]);
var state_16721__$1 = state_16721;
if(cljs.core.truth_(inst_16698)){
var statearr_16730_16752 = state_16721__$1;
(statearr_16730_16752[(1)] = (4));

} else {
var statearr_16731_16753 = state_16721__$1;
(statearr_16731_16753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16722 === (11))){
var inst_16712 = cljs.core.async.close_BANG_.call(null,ch);
var state_16721__$1 = state_16721;
var statearr_16732_16754 = state_16721__$1;
(statearr_16732_16754[(2)] = inst_16712);

(statearr_16732_16754[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16722 === (9))){
var state_16721__$1 = state_16721;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16733_16755 = state_16721__$1;
(statearr_16733_16755[(1)] = (11));

} else {
var statearr_16734_16756 = state_16721__$1;
(statearr_16734_16756[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16722 === (5))){
var inst_16698 = (state_16721[(7)]);
var state_16721__$1 = state_16721;
var statearr_16735_16757 = state_16721__$1;
(statearr_16735_16757[(2)] = inst_16698);

(statearr_16735_16757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16722 === (10))){
var inst_16717 = (state_16721[(2)]);
var state_16721__$1 = state_16721;
var statearr_16736_16758 = state_16721__$1;
(statearr_16736_16758[(2)] = inst_16717);

(statearr_16736_16758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16722 === (8))){
var inst_16698 = (state_16721[(7)]);
var inst_16708 = cljs.core.next.call(null,inst_16698);
var inst_16698__$1 = inst_16708;
var state_16721__$1 = (function (){var statearr_16737 = state_16721;
(statearr_16737[(7)] = inst_16698__$1);

return statearr_16737;
})();
var statearr_16738_16759 = state_16721__$1;
(statearr_16738_16759[(2)] = null);

(statearr_16738_16759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6645__auto__))
;
return ((function (switch__6580__auto__,c__6645__auto__){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_16742 = [null,null,null,null,null,null,null,null];
(statearr_16742[(0)] = state_machine__6581__auto__);

(statearr_16742[(1)] = (1));

return statearr_16742;
});
var state_machine__6581__auto____1 = (function (state_16721){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_16721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e16743){if((e16743 instanceof Object)){
var ex__6584__auto__ = e16743;
var statearr_16744_16760 = state_16721;
(statearr_16744_16760[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16761 = state_16721;
state_16721 = G__16761;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_16721){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_16721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto__))
})();
var state__6647__auto__ = (function (){var statearr_16745 = f__6646__auto__.call(null);
(statearr_16745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto__);

return statearr_16745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto__))
);

return c__6645__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj16763 = {};
return obj16763;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3541__auto__ = _;
if(and__3541__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3541__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4197__auto__ = (((_ == null))?null:_);
return (function (){var or__3553__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj16765 = {};
return obj16765;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3541__auto__ = m;
if(and__3541__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3541__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4197__auto__ = (((m == null))?null:m);
return (function (){var or__3553__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3541__auto__ = m;
if(and__3541__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3541__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4197__auto__ = (((m == null))?null:m);
return (function (){var or__3553__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3541__auto__ = m;
if(and__3541__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3541__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4197__auto__ = (((m == null))?null:m);
return (function (){var or__3553__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t16987 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16987 = (function (cs,ch,mult,meta16988){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16988 = meta16988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16987.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t16987.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t16987.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t16987.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t16987.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16987.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t16987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16989){
var self__ = this;
var _16989__$1 = this;
return self__.meta16988;
});})(cs))
;

cljs.core.async.t16987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16989,meta16988__$1){
var self__ = this;
var _16989__$1 = this;
return (new cljs.core.async.t16987(self__.cs,self__.ch,self__.mult,meta16988__$1));
});})(cs))
;

cljs.core.async.t16987.cljs$lang$type = true;

cljs.core.async.t16987.cljs$lang$ctorStr = "cljs.core.async/t16987";

cljs.core.async.t16987.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t16987");
});})(cs))
;

cljs.core.async.__GT_t16987 = ((function (cs){
return (function __GT_t16987(cs__$1,ch__$1,mult__$1,meta16988){
return (new cljs.core.async.t16987(cs__$1,ch__$1,mult__$1,meta16988));
});})(cs))
;

}

return (new cljs.core.async.t16987(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),443,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),436,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/42k/-ytkm87/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6645__auto___17208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___17208,cs,m,dchan,dctr,done){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___17208,cs,m,dchan,dctr,done){
return (function (state_17120){
var state_val_17121 = (state_17120[(1)]);
if((state_val_17121 === (7))){
var inst_17116 = (state_17120[(2)]);
var state_17120__$1 = state_17120;
var statearr_17122_17209 = state_17120__$1;
(statearr_17122_17209[(2)] = inst_17116);

(statearr_17122_17209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (20))){
var inst_17021 = (state_17120[(7)]);
var inst_17031 = cljs.core.first.call(null,inst_17021);
var inst_17032 = cljs.core.nth.call(null,inst_17031,(0),null);
var inst_17033 = cljs.core.nth.call(null,inst_17031,(1),null);
var state_17120__$1 = (function (){var statearr_17123 = state_17120;
(statearr_17123[(8)] = inst_17032);

return statearr_17123;
})();
if(cljs.core.truth_(inst_17033)){
var statearr_17124_17210 = state_17120__$1;
(statearr_17124_17210[(1)] = (22));

} else {
var statearr_17125_17211 = state_17120__$1;
(statearr_17125_17211[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (27))){
var inst_17063 = (state_17120[(9)]);
var inst_17068 = (state_17120[(10)]);
var inst_16992 = (state_17120[(11)]);
var inst_17061 = (state_17120[(12)]);
var inst_17068__$1 = cljs.core._nth.call(null,inst_17061,inst_17063);
var inst_17069 = cljs.core.async.put_BANG_.call(null,inst_17068__$1,inst_16992,done);
var state_17120__$1 = (function (){var statearr_17126 = state_17120;
(statearr_17126[(10)] = inst_17068__$1);

return statearr_17126;
})();
if(cljs.core.truth_(inst_17069)){
var statearr_17127_17212 = state_17120__$1;
(statearr_17127_17212[(1)] = (30));

} else {
var statearr_17128_17213 = state_17120__$1;
(statearr_17128_17213[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (1))){
var state_17120__$1 = state_17120;
var statearr_17129_17214 = state_17120__$1;
(statearr_17129_17214[(2)] = null);

(statearr_17129_17214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (24))){
var inst_17021 = (state_17120[(7)]);
var inst_17038 = (state_17120[(2)]);
var inst_17039 = cljs.core.next.call(null,inst_17021);
var inst_17001 = inst_17039;
var inst_17002 = null;
var inst_17003 = (0);
var inst_17004 = (0);
var state_17120__$1 = (function (){var statearr_17130 = state_17120;
(statearr_17130[(13)] = inst_17001);

(statearr_17130[(14)] = inst_17038);

(statearr_17130[(15)] = inst_17003);

(statearr_17130[(16)] = inst_17002);

(statearr_17130[(17)] = inst_17004);

return statearr_17130;
})();
var statearr_17131_17215 = state_17120__$1;
(statearr_17131_17215[(2)] = null);

(statearr_17131_17215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (39))){
var state_17120__$1 = state_17120;
var statearr_17135_17216 = state_17120__$1;
(statearr_17135_17216[(2)] = null);

(statearr_17135_17216[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (4))){
var inst_16992 = (state_17120[(11)]);
var inst_16992__$1 = (state_17120[(2)]);
var inst_16993 = (inst_16992__$1 == null);
var state_17120__$1 = (function (){var statearr_17136 = state_17120;
(statearr_17136[(11)] = inst_16992__$1);

return statearr_17136;
})();
if(cljs.core.truth_(inst_16993)){
var statearr_17137_17217 = state_17120__$1;
(statearr_17137_17217[(1)] = (5));

} else {
var statearr_17138_17218 = state_17120__$1;
(statearr_17138_17218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (15))){
var inst_17001 = (state_17120[(13)]);
var inst_17003 = (state_17120[(15)]);
var inst_17002 = (state_17120[(16)]);
var inst_17004 = (state_17120[(17)]);
var inst_17017 = (state_17120[(2)]);
var inst_17018 = (inst_17004 + (1));
var tmp17132 = inst_17001;
var tmp17133 = inst_17003;
var tmp17134 = inst_17002;
var inst_17001__$1 = tmp17132;
var inst_17002__$1 = tmp17134;
var inst_17003__$1 = tmp17133;
var inst_17004__$1 = inst_17018;
var state_17120__$1 = (function (){var statearr_17139 = state_17120;
(statearr_17139[(13)] = inst_17001__$1);

(statearr_17139[(15)] = inst_17003__$1);

(statearr_17139[(18)] = inst_17017);

(statearr_17139[(16)] = inst_17002__$1);

(statearr_17139[(17)] = inst_17004__$1);

return statearr_17139;
})();
var statearr_17140_17219 = state_17120__$1;
(statearr_17140_17219[(2)] = null);

(statearr_17140_17219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (21))){
var inst_17042 = (state_17120[(2)]);
var state_17120__$1 = state_17120;
var statearr_17144_17220 = state_17120__$1;
(statearr_17144_17220[(2)] = inst_17042);

(statearr_17144_17220[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (31))){
var inst_17068 = (state_17120[(10)]);
var inst_17072 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_17073 = cljs.core.async.untap_STAR_.call(null,m,inst_17068);
var state_17120__$1 = (function (){var statearr_17145 = state_17120;
(statearr_17145[(19)] = inst_17072);

return statearr_17145;
})();
var statearr_17146_17221 = state_17120__$1;
(statearr_17146_17221[(2)] = inst_17073);

(statearr_17146_17221[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (32))){
var inst_17062 = (state_17120[(20)]);
var inst_17063 = (state_17120[(9)]);
var inst_17060 = (state_17120[(21)]);
var inst_17061 = (state_17120[(12)]);
var inst_17075 = (state_17120[(2)]);
var inst_17076 = (inst_17063 + (1));
var tmp17141 = inst_17062;
var tmp17142 = inst_17060;
var tmp17143 = inst_17061;
var inst_17060__$1 = tmp17142;
var inst_17061__$1 = tmp17143;
var inst_17062__$1 = tmp17141;
var inst_17063__$1 = inst_17076;
var state_17120__$1 = (function (){var statearr_17147 = state_17120;
(statearr_17147[(22)] = inst_17075);

(statearr_17147[(20)] = inst_17062__$1);

(statearr_17147[(9)] = inst_17063__$1);

(statearr_17147[(21)] = inst_17060__$1);

(statearr_17147[(12)] = inst_17061__$1);

return statearr_17147;
})();
var statearr_17148_17222 = state_17120__$1;
(statearr_17148_17222[(2)] = null);

(statearr_17148_17222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (40))){
var inst_17088 = (state_17120[(23)]);
var inst_17092 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_17093 = cljs.core.async.untap_STAR_.call(null,m,inst_17088);
var state_17120__$1 = (function (){var statearr_17149 = state_17120;
(statearr_17149[(24)] = inst_17092);

return statearr_17149;
})();
var statearr_17150_17223 = state_17120__$1;
(statearr_17150_17223[(2)] = inst_17093);

(statearr_17150_17223[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (33))){
var inst_17079 = (state_17120[(25)]);
var inst_17081 = cljs.core.chunked_seq_QMARK_.call(null,inst_17079);
var state_17120__$1 = state_17120;
if(inst_17081){
var statearr_17151_17224 = state_17120__$1;
(statearr_17151_17224[(1)] = (36));

} else {
var statearr_17152_17225 = state_17120__$1;
(statearr_17152_17225[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (13))){
var inst_17011 = (state_17120[(26)]);
var inst_17014 = cljs.core.async.close_BANG_.call(null,inst_17011);
var state_17120__$1 = state_17120;
var statearr_17153_17226 = state_17120__$1;
(statearr_17153_17226[(2)] = inst_17014);

(statearr_17153_17226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (22))){
var inst_17032 = (state_17120[(8)]);
var inst_17035 = cljs.core.async.close_BANG_.call(null,inst_17032);
var state_17120__$1 = state_17120;
var statearr_17154_17227 = state_17120__$1;
(statearr_17154_17227[(2)] = inst_17035);

(statearr_17154_17227[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (36))){
var inst_17079 = (state_17120[(25)]);
var inst_17083 = cljs.core.chunk_first.call(null,inst_17079);
var inst_17084 = cljs.core.chunk_rest.call(null,inst_17079);
var inst_17085 = cljs.core.count.call(null,inst_17083);
var inst_17060 = inst_17084;
var inst_17061 = inst_17083;
var inst_17062 = inst_17085;
var inst_17063 = (0);
var state_17120__$1 = (function (){var statearr_17155 = state_17120;
(statearr_17155[(20)] = inst_17062);

(statearr_17155[(9)] = inst_17063);

(statearr_17155[(21)] = inst_17060);

(statearr_17155[(12)] = inst_17061);

return statearr_17155;
})();
var statearr_17156_17228 = state_17120__$1;
(statearr_17156_17228[(2)] = null);

(statearr_17156_17228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (41))){
var inst_17079 = (state_17120[(25)]);
var inst_17095 = (state_17120[(2)]);
var inst_17096 = cljs.core.next.call(null,inst_17079);
var inst_17060 = inst_17096;
var inst_17061 = null;
var inst_17062 = (0);
var inst_17063 = (0);
var state_17120__$1 = (function (){var statearr_17157 = state_17120;
(statearr_17157[(20)] = inst_17062);

(statearr_17157[(9)] = inst_17063);

(statearr_17157[(27)] = inst_17095);

(statearr_17157[(21)] = inst_17060);

(statearr_17157[(12)] = inst_17061);

return statearr_17157;
})();
var statearr_17158_17229 = state_17120__$1;
(statearr_17158_17229[(2)] = null);

(statearr_17158_17229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (43))){
var state_17120__$1 = state_17120;
var statearr_17159_17230 = state_17120__$1;
(statearr_17159_17230[(2)] = null);

(statearr_17159_17230[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (29))){
var inst_17104 = (state_17120[(2)]);
var state_17120__$1 = state_17120;
var statearr_17160_17231 = state_17120__$1;
(statearr_17160_17231[(2)] = inst_17104);

(statearr_17160_17231[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (44))){
var inst_17113 = (state_17120[(2)]);
var state_17120__$1 = (function (){var statearr_17161 = state_17120;
(statearr_17161[(28)] = inst_17113);

return statearr_17161;
})();
var statearr_17162_17232 = state_17120__$1;
(statearr_17162_17232[(2)] = null);

(statearr_17162_17232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (6))){
var inst_17052 = (state_17120[(29)]);
var inst_17051 = cljs.core.deref.call(null,cs);
var inst_17052__$1 = cljs.core.keys.call(null,inst_17051);
var inst_17053 = cljs.core.count.call(null,inst_17052__$1);
var inst_17054 = cljs.core.reset_BANG_.call(null,dctr,inst_17053);
var inst_17059 = cljs.core.seq.call(null,inst_17052__$1);
var inst_17060 = inst_17059;
var inst_17061 = null;
var inst_17062 = (0);
var inst_17063 = (0);
var state_17120__$1 = (function (){var statearr_17163 = state_17120;
(statearr_17163[(30)] = inst_17054);

(statearr_17163[(20)] = inst_17062);

(statearr_17163[(9)] = inst_17063);

(statearr_17163[(29)] = inst_17052__$1);

(statearr_17163[(21)] = inst_17060);

(statearr_17163[(12)] = inst_17061);

return statearr_17163;
})();
var statearr_17164_17233 = state_17120__$1;
(statearr_17164_17233[(2)] = null);

(statearr_17164_17233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (28))){
var inst_17060 = (state_17120[(21)]);
var inst_17079 = (state_17120[(25)]);
var inst_17079__$1 = cljs.core.seq.call(null,inst_17060);
var state_17120__$1 = (function (){var statearr_17165 = state_17120;
(statearr_17165[(25)] = inst_17079__$1);

return statearr_17165;
})();
if(inst_17079__$1){
var statearr_17166_17234 = state_17120__$1;
(statearr_17166_17234[(1)] = (33));

} else {
var statearr_17167_17235 = state_17120__$1;
(statearr_17167_17235[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (25))){
var inst_17062 = (state_17120[(20)]);
var inst_17063 = (state_17120[(9)]);
var inst_17065 = (inst_17063 < inst_17062);
var inst_17066 = inst_17065;
var state_17120__$1 = state_17120;
if(cljs.core.truth_(inst_17066)){
var statearr_17168_17236 = state_17120__$1;
(statearr_17168_17236[(1)] = (27));

} else {
var statearr_17169_17237 = state_17120__$1;
(statearr_17169_17237[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (34))){
var state_17120__$1 = state_17120;
var statearr_17170_17238 = state_17120__$1;
(statearr_17170_17238[(2)] = null);

(statearr_17170_17238[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (17))){
var state_17120__$1 = state_17120;
var statearr_17171_17239 = state_17120__$1;
(statearr_17171_17239[(2)] = null);

(statearr_17171_17239[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (3))){
var inst_17118 = (state_17120[(2)]);
var state_17120__$1 = state_17120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17120__$1,inst_17118);
} else {
if((state_val_17121 === (12))){
var inst_17047 = (state_17120[(2)]);
var state_17120__$1 = state_17120;
var statearr_17172_17240 = state_17120__$1;
(statearr_17172_17240[(2)] = inst_17047);

(statearr_17172_17240[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (2))){
var state_17120__$1 = state_17120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17120__$1,(4),ch);
} else {
if((state_val_17121 === (23))){
var state_17120__$1 = state_17120;
var statearr_17173_17241 = state_17120__$1;
(statearr_17173_17241[(2)] = null);

(statearr_17173_17241[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (35))){
var inst_17102 = (state_17120[(2)]);
var state_17120__$1 = state_17120;
var statearr_17174_17242 = state_17120__$1;
(statearr_17174_17242[(2)] = inst_17102);

(statearr_17174_17242[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (19))){
var inst_17021 = (state_17120[(7)]);
var inst_17025 = cljs.core.chunk_first.call(null,inst_17021);
var inst_17026 = cljs.core.chunk_rest.call(null,inst_17021);
var inst_17027 = cljs.core.count.call(null,inst_17025);
var inst_17001 = inst_17026;
var inst_17002 = inst_17025;
var inst_17003 = inst_17027;
var inst_17004 = (0);
var state_17120__$1 = (function (){var statearr_17175 = state_17120;
(statearr_17175[(13)] = inst_17001);

(statearr_17175[(15)] = inst_17003);

(statearr_17175[(16)] = inst_17002);

(statearr_17175[(17)] = inst_17004);

return statearr_17175;
})();
var statearr_17176_17243 = state_17120__$1;
(statearr_17176_17243[(2)] = null);

(statearr_17176_17243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (11))){
var inst_17021 = (state_17120[(7)]);
var inst_17001 = (state_17120[(13)]);
var inst_17021__$1 = cljs.core.seq.call(null,inst_17001);
var state_17120__$1 = (function (){var statearr_17177 = state_17120;
(statearr_17177[(7)] = inst_17021__$1);

return statearr_17177;
})();
if(inst_17021__$1){
var statearr_17178_17244 = state_17120__$1;
(statearr_17178_17244[(1)] = (16));

} else {
var statearr_17179_17245 = state_17120__$1;
(statearr_17179_17245[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (9))){
var inst_17049 = (state_17120[(2)]);
var state_17120__$1 = state_17120;
var statearr_17180_17246 = state_17120__$1;
(statearr_17180_17246[(2)] = inst_17049);

(statearr_17180_17246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (5))){
var inst_16999 = cljs.core.deref.call(null,cs);
var inst_17000 = cljs.core.seq.call(null,inst_16999);
var inst_17001 = inst_17000;
var inst_17002 = null;
var inst_17003 = (0);
var inst_17004 = (0);
var state_17120__$1 = (function (){var statearr_17181 = state_17120;
(statearr_17181[(13)] = inst_17001);

(statearr_17181[(15)] = inst_17003);

(statearr_17181[(16)] = inst_17002);

(statearr_17181[(17)] = inst_17004);

return statearr_17181;
})();
var statearr_17182_17247 = state_17120__$1;
(statearr_17182_17247[(2)] = null);

(statearr_17182_17247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (14))){
var state_17120__$1 = state_17120;
var statearr_17183_17248 = state_17120__$1;
(statearr_17183_17248[(2)] = null);

(statearr_17183_17248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (45))){
var inst_17110 = (state_17120[(2)]);
var state_17120__$1 = state_17120;
var statearr_17184_17249 = state_17120__$1;
(statearr_17184_17249[(2)] = inst_17110);

(statearr_17184_17249[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (26))){
var inst_17052 = (state_17120[(29)]);
var inst_17106 = (state_17120[(2)]);
var inst_17107 = cljs.core.seq.call(null,inst_17052);
var state_17120__$1 = (function (){var statearr_17185 = state_17120;
(statearr_17185[(31)] = inst_17106);

return statearr_17185;
})();
if(inst_17107){
var statearr_17186_17250 = state_17120__$1;
(statearr_17186_17250[(1)] = (42));

} else {
var statearr_17187_17251 = state_17120__$1;
(statearr_17187_17251[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (16))){
var inst_17021 = (state_17120[(7)]);
var inst_17023 = cljs.core.chunked_seq_QMARK_.call(null,inst_17021);
var state_17120__$1 = state_17120;
if(inst_17023){
var statearr_17188_17252 = state_17120__$1;
(statearr_17188_17252[(1)] = (19));

} else {
var statearr_17189_17253 = state_17120__$1;
(statearr_17189_17253[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (38))){
var inst_17099 = (state_17120[(2)]);
var state_17120__$1 = state_17120;
var statearr_17190_17254 = state_17120__$1;
(statearr_17190_17254[(2)] = inst_17099);

(statearr_17190_17254[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (30))){
var state_17120__$1 = state_17120;
var statearr_17191_17255 = state_17120__$1;
(statearr_17191_17255[(2)] = null);

(statearr_17191_17255[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (10))){
var inst_17002 = (state_17120[(16)]);
var inst_17004 = (state_17120[(17)]);
var inst_17010 = cljs.core._nth.call(null,inst_17002,inst_17004);
var inst_17011 = cljs.core.nth.call(null,inst_17010,(0),null);
var inst_17012 = cljs.core.nth.call(null,inst_17010,(1),null);
var state_17120__$1 = (function (){var statearr_17192 = state_17120;
(statearr_17192[(26)] = inst_17011);

return statearr_17192;
})();
if(cljs.core.truth_(inst_17012)){
var statearr_17193_17256 = state_17120__$1;
(statearr_17193_17256[(1)] = (13));

} else {
var statearr_17194_17257 = state_17120__$1;
(statearr_17194_17257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (18))){
var inst_17045 = (state_17120[(2)]);
var state_17120__$1 = state_17120;
var statearr_17195_17258 = state_17120__$1;
(statearr_17195_17258[(2)] = inst_17045);

(statearr_17195_17258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (42))){
var state_17120__$1 = state_17120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17120__$1,(45),dchan);
} else {
if((state_val_17121 === (37))){
var inst_17088 = (state_17120[(23)]);
var inst_16992 = (state_17120[(11)]);
var inst_17079 = (state_17120[(25)]);
var inst_17088__$1 = cljs.core.first.call(null,inst_17079);
var inst_17089 = cljs.core.async.put_BANG_.call(null,inst_17088__$1,inst_16992,done);
var state_17120__$1 = (function (){var statearr_17196 = state_17120;
(statearr_17196[(23)] = inst_17088__$1);

return statearr_17196;
})();
if(cljs.core.truth_(inst_17089)){
var statearr_17197_17259 = state_17120__$1;
(statearr_17197_17259[(1)] = (39));

} else {
var statearr_17198_17260 = state_17120__$1;
(statearr_17198_17260[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17121 === (8))){
var inst_17003 = (state_17120[(15)]);
var inst_17004 = (state_17120[(17)]);
var inst_17006 = (inst_17004 < inst_17003);
var inst_17007 = inst_17006;
var state_17120__$1 = state_17120;
if(cljs.core.truth_(inst_17007)){
var statearr_17199_17261 = state_17120__$1;
(statearr_17199_17261[(1)] = (10));

} else {
var statearr_17200_17262 = state_17120__$1;
(statearr_17200_17262[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6645__auto___17208,cs,m,dchan,dctr,done))
;
return ((function (switch__6580__auto__,c__6645__auto___17208,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_17204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17204[(0)] = state_machine__6581__auto__);

(statearr_17204[(1)] = (1));

return statearr_17204;
});
var state_machine__6581__auto____1 = (function (state_17120){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_17120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e17205){if((e17205 instanceof Object)){
var ex__6584__auto__ = e17205;
var statearr_17206_17263 = state_17120;
(statearr_17206_17263[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17264 = state_17120;
state_17120 = G__17264;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_17120){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_17120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___17208,cs,m,dchan,dctr,done))
})();
var state__6647__auto__ = (function (){var statearr_17207 = f__6646__auto__.call(null);
(statearr_17207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___17208);

return statearr_17207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___17208,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj17266 = {};
return obj17266;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3541__auto__ = m;
if(and__3541__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3541__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4197__auto__ = (((m == null))?null:m);
return (function (){var or__3553__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3541__auto__ = m;
if(and__3541__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3541__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4197__auto__ = (((m == null))?null:m);
return (function (){var or__3553__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3541__auto__ = m;
if(and__3541__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3541__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4197__auto__ = (((m == null))?null:m);
return (function (){var or__3553__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3541__auto__ = m;
if(and__3541__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3541__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4197__auto__ = (((m == null))?null:m);
return (function (){var or__3553__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3541__auto__ = m;
if(and__3541__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3541__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4197__auto__ = (((m == null))?null:m);
return (function (){var or__3553__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t17386 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17386 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17387){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17387 = meta17387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17386.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t17386.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17386.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17386.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17386.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17386.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17386.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17386.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17388){
var self__ = this;
var _17388__$1 = this;
return self__.meta17387;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17388,meta17387__$1){
var self__ = this;
var _17388__$1 = this;
return (new cljs.core.async.t17386(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17387__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17386.cljs$lang$type = true;

cljs.core.async.t17386.cljs$lang$ctorStr = "cljs.core.async/t17386";

cljs.core.async.t17386.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t17386");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t17386 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17386(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17387){
return (new cljs.core.async.t17386(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17387));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t17386(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),545,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),534,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/42k/-ytkm87/out/cljs/core/async.cljs"], null)));
})()
;
var c__6645__auto___17505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___17505,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___17505,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17458){
var state_val_17459 = (state_17458[(1)]);
if((state_val_17459 === (7))){
var inst_17402 = (state_17458[(7)]);
var inst_17407 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17402);
var state_17458__$1 = state_17458;
var statearr_17460_17506 = state_17458__$1;
(statearr_17460_17506[(2)] = inst_17407);

(statearr_17460_17506[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (20))){
var inst_17417 = (state_17458[(8)]);
var state_17458__$1 = state_17458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17458__$1,(23),out,inst_17417);
} else {
if((state_val_17459 === (1))){
var inst_17392 = (state_17458[(9)]);
var inst_17392__$1 = calc_state.call(null);
var inst_17393 = cljs.core.seq_QMARK_.call(null,inst_17392__$1);
var state_17458__$1 = (function (){var statearr_17461 = state_17458;
(statearr_17461[(9)] = inst_17392__$1);

return statearr_17461;
})();
if(inst_17393){
var statearr_17462_17507 = state_17458__$1;
(statearr_17462_17507[(1)] = (2));

} else {
var statearr_17463_17508 = state_17458__$1;
(statearr_17463_17508[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (24))){
var inst_17410 = (state_17458[(10)]);
var inst_17402 = inst_17410;
var state_17458__$1 = (function (){var statearr_17464 = state_17458;
(statearr_17464[(7)] = inst_17402);

return statearr_17464;
})();
var statearr_17465_17509 = state_17458__$1;
(statearr_17465_17509[(2)] = null);

(statearr_17465_17509[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (4))){
var inst_17392 = (state_17458[(9)]);
var inst_17398 = (state_17458[(2)]);
var inst_17399 = cljs.core.get.call(null,inst_17398,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17400 = cljs.core.get.call(null,inst_17398,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17401 = cljs.core.get.call(null,inst_17398,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17402 = inst_17392;
var state_17458__$1 = (function (){var statearr_17466 = state_17458;
(statearr_17466[(7)] = inst_17402);

(statearr_17466[(11)] = inst_17400);

(statearr_17466[(12)] = inst_17399);

(statearr_17466[(13)] = inst_17401);

return statearr_17466;
})();
var statearr_17467_17510 = state_17458__$1;
(statearr_17467_17510[(2)] = null);

(statearr_17467_17510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (15))){
var state_17458__$1 = state_17458;
var statearr_17468_17511 = state_17458__$1;
(statearr_17468_17511[(2)] = null);

(statearr_17468_17511[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (21))){
var inst_17410 = (state_17458[(10)]);
var inst_17402 = inst_17410;
var state_17458__$1 = (function (){var statearr_17469 = state_17458;
(statearr_17469[(7)] = inst_17402);

return statearr_17469;
})();
var statearr_17470_17512 = state_17458__$1;
(statearr_17470_17512[(2)] = null);

(statearr_17470_17512[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (13))){
var inst_17454 = (state_17458[(2)]);
var state_17458__$1 = state_17458;
var statearr_17471_17513 = state_17458__$1;
(statearr_17471_17513[(2)] = inst_17454);

(statearr_17471_17513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (22))){
var inst_17452 = (state_17458[(2)]);
var state_17458__$1 = state_17458;
var statearr_17472_17514 = state_17458__$1;
(statearr_17472_17514[(2)] = inst_17452);

(statearr_17472_17514[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (6))){
var inst_17456 = (state_17458[(2)]);
var state_17458__$1 = state_17458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17458__$1,inst_17456);
} else {
if((state_val_17459 === (25))){
var state_17458__$1 = state_17458;
var statearr_17473_17515 = state_17458__$1;
(statearr_17473_17515[(2)] = null);

(statearr_17473_17515[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (17))){
var inst_17432 = (state_17458[(14)]);
var state_17458__$1 = state_17458;
var statearr_17474_17516 = state_17458__$1;
(statearr_17474_17516[(2)] = inst_17432);

(statearr_17474_17516[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (3))){
var inst_17392 = (state_17458[(9)]);
var state_17458__$1 = state_17458;
var statearr_17475_17517 = state_17458__$1;
(statearr_17475_17517[(2)] = inst_17392);

(statearr_17475_17517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (12))){
var inst_17418 = (state_17458[(15)]);
var inst_17432 = (state_17458[(14)]);
var inst_17413 = (state_17458[(16)]);
var inst_17432__$1 = inst_17413.call(null,inst_17418);
var state_17458__$1 = (function (){var statearr_17476 = state_17458;
(statearr_17476[(14)] = inst_17432__$1);

return statearr_17476;
})();
if(cljs.core.truth_(inst_17432__$1)){
var statearr_17477_17518 = state_17458__$1;
(statearr_17477_17518[(1)] = (17));

} else {
var statearr_17478_17519 = state_17458__$1;
(statearr_17478_17519[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (2))){
var inst_17392 = (state_17458[(9)]);
var inst_17395 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17392);
var state_17458__$1 = state_17458;
var statearr_17479_17520 = state_17458__$1;
(statearr_17479_17520[(2)] = inst_17395);

(statearr_17479_17520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (23))){
var inst_17443 = (state_17458[(2)]);
var state_17458__$1 = state_17458;
if(cljs.core.truth_(inst_17443)){
var statearr_17480_17521 = state_17458__$1;
(statearr_17480_17521[(1)] = (24));

} else {
var statearr_17481_17522 = state_17458__$1;
(statearr_17481_17522[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (19))){
var inst_17440 = (state_17458[(2)]);
var state_17458__$1 = state_17458;
if(cljs.core.truth_(inst_17440)){
var statearr_17482_17523 = state_17458__$1;
(statearr_17482_17523[(1)] = (20));

} else {
var statearr_17483_17524 = state_17458__$1;
(statearr_17483_17524[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (11))){
var inst_17417 = (state_17458[(8)]);
var inst_17423 = (inst_17417 == null);
var state_17458__$1 = state_17458;
if(cljs.core.truth_(inst_17423)){
var statearr_17484_17525 = state_17458__$1;
(statearr_17484_17525[(1)] = (14));

} else {
var statearr_17485_17526 = state_17458__$1;
(statearr_17485_17526[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (9))){
var inst_17410 = (state_17458[(10)]);
var inst_17410__$1 = (state_17458[(2)]);
var inst_17411 = cljs.core.get.call(null,inst_17410__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17412 = cljs.core.get.call(null,inst_17410__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17413 = cljs.core.get.call(null,inst_17410__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_17458__$1 = (function (){var statearr_17486 = state_17458;
(statearr_17486[(16)] = inst_17413);

(statearr_17486[(17)] = inst_17412);

(statearr_17486[(10)] = inst_17410__$1);

return statearr_17486;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17458__$1,(10),inst_17411);
} else {
if((state_val_17459 === (5))){
var inst_17402 = (state_17458[(7)]);
var inst_17405 = cljs.core.seq_QMARK_.call(null,inst_17402);
var state_17458__$1 = state_17458;
if(inst_17405){
var statearr_17487_17527 = state_17458__$1;
(statearr_17487_17527[(1)] = (7));

} else {
var statearr_17488_17528 = state_17458__$1;
(statearr_17488_17528[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (14))){
var inst_17418 = (state_17458[(15)]);
var inst_17425 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17418);
var state_17458__$1 = state_17458;
var statearr_17489_17529 = state_17458__$1;
(statearr_17489_17529[(2)] = inst_17425);

(statearr_17489_17529[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (26))){
var inst_17448 = (state_17458[(2)]);
var state_17458__$1 = state_17458;
var statearr_17490_17530 = state_17458__$1;
(statearr_17490_17530[(2)] = inst_17448);

(statearr_17490_17530[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (16))){
var inst_17428 = (state_17458[(2)]);
var inst_17429 = calc_state.call(null);
var inst_17402 = inst_17429;
var state_17458__$1 = (function (){var statearr_17491 = state_17458;
(statearr_17491[(7)] = inst_17402);

(statearr_17491[(18)] = inst_17428);

return statearr_17491;
})();
var statearr_17492_17531 = state_17458__$1;
(statearr_17492_17531[(2)] = null);

(statearr_17492_17531[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (10))){
var inst_17418 = (state_17458[(15)]);
var inst_17417 = (state_17458[(8)]);
var inst_17416 = (state_17458[(2)]);
var inst_17417__$1 = cljs.core.nth.call(null,inst_17416,(0),null);
var inst_17418__$1 = cljs.core.nth.call(null,inst_17416,(1),null);
var inst_17419 = (inst_17417__$1 == null);
var inst_17420 = cljs.core._EQ_.call(null,inst_17418__$1,change);
var inst_17421 = (inst_17419) || (inst_17420);
var state_17458__$1 = (function (){var statearr_17493 = state_17458;
(statearr_17493[(15)] = inst_17418__$1);

(statearr_17493[(8)] = inst_17417__$1);

return statearr_17493;
})();
if(cljs.core.truth_(inst_17421)){
var statearr_17494_17532 = state_17458__$1;
(statearr_17494_17532[(1)] = (11));

} else {
var statearr_17495_17533 = state_17458__$1;
(statearr_17495_17533[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (18))){
var inst_17418 = (state_17458[(15)]);
var inst_17413 = (state_17458[(16)]);
var inst_17412 = (state_17458[(17)]);
var inst_17435 = cljs.core.empty_QMARK_.call(null,inst_17413);
var inst_17436 = inst_17412.call(null,inst_17418);
var inst_17437 = cljs.core.not.call(null,inst_17436);
var inst_17438 = (inst_17435) && (inst_17437);
var state_17458__$1 = state_17458;
var statearr_17496_17534 = state_17458__$1;
(statearr_17496_17534[(2)] = inst_17438);

(statearr_17496_17534[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17459 === (8))){
var inst_17402 = (state_17458[(7)]);
var state_17458__$1 = state_17458;
var statearr_17497_17535 = state_17458__$1;
(statearr_17497_17535[(2)] = inst_17402);

(statearr_17497_17535[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6645__auto___17505,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6580__auto__,c__6645__auto___17505,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_17501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17501[(0)] = state_machine__6581__auto__);

(statearr_17501[(1)] = (1));

return statearr_17501;
});
var state_machine__6581__auto____1 = (function (state_17458){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_17458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e17502){if((e17502 instanceof Object)){
var ex__6584__auto__ = e17502;
var statearr_17503_17536 = state_17458;
(statearr_17503_17536[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17537 = state_17458;
state_17458 = G__17537;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_17458){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_17458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___17505,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6647__auto__ = (function (){var statearr_17504 = f__6646__auto__.call(null);
(statearr_17504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___17505);

return statearr_17504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___17505,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj17539 = {};
return obj17539;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3541__auto__ = p;
if(and__3541__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3541__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4197__auto__ = (((p == null))?null:p);
return (function (){var or__3553__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3541__auto__ = p;
if(and__3541__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3541__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4197__auto__ = (((p == null))?null:p);
return (function (){var or__3553__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3541__auto__ = p;
if(and__3541__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3541__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4197__auto__ = (((p == null))?null:p);
return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3541__auto__ = p;
if(and__3541__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3541__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4197__auto__ = (((p == null))?null:p);
return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4197__auto__)]);
if(or__3553__auto__){
return or__3553__auto__;
} else {
var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3553__auto____$1){
return or__3553__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3553__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3553__auto__)){
return or__3553__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3553__auto__,mults){
return (function (p1__17540_SHARP_){
if(cljs.core.truth_(p1__17540_SHARP_.call(null,topic))){
return p1__17540_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17540_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3553__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t17655 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17655 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17656){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17656 = meta17656;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17655.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t17655.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t17655.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t17655.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t17655.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t17655.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17655.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t17655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17657){
var self__ = this;
var _17657__$1 = this;
return self__.meta17656;
});})(mults,ensure_mult))
;

cljs.core.async.t17655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17657,meta17656__$1){
var self__ = this;
var _17657__$1 = this;
return (new cljs.core.async.t17655(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17656__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t17655.cljs$lang$type = true;

cljs.core.async.t17655.cljs$lang$ctorStr = "cljs.core.async/t17655";

cljs.core.async.t17655.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t17655");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t17655 = ((function (mults,ensure_mult){
return (function __GT_t17655(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17656){
return (new cljs.core.async.t17655(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17656));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t17655(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),638,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),626,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/42k/-ytkm87/out/cljs/core/async.cljs"], null)));
})()
;
var c__6645__auto___17769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___17769,mults,ensure_mult,p){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___17769,mults,ensure_mult,p){
return (function (state_17725){
var state_val_17726 = (state_17725[(1)]);
if((state_val_17726 === (7))){
var inst_17721 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
var statearr_17727_17770 = state_17725__$1;
(statearr_17727_17770[(2)] = inst_17721);

(statearr_17727_17770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (20))){
var state_17725__$1 = state_17725;
var statearr_17728_17771 = state_17725__$1;
(statearr_17728_17771[(2)] = null);

(statearr_17728_17771[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (1))){
var state_17725__$1 = state_17725;
var statearr_17729_17772 = state_17725__$1;
(statearr_17729_17772[(2)] = null);

(statearr_17729_17772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (4))){
var inst_17660 = (state_17725[(7)]);
var inst_17660__$1 = (state_17725[(2)]);
var inst_17661 = (inst_17660__$1 == null);
var state_17725__$1 = (function (){var statearr_17730 = state_17725;
(statearr_17730[(7)] = inst_17660__$1);

return statearr_17730;
})();
if(cljs.core.truth_(inst_17661)){
var statearr_17731_17773 = state_17725__$1;
(statearr_17731_17773[(1)] = (5));

} else {
var statearr_17732_17774 = state_17725__$1;
(statearr_17732_17774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (15))){
var inst_17702 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
var statearr_17733_17775 = state_17725__$1;
(statearr_17733_17775[(2)] = inst_17702);

(statearr_17733_17775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (21))){
var inst_17708 = (state_17725[(8)]);
var inst_17716 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17708);
var state_17725__$1 = state_17725;
var statearr_17734_17776 = state_17725__$1;
(statearr_17734_17776[(2)] = inst_17716);

(statearr_17734_17776[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (13))){
var inst_17684 = (state_17725[(9)]);
var inst_17686 = cljs.core.chunked_seq_QMARK_.call(null,inst_17684);
var state_17725__$1 = state_17725;
if(inst_17686){
var statearr_17735_17777 = state_17725__$1;
(statearr_17735_17777[(1)] = (16));

} else {
var statearr_17736_17778 = state_17725__$1;
(statearr_17736_17778[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (22))){
var inst_17718 = (state_17725[(2)]);
var state_17725__$1 = (function (){var statearr_17737 = state_17725;
(statearr_17737[(10)] = inst_17718);

return statearr_17737;
})();
var statearr_17738_17779 = state_17725__$1;
(statearr_17738_17779[(2)] = null);

(statearr_17738_17779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (6))){
var inst_17708 = (state_17725[(8)]);
var inst_17660 = (state_17725[(7)]);
var inst_17708__$1 = topic_fn.call(null,inst_17660);
var inst_17709 = cljs.core.deref.call(null,mults);
var inst_17710 = cljs.core.get.call(null,inst_17709,inst_17708__$1);
var inst_17711 = cljs.core.async.muxch_STAR_.call(null,inst_17710);
var state_17725__$1 = (function (){var statearr_17739 = state_17725;
(statearr_17739[(8)] = inst_17708__$1);

return statearr_17739;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17725__$1,(19),inst_17711,inst_17660);
} else {
if((state_val_17726 === (17))){
var inst_17684 = (state_17725[(9)]);
var inst_17693 = cljs.core.first.call(null,inst_17684);
var inst_17694 = cljs.core.async.muxch_STAR_.call(null,inst_17693);
var inst_17695 = cljs.core.async.close_BANG_.call(null,inst_17694);
var inst_17696 = cljs.core.next.call(null,inst_17684);
var inst_17670 = inst_17696;
var inst_17671 = null;
var inst_17672 = (0);
var inst_17673 = (0);
var state_17725__$1 = (function (){var statearr_17740 = state_17725;
(statearr_17740[(11)] = inst_17670);

(statearr_17740[(12)] = inst_17671);

(statearr_17740[(13)] = inst_17695);

(statearr_17740[(14)] = inst_17673);

(statearr_17740[(15)] = inst_17672);

return statearr_17740;
})();
var statearr_17741_17780 = state_17725__$1;
(statearr_17741_17780[(2)] = null);

(statearr_17741_17780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (3))){
var inst_17723 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17725__$1,inst_17723);
} else {
if((state_val_17726 === (12))){
var inst_17704 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
var statearr_17742_17781 = state_17725__$1;
(statearr_17742_17781[(2)] = inst_17704);

(statearr_17742_17781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (2))){
var state_17725__$1 = state_17725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17725__$1,(4),ch);
} else {
if((state_val_17726 === (19))){
var inst_17713 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
if(cljs.core.truth_(inst_17713)){
var statearr_17743_17782 = state_17725__$1;
(statearr_17743_17782[(1)] = (20));

} else {
var statearr_17744_17783 = state_17725__$1;
(statearr_17744_17783[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (11))){
var inst_17670 = (state_17725[(11)]);
var inst_17684 = (state_17725[(9)]);
var inst_17684__$1 = cljs.core.seq.call(null,inst_17670);
var state_17725__$1 = (function (){var statearr_17745 = state_17725;
(statearr_17745[(9)] = inst_17684__$1);

return statearr_17745;
})();
if(inst_17684__$1){
var statearr_17746_17784 = state_17725__$1;
(statearr_17746_17784[(1)] = (13));

} else {
var statearr_17747_17785 = state_17725__$1;
(statearr_17747_17785[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (9))){
var inst_17706 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
var statearr_17748_17786 = state_17725__$1;
(statearr_17748_17786[(2)] = inst_17706);

(statearr_17748_17786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (5))){
var inst_17667 = cljs.core.deref.call(null,mults);
var inst_17668 = cljs.core.vals.call(null,inst_17667);
var inst_17669 = cljs.core.seq.call(null,inst_17668);
var inst_17670 = inst_17669;
var inst_17671 = null;
var inst_17672 = (0);
var inst_17673 = (0);
var state_17725__$1 = (function (){var statearr_17749 = state_17725;
(statearr_17749[(11)] = inst_17670);

(statearr_17749[(12)] = inst_17671);

(statearr_17749[(14)] = inst_17673);

(statearr_17749[(15)] = inst_17672);

return statearr_17749;
})();
var statearr_17750_17787 = state_17725__$1;
(statearr_17750_17787[(2)] = null);

(statearr_17750_17787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (14))){
var state_17725__$1 = state_17725;
var statearr_17754_17788 = state_17725__$1;
(statearr_17754_17788[(2)] = null);

(statearr_17754_17788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (16))){
var inst_17684 = (state_17725[(9)]);
var inst_17688 = cljs.core.chunk_first.call(null,inst_17684);
var inst_17689 = cljs.core.chunk_rest.call(null,inst_17684);
var inst_17690 = cljs.core.count.call(null,inst_17688);
var inst_17670 = inst_17689;
var inst_17671 = inst_17688;
var inst_17672 = inst_17690;
var inst_17673 = (0);
var state_17725__$1 = (function (){var statearr_17755 = state_17725;
(statearr_17755[(11)] = inst_17670);

(statearr_17755[(12)] = inst_17671);

(statearr_17755[(14)] = inst_17673);

(statearr_17755[(15)] = inst_17672);

return statearr_17755;
})();
var statearr_17756_17789 = state_17725__$1;
(statearr_17756_17789[(2)] = null);

(statearr_17756_17789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (10))){
var inst_17670 = (state_17725[(11)]);
var inst_17671 = (state_17725[(12)]);
var inst_17673 = (state_17725[(14)]);
var inst_17672 = (state_17725[(15)]);
var inst_17678 = cljs.core._nth.call(null,inst_17671,inst_17673);
var inst_17679 = cljs.core.async.muxch_STAR_.call(null,inst_17678);
var inst_17680 = cljs.core.async.close_BANG_.call(null,inst_17679);
var inst_17681 = (inst_17673 + (1));
var tmp17751 = inst_17670;
var tmp17752 = inst_17671;
var tmp17753 = inst_17672;
var inst_17670__$1 = tmp17751;
var inst_17671__$1 = tmp17752;
var inst_17672__$1 = tmp17753;
var inst_17673__$1 = inst_17681;
var state_17725__$1 = (function (){var statearr_17757 = state_17725;
(statearr_17757[(11)] = inst_17670__$1);

(statearr_17757[(12)] = inst_17671__$1);

(statearr_17757[(14)] = inst_17673__$1);

(statearr_17757[(16)] = inst_17680);

(statearr_17757[(15)] = inst_17672__$1);

return statearr_17757;
})();
var statearr_17758_17790 = state_17725__$1;
(statearr_17758_17790[(2)] = null);

(statearr_17758_17790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (18))){
var inst_17699 = (state_17725[(2)]);
var state_17725__$1 = state_17725;
var statearr_17759_17791 = state_17725__$1;
(statearr_17759_17791[(2)] = inst_17699);

(statearr_17759_17791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17726 === (8))){
var inst_17673 = (state_17725[(14)]);
var inst_17672 = (state_17725[(15)]);
var inst_17675 = (inst_17673 < inst_17672);
var inst_17676 = inst_17675;
var state_17725__$1 = state_17725;
if(cljs.core.truth_(inst_17676)){
var statearr_17760_17792 = state_17725__$1;
(statearr_17760_17792[(1)] = (10));

} else {
var statearr_17761_17793 = state_17725__$1;
(statearr_17761_17793[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6645__auto___17769,mults,ensure_mult,p))
;
return ((function (switch__6580__auto__,c__6645__auto___17769,mults,ensure_mult,p){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_17765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17765[(0)] = state_machine__6581__auto__);

(statearr_17765[(1)] = (1));

return statearr_17765;
});
var state_machine__6581__auto____1 = (function (state_17725){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_17725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e17766){if((e17766 instanceof Object)){
var ex__6584__auto__ = e17766;
var statearr_17767_17794 = state_17725;
(statearr_17767_17794[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17795 = state_17725;
state_17725 = G__17795;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_17725){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_17725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___17769,mults,ensure_mult,p))
})();
var state__6647__auto__ = (function (){var statearr_17768 = f__6646__auto__.call(null);
(statearr_17768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___17769);

return statearr_17768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___17769,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6645__auto___17932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___17932,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___17932,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17902){
var state_val_17903 = (state_17902[(1)]);
if((state_val_17903 === (7))){
var state_17902__$1 = state_17902;
var statearr_17904_17933 = state_17902__$1;
(statearr_17904_17933[(2)] = null);

(statearr_17904_17933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (1))){
var state_17902__$1 = state_17902;
var statearr_17905_17934 = state_17902__$1;
(statearr_17905_17934[(2)] = null);

(statearr_17905_17934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (4))){
var inst_17866 = (state_17902[(7)]);
var inst_17868 = (inst_17866 < cnt);
var state_17902__$1 = state_17902;
if(cljs.core.truth_(inst_17868)){
var statearr_17906_17935 = state_17902__$1;
(statearr_17906_17935[(1)] = (6));

} else {
var statearr_17907_17936 = state_17902__$1;
(statearr_17907_17936[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (15))){
var inst_17898 = (state_17902[(2)]);
var state_17902__$1 = state_17902;
var statearr_17908_17937 = state_17902__$1;
(statearr_17908_17937[(2)] = inst_17898);

(statearr_17908_17937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (13))){
var inst_17891 = cljs.core.async.close_BANG_.call(null,out);
var state_17902__$1 = state_17902;
var statearr_17909_17938 = state_17902__$1;
(statearr_17909_17938[(2)] = inst_17891);

(statearr_17909_17938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (6))){
var state_17902__$1 = state_17902;
var statearr_17910_17939 = state_17902__$1;
(statearr_17910_17939[(2)] = null);

(statearr_17910_17939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (3))){
var inst_17900 = (state_17902[(2)]);
var state_17902__$1 = state_17902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17902__$1,inst_17900);
} else {
if((state_val_17903 === (12))){
var inst_17888 = (state_17902[(8)]);
var inst_17888__$1 = (state_17902[(2)]);
var inst_17889 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17888__$1);
var state_17902__$1 = (function (){var statearr_17911 = state_17902;
(statearr_17911[(8)] = inst_17888__$1);

return statearr_17911;
})();
if(cljs.core.truth_(inst_17889)){
var statearr_17912_17940 = state_17902__$1;
(statearr_17912_17940[(1)] = (13));

} else {
var statearr_17913_17941 = state_17902__$1;
(statearr_17913_17941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (2))){
var inst_17865 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17866 = (0);
var state_17902__$1 = (function (){var statearr_17914 = state_17902;
(statearr_17914[(9)] = inst_17865);

(statearr_17914[(7)] = inst_17866);

return statearr_17914;
})();
var statearr_17915_17942 = state_17902__$1;
(statearr_17915_17942[(2)] = null);

(statearr_17915_17942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (11))){
var inst_17866 = (state_17902[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17902,(10),Object,null,(9));
var inst_17875 = chs__$1.call(null,inst_17866);
var inst_17876 = done.call(null,inst_17866);
var inst_17877 = cljs.core.async.take_BANG_.call(null,inst_17875,inst_17876);
var state_17902__$1 = state_17902;
var statearr_17916_17943 = state_17902__$1;
(statearr_17916_17943[(2)] = inst_17877);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17902__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (9))){
var inst_17866 = (state_17902[(7)]);
var inst_17879 = (state_17902[(2)]);
var inst_17880 = (inst_17866 + (1));
var inst_17866__$1 = inst_17880;
var state_17902__$1 = (function (){var statearr_17917 = state_17902;
(statearr_17917[(10)] = inst_17879);

(statearr_17917[(7)] = inst_17866__$1);

return statearr_17917;
})();
var statearr_17918_17944 = state_17902__$1;
(statearr_17918_17944[(2)] = null);

(statearr_17918_17944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (5))){
var inst_17886 = (state_17902[(2)]);
var state_17902__$1 = (function (){var statearr_17919 = state_17902;
(statearr_17919[(11)] = inst_17886);

return statearr_17919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17902__$1,(12),dchan);
} else {
if((state_val_17903 === (14))){
var inst_17888 = (state_17902[(8)]);
var inst_17893 = cljs.core.apply.call(null,f,inst_17888);
var state_17902__$1 = state_17902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17902__$1,(16),out,inst_17893);
} else {
if((state_val_17903 === (16))){
var inst_17895 = (state_17902[(2)]);
var state_17902__$1 = (function (){var statearr_17920 = state_17902;
(statearr_17920[(12)] = inst_17895);

return statearr_17920;
})();
var statearr_17921_17945 = state_17902__$1;
(statearr_17921_17945[(2)] = null);

(statearr_17921_17945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (10))){
var inst_17870 = (state_17902[(2)]);
var inst_17871 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17902__$1 = (function (){var statearr_17922 = state_17902;
(statearr_17922[(13)] = inst_17870);

return statearr_17922;
})();
var statearr_17923_17946 = state_17902__$1;
(statearr_17923_17946[(2)] = inst_17871);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17902__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17903 === (8))){
var inst_17884 = (state_17902[(2)]);
var state_17902__$1 = state_17902;
var statearr_17924_17947 = state_17902__$1;
(statearr_17924_17947[(2)] = inst_17884);

(statearr_17924_17947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6645__auto___17932,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6580__auto__,c__6645__auto___17932,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_17928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17928[(0)] = state_machine__6581__auto__);

(statearr_17928[(1)] = (1));

return statearr_17928;
});
var state_machine__6581__auto____1 = (function (state_17902){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_17902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e17929){if((e17929 instanceof Object)){
var ex__6584__auto__ = e17929;
var statearr_17930_17948 = state_17902;
(statearr_17930_17948[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17949 = state_17902;
state_17902 = G__17949;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_17902){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_17902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___17932,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6647__auto__ = (function (){var statearr_17931 = f__6646__auto__.call(null);
(statearr_17931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___17932);

return statearr_17931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___17932,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6645__auto___18057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___18057,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___18057,out){
return (function (state_18033){
var state_val_18034 = (state_18033[(1)]);
if((state_val_18034 === (7))){
var inst_18012 = (state_18033[(7)]);
var inst_18013 = (state_18033[(8)]);
var inst_18012__$1 = (state_18033[(2)]);
var inst_18013__$1 = cljs.core.nth.call(null,inst_18012__$1,(0),null);
var inst_18014 = cljs.core.nth.call(null,inst_18012__$1,(1),null);
var inst_18015 = (inst_18013__$1 == null);
var state_18033__$1 = (function (){var statearr_18035 = state_18033;
(statearr_18035[(7)] = inst_18012__$1);

(statearr_18035[(8)] = inst_18013__$1);

(statearr_18035[(9)] = inst_18014);

return statearr_18035;
})();
if(cljs.core.truth_(inst_18015)){
var statearr_18036_18058 = state_18033__$1;
(statearr_18036_18058[(1)] = (8));

} else {
var statearr_18037_18059 = state_18033__$1;
(statearr_18037_18059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18034 === (1))){
var inst_18004 = cljs.core.vec.call(null,chs);
var inst_18005 = inst_18004;
var state_18033__$1 = (function (){var statearr_18038 = state_18033;
(statearr_18038[(10)] = inst_18005);

return statearr_18038;
})();
var statearr_18039_18060 = state_18033__$1;
(statearr_18039_18060[(2)] = null);

(statearr_18039_18060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18034 === (4))){
var inst_18005 = (state_18033[(10)]);
var state_18033__$1 = state_18033;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18033__$1,(7),inst_18005);
} else {
if((state_val_18034 === (6))){
var inst_18029 = (state_18033[(2)]);
var state_18033__$1 = state_18033;
var statearr_18040_18061 = state_18033__$1;
(statearr_18040_18061[(2)] = inst_18029);

(statearr_18040_18061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18034 === (3))){
var inst_18031 = (state_18033[(2)]);
var state_18033__$1 = state_18033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18033__$1,inst_18031);
} else {
if((state_val_18034 === (2))){
var inst_18005 = (state_18033[(10)]);
var inst_18007 = cljs.core.count.call(null,inst_18005);
var inst_18008 = (inst_18007 > (0));
var state_18033__$1 = state_18033;
if(cljs.core.truth_(inst_18008)){
var statearr_18042_18062 = state_18033__$1;
(statearr_18042_18062[(1)] = (4));

} else {
var statearr_18043_18063 = state_18033__$1;
(statearr_18043_18063[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18034 === (11))){
var inst_18005 = (state_18033[(10)]);
var inst_18022 = (state_18033[(2)]);
var tmp18041 = inst_18005;
var inst_18005__$1 = tmp18041;
var state_18033__$1 = (function (){var statearr_18044 = state_18033;
(statearr_18044[(10)] = inst_18005__$1);

(statearr_18044[(11)] = inst_18022);

return statearr_18044;
})();
var statearr_18045_18064 = state_18033__$1;
(statearr_18045_18064[(2)] = null);

(statearr_18045_18064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18034 === (9))){
var inst_18013 = (state_18033[(8)]);
var state_18033__$1 = state_18033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18033__$1,(11),out,inst_18013);
} else {
if((state_val_18034 === (5))){
var inst_18027 = cljs.core.async.close_BANG_.call(null,out);
var state_18033__$1 = state_18033;
var statearr_18046_18065 = state_18033__$1;
(statearr_18046_18065[(2)] = inst_18027);

(statearr_18046_18065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18034 === (10))){
var inst_18025 = (state_18033[(2)]);
var state_18033__$1 = state_18033;
var statearr_18047_18066 = state_18033__$1;
(statearr_18047_18066[(2)] = inst_18025);

(statearr_18047_18066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18034 === (8))){
var inst_18005 = (state_18033[(10)]);
var inst_18012 = (state_18033[(7)]);
var inst_18013 = (state_18033[(8)]);
var inst_18014 = (state_18033[(9)]);
var inst_18017 = (function (){var c = inst_18014;
var v = inst_18013;
var vec__18010 = inst_18012;
var cs = inst_18005;
return ((function (c,v,vec__18010,cs,inst_18005,inst_18012,inst_18013,inst_18014,state_val_18034,c__6645__auto___18057,out){
return (function (p1__17950_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17950_SHARP_);
});
;})(c,v,vec__18010,cs,inst_18005,inst_18012,inst_18013,inst_18014,state_val_18034,c__6645__auto___18057,out))
})();
var inst_18018 = cljs.core.filterv.call(null,inst_18017,inst_18005);
var inst_18005__$1 = inst_18018;
var state_18033__$1 = (function (){var statearr_18048 = state_18033;
(statearr_18048[(10)] = inst_18005__$1);

return statearr_18048;
})();
var statearr_18049_18067 = state_18033__$1;
(statearr_18049_18067[(2)] = null);

(statearr_18049_18067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6645__auto___18057,out))
;
return ((function (switch__6580__auto__,c__6645__auto___18057,out){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_18053 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18053[(0)] = state_machine__6581__auto__);

(statearr_18053[(1)] = (1));

return statearr_18053;
});
var state_machine__6581__auto____1 = (function (state_18033){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_18033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e18054){if((e18054 instanceof Object)){
var ex__6584__auto__ = e18054;
var statearr_18055_18068 = state_18033;
(statearr_18055_18068[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18069 = state_18033;
state_18033 = G__18069;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_18033){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_18033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___18057,out))
})();
var state__6647__auto__ = (function (){var statearr_18056 = f__6646__auto__.call(null);
(statearr_18056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___18057);

return statearr_18056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___18057,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6645__auto___18162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___18162,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___18162,out){
return (function (state_18139){
var state_val_18140 = (state_18139[(1)]);
if((state_val_18140 === (7))){
var inst_18121 = (state_18139[(7)]);
var inst_18121__$1 = (state_18139[(2)]);
var inst_18122 = (inst_18121__$1 == null);
var inst_18123 = cljs.core.not.call(null,inst_18122);
var state_18139__$1 = (function (){var statearr_18141 = state_18139;
(statearr_18141[(7)] = inst_18121__$1);

return statearr_18141;
})();
if(inst_18123){
var statearr_18142_18163 = state_18139__$1;
(statearr_18142_18163[(1)] = (8));

} else {
var statearr_18143_18164 = state_18139__$1;
(statearr_18143_18164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (1))){
var inst_18116 = (0);
var state_18139__$1 = (function (){var statearr_18144 = state_18139;
(statearr_18144[(8)] = inst_18116);

return statearr_18144;
})();
var statearr_18145_18165 = state_18139__$1;
(statearr_18145_18165[(2)] = null);

(statearr_18145_18165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (4))){
var state_18139__$1 = state_18139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18139__$1,(7),ch);
} else {
if((state_val_18140 === (6))){
var inst_18134 = (state_18139[(2)]);
var state_18139__$1 = state_18139;
var statearr_18146_18166 = state_18139__$1;
(statearr_18146_18166[(2)] = inst_18134);

(statearr_18146_18166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (3))){
var inst_18136 = (state_18139[(2)]);
var inst_18137 = cljs.core.async.close_BANG_.call(null,out);
var state_18139__$1 = (function (){var statearr_18147 = state_18139;
(statearr_18147[(9)] = inst_18136);

return statearr_18147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18139__$1,inst_18137);
} else {
if((state_val_18140 === (2))){
var inst_18116 = (state_18139[(8)]);
var inst_18118 = (inst_18116 < n);
var state_18139__$1 = state_18139;
if(cljs.core.truth_(inst_18118)){
var statearr_18148_18167 = state_18139__$1;
(statearr_18148_18167[(1)] = (4));

} else {
var statearr_18149_18168 = state_18139__$1;
(statearr_18149_18168[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (11))){
var inst_18116 = (state_18139[(8)]);
var inst_18126 = (state_18139[(2)]);
var inst_18127 = (inst_18116 + (1));
var inst_18116__$1 = inst_18127;
var state_18139__$1 = (function (){var statearr_18150 = state_18139;
(statearr_18150[(8)] = inst_18116__$1);

(statearr_18150[(10)] = inst_18126);

return statearr_18150;
})();
var statearr_18151_18169 = state_18139__$1;
(statearr_18151_18169[(2)] = null);

(statearr_18151_18169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (9))){
var state_18139__$1 = state_18139;
var statearr_18152_18170 = state_18139__$1;
(statearr_18152_18170[(2)] = null);

(statearr_18152_18170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (5))){
var state_18139__$1 = state_18139;
var statearr_18153_18171 = state_18139__$1;
(statearr_18153_18171[(2)] = null);

(statearr_18153_18171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (10))){
var inst_18131 = (state_18139[(2)]);
var state_18139__$1 = state_18139;
var statearr_18154_18172 = state_18139__$1;
(statearr_18154_18172[(2)] = inst_18131);

(statearr_18154_18172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18140 === (8))){
var inst_18121 = (state_18139[(7)]);
var state_18139__$1 = state_18139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18139__$1,(11),out,inst_18121);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6645__auto___18162,out))
;
return ((function (switch__6580__auto__,c__6645__auto___18162,out){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_18158 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18158[(0)] = state_machine__6581__auto__);

(statearr_18158[(1)] = (1));

return statearr_18158;
});
var state_machine__6581__auto____1 = (function (state_18139){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_18139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e18159){if((e18159 instanceof Object)){
var ex__6584__auto__ = e18159;
var statearr_18160_18173 = state_18139;
(statearr_18160_18173[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18174 = state_18139;
state_18139 = G__18174;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_18139){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_18139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___18162,out))
})();
var state__6647__auto__ = (function (){var statearr_18161 = f__6646__auto__.call(null);
(statearr_18161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___18162);

return statearr_18161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___18162,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6645__auto___18271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___18271,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___18271,out){
return (function (state_18246){
var state_val_18247 = (state_18246[(1)]);
if((state_val_18247 === (7))){
var inst_18241 = (state_18246[(2)]);
var state_18246__$1 = state_18246;
var statearr_18248_18272 = state_18246__$1;
(statearr_18248_18272[(2)] = inst_18241);

(statearr_18248_18272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18247 === (1))){
var inst_18223 = null;
var state_18246__$1 = (function (){var statearr_18249 = state_18246;
(statearr_18249[(7)] = inst_18223);

return statearr_18249;
})();
var statearr_18250_18273 = state_18246__$1;
(statearr_18250_18273[(2)] = null);

(statearr_18250_18273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18247 === (4))){
var inst_18226 = (state_18246[(8)]);
var inst_18226__$1 = (state_18246[(2)]);
var inst_18227 = (inst_18226__$1 == null);
var inst_18228 = cljs.core.not.call(null,inst_18227);
var state_18246__$1 = (function (){var statearr_18251 = state_18246;
(statearr_18251[(8)] = inst_18226__$1);

return statearr_18251;
})();
if(inst_18228){
var statearr_18252_18274 = state_18246__$1;
(statearr_18252_18274[(1)] = (5));

} else {
var statearr_18253_18275 = state_18246__$1;
(statearr_18253_18275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18247 === (6))){
var state_18246__$1 = state_18246;
var statearr_18254_18276 = state_18246__$1;
(statearr_18254_18276[(2)] = null);

(statearr_18254_18276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18247 === (3))){
var inst_18243 = (state_18246[(2)]);
var inst_18244 = cljs.core.async.close_BANG_.call(null,out);
var state_18246__$1 = (function (){var statearr_18255 = state_18246;
(statearr_18255[(9)] = inst_18243);

return statearr_18255;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18246__$1,inst_18244);
} else {
if((state_val_18247 === (2))){
var state_18246__$1 = state_18246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18246__$1,(4),ch);
} else {
if((state_val_18247 === (11))){
var inst_18226 = (state_18246[(8)]);
var inst_18235 = (state_18246[(2)]);
var inst_18223 = inst_18226;
var state_18246__$1 = (function (){var statearr_18256 = state_18246;
(statearr_18256[(7)] = inst_18223);

(statearr_18256[(10)] = inst_18235);

return statearr_18256;
})();
var statearr_18257_18277 = state_18246__$1;
(statearr_18257_18277[(2)] = null);

(statearr_18257_18277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18247 === (9))){
var inst_18226 = (state_18246[(8)]);
var state_18246__$1 = state_18246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18246__$1,(11),out,inst_18226);
} else {
if((state_val_18247 === (5))){
var inst_18223 = (state_18246[(7)]);
var inst_18226 = (state_18246[(8)]);
var inst_18230 = cljs.core._EQ_.call(null,inst_18226,inst_18223);
var state_18246__$1 = state_18246;
if(inst_18230){
var statearr_18259_18278 = state_18246__$1;
(statearr_18259_18278[(1)] = (8));

} else {
var statearr_18260_18279 = state_18246__$1;
(statearr_18260_18279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18247 === (10))){
var inst_18238 = (state_18246[(2)]);
var state_18246__$1 = state_18246;
var statearr_18261_18280 = state_18246__$1;
(statearr_18261_18280[(2)] = inst_18238);

(statearr_18261_18280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18247 === (8))){
var inst_18223 = (state_18246[(7)]);
var tmp18258 = inst_18223;
var inst_18223__$1 = tmp18258;
var state_18246__$1 = (function (){var statearr_18262 = state_18246;
(statearr_18262[(7)] = inst_18223__$1);

return statearr_18262;
})();
var statearr_18263_18281 = state_18246__$1;
(statearr_18263_18281[(2)] = null);

(statearr_18263_18281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6645__auto___18271,out))
;
return ((function (switch__6580__auto__,c__6645__auto___18271,out){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_18267 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18267[(0)] = state_machine__6581__auto__);

(statearr_18267[(1)] = (1));

return statearr_18267;
});
var state_machine__6581__auto____1 = (function (state_18246){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_18246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e18268){if((e18268 instanceof Object)){
var ex__6584__auto__ = e18268;
var statearr_18269_18282 = state_18246;
(statearr_18269_18282[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18283 = state_18246;
state_18246 = G__18283;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_18246){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_18246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___18271,out))
})();
var state__6647__auto__ = (function (){var statearr_18270 = f__6646__auto__.call(null);
(statearr_18270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___18271);

return statearr_18270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___18271,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6645__auto___18418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___18418,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___18418,out){
return (function (state_18388){
var state_val_18389 = (state_18388[(1)]);
if((state_val_18389 === (7))){
var inst_18384 = (state_18388[(2)]);
var state_18388__$1 = state_18388;
var statearr_18390_18419 = state_18388__$1;
(statearr_18390_18419[(2)] = inst_18384);

(statearr_18390_18419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (1))){
var inst_18351 = (new Array(n));
var inst_18352 = inst_18351;
var inst_18353 = (0);
var state_18388__$1 = (function (){var statearr_18391 = state_18388;
(statearr_18391[(7)] = inst_18353);

(statearr_18391[(8)] = inst_18352);

return statearr_18391;
})();
var statearr_18392_18420 = state_18388__$1;
(statearr_18392_18420[(2)] = null);

(statearr_18392_18420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (4))){
var inst_18356 = (state_18388[(9)]);
var inst_18356__$1 = (state_18388[(2)]);
var inst_18357 = (inst_18356__$1 == null);
var inst_18358 = cljs.core.not.call(null,inst_18357);
var state_18388__$1 = (function (){var statearr_18393 = state_18388;
(statearr_18393[(9)] = inst_18356__$1);

return statearr_18393;
})();
if(inst_18358){
var statearr_18394_18421 = state_18388__$1;
(statearr_18394_18421[(1)] = (5));

} else {
var statearr_18395_18422 = state_18388__$1;
(statearr_18395_18422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (15))){
var inst_18378 = (state_18388[(2)]);
var state_18388__$1 = state_18388;
var statearr_18396_18423 = state_18388__$1;
(statearr_18396_18423[(2)] = inst_18378);

(statearr_18396_18423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (13))){
var state_18388__$1 = state_18388;
var statearr_18397_18424 = state_18388__$1;
(statearr_18397_18424[(2)] = null);

(statearr_18397_18424[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (6))){
var inst_18353 = (state_18388[(7)]);
var inst_18374 = (inst_18353 > (0));
var state_18388__$1 = state_18388;
if(cljs.core.truth_(inst_18374)){
var statearr_18398_18425 = state_18388__$1;
(statearr_18398_18425[(1)] = (12));

} else {
var statearr_18399_18426 = state_18388__$1;
(statearr_18399_18426[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (3))){
var inst_18386 = (state_18388[(2)]);
var state_18388__$1 = state_18388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18388__$1,inst_18386);
} else {
if((state_val_18389 === (12))){
var inst_18352 = (state_18388[(8)]);
var inst_18376 = cljs.core.vec.call(null,inst_18352);
var state_18388__$1 = state_18388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18388__$1,(15),out,inst_18376);
} else {
if((state_val_18389 === (2))){
var state_18388__$1 = state_18388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18388__$1,(4),ch);
} else {
if((state_val_18389 === (11))){
var inst_18368 = (state_18388[(2)]);
var inst_18369 = (new Array(n));
var inst_18352 = inst_18369;
var inst_18353 = (0);
var state_18388__$1 = (function (){var statearr_18400 = state_18388;
(statearr_18400[(7)] = inst_18353);

(statearr_18400[(10)] = inst_18368);

(statearr_18400[(8)] = inst_18352);

return statearr_18400;
})();
var statearr_18401_18427 = state_18388__$1;
(statearr_18401_18427[(2)] = null);

(statearr_18401_18427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (9))){
var inst_18352 = (state_18388[(8)]);
var inst_18366 = cljs.core.vec.call(null,inst_18352);
var state_18388__$1 = state_18388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18388__$1,(11),out,inst_18366);
} else {
if((state_val_18389 === (5))){
var inst_18361 = (state_18388[(11)]);
var inst_18353 = (state_18388[(7)]);
var inst_18356 = (state_18388[(9)]);
var inst_18352 = (state_18388[(8)]);
var inst_18360 = (inst_18352[inst_18353] = inst_18356);
var inst_18361__$1 = (inst_18353 + (1));
var inst_18362 = (inst_18361__$1 < n);
var state_18388__$1 = (function (){var statearr_18402 = state_18388;
(statearr_18402[(11)] = inst_18361__$1);

(statearr_18402[(12)] = inst_18360);

return statearr_18402;
})();
if(cljs.core.truth_(inst_18362)){
var statearr_18403_18428 = state_18388__$1;
(statearr_18403_18428[(1)] = (8));

} else {
var statearr_18404_18429 = state_18388__$1;
(statearr_18404_18429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (14))){
var inst_18381 = (state_18388[(2)]);
var inst_18382 = cljs.core.async.close_BANG_.call(null,out);
var state_18388__$1 = (function (){var statearr_18406 = state_18388;
(statearr_18406[(13)] = inst_18381);

return statearr_18406;
})();
var statearr_18407_18430 = state_18388__$1;
(statearr_18407_18430[(2)] = inst_18382);

(statearr_18407_18430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (10))){
var inst_18372 = (state_18388[(2)]);
var state_18388__$1 = state_18388;
var statearr_18408_18431 = state_18388__$1;
(statearr_18408_18431[(2)] = inst_18372);

(statearr_18408_18431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (8))){
var inst_18361 = (state_18388[(11)]);
var inst_18352 = (state_18388[(8)]);
var tmp18405 = inst_18352;
var inst_18352__$1 = tmp18405;
var inst_18353 = inst_18361;
var state_18388__$1 = (function (){var statearr_18409 = state_18388;
(statearr_18409[(7)] = inst_18353);

(statearr_18409[(8)] = inst_18352__$1);

return statearr_18409;
})();
var statearr_18410_18432 = state_18388__$1;
(statearr_18410_18432[(2)] = null);

(statearr_18410_18432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6645__auto___18418,out))
;
return ((function (switch__6580__auto__,c__6645__auto___18418,out){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_18414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18414[(0)] = state_machine__6581__auto__);

(statearr_18414[(1)] = (1));

return statearr_18414;
});
var state_machine__6581__auto____1 = (function (state_18388){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_18388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e18415){if((e18415 instanceof Object)){
var ex__6584__auto__ = e18415;
var statearr_18416_18433 = state_18388;
(statearr_18416_18433[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18434 = state_18388;
state_18388 = G__18434;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_18388){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_18388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___18418,out))
})();
var state__6647__auto__ = (function (){var statearr_18417 = f__6646__auto__.call(null);
(statearr_18417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___18418);

return statearr_18417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___18418,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6645__auto___18577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___18577,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___18577,out){
return (function (state_18547){
var state_val_18548 = (state_18547[(1)]);
if((state_val_18548 === (7))){
var inst_18543 = (state_18547[(2)]);
var state_18547__$1 = state_18547;
var statearr_18549_18578 = state_18547__$1;
(statearr_18549_18578[(2)] = inst_18543);

(statearr_18549_18578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18548 === (1))){
var inst_18506 = [];
var inst_18507 = inst_18506;
var inst_18508 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18547__$1 = (function (){var statearr_18550 = state_18547;
(statearr_18550[(7)] = inst_18507);

(statearr_18550[(8)] = inst_18508);

return statearr_18550;
})();
var statearr_18551_18579 = state_18547__$1;
(statearr_18551_18579[(2)] = null);

(statearr_18551_18579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18548 === (4))){
var inst_18511 = (state_18547[(9)]);
var inst_18511__$1 = (state_18547[(2)]);
var inst_18512 = (inst_18511__$1 == null);
var inst_18513 = cljs.core.not.call(null,inst_18512);
var state_18547__$1 = (function (){var statearr_18552 = state_18547;
(statearr_18552[(9)] = inst_18511__$1);

return statearr_18552;
})();
if(inst_18513){
var statearr_18553_18580 = state_18547__$1;
(statearr_18553_18580[(1)] = (5));

} else {
var statearr_18554_18581 = state_18547__$1;
(statearr_18554_18581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18548 === (15))){
var inst_18537 = (state_18547[(2)]);
var state_18547__$1 = state_18547;
var statearr_18555_18582 = state_18547__$1;
(statearr_18555_18582[(2)] = inst_18537);

(statearr_18555_18582[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18548 === (13))){
var state_18547__$1 = state_18547;
var statearr_18556_18583 = state_18547__$1;
(statearr_18556_18583[(2)] = null);

(statearr_18556_18583[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18548 === (6))){
var inst_18507 = (state_18547[(7)]);
var inst_18532 = inst_18507.length;
var inst_18533 = (inst_18532 > (0));
var state_18547__$1 = state_18547;
if(cljs.core.truth_(inst_18533)){
var statearr_18557_18584 = state_18547__$1;
(statearr_18557_18584[(1)] = (12));

} else {
var statearr_18558_18585 = state_18547__$1;
(statearr_18558_18585[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18548 === (3))){
var inst_18545 = (state_18547[(2)]);
var state_18547__$1 = state_18547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18547__$1,inst_18545);
} else {
if((state_val_18548 === (12))){
var inst_18507 = (state_18547[(7)]);
var inst_18535 = cljs.core.vec.call(null,inst_18507);
var state_18547__$1 = state_18547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18547__$1,(15),out,inst_18535);
} else {
if((state_val_18548 === (2))){
var state_18547__$1 = state_18547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18547__$1,(4),ch);
} else {
if((state_val_18548 === (11))){
var inst_18511 = (state_18547[(9)]);
var inst_18515 = (state_18547[(10)]);
var inst_18525 = (state_18547[(2)]);
var inst_18526 = [];
var inst_18527 = inst_18526.push(inst_18511);
var inst_18507 = inst_18526;
var inst_18508 = inst_18515;
var state_18547__$1 = (function (){var statearr_18559 = state_18547;
(statearr_18559[(11)] = inst_18525);

(statearr_18559[(7)] = inst_18507);

(statearr_18559[(12)] = inst_18527);

(statearr_18559[(8)] = inst_18508);

return statearr_18559;
})();
var statearr_18560_18586 = state_18547__$1;
(statearr_18560_18586[(2)] = null);

(statearr_18560_18586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18548 === (9))){
var inst_18507 = (state_18547[(7)]);
var inst_18523 = cljs.core.vec.call(null,inst_18507);
var state_18547__$1 = state_18547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18547__$1,(11),out,inst_18523);
} else {
if((state_val_18548 === (5))){
var inst_18511 = (state_18547[(9)]);
var inst_18508 = (state_18547[(8)]);
var inst_18515 = (state_18547[(10)]);
var inst_18515__$1 = f.call(null,inst_18511);
var inst_18516 = cljs.core._EQ_.call(null,inst_18515__$1,inst_18508);
var inst_18517 = cljs.core.keyword_identical_QMARK_.call(null,inst_18508,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18518 = (inst_18516) || (inst_18517);
var state_18547__$1 = (function (){var statearr_18561 = state_18547;
(statearr_18561[(10)] = inst_18515__$1);

return statearr_18561;
})();
if(cljs.core.truth_(inst_18518)){
var statearr_18562_18587 = state_18547__$1;
(statearr_18562_18587[(1)] = (8));

} else {
var statearr_18563_18588 = state_18547__$1;
(statearr_18563_18588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18548 === (14))){
var inst_18540 = (state_18547[(2)]);
var inst_18541 = cljs.core.async.close_BANG_.call(null,out);
var state_18547__$1 = (function (){var statearr_18565 = state_18547;
(statearr_18565[(13)] = inst_18540);

return statearr_18565;
})();
var statearr_18566_18589 = state_18547__$1;
(statearr_18566_18589[(2)] = inst_18541);

(statearr_18566_18589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18548 === (10))){
var inst_18530 = (state_18547[(2)]);
var state_18547__$1 = state_18547;
var statearr_18567_18590 = state_18547__$1;
(statearr_18567_18590[(2)] = inst_18530);

(statearr_18567_18590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18548 === (8))){
var inst_18511 = (state_18547[(9)]);
var inst_18507 = (state_18547[(7)]);
var inst_18515 = (state_18547[(10)]);
var inst_18520 = inst_18507.push(inst_18511);
var tmp18564 = inst_18507;
var inst_18507__$1 = tmp18564;
var inst_18508 = inst_18515;
var state_18547__$1 = (function (){var statearr_18568 = state_18547;
(statearr_18568[(14)] = inst_18520);

(statearr_18568[(7)] = inst_18507__$1);

(statearr_18568[(8)] = inst_18508);

return statearr_18568;
})();
var statearr_18569_18591 = state_18547__$1;
(statearr_18569_18591[(2)] = null);

(statearr_18569_18591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6645__auto___18577,out))
;
return ((function (switch__6580__auto__,c__6645__auto___18577,out){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_18573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18573[(0)] = state_machine__6581__auto__);

(statearr_18573[(1)] = (1));

return statearr_18573;
});
var state_machine__6581__auto____1 = (function (state_18547){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_18547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e18574){if((e18574 instanceof Object)){
var ex__6584__auto__ = e18574;
var statearr_18575_18592 = state_18547;
(statearr_18575_18592[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18593 = state_18547;
state_18547 = G__18593;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_18547){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_18547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___18577,out))
})();
var state__6647__auto__ = (function (){var statearr_18576 = f__6646__auto__.call(null);
(statearr_18576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___18577);

return statearr_18576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___18577,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map