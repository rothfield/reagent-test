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
if(typeof cljs.core.async.t16277 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16277 = (function (f,fn_handler,meta16278){
this.f = f;
this.fn_handler = fn_handler;
this.meta16278 = meta16278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16277.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16279){
var self__ = this;
var _16279__$1 = this;
return self__.meta16278;
});

cljs.core.async.t16277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16279,meta16278__$1){
var self__ = this;
var _16279__$1 = this;
return (new cljs.core.async.t16277(self__.f,self__.fn_handler,meta16278__$1));
});

cljs.core.async.t16277.cljs$lang$type = true;

cljs.core.async.t16277.cljs$lang$ctorStr = "cljs.core.async/t16277";

cljs.core.async.t16277.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t16277");
});

cljs.core.async.__GT_t16277 = (function __GT_t16277(f__$1,fn_handler__$1,meta16278){
return (new cljs.core.async.t16277(f__$1,fn_handler__$1,meta16278));
});

}

return (new cljs.core.async.t16277(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),15,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-ytkm87/out/cljs/core/async.cljs"], null)));
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
var G__16281 = buff;
if(G__16281){
var bit__4234__auto__ = null;
if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4234__auto__;
if(cljs.core.truth_(or__3553__auto__)){
return or__3553__auto__;
} else {
return G__16281.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16281.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16281);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16281);
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
var val_16282 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16282);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16282,ret){
return (function (){
return fn1.call(null,val_16282);
});})(val_16282,ret))
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
var n__4440__auto___16283 = n;
var x_16284 = (0);
while(true){
if((x_16284 < n__4440__auto___16283)){
(a[x_16284] = (0));

var G__16285 = (x_16284 + (1));
x_16284 = G__16285;
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

var G__16286 = (i + (1));
i = G__16286;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16290 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16290 = (function (flag,alt_flag,meta16291){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16291 = meta16291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16290.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16290.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16290.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16292){
var self__ = this;
var _16292__$1 = this;
return self__.meta16291;
});})(flag))
;

cljs.core.async.t16290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16292,meta16291__$1){
var self__ = this;
var _16292__$1 = this;
return (new cljs.core.async.t16290(self__.flag,self__.alt_flag,meta16291__$1));
});})(flag))
;

cljs.core.async.t16290.cljs$lang$type = true;

cljs.core.async.t16290.cljs$lang$ctorStr = "cljs.core.async/t16290";

cljs.core.async.t16290.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t16290");
});})(flag))
;

cljs.core.async.__GT_t16290 = ((function (flag){
return (function __GT_t16290(flag__$1,alt_flag__$1,meta16291){
return (new cljs.core.async.t16290(flag__$1,alt_flag__$1,meta16291));
});})(flag))
;

}

return (new cljs.core.async.t16290(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),135,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),130,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-ytkm87/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t16296 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16296 = (function (cb,flag,alt_handler,meta16297){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16297 = meta16297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16296.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16298){
var self__ = this;
var _16298__$1 = this;
return self__.meta16297;
});

cljs.core.async.t16296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16298,meta16297__$1){
var self__ = this;
var _16298__$1 = this;
return (new cljs.core.async.t16296(self__.cb,self__.flag,self__.alt_handler,meta16297__$1));
});

cljs.core.async.t16296.cljs$lang$type = true;

cljs.core.async.t16296.cljs$lang$ctorStr = "cljs.core.async/t16296";

cljs.core.async.t16296.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t16296");
});

cljs.core.async.__GT_t16296 = (function __GT_t16296(cb__$1,flag__$1,alt_handler__$1,meta16297){
return (new cljs.core.async.t16296(cb__$1,flag__$1,alt_handler__$1,meta16297));
});

}

return (new cljs.core.async.t16296(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),143,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),138,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-ytkm87/out/cljs/core/async.cljs"], null)));
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
return (function (p1__16299_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16299_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16300_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16300_SHARP_,port], null));
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
var G__16301 = (i + (1));
i = G__16301;
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
var alts_BANG___delegate = function (ports,p__16302){
var map__16304 = p__16302;
var map__16304__$1 = ((cljs.core.seq_QMARK_.call(null,map__16304))?cljs.core.apply.call(null,cljs.core.hash_map,map__16304):map__16304);
var opts = map__16304__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

};
var alts_BANG_ = function (ports,var_args){
var p__16302 = null;
if (arguments.length > 1) {
var G__16305__i = 0, G__16305__a = new Array(arguments.length -  1);
while (G__16305__i < G__16305__a.length) {G__16305__a[G__16305__i] = arguments[G__16305__i + 1]; ++G__16305__i;}
  p__16302 = new cljs.core.IndexedSeq(G__16305__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__16302);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16306){
var ports = cljs.core.first(arglist__16306);
var p__16302 = cljs.core.rest(arglist__16306);
return alts_BANG___delegate(ports,p__16302);
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
if(typeof cljs.core.async.t16314 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16314 = (function (ch,f,map_LT_,meta16315){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16315 = meta16315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16314.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16314.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t16314.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16314.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t16317 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16317 = (function (fn1,_,meta16315,map_LT_,f,ch,meta16318){
this.fn1 = fn1;
this._ = _;
this.meta16315 = meta16315;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16318 = meta16318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16317.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16317.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t16317.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t16317.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16307_SHARP_){
return f1.call(null,(((p1__16307_SHARP_ == null))?null:self__.f.call(null,p1__16307_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t16317.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16319){
var self__ = this;
var _16319__$1 = this;
return self__.meta16318;
});})(___$1))
;

cljs.core.async.t16317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16319,meta16318__$1){
var self__ = this;
var _16319__$1 = this;
return (new cljs.core.async.t16317(self__.fn1,self__._,self__.meta16315,self__.map_LT_,self__.f,self__.ch,meta16318__$1));
});})(___$1))
;

cljs.core.async.t16317.cljs$lang$type = true;

cljs.core.async.t16317.cljs$lang$ctorStr = "cljs.core.async/t16317";

cljs.core.async.t16317.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t16317");
});})(___$1))
;

cljs.core.async.__GT_t16317 = ((function (___$1){
return (function __GT_t16317(fn1__$1,___$2,meta16315__$1,map_LT___$1,f__$1,ch__$1,meta16318){
return (new cljs.core.async.t16317(fn1__$1,___$2,meta16315__$1,map_LT___$1,f__$1,ch__$1,meta16318));
});})(___$1))
;

}

return (new cljs.core.async.t16317(fn1,___$1,self__.meta16315,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),220,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),214,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-ytkm87/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t16314.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16314.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16314.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16316){
var self__ = this;
var _16316__$1 = this;
return self__.meta16315;
});

cljs.core.async.t16314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16316,meta16315__$1){
var self__ = this;
var _16316__$1 = this;
return (new cljs.core.async.t16314(self__.ch,self__.f,self__.map_LT_,meta16315__$1));
});

cljs.core.async.t16314.cljs$lang$type = true;

cljs.core.async.t16314.cljs$lang$ctorStr = "cljs.core.async/t16314";

cljs.core.async.t16314.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t16314");
});

cljs.core.async.__GT_t16314 = (function __GT_t16314(ch__$1,f__$1,map_LT___$1,meta16315){
return (new cljs.core.async.t16314(ch__$1,f__$1,map_LT___$1,meta16315));
});

}

return (new cljs.core.async.t16314(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),226,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),205,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-ytkm87/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t16323 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16323 = (function (ch,f,map_GT_,meta16324){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16324 = meta16324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16323.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16323.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t16323.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16323.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16323.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16323.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16325){
var self__ = this;
var _16325__$1 = this;
return self__.meta16324;
});

cljs.core.async.t16323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16325,meta16324__$1){
var self__ = this;
var _16325__$1 = this;
return (new cljs.core.async.t16323(self__.ch,self__.f,self__.map_GT_,meta16324__$1));
});

cljs.core.async.t16323.cljs$lang$type = true;

cljs.core.async.t16323.cljs$lang$ctorStr = "cljs.core.async/t16323";

cljs.core.async.t16323.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t16323");
});

cljs.core.async.__GT_t16323 = (function __GT_t16323(ch__$1,f__$1,map_GT___$1,meta16324){
return (new cljs.core.async.t16323(ch__$1,f__$1,map_GT___$1,meta16324));
});

}

return (new cljs.core.async.t16323(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),241,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),232,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-ytkm87/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t16329 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16329 = (function (ch,p,filter_GT_,meta16330){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16330 = meta16330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16329.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t16329.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t16329.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t16329.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t16329.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t16329.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t16329.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t16329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16331){
var self__ = this;
var _16331__$1 = this;
return self__.meta16330;
});

cljs.core.async.t16329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16331,meta16330__$1){
var self__ = this;
var _16331__$1 = this;
return (new cljs.core.async.t16329(self__.ch,self__.p,self__.filter_GT_,meta16330__$1));
});

cljs.core.async.t16329.cljs$lang$type = true;

cljs.core.async.t16329.cljs$lang$ctorStr = "cljs.core.async/t16329";

cljs.core.async.t16329.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t16329");
});

cljs.core.async.__GT_t16329 = (function __GT_t16329(ch__$1,p__$1,filter_GT___$1,meta16330){
return (new cljs.core.async.t16329(ch__$1,p__$1,filter_GT___$1,meta16330));
});

}

return (new cljs.core.async.t16329(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),262,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),250,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-ytkm87/out/cljs/core/async.cljs"], null)));
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
var c__13715__auto___16414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto___16414,out){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto___16414,out){
return (function (state_16393){
var state_val_16394 = (state_16393[(1)]);
if((state_val_16394 === (7))){
var inst_16389 = (state_16393[(2)]);
var state_16393__$1 = state_16393;
var statearr_16395_16415 = state_16393__$1;
(statearr_16395_16415[(2)] = inst_16389);

(statearr_16395_16415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (1))){
var state_16393__$1 = state_16393;
var statearr_16396_16416 = state_16393__$1;
(statearr_16396_16416[(2)] = null);

(statearr_16396_16416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (4))){
var inst_16375 = (state_16393[(7)]);
var inst_16375__$1 = (state_16393[(2)]);
var inst_16376 = (inst_16375__$1 == null);
var state_16393__$1 = (function (){var statearr_16397 = state_16393;
(statearr_16397[(7)] = inst_16375__$1);

return statearr_16397;
})();
if(cljs.core.truth_(inst_16376)){
var statearr_16398_16417 = state_16393__$1;
(statearr_16398_16417[(1)] = (5));

} else {
var statearr_16399_16418 = state_16393__$1;
(statearr_16399_16418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (6))){
var inst_16375 = (state_16393[(7)]);
var inst_16380 = p.call(null,inst_16375);
var state_16393__$1 = state_16393;
if(cljs.core.truth_(inst_16380)){
var statearr_16400_16419 = state_16393__$1;
(statearr_16400_16419[(1)] = (8));

} else {
var statearr_16401_16420 = state_16393__$1;
(statearr_16401_16420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (3))){
var inst_16391 = (state_16393[(2)]);
var state_16393__$1 = state_16393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16393__$1,inst_16391);
} else {
if((state_val_16394 === (2))){
var state_16393__$1 = state_16393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16393__$1,(4),ch);
} else {
if((state_val_16394 === (11))){
var inst_16383 = (state_16393[(2)]);
var state_16393__$1 = state_16393;
var statearr_16402_16421 = state_16393__$1;
(statearr_16402_16421[(2)] = inst_16383);

(statearr_16402_16421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (9))){
var state_16393__$1 = state_16393;
var statearr_16403_16422 = state_16393__$1;
(statearr_16403_16422[(2)] = null);

(statearr_16403_16422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (5))){
var inst_16378 = cljs.core.async.close_BANG_.call(null,out);
var state_16393__$1 = state_16393;
var statearr_16404_16423 = state_16393__$1;
(statearr_16404_16423[(2)] = inst_16378);

(statearr_16404_16423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (10))){
var inst_16386 = (state_16393[(2)]);
var state_16393__$1 = (function (){var statearr_16405 = state_16393;
(statearr_16405[(8)] = inst_16386);

return statearr_16405;
})();
var statearr_16406_16424 = state_16393__$1;
(statearr_16406_16424[(2)] = null);

(statearr_16406_16424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16394 === (8))){
var inst_16375 = (state_16393[(7)]);
var state_16393__$1 = state_16393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16393__$1,(11),out,inst_16375);
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
});})(c__13715__auto___16414,out))
;
return ((function (switch__13650__auto__,c__13715__auto___16414,out){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_16410 = [null,null,null,null,null,null,null,null,null];
(statearr_16410[(0)] = state_machine__13651__auto__);

(statearr_16410[(1)] = (1));

return statearr_16410;
});
var state_machine__13651__auto____1 = (function (state_16393){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_16393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e16411){if((e16411 instanceof Object)){
var ex__13654__auto__ = e16411;
var statearr_16412_16425 = state_16393;
(statearr_16412_16425[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16426 = state_16393;
state_16393 = G__16426;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_16393){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_16393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto___16414,out))
})();
var state__13717__auto__ = (function (){var statearr_16413 = f__13716__auto__.call(null);
(statearr_16413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto___16414);

return statearr_16413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto___16414,out))
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
var c__13715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto__){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto__){
return (function (state_16592){
var state_val_16593 = (state_16592[(1)]);
if((state_val_16593 === (7))){
var inst_16588 = (state_16592[(2)]);
var state_16592__$1 = state_16592;
var statearr_16594_16635 = state_16592__$1;
(statearr_16594_16635[(2)] = inst_16588);

(statearr_16594_16635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (20))){
var inst_16558 = (state_16592[(7)]);
var inst_16569 = (state_16592[(2)]);
var inst_16570 = cljs.core.next.call(null,inst_16558);
var inst_16544 = inst_16570;
var inst_16545 = null;
var inst_16546 = (0);
var inst_16547 = (0);
var state_16592__$1 = (function (){var statearr_16595 = state_16592;
(statearr_16595[(8)] = inst_16544);

(statearr_16595[(9)] = inst_16547);

(statearr_16595[(10)] = inst_16569);

(statearr_16595[(11)] = inst_16545);

(statearr_16595[(12)] = inst_16546);

return statearr_16595;
})();
var statearr_16596_16636 = state_16592__$1;
(statearr_16596_16636[(2)] = null);

(statearr_16596_16636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (1))){
var state_16592__$1 = state_16592;
var statearr_16597_16637 = state_16592__$1;
(statearr_16597_16637[(2)] = null);

(statearr_16597_16637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (4))){
var inst_16533 = (state_16592[(13)]);
var inst_16533__$1 = (state_16592[(2)]);
var inst_16534 = (inst_16533__$1 == null);
var state_16592__$1 = (function (){var statearr_16598 = state_16592;
(statearr_16598[(13)] = inst_16533__$1);

return statearr_16598;
})();
if(cljs.core.truth_(inst_16534)){
var statearr_16599_16638 = state_16592__$1;
(statearr_16599_16638[(1)] = (5));

} else {
var statearr_16600_16639 = state_16592__$1;
(statearr_16600_16639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (15))){
var state_16592__$1 = state_16592;
var statearr_16604_16640 = state_16592__$1;
(statearr_16604_16640[(2)] = null);

(statearr_16604_16640[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (21))){
var state_16592__$1 = state_16592;
var statearr_16605_16641 = state_16592__$1;
(statearr_16605_16641[(2)] = null);

(statearr_16605_16641[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (13))){
var inst_16544 = (state_16592[(8)]);
var inst_16547 = (state_16592[(9)]);
var inst_16545 = (state_16592[(11)]);
var inst_16546 = (state_16592[(12)]);
var inst_16554 = (state_16592[(2)]);
var inst_16555 = (inst_16547 + (1));
var tmp16601 = inst_16544;
var tmp16602 = inst_16545;
var tmp16603 = inst_16546;
var inst_16544__$1 = tmp16601;
var inst_16545__$1 = tmp16602;
var inst_16546__$1 = tmp16603;
var inst_16547__$1 = inst_16555;
var state_16592__$1 = (function (){var statearr_16606 = state_16592;
(statearr_16606[(8)] = inst_16544__$1);

(statearr_16606[(9)] = inst_16547__$1);

(statearr_16606[(11)] = inst_16545__$1);

(statearr_16606[(12)] = inst_16546__$1);

(statearr_16606[(14)] = inst_16554);

return statearr_16606;
})();
var statearr_16607_16642 = state_16592__$1;
(statearr_16607_16642[(2)] = null);

(statearr_16607_16642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (22))){
var state_16592__$1 = state_16592;
var statearr_16608_16643 = state_16592__$1;
(statearr_16608_16643[(2)] = null);

(statearr_16608_16643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (6))){
var inst_16533 = (state_16592[(13)]);
var inst_16542 = f.call(null,inst_16533);
var inst_16543 = cljs.core.seq.call(null,inst_16542);
var inst_16544 = inst_16543;
var inst_16545 = null;
var inst_16546 = (0);
var inst_16547 = (0);
var state_16592__$1 = (function (){var statearr_16609 = state_16592;
(statearr_16609[(8)] = inst_16544);

(statearr_16609[(9)] = inst_16547);

(statearr_16609[(11)] = inst_16545);

(statearr_16609[(12)] = inst_16546);

return statearr_16609;
})();
var statearr_16610_16644 = state_16592__$1;
(statearr_16610_16644[(2)] = null);

(statearr_16610_16644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (17))){
var inst_16558 = (state_16592[(7)]);
var inst_16562 = cljs.core.chunk_first.call(null,inst_16558);
var inst_16563 = cljs.core.chunk_rest.call(null,inst_16558);
var inst_16564 = cljs.core.count.call(null,inst_16562);
var inst_16544 = inst_16563;
var inst_16545 = inst_16562;
var inst_16546 = inst_16564;
var inst_16547 = (0);
var state_16592__$1 = (function (){var statearr_16611 = state_16592;
(statearr_16611[(8)] = inst_16544);

(statearr_16611[(9)] = inst_16547);

(statearr_16611[(11)] = inst_16545);

(statearr_16611[(12)] = inst_16546);

return statearr_16611;
})();
var statearr_16612_16645 = state_16592__$1;
(statearr_16612_16645[(2)] = null);

(statearr_16612_16645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (3))){
var inst_16590 = (state_16592[(2)]);
var state_16592__$1 = state_16592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16592__$1,inst_16590);
} else {
if((state_val_16593 === (12))){
var inst_16578 = (state_16592[(2)]);
var state_16592__$1 = state_16592;
var statearr_16613_16646 = state_16592__$1;
(statearr_16613_16646[(2)] = inst_16578);

(statearr_16613_16646[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (2))){
var state_16592__$1 = state_16592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16592__$1,(4),in$);
} else {
if((state_val_16593 === (23))){
var inst_16586 = (state_16592[(2)]);
var state_16592__$1 = state_16592;
var statearr_16614_16647 = state_16592__$1;
(statearr_16614_16647[(2)] = inst_16586);

(statearr_16614_16647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (19))){
var inst_16573 = (state_16592[(2)]);
var state_16592__$1 = state_16592;
var statearr_16615_16648 = state_16592__$1;
(statearr_16615_16648[(2)] = inst_16573);

(statearr_16615_16648[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (11))){
var inst_16544 = (state_16592[(8)]);
var inst_16558 = (state_16592[(7)]);
var inst_16558__$1 = cljs.core.seq.call(null,inst_16544);
var state_16592__$1 = (function (){var statearr_16616 = state_16592;
(statearr_16616[(7)] = inst_16558__$1);

return statearr_16616;
})();
if(inst_16558__$1){
var statearr_16617_16649 = state_16592__$1;
(statearr_16617_16649[(1)] = (14));

} else {
var statearr_16618_16650 = state_16592__$1;
(statearr_16618_16650[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (9))){
var inst_16580 = (state_16592[(2)]);
var inst_16581 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16592__$1 = (function (){var statearr_16619 = state_16592;
(statearr_16619[(15)] = inst_16580);

return statearr_16619;
})();
if(cljs.core.truth_(inst_16581)){
var statearr_16620_16651 = state_16592__$1;
(statearr_16620_16651[(1)] = (21));

} else {
var statearr_16621_16652 = state_16592__$1;
(statearr_16621_16652[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (5))){
var inst_16536 = cljs.core.async.close_BANG_.call(null,out);
var state_16592__$1 = state_16592;
var statearr_16622_16653 = state_16592__$1;
(statearr_16622_16653[(2)] = inst_16536);

(statearr_16622_16653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (14))){
var inst_16558 = (state_16592[(7)]);
var inst_16560 = cljs.core.chunked_seq_QMARK_.call(null,inst_16558);
var state_16592__$1 = state_16592;
if(inst_16560){
var statearr_16623_16654 = state_16592__$1;
(statearr_16623_16654[(1)] = (17));

} else {
var statearr_16624_16655 = state_16592__$1;
(statearr_16624_16655[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (16))){
var inst_16576 = (state_16592[(2)]);
var state_16592__$1 = state_16592;
var statearr_16625_16656 = state_16592__$1;
(statearr_16625_16656[(2)] = inst_16576);

(statearr_16625_16656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16593 === (10))){
var inst_16547 = (state_16592[(9)]);
var inst_16545 = (state_16592[(11)]);
var inst_16552 = cljs.core._nth.call(null,inst_16545,inst_16547);
var state_16592__$1 = state_16592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16592__$1,(13),out,inst_16552);
} else {
if((state_val_16593 === (18))){
var inst_16558 = (state_16592[(7)]);
var inst_16567 = cljs.core.first.call(null,inst_16558);
var state_16592__$1 = state_16592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16592__$1,(20),out,inst_16567);
} else {
if((state_val_16593 === (8))){
var inst_16547 = (state_16592[(9)]);
var inst_16546 = (state_16592[(12)]);
var inst_16549 = (inst_16547 < inst_16546);
var inst_16550 = inst_16549;
var state_16592__$1 = state_16592;
if(cljs.core.truth_(inst_16550)){
var statearr_16626_16657 = state_16592__$1;
(statearr_16626_16657[(1)] = (10));

} else {
var statearr_16627_16658 = state_16592__$1;
(statearr_16627_16658[(1)] = (11));

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
});})(c__13715__auto__))
;
return ((function (switch__13650__auto__,c__13715__auto__){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_16631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16631[(0)] = state_machine__13651__auto__);

(statearr_16631[(1)] = (1));

return statearr_16631;
});
var state_machine__13651__auto____1 = (function (state_16592){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_16592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e16632){if((e16632 instanceof Object)){
var ex__13654__auto__ = e16632;
var statearr_16633_16659 = state_16592;
(statearr_16633_16659[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16660 = state_16592;
state_16592 = G__16660;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_16592){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_16592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto__))
})();
var state__13717__auto__ = (function (){var statearr_16634 = f__13716__auto__.call(null);
(statearr_16634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto__);

return statearr_16634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto__))
);

return c__13715__auto__;
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
var c__13715__auto___16755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto___16755){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto___16755){
return (function (state_16731){
var state_val_16732 = (state_16731[(1)]);
if((state_val_16732 === (7))){
var inst_16727 = (state_16731[(2)]);
var state_16731__$1 = state_16731;
var statearr_16733_16756 = state_16731__$1;
(statearr_16733_16756[(2)] = inst_16727);

(statearr_16733_16756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (1))){
var state_16731__$1 = state_16731;
var statearr_16734_16757 = state_16731__$1;
(statearr_16734_16757[(2)] = null);

(statearr_16734_16757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (4))){
var inst_16710 = (state_16731[(7)]);
var inst_16710__$1 = (state_16731[(2)]);
var inst_16711 = (inst_16710__$1 == null);
var state_16731__$1 = (function (){var statearr_16735 = state_16731;
(statearr_16735[(7)] = inst_16710__$1);

return statearr_16735;
})();
if(cljs.core.truth_(inst_16711)){
var statearr_16736_16758 = state_16731__$1;
(statearr_16736_16758[(1)] = (5));

} else {
var statearr_16737_16759 = state_16731__$1;
(statearr_16737_16759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (13))){
var state_16731__$1 = state_16731;
var statearr_16738_16760 = state_16731__$1;
(statearr_16738_16760[(2)] = null);

(statearr_16738_16760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (6))){
var inst_16710 = (state_16731[(7)]);
var state_16731__$1 = state_16731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16731__$1,(11),to,inst_16710);
} else {
if((state_val_16732 === (3))){
var inst_16729 = (state_16731[(2)]);
var state_16731__$1 = state_16731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16731__$1,inst_16729);
} else {
if((state_val_16732 === (12))){
var state_16731__$1 = state_16731;
var statearr_16739_16761 = state_16731__$1;
(statearr_16739_16761[(2)] = null);

(statearr_16739_16761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (2))){
var state_16731__$1 = state_16731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16731__$1,(4),from);
} else {
if((state_val_16732 === (11))){
var inst_16720 = (state_16731[(2)]);
var state_16731__$1 = state_16731;
if(cljs.core.truth_(inst_16720)){
var statearr_16740_16762 = state_16731__$1;
(statearr_16740_16762[(1)] = (12));

} else {
var statearr_16741_16763 = state_16731__$1;
(statearr_16741_16763[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (9))){
var state_16731__$1 = state_16731;
var statearr_16742_16764 = state_16731__$1;
(statearr_16742_16764[(2)] = null);

(statearr_16742_16764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (5))){
var state_16731__$1 = state_16731;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16743_16765 = state_16731__$1;
(statearr_16743_16765[(1)] = (8));

} else {
var statearr_16744_16766 = state_16731__$1;
(statearr_16744_16766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (14))){
var inst_16725 = (state_16731[(2)]);
var state_16731__$1 = state_16731;
var statearr_16745_16767 = state_16731__$1;
(statearr_16745_16767[(2)] = inst_16725);

(statearr_16745_16767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (10))){
var inst_16717 = (state_16731[(2)]);
var state_16731__$1 = state_16731;
var statearr_16746_16768 = state_16731__$1;
(statearr_16746_16768[(2)] = inst_16717);

(statearr_16746_16768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (8))){
var inst_16714 = cljs.core.async.close_BANG_.call(null,to);
var state_16731__$1 = state_16731;
var statearr_16747_16769 = state_16731__$1;
(statearr_16747_16769[(2)] = inst_16714);

(statearr_16747_16769[(1)] = (10));


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
});})(c__13715__auto___16755))
;
return ((function (switch__13650__auto__,c__13715__auto___16755){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_16751 = [null,null,null,null,null,null,null,null];
(statearr_16751[(0)] = state_machine__13651__auto__);

(statearr_16751[(1)] = (1));

return statearr_16751;
});
var state_machine__13651__auto____1 = (function (state_16731){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_16731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e16752){if((e16752 instanceof Object)){
var ex__13654__auto__ = e16752;
var statearr_16753_16770 = state_16731;
(statearr_16753_16770[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16771 = state_16731;
state_16731 = G__16771;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_16731){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_16731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto___16755))
})();
var state__13717__auto__ = (function (){var statearr_16754 = f__13716__auto__.call(null);
(statearr_16754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto___16755);

return statearr_16754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto___16755))
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
var c__13715__auto___16872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto___16872,tc,fc){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto___16872,tc,fc){
return (function (state_16847){
var state_val_16848 = (state_16847[(1)]);
if((state_val_16848 === (7))){
var inst_16843 = (state_16847[(2)]);
var state_16847__$1 = state_16847;
var statearr_16849_16873 = state_16847__$1;
(statearr_16849_16873[(2)] = inst_16843);

(statearr_16849_16873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16848 === (1))){
var state_16847__$1 = state_16847;
var statearr_16850_16874 = state_16847__$1;
(statearr_16850_16874[(2)] = null);

(statearr_16850_16874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16848 === (4))){
var inst_16824 = (state_16847[(7)]);
var inst_16824__$1 = (state_16847[(2)]);
var inst_16825 = (inst_16824__$1 == null);
var state_16847__$1 = (function (){var statearr_16851 = state_16847;
(statearr_16851[(7)] = inst_16824__$1);

return statearr_16851;
})();
if(cljs.core.truth_(inst_16825)){
var statearr_16852_16875 = state_16847__$1;
(statearr_16852_16875[(1)] = (5));

} else {
var statearr_16853_16876 = state_16847__$1;
(statearr_16853_16876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16848 === (13))){
var state_16847__$1 = state_16847;
var statearr_16854_16877 = state_16847__$1;
(statearr_16854_16877[(2)] = null);

(statearr_16854_16877[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16848 === (6))){
var inst_16824 = (state_16847[(7)]);
var inst_16830 = p.call(null,inst_16824);
var state_16847__$1 = state_16847;
if(cljs.core.truth_(inst_16830)){
var statearr_16855_16878 = state_16847__$1;
(statearr_16855_16878[(1)] = (9));

} else {
var statearr_16856_16879 = state_16847__$1;
(statearr_16856_16879[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16848 === (3))){
var inst_16845 = (state_16847[(2)]);
var state_16847__$1 = state_16847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16847__$1,inst_16845);
} else {
if((state_val_16848 === (12))){
var state_16847__$1 = state_16847;
var statearr_16857_16880 = state_16847__$1;
(statearr_16857_16880[(2)] = null);

(statearr_16857_16880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16848 === (2))){
var state_16847__$1 = state_16847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16847__$1,(4),ch);
} else {
if((state_val_16848 === (11))){
var inst_16824 = (state_16847[(7)]);
var inst_16834 = (state_16847[(2)]);
var state_16847__$1 = state_16847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16847__$1,(8),inst_16834,inst_16824);
} else {
if((state_val_16848 === (9))){
var state_16847__$1 = state_16847;
var statearr_16858_16881 = state_16847__$1;
(statearr_16858_16881[(2)] = tc);

(statearr_16858_16881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16848 === (5))){
var inst_16827 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16828 = cljs.core.async.close_BANG_.call(null,fc);
var state_16847__$1 = (function (){var statearr_16859 = state_16847;
(statearr_16859[(8)] = inst_16827);

return statearr_16859;
})();
var statearr_16860_16882 = state_16847__$1;
(statearr_16860_16882[(2)] = inst_16828);

(statearr_16860_16882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16848 === (14))){
var inst_16841 = (state_16847[(2)]);
var state_16847__$1 = state_16847;
var statearr_16861_16883 = state_16847__$1;
(statearr_16861_16883[(2)] = inst_16841);

(statearr_16861_16883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16848 === (10))){
var state_16847__$1 = state_16847;
var statearr_16862_16884 = state_16847__$1;
(statearr_16862_16884[(2)] = fc);

(statearr_16862_16884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16848 === (8))){
var inst_16836 = (state_16847[(2)]);
var state_16847__$1 = state_16847;
if(cljs.core.truth_(inst_16836)){
var statearr_16863_16885 = state_16847__$1;
(statearr_16863_16885[(1)] = (12));

} else {
var statearr_16864_16886 = state_16847__$1;
(statearr_16864_16886[(1)] = (13));

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
});})(c__13715__auto___16872,tc,fc))
;
return ((function (switch__13650__auto__,c__13715__auto___16872,tc,fc){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_16868 = [null,null,null,null,null,null,null,null,null];
(statearr_16868[(0)] = state_machine__13651__auto__);

(statearr_16868[(1)] = (1));

return statearr_16868;
});
var state_machine__13651__auto____1 = (function (state_16847){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_16847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e16869){if((e16869 instanceof Object)){
var ex__13654__auto__ = e16869;
var statearr_16870_16887 = state_16847;
(statearr_16870_16887[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16888 = state_16847;
state_16847 = G__16888;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_16847){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_16847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto___16872,tc,fc))
})();
var state__13717__auto__ = (function (){var statearr_16871 = f__13716__auto__.call(null);
(statearr_16871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto___16872);

return statearr_16871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto___16872,tc,fc))
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
var c__13715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto__){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto__){
return (function (state_16935){
var state_val_16936 = (state_16935[(1)]);
if((state_val_16936 === (7))){
var inst_16931 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
var statearr_16937_16953 = state_16935__$1;
(statearr_16937_16953[(2)] = inst_16931);

(statearr_16937_16953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (6))){
var inst_16924 = (state_16935[(7)]);
var inst_16921 = (state_16935[(8)]);
var inst_16928 = f.call(null,inst_16921,inst_16924);
var inst_16921__$1 = inst_16928;
var state_16935__$1 = (function (){var statearr_16938 = state_16935;
(statearr_16938[(8)] = inst_16921__$1);

return statearr_16938;
})();
var statearr_16939_16954 = state_16935__$1;
(statearr_16939_16954[(2)] = null);

(statearr_16939_16954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (5))){
var inst_16921 = (state_16935[(8)]);
var state_16935__$1 = state_16935;
var statearr_16940_16955 = state_16935__$1;
(statearr_16940_16955[(2)] = inst_16921);

(statearr_16940_16955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (4))){
var inst_16924 = (state_16935[(7)]);
var inst_16924__$1 = (state_16935[(2)]);
var inst_16925 = (inst_16924__$1 == null);
var state_16935__$1 = (function (){var statearr_16941 = state_16935;
(statearr_16941[(7)] = inst_16924__$1);

return statearr_16941;
})();
if(cljs.core.truth_(inst_16925)){
var statearr_16942_16956 = state_16935__$1;
(statearr_16942_16956[(1)] = (5));

} else {
var statearr_16943_16957 = state_16935__$1;
(statearr_16943_16957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16936 === (3))){
var inst_16933 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16935__$1,inst_16933);
} else {
if((state_val_16936 === (2))){
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16935__$1,(4),ch);
} else {
if((state_val_16936 === (1))){
var inst_16921 = init;
var state_16935__$1 = (function (){var statearr_16944 = state_16935;
(statearr_16944[(8)] = inst_16921);

return statearr_16944;
})();
var statearr_16945_16958 = state_16935__$1;
(statearr_16945_16958[(2)] = null);

(statearr_16945_16958[(1)] = (2));


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
});})(c__13715__auto__))
;
return ((function (switch__13650__auto__,c__13715__auto__){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_16949 = [null,null,null,null,null,null,null,null,null];
(statearr_16949[(0)] = state_machine__13651__auto__);

(statearr_16949[(1)] = (1));

return statearr_16949;
});
var state_machine__13651__auto____1 = (function (state_16935){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_16935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e16950){if((e16950 instanceof Object)){
var ex__13654__auto__ = e16950;
var statearr_16951_16959 = state_16935;
(statearr_16951_16959[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16960 = state_16935;
state_16935 = G__16960;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_16935){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_16935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto__))
})();
var state__13717__auto__ = (function (){var statearr_16952 = f__13716__auto__.call(null);
(statearr_16952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto__);

return statearr_16952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto__))
);

return c__13715__auto__;
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
var c__13715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto__){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto__){
return (function (state_17034){
var state_val_17035 = (state_17034[(1)]);
if((state_val_17035 === (7))){
var inst_17016 = (state_17034[(2)]);
var state_17034__$1 = state_17034;
var statearr_17036_17059 = state_17034__$1;
(statearr_17036_17059[(2)] = inst_17016);

(statearr_17036_17059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17035 === (1))){
var inst_17010 = cljs.core.seq.call(null,coll);
var inst_17011 = inst_17010;
var state_17034__$1 = (function (){var statearr_17037 = state_17034;
(statearr_17037[(7)] = inst_17011);

return statearr_17037;
})();
var statearr_17038_17060 = state_17034__$1;
(statearr_17038_17060[(2)] = null);

(statearr_17038_17060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17035 === (4))){
var inst_17011 = (state_17034[(7)]);
var inst_17014 = cljs.core.first.call(null,inst_17011);
var state_17034__$1 = state_17034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17034__$1,(7),ch,inst_17014);
} else {
if((state_val_17035 === (13))){
var inst_17028 = (state_17034[(2)]);
var state_17034__$1 = state_17034;
var statearr_17039_17061 = state_17034__$1;
(statearr_17039_17061[(2)] = inst_17028);

(statearr_17039_17061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17035 === (6))){
var inst_17019 = (state_17034[(2)]);
var state_17034__$1 = state_17034;
if(cljs.core.truth_(inst_17019)){
var statearr_17040_17062 = state_17034__$1;
(statearr_17040_17062[(1)] = (8));

} else {
var statearr_17041_17063 = state_17034__$1;
(statearr_17041_17063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17035 === (3))){
var inst_17032 = (state_17034[(2)]);
var state_17034__$1 = state_17034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17034__$1,inst_17032);
} else {
if((state_val_17035 === (12))){
var state_17034__$1 = state_17034;
var statearr_17042_17064 = state_17034__$1;
(statearr_17042_17064[(2)] = null);

(statearr_17042_17064[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17035 === (2))){
var inst_17011 = (state_17034[(7)]);
var state_17034__$1 = state_17034;
if(cljs.core.truth_(inst_17011)){
var statearr_17043_17065 = state_17034__$1;
(statearr_17043_17065[(1)] = (4));

} else {
var statearr_17044_17066 = state_17034__$1;
(statearr_17044_17066[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17035 === (11))){
var inst_17025 = cljs.core.async.close_BANG_.call(null,ch);
var state_17034__$1 = state_17034;
var statearr_17045_17067 = state_17034__$1;
(statearr_17045_17067[(2)] = inst_17025);

(statearr_17045_17067[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17035 === (9))){
var state_17034__$1 = state_17034;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17046_17068 = state_17034__$1;
(statearr_17046_17068[(1)] = (11));

} else {
var statearr_17047_17069 = state_17034__$1;
(statearr_17047_17069[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17035 === (5))){
var inst_17011 = (state_17034[(7)]);
var state_17034__$1 = state_17034;
var statearr_17048_17070 = state_17034__$1;
(statearr_17048_17070[(2)] = inst_17011);

(statearr_17048_17070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17035 === (10))){
var inst_17030 = (state_17034[(2)]);
var state_17034__$1 = state_17034;
var statearr_17049_17071 = state_17034__$1;
(statearr_17049_17071[(2)] = inst_17030);

(statearr_17049_17071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17035 === (8))){
var inst_17011 = (state_17034[(7)]);
var inst_17021 = cljs.core.next.call(null,inst_17011);
var inst_17011__$1 = inst_17021;
var state_17034__$1 = (function (){var statearr_17050 = state_17034;
(statearr_17050[(7)] = inst_17011__$1);

return statearr_17050;
})();
var statearr_17051_17072 = state_17034__$1;
(statearr_17051_17072[(2)] = null);

(statearr_17051_17072[(1)] = (2));


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
});})(c__13715__auto__))
;
return ((function (switch__13650__auto__,c__13715__auto__){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_17055 = [null,null,null,null,null,null,null,null];
(statearr_17055[(0)] = state_machine__13651__auto__);

(statearr_17055[(1)] = (1));

return statearr_17055;
});
var state_machine__13651__auto____1 = (function (state_17034){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_17034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e17056){if((e17056 instanceof Object)){
var ex__13654__auto__ = e17056;
var statearr_17057_17073 = state_17034;
(statearr_17057_17073[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17074 = state_17034;
state_17034 = G__17074;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_17034){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_17034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto__))
})();
var state__13717__auto__ = (function (){var statearr_17058 = f__13716__auto__.call(null);
(statearr_17058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto__);

return statearr_17058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto__))
);

return c__13715__auto__;
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

cljs.core.async.Mux = (function (){var obj17076 = {};
return obj17076;
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


cljs.core.async.Mult = (function (){var obj17078 = {};
return obj17078;
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
if(typeof cljs.core.async.t17300 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17300 = (function (cs,ch,mult,meta17301){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17301 = meta17301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17300.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t17300.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t17300.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t17300.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t17300.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17300.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t17300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17302){
var self__ = this;
var _17302__$1 = this;
return self__.meta17301;
});})(cs))
;

cljs.core.async.t17300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17302,meta17301__$1){
var self__ = this;
var _17302__$1 = this;
return (new cljs.core.async.t17300(self__.cs,self__.ch,self__.mult,meta17301__$1));
});})(cs))
;

cljs.core.async.t17300.cljs$lang$type = true;

cljs.core.async.t17300.cljs$lang$ctorStr = "cljs.core.async/t17300";

cljs.core.async.t17300.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t17300");
});})(cs))
;

cljs.core.async.__GT_t17300 = ((function (cs){
return (function __GT_t17300(cs__$1,ch__$1,mult__$1,meta17301){
return (new cljs.core.async.t17300(cs__$1,ch__$1,mult__$1,meta17301));
});})(cs))
;

}

return (new cljs.core.async.t17300(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),443,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),436,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-ytkm87/out/cljs/core/async.cljs"], null)));
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
var c__13715__auto___17521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto___17521,cs,m,dchan,dctr,done){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto___17521,cs,m,dchan,dctr,done){
return (function (state_17433){
var state_val_17434 = (state_17433[(1)]);
if((state_val_17434 === (7))){
var inst_17429 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
var statearr_17435_17522 = state_17433__$1;
(statearr_17435_17522[(2)] = inst_17429);

(statearr_17435_17522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (20))){
var inst_17334 = (state_17433[(7)]);
var inst_17344 = cljs.core.first.call(null,inst_17334);
var inst_17345 = cljs.core.nth.call(null,inst_17344,(0),null);
var inst_17346 = cljs.core.nth.call(null,inst_17344,(1),null);
var state_17433__$1 = (function (){var statearr_17436 = state_17433;
(statearr_17436[(8)] = inst_17345);

return statearr_17436;
})();
if(cljs.core.truth_(inst_17346)){
var statearr_17437_17523 = state_17433__$1;
(statearr_17437_17523[(1)] = (22));

} else {
var statearr_17438_17524 = state_17433__$1;
(statearr_17438_17524[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (27))){
var inst_17374 = (state_17433[(9)]);
var inst_17305 = (state_17433[(10)]);
var inst_17381 = (state_17433[(11)]);
var inst_17376 = (state_17433[(12)]);
var inst_17381__$1 = cljs.core._nth.call(null,inst_17374,inst_17376);
var inst_17382 = cljs.core.async.put_BANG_.call(null,inst_17381__$1,inst_17305,done);
var state_17433__$1 = (function (){var statearr_17439 = state_17433;
(statearr_17439[(11)] = inst_17381__$1);

return statearr_17439;
})();
if(cljs.core.truth_(inst_17382)){
var statearr_17440_17525 = state_17433__$1;
(statearr_17440_17525[(1)] = (30));

} else {
var statearr_17441_17526 = state_17433__$1;
(statearr_17441_17526[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (1))){
var state_17433__$1 = state_17433;
var statearr_17442_17527 = state_17433__$1;
(statearr_17442_17527[(2)] = null);

(statearr_17442_17527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (24))){
var inst_17334 = (state_17433[(7)]);
var inst_17351 = (state_17433[(2)]);
var inst_17352 = cljs.core.next.call(null,inst_17334);
var inst_17314 = inst_17352;
var inst_17315 = null;
var inst_17316 = (0);
var inst_17317 = (0);
var state_17433__$1 = (function (){var statearr_17443 = state_17433;
(statearr_17443[(13)] = inst_17314);

(statearr_17443[(14)] = inst_17317);

(statearr_17443[(15)] = inst_17315);

(statearr_17443[(16)] = inst_17316);

(statearr_17443[(17)] = inst_17351);

return statearr_17443;
})();
var statearr_17444_17528 = state_17433__$1;
(statearr_17444_17528[(2)] = null);

(statearr_17444_17528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (39))){
var state_17433__$1 = state_17433;
var statearr_17448_17529 = state_17433__$1;
(statearr_17448_17529[(2)] = null);

(statearr_17448_17529[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (4))){
var inst_17305 = (state_17433[(10)]);
var inst_17305__$1 = (state_17433[(2)]);
var inst_17306 = (inst_17305__$1 == null);
var state_17433__$1 = (function (){var statearr_17449 = state_17433;
(statearr_17449[(10)] = inst_17305__$1);

return statearr_17449;
})();
if(cljs.core.truth_(inst_17306)){
var statearr_17450_17530 = state_17433__$1;
(statearr_17450_17530[(1)] = (5));

} else {
var statearr_17451_17531 = state_17433__$1;
(statearr_17451_17531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (15))){
var inst_17314 = (state_17433[(13)]);
var inst_17317 = (state_17433[(14)]);
var inst_17315 = (state_17433[(15)]);
var inst_17316 = (state_17433[(16)]);
var inst_17330 = (state_17433[(2)]);
var inst_17331 = (inst_17317 + (1));
var tmp17445 = inst_17314;
var tmp17446 = inst_17315;
var tmp17447 = inst_17316;
var inst_17314__$1 = tmp17445;
var inst_17315__$1 = tmp17446;
var inst_17316__$1 = tmp17447;
var inst_17317__$1 = inst_17331;
var state_17433__$1 = (function (){var statearr_17452 = state_17433;
(statearr_17452[(13)] = inst_17314__$1);

(statearr_17452[(14)] = inst_17317__$1);

(statearr_17452[(15)] = inst_17315__$1);

(statearr_17452[(18)] = inst_17330);

(statearr_17452[(16)] = inst_17316__$1);

return statearr_17452;
})();
var statearr_17453_17532 = state_17433__$1;
(statearr_17453_17532[(2)] = null);

(statearr_17453_17532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (21))){
var inst_17355 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
var statearr_17457_17533 = state_17433__$1;
(statearr_17457_17533[(2)] = inst_17355);

(statearr_17457_17533[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (31))){
var inst_17381 = (state_17433[(11)]);
var inst_17385 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_17386 = cljs.core.async.untap_STAR_.call(null,m,inst_17381);
var state_17433__$1 = (function (){var statearr_17458 = state_17433;
(statearr_17458[(19)] = inst_17385);

return statearr_17458;
})();
var statearr_17459_17534 = state_17433__$1;
(statearr_17459_17534[(2)] = inst_17386);

(statearr_17459_17534[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (32))){
var inst_17374 = (state_17433[(9)]);
var inst_17373 = (state_17433[(20)]);
var inst_17376 = (state_17433[(12)]);
var inst_17375 = (state_17433[(21)]);
var inst_17388 = (state_17433[(2)]);
var inst_17389 = (inst_17376 + (1));
var tmp17454 = inst_17374;
var tmp17455 = inst_17373;
var tmp17456 = inst_17375;
var inst_17373__$1 = tmp17455;
var inst_17374__$1 = tmp17454;
var inst_17375__$1 = tmp17456;
var inst_17376__$1 = inst_17389;
var state_17433__$1 = (function (){var statearr_17460 = state_17433;
(statearr_17460[(9)] = inst_17374__$1);

(statearr_17460[(20)] = inst_17373__$1);

(statearr_17460[(22)] = inst_17388);

(statearr_17460[(12)] = inst_17376__$1);

(statearr_17460[(21)] = inst_17375__$1);

return statearr_17460;
})();
var statearr_17461_17535 = state_17433__$1;
(statearr_17461_17535[(2)] = null);

(statearr_17461_17535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (40))){
var inst_17401 = (state_17433[(23)]);
var inst_17405 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_17406 = cljs.core.async.untap_STAR_.call(null,m,inst_17401);
var state_17433__$1 = (function (){var statearr_17462 = state_17433;
(statearr_17462[(24)] = inst_17405);

return statearr_17462;
})();
var statearr_17463_17536 = state_17433__$1;
(statearr_17463_17536[(2)] = inst_17406);

(statearr_17463_17536[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (33))){
var inst_17392 = (state_17433[(25)]);
var inst_17394 = cljs.core.chunked_seq_QMARK_.call(null,inst_17392);
var state_17433__$1 = state_17433;
if(inst_17394){
var statearr_17464_17537 = state_17433__$1;
(statearr_17464_17537[(1)] = (36));

} else {
var statearr_17465_17538 = state_17433__$1;
(statearr_17465_17538[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (13))){
var inst_17324 = (state_17433[(26)]);
var inst_17327 = cljs.core.async.close_BANG_.call(null,inst_17324);
var state_17433__$1 = state_17433;
var statearr_17466_17539 = state_17433__$1;
(statearr_17466_17539[(2)] = inst_17327);

(statearr_17466_17539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (22))){
var inst_17345 = (state_17433[(8)]);
var inst_17348 = cljs.core.async.close_BANG_.call(null,inst_17345);
var state_17433__$1 = state_17433;
var statearr_17467_17540 = state_17433__$1;
(statearr_17467_17540[(2)] = inst_17348);

(statearr_17467_17540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (36))){
var inst_17392 = (state_17433[(25)]);
var inst_17396 = cljs.core.chunk_first.call(null,inst_17392);
var inst_17397 = cljs.core.chunk_rest.call(null,inst_17392);
var inst_17398 = cljs.core.count.call(null,inst_17396);
var inst_17373 = inst_17397;
var inst_17374 = inst_17396;
var inst_17375 = inst_17398;
var inst_17376 = (0);
var state_17433__$1 = (function (){var statearr_17468 = state_17433;
(statearr_17468[(9)] = inst_17374);

(statearr_17468[(20)] = inst_17373);

(statearr_17468[(12)] = inst_17376);

(statearr_17468[(21)] = inst_17375);

return statearr_17468;
})();
var statearr_17469_17541 = state_17433__$1;
(statearr_17469_17541[(2)] = null);

(statearr_17469_17541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (41))){
var inst_17392 = (state_17433[(25)]);
var inst_17408 = (state_17433[(2)]);
var inst_17409 = cljs.core.next.call(null,inst_17392);
var inst_17373 = inst_17409;
var inst_17374 = null;
var inst_17375 = (0);
var inst_17376 = (0);
var state_17433__$1 = (function (){var statearr_17470 = state_17433;
(statearr_17470[(9)] = inst_17374);

(statearr_17470[(20)] = inst_17373);

(statearr_17470[(12)] = inst_17376);

(statearr_17470[(27)] = inst_17408);

(statearr_17470[(21)] = inst_17375);

return statearr_17470;
})();
var statearr_17471_17542 = state_17433__$1;
(statearr_17471_17542[(2)] = null);

(statearr_17471_17542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (43))){
var state_17433__$1 = state_17433;
var statearr_17472_17543 = state_17433__$1;
(statearr_17472_17543[(2)] = null);

(statearr_17472_17543[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (29))){
var inst_17417 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
var statearr_17473_17544 = state_17433__$1;
(statearr_17473_17544[(2)] = inst_17417);

(statearr_17473_17544[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (44))){
var inst_17426 = (state_17433[(2)]);
var state_17433__$1 = (function (){var statearr_17474 = state_17433;
(statearr_17474[(28)] = inst_17426);

return statearr_17474;
})();
var statearr_17475_17545 = state_17433__$1;
(statearr_17475_17545[(2)] = null);

(statearr_17475_17545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (6))){
var inst_17365 = (state_17433[(29)]);
var inst_17364 = cljs.core.deref.call(null,cs);
var inst_17365__$1 = cljs.core.keys.call(null,inst_17364);
var inst_17366 = cljs.core.count.call(null,inst_17365__$1);
var inst_17367 = cljs.core.reset_BANG_.call(null,dctr,inst_17366);
var inst_17372 = cljs.core.seq.call(null,inst_17365__$1);
var inst_17373 = inst_17372;
var inst_17374 = null;
var inst_17375 = (0);
var inst_17376 = (0);
var state_17433__$1 = (function (){var statearr_17476 = state_17433;
(statearr_17476[(9)] = inst_17374);

(statearr_17476[(20)] = inst_17373);

(statearr_17476[(12)] = inst_17376);

(statearr_17476[(30)] = inst_17367);

(statearr_17476[(21)] = inst_17375);

(statearr_17476[(29)] = inst_17365__$1);

return statearr_17476;
})();
var statearr_17477_17546 = state_17433__$1;
(statearr_17477_17546[(2)] = null);

(statearr_17477_17546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (28))){
var inst_17373 = (state_17433[(20)]);
var inst_17392 = (state_17433[(25)]);
var inst_17392__$1 = cljs.core.seq.call(null,inst_17373);
var state_17433__$1 = (function (){var statearr_17478 = state_17433;
(statearr_17478[(25)] = inst_17392__$1);

return statearr_17478;
})();
if(inst_17392__$1){
var statearr_17479_17547 = state_17433__$1;
(statearr_17479_17547[(1)] = (33));

} else {
var statearr_17480_17548 = state_17433__$1;
(statearr_17480_17548[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (25))){
var inst_17376 = (state_17433[(12)]);
var inst_17375 = (state_17433[(21)]);
var inst_17378 = (inst_17376 < inst_17375);
var inst_17379 = inst_17378;
var state_17433__$1 = state_17433;
if(cljs.core.truth_(inst_17379)){
var statearr_17481_17549 = state_17433__$1;
(statearr_17481_17549[(1)] = (27));

} else {
var statearr_17482_17550 = state_17433__$1;
(statearr_17482_17550[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (34))){
var state_17433__$1 = state_17433;
var statearr_17483_17551 = state_17433__$1;
(statearr_17483_17551[(2)] = null);

(statearr_17483_17551[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (17))){
var state_17433__$1 = state_17433;
var statearr_17484_17552 = state_17433__$1;
(statearr_17484_17552[(2)] = null);

(statearr_17484_17552[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (3))){
var inst_17431 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17433__$1,inst_17431);
} else {
if((state_val_17434 === (12))){
var inst_17360 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
var statearr_17485_17553 = state_17433__$1;
(statearr_17485_17553[(2)] = inst_17360);

(statearr_17485_17553[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (2))){
var state_17433__$1 = state_17433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17433__$1,(4),ch);
} else {
if((state_val_17434 === (23))){
var state_17433__$1 = state_17433;
var statearr_17486_17554 = state_17433__$1;
(statearr_17486_17554[(2)] = null);

(statearr_17486_17554[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (35))){
var inst_17415 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
var statearr_17487_17555 = state_17433__$1;
(statearr_17487_17555[(2)] = inst_17415);

(statearr_17487_17555[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (19))){
var inst_17334 = (state_17433[(7)]);
var inst_17338 = cljs.core.chunk_first.call(null,inst_17334);
var inst_17339 = cljs.core.chunk_rest.call(null,inst_17334);
var inst_17340 = cljs.core.count.call(null,inst_17338);
var inst_17314 = inst_17339;
var inst_17315 = inst_17338;
var inst_17316 = inst_17340;
var inst_17317 = (0);
var state_17433__$1 = (function (){var statearr_17488 = state_17433;
(statearr_17488[(13)] = inst_17314);

(statearr_17488[(14)] = inst_17317);

(statearr_17488[(15)] = inst_17315);

(statearr_17488[(16)] = inst_17316);

return statearr_17488;
})();
var statearr_17489_17556 = state_17433__$1;
(statearr_17489_17556[(2)] = null);

(statearr_17489_17556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (11))){
var inst_17314 = (state_17433[(13)]);
var inst_17334 = (state_17433[(7)]);
var inst_17334__$1 = cljs.core.seq.call(null,inst_17314);
var state_17433__$1 = (function (){var statearr_17490 = state_17433;
(statearr_17490[(7)] = inst_17334__$1);

return statearr_17490;
})();
if(inst_17334__$1){
var statearr_17491_17557 = state_17433__$1;
(statearr_17491_17557[(1)] = (16));

} else {
var statearr_17492_17558 = state_17433__$1;
(statearr_17492_17558[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (9))){
var inst_17362 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
var statearr_17493_17559 = state_17433__$1;
(statearr_17493_17559[(2)] = inst_17362);

(statearr_17493_17559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (5))){
var inst_17312 = cljs.core.deref.call(null,cs);
var inst_17313 = cljs.core.seq.call(null,inst_17312);
var inst_17314 = inst_17313;
var inst_17315 = null;
var inst_17316 = (0);
var inst_17317 = (0);
var state_17433__$1 = (function (){var statearr_17494 = state_17433;
(statearr_17494[(13)] = inst_17314);

(statearr_17494[(14)] = inst_17317);

(statearr_17494[(15)] = inst_17315);

(statearr_17494[(16)] = inst_17316);

return statearr_17494;
})();
var statearr_17495_17560 = state_17433__$1;
(statearr_17495_17560[(2)] = null);

(statearr_17495_17560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (14))){
var state_17433__$1 = state_17433;
var statearr_17496_17561 = state_17433__$1;
(statearr_17496_17561[(2)] = null);

(statearr_17496_17561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (45))){
var inst_17423 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
var statearr_17497_17562 = state_17433__$1;
(statearr_17497_17562[(2)] = inst_17423);

(statearr_17497_17562[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (26))){
var inst_17365 = (state_17433[(29)]);
var inst_17419 = (state_17433[(2)]);
var inst_17420 = cljs.core.seq.call(null,inst_17365);
var state_17433__$1 = (function (){var statearr_17498 = state_17433;
(statearr_17498[(31)] = inst_17419);

return statearr_17498;
})();
if(inst_17420){
var statearr_17499_17563 = state_17433__$1;
(statearr_17499_17563[(1)] = (42));

} else {
var statearr_17500_17564 = state_17433__$1;
(statearr_17500_17564[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (16))){
var inst_17334 = (state_17433[(7)]);
var inst_17336 = cljs.core.chunked_seq_QMARK_.call(null,inst_17334);
var state_17433__$1 = state_17433;
if(inst_17336){
var statearr_17501_17565 = state_17433__$1;
(statearr_17501_17565[(1)] = (19));

} else {
var statearr_17502_17566 = state_17433__$1;
(statearr_17502_17566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (38))){
var inst_17412 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
var statearr_17503_17567 = state_17433__$1;
(statearr_17503_17567[(2)] = inst_17412);

(statearr_17503_17567[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (30))){
var state_17433__$1 = state_17433;
var statearr_17504_17568 = state_17433__$1;
(statearr_17504_17568[(2)] = null);

(statearr_17504_17568[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (10))){
var inst_17317 = (state_17433[(14)]);
var inst_17315 = (state_17433[(15)]);
var inst_17323 = cljs.core._nth.call(null,inst_17315,inst_17317);
var inst_17324 = cljs.core.nth.call(null,inst_17323,(0),null);
var inst_17325 = cljs.core.nth.call(null,inst_17323,(1),null);
var state_17433__$1 = (function (){var statearr_17505 = state_17433;
(statearr_17505[(26)] = inst_17324);

return statearr_17505;
})();
if(cljs.core.truth_(inst_17325)){
var statearr_17506_17569 = state_17433__$1;
(statearr_17506_17569[(1)] = (13));

} else {
var statearr_17507_17570 = state_17433__$1;
(statearr_17507_17570[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (18))){
var inst_17358 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
var statearr_17508_17571 = state_17433__$1;
(statearr_17508_17571[(2)] = inst_17358);

(statearr_17508_17571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (42))){
var state_17433__$1 = state_17433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17433__$1,(45),dchan);
} else {
if((state_val_17434 === (37))){
var inst_17305 = (state_17433[(10)]);
var inst_17392 = (state_17433[(25)]);
var inst_17401 = (state_17433[(23)]);
var inst_17401__$1 = cljs.core.first.call(null,inst_17392);
var inst_17402 = cljs.core.async.put_BANG_.call(null,inst_17401__$1,inst_17305,done);
var state_17433__$1 = (function (){var statearr_17509 = state_17433;
(statearr_17509[(23)] = inst_17401__$1);

return statearr_17509;
})();
if(cljs.core.truth_(inst_17402)){
var statearr_17510_17572 = state_17433__$1;
(statearr_17510_17572[(1)] = (39));

} else {
var statearr_17511_17573 = state_17433__$1;
(statearr_17511_17573[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (8))){
var inst_17317 = (state_17433[(14)]);
var inst_17316 = (state_17433[(16)]);
var inst_17319 = (inst_17317 < inst_17316);
var inst_17320 = inst_17319;
var state_17433__$1 = state_17433;
if(cljs.core.truth_(inst_17320)){
var statearr_17512_17574 = state_17433__$1;
(statearr_17512_17574[(1)] = (10));

} else {
var statearr_17513_17575 = state_17433__$1;
(statearr_17513_17575[(1)] = (11));

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
});})(c__13715__auto___17521,cs,m,dchan,dctr,done))
;
return ((function (switch__13650__auto__,c__13715__auto___17521,cs,m,dchan,dctr,done){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_17517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17517[(0)] = state_machine__13651__auto__);

(statearr_17517[(1)] = (1));

return statearr_17517;
});
var state_machine__13651__auto____1 = (function (state_17433){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_17433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e17518){if((e17518 instanceof Object)){
var ex__13654__auto__ = e17518;
var statearr_17519_17576 = state_17433;
(statearr_17519_17576[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17577 = state_17433;
state_17433 = G__17577;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_17433){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_17433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto___17521,cs,m,dchan,dctr,done))
})();
var state__13717__auto__ = (function (){var statearr_17520 = f__13716__auto__.call(null);
(statearr_17520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto___17521);

return statearr_17520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto___17521,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj17579 = {};
return obj17579;
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
if(typeof cljs.core.async.t17699 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17699 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17700){
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
this.meta17700 = meta17700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17699.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t17699.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17699.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17699.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17699.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17699.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t17699.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17699.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17701){
var self__ = this;
var _17701__$1 = this;
return self__.meta17700;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17701,meta17700__$1){
var self__ = this;
var _17701__$1 = this;
return (new cljs.core.async.t17699(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17700__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17699.cljs$lang$type = true;

cljs.core.async.t17699.cljs$lang$ctorStr = "cljs.core.async/t17699";

cljs.core.async.t17699.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t17699");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t17699 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17699(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17700){
return (new cljs.core.async.t17699(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17700));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t17699(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),545,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),534,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-ytkm87/out/cljs/core/async.cljs"], null)));
})()
;
var c__13715__auto___17818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto___17818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto___17818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17771){
var state_val_17772 = (state_17771[(1)]);
if((state_val_17772 === (7))){
var inst_17715 = (state_17771[(7)]);
var inst_17720 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17715);
var state_17771__$1 = state_17771;
var statearr_17773_17819 = state_17771__$1;
(statearr_17773_17819[(2)] = inst_17720);

(statearr_17773_17819[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (20))){
var inst_17730 = (state_17771[(8)]);
var state_17771__$1 = state_17771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17771__$1,(23),out,inst_17730);
} else {
if((state_val_17772 === (1))){
var inst_17705 = (state_17771[(9)]);
var inst_17705__$1 = calc_state.call(null);
var inst_17706 = cljs.core.seq_QMARK_.call(null,inst_17705__$1);
var state_17771__$1 = (function (){var statearr_17774 = state_17771;
(statearr_17774[(9)] = inst_17705__$1);

return statearr_17774;
})();
if(inst_17706){
var statearr_17775_17820 = state_17771__$1;
(statearr_17775_17820[(1)] = (2));

} else {
var statearr_17776_17821 = state_17771__$1;
(statearr_17776_17821[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (24))){
var inst_17723 = (state_17771[(10)]);
var inst_17715 = inst_17723;
var state_17771__$1 = (function (){var statearr_17777 = state_17771;
(statearr_17777[(7)] = inst_17715);

return statearr_17777;
})();
var statearr_17778_17822 = state_17771__$1;
(statearr_17778_17822[(2)] = null);

(statearr_17778_17822[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (4))){
var inst_17705 = (state_17771[(9)]);
var inst_17711 = (state_17771[(2)]);
var inst_17712 = cljs.core.get.call(null,inst_17711,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17713 = cljs.core.get.call(null,inst_17711,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17714 = cljs.core.get.call(null,inst_17711,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17715 = inst_17705;
var state_17771__$1 = (function (){var statearr_17779 = state_17771;
(statearr_17779[(11)] = inst_17714);

(statearr_17779[(12)] = inst_17712);

(statearr_17779[(7)] = inst_17715);

(statearr_17779[(13)] = inst_17713);

return statearr_17779;
})();
var statearr_17780_17823 = state_17771__$1;
(statearr_17780_17823[(2)] = null);

(statearr_17780_17823[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (15))){
var state_17771__$1 = state_17771;
var statearr_17781_17824 = state_17771__$1;
(statearr_17781_17824[(2)] = null);

(statearr_17781_17824[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (21))){
var inst_17723 = (state_17771[(10)]);
var inst_17715 = inst_17723;
var state_17771__$1 = (function (){var statearr_17782 = state_17771;
(statearr_17782[(7)] = inst_17715);

return statearr_17782;
})();
var statearr_17783_17825 = state_17771__$1;
(statearr_17783_17825[(2)] = null);

(statearr_17783_17825[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (13))){
var inst_17767 = (state_17771[(2)]);
var state_17771__$1 = state_17771;
var statearr_17784_17826 = state_17771__$1;
(statearr_17784_17826[(2)] = inst_17767);

(statearr_17784_17826[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (22))){
var inst_17765 = (state_17771[(2)]);
var state_17771__$1 = state_17771;
var statearr_17785_17827 = state_17771__$1;
(statearr_17785_17827[(2)] = inst_17765);

(statearr_17785_17827[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (6))){
var inst_17769 = (state_17771[(2)]);
var state_17771__$1 = state_17771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17771__$1,inst_17769);
} else {
if((state_val_17772 === (25))){
var state_17771__$1 = state_17771;
var statearr_17786_17828 = state_17771__$1;
(statearr_17786_17828[(2)] = null);

(statearr_17786_17828[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (17))){
var inst_17745 = (state_17771[(14)]);
var state_17771__$1 = state_17771;
var statearr_17787_17829 = state_17771__$1;
(statearr_17787_17829[(2)] = inst_17745);

(statearr_17787_17829[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (3))){
var inst_17705 = (state_17771[(9)]);
var state_17771__$1 = state_17771;
var statearr_17788_17830 = state_17771__$1;
(statearr_17788_17830[(2)] = inst_17705);

(statearr_17788_17830[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (12))){
var inst_17745 = (state_17771[(14)]);
var inst_17726 = (state_17771[(15)]);
var inst_17731 = (state_17771[(16)]);
var inst_17745__$1 = inst_17726.call(null,inst_17731);
var state_17771__$1 = (function (){var statearr_17789 = state_17771;
(statearr_17789[(14)] = inst_17745__$1);

return statearr_17789;
})();
if(cljs.core.truth_(inst_17745__$1)){
var statearr_17790_17831 = state_17771__$1;
(statearr_17790_17831[(1)] = (17));

} else {
var statearr_17791_17832 = state_17771__$1;
(statearr_17791_17832[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (2))){
var inst_17705 = (state_17771[(9)]);
var inst_17708 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17705);
var state_17771__$1 = state_17771;
var statearr_17792_17833 = state_17771__$1;
(statearr_17792_17833[(2)] = inst_17708);

(statearr_17792_17833[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (23))){
var inst_17756 = (state_17771[(2)]);
var state_17771__$1 = state_17771;
if(cljs.core.truth_(inst_17756)){
var statearr_17793_17834 = state_17771__$1;
(statearr_17793_17834[(1)] = (24));

} else {
var statearr_17794_17835 = state_17771__$1;
(statearr_17794_17835[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (19))){
var inst_17753 = (state_17771[(2)]);
var state_17771__$1 = state_17771;
if(cljs.core.truth_(inst_17753)){
var statearr_17795_17836 = state_17771__$1;
(statearr_17795_17836[(1)] = (20));

} else {
var statearr_17796_17837 = state_17771__$1;
(statearr_17796_17837[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (11))){
var inst_17730 = (state_17771[(8)]);
var inst_17736 = (inst_17730 == null);
var state_17771__$1 = state_17771;
if(cljs.core.truth_(inst_17736)){
var statearr_17797_17838 = state_17771__$1;
(statearr_17797_17838[(1)] = (14));

} else {
var statearr_17798_17839 = state_17771__$1;
(statearr_17798_17839[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (9))){
var inst_17723 = (state_17771[(10)]);
var inst_17723__$1 = (state_17771[(2)]);
var inst_17724 = cljs.core.get.call(null,inst_17723__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17725 = cljs.core.get.call(null,inst_17723__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17726 = cljs.core.get.call(null,inst_17723__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_17771__$1 = (function (){var statearr_17799 = state_17771;
(statearr_17799[(15)] = inst_17726);

(statearr_17799[(17)] = inst_17725);

(statearr_17799[(10)] = inst_17723__$1);

return statearr_17799;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17771__$1,(10),inst_17724);
} else {
if((state_val_17772 === (5))){
var inst_17715 = (state_17771[(7)]);
var inst_17718 = cljs.core.seq_QMARK_.call(null,inst_17715);
var state_17771__$1 = state_17771;
if(inst_17718){
var statearr_17800_17840 = state_17771__$1;
(statearr_17800_17840[(1)] = (7));

} else {
var statearr_17801_17841 = state_17771__$1;
(statearr_17801_17841[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (14))){
var inst_17731 = (state_17771[(16)]);
var inst_17738 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17731);
var state_17771__$1 = state_17771;
var statearr_17802_17842 = state_17771__$1;
(statearr_17802_17842[(2)] = inst_17738);

(statearr_17802_17842[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (26))){
var inst_17761 = (state_17771[(2)]);
var state_17771__$1 = state_17771;
var statearr_17803_17843 = state_17771__$1;
(statearr_17803_17843[(2)] = inst_17761);

(statearr_17803_17843[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (16))){
var inst_17741 = (state_17771[(2)]);
var inst_17742 = calc_state.call(null);
var inst_17715 = inst_17742;
var state_17771__$1 = (function (){var statearr_17804 = state_17771;
(statearr_17804[(18)] = inst_17741);

(statearr_17804[(7)] = inst_17715);

return statearr_17804;
})();
var statearr_17805_17844 = state_17771__$1;
(statearr_17805_17844[(2)] = null);

(statearr_17805_17844[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (10))){
var inst_17730 = (state_17771[(8)]);
var inst_17731 = (state_17771[(16)]);
var inst_17729 = (state_17771[(2)]);
var inst_17730__$1 = cljs.core.nth.call(null,inst_17729,(0),null);
var inst_17731__$1 = cljs.core.nth.call(null,inst_17729,(1),null);
var inst_17732 = (inst_17730__$1 == null);
var inst_17733 = cljs.core._EQ_.call(null,inst_17731__$1,change);
var inst_17734 = (inst_17732) || (inst_17733);
var state_17771__$1 = (function (){var statearr_17806 = state_17771;
(statearr_17806[(8)] = inst_17730__$1);

(statearr_17806[(16)] = inst_17731__$1);

return statearr_17806;
})();
if(cljs.core.truth_(inst_17734)){
var statearr_17807_17845 = state_17771__$1;
(statearr_17807_17845[(1)] = (11));

} else {
var statearr_17808_17846 = state_17771__$1;
(statearr_17808_17846[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (18))){
var inst_17726 = (state_17771[(15)]);
var inst_17725 = (state_17771[(17)]);
var inst_17731 = (state_17771[(16)]);
var inst_17748 = cljs.core.empty_QMARK_.call(null,inst_17726);
var inst_17749 = inst_17725.call(null,inst_17731);
var inst_17750 = cljs.core.not.call(null,inst_17749);
var inst_17751 = (inst_17748) && (inst_17750);
var state_17771__$1 = state_17771;
var statearr_17809_17847 = state_17771__$1;
(statearr_17809_17847[(2)] = inst_17751);

(statearr_17809_17847[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17772 === (8))){
var inst_17715 = (state_17771[(7)]);
var state_17771__$1 = state_17771;
var statearr_17810_17848 = state_17771__$1;
(statearr_17810_17848[(2)] = inst_17715);

(statearr_17810_17848[(1)] = (9));


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
});})(c__13715__auto___17818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13650__auto__,c__13715__auto___17818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_17814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17814[(0)] = state_machine__13651__auto__);

(statearr_17814[(1)] = (1));

return statearr_17814;
});
var state_machine__13651__auto____1 = (function (state_17771){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_17771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e17815){if((e17815 instanceof Object)){
var ex__13654__auto__ = e17815;
var statearr_17816_17849 = state_17771;
(statearr_17816_17849[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17850 = state_17771;
state_17771 = G__17850;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_17771){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_17771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto___17818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13717__auto__ = (function (){var statearr_17817 = f__13716__auto__.call(null);
(statearr_17817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto___17818);

return statearr_17817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto___17818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj17852 = {};
return obj17852;
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
return (function (p1__17853_SHARP_){
if(cljs.core.truth_(p1__17853_SHARP_.call(null,topic))){
return p1__17853_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17853_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3553__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t17968 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17968 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17969){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17969 = meta17969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17968.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t17968.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t17968.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t17968.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t17968.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t17968.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17968.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t17968.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17970){
var self__ = this;
var _17970__$1 = this;
return self__.meta17969;
});})(mults,ensure_mult))
;

cljs.core.async.t17968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17970,meta17969__$1){
var self__ = this;
var _17970__$1 = this;
return (new cljs.core.async.t17968(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17969__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t17968.cljs$lang$type = true;

cljs.core.async.t17968.cljs$lang$ctorStr = "cljs.core.async/t17968";

cljs.core.async.t17968.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t17968");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t17968 = ((function (mults,ensure_mult){
return (function __GT_t17968(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17969){
return (new cljs.core.async.t17968(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17969));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t17968(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),638,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),626,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-ytkm87/out/cljs/core/async.cljs"], null)));
})()
;
var c__13715__auto___18082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto___18082,mults,ensure_mult,p){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto___18082,mults,ensure_mult,p){
return (function (state_18038){
var state_val_18039 = (state_18038[(1)]);
if((state_val_18039 === (7))){
var inst_18034 = (state_18038[(2)]);
var state_18038__$1 = state_18038;
var statearr_18040_18083 = state_18038__$1;
(statearr_18040_18083[(2)] = inst_18034);

(statearr_18040_18083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (20))){
var state_18038__$1 = state_18038;
var statearr_18041_18084 = state_18038__$1;
(statearr_18041_18084[(2)] = null);

(statearr_18041_18084[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (1))){
var state_18038__$1 = state_18038;
var statearr_18042_18085 = state_18038__$1;
(statearr_18042_18085[(2)] = null);

(statearr_18042_18085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (4))){
var inst_17973 = (state_18038[(7)]);
var inst_17973__$1 = (state_18038[(2)]);
var inst_17974 = (inst_17973__$1 == null);
var state_18038__$1 = (function (){var statearr_18043 = state_18038;
(statearr_18043[(7)] = inst_17973__$1);

return statearr_18043;
})();
if(cljs.core.truth_(inst_17974)){
var statearr_18044_18086 = state_18038__$1;
(statearr_18044_18086[(1)] = (5));

} else {
var statearr_18045_18087 = state_18038__$1;
(statearr_18045_18087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (15))){
var inst_18015 = (state_18038[(2)]);
var state_18038__$1 = state_18038;
var statearr_18046_18088 = state_18038__$1;
(statearr_18046_18088[(2)] = inst_18015);

(statearr_18046_18088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (21))){
var inst_18021 = (state_18038[(8)]);
var inst_18029 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18021);
var state_18038__$1 = state_18038;
var statearr_18047_18089 = state_18038__$1;
(statearr_18047_18089[(2)] = inst_18029);

(statearr_18047_18089[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (13))){
var inst_17997 = (state_18038[(9)]);
var inst_17999 = cljs.core.chunked_seq_QMARK_.call(null,inst_17997);
var state_18038__$1 = state_18038;
if(inst_17999){
var statearr_18048_18090 = state_18038__$1;
(statearr_18048_18090[(1)] = (16));

} else {
var statearr_18049_18091 = state_18038__$1;
(statearr_18049_18091[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (22))){
var inst_18031 = (state_18038[(2)]);
var state_18038__$1 = (function (){var statearr_18050 = state_18038;
(statearr_18050[(10)] = inst_18031);

return statearr_18050;
})();
var statearr_18051_18092 = state_18038__$1;
(statearr_18051_18092[(2)] = null);

(statearr_18051_18092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (6))){
var inst_17973 = (state_18038[(7)]);
var inst_18021 = (state_18038[(8)]);
var inst_18021__$1 = topic_fn.call(null,inst_17973);
var inst_18022 = cljs.core.deref.call(null,mults);
var inst_18023 = cljs.core.get.call(null,inst_18022,inst_18021__$1);
var inst_18024 = cljs.core.async.muxch_STAR_.call(null,inst_18023);
var state_18038__$1 = (function (){var statearr_18052 = state_18038;
(statearr_18052[(8)] = inst_18021__$1);

return statearr_18052;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18038__$1,(19),inst_18024,inst_17973);
} else {
if((state_val_18039 === (17))){
var inst_17997 = (state_18038[(9)]);
var inst_18006 = cljs.core.first.call(null,inst_17997);
var inst_18007 = cljs.core.async.muxch_STAR_.call(null,inst_18006);
var inst_18008 = cljs.core.async.close_BANG_.call(null,inst_18007);
var inst_18009 = cljs.core.next.call(null,inst_17997);
var inst_17983 = inst_18009;
var inst_17984 = null;
var inst_17985 = (0);
var inst_17986 = (0);
var state_18038__$1 = (function (){var statearr_18053 = state_18038;
(statearr_18053[(11)] = inst_18008);

(statearr_18053[(12)] = inst_17984);

(statearr_18053[(13)] = inst_17986);

(statearr_18053[(14)] = inst_17983);

(statearr_18053[(15)] = inst_17985);

return statearr_18053;
})();
var statearr_18054_18093 = state_18038__$1;
(statearr_18054_18093[(2)] = null);

(statearr_18054_18093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (3))){
var inst_18036 = (state_18038[(2)]);
var state_18038__$1 = state_18038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18038__$1,inst_18036);
} else {
if((state_val_18039 === (12))){
var inst_18017 = (state_18038[(2)]);
var state_18038__$1 = state_18038;
var statearr_18055_18094 = state_18038__$1;
(statearr_18055_18094[(2)] = inst_18017);

(statearr_18055_18094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (2))){
var state_18038__$1 = state_18038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18038__$1,(4),ch);
} else {
if((state_val_18039 === (19))){
var inst_18026 = (state_18038[(2)]);
var state_18038__$1 = state_18038;
if(cljs.core.truth_(inst_18026)){
var statearr_18056_18095 = state_18038__$1;
(statearr_18056_18095[(1)] = (20));

} else {
var statearr_18057_18096 = state_18038__$1;
(statearr_18057_18096[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (11))){
var inst_17997 = (state_18038[(9)]);
var inst_17983 = (state_18038[(14)]);
var inst_17997__$1 = cljs.core.seq.call(null,inst_17983);
var state_18038__$1 = (function (){var statearr_18058 = state_18038;
(statearr_18058[(9)] = inst_17997__$1);

return statearr_18058;
})();
if(inst_17997__$1){
var statearr_18059_18097 = state_18038__$1;
(statearr_18059_18097[(1)] = (13));

} else {
var statearr_18060_18098 = state_18038__$1;
(statearr_18060_18098[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (9))){
var inst_18019 = (state_18038[(2)]);
var state_18038__$1 = state_18038;
var statearr_18061_18099 = state_18038__$1;
(statearr_18061_18099[(2)] = inst_18019);

(statearr_18061_18099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (5))){
var inst_17980 = cljs.core.deref.call(null,mults);
var inst_17981 = cljs.core.vals.call(null,inst_17980);
var inst_17982 = cljs.core.seq.call(null,inst_17981);
var inst_17983 = inst_17982;
var inst_17984 = null;
var inst_17985 = (0);
var inst_17986 = (0);
var state_18038__$1 = (function (){var statearr_18062 = state_18038;
(statearr_18062[(12)] = inst_17984);

(statearr_18062[(13)] = inst_17986);

(statearr_18062[(14)] = inst_17983);

(statearr_18062[(15)] = inst_17985);

return statearr_18062;
})();
var statearr_18063_18100 = state_18038__$1;
(statearr_18063_18100[(2)] = null);

(statearr_18063_18100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (14))){
var state_18038__$1 = state_18038;
var statearr_18067_18101 = state_18038__$1;
(statearr_18067_18101[(2)] = null);

(statearr_18067_18101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (16))){
var inst_17997 = (state_18038[(9)]);
var inst_18001 = cljs.core.chunk_first.call(null,inst_17997);
var inst_18002 = cljs.core.chunk_rest.call(null,inst_17997);
var inst_18003 = cljs.core.count.call(null,inst_18001);
var inst_17983 = inst_18002;
var inst_17984 = inst_18001;
var inst_17985 = inst_18003;
var inst_17986 = (0);
var state_18038__$1 = (function (){var statearr_18068 = state_18038;
(statearr_18068[(12)] = inst_17984);

(statearr_18068[(13)] = inst_17986);

(statearr_18068[(14)] = inst_17983);

(statearr_18068[(15)] = inst_17985);

return statearr_18068;
})();
var statearr_18069_18102 = state_18038__$1;
(statearr_18069_18102[(2)] = null);

(statearr_18069_18102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (10))){
var inst_17984 = (state_18038[(12)]);
var inst_17986 = (state_18038[(13)]);
var inst_17983 = (state_18038[(14)]);
var inst_17985 = (state_18038[(15)]);
var inst_17991 = cljs.core._nth.call(null,inst_17984,inst_17986);
var inst_17992 = cljs.core.async.muxch_STAR_.call(null,inst_17991);
var inst_17993 = cljs.core.async.close_BANG_.call(null,inst_17992);
var inst_17994 = (inst_17986 + (1));
var tmp18064 = inst_17984;
var tmp18065 = inst_17983;
var tmp18066 = inst_17985;
var inst_17983__$1 = tmp18065;
var inst_17984__$1 = tmp18064;
var inst_17985__$1 = tmp18066;
var inst_17986__$1 = inst_17994;
var state_18038__$1 = (function (){var statearr_18070 = state_18038;
(statearr_18070[(12)] = inst_17984__$1);

(statearr_18070[(13)] = inst_17986__$1);

(statearr_18070[(16)] = inst_17993);

(statearr_18070[(14)] = inst_17983__$1);

(statearr_18070[(15)] = inst_17985__$1);

return statearr_18070;
})();
var statearr_18071_18103 = state_18038__$1;
(statearr_18071_18103[(2)] = null);

(statearr_18071_18103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (18))){
var inst_18012 = (state_18038[(2)]);
var state_18038__$1 = state_18038;
var statearr_18072_18104 = state_18038__$1;
(statearr_18072_18104[(2)] = inst_18012);

(statearr_18072_18104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18039 === (8))){
var inst_17986 = (state_18038[(13)]);
var inst_17985 = (state_18038[(15)]);
var inst_17988 = (inst_17986 < inst_17985);
var inst_17989 = inst_17988;
var state_18038__$1 = state_18038;
if(cljs.core.truth_(inst_17989)){
var statearr_18073_18105 = state_18038__$1;
(statearr_18073_18105[(1)] = (10));

} else {
var statearr_18074_18106 = state_18038__$1;
(statearr_18074_18106[(1)] = (11));

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
});})(c__13715__auto___18082,mults,ensure_mult,p))
;
return ((function (switch__13650__auto__,c__13715__auto___18082,mults,ensure_mult,p){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_18078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18078[(0)] = state_machine__13651__auto__);

(statearr_18078[(1)] = (1));

return statearr_18078;
});
var state_machine__13651__auto____1 = (function (state_18038){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_18038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e18079){if((e18079 instanceof Object)){
var ex__13654__auto__ = e18079;
var statearr_18080_18107 = state_18038;
(statearr_18080_18107[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18108 = state_18038;
state_18038 = G__18108;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_18038){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_18038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto___18082,mults,ensure_mult,p))
})();
var state__13717__auto__ = (function (){var statearr_18081 = f__13716__auto__.call(null);
(statearr_18081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto___18082);

return statearr_18081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto___18082,mults,ensure_mult,p))
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
var c__13715__auto___18245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto___18245,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto___18245,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18215){
var state_val_18216 = (state_18215[(1)]);
if((state_val_18216 === (7))){
var state_18215__$1 = state_18215;
var statearr_18217_18246 = state_18215__$1;
(statearr_18217_18246[(2)] = null);

(statearr_18217_18246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (1))){
var state_18215__$1 = state_18215;
var statearr_18218_18247 = state_18215__$1;
(statearr_18218_18247[(2)] = null);

(statearr_18218_18247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (4))){
var inst_18179 = (state_18215[(7)]);
var inst_18181 = (inst_18179 < cnt);
var state_18215__$1 = state_18215;
if(cljs.core.truth_(inst_18181)){
var statearr_18219_18248 = state_18215__$1;
(statearr_18219_18248[(1)] = (6));

} else {
var statearr_18220_18249 = state_18215__$1;
(statearr_18220_18249[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (15))){
var inst_18211 = (state_18215[(2)]);
var state_18215__$1 = state_18215;
var statearr_18221_18250 = state_18215__$1;
(statearr_18221_18250[(2)] = inst_18211);

(statearr_18221_18250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (13))){
var inst_18204 = cljs.core.async.close_BANG_.call(null,out);
var state_18215__$1 = state_18215;
var statearr_18222_18251 = state_18215__$1;
(statearr_18222_18251[(2)] = inst_18204);

(statearr_18222_18251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (6))){
var state_18215__$1 = state_18215;
var statearr_18223_18252 = state_18215__$1;
(statearr_18223_18252[(2)] = null);

(statearr_18223_18252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (3))){
var inst_18213 = (state_18215[(2)]);
var state_18215__$1 = state_18215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18215__$1,inst_18213);
} else {
if((state_val_18216 === (12))){
var inst_18201 = (state_18215[(8)]);
var inst_18201__$1 = (state_18215[(2)]);
var inst_18202 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18201__$1);
var state_18215__$1 = (function (){var statearr_18224 = state_18215;
(statearr_18224[(8)] = inst_18201__$1);

return statearr_18224;
})();
if(cljs.core.truth_(inst_18202)){
var statearr_18225_18253 = state_18215__$1;
(statearr_18225_18253[(1)] = (13));

} else {
var statearr_18226_18254 = state_18215__$1;
(statearr_18226_18254[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (2))){
var inst_18178 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18179 = (0);
var state_18215__$1 = (function (){var statearr_18227 = state_18215;
(statearr_18227[(9)] = inst_18178);

(statearr_18227[(7)] = inst_18179);

return statearr_18227;
})();
var statearr_18228_18255 = state_18215__$1;
(statearr_18228_18255[(2)] = null);

(statearr_18228_18255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (11))){
var inst_18179 = (state_18215[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18215,(10),Object,null,(9));
var inst_18188 = chs__$1.call(null,inst_18179);
var inst_18189 = done.call(null,inst_18179);
var inst_18190 = cljs.core.async.take_BANG_.call(null,inst_18188,inst_18189);
var state_18215__$1 = state_18215;
var statearr_18229_18256 = state_18215__$1;
(statearr_18229_18256[(2)] = inst_18190);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18215__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (9))){
var inst_18179 = (state_18215[(7)]);
var inst_18192 = (state_18215[(2)]);
var inst_18193 = (inst_18179 + (1));
var inst_18179__$1 = inst_18193;
var state_18215__$1 = (function (){var statearr_18230 = state_18215;
(statearr_18230[(7)] = inst_18179__$1);

(statearr_18230[(10)] = inst_18192);

return statearr_18230;
})();
var statearr_18231_18257 = state_18215__$1;
(statearr_18231_18257[(2)] = null);

(statearr_18231_18257[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (5))){
var inst_18199 = (state_18215[(2)]);
var state_18215__$1 = (function (){var statearr_18232 = state_18215;
(statearr_18232[(11)] = inst_18199);

return statearr_18232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18215__$1,(12),dchan);
} else {
if((state_val_18216 === (14))){
var inst_18201 = (state_18215[(8)]);
var inst_18206 = cljs.core.apply.call(null,f,inst_18201);
var state_18215__$1 = state_18215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18215__$1,(16),out,inst_18206);
} else {
if((state_val_18216 === (16))){
var inst_18208 = (state_18215[(2)]);
var state_18215__$1 = (function (){var statearr_18233 = state_18215;
(statearr_18233[(12)] = inst_18208);

return statearr_18233;
})();
var statearr_18234_18258 = state_18215__$1;
(statearr_18234_18258[(2)] = null);

(statearr_18234_18258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (10))){
var inst_18183 = (state_18215[(2)]);
var inst_18184 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18215__$1 = (function (){var statearr_18235 = state_18215;
(statearr_18235[(13)] = inst_18183);

return statearr_18235;
})();
var statearr_18236_18259 = state_18215__$1;
(statearr_18236_18259[(2)] = inst_18184);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18215__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (8))){
var inst_18197 = (state_18215[(2)]);
var state_18215__$1 = state_18215;
var statearr_18237_18260 = state_18215__$1;
(statearr_18237_18260[(2)] = inst_18197);

(statearr_18237_18260[(1)] = (5));


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
});})(c__13715__auto___18245,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13650__auto__,c__13715__auto___18245,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_18241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18241[(0)] = state_machine__13651__auto__);

(statearr_18241[(1)] = (1));

return statearr_18241;
});
var state_machine__13651__auto____1 = (function (state_18215){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_18215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e18242){if((e18242 instanceof Object)){
var ex__13654__auto__ = e18242;
var statearr_18243_18261 = state_18215;
(statearr_18243_18261[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18262 = state_18215;
state_18215 = G__18262;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_18215){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_18215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto___18245,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13717__auto__ = (function (){var statearr_18244 = f__13716__auto__.call(null);
(statearr_18244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto___18245);

return statearr_18244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto___18245,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__13715__auto___18370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto___18370,out){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto___18370,out){
return (function (state_18346){
var state_val_18347 = (state_18346[(1)]);
if((state_val_18347 === (7))){
var inst_18325 = (state_18346[(7)]);
var inst_18326 = (state_18346[(8)]);
var inst_18325__$1 = (state_18346[(2)]);
var inst_18326__$1 = cljs.core.nth.call(null,inst_18325__$1,(0),null);
var inst_18327 = cljs.core.nth.call(null,inst_18325__$1,(1),null);
var inst_18328 = (inst_18326__$1 == null);
var state_18346__$1 = (function (){var statearr_18348 = state_18346;
(statearr_18348[(9)] = inst_18327);

(statearr_18348[(7)] = inst_18325__$1);

(statearr_18348[(8)] = inst_18326__$1);

return statearr_18348;
})();
if(cljs.core.truth_(inst_18328)){
var statearr_18349_18371 = state_18346__$1;
(statearr_18349_18371[(1)] = (8));

} else {
var statearr_18350_18372 = state_18346__$1;
(statearr_18350_18372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18347 === (1))){
var inst_18317 = cljs.core.vec.call(null,chs);
var inst_18318 = inst_18317;
var state_18346__$1 = (function (){var statearr_18351 = state_18346;
(statearr_18351[(10)] = inst_18318);

return statearr_18351;
})();
var statearr_18352_18373 = state_18346__$1;
(statearr_18352_18373[(2)] = null);

(statearr_18352_18373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18347 === (4))){
var inst_18318 = (state_18346[(10)]);
var state_18346__$1 = state_18346;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18346__$1,(7),inst_18318);
} else {
if((state_val_18347 === (6))){
var inst_18342 = (state_18346[(2)]);
var state_18346__$1 = state_18346;
var statearr_18353_18374 = state_18346__$1;
(statearr_18353_18374[(2)] = inst_18342);

(statearr_18353_18374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18347 === (3))){
var inst_18344 = (state_18346[(2)]);
var state_18346__$1 = state_18346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18346__$1,inst_18344);
} else {
if((state_val_18347 === (2))){
var inst_18318 = (state_18346[(10)]);
var inst_18320 = cljs.core.count.call(null,inst_18318);
var inst_18321 = (inst_18320 > (0));
var state_18346__$1 = state_18346;
if(cljs.core.truth_(inst_18321)){
var statearr_18355_18375 = state_18346__$1;
(statearr_18355_18375[(1)] = (4));

} else {
var statearr_18356_18376 = state_18346__$1;
(statearr_18356_18376[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18347 === (11))){
var inst_18318 = (state_18346[(10)]);
var inst_18335 = (state_18346[(2)]);
var tmp18354 = inst_18318;
var inst_18318__$1 = tmp18354;
var state_18346__$1 = (function (){var statearr_18357 = state_18346;
(statearr_18357[(11)] = inst_18335);

(statearr_18357[(10)] = inst_18318__$1);

return statearr_18357;
})();
var statearr_18358_18377 = state_18346__$1;
(statearr_18358_18377[(2)] = null);

(statearr_18358_18377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18347 === (9))){
var inst_18326 = (state_18346[(8)]);
var state_18346__$1 = state_18346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18346__$1,(11),out,inst_18326);
} else {
if((state_val_18347 === (5))){
var inst_18340 = cljs.core.async.close_BANG_.call(null,out);
var state_18346__$1 = state_18346;
var statearr_18359_18378 = state_18346__$1;
(statearr_18359_18378[(2)] = inst_18340);

(statearr_18359_18378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18347 === (10))){
var inst_18338 = (state_18346[(2)]);
var state_18346__$1 = state_18346;
var statearr_18360_18379 = state_18346__$1;
(statearr_18360_18379[(2)] = inst_18338);

(statearr_18360_18379[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18347 === (8))){
var inst_18327 = (state_18346[(9)]);
var inst_18325 = (state_18346[(7)]);
var inst_18318 = (state_18346[(10)]);
var inst_18326 = (state_18346[(8)]);
var inst_18330 = (function (){var c = inst_18327;
var v = inst_18326;
var vec__18323 = inst_18325;
var cs = inst_18318;
return ((function (c,v,vec__18323,cs,inst_18327,inst_18325,inst_18318,inst_18326,state_val_18347,c__13715__auto___18370,out){
return (function (p1__18263_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18263_SHARP_);
});
;})(c,v,vec__18323,cs,inst_18327,inst_18325,inst_18318,inst_18326,state_val_18347,c__13715__auto___18370,out))
})();
var inst_18331 = cljs.core.filterv.call(null,inst_18330,inst_18318);
var inst_18318__$1 = inst_18331;
var state_18346__$1 = (function (){var statearr_18361 = state_18346;
(statearr_18361[(10)] = inst_18318__$1);

return statearr_18361;
})();
var statearr_18362_18380 = state_18346__$1;
(statearr_18362_18380[(2)] = null);

(statearr_18362_18380[(1)] = (2));


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
});})(c__13715__auto___18370,out))
;
return ((function (switch__13650__auto__,c__13715__auto___18370,out){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_18366 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18366[(0)] = state_machine__13651__auto__);

(statearr_18366[(1)] = (1));

return statearr_18366;
});
var state_machine__13651__auto____1 = (function (state_18346){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_18346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e18367){if((e18367 instanceof Object)){
var ex__13654__auto__ = e18367;
var statearr_18368_18381 = state_18346;
(statearr_18368_18381[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18382 = state_18346;
state_18346 = G__18382;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_18346){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_18346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto___18370,out))
})();
var state__13717__auto__ = (function (){var statearr_18369 = f__13716__auto__.call(null);
(statearr_18369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto___18370);

return statearr_18369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto___18370,out))
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
var c__13715__auto___18475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto___18475,out){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto___18475,out){
return (function (state_18452){
var state_val_18453 = (state_18452[(1)]);
if((state_val_18453 === (7))){
var inst_18434 = (state_18452[(7)]);
var inst_18434__$1 = (state_18452[(2)]);
var inst_18435 = (inst_18434__$1 == null);
var inst_18436 = cljs.core.not.call(null,inst_18435);
var state_18452__$1 = (function (){var statearr_18454 = state_18452;
(statearr_18454[(7)] = inst_18434__$1);

return statearr_18454;
})();
if(inst_18436){
var statearr_18455_18476 = state_18452__$1;
(statearr_18455_18476[(1)] = (8));

} else {
var statearr_18456_18477 = state_18452__$1;
(statearr_18456_18477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18453 === (1))){
var inst_18429 = (0);
var state_18452__$1 = (function (){var statearr_18457 = state_18452;
(statearr_18457[(8)] = inst_18429);

return statearr_18457;
})();
var statearr_18458_18478 = state_18452__$1;
(statearr_18458_18478[(2)] = null);

(statearr_18458_18478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18453 === (4))){
var state_18452__$1 = state_18452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18452__$1,(7),ch);
} else {
if((state_val_18453 === (6))){
var inst_18447 = (state_18452[(2)]);
var state_18452__$1 = state_18452;
var statearr_18459_18479 = state_18452__$1;
(statearr_18459_18479[(2)] = inst_18447);

(statearr_18459_18479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18453 === (3))){
var inst_18449 = (state_18452[(2)]);
var inst_18450 = cljs.core.async.close_BANG_.call(null,out);
var state_18452__$1 = (function (){var statearr_18460 = state_18452;
(statearr_18460[(9)] = inst_18449);

return statearr_18460;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18452__$1,inst_18450);
} else {
if((state_val_18453 === (2))){
var inst_18429 = (state_18452[(8)]);
var inst_18431 = (inst_18429 < n);
var state_18452__$1 = state_18452;
if(cljs.core.truth_(inst_18431)){
var statearr_18461_18480 = state_18452__$1;
(statearr_18461_18480[(1)] = (4));

} else {
var statearr_18462_18481 = state_18452__$1;
(statearr_18462_18481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18453 === (11))){
var inst_18429 = (state_18452[(8)]);
var inst_18439 = (state_18452[(2)]);
var inst_18440 = (inst_18429 + (1));
var inst_18429__$1 = inst_18440;
var state_18452__$1 = (function (){var statearr_18463 = state_18452;
(statearr_18463[(10)] = inst_18439);

(statearr_18463[(8)] = inst_18429__$1);

return statearr_18463;
})();
var statearr_18464_18482 = state_18452__$1;
(statearr_18464_18482[(2)] = null);

(statearr_18464_18482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18453 === (9))){
var state_18452__$1 = state_18452;
var statearr_18465_18483 = state_18452__$1;
(statearr_18465_18483[(2)] = null);

(statearr_18465_18483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18453 === (5))){
var state_18452__$1 = state_18452;
var statearr_18466_18484 = state_18452__$1;
(statearr_18466_18484[(2)] = null);

(statearr_18466_18484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18453 === (10))){
var inst_18444 = (state_18452[(2)]);
var state_18452__$1 = state_18452;
var statearr_18467_18485 = state_18452__$1;
(statearr_18467_18485[(2)] = inst_18444);

(statearr_18467_18485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18453 === (8))){
var inst_18434 = (state_18452[(7)]);
var state_18452__$1 = state_18452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18452__$1,(11),out,inst_18434);
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
});})(c__13715__auto___18475,out))
;
return ((function (switch__13650__auto__,c__13715__auto___18475,out){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_18471 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18471[(0)] = state_machine__13651__auto__);

(statearr_18471[(1)] = (1));

return statearr_18471;
});
var state_machine__13651__auto____1 = (function (state_18452){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_18452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e18472){if((e18472 instanceof Object)){
var ex__13654__auto__ = e18472;
var statearr_18473_18486 = state_18452;
(statearr_18473_18486[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18487 = state_18452;
state_18452 = G__18487;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_18452){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_18452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto___18475,out))
})();
var state__13717__auto__ = (function (){var statearr_18474 = f__13716__auto__.call(null);
(statearr_18474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto___18475);

return statearr_18474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto___18475,out))
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
var c__13715__auto___18584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto___18584,out){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto___18584,out){
return (function (state_18559){
var state_val_18560 = (state_18559[(1)]);
if((state_val_18560 === (7))){
var inst_18554 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
var statearr_18561_18585 = state_18559__$1;
(statearr_18561_18585[(2)] = inst_18554);

(statearr_18561_18585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (1))){
var inst_18536 = null;
var state_18559__$1 = (function (){var statearr_18562 = state_18559;
(statearr_18562[(7)] = inst_18536);

return statearr_18562;
})();
var statearr_18563_18586 = state_18559__$1;
(statearr_18563_18586[(2)] = null);

(statearr_18563_18586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (4))){
var inst_18539 = (state_18559[(8)]);
var inst_18539__$1 = (state_18559[(2)]);
var inst_18540 = (inst_18539__$1 == null);
var inst_18541 = cljs.core.not.call(null,inst_18540);
var state_18559__$1 = (function (){var statearr_18564 = state_18559;
(statearr_18564[(8)] = inst_18539__$1);

return statearr_18564;
})();
if(inst_18541){
var statearr_18565_18587 = state_18559__$1;
(statearr_18565_18587[(1)] = (5));

} else {
var statearr_18566_18588 = state_18559__$1;
(statearr_18566_18588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (6))){
var state_18559__$1 = state_18559;
var statearr_18567_18589 = state_18559__$1;
(statearr_18567_18589[(2)] = null);

(statearr_18567_18589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (3))){
var inst_18556 = (state_18559[(2)]);
var inst_18557 = cljs.core.async.close_BANG_.call(null,out);
var state_18559__$1 = (function (){var statearr_18568 = state_18559;
(statearr_18568[(9)] = inst_18556);

return statearr_18568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18559__$1,inst_18557);
} else {
if((state_val_18560 === (2))){
var state_18559__$1 = state_18559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18559__$1,(4),ch);
} else {
if((state_val_18560 === (11))){
var inst_18539 = (state_18559[(8)]);
var inst_18548 = (state_18559[(2)]);
var inst_18536 = inst_18539;
var state_18559__$1 = (function (){var statearr_18569 = state_18559;
(statearr_18569[(7)] = inst_18536);

(statearr_18569[(10)] = inst_18548);

return statearr_18569;
})();
var statearr_18570_18590 = state_18559__$1;
(statearr_18570_18590[(2)] = null);

(statearr_18570_18590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (9))){
var inst_18539 = (state_18559[(8)]);
var state_18559__$1 = state_18559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18559__$1,(11),out,inst_18539);
} else {
if((state_val_18560 === (5))){
var inst_18536 = (state_18559[(7)]);
var inst_18539 = (state_18559[(8)]);
var inst_18543 = cljs.core._EQ_.call(null,inst_18539,inst_18536);
var state_18559__$1 = state_18559;
if(inst_18543){
var statearr_18572_18591 = state_18559__$1;
(statearr_18572_18591[(1)] = (8));

} else {
var statearr_18573_18592 = state_18559__$1;
(statearr_18573_18592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (10))){
var inst_18551 = (state_18559[(2)]);
var state_18559__$1 = state_18559;
var statearr_18574_18593 = state_18559__$1;
(statearr_18574_18593[(2)] = inst_18551);

(statearr_18574_18593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18560 === (8))){
var inst_18536 = (state_18559[(7)]);
var tmp18571 = inst_18536;
var inst_18536__$1 = tmp18571;
var state_18559__$1 = (function (){var statearr_18575 = state_18559;
(statearr_18575[(7)] = inst_18536__$1);

return statearr_18575;
})();
var statearr_18576_18594 = state_18559__$1;
(statearr_18576_18594[(2)] = null);

(statearr_18576_18594[(1)] = (2));


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
});})(c__13715__auto___18584,out))
;
return ((function (switch__13650__auto__,c__13715__auto___18584,out){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_18580 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18580[(0)] = state_machine__13651__auto__);

(statearr_18580[(1)] = (1));

return statearr_18580;
});
var state_machine__13651__auto____1 = (function (state_18559){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_18559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e18581){if((e18581 instanceof Object)){
var ex__13654__auto__ = e18581;
var statearr_18582_18595 = state_18559;
(statearr_18582_18595[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18596 = state_18559;
state_18559 = G__18596;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_18559){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_18559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto___18584,out))
})();
var state__13717__auto__ = (function (){var statearr_18583 = f__13716__auto__.call(null);
(statearr_18583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto___18584);

return statearr_18583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto___18584,out))
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
var c__13715__auto___18731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto___18731,out){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto___18731,out){
return (function (state_18701){
var state_val_18702 = (state_18701[(1)]);
if((state_val_18702 === (7))){
var inst_18697 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
var statearr_18703_18732 = state_18701__$1;
(statearr_18703_18732[(2)] = inst_18697);

(statearr_18703_18732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (1))){
var inst_18664 = (new Array(n));
var inst_18665 = inst_18664;
var inst_18666 = (0);
var state_18701__$1 = (function (){var statearr_18704 = state_18701;
(statearr_18704[(7)] = inst_18666);

(statearr_18704[(8)] = inst_18665);

return statearr_18704;
})();
var statearr_18705_18733 = state_18701__$1;
(statearr_18705_18733[(2)] = null);

(statearr_18705_18733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (4))){
var inst_18669 = (state_18701[(9)]);
var inst_18669__$1 = (state_18701[(2)]);
var inst_18670 = (inst_18669__$1 == null);
var inst_18671 = cljs.core.not.call(null,inst_18670);
var state_18701__$1 = (function (){var statearr_18706 = state_18701;
(statearr_18706[(9)] = inst_18669__$1);

return statearr_18706;
})();
if(inst_18671){
var statearr_18707_18734 = state_18701__$1;
(statearr_18707_18734[(1)] = (5));

} else {
var statearr_18708_18735 = state_18701__$1;
(statearr_18708_18735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (15))){
var inst_18691 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
var statearr_18709_18736 = state_18701__$1;
(statearr_18709_18736[(2)] = inst_18691);

(statearr_18709_18736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (13))){
var state_18701__$1 = state_18701;
var statearr_18710_18737 = state_18701__$1;
(statearr_18710_18737[(2)] = null);

(statearr_18710_18737[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (6))){
var inst_18666 = (state_18701[(7)]);
var inst_18687 = (inst_18666 > (0));
var state_18701__$1 = state_18701;
if(cljs.core.truth_(inst_18687)){
var statearr_18711_18738 = state_18701__$1;
(statearr_18711_18738[(1)] = (12));

} else {
var statearr_18712_18739 = state_18701__$1;
(statearr_18712_18739[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (3))){
var inst_18699 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18701__$1,inst_18699);
} else {
if((state_val_18702 === (12))){
var inst_18665 = (state_18701[(8)]);
var inst_18689 = cljs.core.vec.call(null,inst_18665);
var state_18701__$1 = state_18701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18701__$1,(15),out,inst_18689);
} else {
if((state_val_18702 === (2))){
var state_18701__$1 = state_18701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18701__$1,(4),ch);
} else {
if((state_val_18702 === (11))){
var inst_18681 = (state_18701[(2)]);
var inst_18682 = (new Array(n));
var inst_18665 = inst_18682;
var inst_18666 = (0);
var state_18701__$1 = (function (){var statearr_18713 = state_18701;
(statearr_18713[(7)] = inst_18666);

(statearr_18713[(10)] = inst_18681);

(statearr_18713[(8)] = inst_18665);

return statearr_18713;
})();
var statearr_18714_18740 = state_18701__$1;
(statearr_18714_18740[(2)] = null);

(statearr_18714_18740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (9))){
var inst_18665 = (state_18701[(8)]);
var inst_18679 = cljs.core.vec.call(null,inst_18665);
var state_18701__$1 = state_18701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18701__$1,(11),out,inst_18679);
} else {
if((state_val_18702 === (5))){
var inst_18674 = (state_18701[(11)]);
var inst_18666 = (state_18701[(7)]);
var inst_18669 = (state_18701[(9)]);
var inst_18665 = (state_18701[(8)]);
var inst_18673 = (inst_18665[inst_18666] = inst_18669);
var inst_18674__$1 = (inst_18666 + (1));
var inst_18675 = (inst_18674__$1 < n);
var state_18701__$1 = (function (){var statearr_18715 = state_18701;
(statearr_18715[(11)] = inst_18674__$1);

(statearr_18715[(12)] = inst_18673);

return statearr_18715;
})();
if(cljs.core.truth_(inst_18675)){
var statearr_18716_18741 = state_18701__$1;
(statearr_18716_18741[(1)] = (8));

} else {
var statearr_18717_18742 = state_18701__$1;
(statearr_18717_18742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (14))){
var inst_18694 = (state_18701[(2)]);
var inst_18695 = cljs.core.async.close_BANG_.call(null,out);
var state_18701__$1 = (function (){var statearr_18719 = state_18701;
(statearr_18719[(13)] = inst_18694);

return statearr_18719;
})();
var statearr_18720_18743 = state_18701__$1;
(statearr_18720_18743[(2)] = inst_18695);

(statearr_18720_18743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (10))){
var inst_18685 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
var statearr_18721_18744 = state_18701__$1;
(statearr_18721_18744[(2)] = inst_18685);

(statearr_18721_18744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (8))){
var inst_18674 = (state_18701[(11)]);
var inst_18665 = (state_18701[(8)]);
var tmp18718 = inst_18665;
var inst_18665__$1 = tmp18718;
var inst_18666 = inst_18674;
var state_18701__$1 = (function (){var statearr_18722 = state_18701;
(statearr_18722[(7)] = inst_18666);

(statearr_18722[(8)] = inst_18665__$1);

return statearr_18722;
})();
var statearr_18723_18745 = state_18701__$1;
(statearr_18723_18745[(2)] = null);

(statearr_18723_18745[(1)] = (2));


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
});})(c__13715__auto___18731,out))
;
return ((function (switch__13650__auto__,c__13715__auto___18731,out){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_18727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18727[(0)] = state_machine__13651__auto__);

(statearr_18727[(1)] = (1));

return statearr_18727;
});
var state_machine__13651__auto____1 = (function (state_18701){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_18701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e18728){if((e18728 instanceof Object)){
var ex__13654__auto__ = e18728;
var statearr_18729_18746 = state_18701;
(statearr_18729_18746[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18747 = state_18701;
state_18701 = G__18747;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_18701){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_18701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto___18731,out))
})();
var state__13717__auto__ = (function (){var statearr_18730 = f__13716__auto__.call(null);
(statearr_18730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto___18731);

return statearr_18730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto___18731,out))
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
var c__13715__auto___18890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto___18890,out){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto___18890,out){
return (function (state_18860){
var state_val_18861 = (state_18860[(1)]);
if((state_val_18861 === (7))){
var inst_18856 = (state_18860[(2)]);
var state_18860__$1 = state_18860;
var statearr_18862_18891 = state_18860__$1;
(statearr_18862_18891[(2)] = inst_18856);

(statearr_18862_18891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18861 === (1))){
var inst_18819 = [];
var inst_18820 = inst_18819;
var inst_18821 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18860__$1 = (function (){var statearr_18863 = state_18860;
(statearr_18863[(7)] = inst_18820);

(statearr_18863[(8)] = inst_18821);

return statearr_18863;
})();
var statearr_18864_18892 = state_18860__$1;
(statearr_18864_18892[(2)] = null);

(statearr_18864_18892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18861 === (4))){
var inst_18824 = (state_18860[(9)]);
var inst_18824__$1 = (state_18860[(2)]);
var inst_18825 = (inst_18824__$1 == null);
var inst_18826 = cljs.core.not.call(null,inst_18825);
var state_18860__$1 = (function (){var statearr_18865 = state_18860;
(statearr_18865[(9)] = inst_18824__$1);

return statearr_18865;
})();
if(inst_18826){
var statearr_18866_18893 = state_18860__$1;
(statearr_18866_18893[(1)] = (5));

} else {
var statearr_18867_18894 = state_18860__$1;
(statearr_18867_18894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18861 === (15))){
var inst_18850 = (state_18860[(2)]);
var state_18860__$1 = state_18860;
var statearr_18868_18895 = state_18860__$1;
(statearr_18868_18895[(2)] = inst_18850);

(statearr_18868_18895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18861 === (13))){
var state_18860__$1 = state_18860;
var statearr_18869_18896 = state_18860__$1;
(statearr_18869_18896[(2)] = null);

(statearr_18869_18896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18861 === (6))){
var inst_18820 = (state_18860[(7)]);
var inst_18845 = inst_18820.length;
var inst_18846 = (inst_18845 > (0));
var state_18860__$1 = state_18860;
if(cljs.core.truth_(inst_18846)){
var statearr_18870_18897 = state_18860__$1;
(statearr_18870_18897[(1)] = (12));

} else {
var statearr_18871_18898 = state_18860__$1;
(statearr_18871_18898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18861 === (3))){
var inst_18858 = (state_18860[(2)]);
var state_18860__$1 = state_18860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18860__$1,inst_18858);
} else {
if((state_val_18861 === (12))){
var inst_18820 = (state_18860[(7)]);
var inst_18848 = cljs.core.vec.call(null,inst_18820);
var state_18860__$1 = state_18860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18860__$1,(15),out,inst_18848);
} else {
if((state_val_18861 === (2))){
var state_18860__$1 = state_18860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18860__$1,(4),ch);
} else {
if((state_val_18861 === (11))){
var inst_18824 = (state_18860[(9)]);
var inst_18828 = (state_18860[(10)]);
var inst_18838 = (state_18860[(2)]);
var inst_18839 = [];
var inst_18840 = inst_18839.push(inst_18824);
var inst_18820 = inst_18839;
var inst_18821 = inst_18828;
var state_18860__$1 = (function (){var statearr_18872 = state_18860;
(statearr_18872[(11)] = inst_18838);

(statearr_18872[(12)] = inst_18840);

(statearr_18872[(7)] = inst_18820);

(statearr_18872[(8)] = inst_18821);

return statearr_18872;
})();
var statearr_18873_18899 = state_18860__$1;
(statearr_18873_18899[(2)] = null);

(statearr_18873_18899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18861 === (9))){
var inst_18820 = (state_18860[(7)]);
var inst_18836 = cljs.core.vec.call(null,inst_18820);
var state_18860__$1 = state_18860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18860__$1,(11),out,inst_18836);
} else {
if((state_val_18861 === (5))){
var inst_18824 = (state_18860[(9)]);
var inst_18828 = (state_18860[(10)]);
var inst_18821 = (state_18860[(8)]);
var inst_18828__$1 = f.call(null,inst_18824);
var inst_18829 = cljs.core._EQ_.call(null,inst_18828__$1,inst_18821);
var inst_18830 = cljs.core.keyword_identical_QMARK_.call(null,inst_18821,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18831 = (inst_18829) || (inst_18830);
var state_18860__$1 = (function (){var statearr_18874 = state_18860;
(statearr_18874[(10)] = inst_18828__$1);

return statearr_18874;
})();
if(cljs.core.truth_(inst_18831)){
var statearr_18875_18900 = state_18860__$1;
(statearr_18875_18900[(1)] = (8));

} else {
var statearr_18876_18901 = state_18860__$1;
(statearr_18876_18901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18861 === (14))){
var inst_18853 = (state_18860[(2)]);
var inst_18854 = cljs.core.async.close_BANG_.call(null,out);
var state_18860__$1 = (function (){var statearr_18878 = state_18860;
(statearr_18878[(13)] = inst_18853);

return statearr_18878;
})();
var statearr_18879_18902 = state_18860__$1;
(statearr_18879_18902[(2)] = inst_18854);

(statearr_18879_18902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18861 === (10))){
var inst_18843 = (state_18860[(2)]);
var state_18860__$1 = state_18860;
var statearr_18880_18903 = state_18860__$1;
(statearr_18880_18903[(2)] = inst_18843);

(statearr_18880_18903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18861 === (8))){
var inst_18824 = (state_18860[(9)]);
var inst_18820 = (state_18860[(7)]);
var inst_18828 = (state_18860[(10)]);
var inst_18833 = inst_18820.push(inst_18824);
var tmp18877 = inst_18820;
var inst_18820__$1 = tmp18877;
var inst_18821 = inst_18828;
var state_18860__$1 = (function (){var statearr_18881 = state_18860;
(statearr_18881[(7)] = inst_18820__$1);

(statearr_18881[(14)] = inst_18833);

(statearr_18881[(8)] = inst_18821);

return statearr_18881;
})();
var statearr_18882_18904 = state_18860__$1;
(statearr_18882_18904[(2)] = null);

(statearr_18882_18904[(1)] = (2));


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
});})(c__13715__auto___18890,out))
;
return ((function (switch__13650__auto__,c__13715__auto___18890,out){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_18886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18886[(0)] = state_machine__13651__auto__);

(statearr_18886[(1)] = (1));

return statearr_18886;
});
var state_machine__13651__auto____1 = (function (state_18860){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_18860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e18887){if((e18887 instanceof Object)){
var ex__13654__auto__ = e18887;
var statearr_18888_18905 = state_18860;
(statearr_18888_18905[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18906 = state_18860;
state_18860 = G__18906;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_18860){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_18860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto___18890,out))
})();
var state__13717__auto__ = (function (){var statearr_18889 = f__13716__auto__.call(null);
(statearr_18889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto___18890);

return statearr_18889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto___18890,out))
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