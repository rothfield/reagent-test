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
if(typeof cljs.core.async.t15924 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15924 = (function (f,fn_handler,meta15925){
this.f = f;
this.fn_handler = fn_handler;
this.meta15925 = meta15925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15924.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t15924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t15924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15926){
var self__ = this;
var _15926__$1 = this;
return self__.meta15925;
});

cljs.core.async.t15924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15926,meta15925__$1){
var self__ = this;
var _15926__$1 = this;
return (new cljs.core.async.t15924(self__.f,self__.fn_handler,meta15925__$1));
});

cljs.core.async.t15924.cljs$lang$type = true;

cljs.core.async.t15924.cljs$lang$ctorStr = "cljs.core.async/t15924";

cljs.core.async.t15924.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t15924");
});

cljs.core.async.__GT_t15924 = (function __GT_t15924(f__$1,fn_handler__$1,meta15925){
return (new cljs.core.async.t15924(f__$1,fn_handler__$1,meta15925));
});

}

return (new cljs.core.async.t15924(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),15,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),12,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/g72/-ytkm87/out/cljs/core/async.cljs"], null)));
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
var G__15928 = buff;
if(G__15928){
var bit__4234__auto__ = null;
if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4234__auto__;
if(cljs.core.truth_(or__3553__auto__)){
return or__3553__auto__;
} else {
return G__15928.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__15928.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15928);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15928);
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
var val_15929 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15929);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15929,ret){
return (function (){
return fn1.call(null,val_15929);
});})(val_15929,ret))
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
var n__4440__auto___15930 = n;
var x_15931 = (0);
while(true){
if((x_15931 < n__4440__auto___15930)){
(a[x_15931] = (0));

var G__15932 = (x_15931 + (1));
x_15931 = G__15932;
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

var G__15933 = (i + (1));
i = G__15933;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t15937 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15937 = (function (flag,alt_flag,meta15938){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15938 = meta15938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15937.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15937.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t15937.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t15937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15939){
var self__ = this;
var _15939__$1 = this;
return self__.meta15938;
});})(flag))
;

cljs.core.async.t15937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15939,meta15938__$1){
var self__ = this;
var _15939__$1 = this;
return (new cljs.core.async.t15937(self__.flag,self__.alt_flag,meta15938__$1));
});})(flag))
;

cljs.core.async.t15937.cljs$lang$type = true;

cljs.core.async.t15937.cljs$lang$ctorStr = "cljs.core.async/t15937";

cljs.core.async.t15937.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t15937");
});})(flag))
;

cljs.core.async.__GT_t15937 = ((function (flag){
return (function __GT_t15937(flag__$1,alt_flag__$1,meta15938){
return (new cljs.core.async.t15937(flag__$1,alt_flag__$1,meta15938));
});})(flag))
;

}

return (new cljs.core.async.t15937(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),135,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),130,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/g72/-ytkm87/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t15943 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15943 = (function (cb,flag,alt_handler,meta15944){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15944 = meta15944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15943.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t15943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t15943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15945){
var self__ = this;
var _15945__$1 = this;
return self__.meta15944;
});

cljs.core.async.t15943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15945,meta15944__$1){
var self__ = this;
var _15945__$1 = this;
return (new cljs.core.async.t15943(self__.cb,self__.flag,self__.alt_handler,meta15944__$1));
});

cljs.core.async.t15943.cljs$lang$type = true;

cljs.core.async.t15943.cljs$lang$ctorStr = "cljs.core.async/t15943";

cljs.core.async.t15943.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t15943");
});

cljs.core.async.__GT_t15943 = (function __GT_t15943(cb__$1,flag__$1,alt_handler__$1,meta15944){
return (new cljs.core.async.t15943(cb__$1,flag__$1,alt_handler__$1,meta15944));
});

}

return (new cljs.core.async.t15943(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),143,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),138,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/g72/-ytkm87/out/cljs/core/async.cljs"], null)));
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
return (function (p1__15946_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15946_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15947_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15947_SHARP_,port], null));
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
var G__15948 = (i + (1));
i = G__15948;
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
var alts_BANG___delegate = function (ports,p__15949){
var map__15951 = p__15949;
var map__15951__$1 = ((cljs.core.seq_QMARK_.call(null,map__15951))?cljs.core.apply.call(null,cljs.core.hash_map,map__15951):map__15951);
var opts = map__15951__$1;
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));

};
var alts_BANG_ = function (ports,var_args){
var p__15949 = null;
if (arguments.length > 1) {
var G__15952__i = 0, G__15952__a = new Array(arguments.length -  1);
while (G__15952__i < G__15952__a.length) {G__15952__a[G__15952__i] = arguments[G__15952__i + 1]; ++G__15952__i;}
  p__15949 = new cljs.core.IndexedSeq(G__15952__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__15949);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15953){
var ports = cljs.core.first(arglist__15953);
var p__15949 = cljs.core.rest(arglist__15953);
return alts_BANG___delegate(ports,p__15949);
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
if(typeof cljs.core.async.t15961 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15961 = (function (ch,f,map_LT_,meta15962){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15962 = meta15962;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15961.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15961.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t15961.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15961.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t15964 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15964 = (function (fn1,_,meta15962,map_LT_,f,ch,meta15965){
this.fn1 = fn1;
this._ = _;
this.meta15962 = meta15962;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15965 = meta15965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15964.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15964.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t15964.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t15964.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15954_SHARP_){
return f1.call(null,(((p1__15954_SHARP_ == null))?null:self__.f.call(null,p1__15954_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t15964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15966){
var self__ = this;
var _15966__$1 = this;
return self__.meta15965;
});})(___$1))
;

cljs.core.async.t15964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15966,meta15965__$1){
var self__ = this;
var _15966__$1 = this;
return (new cljs.core.async.t15964(self__.fn1,self__._,self__.meta15962,self__.map_LT_,self__.f,self__.ch,meta15965__$1));
});})(___$1))
;

cljs.core.async.t15964.cljs$lang$type = true;

cljs.core.async.t15964.cljs$lang$ctorStr = "cljs.core.async/t15964";

cljs.core.async.t15964.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t15964");
});})(___$1))
;

cljs.core.async.__GT_t15964 = ((function (___$1){
return (function __GT_t15964(fn1__$1,___$2,meta15962__$1,map_LT___$1,f__$1,ch__$1,meta15965){
return (new cljs.core.async.t15964(fn1__$1,___$2,meta15962__$1,map_LT___$1,f__$1,ch__$1,meta15965));
});})(___$1))
;

}

return (new cljs.core.async.t15964(fn1,___$1,self__.meta15962,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),220,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),214,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/g72/-ytkm87/out/cljs/core/async.cljs"], null)));
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

cljs.core.async.t15961.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15961.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15961.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15963){
var self__ = this;
var _15963__$1 = this;
return self__.meta15962;
});

cljs.core.async.t15961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15963,meta15962__$1){
var self__ = this;
var _15963__$1 = this;
return (new cljs.core.async.t15961(self__.ch,self__.f,self__.map_LT_,meta15962__$1));
});

cljs.core.async.t15961.cljs$lang$type = true;

cljs.core.async.t15961.cljs$lang$ctorStr = "cljs.core.async/t15961";

cljs.core.async.t15961.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t15961");
});

cljs.core.async.__GT_t15961 = (function __GT_t15961(ch__$1,f__$1,map_LT___$1,meta15962){
return (new cljs.core.async.t15961(ch__$1,f__$1,map_LT___$1,meta15962));
});

}

return (new cljs.core.async.t15961(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),226,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),205,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/g72/-ytkm87/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t15970 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15970 = (function (ch,f,map_GT_,meta15971){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15971 = meta15971;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15970.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15970.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t15970.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15970.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15970.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15970.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15972){
var self__ = this;
var _15972__$1 = this;
return self__.meta15971;
});

cljs.core.async.t15970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15972,meta15971__$1){
var self__ = this;
var _15972__$1 = this;
return (new cljs.core.async.t15970(self__.ch,self__.f,self__.map_GT_,meta15971__$1));
});

cljs.core.async.t15970.cljs$lang$type = true;

cljs.core.async.t15970.cljs$lang$ctorStr = "cljs.core.async/t15970";

cljs.core.async.t15970.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t15970");
});

cljs.core.async.__GT_t15970 = (function __GT_t15970(ch__$1,f__$1,map_GT___$1,meta15971){
return (new cljs.core.async.t15970(ch__$1,f__$1,map_GT___$1,meta15971));
});

}

return (new cljs.core.async.t15970(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),241,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),232,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/g72/-ytkm87/out/cljs/core/async.cljs"], null)));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t15976 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15976 = (function (ch,p,filter_GT_,meta15977){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15977 = meta15977;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15976.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15976.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t15976.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15976.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15976.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15976.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15976.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15978){
var self__ = this;
var _15978__$1 = this;
return self__.meta15977;
});

cljs.core.async.t15976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15978,meta15977__$1){
var self__ = this;
var _15978__$1 = this;
return (new cljs.core.async.t15976(self__.ch,self__.p,self__.filter_GT_,meta15977__$1));
});

cljs.core.async.t15976.cljs$lang$type = true;

cljs.core.async.t15976.cljs$lang$ctorStr = "cljs.core.async/t15976";

cljs.core.async.t15976.cljs$lang$ctorPrWriter = (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t15976");
});

cljs.core.async.__GT_t15976 = (function __GT_t15976(ch__$1,p__$1,filter_GT___$1,meta15977){
return (new cljs.core.async.t15976(ch__$1,p__$1,filter_GT___$1,meta15977));
});

}

return (new cljs.core.async.t15976(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),262,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),250,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/g72/-ytkm87/out/cljs/core/async.cljs"], null)));
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
var c__6645__auto___16061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___16061,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___16061,out){
return (function (state_16040){
var state_val_16041 = (state_16040[(1)]);
if((state_val_16041 === (7))){
var inst_16036 = (state_16040[(2)]);
var state_16040__$1 = state_16040;
var statearr_16042_16062 = state_16040__$1;
(statearr_16042_16062[(2)] = inst_16036);

(statearr_16042_16062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (1))){
var state_16040__$1 = state_16040;
var statearr_16043_16063 = state_16040__$1;
(statearr_16043_16063[(2)] = null);

(statearr_16043_16063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (4))){
var inst_16022 = (state_16040[(7)]);
var inst_16022__$1 = (state_16040[(2)]);
var inst_16023 = (inst_16022__$1 == null);
var state_16040__$1 = (function (){var statearr_16044 = state_16040;
(statearr_16044[(7)] = inst_16022__$1);

return statearr_16044;
})();
if(cljs.core.truth_(inst_16023)){
var statearr_16045_16064 = state_16040__$1;
(statearr_16045_16064[(1)] = (5));

} else {
var statearr_16046_16065 = state_16040__$1;
(statearr_16046_16065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (6))){
var inst_16022 = (state_16040[(7)]);
var inst_16027 = p.call(null,inst_16022);
var state_16040__$1 = state_16040;
if(cljs.core.truth_(inst_16027)){
var statearr_16047_16066 = state_16040__$1;
(statearr_16047_16066[(1)] = (8));

} else {
var statearr_16048_16067 = state_16040__$1;
(statearr_16048_16067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (3))){
var inst_16038 = (state_16040[(2)]);
var state_16040__$1 = state_16040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16040__$1,inst_16038);
} else {
if((state_val_16041 === (2))){
var state_16040__$1 = state_16040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16040__$1,(4),ch);
} else {
if((state_val_16041 === (11))){
var inst_16030 = (state_16040[(2)]);
var state_16040__$1 = state_16040;
var statearr_16049_16068 = state_16040__$1;
(statearr_16049_16068[(2)] = inst_16030);

(statearr_16049_16068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (9))){
var state_16040__$1 = state_16040;
var statearr_16050_16069 = state_16040__$1;
(statearr_16050_16069[(2)] = null);

(statearr_16050_16069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (5))){
var inst_16025 = cljs.core.async.close_BANG_.call(null,out);
var state_16040__$1 = state_16040;
var statearr_16051_16070 = state_16040__$1;
(statearr_16051_16070[(2)] = inst_16025);

(statearr_16051_16070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (10))){
var inst_16033 = (state_16040[(2)]);
var state_16040__$1 = (function (){var statearr_16052 = state_16040;
(statearr_16052[(8)] = inst_16033);

return statearr_16052;
})();
var statearr_16053_16071 = state_16040__$1;
(statearr_16053_16071[(2)] = null);

(statearr_16053_16071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16041 === (8))){
var inst_16022 = (state_16040[(7)]);
var state_16040__$1 = state_16040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16040__$1,(11),out,inst_16022);
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
});})(c__6645__auto___16061,out))
;
return ((function (switch__6580__auto__,c__6645__auto___16061,out){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_16057 = [null,null,null,null,null,null,null,null,null];
(statearr_16057[(0)] = state_machine__6581__auto__);

(statearr_16057[(1)] = (1));

return statearr_16057;
});
var state_machine__6581__auto____1 = (function (state_16040){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_16040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e16058){if((e16058 instanceof Object)){
var ex__6584__auto__ = e16058;
var statearr_16059_16072 = state_16040;
(statearr_16059_16072[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16073 = state_16040;
state_16040 = G__16073;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_16040){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_16040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___16061,out))
})();
var state__6647__auto__ = (function (){var statearr_16060 = f__6646__auto__.call(null);
(statearr_16060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___16061);

return statearr_16060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___16061,out))
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
return (function (state_16239){
var state_val_16240 = (state_16239[(1)]);
if((state_val_16240 === (7))){
var inst_16235 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
var statearr_16241_16282 = state_16239__$1;
(statearr_16241_16282[(2)] = inst_16235);

(statearr_16241_16282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (20))){
var inst_16205 = (state_16239[(7)]);
var inst_16216 = (state_16239[(2)]);
var inst_16217 = cljs.core.next.call(null,inst_16205);
var inst_16191 = inst_16217;
var inst_16192 = null;
var inst_16193 = (0);
var inst_16194 = (0);
var state_16239__$1 = (function (){var statearr_16242 = state_16239;
(statearr_16242[(8)] = inst_16193);

(statearr_16242[(9)] = inst_16192);

(statearr_16242[(10)] = inst_16216);

(statearr_16242[(11)] = inst_16194);

(statearr_16242[(12)] = inst_16191);

return statearr_16242;
})();
var statearr_16243_16283 = state_16239__$1;
(statearr_16243_16283[(2)] = null);

(statearr_16243_16283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (1))){
var state_16239__$1 = state_16239;
var statearr_16244_16284 = state_16239__$1;
(statearr_16244_16284[(2)] = null);

(statearr_16244_16284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (4))){
var inst_16180 = (state_16239[(13)]);
var inst_16180__$1 = (state_16239[(2)]);
var inst_16181 = (inst_16180__$1 == null);
var state_16239__$1 = (function (){var statearr_16245 = state_16239;
(statearr_16245[(13)] = inst_16180__$1);

return statearr_16245;
})();
if(cljs.core.truth_(inst_16181)){
var statearr_16246_16285 = state_16239__$1;
(statearr_16246_16285[(1)] = (5));

} else {
var statearr_16247_16286 = state_16239__$1;
(statearr_16247_16286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (15))){
var state_16239__$1 = state_16239;
var statearr_16251_16287 = state_16239__$1;
(statearr_16251_16287[(2)] = null);

(statearr_16251_16287[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (21))){
var state_16239__$1 = state_16239;
var statearr_16252_16288 = state_16239__$1;
(statearr_16252_16288[(2)] = null);

(statearr_16252_16288[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (13))){
var inst_16193 = (state_16239[(8)]);
var inst_16192 = (state_16239[(9)]);
var inst_16194 = (state_16239[(11)]);
var inst_16191 = (state_16239[(12)]);
var inst_16201 = (state_16239[(2)]);
var inst_16202 = (inst_16194 + (1));
var tmp16248 = inst_16193;
var tmp16249 = inst_16192;
var tmp16250 = inst_16191;
var inst_16191__$1 = tmp16250;
var inst_16192__$1 = tmp16249;
var inst_16193__$1 = tmp16248;
var inst_16194__$1 = inst_16202;
var state_16239__$1 = (function (){var statearr_16253 = state_16239;
(statearr_16253[(8)] = inst_16193__$1);

(statearr_16253[(9)] = inst_16192__$1);

(statearr_16253[(14)] = inst_16201);

(statearr_16253[(11)] = inst_16194__$1);

(statearr_16253[(12)] = inst_16191__$1);

return statearr_16253;
})();
var statearr_16254_16289 = state_16239__$1;
(statearr_16254_16289[(2)] = null);

(statearr_16254_16289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (22))){
var state_16239__$1 = state_16239;
var statearr_16255_16290 = state_16239__$1;
(statearr_16255_16290[(2)] = null);

(statearr_16255_16290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (6))){
var inst_16180 = (state_16239[(13)]);
var inst_16189 = f.call(null,inst_16180);
var inst_16190 = cljs.core.seq.call(null,inst_16189);
var inst_16191 = inst_16190;
var inst_16192 = null;
var inst_16193 = (0);
var inst_16194 = (0);
var state_16239__$1 = (function (){var statearr_16256 = state_16239;
(statearr_16256[(8)] = inst_16193);

(statearr_16256[(9)] = inst_16192);

(statearr_16256[(11)] = inst_16194);

(statearr_16256[(12)] = inst_16191);

return statearr_16256;
})();
var statearr_16257_16291 = state_16239__$1;
(statearr_16257_16291[(2)] = null);

(statearr_16257_16291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (17))){
var inst_16205 = (state_16239[(7)]);
var inst_16209 = cljs.core.chunk_first.call(null,inst_16205);
var inst_16210 = cljs.core.chunk_rest.call(null,inst_16205);
var inst_16211 = cljs.core.count.call(null,inst_16209);
var inst_16191 = inst_16210;
var inst_16192 = inst_16209;
var inst_16193 = inst_16211;
var inst_16194 = (0);
var state_16239__$1 = (function (){var statearr_16258 = state_16239;
(statearr_16258[(8)] = inst_16193);

(statearr_16258[(9)] = inst_16192);

(statearr_16258[(11)] = inst_16194);

(statearr_16258[(12)] = inst_16191);

return statearr_16258;
})();
var statearr_16259_16292 = state_16239__$1;
(statearr_16259_16292[(2)] = null);

(statearr_16259_16292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (3))){
var inst_16237 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16239__$1,inst_16237);
} else {
if((state_val_16240 === (12))){
var inst_16225 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
var statearr_16260_16293 = state_16239__$1;
(statearr_16260_16293[(2)] = inst_16225);

(statearr_16260_16293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (2))){
var state_16239__$1 = state_16239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16239__$1,(4),in$);
} else {
if((state_val_16240 === (23))){
var inst_16233 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
var statearr_16261_16294 = state_16239__$1;
(statearr_16261_16294[(2)] = inst_16233);

(statearr_16261_16294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (19))){
var inst_16220 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
var statearr_16262_16295 = state_16239__$1;
(statearr_16262_16295[(2)] = inst_16220);

(statearr_16262_16295[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (11))){
var inst_16205 = (state_16239[(7)]);
var inst_16191 = (state_16239[(12)]);
var inst_16205__$1 = cljs.core.seq.call(null,inst_16191);
var state_16239__$1 = (function (){var statearr_16263 = state_16239;
(statearr_16263[(7)] = inst_16205__$1);

return statearr_16263;
})();
if(inst_16205__$1){
var statearr_16264_16296 = state_16239__$1;
(statearr_16264_16296[(1)] = (14));

} else {
var statearr_16265_16297 = state_16239__$1;
(statearr_16265_16297[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (9))){
var inst_16227 = (state_16239[(2)]);
var inst_16228 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16239__$1 = (function (){var statearr_16266 = state_16239;
(statearr_16266[(15)] = inst_16227);

return statearr_16266;
})();
if(cljs.core.truth_(inst_16228)){
var statearr_16267_16298 = state_16239__$1;
(statearr_16267_16298[(1)] = (21));

} else {
var statearr_16268_16299 = state_16239__$1;
(statearr_16268_16299[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (5))){
var inst_16183 = cljs.core.async.close_BANG_.call(null,out);
var state_16239__$1 = state_16239;
var statearr_16269_16300 = state_16239__$1;
(statearr_16269_16300[(2)] = inst_16183);

(statearr_16269_16300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (14))){
var inst_16205 = (state_16239[(7)]);
var inst_16207 = cljs.core.chunked_seq_QMARK_.call(null,inst_16205);
var state_16239__$1 = state_16239;
if(inst_16207){
var statearr_16270_16301 = state_16239__$1;
(statearr_16270_16301[(1)] = (17));

} else {
var statearr_16271_16302 = state_16239__$1;
(statearr_16271_16302[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (16))){
var inst_16223 = (state_16239[(2)]);
var state_16239__$1 = state_16239;
var statearr_16272_16303 = state_16239__$1;
(statearr_16272_16303[(2)] = inst_16223);

(statearr_16272_16303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16240 === (10))){
var inst_16192 = (state_16239[(9)]);
var inst_16194 = (state_16239[(11)]);
var inst_16199 = cljs.core._nth.call(null,inst_16192,inst_16194);
var state_16239__$1 = state_16239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16239__$1,(13),out,inst_16199);
} else {
if((state_val_16240 === (18))){
var inst_16205 = (state_16239[(7)]);
var inst_16214 = cljs.core.first.call(null,inst_16205);
var state_16239__$1 = state_16239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16239__$1,(20),out,inst_16214);
} else {
if((state_val_16240 === (8))){
var inst_16193 = (state_16239[(8)]);
var inst_16194 = (state_16239[(11)]);
var inst_16196 = (inst_16194 < inst_16193);
var inst_16197 = inst_16196;
var state_16239__$1 = state_16239;
if(cljs.core.truth_(inst_16197)){
var statearr_16273_16304 = state_16239__$1;
(statearr_16273_16304[(1)] = (10));

} else {
var statearr_16274_16305 = state_16239__$1;
(statearr_16274_16305[(1)] = (11));

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
var statearr_16278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16278[(0)] = state_machine__6581__auto__);

(statearr_16278[(1)] = (1));

return statearr_16278;
});
var state_machine__6581__auto____1 = (function (state_16239){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_16239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e16279){if((e16279 instanceof Object)){
var ex__6584__auto__ = e16279;
var statearr_16280_16306 = state_16239;
(statearr_16280_16306[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16307 = state_16239;
state_16239 = G__16307;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_16239){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_16239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto__))
})();
var state__6647__auto__ = (function (){var statearr_16281 = f__6646__auto__.call(null);
(statearr_16281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto__);

return statearr_16281;
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
var c__6645__auto___16402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___16402){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___16402){
return (function (state_16378){
var state_val_16379 = (state_16378[(1)]);
if((state_val_16379 === (7))){
var inst_16374 = (state_16378[(2)]);
var state_16378__$1 = state_16378;
var statearr_16380_16403 = state_16378__$1;
(statearr_16380_16403[(2)] = inst_16374);

(statearr_16380_16403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16379 === (1))){
var state_16378__$1 = state_16378;
var statearr_16381_16404 = state_16378__$1;
(statearr_16381_16404[(2)] = null);

(statearr_16381_16404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16379 === (4))){
var inst_16357 = (state_16378[(7)]);
var inst_16357__$1 = (state_16378[(2)]);
var inst_16358 = (inst_16357__$1 == null);
var state_16378__$1 = (function (){var statearr_16382 = state_16378;
(statearr_16382[(7)] = inst_16357__$1);

return statearr_16382;
})();
if(cljs.core.truth_(inst_16358)){
var statearr_16383_16405 = state_16378__$1;
(statearr_16383_16405[(1)] = (5));

} else {
var statearr_16384_16406 = state_16378__$1;
(statearr_16384_16406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16379 === (13))){
var state_16378__$1 = state_16378;
var statearr_16385_16407 = state_16378__$1;
(statearr_16385_16407[(2)] = null);

(statearr_16385_16407[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16379 === (6))){
var inst_16357 = (state_16378[(7)]);
var state_16378__$1 = state_16378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16378__$1,(11),to,inst_16357);
} else {
if((state_val_16379 === (3))){
var inst_16376 = (state_16378[(2)]);
var state_16378__$1 = state_16378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16378__$1,inst_16376);
} else {
if((state_val_16379 === (12))){
var state_16378__$1 = state_16378;
var statearr_16386_16408 = state_16378__$1;
(statearr_16386_16408[(2)] = null);

(statearr_16386_16408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16379 === (2))){
var state_16378__$1 = state_16378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16378__$1,(4),from);
} else {
if((state_val_16379 === (11))){
var inst_16367 = (state_16378[(2)]);
var state_16378__$1 = state_16378;
if(cljs.core.truth_(inst_16367)){
var statearr_16387_16409 = state_16378__$1;
(statearr_16387_16409[(1)] = (12));

} else {
var statearr_16388_16410 = state_16378__$1;
(statearr_16388_16410[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16379 === (9))){
var state_16378__$1 = state_16378;
var statearr_16389_16411 = state_16378__$1;
(statearr_16389_16411[(2)] = null);

(statearr_16389_16411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16379 === (5))){
var state_16378__$1 = state_16378;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16390_16412 = state_16378__$1;
(statearr_16390_16412[(1)] = (8));

} else {
var statearr_16391_16413 = state_16378__$1;
(statearr_16391_16413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16379 === (14))){
var inst_16372 = (state_16378[(2)]);
var state_16378__$1 = state_16378;
var statearr_16392_16414 = state_16378__$1;
(statearr_16392_16414[(2)] = inst_16372);

(statearr_16392_16414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16379 === (10))){
var inst_16364 = (state_16378[(2)]);
var state_16378__$1 = state_16378;
var statearr_16393_16415 = state_16378__$1;
(statearr_16393_16415[(2)] = inst_16364);

(statearr_16393_16415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16379 === (8))){
var inst_16361 = cljs.core.async.close_BANG_.call(null,to);
var state_16378__$1 = state_16378;
var statearr_16394_16416 = state_16378__$1;
(statearr_16394_16416[(2)] = inst_16361);

(statearr_16394_16416[(1)] = (10));


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
});})(c__6645__auto___16402))
;
return ((function (switch__6580__auto__,c__6645__auto___16402){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_16398 = [null,null,null,null,null,null,null,null];
(statearr_16398[(0)] = state_machine__6581__auto__);

(statearr_16398[(1)] = (1));

return statearr_16398;
});
var state_machine__6581__auto____1 = (function (state_16378){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_16378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e16399){if((e16399 instanceof Object)){
var ex__6584__auto__ = e16399;
var statearr_16400_16417 = state_16378;
(statearr_16400_16417[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16418 = state_16378;
state_16378 = G__16418;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_16378){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_16378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___16402))
})();
var state__6647__auto__ = (function (){var statearr_16401 = f__6646__auto__.call(null);
(statearr_16401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___16402);

return statearr_16401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___16402))
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
var c__6645__auto___16519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___16519,tc,fc){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___16519,tc,fc){
return (function (state_16494){
var state_val_16495 = (state_16494[(1)]);
if((state_val_16495 === (7))){
var inst_16490 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16496_16520 = state_16494__$1;
(statearr_16496_16520[(2)] = inst_16490);

(statearr_16496_16520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (1))){
var state_16494__$1 = state_16494;
var statearr_16497_16521 = state_16494__$1;
(statearr_16497_16521[(2)] = null);

(statearr_16497_16521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (4))){
var inst_16471 = (state_16494[(7)]);
var inst_16471__$1 = (state_16494[(2)]);
var inst_16472 = (inst_16471__$1 == null);
var state_16494__$1 = (function (){var statearr_16498 = state_16494;
(statearr_16498[(7)] = inst_16471__$1);

return statearr_16498;
})();
if(cljs.core.truth_(inst_16472)){
var statearr_16499_16522 = state_16494__$1;
(statearr_16499_16522[(1)] = (5));

} else {
var statearr_16500_16523 = state_16494__$1;
(statearr_16500_16523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (13))){
var state_16494__$1 = state_16494;
var statearr_16501_16524 = state_16494__$1;
(statearr_16501_16524[(2)] = null);

(statearr_16501_16524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (6))){
var inst_16471 = (state_16494[(7)]);
var inst_16477 = p.call(null,inst_16471);
var state_16494__$1 = state_16494;
if(cljs.core.truth_(inst_16477)){
var statearr_16502_16525 = state_16494__$1;
(statearr_16502_16525[(1)] = (9));

} else {
var statearr_16503_16526 = state_16494__$1;
(statearr_16503_16526[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (3))){
var inst_16492 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16494__$1,inst_16492);
} else {
if((state_val_16495 === (12))){
var state_16494__$1 = state_16494;
var statearr_16504_16527 = state_16494__$1;
(statearr_16504_16527[(2)] = null);

(statearr_16504_16527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (2))){
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16494__$1,(4),ch);
} else {
if((state_val_16495 === (11))){
var inst_16471 = (state_16494[(7)]);
var inst_16481 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16494__$1,(8),inst_16481,inst_16471);
} else {
if((state_val_16495 === (9))){
var state_16494__$1 = state_16494;
var statearr_16505_16528 = state_16494__$1;
(statearr_16505_16528[(2)] = tc);

(statearr_16505_16528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (5))){
var inst_16474 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16475 = cljs.core.async.close_BANG_.call(null,fc);
var state_16494__$1 = (function (){var statearr_16506 = state_16494;
(statearr_16506[(8)] = inst_16474);

return statearr_16506;
})();
var statearr_16507_16529 = state_16494__$1;
(statearr_16507_16529[(2)] = inst_16475);

(statearr_16507_16529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (14))){
var inst_16488 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16508_16530 = state_16494__$1;
(statearr_16508_16530[(2)] = inst_16488);

(statearr_16508_16530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (10))){
var state_16494__$1 = state_16494;
var statearr_16509_16531 = state_16494__$1;
(statearr_16509_16531[(2)] = fc);

(statearr_16509_16531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (8))){
var inst_16483 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
if(cljs.core.truth_(inst_16483)){
var statearr_16510_16532 = state_16494__$1;
(statearr_16510_16532[(1)] = (12));

} else {
var statearr_16511_16533 = state_16494__$1;
(statearr_16511_16533[(1)] = (13));

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
});})(c__6645__auto___16519,tc,fc))
;
return ((function (switch__6580__auto__,c__6645__auto___16519,tc,fc){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_16515 = [null,null,null,null,null,null,null,null,null];
(statearr_16515[(0)] = state_machine__6581__auto__);

(statearr_16515[(1)] = (1));

return statearr_16515;
});
var state_machine__6581__auto____1 = (function (state_16494){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_16494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e16516){if((e16516 instanceof Object)){
var ex__6584__auto__ = e16516;
var statearr_16517_16534 = state_16494;
(statearr_16517_16534[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16535 = state_16494;
state_16494 = G__16535;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_16494){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_16494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___16519,tc,fc))
})();
var state__6647__auto__ = (function (){var statearr_16518 = f__6646__auto__.call(null);
(statearr_16518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___16519);

return statearr_16518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___16519,tc,fc))
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
return (function (state_16582){
var state_val_16583 = (state_16582[(1)]);
if((state_val_16583 === (7))){
var inst_16578 = (state_16582[(2)]);
var state_16582__$1 = state_16582;
var statearr_16584_16600 = state_16582__$1;
(statearr_16584_16600[(2)] = inst_16578);

(statearr_16584_16600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (6))){
var inst_16568 = (state_16582[(7)]);
var inst_16571 = (state_16582[(8)]);
var inst_16575 = f.call(null,inst_16568,inst_16571);
var inst_16568__$1 = inst_16575;
var state_16582__$1 = (function (){var statearr_16585 = state_16582;
(statearr_16585[(7)] = inst_16568__$1);

return statearr_16585;
})();
var statearr_16586_16601 = state_16582__$1;
(statearr_16586_16601[(2)] = null);

(statearr_16586_16601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (5))){
var inst_16568 = (state_16582[(7)]);
var state_16582__$1 = state_16582;
var statearr_16587_16602 = state_16582__$1;
(statearr_16587_16602[(2)] = inst_16568);

(statearr_16587_16602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (4))){
var inst_16571 = (state_16582[(8)]);
var inst_16571__$1 = (state_16582[(2)]);
var inst_16572 = (inst_16571__$1 == null);
var state_16582__$1 = (function (){var statearr_16588 = state_16582;
(statearr_16588[(8)] = inst_16571__$1);

return statearr_16588;
})();
if(cljs.core.truth_(inst_16572)){
var statearr_16589_16603 = state_16582__$1;
(statearr_16589_16603[(1)] = (5));

} else {
var statearr_16590_16604 = state_16582__$1;
(statearr_16590_16604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (3))){
var inst_16580 = (state_16582[(2)]);
var state_16582__$1 = state_16582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16582__$1,inst_16580);
} else {
if((state_val_16583 === (2))){
var state_16582__$1 = state_16582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16582__$1,(4),ch);
} else {
if((state_val_16583 === (1))){
var inst_16568 = init;
var state_16582__$1 = (function (){var statearr_16591 = state_16582;
(statearr_16591[(7)] = inst_16568);

return statearr_16591;
})();
var statearr_16592_16605 = state_16582__$1;
(statearr_16592_16605[(2)] = null);

(statearr_16592_16605[(1)] = (2));


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
var statearr_16596 = [null,null,null,null,null,null,null,null,null];
(statearr_16596[(0)] = state_machine__6581__auto__);

(statearr_16596[(1)] = (1));

return statearr_16596;
});
var state_machine__6581__auto____1 = (function (state_16582){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_16582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e16597){if((e16597 instanceof Object)){
var ex__6584__auto__ = e16597;
var statearr_16598_16606 = state_16582;
(statearr_16598_16606[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16607 = state_16582;
state_16582 = G__16607;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_16582){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_16582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto__))
})();
var state__6647__auto__ = (function (){var statearr_16599 = f__6646__auto__.call(null);
(statearr_16599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto__);

return statearr_16599;
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
return (function (state_16681){
var state_val_16682 = (state_16681[(1)]);
if((state_val_16682 === (7))){
var inst_16663 = (state_16681[(2)]);
var state_16681__$1 = state_16681;
var statearr_16683_16706 = state_16681__$1;
(statearr_16683_16706[(2)] = inst_16663);

(statearr_16683_16706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (1))){
var inst_16657 = cljs.core.seq.call(null,coll);
var inst_16658 = inst_16657;
var state_16681__$1 = (function (){var statearr_16684 = state_16681;
(statearr_16684[(7)] = inst_16658);

return statearr_16684;
})();
var statearr_16685_16707 = state_16681__$1;
(statearr_16685_16707[(2)] = null);

(statearr_16685_16707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (4))){
var inst_16658 = (state_16681[(7)]);
var inst_16661 = cljs.core.first.call(null,inst_16658);
var state_16681__$1 = state_16681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16681__$1,(7),ch,inst_16661);
} else {
if((state_val_16682 === (13))){
var inst_16675 = (state_16681[(2)]);
var state_16681__$1 = state_16681;
var statearr_16686_16708 = state_16681__$1;
(statearr_16686_16708[(2)] = inst_16675);

(statearr_16686_16708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (6))){
var inst_16666 = (state_16681[(2)]);
var state_16681__$1 = state_16681;
if(cljs.core.truth_(inst_16666)){
var statearr_16687_16709 = state_16681__$1;
(statearr_16687_16709[(1)] = (8));

} else {
var statearr_16688_16710 = state_16681__$1;
(statearr_16688_16710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (3))){
var inst_16679 = (state_16681[(2)]);
var state_16681__$1 = state_16681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16681__$1,inst_16679);
} else {
if((state_val_16682 === (12))){
var state_16681__$1 = state_16681;
var statearr_16689_16711 = state_16681__$1;
(statearr_16689_16711[(2)] = null);

(statearr_16689_16711[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (2))){
var inst_16658 = (state_16681[(7)]);
var state_16681__$1 = state_16681;
if(cljs.core.truth_(inst_16658)){
var statearr_16690_16712 = state_16681__$1;
(statearr_16690_16712[(1)] = (4));

} else {
var statearr_16691_16713 = state_16681__$1;
(statearr_16691_16713[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (11))){
var inst_16672 = cljs.core.async.close_BANG_.call(null,ch);
var state_16681__$1 = state_16681;
var statearr_16692_16714 = state_16681__$1;
(statearr_16692_16714[(2)] = inst_16672);

(statearr_16692_16714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (9))){
var state_16681__$1 = state_16681;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16693_16715 = state_16681__$1;
(statearr_16693_16715[(1)] = (11));

} else {
var statearr_16694_16716 = state_16681__$1;
(statearr_16694_16716[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (5))){
var inst_16658 = (state_16681[(7)]);
var state_16681__$1 = state_16681;
var statearr_16695_16717 = state_16681__$1;
(statearr_16695_16717[(2)] = inst_16658);

(statearr_16695_16717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (10))){
var inst_16677 = (state_16681[(2)]);
var state_16681__$1 = state_16681;
var statearr_16696_16718 = state_16681__$1;
(statearr_16696_16718[(2)] = inst_16677);

(statearr_16696_16718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (8))){
var inst_16658 = (state_16681[(7)]);
var inst_16668 = cljs.core.next.call(null,inst_16658);
var inst_16658__$1 = inst_16668;
var state_16681__$1 = (function (){var statearr_16697 = state_16681;
(statearr_16697[(7)] = inst_16658__$1);

return statearr_16697;
})();
var statearr_16698_16719 = state_16681__$1;
(statearr_16698_16719[(2)] = null);

(statearr_16698_16719[(1)] = (2));


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
var statearr_16702 = [null,null,null,null,null,null,null,null];
(statearr_16702[(0)] = state_machine__6581__auto__);

(statearr_16702[(1)] = (1));

return statearr_16702;
});
var state_machine__6581__auto____1 = (function (state_16681){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_16681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e16703){if((e16703 instanceof Object)){
var ex__6584__auto__ = e16703;
var statearr_16704_16720 = state_16681;
(statearr_16704_16720[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16721 = state_16681;
state_16681 = G__16721;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_16681){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_16681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto__))
})();
var state__6647__auto__ = (function (){var statearr_16705 = f__6646__auto__.call(null);
(statearr_16705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto__);

return statearr_16705;
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

cljs.core.async.Mux = (function (){var obj16723 = {};
return obj16723;
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


cljs.core.async.Mult = (function (){var obj16725 = {};
return obj16725;
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
if(typeof cljs.core.async.t16947 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16947 = (function (cs,ch,mult,meta16948){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16948 = meta16948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16947.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t16947.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t16947.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t16947.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t16947.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t16947.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t16947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16949){
var self__ = this;
var _16949__$1 = this;
return self__.meta16948;
});})(cs))
;

cljs.core.async.t16947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16949,meta16948__$1){
var self__ = this;
var _16949__$1 = this;
return (new cljs.core.async.t16947(self__.cs,self__.ch,self__.mult,meta16948__$1));
});})(cs))
;

cljs.core.async.t16947.cljs$lang$type = true;

cljs.core.async.t16947.cljs$lang$ctorStr = "cljs.core.async/t16947";

cljs.core.async.t16947.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t16947");
});})(cs))
;

cljs.core.async.__GT_t16947 = ((function (cs){
return (function __GT_t16947(cs__$1,ch__$1,mult__$1,meta16948){
return (new cljs.core.async.t16947(cs__$1,ch__$1,mult__$1,meta16948));
});})(cs))
;

}

return (new cljs.core.async.t16947(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),443,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),436,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/g72/-ytkm87/out/cljs/core/async.cljs"], null)));
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
var c__6645__auto___17168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___17168,cs,m,dchan,dctr,done){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___17168,cs,m,dchan,dctr,done){
return (function (state_17080){
var state_val_17081 = (state_17080[(1)]);
if((state_val_17081 === (7))){
var inst_17076 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
var statearr_17082_17169 = state_17080__$1;
(statearr_17082_17169[(2)] = inst_17076);

(statearr_17082_17169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (20))){
var inst_16981 = (state_17080[(7)]);
var inst_16991 = cljs.core.first.call(null,inst_16981);
var inst_16992 = cljs.core.nth.call(null,inst_16991,(0),null);
var inst_16993 = cljs.core.nth.call(null,inst_16991,(1),null);
var state_17080__$1 = (function (){var statearr_17083 = state_17080;
(statearr_17083[(8)] = inst_16992);

return statearr_17083;
})();
if(cljs.core.truth_(inst_16993)){
var statearr_17084_17170 = state_17080__$1;
(statearr_17084_17170[(1)] = (22));

} else {
var statearr_17085_17171 = state_17080__$1;
(statearr_17085_17171[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (27))){
var inst_17021 = (state_17080[(9)]);
var inst_17023 = (state_17080[(10)]);
var inst_17028 = (state_17080[(11)]);
var inst_16952 = (state_17080[(12)]);
var inst_17028__$1 = cljs.core._nth.call(null,inst_17021,inst_17023);
var inst_17029 = cljs.core.async.put_BANG_.call(null,inst_17028__$1,inst_16952,done);
var state_17080__$1 = (function (){var statearr_17086 = state_17080;
(statearr_17086[(11)] = inst_17028__$1);

return statearr_17086;
})();
if(cljs.core.truth_(inst_17029)){
var statearr_17087_17172 = state_17080__$1;
(statearr_17087_17172[(1)] = (30));

} else {
var statearr_17088_17173 = state_17080__$1;
(statearr_17088_17173[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (1))){
var state_17080__$1 = state_17080;
var statearr_17089_17174 = state_17080__$1;
(statearr_17089_17174[(2)] = null);

(statearr_17089_17174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (24))){
var inst_16981 = (state_17080[(7)]);
var inst_16998 = (state_17080[(2)]);
var inst_16999 = cljs.core.next.call(null,inst_16981);
var inst_16961 = inst_16999;
var inst_16962 = null;
var inst_16963 = (0);
var inst_16964 = (0);
var state_17080__$1 = (function (){var statearr_17090 = state_17080;
(statearr_17090[(13)] = inst_16961);

(statearr_17090[(14)] = inst_16998);

(statearr_17090[(15)] = inst_16963);

(statearr_17090[(16)] = inst_16962);

(statearr_17090[(17)] = inst_16964);

return statearr_17090;
})();
var statearr_17091_17175 = state_17080__$1;
(statearr_17091_17175[(2)] = null);

(statearr_17091_17175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (39))){
var state_17080__$1 = state_17080;
var statearr_17095_17176 = state_17080__$1;
(statearr_17095_17176[(2)] = null);

(statearr_17095_17176[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (4))){
var inst_16952 = (state_17080[(12)]);
var inst_16952__$1 = (state_17080[(2)]);
var inst_16953 = (inst_16952__$1 == null);
var state_17080__$1 = (function (){var statearr_17096 = state_17080;
(statearr_17096[(12)] = inst_16952__$1);

return statearr_17096;
})();
if(cljs.core.truth_(inst_16953)){
var statearr_17097_17177 = state_17080__$1;
(statearr_17097_17177[(1)] = (5));

} else {
var statearr_17098_17178 = state_17080__$1;
(statearr_17098_17178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (15))){
var inst_16961 = (state_17080[(13)]);
var inst_16963 = (state_17080[(15)]);
var inst_16962 = (state_17080[(16)]);
var inst_16964 = (state_17080[(17)]);
var inst_16977 = (state_17080[(2)]);
var inst_16978 = (inst_16964 + (1));
var tmp17092 = inst_16961;
var tmp17093 = inst_16963;
var tmp17094 = inst_16962;
var inst_16961__$1 = tmp17092;
var inst_16962__$1 = tmp17094;
var inst_16963__$1 = tmp17093;
var inst_16964__$1 = inst_16978;
var state_17080__$1 = (function (){var statearr_17099 = state_17080;
(statearr_17099[(13)] = inst_16961__$1);

(statearr_17099[(18)] = inst_16977);

(statearr_17099[(15)] = inst_16963__$1);

(statearr_17099[(16)] = inst_16962__$1);

(statearr_17099[(17)] = inst_16964__$1);

return statearr_17099;
})();
var statearr_17100_17179 = state_17080__$1;
(statearr_17100_17179[(2)] = null);

(statearr_17100_17179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (21))){
var inst_17002 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
var statearr_17104_17180 = state_17080__$1;
(statearr_17104_17180[(2)] = inst_17002);

(statearr_17104_17180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (31))){
var inst_17028 = (state_17080[(11)]);
var inst_17032 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_17033 = cljs.core.async.untap_STAR_.call(null,m,inst_17028);
var state_17080__$1 = (function (){var statearr_17105 = state_17080;
(statearr_17105[(19)] = inst_17032);

return statearr_17105;
})();
var statearr_17106_17181 = state_17080__$1;
(statearr_17106_17181[(2)] = inst_17033);

(statearr_17106_17181[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (32))){
var inst_17021 = (state_17080[(9)]);
var inst_17022 = (state_17080[(20)]);
var inst_17023 = (state_17080[(10)]);
var inst_17020 = (state_17080[(21)]);
var inst_17035 = (state_17080[(2)]);
var inst_17036 = (inst_17023 + (1));
var tmp17101 = inst_17021;
var tmp17102 = inst_17022;
var tmp17103 = inst_17020;
var inst_17020__$1 = tmp17103;
var inst_17021__$1 = tmp17101;
var inst_17022__$1 = tmp17102;
var inst_17023__$1 = inst_17036;
var state_17080__$1 = (function (){var statearr_17107 = state_17080;
(statearr_17107[(9)] = inst_17021__$1);

(statearr_17107[(20)] = inst_17022__$1);

(statearr_17107[(10)] = inst_17023__$1);

(statearr_17107[(21)] = inst_17020__$1);

(statearr_17107[(22)] = inst_17035);

return statearr_17107;
})();
var statearr_17108_17182 = state_17080__$1;
(statearr_17108_17182[(2)] = null);

(statearr_17108_17182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (40))){
var inst_17048 = (state_17080[(23)]);
var inst_17052 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var inst_17053 = cljs.core.async.untap_STAR_.call(null,m,inst_17048);
var state_17080__$1 = (function (){var statearr_17109 = state_17080;
(statearr_17109[(24)] = inst_17052);

return statearr_17109;
})();
var statearr_17110_17183 = state_17080__$1;
(statearr_17110_17183[(2)] = inst_17053);

(statearr_17110_17183[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (33))){
var inst_17039 = (state_17080[(25)]);
var inst_17041 = cljs.core.chunked_seq_QMARK_.call(null,inst_17039);
var state_17080__$1 = state_17080;
if(inst_17041){
var statearr_17111_17184 = state_17080__$1;
(statearr_17111_17184[(1)] = (36));

} else {
var statearr_17112_17185 = state_17080__$1;
(statearr_17112_17185[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (13))){
var inst_16971 = (state_17080[(26)]);
var inst_16974 = cljs.core.async.close_BANG_.call(null,inst_16971);
var state_17080__$1 = state_17080;
var statearr_17113_17186 = state_17080__$1;
(statearr_17113_17186[(2)] = inst_16974);

(statearr_17113_17186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (22))){
var inst_16992 = (state_17080[(8)]);
var inst_16995 = cljs.core.async.close_BANG_.call(null,inst_16992);
var state_17080__$1 = state_17080;
var statearr_17114_17187 = state_17080__$1;
(statearr_17114_17187[(2)] = inst_16995);

(statearr_17114_17187[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (36))){
var inst_17039 = (state_17080[(25)]);
var inst_17043 = cljs.core.chunk_first.call(null,inst_17039);
var inst_17044 = cljs.core.chunk_rest.call(null,inst_17039);
var inst_17045 = cljs.core.count.call(null,inst_17043);
var inst_17020 = inst_17044;
var inst_17021 = inst_17043;
var inst_17022 = inst_17045;
var inst_17023 = (0);
var state_17080__$1 = (function (){var statearr_17115 = state_17080;
(statearr_17115[(9)] = inst_17021);

(statearr_17115[(20)] = inst_17022);

(statearr_17115[(10)] = inst_17023);

(statearr_17115[(21)] = inst_17020);

return statearr_17115;
})();
var statearr_17116_17188 = state_17080__$1;
(statearr_17116_17188[(2)] = null);

(statearr_17116_17188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (41))){
var inst_17039 = (state_17080[(25)]);
var inst_17055 = (state_17080[(2)]);
var inst_17056 = cljs.core.next.call(null,inst_17039);
var inst_17020 = inst_17056;
var inst_17021 = null;
var inst_17022 = (0);
var inst_17023 = (0);
var state_17080__$1 = (function (){var statearr_17117 = state_17080;
(statearr_17117[(9)] = inst_17021);

(statearr_17117[(20)] = inst_17022);

(statearr_17117[(10)] = inst_17023);

(statearr_17117[(27)] = inst_17055);

(statearr_17117[(21)] = inst_17020);

return statearr_17117;
})();
var statearr_17118_17189 = state_17080__$1;
(statearr_17118_17189[(2)] = null);

(statearr_17118_17189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (43))){
var state_17080__$1 = state_17080;
var statearr_17119_17190 = state_17080__$1;
(statearr_17119_17190[(2)] = null);

(statearr_17119_17190[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (29))){
var inst_17064 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
var statearr_17120_17191 = state_17080__$1;
(statearr_17120_17191[(2)] = inst_17064);

(statearr_17120_17191[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (44))){
var inst_17073 = (state_17080[(2)]);
var state_17080__$1 = (function (){var statearr_17121 = state_17080;
(statearr_17121[(28)] = inst_17073);

return statearr_17121;
})();
var statearr_17122_17192 = state_17080__$1;
(statearr_17122_17192[(2)] = null);

(statearr_17122_17192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (6))){
var inst_17012 = (state_17080[(29)]);
var inst_17011 = cljs.core.deref.call(null,cs);
var inst_17012__$1 = cljs.core.keys.call(null,inst_17011);
var inst_17013 = cljs.core.count.call(null,inst_17012__$1);
var inst_17014 = cljs.core.reset_BANG_.call(null,dctr,inst_17013);
var inst_17019 = cljs.core.seq.call(null,inst_17012__$1);
var inst_17020 = inst_17019;
var inst_17021 = null;
var inst_17022 = (0);
var inst_17023 = (0);
var state_17080__$1 = (function (){var statearr_17123 = state_17080;
(statearr_17123[(9)] = inst_17021);

(statearr_17123[(20)] = inst_17022);

(statearr_17123[(10)] = inst_17023);

(statearr_17123[(30)] = inst_17014);

(statearr_17123[(21)] = inst_17020);

(statearr_17123[(29)] = inst_17012__$1);

return statearr_17123;
})();
var statearr_17124_17193 = state_17080__$1;
(statearr_17124_17193[(2)] = null);

(statearr_17124_17193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (28))){
var inst_17039 = (state_17080[(25)]);
var inst_17020 = (state_17080[(21)]);
var inst_17039__$1 = cljs.core.seq.call(null,inst_17020);
var state_17080__$1 = (function (){var statearr_17125 = state_17080;
(statearr_17125[(25)] = inst_17039__$1);

return statearr_17125;
})();
if(inst_17039__$1){
var statearr_17126_17194 = state_17080__$1;
(statearr_17126_17194[(1)] = (33));

} else {
var statearr_17127_17195 = state_17080__$1;
(statearr_17127_17195[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (25))){
var inst_17022 = (state_17080[(20)]);
var inst_17023 = (state_17080[(10)]);
var inst_17025 = (inst_17023 < inst_17022);
var inst_17026 = inst_17025;
var state_17080__$1 = state_17080;
if(cljs.core.truth_(inst_17026)){
var statearr_17128_17196 = state_17080__$1;
(statearr_17128_17196[(1)] = (27));

} else {
var statearr_17129_17197 = state_17080__$1;
(statearr_17129_17197[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (34))){
var state_17080__$1 = state_17080;
var statearr_17130_17198 = state_17080__$1;
(statearr_17130_17198[(2)] = null);

(statearr_17130_17198[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (17))){
var state_17080__$1 = state_17080;
var statearr_17131_17199 = state_17080__$1;
(statearr_17131_17199[(2)] = null);

(statearr_17131_17199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (3))){
var inst_17078 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17080__$1,inst_17078);
} else {
if((state_val_17081 === (12))){
var inst_17007 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
var statearr_17132_17200 = state_17080__$1;
(statearr_17132_17200[(2)] = inst_17007);

(statearr_17132_17200[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (2))){
var state_17080__$1 = state_17080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17080__$1,(4),ch);
} else {
if((state_val_17081 === (23))){
var state_17080__$1 = state_17080;
var statearr_17133_17201 = state_17080__$1;
(statearr_17133_17201[(2)] = null);

(statearr_17133_17201[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (35))){
var inst_17062 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
var statearr_17134_17202 = state_17080__$1;
(statearr_17134_17202[(2)] = inst_17062);

(statearr_17134_17202[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (19))){
var inst_16981 = (state_17080[(7)]);
var inst_16985 = cljs.core.chunk_first.call(null,inst_16981);
var inst_16986 = cljs.core.chunk_rest.call(null,inst_16981);
var inst_16987 = cljs.core.count.call(null,inst_16985);
var inst_16961 = inst_16986;
var inst_16962 = inst_16985;
var inst_16963 = inst_16987;
var inst_16964 = (0);
var state_17080__$1 = (function (){var statearr_17135 = state_17080;
(statearr_17135[(13)] = inst_16961);

(statearr_17135[(15)] = inst_16963);

(statearr_17135[(16)] = inst_16962);

(statearr_17135[(17)] = inst_16964);

return statearr_17135;
})();
var statearr_17136_17203 = state_17080__$1;
(statearr_17136_17203[(2)] = null);

(statearr_17136_17203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (11))){
var inst_16961 = (state_17080[(13)]);
var inst_16981 = (state_17080[(7)]);
var inst_16981__$1 = cljs.core.seq.call(null,inst_16961);
var state_17080__$1 = (function (){var statearr_17137 = state_17080;
(statearr_17137[(7)] = inst_16981__$1);

return statearr_17137;
})();
if(inst_16981__$1){
var statearr_17138_17204 = state_17080__$1;
(statearr_17138_17204[(1)] = (16));

} else {
var statearr_17139_17205 = state_17080__$1;
(statearr_17139_17205[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (9))){
var inst_17009 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
var statearr_17140_17206 = state_17080__$1;
(statearr_17140_17206[(2)] = inst_17009);

(statearr_17140_17206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (5))){
var inst_16959 = cljs.core.deref.call(null,cs);
var inst_16960 = cljs.core.seq.call(null,inst_16959);
var inst_16961 = inst_16960;
var inst_16962 = null;
var inst_16963 = (0);
var inst_16964 = (0);
var state_17080__$1 = (function (){var statearr_17141 = state_17080;
(statearr_17141[(13)] = inst_16961);

(statearr_17141[(15)] = inst_16963);

(statearr_17141[(16)] = inst_16962);

(statearr_17141[(17)] = inst_16964);

return statearr_17141;
})();
var statearr_17142_17207 = state_17080__$1;
(statearr_17142_17207[(2)] = null);

(statearr_17142_17207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (14))){
var state_17080__$1 = state_17080;
var statearr_17143_17208 = state_17080__$1;
(statearr_17143_17208[(2)] = null);

(statearr_17143_17208[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (45))){
var inst_17070 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
var statearr_17144_17209 = state_17080__$1;
(statearr_17144_17209[(2)] = inst_17070);

(statearr_17144_17209[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (26))){
var inst_17012 = (state_17080[(29)]);
var inst_17066 = (state_17080[(2)]);
var inst_17067 = cljs.core.seq.call(null,inst_17012);
var state_17080__$1 = (function (){var statearr_17145 = state_17080;
(statearr_17145[(31)] = inst_17066);

return statearr_17145;
})();
if(inst_17067){
var statearr_17146_17210 = state_17080__$1;
(statearr_17146_17210[(1)] = (42));

} else {
var statearr_17147_17211 = state_17080__$1;
(statearr_17147_17211[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (16))){
var inst_16981 = (state_17080[(7)]);
var inst_16983 = cljs.core.chunked_seq_QMARK_.call(null,inst_16981);
var state_17080__$1 = state_17080;
if(inst_16983){
var statearr_17148_17212 = state_17080__$1;
(statearr_17148_17212[(1)] = (19));

} else {
var statearr_17149_17213 = state_17080__$1;
(statearr_17149_17213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (38))){
var inst_17059 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
var statearr_17150_17214 = state_17080__$1;
(statearr_17150_17214[(2)] = inst_17059);

(statearr_17150_17214[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (30))){
var state_17080__$1 = state_17080;
var statearr_17151_17215 = state_17080__$1;
(statearr_17151_17215[(2)] = null);

(statearr_17151_17215[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (10))){
var inst_16962 = (state_17080[(16)]);
var inst_16964 = (state_17080[(17)]);
var inst_16970 = cljs.core._nth.call(null,inst_16962,inst_16964);
var inst_16971 = cljs.core.nth.call(null,inst_16970,(0),null);
var inst_16972 = cljs.core.nth.call(null,inst_16970,(1),null);
var state_17080__$1 = (function (){var statearr_17152 = state_17080;
(statearr_17152[(26)] = inst_16971);

return statearr_17152;
})();
if(cljs.core.truth_(inst_16972)){
var statearr_17153_17216 = state_17080__$1;
(statearr_17153_17216[(1)] = (13));

} else {
var statearr_17154_17217 = state_17080__$1;
(statearr_17154_17217[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (18))){
var inst_17005 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
var statearr_17155_17218 = state_17080__$1;
(statearr_17155_17218[(2)] = inst_17005);

(statearr_17155_17218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (42))){
var state_17080__$1 = state_17080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17080__$1,(45),dchan);
} else {
if((state_val_17081 === (37))){
var inst_16952 = (state_17080[(12)]);
var inst_17039 = (state_17080[(25)]);
var inst_17048 = (state_17080[(23)]);
var inst_17048__$1 = cljs.core.first.call(null,inst_17039);
var inst_17049 = cljs.core.async.put_BANG_.call(null,inst_17048__$1,inst_16952,done);
var state_17080__$1 = (function (){var statearr_17156 = state_17080;
(statearr_17156[(23)] = inst_17048__$1);

return statearr_17156;
})();
if(cljs.core.truth_(inst_17049)){
var statearr_17157_17219 = state_17080__$1;
(statearr_17157_17219[(1)] = (39));

} else {
var statearr_17158_17220 = state_17080__$1;
(statearr_17158_17220[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (8))){
var inst_16963 = (state_17080[(15)]);
var inst_16964 = (state_17080[(17)]);
var inst_16966 = (inst_16964 < inst_16963);
var inst_16967 = inst_16966;
var state_17080__$1 = state_17080;
if(cljs.core.truth_(inst_16967)){
var statearr_17159_17221 = state_17080__$1;
(statearr_17159_17221[(1)] = (10));

} else {
var statearr_17160_17222 = state_17080__$1;
(statearr_17160_17222[(1)] = (11));

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
});})(c__6645__auto___17168,cs,m,dchan,dctr,done))
;
return ((function (switch__6580__auto__,c__6645__auto___17168,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_17164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17164[(0)] = state_machine__6581__auto__);

(statearr_17164[(1)] = (1));

return statearr_17164;
});
var state_machine__6581__auto____1 = (function (state_17080){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_17080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e17165){if((e17165 instanceof Object)){
var ex__6584__auto__ = e17165;
var statearr_17166_17223 = state_17080;
(statearr_17166_17223[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17224 = state_17080;
state_17080 = G__17224;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_17080){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_17080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___17168,cs,m,dchan,dctr,done))
})();
var state__6647__auto__ = (function (){var statearr_17167 = f__6646__auto__.call(null);
(statearr_17167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___17168);

return statearr_17167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___17168,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj17226 = {};
return obj17226;
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
if(typeof cljs.core.async.t17346 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17346 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17347){
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
this.meta17347 = meta17347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17346.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t17346.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17346.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17346.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17346.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17346.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t17346.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17348){
var self__ = this;
var _17348__$1 = this;
return self__.meta17347;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17348,meta17347__$1){
var self__ = this;
var _17348__$1 = this;
return (new cljs.core.async.t17346(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17347__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17346.cljs$lang$type = true;

cljs.core.async.t17346.cljs$lang$ctorStr = "cljs.core.async/t17346";

cljs.core.async.t17346.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t17346");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t17346 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17346(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17347){
return (new cljs.core.async.t17346(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17347));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t17346(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),545,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),534,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/g72/-ytkm87/out/cljs/core/async.cljs"], null)));
})()
;
var c__6645__auto___17465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___17465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___17465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17418){
var state_val_17419 = (state_17418[(1)]);
if((state_val_17419 === (7))){
var inst_17362 = (state_17418[(7)]);
var inst_17367 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17362);
var state_17418__$1 = state_17418;
var statearr_17420_17466 = state_17418__$1;
(statearr_17420_17466[(2)] = inst_17367);

(statearr_17420_17466[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (20))){
var inst_17377 = (state_17418[(8)]);
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17418__$1,(23),out,inst_17377);
} else {
if((state_val_17419 === (1))){
var inst_17352 = (state_17418[(9)]);
var inst_17352__$1 = calc_state.call(null);
var inst_17353 = cljs.core.seq_QMARK_.call(null,inst_17352__$1);
var state_17418__$1 = (function (){var statearr_17421 = state_17418;
(statearr_17421[(9)] = inst_17352__$1);

return statearr_17421;
})();
if(inst_17353){
var statearr_17422_17467 = state_17418__$1;
(statearr_17422_17467[(1)] = (2));

} else {
var statearr_17423_17468 = state_17418__$1;
(statearr_17423_17468[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (24))){
var inst_17370 = (state_17418[(10)]);
var inst_17362 = inst_17370;
var state_17418__$1 = (function (){var statearr_17424 = state_17418;
(statearr_17424[(7)] = inst_17362);

return statearr_17424;
})();
var statearr_17425_17469 = state_17418__$1;
(statearr_17425_17469[(2)] = null);

(statearr_17425_17469[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (4))){
var inst_17352 = (state_17418[(9)]);
var inst_17358 = (state_17418[(2)]);
var inst_17359 = cljs.core.get.call(null,inst_17358,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17360 = cljs.core.get.call(null,inst_17358,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17361 = cljs.core.get.call(null,inst_17358,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17362 = inst_17352;
var state_17418__$1 = (function (){var statearr_17426 = state_17418;
(statearr_17426[(11)] = inst_17361);

(statearr_17426[(7)] = inst_17362);

(statearr_17426[(12)] = inst_17359);

(statearr_17426[(13)] = inst_17360);

return statearr_17426;
})();
var statearr_17427_17470 = state_17418__$1;
(statearr_17427_17470[(2)] = null);

(statearr_17427_17470[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (15))){
var state_17418__$1 = state_17418;
var statearr_17428_17471 = state_17418__$1;
(statearr_17428_17471[(2)] = null);

(statearr_17428_17471[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (21))){
var inst_17370 = (state_17418[(10)]);
var inst_17362 = inst_17370;
var state_17418__$1 = (function (){var statearr_17429 = state_17418;
(statearr_17429[(7)] = inst_17362);

return statearr_17429;
})();
var statearr_17430_17472 = state_17418__$1;
(statearr_17430_17472[(2)] = null);

(statearr_17430_17472[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (13))){
var inst_17414 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17431_17473 = state_17418__$1;
(statearr_17431_17473[(2)] = inst_17414);

(statearr_17431_17473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (22))){
var inst_17412 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17432_17474 = state_17418__$1;
(statearr_17432_17474[(2)] = inst_17412);

(statearr_17432_17474[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (6))){
var inst_17416 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17418__$1,inst_17416);
} else {
if((state_val_17419 === (25))){
var state_17418__$1 = state_17418;
var statearr_17433_17475 = state_17418__$1;
(statearr_17433_17475[(2)] = null);

(statearr_17433_17475[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (17))){
var inst_17392 = (state_17418[(14)]);
var state_17418__$1 = state_17418;
var statearr_17434_17476 = state_17418__$1;
(statearr_17434_17476[(2)] = inst_17392);

(statearr_17434_17476[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (3))){
var inst_17352 = (state_17418[(9)]);
var state_17418__$1 = state_17418;
var statearr_17435_17477 = state_17418__$1;
(statearr_17435_17477[(2)] = inst_17352);

(statearr_17435_17477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (12))){
var inst_17373 = (state_17418[(15)]);
var inst_17392 = (state_17418[(14)]);
var inst_17378 = (state_17418[(16)]);
var inst_17392__$1 = inst_17373.call(null,inst_17378);
var state_17418__$1 = (function (){var statearr_17436 = state_17418;
(statearr_17436[(14)] = inst_17392__$1);

return statearr_17436;
})();
if(cljs.core.truth_(inst_17392__$1)){
var statearr_17437_17478 = state_17418__$1;
(statearr_17437_17478[(1)] = (17));

} else {
var statearr_17438_17479 = state_17418__$1;
(statearr_17438_17479[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (2))){
var inst_17352 = (state_17418[(9)]);
var inst_17355 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17352);
var state_17418__$1 = state_17418;
var statearr_17439_17480 = state_17418__$1;
(statearr_17439_17480[(2)] = inst_17355);

(statearr_17439_17480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (23))){
var inst_17403 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
if(cljs.core.truth_(inst_17403)){
var statearr_17440_17481 = state_17418__$1;
(statearr_17440_17481[(1)] = (24));

} else {
var statearr_17441_17482 = state_17418__$1;
(statearr_17441_17482[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (19))){
var inst_17400 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
if(cljs.core.truth_(inst_17400)){
var statearr_17442_17483 = state_17418__$1;
(statearr_17442_17483[(1)] = (20));

} else {
var statearr_17443_17484 = state_17418__$1;
(statearr_17443_17484[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (11))){
var inst_17377 = (state_17418[(8)]);
var inst_17383 = (inst_17377 == null);
var state_17418__$1 = state_17418;
if(cljs.core.truth_(inst_17383)){
var statearr_17444_17485 = state_17418__$1;
(statearr_17444_17485[(1)] = (14));

} else {
var statearr_17445_17486 = state_17418__$1;
(statearr_17445_17486[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (9))){
var inst_17370 = (state_17418[(10)]);
var inst_17370__$1 = (state_17418[(2)]);
var inst_17371 = cljs.core.get.call(null,inst_17370__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17372 = cljs.core.get.call(null,inst_17370__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17373 = cljs.core.get.call(null,inst_17370__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_17418__$1 = (function (){var statearr_17446 = state_17418;
(statearr_17446[(15)] = inst_17373);

(statearr_17446[(17)] = inst_17372);

(statearr_17446[(10)] = inst_17370__$1);

return statearr_17446;
})();
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17418__$1,(10),inst_17371);
} else {
if((state_val_17419 === (5))){
var inst_17362 = (state_17418[(7)]);
var inst_17365 = cljs.core.seq_QMARK_.call(null,inst_17362);
var state_17418__$1 = state_17418;
if(inst_17365){
var statearr_17447_17487 = state_17418__$1;
(statearr_17447_17487[(1)] = (7));

} else {
var statearr_17448_17488 = state_17418__$1;
(statearr_17448_17488[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (14))){
var inst_17378 = (state_17418[(16)]);
var inst_17385 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17378);
var state_17418__$1 = state_17418;
var statearr_17449_17489 = state_17418__$1;
(statearr_17449_17489[(2)] = inst_17385);

(statearr_17449_17489[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (26))){
var inst_17408 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17450_17490 = state_17418__$1;
(statearr_17450_17490[(2)] = inst_17408);

(statearr_17450_17490[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (16))){
var inst_17388 = (state_17418[(2)]);
var inst_17389 = calc_state.call(null);
var inst_17362 = inst_17389;
var state_17418__$1 = (function (){var statearr_17451 = state_17418;
(statearr_17451[(18)] = inst_17388);

(statearr_17451[(7)] = inst_17362);

return statearr_17451;
})();
var statearr_17452_17491 = state_17418__$1;
(statearr_17452_17491[(2)] = null);

(statearr_17452_17491[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (10))){
var inst_17377 = (state_17418[(8)]);
var inst_17378 = (state_17418[(16)]);
var inst_17376 = (state_17418[(2)]);
var inst_17377__$1 = cljs.core.nth.call(null,inst_17376,(0),null);
var inst_17378__$1 = cljs.core.nth.call(null,inst_17376,(1),null);
var inst_17379 = (inst_17377__$1 == null);
var inst_17380 = cljs.core._EQ_.call(null,inst_17378__$1,change);
var inst_17381 = (inst_17379) || (inst_17380);
var state_17418__$1 = (function (){var statearr_17453 = state_17418;
(statearr_17453[(8)] = inst_17377__$1);

(statearr_17453[(16)] = inst_17378__$1);

return statearr_17453;
})();
if(cljs.core.truth_(inst_17381)){
var statearr_17454_17492 = state_17418__$1;
(statearr_17454_17492[(1)] = (11));

} else {
var statearr_17455_17493 = state_17418__$1;
(statearr_17455_17493[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (18))){
var inst_17373 = (state_17418[(15)]);
var inst_17378 = (state_17418[(16)]);
var inst_17372 = (state_17418[(17)]);
var inst_17395 = cljs.core.empty_QMARK_.call(null,inst_17373);
var inst_17396 = inst_17372.call(null,inst_17378);
var inst_17397 = cljs.core.not.call(null,inst_17396);
var inst_17398 = (inst_17395) && (inst_17397);
var state_17418__$1 = state_17418;
var statearr_17456_17494 = state_17418__$1;
(statearr_17456_17494[(2)] = inst_17398);

(statearr_17456_17494[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17419 === (8))){
var inst_17362 = (state_17418[(7)]);
var state_17418__$1 = state_17418;
var statearr_17457_17495 = state_17418__$1;
(statearr_17457_17495[(2)] = inst_17362);

(statearr_17457_17495[(1)] = (9));


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
});})(c__6645__auto___17465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6580__auto__,c__6645__auto___17465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_17461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17461[(0)] = state_machine__6581__auto__);

(statearr_17461[(1)] = (1));

return statearr_17461;
});
var state_machine__6581__auto____1 = (function (state_17418){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_17418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e17462){if((e17462 instanceof Object)){
var ex__6584__auto__ = e17462;
var statearr_17463_17496 = state_17418;
(statearr_17463_17496[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17497 = state_17418;
state_17418 = G__17497;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_17418){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_17418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___17465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6647__auto__ = (function (){var statearr_17464 = f__6646__auto__.call(null);
(statearr_17464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___17465);

return statearr_17464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___17465,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj17499 = {};
return obj17499;
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
return (function (p1__17500_SHARP_){
if(cljs.core.truth_(p1__17500_SHARP_.call(null,topic))){
return p1__17500_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17500_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3553__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t17615 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17615 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17616){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17616 = meta17616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17615.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t17615.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t17615.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t17615.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t17615.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t17615.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17615.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t17615.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17617){
var self__ = this;
var _17617__$1 = this;
return self__.meta17616;
});})(mults,ensure_mult))
;

cljs.core.async.t17615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17617,meta17616__$1){
var self__ = this;
var _17617__$1 = this;
return (new cljs.core.async.t17615(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17616__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t17615.cljs$lang$type = true;

cljs.core.async.t17615.cljs$lang$ctorStr = "cljs.core.async/t17615";

cljs.core.async.t17615.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4140__auto__,writer__4141__auto__,opt__4142__auto__){
return cljs.core._write.call(null,writer__4141__auto__,"cljs.core.async/t17615");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t17615 = ((function (mults,ensure_mult){
return (function __GT_t17615(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17616){
return (new cljs.core.async.t17615(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17616));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t17615(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),638,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),626,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/g72/-ytkm87/out/cljs/core/async.cljs"], null)));
})()
;
var c__6645__auto___17729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___17729,mults,ensure_mult,p){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___17729,mults,ensure_mult,p){
return (function (state_17685){
var state_val_17686 = (state_17685[(1)]);
if((state_val_17686 === (7))){
var inst_17681 = (state_17685[(2)]);
var state_17685__$1 = state_17685;
var statearr_17687_17730 = state_17685__$1;
(statearr_17687_17730[(2)] = inst_17681);

(statearr_17687_17730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (20))){
var state_17685__$1 = state_17685;
var statearr_17688_17731 = state_17685__$1;
(statearr_17688_17731[(2)] = null);

(statearr_17688_17731[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (1))){
var state_17685__$1 = state_17685;
var statearr_17689_17732 = state_17685__$1;
(statearr_17689_17732[(2)] = null);

(statearr_17689_17732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (4))){
var inst_17620 = (state_17685[(7)]);
var inst_17620__$1 = (state_17685[(2)]);
var inst_17621 = (inst_17620__$1 == null);
var state_17685__$1 = (function (){var statearr_17690 = state_17685;
(statearr_17690[(7)] = inst_17620__$1);

return statearr_17690;
})();
if(cljs.core.truth_(inst_17621)){
var statearr_17691_17733 = state_17685__$1;
(statearr_17691_17733[(1)] = (5));

} else {
var statearr_17692_17734 = state_17685__$1;
(statearr_17692_17734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (15))){
var inst_17662 = (state_17685[(2)]);
var state_17685__$1 = state_17685;
var statearr_17693_17735 = state_17685__$1;
(statearr_17693_17735[(2)] = inst_17662);

(statearr_17693_17735[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (21))){
var inst_17668 = (state_17685[(8)]);
var inst_17676 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17668);
var state_17685__$1 = state_17685;
var statearr_17694_17736 = state_17685__$1;
(statearr_17694_17736[(2)] = inst_17676);

(statearr_17694_17736[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (13))){
var inst_17644 = (state_17685[(9)]);
var inst_17646 = cljs.core.chunked_seq_QMARK_.call(null,inst_17644);
var state_17685__$1 = state_17685;
if(inst_17646){
var statearr_17695_17737 = state_17685__$1;
(statearr_17695_17737[(1)] = (16));

} else {
var statearr_17696_17738 = state_17685__$1;
(statearr_17696_17738[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (22))){
var inst_17678 = (state_17685[(2)]);
var state_17685__$1 = (function (){var statearr_17697 = state_17685;
(statearr_17697[(10)] = inst_17678);

return statearr_17697;
})();
var statearr_17698_17739 = state_17685__$1;
(statearr_17698_17739[(2)] = null);

(statearr_17698_17739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (6))){
var inst_17620 = (state_17685[(7)]);
var inst_17668 = (state_17685[(8)]);
var inst_17668__$1 = topic_fn.call(null,inst_17620);
var inst_17669 = cljs.core.deref.call(null,mults);
var inst_17670 = cljs.core.get.call(null,inst_17669,inst_17668__$1);
var inst_17671 = cljs.core.async.muxch_STAR_.call(null,inst_17670);
var state_17685__$1 = (function (){var statearr_17699 = state_17685;
(statearr_17699[(8)] = inst_17668__$1);

return statearr_17699;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17685__$1,(19),inst_17671,inst_17620);
} else {
if((state_val_17686 === (17))){
var inst_17644 = (state_17685[(9)]);
var inst_17653 = cljs.core.first.call(null,inst_17644);
var inst_17654 = cljs.core.async.muxch_STAR_.call(null,inst_17653);
var inst_17655 = cljs.core.async.close_BANG_.call(null,inst_17654);
var inst_17656 = cljs.core.next.call(null,inst_17644);
var inst_17630 = inst_17656;
var inst_17631 = null;
var inst_17632 = (0);
var inst_17633 = (0);
var state_17685__$1 = (function (){var statearr_17700 = state_17685;
(statearr_17700[(11)] = inst_17632);

(statearr_17700[(12)] = inst_17630);

(statearr_17700[(13)] = inst_17631);

(statearr_17700[(14)] = inst_17633);

(statearr_17700[(15)] = inst_17655);

return statearr_17700;
})();
var statearr_17701_17740 = state_17685__$1;
(statearr_17701_17740[(2)] = null);

(statearr_17701_17740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (3))){
var inst_17683 = (state_17685[(2)]);
var state_17685__$1 = state_17685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17685__$1,inst_17683);
} else {
if((state_val_17686 === (12))){
var inst_17664 = (state_17685[(2)]);
var state_17685__$1 = state_17685;
var statearr_17702_17741 = state_17685__$1;
(statearr_17702_17741[(2)] = inst_17664);

(statearr_17702_17741[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (2))){
var state_17685__$1 = state_17685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17685__$1,(4),ch);
} else {
if((state_val_17686 === (19))){
var inst_17673 = (state_17685[(2)]);
var state_17685__$1 = state_17685;
if(cljs.core.truth_(inst_17673)){
var statearr_17703_17742 = state_17685__$1;
(statearr_17703_17742[(1)] = (20));

} else {
var statearr_17704_17743 = state_17685__$1;
(statearr_17704_17743[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (11))){
var inst_17630 = (state_17685[(12)]);
var inst_17644 = (state_17685[(9)]);
var inst_17644__$1 = cljs.core.seq.call(null,inst_17630);
var state_17685__$1 = (function (){var statearr_17705 = state_17685;
(statearr_17705[(9)] = inst_17644__$1);

return statearr_17705;
})();
if(inst_17644__$1){
var statearr_17706_17744 = state_17685__$1;
(statearr_17706_17744[(1)] = (13));

} else {
var statearr_17707_17745 = state_17685__$1;
(statearr_17707_17745[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (9))){
var inst_17666 = (state_17685[(2)]);
var state_17685__$1 = state_17685;
var statearr_17708_17746 = state_17685__$1;
(statearr_17708_17746[(2)] = inst_17666);

(statearr_17708_17746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (5))){
var inst_17627 = cljs.core.deref.call(null,mults);
var inst_17628 = cljs.core.vals.call(null,inst_17627);
var inst_17629 = cljs.core.seq.call(null,inst_17628);
var inst_17630 = inst_17629;
var inst_17631 = null;
var inst_17632 = (0);
var inst_17633 = (0);
var state_17685__$1 = (function (){var statearr_17709 = state_17685;
(statearr_17709[(11)] = inst_17632);

(statearr_17709[(12)] = inst_17630);

(statearr_17709[(13)] = inst_17631);

(statearr_17709[(14)] = inst_17633);

return statearr_17709;
})();
var statearr_17710_17747 = state_17685__$1;
(statearr_17710_17747[(2)] = null);

(statearr_17710_17747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (14))){
var state_17685__$1 = state_17685;
var statearr_17714_17748 = state_17685__$1;
(statearr_17714_17748[(2)] = null);

(statearr_17714_17748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (16))){
var inst_17644 = (state_17685[(9)]);
var inst_17648 = cljs.core.chunk_first.call(null,inst_17644);
var inst_17649 = cljs.core.chunk_rest.call(null,inst_17644);
var inst_17650 = cljs.core.count.call(null,inst_17648);
var inst_17630 = inst_17649;
var inst_17631 = inst_17648;
var inst_17632 = inst_17650;
var inst_17633 = (0);
var state_17685__$1 = (function (){var statearr_17715 = state_17685;
(statearr_17715[(11)] = inst_17632);

(statearr_17715[(12)] = inst_17630);

(statearr_17715[(13)] = inst_17631);

(statearr_17715[(14)] = inst_17633);

return statearr_17715;
})();
var statearr_17716_17749 = state_17685__$1;
(statearr_17716_17749[(2)] = null);

(statearr_17716_17749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (10))){
var inst_17632 = (state_17685[(11)]);
var inst_17630 = (state_17685[(12)]);
var inst_17631 = (state_17685[(13)]);
var inst_17633 = (state_17685[(14)]);
var inst_17638 = cljs.core._nth.call(null,inst_17631,inst_17633);
var inst_17639 = cljs.core.async.muxch_STAR_.call(null,inst_17638);
var inst_17640 = cljs.core.async.close_BANG_.call(null,inst_17639);
var inst_17641 = (inst_17633 + (1));
var tmp17711 = inst_17632;
var tmp17712 = inst_17630;
var tmp17713 = inst_17631;
var inst_17630__$1 = tmp17712;
var inst_17631__$1 = tmp17713;
var inst_17632__$1 = tmp17711;
var inst_17633__$1 = inst_17641;
var state_17685__$1 = (function (){var statearr_17717 = state_17685;
(statearr_17717[(16)] = inst_17640);

(statearr_17717[(11)] = inst_17632__$1);

(statearr_17717[(12)] = inst_17630__$1);

(statearr_17717[(13)] = inst_17631__$1);

(statearr_17717[(14)] = inst_17633__$1);

return statearr_17717;
})();
var statearr_17718_17750 = state_17685__$1;
(statearr_17718_17750[(2)] = null);

(statearr_17718_17750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (18))){
var inst_17659 = (state_17685[(2)]);
var state_17685__$1 = state_17685;
var statearr_17719_17751 = state_17685__$1;
(statearr_17719_17751[(2)] = inst_17659);

(statearr_17719_17751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17686 === (8))){
var inst_17632 = (state_17685[(11)]);
var inst_17633 = (state_17685[(14)]);
var inst_17635 = (inst_17633 < inst_17632);
var inst_17636 = inst_17635;
var state_17685__$1 = state_17685;
if(cljs.core.truth_(inst_17636)){
var statearr_17720_17752 = state_17685__$1;
(statearr_17720_17752[(1)] = (10));

} else {
var statearr_17721_17753 = state_17685__$1;
(statearr_17721_17753[(1)] = (11));

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
});})(c__6645__auto___17729,mults,ensure_mult,p))
;
return ((function (switch__6580__auto__,c__6645__auto___17729,mults,ensure_mult,p){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_17725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17725[(0)] = state_machine__6581__auto__);

(statearr_17725[(1)] = (1));

return statearr_17725;
});
var state_machine__6581__auto____1 = (function (state_17685){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_17685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e17726){if((e17726 instanceof Object)){
var ex__6584__auto__ = e17726;
var statearr_17727_17754 = state_17685;
(statearr_17727_17754[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17755 = state_17685;
state_17685 = G__17755;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_17685){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_17685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___17729,mults,ensure_mult,p))
})();
var state__6647__auto__ = (function (){var statearr_17728 = f__6646__auto__.call(null);
(statearr_17728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___17729);

return statearr_17728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___17729,mults,ensure_mult,p))
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
var c__6645__auto___17892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___17892,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___17892,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17862){
var state_val_17863 = (state_17862[(1)]);
if((state_val_17863 === (7))){
var state_17862__$1 = state_17862;
var statearr_17864_17893 = state_17862__$1;
(statearr_17864_17893[(2)] = null);

(statearr_17864_17893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (1))){
var state_17862__$1 = state_17862;
var statearr_17865_17894 = state_17862__$1;
(statearr_17865_17894[(2)] = null);

(statearr_17865_17894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (4))){
var inst_17826 = (state_17862[(7)]);
var inst_17828 = (inst_17826 < cnt);
var state_17862__$1 = state_17862;
if(cljs.core.truth_(inst_17828)){
var statearr_17866_17895 = state_17862__$1;
(statearr_17866_17895[(1)] = (6));

} else {
var statearr_17867_17896 = state_17862__$1;
(statearr_17867_17896[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (15))){
var inst_17858 = (state_17862[(2)]);
var state_17862__$1 = state_17862;
var statearr_17868_17897 = state_17862__$1;
(statearr_17868_17897[(2)] = inst_17858);

(statearr_17868_17897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (13))){
var inst_17851 = cljs.core.async.close_BANG_.call(null,out);
var state_17862__$1 = state_17862;
var statearr_17869_17898 = state_17862__$1;
(statearr_17869_17898[(2)] = inst_17851);

(statearr_17869_17898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (6))){
var state_17862__$1 = state_17862;
var statearr_17870_17899 = state_17862__$1;
(statearr_17870_17899[(2)] = null);

(statearr_17870_17899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (3))){
var inst_17860 = (state_17862[(2)]);
var state_17862__$1 = state_17862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17862__$1,inst_17860);
} else {
if((state_val_17863 === (12))){
var inst_17848 = (state_17862[(8)]);
var inst_17848__$1 = (state_17862[(2)]);
var inst_17849 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17848__$1);
var state_17862__$1 = (function (){var statearr_17871 = state_17862;
(statearr_17871[(8)] = inst_17848__$1);

return statearr_17871;
})();
if(cljs.core.truth_(inst_17849)){
var statearr_17872_17900 = state_17862__$1;
(statearr_17872_17900[(1)] = (13));

} else {
var statearr_17873_17901 = state_17862__$1;
(statearr_17873_17901[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (2))){
var inst_17825 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17826 = (0);
var state_17862__$1 = (function (){var statearr_17874 = state_17862;
(statearr_17874[(7)] = inst_17826);

(statearr_17874[(9)] = inst_17825);

return statearr_17874;
})();
var statearr_17875_17902 = state_17862__$1;
(statearr_17875_17902[(2)] = null);

(statearr_17875_17902[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (11))){
var inst_17826 = (state_17862[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17862,(10),Object,null,(9));
var inst_17835 = chs__$1.call(null,inst_17826);
var inst_17836 = done.call(null,inst_17826);
var inst_17837 = cljs.core.async.take_BANG_.call(null,inst_17835,inst_17836);
var state_17862__$1 = state_17862;
var statearr_17876_17903 = state_17862__$1;
(statearr_17876_17903[(2)] = inst_17837);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17862__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (9))){
var inst_17826 = (state_17862[(7)]);
var inst_17839 = (state_17862[(2)]);
var inst_17840 = (inst_17826 + (1));
var inst_17826__$1 = inst_17840;
var state_17862__$1 = (function (){var statearr_17877 = state_17862;
(statearr_17877[(7)] = inst_17826__$1);

(statearr_17877[(10)] = inst_17839);

return statearr_17877;
})();
var statearr_17878_17904 = state_17862__$1;
(statearr_17878_17904[(2)] = null);

(statearr_17878_17904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (5))){
var inst_17846 = (state_17862[(2)]);
var state_17862__$1 = (function (){var statearr_17879 = state_17862;
(statearr_17879[(11)] = inst_17846);

return statearr_17879;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17862__$1,(12),dchan);
} else {
if((state_val_17863 === (14))){
var inst_17848 = (state_17862[(8)]);
var inst_17853 = cljs.core.apply.call(null,f,inst_17848);
var state_17862__$1 = state_17862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17862__$1,(16),out,inst_17853);
} else {
if((state_val_17863 === (16))){
var inst_17855 = (state_17862[(2)]);
var state_17862__$1 = (function (){var statearr_17880 = state_17862;
(statearr_17880[(12)] = inst_17855);

return statearr_17880;
})();
var statearr_17881_17905 = state_17862__$1;
(statearr_17881_17905[(2)] = null);

(statearr_17881_17905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (10))){
var inst_17830 = (state_17862[(2)]);
var inst_17831 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17862__$1 = (function (){var statearr_17882 = state_17862;
(statearr_17882[(13)] = inst_17830);

return statearr_17882;
})();
var statearr_17883_17906 = state_17862__$1;
(statearr_17883_17906[(2)] = inst_17831);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17862__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17863 === (8))){
var inst_17844 = (state_17862[(2)]);
var state_17862__$1 = state_17862;
var statearr_17884_17907 = state_17862__$1;
(statearr_17884_17907[(2)] = inst_17844);

(statearr_17884_17907[(1)] = (5));


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
});})(c__6645__auto___17892,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6580__auto__,c__6645__auto___17892,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_17888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17888[(0)] = state_machine__6581__auto__);

(statearr_17888[(1)] = (1));

return statearr_17888;
});
var state_machine__6581__auto____1 = (function (state_17862){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_17862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e17889){if((e17889 instanceof Object)){
var ex__6584__auto__ = e17889;
var statearr_17890_17908 = state_17862;
(statearr_17890_17908[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17909 = state_17862;
state_17862 = G__17909;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_17862){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_17862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___17892,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6647__auto__ = (function (){var statearr_17891 = f__6646__auto__.call(null);
(statearr_17891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___17892);

return statearr_17891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___17892,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6645__auto___18017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___18017,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___18017,out){
return (function (state_17993){
var state_val_17994 = (state_17993[(1)]);
if((state_val_17994 === (7))){
var inst_17973 = (state_17993[(7)]);
var inst_17972 = (state_17993[(8)]);
var inst_17972__$1 = (state_17993[(2)]);
var inst_17973__$1 = cljs.core.nth.call(null,inst_17972__$1,(0),null);
var inst_17974 = cljs.core.nth.call(null,inst_17972__$1,(1),null);
var inst_17975 = (inst_17973__$1 == null);
var state_17993__$1 = (function (){var statearr_17995 = state_17993;
(statearr_17995[(9)] = inst_17974);

(statearr_17995[(7)] = inst_17973__$1);

(statearr_17995[(8)] = inst_17972__$1);

return statearr_17995;
})();
if(cljs.core.truth_(inst_17975)){
var statearr_17996_18018 = state_17993__$1;
(statearr_17996_18018[(1)] = (8));

} else {
var statearr_17997_18019 = state_17993__$1;
(statearr_17997_18019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17994 === (1))){
var inst_17964 = cljs.core.vec.call(null,chs);
var inst_17965 = inst_17964;
var state_17993__$1 = (function (){var statearr_17998 = state_17993;
(statearr_17998[(10)] = inst_17965);

return statearr_17998;
})();
var statearr_17999_18020 = state_17993__$1;
(statearr_17999_18020[(2)] = null);

(statearr_17999_18020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17994 === (4))){
var inst_17965 = (state_17993[(10)]);
var state_17993__$1 = state_17993;
return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17993__$1,(7),inst_17965);
} else {
if((state_val_17994 === (6))){
var inst_17989 = (state_17993[(2)]);
var state_17993__$1 = state_17993;
var statearr_18000_18021 = state_17993__$1;
(statearr_18000_18021[(2)] = inst_17989);

(statearr_18000_18021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17994 === (3))){
var inst_17991 = (state_17993[(2)]);
var state_17993__$1 = state_17993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17993__$1,inst_17991);
} else {
if((state_val_17994 === (2))){
var inst_17965 = (state_17993[(10)]);
var inst_17967 = cljs.core.count.call(null,inst_17965);
var inst_17968 = (inst_17967 > (0));
var state_17993__$1 = state_17993;
if(cljs.core.truth_(inst_17968)){
var statearr_18002_18022 = state_17993__$1;
(statearr_18002_18022[(1)] = (4));

} else {
var statearr_18003_18023 = state_17993__$1;
(statearr_18003_18023[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17994 === (11))){
var inst_17965 = (state_17993[(10)]);
var inst_17982 = (state_17993[(2)]);
var tmp18001 = inst_17965;
var inst_17965__$1 = tmp18001;
var state_17993__$1 = (function (){var statearr_18004 = state_17993;
(statearr_18004[(11)] = inst_17982);

(statearr_18004[(10)] = inst_17965__$1);

return statearr_18004;
})();
var statearr_18005_18024 = state_17993__$1;
(statearr_18005_18024[(2)] = null);

(statearr_18005_18024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17994 === (9))){
var inst_17973 = (state_17993[(7)]);
var state_17993__$1 = state_17993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17993__$1,(11),out,inst_17973);
} else {
if((state_val_17994 === (5))){
var inst_17987 = cljs.core.async.close_BANG_.call(null,out);
var state_17993__$1 = state_17993;
var statearr_18006_18025 = state_17993__$1;
(statearr_18006_18025[(2)] = inst_17987);

(statearr_18006_18025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17994 === (10))){
var inst_17985 = (state_17993[(2)]);
var state_17993__$1 = state_17993;
var statearr_18007_18026 = state_17993__$1;
(statearr_18007_18026[(2)] = inst_17985);

(statearr_18007_18026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17994 === (8))){
var inst_17974 = (state_17993[(9)]);
var inst_17973 = (state_17993[(7)]);
var inst_17965 = (state_17993[(10)]);
var inst_17972 = (state_17993[(8)]);
var inst_17977 = (function (){var c = inst_17974;
var v = inst_17973;
var vec__17970 = inst_17972;
var cs = inst_17965;
return ((function (c,v,vec__17970,cs,inst_17974,inst_17973,inst_17965,inst_17972,state_val_17994,c__6645__auto___18017,out){
return (function (p1__17910_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17910_SHARP_);
});
;})(c,v,vec__17970,cs,inst_17974,inst_17973,inst_17965,inst_17972,state_val_17994,c__6645__auto___18017,out))
})();
var inst_17978 = cljs.core.filterv.call(null,inst_17977,inst_17965);
var inst_17965__$1 = inst_17978;
var state_17993__$1 = (function (){var statearr_18008 = state_17993;
(statearr_18008[(10)] = inst_17965__$1);

return statearr_18008;
})();
var statearr_18009_18027 = state_17993__$1;
(statearr_18009_18027[(2)] = null);

(statearr_18009_18027[(1)] = (2));


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
});})(c__6645__auto___18017,out))
;
return ((function (switch__6580__auto__,c__6645__auto___18017,out){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_18013 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18013[(0)] = state_machine__6581__auto__);

(statearr_18013[(1)] = (1));

return statearr_18013;
});
var state_machine__6581__auto____1 = (function (state_17993){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_17993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e18014){if((e18014 instanceof Object)){
var ex__6584__auto__ = e18014;
var statearr_18015_18028 = state_17993;
(statearr_18015_18028[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18029 = state_17993;
state_17993 = G__18029;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_17993){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_17993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___18017,out))
})();
var state__6647__auto__ = (function (){var statearr_18016 = f__6646__auto__.call(null);
(statearr_18016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___18017);

return statearr_18016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___18017,out))
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
var c__6645__auto___18122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___18122,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___18122,out){
return (function (state_18099){
var state_val_18100 = (state_18099[(1)]);
if((state_val_18100 === (7))){
var inst_18081 = (state_18099[(7)]);
var inst_18081__$1 = (state_18099[(2)]);
var inst_18082 = (inst_18081__$1 == null);
var inst_18083 = cljs.core.not.call(null,inst_18082);
var state_18099__$1 = (function (){var statearr_18101 = state_18099;
(statearr_18101[(7)] = inst_18081__$1);

return statearr_18101;
})();
if(inst_18083){
var statearr_18102_18123 = state_18099__$1;
(statearr_18102_18123[(1)] = (8));

} else {
var statearr_18103_18124 = state_18099__$1;
(statearr_18103_18124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (1))){
var inst_18076 = (0);
var state_18099__$1 = (function (){var statearr_18104 = state_18099;
(statearr_18104[(8)] = inst_18076);

return statearr_18104;
})();
var statearr_18105_18125 = state_18099__$1;
(statearr_18105_18125[(2)] = null);

(statearr_18105_18125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (4))){
var state_18099__$1 = state_18099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18099__$1,(7),ch);
} else {
if((state_val_18100 === (6))){
var inst_18094 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
var statearr_18106_18126 = state_18099__$1;
(statearr_18106_18126[(2)] = inst_18094);

(statearr_18106_18126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (3))){
var inst_18096 = (state_18099[(2)]);
var inst_18097 = cljs.core.async.close_BANG_.call(null,out);
var state_18099__$1 = (function (){var statearr_18107 = state_18099;
(statearr_18107[(9)] = inst_18096);

return statearr_18107;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18099__$1,inst_18097);
} else {
if((state_val_18100 === (2))){
var inst_18076 = (state_18099[(8)]);
var inst_18078 = (inst_18076 < n);
var state_18099__$1 = state_18099;
if(cljs.core.truth_(inst_18078)){
var statearr_18108_18127 = state_18099__$1;
(statearr_18108_18127[(1)] = (4));

} else {
var statearr_18109_18128 = state_18099__$1;
(statearr_18109_18128[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (11))){
var inst_18076 = (state_18099[(8)]);
var inst_18086 = (state_18099[(2)]);
var inst_18087 = (inst_18076 + (1));
var inst_18076__$1 = inst_18087;
var state_18099__$1 = (function (){var statearr_18110 = state_18099;
(statearr_18110[(8)] = inst_18076__$1);

(statearr_18110[(10)] = inst_18086);

return statearr_18110;
})();
var statearr_18111_18129 = state_18099__$1;
(statearr_18111_18129[(2)] = null);

(statearr_18111_18129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (9))){
var state_18099__$1 = state_18099;
var statearr_18112_18130 = state_18099__$1;
(statearr_18112_18130[(2)] = null);

(statearr_18112_18130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (5))){
var state_18099__$1 = state_18099;
var statearr_18113_18131 = state_18099__$1;
(statearr_18113_18131[(2)] = null);

(statearr_18113_18131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (10))){
var inst_18091 = (state_18099[(2)]);
var state_18099__$1 = state_18099;
var statearr_18114_18132 = state_18099__$1;
(statearr_18114_18132[(2)] = inst_18091);

(statearr_18114_18132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18100 === (8))){
var inst_18081 = (state_18099[(7)]);
var state_18099__$1 = state_18099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18099__$1,(11),out,inst_18081);
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
});})(c__6645__auto___18122,out))
;
return ((function (switch__6580__auto__,c__6645__auto___18122,out){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_18118 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18118[(0)] = state_machine__6581__auto__);

(statearr_18118[(1)] = (1));

return statearr_18118;
});
var state_machine__6581__auto____1 = (function (state_18099){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_18099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e18119){if((e18119 instanceof Object)){
var ex__6584__auto__ = e18119;
var statearr_18120_18133 = state_18099;
(statearr_18120_18133[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18134 = state_18099;
state_18099 = G__18134;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_18099){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_18099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___18122,out))
})();
var state__6647__auto__ = (function (){var statearr_18121 = f__6646__auto__.call(null);
(statearr_18121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___18122);

return statearr_18121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___18122,out))
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
var c__6645__auto___18231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___18231,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___18231,out){
return (function (state_18206){
var state_val_18207 = (state_18206[(1)]);
if((state_val_18207 === (7))){
var inst_18201 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
var statearr_18208_18232 = state_18206__$1;
(statearr_18208_18232[(2)] = inst_18201);

(statearr_18208_18232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (1))){
var inst_18183 = null;
var state_18206__$1 = (function (){var statearr_18209 = state_18206;
(statearr_18209[(7)] = inst_18183);

return statearr_18209;
})();
var statearr_18210_18233 = state_18206__$1;
(statearr_18210_18233[(2)] = null);

(statearr_18210_18233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (4))){
var inst_18186 = (state_18206[(8)]);
var inst_18186__$1 = (state_18206[(2)]);
var inst_18187 = (inst_18186__$1 == null);
var inst_18188 = cljs.core.not.call(null,inst_18187);
var state_18206__$1 = (function (){var statearr_18211 = state_18206;
(statearr_18211[(8)] = inst_18186__$1);

return statearr_18211;
})();
if(inst_18188){
var statearr_18212_18234 = state_18206__$1;
(statearr_18212_18234[(1)] = (5));

} else {
var statearr_18213_18235 = state_18206__$1;
(statearr_18213_18235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (6))){
var state_18206__$1 = state_18206;
var statearr_18214_18236 = state_18206__$1;
(statearr_18214_18236[(2)] = null);

(statearr_18214_18236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (3))){
var inst_18203 = (state_18206[(2)]);
var inst_18204 = cljs.core.async.close_BANG_.call(null,out);
var state_18206__$1 = (function (){var statearr_18215 = state_18206;
(statearr_18215[(9)] = inst_18203);

return statearr_18215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18206__$1,inst_18204);
} else {
if((state_val_18207 === (2))){
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18206__$1,(4),ch);
} else {
if((state_val_18207 === (11))){
var inst_18186 = (state_18206[(8)]);
var inst_18195 = (state_18206[(2)]);
var inst_18183 = inst_18186;
var state_18206__$1 = (function (){var statearr_18216 = state_18206;
(statearr_18216[(7)] = inst_18183);

(statearr_18216[(10)] = inst_18195);

return statearr_18216;
})();
var statearr_18217_18237 = state_18206__$1;
(statearr_18217_18237[(2)] = null);

(statearr_18217_18237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (9))){
var inst_18186 = (state_18206[(8)]);
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18206__$1,(11),out,inst_18186);
} else {
if((state_val_18207 === (5))){
var inst_18183 = (state_18206[(7)]);
var inst_18186 = (state_18206[(8)]);
var inst_18190 = cljs.core._EQ_.call(null,inst_18186,inst_18183);
var state_18206__$1 = state_18206;
if(inst_18190){
var statearr_18219_18238 = state_18206__$1;
(statearr_18219_18238[(1)] = (8));

} else {
var statearr_18220_18239 = state_18206__$1;
(statearr_18220_18239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (10))){
var inst_18198 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
var statearr_18221_18240 = state_18206__$1;
(statearr_18221_18240[(2)] = inst_18198);

(statearr_18221_18240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18207 === (8))){
var inst_18183 = (state_18206[(7)]);
var tmp18218 = inst_18183;
var inst_18183__$1 = tmp18218;
var state_18206__$1 = (function (){var statearr_18222 = state_18206;
(statearr_18222[(7)] = inst_18183__$1);

return statearr_18222;
})();
var statearr_18223_18241 = state_18206__$1;
(statearr_18223_18241[(2)] = null);

(statearr_18223_18241[(1)] = (2));


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
});})(c__6645__auto___18231,out))
;
return ((function (switch__6580__auto__,c__6645__auto___18231,out){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_18227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18227[(0)] = state_machine__6581__auto__);

(statearr_18227[(1)] = (1));

return statearr_18227;
});
var state_machine__6581__auto____1 = (function (state_18206){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_18206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e18228){if((e18228 instanceof Object)){
var ex__6584__auto__ = e18228;
var statearr_18229_18242 = state_18206;
(statearr_18229_18242[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18243 = state_18206;
state_18206 = G__18243;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_18206){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_18206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___18231,out))
})();
var state__6647__auto__ = (function (){var statearr_18230 = f__6646__auto__.call(null);
(statearr_18230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___18231);

return statearr_18230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___18231,out))
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
var c__6645__auto___18378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___18378,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___18378,out){
return (function (state_18348){
var state_val_18349 = (state_18348[(1)]);
if((state_val_18349 === (7))){
var inst_18344 = (state_18348[(2)]);
var state_18348__$1 = state_18348;
var statearr_18350_18379 = state_18348__$1;
(statearr_18350_18379[(2)] = inst_18344);

(statearr_18350_18379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18349 === (1))){
var inst_18311 = (new Array(n));
var inst_18312 = inst_18311;
var inst_18313 = (0);
var state_18348__$1 = (function (){var statearr_18351 = state_18348;
(statearr_18351[(7)] = inst_18312);

(statearr_18351[(8)] = inst_18313);

return statearr_18351;
})();
var statearr_18352_18380 = state_18348__$1;
(statearr_18352_18380[(2)] = null);

(statearr_18352_18380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18349 === (4))){
var inst_18316 = (state_18348[(9)]);
var inst_18316__$1 = (state_18348[(2)]);
var inst_18317 = (inst_18316__$1 == null);
var inst_18318 = cljs.core.not.call(null,inst_18317);
var state_18348__$1 = (function (){var statearr_18353 = state_18348;
(statearr_18353[(9)] = inst_18316__$1);

return statearr_18353;
})();
if(inst_18318){
var statearr_18354_18381 = state_18348__$1;
(statearr_18354_18381[(1)] = (5));

} else {
var statearr_18355_18382 = state_18348__$1;
(statearr_18355_18382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18349 === (15))){
var inst_18338 = (state_18348[(2)]);
var state_18348__$1 = state_18348;
var statearr_18356_18383 = state_18348__$1;
(statearr_18356_18383[(2)] = inst_18338);

(statearr_18356_18383[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18349 === (13))){
var state_18348__$1 = state_18348;
var statearr_18357_18384 = state_18348__$1;
(statearr_18357_18384[(2)] = null);

(statearr_18357_18384[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18349 === (6))){
var inst_18313 = (state_18348[(8)]);
var inst_18334 = (inst_18313 > (0));
var state_18348__$1 = state_18348;
if(cljs.core.truth_(inst_18334)){
var statearr_18358_18385 = state_18348__$1;
(statearr_18358_18385[(1)] = (12));

} else {
var statearr_18359_18386 = state_18348__$1;
(statearr_18359_18386[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18349 === (3))){
var inst_18346 = (state_18348[(2)]);
var state_18348__$1 = state_18348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18348__$1,inst_18346);
} else {
if((state_val_18349 === (12))){
var inst_18312 = (state_18348[(7)]);
var inst_18336 = cljs.core.vec.call(null,inst_18312);
var state_18348__$1 = state_18348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18348__$1,(15),out,inst_18336);
} else {
if((state_val_18349 === (2))){
var state_18348__$1 = state_18348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18348__$1,(4),ch);
} else {
if((state_val_18349 === (11))){
var inst_18328 = (state_18348[(2)]);
var inst_18329 = (new Array(n));
var inst_18312 = inst_18329;
var inst_18313 = (0);
var state_18348__$1 = (function (){var statearr_18360 = state_18348;
(statearr_18360[(7)] = inst_18312);

(statearr_18360[(8)] = inst_18313);

(statearr_18360[(10)] = inst_18328);

return statearr_18360;
})();
var statearr_18361_18387 = state_18348__$1;
(statearr_18361_18387[(2)] = null);

(statearr_18361_18387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18349 === (9))){
var inst_18312 = (state_18348[(7)]);
var inst_18326 = cljs.core.vec.call(null,inst_18312);
var state_18348__$1 = state_18348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18348__$1,(11),out,inst_18326);
} else {
if((state_val_18349 === (5))){
var inst_18321 = (state_18348[(11)]);
var inst_18312 = (state_18348[(7)]);
var inst_18313 = (state_18348[(8)]);
var inst_18316 = (state_18348[(9)]);
var inst_18320 = (inst_18312[inst_18313] = inst_18316);
var inst_18321__$1 = (inst_18313 + (1));
var inst_18322 = (inst_18321__$1 < n);
var state_18348__$1 = (function (){var statearr_18362 = state_18348;
(statearr_18362[(11)] = inst_18321__$1);

(statearr_18362[(12)] = inst_18320);

return statearr_18362;
})();
if(cljs.core.truth_(inst_18322)){
var statearr_18363_18388 = state_18348__$1;
(statearr_18363_18388[(1)] = (8));

} else {
var statearr_18364_18389 = state_18348__$1;
(statearr_18364_18389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18349 === (14))){
var inst_18341 = (state_18348[(2)]);
var inst_18342 = cljs.core.async.close_BANG_.call(null,out);
var state_18348__$1 = (function (){var statearr_18366 = state_18348;
(statearr_18366[(13)] = inst_18341);

return statearr_18366;
})();
var statearr_18367_18390 = state_18348__$1;
(statearr_18367_18390[(2)] = inst_18342);

(statearr_18367_18390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18349 === (10))){
var inst_18332 = (state_18348[(2)]);
var state_18348__$1 = state_18348;
var statearr_18368_18391 = state_18348__$1;
(statearr_18368_18391[(2)] = inst_18332);

(statearr_18368_18391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18349 === (8))){
var inst_18321 = (state_18348[(11)]);
var inst_18312 = (state_18348[(7)]);
var tmp18365 = inst_18312;
var inst_18312__$1 = tmp18365;
var inst_18313 = inst_18321;
var state_18348__$1 = (function (){var statearr_18369 = state_18348;
(statearr_18369[(7)] = inst_18312__$1);

(statearr_18369[(8)] = inst_18313);

return statearr_18369;
})();
var statearr_18370_18392 = state_18348__$1;
(statearr_18370_18392[(2)] = null);

(statearr_18370_18392[(1)] = (2));


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
});})(c__6645__auto___18378,out))
;
return ((function (switch__6580__auto__,c__6645__auto___18378,out){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_18374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18374[(0)] = state_machine__6581__auto__);

(statearr_18374[(1)] = (1));

return statearr_18374;
});
var state_machine__6581__auto____1 = (function (state_18348){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_18348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e18375){if((e18375 instanceof Object)){
var ex__6584__auto__ = e18375;
var statearr_18376_18393 = state_18348;
(statearr_18376_18393[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18394 = state_18348;
state_18348 = G__18394;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_18348){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_18348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___18378,out))
})();
var state__6647__auto__ = (function (){var statearr_18377 = f__6646__auto__.call(null);
(statearr_18377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___18378);

return statearr_18377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___18378,out))
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
var c__6645__auto___18537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto___18537,out){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto___18537,out){
return (function (state_18507){
var state_val_18508 = (state_18507[(1)]);
if((state_val_18508 === (7))){
var inst_18503 = (state_18507[(2)]);
var state_18507__$1 = state_18507;
var statearr_18509_18538 = state_18507__$1;
(statearr_18509_18538[(2)] = inst_18503);

(statearr_18509_18538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18508 === (1))){
var inst_18466 = [];
var inst_18467 = inst_18466;
var inst_18468 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18507__$1 = (function (){var statearr_18510 = state_18507;
(statearr_18510[(7)] = inst_18468);

(statearr_18510[(8)] = inst_18467);

return statearr_18510;
})();
var statearr_18511_18539 = state_18507__$1;
(statearr_18511_18539[(2)] = null);

(statearr_18511_18539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18508 === (4))){
var inst_18471 = (state_18507[(9)]);
var inst_18471__$1 = (state_18507[(2)]);
var inst_18472 = (inst_18471__$1 == null);
var inst_18473 = cljs.core.not.call(null,inst_18472);
var state_18507__$1 = (function (){var statearr_18512 = state_18507;
(statearr_18512[(9)] = inst_18471__$1);

return statearr_18512;
})();
if(inst_18473){
var statearr_18513_18540 = state_18507__$1;
(statearr_18513_18540[(1)] = (5));

} else {
var statearr_18514_18541 = state_18507__$1;
(statearr_18514_18541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18508 === (15))){
var inst_18497 = (state_18507[(2)]);
var state_18507__$1 = state_18507;
var statearr_18515_18542 = state_18507__$1;
(statearr_18515_18542[(2)] = inst_18497);

(statearr_18515_18542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18508 === (13))){
var state_18507__$1 = state_18507;
var statearr_18516_18543 = state_18507__$1;
(statearr_18516_18543[(2)] = null);

(statearr_18516_18543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18508 === (6))){
var inst_18467 = (state_18507[(8)]);
var inst_18492 = inst_18467.length;
var inst_18493 = (inst_18492 > (0));
var state_18507__$1 = state_18507;
if(cljs.core.truth_(inst_18493)){
var statearr_18517_18544 = state_18507__$1;
(statearr_18517_18544[(1)] = (12));

} else {
var statearr_18518_18545 = state_18507__$1;
(statearr_18518_18545[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18508 === (3))){
var inst_18505 = (state_18507[(2)]);
var state_18507__$1 = state_18507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18507__$1,inst_18505);
} else {
if((state_val_18508 === (12))){
var inst_18467 = (state_18507[(8)]);
var inst_18495 = cljs.core.vec.call(null,inst_18467);
var state_18507__$1 = state_18507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18507__$1,(15),out,inst_18495);
} else {
if((state_val_18508 === (2))){
var state_18507__$1 = state_18507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18507__$1,(4),ch);
} else {
if((state_val_18508 === (11))){
var inst_18471 = (state_18507[(9)]);
var inst_18475 = (state_18507[(10)]);
var inst_18485 = (state_18507[(2)]);
var inst_18486 = [];
var inst_18487 = inst_18486.push(inst_18471);
var inst_18467 = inst_18486;
var inst_18468 = inst_18475;
var state_18507__$1 = (function (){var statearr_18519 = state_18507;
(statearr_18519[(11)] = inst_18487);

(statearr_18519[(12)] = inst_18485);

(statearr_18519[(7)] = inst_18468);

(statearr_18519[(8)] = inst_18467);

return statearr_18519;
})();
var statearr_18520_18546 = state_18507__$1;
(statearr_18520_18546[(2)] = null);

(statearr_18520_18546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18508 === (9))){
var inst_18467 = (state_18507[(8)]);
var inst_18483 = cljs.core.vec.call(null,inst_18467);
var state_18507__$1 = state_18507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18507__$1,(11),out,inst_18483);
} else {
if((state_val_18508 === (5))){
var inst_18471 = (state_18507[(9)]);
var inst_18475 = (state_18507[(10)]);
var inst_18468 = (state_18507[(7)]);
var inst_18475__$1 = f.call(null,inst_18471);
var inst_18476 = cljs.core._EQ_.call(null,inst_18475__$1,inst_18468);
var inst_18477 = cljs.core.keyword_identical_QMARK_.call(null,inst_18468,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18478 = (inst_18476) || (inst_18477);
var state_18507__$1 = (function (){var statearr_18521 = state_18507;
(statearr_18521[(10)] = inst_18475__$1);

return statearr_18521;
})();
if(cljs.core.truth_(inst_18478)){
var statearr_18522_18547 = state_18507__$1;
(statearr_18522_18547[(1)] = (8));

} else {
var statearr_18523_18548 = state_18507__$1;
(statearr_18523_18548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18508 === (14))){
var inst_18500 = (state_18507[(2)]);
var inst_18501 = cljs.core.async.close_BANG_.call(null,out);
var state_18507__$1 = (function (){var statearr_18525 = state_18507;
(statearr_18525[(13)] = inst_18500);

return statearr_18525;
})();
var statearr_18526_18549 = state_18507__$1;
(statearr_18526_18549[(2)] = inst_18501);

(statearr_18526_18549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18508 === (10))){
var inst_18490 = (state_18507[(2)]);
var state_18507__$1 = state_18507;
var statearr_18527_18550 = state_18507__$1;
(statearr_18527_18550[(2)] = inst_18490);

(statearr_18527_18550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18508 === (8))){
var inst_18471 = (state_18507[(9)]);
var inst_18475 = (state_18507[(10)]);
var inst_18467 = (state_18507[(8)]);
var inst_18480 = inst_18467.push(inst_18471);
var tmp18524 = inst_18467;
var inst_18467__$1 = tmp18524;
var inst_18468 = inst_18475;
var state_18507__$1 = (function (){var statearr_18528 = state_18507;
(statearr_18528[(7)] = inst_18468);

(statearr_18528[(8)] = inst_18467__$1);

(statearr_18528[(14)] = inst_18480);

return statearr_18528;
})();
var statearr_18529_18551 = state_18507__$1;
(statearr_18529_18551[(2)] = null);

(statearr_18529_18551[(1)] = (2));


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
});})(c__6645__auto___18537,out))
;
return ((function (switch__6580__auto__,c__6645__auto___18537,out){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_18533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18533[(0)] = state_machine__6581__auto__);

(statearr_18533[(1)] = (1));

return statearr_18533;
});
var state_machine__6581__auto____1 = (function (state_18507){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_18507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e18534){if((e18534 instanceof Object)){
var ex__6584__auto__ = e18534;
var statearr_18535_18552 = state_18507;
(statearr_18535_18552[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18553 = state_18507;
state_18507 = G__18553;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_18507){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_18507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto___18537,out))
})();
var state__6647__auto__ = (function (){var statearr_18536 = f__6646__auto__.call(null);
(statearr_18536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___18537);

return statearr_18536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto___18537,out))
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