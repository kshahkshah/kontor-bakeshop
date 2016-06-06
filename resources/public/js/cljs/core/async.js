// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21942 = [];
var len__17829__auto___21948 = arguments.length;
var i__17830__auto___21949 = (0);
while(true){
if((i__17830__auto___21949 < len__17829__auto___21948)){
args21942.push((arguments[i__17830__auto___21949]));

var G__21950 = (i__17830__auto___21949 + (1));
i__17830__auto___21949 = G__21950;
continue;
} else {
}
break;
}

var G__21944 = args21942.length;
switch (G__21944) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21942.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21945 = (function (f,blockable,meta21946){
this.f = f;
this.blockable = blockable;
this.meta21946 = meta21946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21947,meta21946__$1){
var self__ = this;
var _21947__$1 = this;
return (new cljs.core.async.t_cljs$core$async21945(self__.f,self__.blockable,meta21946__$1));
});

cljs.core.async.t_cljs$core$async21945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21947){
var self__ = this;
var _21947__$1 = this;
return self__.meta21946;
});

cljs.core.async.t_cljs$core$async21945.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21945.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21945.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21945.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21946","meta21946",903688946,null)], null);
});

cljs.core.async.t_cljs$core$async21945.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21945";

cljs.core.async.t_cljs$core$async21945.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21945");
});

cljs.core.async.__GT_t_cljs$core$async21945 = (function cljs$core$async$__GT_t_cljs$core$async21945(f__$1,blockable__$1,meta21946){
return (new cljs.core.async.t_cljs$core$async21945(f__$1,blockable__$1,meta21946));
});

}

return (new cljs.core.async.t_cljs$core$async21945(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21954 = [];
var len__17829__auto___21957 = arguments.length;
var i__17830__auto___21958 = (0);
while(true){
if((i__17830__auto___21958 < len__17829__auto___21957)){
args21954.push((arguments[i__17830__auto___21958]));

var G__21959 = (i__17830__auto___21958 + (1));
i__17830__auto___21958 = G__21959;
continue;
} else {
}
break;
}

var G__21956 = args21954.length;
switch (G__21956) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21954.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21961 = [];
var len__17829__auto___21964 = arguments.length;
var i__17830__auto___21965 = (0);
while(true){
if((i__17830__auto___21965 < len__17829__auto___21964)){
args21961.push((arguments[i__17830__auto___21965]));

var G__21966 = (i__17830__auto___21965 + (1));
i__17830__auto___21965 = G__21966;
continue;
} else {
}
break;
}

var G__21963 = args21961.length;
switch (G__21963) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21961.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21968 = [];
var len__17829__auto___21971 = arguments.length;
var i__17830__auto___21972 = (0);
while(true){
if((i__17830__auto___21972 < len__17829__auto___21971)){
args21968.push((arguments[i__17830__auto___21972]));

var G__21973 = (i__17830__auto___21972 + (1));
i__17830__auto___21972 = G__21973;
continue;
} else {
}
break;
}

var G__21970 = args21968.length;
switch (G__21970) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21968.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21975 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21975);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21975,ret){
return (function (){
return fn1.call(null,val_21975);
});})(val_21975,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21976 = [];
var len__17829__auto___21979 = arguments.length;
var i__17830__auto___21980 = (0);
while(true){
if((i__17830__auto___21980 < len__17829__auto___21979)){
args21976.push((arguments[i__17830__auto___21980]));

var G__21981 = (i__17830__auto___21980 + (1));
i__17830__auto___21980 = G__21981;
continue;
} else {
}
break;
}

var G__21978 = args21976.length;
switch (G__21978) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21976.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17674__auto___21983 = n;
var x_21984 = (0);
while(true){
if((x_21984 < n__17674__auto___21983)){
(a[x_21984] = (0));

var G__21985 = (x_21984 + (1));
x_21984 = G__21985;
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

var G__21986 = (i + (1));
i = G__21986;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21990 = (function (alt_flag,flag,meta21991){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21991 = meta21991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21992,meta21991__$1){
var self__ = this;
var _21992__$1 = this;
return (new cljs.core.async.t_cljs$core$async21990(self__.alt_flag,self__.flag,meta21991__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21992){
var self__ = this;
var _21992__$1 = this;
return self__.meta21991;
});})(flag))
;

cljs.core.async.t_cljs$core$async21990.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21990.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21990.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21991","meta21991",1349917557,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21990";

cljs.core.async.t_cljs$core$async21990.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21990");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21990 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21990(alt_flag__$1,flag__$1,meta21991){
return (new cljs.core.async.t_cljs$core$async21990(alt_flag__$1,flag__$1,meta21991));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21990(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21996 = (function (alt_handler,flag,cb,meta21997){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21997 = meta21997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21998,meta21997__$1){
var self__ = this;
var _21998__$1 = this;
return (new cljs.core.async.t_cljs$core$async21996(self__.alt_handler,self__.flag,self__.cb,meta21997__$1));
});

cljs.core.async.t_cljs$core$async21996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21998){
var self__ = this;
var _21998__$1 = this;
return self__.meta21997;
});

cljs.core.async.t_cljs$core$async21996.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21996.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21997","meta21997",1159742543,null)], null);
});

cljs.core.async.t_cljs$core$async21996.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21996";

cljs.core.async.t_cljs$core$async21996.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21996");
});

cljs.core.async.__GT_t_cljs$core$async21996 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21996(alt_handler__$1,flag__$1,cb__$1,meta21997){
return (new cljs.core.async.t_cljs$core$async21996(alt_handler__$1,flag__$1,cb__$1,meta21997));
});

}

return (new cljs.core.async.t_cljs$core$async21996(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__21999_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21999_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22000_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22000_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16771__auto__ = wport;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22001 = (i + (1));
i = G__22001;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16771__auto__ = ret;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16759__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16759__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___22007 = arguments.length;
var i__17830__auto___22008 = (0);
while(true){
if((i__17830__auto___22008 < len__17829__auto___22007)){
args__17836__auto__.push((arguments[i__17830__auto___22008]));

var G__22009 = (i__17830__auto___22008 + (1));
i__17830__auto___22008 = G__22009;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((1) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17837__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22004){
var map__22005 = p__22004;
var map__22005__$1 = ((((!((map__22005 == null)))?((((map__22005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22005):map__22005);
var opts = map__22005__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22002){
var G__22003 = cljs.core.first.call(null,seq22002);
var seq22002__$1 = cljs.core.next.call(null,seq22002);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22003,seq22002__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22010 = [];
var len__17829__auto___22060 = arguments.length;
var i__17830__auto___22061 = (0);
while(true){
if((i__17830__auto___22061 < len__17829__auto___22060)){
args22010.push((arguments[i__17830__auto___22061]));

var G__22062 = (i__17830__auto___22061 + (1));
i__17830__auto___22061 = G__22062;
continue;
} else {
}
break;
}

var G__22012 = args22010.length;
switch (G__22012) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22010.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21897__auto___22064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___22064){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___22064){
return (function (state_22036){
var state_val_22037 = (state_22036[(1)]);
if((state_val_22037 === (7))){
var inst_22032 = (state_22036[(2)]);
var state_22036__$1 = state_22036;
var statearr_22038_22065 = state_22036__$1;
(statearr_22038_22065[(2)] = inst_22032);

(statearr_22038_22065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (1))){
var state_22036__$1 = state_22036;
var statearr_22039_22066 = state_22036__$1;
(statearr_22039_22066[(2)] = null);

(statearr_22039_22066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (4))){
var inst_22015 = (state_22036[(7)]);
var inst_22015__$1 = (state_22036[(2)]);
var inst_22016 = (inst_22015__$1 == null);
var state_22036__$1 = (function (){var statearr_22040 = state_22036;
(statearr_22040[(7)] = inst_22015__$1);

return statearr_22040;
})();
if(cljs.core.truth_(inst_22016)){
var statearr_22041_22067 = state_22036__$1;
(statearr_22041_22067[(1)] = (5));

} else {
var statearr_22042_22068 = state_22036__$1;
(statearr_22042_22068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (13))){
var state_22036__$1 = state_22036;
var statearr_22043_22069 = state_22036__$1;
(statearr_22043_22069[(2)] = null);

(statearr_22043_22069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (6))){
var inst_22015 = (state_22036[(7)]);
var state_22036__$1 = state_22036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22036__$1,(11),to,inst_22015);
} else {
if((state_val_22037 === (3))){
var inst_22034 = (state_22036[(2)]);
var state_22036__$1 = state_22036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22036__$1,inst_22034);
} else {
if((state_val_22037 === (12))){
var state_22036__$1 = state_22036;
var statearr_22044_22070 = state_22036__$1;
(statearr_22044_22070[(2)] = null);

(statearr_22044_22070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (2))){
var state_22036__$1 = state_22036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22036__$1,(4),from);
} else {
if((state_val_22037 === (11))){
var inst_22025 = (state_22036[(2)]);
var state_22036__$1 = state_22036;
if(cljs.core.truth_(inst_22025)){
var statearr_22045_22071 = state_22036__$1;
(statearr_22045_22071[(1)] = (12));

} else {
var statearr_22046_22072 = state_22036__$1;
(statearr_22046_22072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (9))){
var state_22036__$1 = state_22036;
var statearr_22047_22073 = state_22036__$1;
(statearr_22047_22073[(2)] = null);

(statearr_22047_22073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (5))){
var state_22036__$1 = state_22036;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22048_22074 = state_22036__$1;
(statearr_22048_22074[(1)] = (8));

} else {
var statearr_22049_22075 = state_22036__$1;
(statearr_22049_22075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (14))){
var inst_22030 = (state_22036[(2)]);
var state_22036__$1 = state_22036;
var statearr_22050_22076 = state_22036__$1;
(statearr_22050_22076[(2)] = inst_22030);

(statearr_22050_22076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (10))){
var inst_22022 = (state_22036[(2)]);
var state_22036__$1 = state_22036;
var statearr_22051_22077 = state_22036__$1;
(statearr_22051_22077[(2)] = inst_22022);

(statearr_22051_22077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22037 === (8))){
var inst_22019 = cljs.core.async.close_BANG_.call(null,to);
var state_22036__$1 = state_22036;
var statearr_22052_22078 = state_22036__$1;
(statearr_22052_22078[(2)] = inst_22019);

(statearr_22052_22078[(1)] = (10));


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
});})(c__21897__auto___22064))
;
return ((function (switch__21785__auto__,c__21897__auto___22064){
return (function() {
var cljs$core$async$state_machine__21786__auto__ = null;
var cljs$core$async$state_machine__21786__auto____0 = (function (){
var statearr_22056 = [null,null,null,null,null,null,null,null];
(statearr_22056[(0)] = cljs$core$async$state_machine__21786__auto__);

(statearr_22056[(1)] = (1));

return statearr_22056;
});
var cljs$core$async$state_machine__21786__auto____1 = (function (state_22036){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_22036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e22057){if((e22057 instanceof Object)){
var ex__21789__auto__ = e22057;
var statearr_22058_22079 = state_22036;
(statearr_22058_22079[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22080 = state_22036;
state_22036 = G__22080;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$state_machine__21786__auto__ = function(state_22036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21786__auto____1.call(this,state_22036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21786__auto____0;
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21786__auto____1;
return cljs$core$async$state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___22064))
})();
var state__21899__auto__ = (function (){var statearr_22059 = f__21898__auto__.call(null);
(statearr_22059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___22064);

return statearr_22059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___22064))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22264){
var vec__22265 = p__22264;
var v = cljs.core.nth.call(null,vec__22265,(0),null);
var p = cljs.core.nth.call(null,vec__22265,(1),null);
var job = vec__22265;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21897__auto___22447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___22447,res,vec__22265,v,p,job,jobs,results){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___22447,res,vec__22265,v,p,job,jobs,results){
return (function (state_22270){
var state_val_22271 = (state_22270[(1)]);
if((state_val_22271 === (1))){
var state_22270__$1 = state_22270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22270__$1,(2),res,v);
} else {
if((state_val_22271 === (2))){
var inst_22267 = (state_22270[(2)]);
var inst_22268 = cljs.core.async.close_BANG_.call(null,res);
var state_22270__$1 = (function (){var statearr_22272 = state_22270;
(statearr_22272[(7)] = inst_22267);

return statearr_22272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22270__$1,inst_22268);
} else {
return null;
}
}
});})(c__21897__auto___22447,res,vec__22265,v,p,job,jobs,results))
;
return ((function (switch__21785__auto__,c__21897__auto___22447,res,vec__22265,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____0 = (function (){
var statearr_22276 = [null,null,null,null,null,null,null,null];
(statearr_22276[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__);

(statearr_22276[(1)] = (1));

return statearr_22276;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____1 = (function (state_22270){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_22270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e22277){if((e22277 instanceof Object)){
var ex__21789__auto__ = e22277;
var statearr_22278_22448 = state_22270;
(statearr_22278_22448[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22449 = state_22270;
state_22270 = G__22449;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__ = function(state_22270){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____1.call(this,state_22270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___22447,res,vec__22265,v,p,job,jobs,results))
})();
var state__21899__auto__ = (function (){var statearr_22279 = f__21898__auto__.call(null);
(statearr_22279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___22447);

return statearr_22279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___22447,res,vec__22265,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22280){
var vec__22281 = p__22280;
var v = cljs.core.nth.call(null,vec__22281,(0),null);
var p = cljs.core.nth.call(null,vec__22281,(1),null);
var job = vec__22281;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17674__auto___22450 = n;
var __22451 = (0);
while(true){
if((__22451 < n__17674__auto___22450)){
var G__22282_22452 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22282_22452) {
case "compute":
var c__21897__auto___22454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22451,c__21897__auto___22454,G__22282_22452,n__17674__auto___22450,jobs,results,process,async){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (__22451,c__21897__auto___22454,G__22282_22452,n__17674__auto___22450,jobs,results,process,async){
return (function (state_22295){
var state_val_22296 = (state_22295[(1)]);
if((state_val_22296 === (1))){
var state_22295__$1 = state_22295;
var statearr_22297_22455 = state_22295__$1;
(statearr_22297_22455[(2)] = null);

(statearr_22297_22455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22296 === (2))){
var state_22295__$1 = state_22295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22295__$1,(4),jobs);
} else {
if((state_val_22296 === (3))){
var inst_22293 = (state_22295[(2)]);
var state_22295__$1 = state_22295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22295__$1,inst_22293);
} else {
if((state_val_22296 === (4))){
var inst_22285 = (state_22295[(2)]);
var inst_22286 = process.call(null,inst_22285);
var state_22295__$1 = state_22295;
if(cljs.core.truth_(inst_22286)){
var statearr_22298_22456 = state_22295__$1;
(statearr_22298_22456[(1)] = (5));

} else {
var statearr_22299_22457 = state_22295__$1;
(statearr_22299_22457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22296 === (5))){
var state_22295__$1 = state_22295;
var statearr_22300_22458 = state_22295__$1;
(statearr_22300_22458[(2)] = null);

(statearr_22300_22458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22296 === (6))){
var state_22295__$1 = state_22295;
var statearr_22301_22459 = state_22295__$1;
(statearr_22301_22459[(2)] = null);

(statearr_22301_22459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22296 === (7))){
var inst_22291 = (state_22295[(2)]);
var state_22295__$1 = state_22295;
var statearr_22302_22460 = state_22295__$1;
(statearr_22302_22460[(2)] = inst_22291);

(statearr_22302_22460[(1)] = (3));


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
});})(__22451,c__21897__auto___22454,G__22282_22452,n__17674__auto___22450,jobs,results,process,async))
;
return ((function (__22451,switch__21785__auto__,c__21897__auto___22454,G__22282_22452,n__17674__auto___22450,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____0 = (function (){
var statearr_22306 = [null,null,null,null,null,null,null];
(statearr_22306[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__);

(statearr_22306[(1)] = (1));

return statearr_22306;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____1 = (function (state_22295){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_22295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e22307){if((e22307 instanceof Object)){
var ex__21789__auto__ = e22307;
var statearr_22308_22461 = state_22295;
(statearr_22308_22461[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22462 = state_22295;
state_22295 = G__22462;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__ = function(state_22295){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____1.call(this,state_22295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__;
})()
;})(__22451,switch__21785__auto__,c__21897__auto___22454,G__22282_22452,n__17674__auto___22450,jobs,results,process,async))
})();
var state__21899__auto__ = (function (){var statearr_22309 = f__21898__auto__.call(null);
(statearr_22309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___22454);

return statearr_22309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(__22451,c__21897__auto___22454,G__22282_22452,n__17674__auto___22450,jobs,results,process,async))
);


break;
case "async":
var c__21897__auto___22463 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22451,c__21897__auto___22463,G__22282_22452,n__17674__auto___22450,jobs,results,process,async){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (__22451,c__21897__auto___22463,G__22282_22452,n__17674__auto___22450,jobs,results,process,async){
return (function (state_22322){
var state_val_22323 = (state_22322[(1)]);
if((state_val_22323 === (1))){
var state_22322__$1 = state_22322;
var statearr_22324_22464 = state_22322__$1;
(statearr_22324_22464[(2)] = null);

(statearr_22324_22464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (2))){
var state_22322__$1 = state_22322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22322__$1,(4),jobs);
} else {
if((state_val_22323 === (3))){
var inst_22320 = (state_22322[(2)]);
var state_22322__$1 = state_22322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22322__$1,inst_22320);
} else {
if((state_val_22323 === (4))){
var inst_22312 = (state_22322[(2)]);
var inst_22313 = async.call(null,inst_22312);
var state_22322__$1 = state_22322;
if(cljs.core.truth_(inst_22313)){
var statearr_22325_22465 = state_22322__$1;
(statearr_22325_22465[(1)] = (5));

} else {
var statearr_22326_22466 = state_22322__$1;
(statearr_22326_22466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (5))){
var state_22322__$1 = state_22322;
var statearr_22327_22467 = state_22322__$1;
(statearr_22327_22467[(2)] = null);

(statearr_22327_22467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (6))){
var state_22322__$1 = state_22322;
var statearr_22328_22468 = state_22322__$1;
(statearr_22328_22468[(2)] = null);

(statearr_22328_22468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22323 === (7))){
var inst_22318 = (state_22322[(2)]);
var state_22322__$1 = state_22322;
var statearr_22329_22469 = state_22322__$1;
(statearr_22329_22469[(2)] = inst_22318);

(statearr_22329_22469[(1)] = (3));


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
});})(__22451,c__21897__auto___22463,G__22282_22452,n__17674__auto___22450,jobs,results,process,async))
;
return ((function (__22451,switch__21785__auto__,c__21897__auto___22463,G__22282_22452,n__17674__auto___22450,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____0 = (function (){
var statearr_22333 = [null,null,null,null,null,null,null];
(statearr_22333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__);

(statearr_22333[(1)] = (1));

return statearr_22333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____1 = (function (state_22322){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_22322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e22334){if((e22334 instanceof Object)){
var ex__21789__auto__ = e22334;
var statearr_22335_22470 = state_22322;
(statearr_22335_22470[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22471 = state_22322;
state_22322 = G__22471;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__ = function(state_22322){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____1.call(this,state_22322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__;
})()
;})(__22451,switch__21785__auto__,c__21897__auto___22463,G__22282_22452,n__17674__auto___22450,jobs,results,process,async))
})();
var state__21899__auto__ = (function (){var statearr_22336 = f__21898__auto__.call(null);
(statearr_22336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___22463);

return statearr_22336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(__22451,c__21897__auto___22463,G__22282_22452,n__17674__auto___22450,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22472 = (__22451 + (1));
__22451 = G__22472;
continue;
} else {
}
break;
}

var c__21897__auto___22473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___22473,jobs,results,process,async){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___22473,jobs,results,process,async){
return (function (state_22358){
var state_val_22359 = (state_22358[(1)]);
if((state_val_22359 === (1))){
var state_22358__$1 = state_22358;
var statearr_22360_22474 = state_22358__$1;
(statearr_22360_22474[(2)] = null);

(statearr_22360_22474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22359 === (2))){
var state_22358__$1 = state_22358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22358__$1,(4),from);
} else {
if((state_val_22359 === (3))){
var inst_22356 = (state_22358[(2)]);
var state_22358__$1 = state_22358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22358__$1,inst_22356);
} else {
if((state_val_22359 === (4))){
var inst_22339 = (state_22358[(7)]);
var inst_22339__$1 = (state_22358[(2)]);
var inst_22340 = (inst_22339__$1 == null);
var state_22358__$1 = (function (){var statearr_22361 = state_22358;
(statearr_22361[(7)] = inst_22339__$1);

return statearr_22361;
})();
if(cljs.core.truth_(inst_22340)){
var statearr_22362_22475 = state_22358__$1;
(statearr_22362_22475[(1)] = (5));

} else {
var statearr_22363_22476 = state_22358__$1;
(statearr_22363_22476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22359 === (5))){
var inst_22342 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22358__$1 = state_22358;
var statearr_22364_22477 = state_22358__$1;
(statearr_22364_22477[(2)] = inst_22342);

(statearr_22364_22477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22359 === (6))){
var inst_22339 = (state_22358[(7)]);
var inst_22344 = (state_22358[(8)]);
var inst_22344__$1 = cljs.core.async.chan.call(null,(1));
var inst_22345 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22346 = [inst_22339,inst_22344__$1];
var inst_22347 = (new cljs.core.PersistentVector(null,2,(5),inst_22345,inst_22346,null));
var state_22358__$1 = (function (){var statearr_22365 = state_22358;
(statearr_22365[(8)] = inst_22344__$1);

return statearr_22365;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22358__$1,(8),jobs,inst_22347);
} else {
if((state_val_22359 === (7))){
var inst_22354 = (state_22358[(2)]);
var state_22358__$1 = state_22358;
var statearr_22366_22478 = state_22358__$1;
(statearr_22366_22478[(2)] = inst_22354);

(statearr_22366_22478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22359 === (8))){
var inst_22344 = (state_22358[(8)]);
var inst_22349 = (state_22358[(2)]);
var state_22358__$1 = (function (){var statearr_22367 = state_22358;
(statearr_22367[(9)] = inst_22349);

return statearr_22367;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22358__$1,(9),results,inst_22344);
} else {
if((state_val_22359 === (9))){
var inst_22351 = (state_22358[(2)]);
var state_22358__$1 = (function (){var statearr_22368 = state_22358;
(statearr_22368[(10)] = inst_22351);

return statearr_22368;
})();
var statearr_22369_22479 = state_22358__$1;
(statearr_22369_22479[(2)] = null);

(statearr_22369_22479[(1)] = (2));


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
});})(c__21897__auto___22473,jobs,results,process,async))
;
return ((function (switch__21785__auto__,c__21897__auto___22473,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____0 = (function (){
var statearr_22373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__);

(statearr_22373[(1)] = (1));

return statearr_22373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____1 = (function (state_22358){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_22358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e22374){if((e22374 instanceof Object)){
var ex__21789__auto__ = e22374;
var statearr_22375_22480 = state_22358;
(statearr_22375_22480[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22481 = state_22358;
state_22358 = G__22481;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__ = function(state_22358){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____1.call(this,state_22358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___22473,jobs,results,process,async))
})();
var state__21899__auto__ = (function (){var statearr_22376 = f__21898__auto__.call(null);
(statearr_22376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___22473);

return statearr_22376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___22473,jobs,results,process,async))
);


var c__21897__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto__,jobs,results,process,async){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto__,jobs,results,process,async){
return (function (state_22414){
var state_val_22415 = (state_22414[(1)]);
if((state_val_22415 === (7))){
var inst_22410 = (state_22414[(2)]);
var state_22414__$1 = state_22414;
var statearr_22416_22482 = state_22414__$1;
(statearr_22416_22482[(2)] = inst_22410);

(statearr_22416_22482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (20))){
var state_22414__$1 = state_22414;
var statearr_22417_22483 = state_22414__$1;
(statearr_22417_22483[(2)] = null);

(statearr_22417_22483[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (1))){
var state_22414__$1 = state_22414;
var statearr_22418_22484 = state_22414__$1;
(statearr_22418_22484[(2)] = null);

(statearr_22418_22484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (4))){
var inst_22379 = (state_22414[(7)]);
var inst_22379__$1 = (state_22414[(2)]);
var inst_22380 = (inst_22379__$1 == null);
var state_22414__$1 = (function (){var statearr_22419 = state_22414;
(statearr_22419[(7)] = inst_22379__$1);

return statearr_22419;
})();
if(cljs.core.truth_(inst_22380)){
var statearr_22420_22485 = state_22414__$1;
(statearr_22420_22485[(1)] = (5));

} else {
var statearr_22421_22486 = state_22414__$1;
(statearr_22421_22486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (15))){
var inst_22392 = (state_22414[(8)]);
var state_22414__$1 = state_22414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22414__$1,(18),to,inst_22392);
} else {
if((state_val_22415 === (21))){
var inst_22405 = (state_22414[(2)]);
var state_22414__$1 = state_22414;
var statearr_22422_22487 = state_22414__$1;
(statearr_22422_22487[(2)] = inst_22405);

(statearr_22422_22487[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (13))){
var inst_22407 = (state_22414[(2)]);
var state_22414__$1 = (function (){var statearr_22423 = state_22414;
(statearr_22423[(9)] = inst_22407);

return statearr_22423;
})();
var statearr_22424_22488 = state_22414__$1;
(statearr_22424_22488[(2)] = null);

(statearr_22424_22488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (6))){
var inst_22379 = (state_22414[(7)]);
var state_22414__$1 = state_22414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22414__$1,(11),inst_22379);
} else {
if((state_val_22415 === (17))){
var inst_22400 = (state_22414[(2)]);
var state_22414__$1 = state_22414;
if(cljs.core.truth_(inst_22400)){
var statearr_22425_22489 = state_22414__$1;
(statearr_22425_22489[(1)] = (19));

} else {
var statearr_22426_22490 = state_22414__$1;
(statearr_22426_22490[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (3))){
var inst_22412 = (state_22414[(2)]);
var state_22414__$1 = state_22414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22414__$1,inst_22412);
} else {
if((state_val_22415 === (12))){
var inst_22389 = (state_22414[(10)]);
var state_22414__$1 = state_22414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22414__$1,(14),inst_22389);
} else {
if((state_val_22415 === (2))){
var state_22414__$1 = state_22414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22414__$1,(4),results);
} else {
if((state_val_22415 === (19))){
var state_22414__$1 = state_22414;
var statearr_22427_22491 = state_22414__$1;
(statearr_22427_22491[(2)] = null);

(statearr_22427_22491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (11))){
var inst_22389 = (state_22414[(2)]);
var state_22414__$1 = (function (){var statearr_22428 = state_22414;
(statearr_22428[(10)] = inst_22389);

return statearr_22428;
})();
var statearr_22429_22492 = state_22414__$1;
(statearr_22429_22492[(2)] = null);

(statearr_22429_22492[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (9))){
var state_22414__$1 = state_22414;
var statearr_22430_22493 = state_22414__$1;
(statearr_22430_22493[(2)] = null);

(statearr_22430_22493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (5))){
var state_22414__$1 = state_22414;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22431_22494 = state_22414__$1;
(statearr_22431_22494[(1)] = (8));

} else {
var statearr_22432_22495 = state_22414__$1;
(statearr_22432_22495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (14))){
var inst_22394 = (state_22414[(11)]);
var inst_22392 = (state_22414[(8)]);
var inst_22392__$1 = (state_22414[(2)]);
var inst_22393 = (inst_22392__$1 == null);
var inst_22394__$1 = cljs.core.not.call(null,inst_22393);
var state_22414__$1 = (function (){var statearr_22433 = state_22414;
(statearr_22433[(11)] = inst_22394__$1);

(statearr_22433[(8)] = inst_22392__$1);

return statearr_22433;
})();
if(inst_22394__$1){
var statearr_22434_22496 = state_22414__$1;
(statearr_22434_22496[(1)] = (15));

} else {
var statearr_22435_22497 = state_22414__$1;
(statearr_22435_22497[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (16))){
var inst_22394 = (state_22414[(11)]);
var state_22414__$1 = state_22414;
var statearr_22436_22498 = state_22414__$1;
(statearr_22436_22498[(2)] = inst_22394);

(statearr_22436_22498[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (10))){
var inst_22386 = (state_22414[(2)]);
var state_22414__$1 = state_22414;
var statearr_22437_22499 = state_22414__$1;
(statearr_22437_22499[(2)] = inst_22386);

(statearr_22437_22499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (18))){
var inst_22397 = (state_22414[(2)]);
var state_22414__$1 = state_22414;
var statearr_22438_22500 = state_22414__$1;
(statearr_22438_22500[(2)] = inst_22397);

(statearr_22438_22500[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22415 === (8))){
var inst_22383 = cljs.core.async.close_BANG_.call(null,to);
var state_22414__$1 = state_22414;
var statearr_22439_22501 = state_22414__$1;
(statearr_22439_22501[(2)] = inst_22383);

(statearr_22439_22501[(1)] = (10));


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
});})(c__21897__auto__,jobs,results,process,async))
;
return ((function (switch__21785__auto__,c__21897__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____0 = (function (){
var statearr_22443 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22443[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__);

(statearr_22443[(1)] = (1));

return statearr_22443;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____1 = (function (state_22414){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_22414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e22444){if((e22444 instanceof Object)){
var ex__21789__auto__ = e22444;
var statearr_22445_22502 = state_22414;
(statearr_22445_22502[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22503 = state_22414;
state_22414 = G__22503;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__ = function(state_22414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____1.call(this,state_22414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21786__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto__,jobs,results,process,async))
})();
var state__21899__auto__ = (function (){var statearr_22446 = f__21898__auto__.call(null);
(statearr_22446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto__);

return statearr_22446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto__,jobs,results,process,async))
);

return c__21897__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22504 = [];
var len__17829__auto___22507 = arguments.length;
var i__17830__auto___22508 = (0);
while(true){
if((i__17830__auto___22508 < len__17829__auto___22507)){
args22504.push((arguments[i__17830__auto___22508]));

var G__22509 = (i__17830__auto___22508 + (1));
i__17830__auto___22508 = G__22509;
continue;
} else {
}
break;
}

var G__22506 = args22504.length;
switch (G__22506) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22504.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22511 = [];
var len__17829__auto___22514 = arguments.length;
var i__17830__auto___22515 = (0);
while(true){
if((i__17830__auto___22515 < len__17829__auto___22514)){
args22511.push((arguments[i__17830__auto___22515]));

var G__22516 = (i__17830__auto___22515 + (1));
i__17830__auto___22515 = G__22516;
continue;
} else {
}
break;
}

var G__22513 = args22511.length;
switch (G__22513) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22511.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22518 = [];
var len__17829__auto___22571 = arguments.length;
var i__17830__auto___22572 = (0);
while(true){
if((i__17830__auto___22572 < len__17829__auto___22571)){
args22518.push((arguments[i__17830__auto___22572]));

var G__22573 = (i__17830__auto___22572 + (1));
i__17830__auto___22572 = G__22573;
continue;
} else {
}
break;
}

var G__22520 = args22518.length;
switch (G__22520) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22518.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21897__auto___22575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___22575,tc,fc){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___22575,tc,fc){
return (function (state_22546){
var state_val_22547 = (state_22546[(1)]);
if((state_val_22547 === (7))){
var inst_22542 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22548_22576 = state_22546__$1;
(statearr_22548_22576[(2)] = inst_22542);

(statearr_22548_22576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (1))){
var state_22546__$1 = state_22546;
var statearr_22549_22577 = state_22546__$1;
(statearr_22549_22577[(2)] = null);

(statearr_22549_22577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (4))){
var inst_22523 = (state_22546[(7)]);
var inst_22523__$1 = (state_22546[(2)]);
var inst_22524 = (inst_22523__$1 == null);
var state_22546__$1 = (function (){var statearr_22550 = state_22546;
(statearr_22550[(7)] = inst_22523__$1);

return statearr_22550;
})();
if(cljs.core.truth_(inst_22524)){
var statearr_22551_22578 = state_22546__$1;
(statearr_22551_22578[(1)] = (5));

} else {
var statearr_22552_22579 = state_22546__$1;
(statearr_22552_22579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (13))){
var state_22546__$1 = state_22546;
var statearr_22553_22580 = state_22546__$1;
(statearr_22553_22580[(2)] = null);

(statearr_22553_22580[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (6))){
var inst_22523 = (state_22546[(7)]);
var inst_22529 = p.call(null,inst_22523);
var state_22546__$1 = state_22546;
if(cljs.core.truth_(inst_22529)){
var statearr_22554_22581 = state_22546__$1;
(statearr_22554_22581[(1)] = (9));

} else {
var statearr_22555_22582 = state_22546__$1;
(statearr_22555_22582[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (3))){
var inst_22544 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22546__$1,inst_22544);
} else {
if((state_val_22547 === (12))){
var state_22546__$1 = state_22546;
var statearr_22556_22583 = state_22546__$1;
(statearr_22556_22583[(2)] = null);

(statearr_22556_22583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (2))){
var state_22546__$1 = state_22546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22546__$1,(4),ch);
} else {
if((state_val_22547 === (11))){
var inst_22523 = (state_22546[(7)]);
var inst_22533 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22546__$1,(8),inst_22533,inst_22523);
} else {
if((state_val_22547 === (9))){
var state_22546__$1 = state_22546;
var statearr_22557_22584 = state_22546__$1;
(statearr_22557_22584[(2)] = tc);

(statearr_22557_22584[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (5))){
var inst_22526 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22527 = cljs.core.async.close_BANG_.call(null,fc);
var state_22546__$1 = (function (){var statearr_22558 = state_22546;
(statearr_22558[(8)] = inst_22526);

return statearr_22558;
})();
var statearr_22559_22585 = state_22546__$1;
(statearr_22559_22585[(2)] = inst_22527);

(statearr_22559_22585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (14))){
var inst_22540 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22560_22586 = state_22546__$1;
(statearr_22560_22586[(2)] = inst_22540);

(statearr_22560_22586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (10))){
var state_22546__$1 = state_22546;
var statearr_22561_22587 = state_22546__$1;
(statearr_22561_22587[(2)] = fc);

(statearr_22561_22587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (8))){
var inst_22535 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
if(cljs.core.truth_(inst_22535)){
var statearr_22562_22588 = state_22546__$1;
(statearr_22562_22588[(1)] = (12));

} else {
var statearr_22563_22589 = state_22546__$1;
(statearr_22563_22589[(1)] = (13));

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
});})(c__21897__auto___22575,tc,fc))
;
return ((function (switch__21785__auto__,c__21897__auto___22575,tc,fc){
return (function() {
var cljs$core$async$state_machine__21786__auto__ = null;
var cljs$core$async$state_machine__21786__auto____0 = (function (){
var statearr_22567 = [null,null,null,null,null,null,null,null,null];
(statearr_22567[(0)] = cljs$core$async$state_machine__21786__auto__);

(statearr_22567[(1)] = (1));

return statearr_22567;
});
var cljs$core$async$state_machine__21786__auto____1 = (function (state_22546){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_22546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e22568){if((e22568 instanceof Object)){
var ex__21789__auto__ = e22568;
var statearr_22569_22590 = state_22546;
(statearr_22569_22590[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22591 = state_22546;
state_22546 = G__22591;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$state_machine__21786__auto__ = function(state_22546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21786__auto____1.call(this,state_22546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21786__auto____0;
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21786__auto____1;
return cljs$core$async$state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___22575,tc,fc))
})();
var state__21899__auto__ = (function (){var statearr_22570 = f__21898__auto__.call(null);
(statearr_22570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___22575);

return statearr_22570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___22575,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21897__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto__){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto__){
return (function (state_22655){
var state_val_22656 = (state_22655[(1)]);
if((state_val_22656 === (7))){
var inst_22651 = (state_22655[(2)]);
var state_22655__$1 = state_22655;
var statearr_22657_22678 = state_22655__$1;
(statearr_22657_22678[(2)] = inst_22651);

(statearr_22657_22678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (1))){
var inst_22635 = init;
var state_22655__$1 = (function (){var statearr_22658 = state_22655;
(statearr_22658[(7)] = inst_22635);

return statearr_22658;
})();
var statearr_22659_22679 = state_22655__$1;
(statearr_22659_22679[(2)] = null);

(statearr_22659_22679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (4))){
var inst_22638 = (state_22655[(8)]);
var inst_22638__$1 = (state_22655[(2)]);
var inst_22639 = (inst_22638__$1 == null);
var state_22655__$1 = (function (){var statearr_22660 = state_22655;
(statearr_22660[(8)] = inst_22638__$1);

return statearr_22660;
})();
if(cljs.core.truth_(inst_22639)){
var statearr_22661_22680 = state_22655__$1;
(statearr_22661_22680[(1)] = (5));

} else {
var statearr_22662_22681 = state_22655__$1;
(statearr_22662_22681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (6))){
var inst_22642 = (state_22655[(9)]);
var inst_22638 = (state_22655[(8)]);
var inst_22635 = (state_22655[(7)]);
var inst_22642__$1 = f.call(null,inst_22635,inst_22638);
var inst_22643 = cljs.core.reduced_QMARK_.call(null,inst_22642__$1);
var state_22655__$1 = (function (){var statearr_22663 = state_22655;
(statearr_22663[(9)] = inst_22642__$1);

return statearr_22663;
})();
if(inst_22643){
var statearr_22664_22682 = state_22655__$1;
(statearr_22664_22682[(1)] = (8));

} else {
var statearr_22665_22683 = state_22655__$1;
(statearr_22665_22683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (3))){
var inst_22653 = (state_22655[(2)]);
var state_22655__$1 = state_22655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22655__$1,inst_22653);
} else {
if((state_val_22656 === (2))){
var state_22655__$1 = state_22655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22655__$1,(4),ch);
} else {
if((state_val_22656 === (9))){
var inst_22642 = (state_22655[(9)]);
var inst_22635 = inst_22642;
var state_22655__$1 = (function (){var statearr_22666 = state_22655;
(statearr_22666[(7)] = inst_22635);

return statearr_22666;
})();
var statearr_22667_22684 = state_22655__$1;
(statearr_22667_22684[(2)] = null);

(statearr_22667_22684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (5))){
var inst_22635 = (state_22655[(7)]);
var state_22655__$1 = state_22655;
var statearr_22668_22685 = state_22655__$1;
(statearr_22668_22685[(2)] = inst_22635);

(statearr_22668_22685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (10))){
var inst_22649 = (state_22655[(2)]);
var state_22655__$1 = state_22655;
var statearr_22669_22686 = state_22655__$1;
(statearr_22669_22686[(2)] = inst_22649);

(statearr_22669_22686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22656 === (8))){
var inst_22642 = (state_22655[(9)]);
var inst_22645 = cljs.core.deref.call(null,inst_22642);
var state_22655__$1 = state_22655;
var statearr_22670_22687 = state_22655__$1;
(statearr_22670_22687[(2)] = inst_22645);

(statearr_22670_22687[(1)] = (10));


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
});})(c__21897__auto__))
;
return ((function (switch__21785__auto__,c__21897__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21786__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21786__auto____0 = (function (){
var statearr_22674 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22674[(0)] = cljs$core$async$reduce_$_state_machine__21786__auto__);

(statearr_22674[(1)] = (1));

return statearr_22674;
});
var cljs$core$async$reduce_$_state_machine__21786__auto____1 = (function (state_22655){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_22655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e22675){if((e22675 instanceof Object)){
var ex__21789__auto__ = e22675;
var statearr_22676_22688 = state_22655;
(statearr_22676_22688[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22689 = state_22655;
state_22655 = G__22689;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21786__auto__ = function(state_22655){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21786__auto____1.call(this,state_22655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21786__auto____0;
cljs$core$async$reduce_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21786__auto____1;
return cljs$core$async$reduce_$_state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto__))
})();
var state__21899__auto__ = (function (){var statearr_22677 = f__21898__auto__.call(null);
(statearr_22677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto__);

return statearr_22677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto__))
);

return c__21897__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22690 = [];
var len__17829__auto___22742 = arguments.length;
var i__17830__auto___22743 = (0);
while(true){
if((i__17830__auto___22743 < len__17829__auto___22742)){
args22690.push((arguments[i__17830__auto___22743]));

var G__22744 = (i__17830__auto___22743 + (1));
i__17830__auto___22743 = G__22744;
continue;
} else {
}
break;
}

var G__22692 = args22690.length;
switch (G__22692) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22690.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21897__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto__){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto__){
return (function (state_22717){
var state_val_22718 = (state_22717[(1)]);
if((state_val_22718 === (7))){
var inst_22699 = (state_22717[(2)]);
var state_22717__$1 = state_22717;
var statearr_22719_22746 = state_22717__$1;
(statearr_22719_22746[(2)] = inst_22699);

(statearr_22719_22746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22718 === (1))){
var inst_22693 = cljs.core.seq.call(null,coll);
var inst_22694 = inst_22693;
var state_22717__$1 = (function (){var statearr_22720 = state_22717;
(statearr_22720[(7)] = inst_22694);

return statearr_22720;
})();
var statearr_22721_22747 = state_22717__$1;
(statearr_22721_22747[(2)] = null);

(statearr_22721_22747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22718 === (4))){
var inst_22694 = (state_22717[(7)]);
var inst_22697 = cljs.core.first.call(null,inst_22694);
var state_22717__$1 = state_22717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22717__$1,(7),ch,inst_22697);
} else {
if((state_val_22718 === (13))){
var inst_22711 = (state_22717[(2)]);
var state_22717__$1 = state_22717;
var statearr_22722_22748 = state_22717__$1;
(statearr_22722_22748[(2)] = inst_22711);

(statearr_22722_22748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22718 === (6))){
var inst_22702 = (state_22717[(2)]);
var state_22717__$1 = state_22717;
if(cljs.core.truth_(inst_22702)){
var statearr_22723_22749 = state_22717__$1;
(statearr_22723_22749[(1)] = (8));

} else {
var statearr_22724_22750 = state_22717__$1;
(statearr_22724_22750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22718 === (3))){
var inst_22715 = (state_22717[(2)]);
var state_22717__$1 = state_22717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22717__$1,inst_22715);
} else {
if((state_val_22718 === (12))){
var state_22717__$1 = state_22717;
var statearr_22725_22751 = state_22717__$1;
(statearr_22725_22751[(2)] = null);

(statearr_22725_22751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22718 === (2))){
var inst_22694 = (state_22717[(7)]);
var state_22717__$1 = state_22717;
if(cljs.core.truth_(inst_22694)){
var statearr_22726_22752 = state_22717__$1;
(statearr_22726_22752[(1)] = (4));

} else {
var statearr_22727_22753 = state_22717__$1;
(statearr_22727_22753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22718 === (11))){
var inst_22708 = cljs.core.async.close_BANG_.call(null,ch);
var state_22717__$1 = state_22717;
var statearr_22728_22754 = state_22717__$1;
(statearr_22728_22754[(2)] = inst_22708);

(statearr_22728_22754[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22718 === (9))){
var state_22717__$1 = state_22717;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22729_22755 = state_22717__$1;
(statearr_22729_22755[(1)] = (11));

} else {
var statearr_22730_22756 = state_22717__$1;
(statearr_22730_22756[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22718 === (5))){
var inst_22694 = (state_22717[(7)]);
var state_22717__$1 = state_22717;
var statearr_22731_22757 = state_22717__$1;
(statearr_22731_22757[(2)] = inst_22694);

(statearr_22731_22757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22718 === (10))){
var inst_22713 = (state_22717[(2)]);
var state_22717__$1 = state_22717;
var statearr_22732_22758 = state_22717__$1;
(statearr_22732_22758[(2)] = inst_22713);

(statearr_22732_22758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22718 === (8))){
var inst_22694 = (state_22717[(7)]);
var inst_22704 = cljs.core.next.call(null,inst_22694);
var inst_22694__$1 = inst_22704;
var state_22717__$1 = (function (){var statearr_22733 = state_22717;
(statearr_22733[(7)] = inst_22694__$1);

return statearr_22733;
})();
var statearr_22734_22759 = state_22717__$1;
(statearr_22734_22759[(2)] = null);

(statearr_22734_22759[(1)] = (2));


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
});})(c__21897__auto__))
;
return ((function (switch__21785__auto__,c__21897__auto__){
return (function() {
var cljs$core$async$state_machine__21786__auto__ = null;
var cljs$core$async$state_machine__21786__auto____0 = (function (){
var statearr_22738 = [null,null,null,null,null,null,null,null];
(statearr_22738[(0)] = cljs$core$async$state_machine__21786__auto__);

(statearr_22738[(1)] = (1));

return statearr_22738;
});
var cljs$core$async$state_machine__21786__auto____1 = (function (state_22717){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_22717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e22739){if((e22739 instanceof Object)){
var ex__21789__auto__ = e22739;
var statearr_22740_22760 = state_22717;
(statearr_22740_22760[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22761 = state_22717;
state_22717 = G__22761;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$state_machine__21786__auto__ = function(state_22717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21786__auto____1.call(this,state_22717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21786__auto____0;
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21786__auto____1;
return cljs$core$async$state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto__))
})();
var state__21899__auto__ = (function (){var statearr_22741 = f__21898__auto__.call(null);
(statearr_22741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto__);

return statearr_22741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto__))
);

return c__21897__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17426__auto__ = (((_ == null))?null:_);
var m__17427__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,_);
} else {
var m__17427__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22983 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22983 = (function (mult,ch,cs,meta22984){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22984 = meta22984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22985,meta22984__$1){
var self__ = this;
var _22985__$1 = this;
return (new cljs.core.async.t_cljs$core$async22983(self__.mult,self__.ch,self__.cs,meta22984__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22983.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22985){
var self__ = this;
var _22985__$1 = this;
return self__.meta22984;
});})(cs))
;

cljs.core.async.t_cljs$core$async22983.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22983.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22983.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22983.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22983.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22983.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22983.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22984","meta22984",-719704199,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22983.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22983";

cljs.core.async.t_cljs$core$async22983.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22983");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22983 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22983(mult__$1,ch__$1,cs__$1,meta22984){
return (new cljs.core.async.t_cljs$core$async22983(mult__$1,ch__$1,cs__$1,meta22984));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22983(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21897__auto___23204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___23204,cs,m,dchan,dctr,done){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___23204,cs,m,dchan,dctr,done){
return (function (state_23116){
var state_val_23117 = (state_23116[(1)]);
if((state_val_23117 === (7))){
var inst_23112 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23118_23205 = state_23116__$1;
(statearr_23118_23205[(2)] = inst_23112);

(statearr_23118_23205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (20))){
var inst_23017 = (state_23116[(7)]);
var inst_23027 = cljs.core.first.call(null,inst_23017);
var inst_23028 = cljs.core.nth.call(null,inst_23027,(0),null);
var inst_23029 = cljs.core.nth.call(null,inst_23027,(1),null);
var state_23116__$1 = (function (){var statearr_23119 = state_23116;
(statearr_23119[(8)] = inst_23028);

return statearr_23119;
})();
if(cljs.core.truth_(inst_23029)){
var statearr_23120_23206 = state_23116__$1;
(statearr_23120_23206[(1)] = (22));

} else {
var statearr_23121_23207 = state_23116__$1;
(statearr_23121_23207[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (27))){
var inst_23057 = (state_23116[(9)]);
var inst_23064 = (state_23116[(10)]);
var inst_22988 = (state_23116[(11)]);
var inst_23059 = (state_23116[(12)]);
var inst_23064__$1 = cljs.core._nth.call(null,inst_23057,inst_23059);
var inst_23065 = cljs.core.async.put_BANG_.call(null,inst_23064__$1,inst_22988,done);
var state_23116__$1 = (function (){var statearr_23122 = state_23116;
(statearr_23122[(10)] = inst_23064__$1);

return statearr_23122;
})();
if(cljs.core.truth_(inst_23065)){
var statearr_23123_23208 = state_23116__$1;
(statearr_23123_23208[(1)] = (30));

} else {
var statearr_23124_23209 = state_23116__$1;
(statearr_23124_23209[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (1))){
var state_23116__$1 = state_23116;
var statearr_23125_23210 = state_23116__$1;
(statearr_23125_23210[(2)] = null);

(statearr_23125_23210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (24))){
var inst_23017 = (state_23116[(7)]);
var inst_23034 = (state_23116[(2)]);
var inst_23035 = cljs.core.next.call(null,inst_23017);
var inst_22997 = inst_23035;
var inst_22998 = null;
var inst_22999 = (0);
var inst_23000 = (0);
var state_23116__$1 = (function (){var statearr_23126 = state_23116;
(statearr_23126[(13)] = inst_23000);

(statearr_23126[(14)] = inst_22999);

(statearr_23126[(15)] = inst_22997);

(statearr_23126[(16)] = inst_23034);

(statearr_23126[(17)] = inst_22998);

return statearr_23126;
})();
var statearr_23127_23211 = state_23116__$1;
(statearr_23127_23211[(2)] = null);

(statearr_23127_23211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (39))){
var state_23116__$1 = state_23116;
var statearr_23131_23212 = state_23116__$1;
(statearr_23131_23212[(2)] = null);

(statearr_23131_23212[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (4))){
var inst_22988 = (state_23116[(11)]);
var inst_22988__$1 = (state_23116[(2)]);
var inst_22989 = (inst_22988__$1 == null);
var state_23116__$1 = (function (){var statearr_23132 = state_23116;
(statearr_23132[(11)] = inst_22988__$1);

return statearr_23132;
})();
if(cljs.core.truth_(inst_22989)){
var statearr_23133_23213 = state_23116__$1;
(statearr_23133_23213[(1)] = (5));

} else {
var statearr_23134_23214 = state_23116__$1;
(statearr_23134_23214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (15))){
var inst_23000 = (state_23116[(13)]);
var inst_22999 = (state_23116[(14)]);
var inst_22997 = (state_23116[(15)]);
var inst_22998 = (state_23116[(17)]);
var inst_23013 = (state_23116[(2)]);
var inst_23014 = (inst_23000 + (1));
var tmp23128 = inst_22999;
var tmp23129 = inst_22997;
var tmp23130 = inst_22998;
var inst_22997__$1 = tmp23129;
var inst_22998__$1 = tmp23130;
var inst_22999__$1 = tmp23128;
var inst_23000__$1 = inst_23014;
var state_23116__$1 = (function (){var statearr_23135 = state_23116;
(statearr_23135[(13)] = inst_23000__$1);

(statearr_23135[(14)] = inst_22999__$1);

(statearr_23135[(15)] = inst_22997__$1);

(statearr_23135[(18)] = inst_23013);

(statearr_23135[(17)] = inst_22998__$1);

return statearr_23135;
})();
var statearr_23136_23215 = state_23116__$1;
(statearr_23136_23215[(2)] = null);

(statearr_23136_23215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (21))){
var inst_23038 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23140_23216 = state_23116__$1;
(statearr_23140_23216[(2)] = inst_23038);

(statearr_23140_23216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (31))){
var inst_23064 = (state_23116[(10)]);
var inst_23068 = done.call(null,null);
var inst_23069 = cljs.core.async.untap_STAR_.call(null,m,inst_23064);
var state_23116__$1 = (function (){var statearr_23141 = state_23116;
(statearr_23141[(19)] = inst_23068);

return statearr_23141;
})();
var statearr_23142_23217 = state_23116__$1;
(statearr_23142_23217[(2)] = inst_23069);

(statearr_23142_23217[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (32))){
var inst_23057 = (state_23116[(9)]);
var inst_23056 = (state_23116[(20)]);
var inst_23059 = (state_23116[(12)]);
var inst_23058 = (state_23116[(21)]);
var inst_23071 = (state_23116[(2)]);
var inst_23072 = (inst_23059 + (1));
var tmp23137 = inst_23057;
var tmp23138 = inst_23056;
var tmp23139 = inst_23058;
var inst_23056__$1 = tmp23138;
var inst_23057__$1 = tmp23137;
var inst_23058__$1 = tmp23139;
var inst_23059__$1 = inst_23072;
var state_23116__$1 = (function (){var statearr_23143 = state_23116;
(statearr_23143[(9)] = inst_23057__$1);

(statearr_23143[(20)] = inst_23056__$1);

(statearr_23143[(12)] = inst_23059__$1);

(statearr_23143[(21)] = inst_23058__$1);

(statearr_23143[(22)] = inst_23071);

return statearr_23143;
})();
var statearr_23144_23218 = state_23116__$1;
(statearr_23144_23218[(2)] = null);

(statearr_23144_23218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (40))){
var inst_23084 = (state_23116[(23)]);
var inst_23088 = done.call(null,null);
var inst_23089 = cljs.core.async.untap_STAR_.call(null,m,inst_23084);
var state_23116__$1 = (function (){var statearr_23145 = state_23116;
(statearr_23145[(24)] = inst_23088);

return statearr_23145;
})();
var statearr_23146_23219 = state_23116__$1;
(statearr_23146_23219[(2)] = inst_23089);

(statearr_23146_23219[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (33))){
var inst_23075 = (state_23116[(25)]);
var inst_23077 = cljs.core.chunked_seq_QMARK_.call(null,inst_23075);
var state_23116__$1 = state_23116;
if(inst_23077){
var statearr_23147_23220 = state_23116__$1;
(statearr_23147_23220[(1)] = (36));

} else {
var statearr_23148_23221 = state_23116__$1;
(statearr_23148_23221[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (13))){
var inst_23007 = (state_23116[(26)]);
var inst_23010 = cljs.core.async.close_BANG_.call(null,inst_23007);
var state_23116__$1 = state_23116;
var statearr_23149_23222 = state_23116__$1;
(statearr_23149_23222[(2)] = inst_23010);

(statearr_23149_23222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (22))){
var inst_23028 = (state_23116[(8)]);
var inst_23031 = cljs.core.async.close_BANG_.call(null,inst_23028);
var state_23116__$1 = state_23116;
var statearr_23150_23223 = state_23116__$1;
(statearr_23150_23223[(2)] = inst_23031);

(statearr_23150_23223[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (36))){
var inst_23075 = (state_23116[(25)]);
var inst_23079 = cljs.core.chunk_first.call(null,inst_23075);
var inst_23080 = cljs.core.chunk_rest.call(null,inst_23075);
var inst_23081 = cljs.core.count.call(null,inst_23079);
var inst_23056 = inst_23080;
var inst_23057 = inst_23079;
var inst_23058 = inst_23081;
var inst_23059 = (0);
var state_23116__$1 = (function (){var statearr_23151 = state_23116;
(statearr_23151[(9)] = inst_23057);

(statearr_23151[(20)] = inst_23056);

(statearr_23151[(12)] = inst_23059);

(statearr_23151[(21)] = inst_23058);

return statearr_23151;
})();
var statearr_23152_23224 = state_23116__$1;
(statearr_23152_23224[(2)] = null);

(statearr_23152_23224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (41))){
var inst_23075 = (state_23116[(25)]);
var inst_23091 = (state_23116[(2)]);
var inst_23092 = cljs.core.next.call(null,inst_23075);
var inst_23056 = inst_23092;
var inst_23057 = null;
var inst_23058 = (0);
var inst_23059 = (0);
var state_23116__$1 = (function (){var statearr_23153 = state_23116;
(statearr_23153[(9)] = inst_23057);

(statearr_23153[(27)] = inst_23091);

(statearr_23153[(20)] = inst_23056);

(statearr_23153[(12)] = inst_23059);

(statearr_23153[(21)] = inst_23058);

return statearr_23153;
})();
var statearr_23154_23225 = state_23116__$1;
(statearr_23154_23225[(2)] = null);

(statearr_23154_23225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (43))){
var state_23116__$1 = state_23116;
var statearr_23155_23226 = state_23116__$1;
(statearr_23155_23226[(2)] = null);

(statearr_23155_23226[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (29))){
var inst_23100 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23156_23227 = state_23116__$1;
(statearr_23156_23227[(2)] = inst_23100);

(statearr_23156_23227[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (44))){
var inst_23109 = (state_23116[(2)]);
var state_23116__$1 = (function (){var statearr_23157 = state_23116;
(statearr_23157[(28)] = inst_23109);

return statearr_23157;
})();
var statearr_23158_23228 = state_23116__$1;
(statearr_23158_23228[(2)] = null);

(statearr_23158_23228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (6))){
var inst_23048 = (state_23116[(29)]);
var inst_23047 = cljs.core.deref.call(null,cs);
var inst_23048__$1 = cljs.core.keys.call(null,inst_23047);
var inst_23049 = cljs.core.count.call(null,inst_23048__$1);
var inst_23050 = cljs.core.reset_BANG_.call(null,dctr,inst_23049);
var inst_23055 = cljs.core.seq.call(null,inst_23048__$1);
var inst_23056 = inst_23055;
var inst_23057 = null;
var inst_23058 = (0);
var inst_23059 = (0);
var state_23116__$1 = (function (){var statearr_23159 = state_23116;
(statearr_23159[(9)] = inst_23057);

(statearr_23159[(30)] = inst_23050);

(statearr_23159[(20)] = inst_23056);

(statearr_23159[(12)] = inst_23059);

(statearr_23159[(29)] = inst_23048__$1);

(statearr_23159[(21)] = inst_23058);

return statearr_23159;
})();
var statearr_23160_23229 = state_23116__$1;
(statearr_23160_23229[(2)] = null);

(statearr_23160_23229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (28))){
var inst_23056 = (state_23116[(20)]);
var inst_23075 = (state_23116[(25)]);
var inst_23075__$1 = cljs.core.seq.call(null,inst_23056);
var state_23116__$1 = (function (){var statearr_23161 = state_23116;
(statearr_23161[(25)] = inst_23075__$1);

return statearr_23161;
})();
if(inst_23075__$1){
var statearr_23162_23230 = state_23116__$1;
(statearr_23162_23230[(1)] = (33));

} else {
var statearr_23163_23231 = state_23116__$1;
(statearr_23163_23231[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (25))){
var inst_23059 = (state_23116[(12)]);
var inst_23058 = (state_23116[(21)]);
var inst_23061 = (inst_23059 < inst_23058);
var inst_23062 = inst_23061;
var state_23116__$1 = state_23116;
if(cljs.core.truth_(inst_23062)){
var statearr_23164_23232 = state_23116__$1;
(statearr_23164_23232[(1)] = (27));

} else {
var statearr_23165_23233 = state_23116__$1;
(statearr_23165_23233[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (34))){
var state_23116__$1 = state_23116;
var statearr_23166_23234 = state_23116__$1;
(statearr_23166_23234[(2)] = null);

(statearr_23166_23234[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (17))){
var state_23116__$1 = state_23116;
var statearr_23167_23235 = state_23116__$1;
(statearr_23167_23235[(2)] = null);

(statearr_23167_23235[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (3))){
var inst_23114 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23116__$1,inst_23114);
} else {
if((state_val_23117 === (12))){
var inst_23043 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23168_23236 = state_23116__$1;
(statearr_23168_23236[(2)] = inst_23043);

(statearr_23168_23236[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (2))){
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23116__$1,(4),ch);
} else {
if((state_val_23117 === (23))){
var state_23116__$1 = state_23116;
var statearr_23169_23237 = state_23116__$1;
(statearr_23169_23237[(2)] = null);

(statearr_23169_23237[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (35))){
var inst_23098 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23170_23238 = state_23116__$1;
(statearr_23170_23238[(2)] = inst_23098);

(statearr_23170_23238[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (19))){
var inst_23017 = (state_23116[(7)]);
var inst_23021 = cljs.core.chunk_first.call(null,inst_23017);
var inst_23022 = cljs.core.chunk_rest.call(null,inst_23017);
var inst_23023 = cljs.core.count.call(null,inst_23021);
var inst_22997 = inst_23022;
var inst_22998 = inst_23021;
var inst_22999 = inst_23023;
var inst_23000 = (0);
var state_23116__$1 = (function (){var statearr_23171 = state_23116;
(statearr_23171[(13)] = inst_23000);

(statearr_23171[(14)] = inst_22999);

(statearr_23171[(15)] = inst_22997);

(statearr_23171[(17)] = inst_22998);

return statearr_23171;
})();
var statearr_23172_23239 = state_23116__$1;
(statearr_23172_23239[(2)] = null);

(statearr_23172_23239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (11))){
var inst_23017 = (state_23116[(7)]);
var inst_22997 = (state_23116[(15)]);
var inst_23017__$1 = cljs.core.seq.call(null,inst_22997);
var state_23116__$1 = (function (){var statearr_23173 = state_23116;
(statearr_23173[(7)] = inst_23017__$1);

return statearr_23173;
})();
if(inst_23017__$1){
var statearr_23174_23240 = state_23116__$1;
(statearr_23174_23240[(1)] = (16));

} else {
var statearr_23175_23241 = state_23116__$1;
(statearr_23175_23241[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (9))){
var inst_23045 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23176_23242 = state_23116__$1;
(statearr_23176_23242[(2)] = inst_23045);

(statearr_23176_23242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (5))){
var inst_22995 = cljs.core.deref.call(null,cs);
var inst_22996 = cljs.core.seq.call(null,inst_22995);
var inst_22997 = inst_22996;
var inst_22998 = null;
var inst_22999 = (0);
var inst_23000 = (0);
var state_23116__$1 = (function (){var statearr_23177 = state_23116;
(statearr_23177[(13)] = inst_23000);

(statearr_23177[(14)] = inst_22999);

(statearr_23177[(15)] = inst_22997);

(statearr_23177[(17)] = inst_22998);

return statearr_23177;
})();
var statearr_23178_23243 = state_23116__$1;
(statearr_23178_23243[(2)] = null);

(statearr_23178_23243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (14))){
var state_23116__$1 = state_23116;
var statearr_23179_23244 = state_23116__$1;
(statearr_23179_23244[(2)] = null);

(statearr_23179_23244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (45))){
var inst_23106 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23180_23245 = state_23116__$1;
(statearr_23180_23245[(2)] = inst_23106);

(statearr_23180_23245[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (26))){
var inst_23048 = (state_23116[(29)]);
var inst_23102 = (state_23116[(2)]);
var inst_23103 = cljs.core.seq.call(null,inst_23048);
var state_23116__$1 = (function (){var statearr_23181 = state_23116;
(statearr_23181[(31)] = inst_23102);

return statearr_23181;
})();
if(inst_23103){
var statearr_23182_23246 = state_23116__$1;
(statearr_23182_23246[(1)] = (42));

} else {
var statearr_23183_23247 = state_23116__$1;
(statearr_23183_23247[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (16))){
var inst_23017 = (state_23116[(7)]);
var inst_23019 = cljs.core.chunked_seq_QMARK_.call(null,inst_23017);
var state_23116__$1 = state_23116;
if(inst_23019){
var statearr_23184_23248 = state_23116__$1;
(statearr_23184_23248[(1)] = (19));

} else {
var statearr_23185_23249 = state_23116__$1;
(statearr_23185_23249[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (38))){
var inst_23095 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23186_23250 = state_23116__$1;
(statearr_23186_23250[(2)] = inst_23095);

(statearr_23186_23250[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (30))){
var state_23116__$1 = state_23116;
var statearr_23187_23251 = state_23116__$1;
(statearr_23187_23251[(2)] = null);

(statearr_23187_23251[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (10))){
var inst_23000 = (state_23116[(13)]);
var inst_22998 = (state_23116[(17)]);
var inst_23006 = cljs.core._nth.call(null,inst_22998,inst_23000);
var inst_23007 = cljs.core.nth.call(null,inst_23006,(0),null);
var inst_23008 = cljs.core.nth.call(null,inst_23006,(1),null);
var state_23116__$1 = (function (){var statearr_23188 = state_23116;
(statearr_23188[(26)] = inst_23007);

return statearr_23188;
})();
if(cljs.core.truth_(inst_23008)){
var statearr_23189_23252 = state_23116__$1;
(statearr_23189_23252[(1)] = (13));

} else {
var statearr_23190_23253 = state_23116__$1;
(statearr_23190_23253[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (18))){
var inst_23041 = (state_23116[(2)]);
var state_23116__$1 = state_23116;
var statearr_23191_23254 = state_23116__$1;
(statearr_23191_23254[(2)] = inst_23041);

(statearr_23191_23254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (42))){
var state_23116__$1 = state_23116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23116__$1,(45),dchan);
} else {
if((state_val_23117 === (37))){
var inst_23075 = (state_23116[(25)]);
var inst_22988 = (state_23116[(11)]);
var inst_23084 = (state_23116[(23)]);
var inst_23084__$1 = cljs.core.first.call(null,inst_23075);
var inst_23085 = cljs.core.async.put_BANG_.call(null,inst_23084__$1,inst_22988,done);
var state_23116__$1 = (function (){var statearr_23192 = state_23116;
(statearr_23192[(23)] = inst_23084__$1);

return statearr_23192;
})();
if(cljs.core.truth_(inst_23085)){
var statearr_23193_23255 = state_23116__$1;
(statearr_23193_23255[(1)] = (39));

} else {
var statearr_23194_23256 = state_23116__$1;
(statearr_23194_23256[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23117 === (8))){
var inst_23000 = (state_23116[(13)]);
var inst_22999 = (state_23116[(14)]);
var inst_23002 = (inst_23000 < inst_22999);
var inst_23003 = inst_23002;
var state_23116__$1 = state_23116;
if(cljs.core.truth_(inst_23003)){
var statearr_23195_23257 = state_23116__$1;
(statearr_23195_23257[(1)] = (10));

} else {
var statearr_23196_23258 = state_23116__$1;
(statearr_23196_23258[(1)] = (11));

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
});})(c__21897__auto___23204,cs,m,dchan,dctr,done))
;
return ((function (switch__21785__auto__,c__21897__auto___23204,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21786__auto__ = null;
var cljs$core$async$mult_$_state_machine__21786__auto____0 = (function (){
var statearr_23200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23200[(0)] = cljs$core$async$mult_$_state_machine__21786__auto__);

(statearr_23200[(1)] = (1));

return statearr_23200;
});
var cljs$core$async$mult_$_state_machine__21786__auto____1 = (function (state_23116){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_23116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e23201){if((e23201 instanceof Object)){
var ex__21789__auto__ = e23201;
var statearr_23202_23259 = state_23116;
(statearr_23202_23259[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23260 = state_23116;
state_23116 = G__23260;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21786__auto__ = function(state_23116){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21786__auto____1.call(this,state_23116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21786__auto____0;
cljs$core$async$mult_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21786__auto____1;
return cljs$core$async$mult_$_state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___23204,cs,m,dchan,dctr,done))
})();
var state__21899__auto__ = (function (){var statearr_23203 = f__21898__auto__.call(null);
(statearr_23203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___23204);

return statearr_23203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___23204,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23261 = [];
var len__17829__auto___23264 = arguments.length;
var i__17830__auto___23265 = (0);
while(true){
if((i__17830__auto___23265 < len__17829__auto___23264)){
args23261.push((arguments[i__17830__auto___23265]));

var G__23266 = (i__17830__auto___23265 + (1));
i__17830__auto___23265 = G__23266;
continue;
} else {
}
break;
}

var G__23263 = args23261.length;
switch (G__23263) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23261.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,state_map);
} else {
var m__17427__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,mode);
} else {
var m__17427__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___23278 = arguments.length;
var i__17830__auto___23279 = (0);
while(true){
if((i__17830__auto___23279 < len__17829__auto___23278)){
args__17836__auto__.push((arguments[i__17830__auto___23279]));

var G__23280 = (i__17830__auto___23279 + (1));
i__17830__auto___23279 = G__23280;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((3) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17837__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23272){
var map__23273 = p__23272;
var map__23273__$1 = ((((!((map__23273 == null)))?((((map__23273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23273):map__23273);
var opts = map__23273__$1;
var statearr_23275_23281 = state;
(statearr_23275_23281[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23273,map__23273__$1,opts){
return (function (val){
var statearr_23276_23282 = state;
(statearr_23276_23282[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23273,map__23273__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23277_23283 = state;
(statearr_23277_23283[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23268){
var G__23269 = cljs.core.first.call(null,seq23268);
var seq23268__$1 = cljs.core.next.call(null,seq23268);
var G__23270 = cljs.core.first.call(null,seq23268__$1);
var seq23268__$2 = cljs.core.next.call(null,seq23268__$1);
var G__23271 = cljs.core.first.call(null,seq23268__$2);
var seq23268__$3 = cljs.core.next.call(null,seq23268__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23269,G__23270,G__23271,seq23268__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
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
if(typeof cljs.core.async.t_cljs$core$async23447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23447 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23448){
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
this.meta23448 = meta23448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23449,meta23448__$1){
var self__ = this;
var _23449__$1 = this;
return (new cljs.core.async.t_cljs$core$async23447(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23448__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23449){
var self__ = this;
var _23449__$1 = this;
return self__.meta23448;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23447.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23447.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23448","meta23448",-841757351,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23447";

cljs.core.async.t_cljs$core$async23447.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23447");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23447 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23447(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23448){
return (new cljs.core.async.t_cljs$core$async23447(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23448));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23447(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21897__auto___23610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___23610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___23610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23547){
var state_val_23548 = (state_23547[(1)]);
if((state_val_23548 === (7))){
var inst_23465 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
var statearr_23549_23611 = state_23547__$1;
(statearr_23549_23611[(2)] = inst_23465);

(statearr_23549_23611[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (20))){
var inst_23477 = (state_23547[(7)]);
var state_23547__$1 = state_23547;
var statearr_23550_23612 = state_23547__$1;
(statearr_23550_23612[(2)] = inst_23477);

(statearr_23550_23612[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (27))){
var state_23547__$1 = state_23547;
var statearr_23551_23613 = state_23547__$1;
(statearr_23551_23613[(2)] = null);

(statearr_23551_23613[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (1))){
var inst_23453 = (state_23547[(8)]);
var inst_23453__$1 = calc_state.call(null);
var inst_23455 = (inst_23453__$1 == null);
var inst_23456 = cljs.core.not.call(null,inst_23455);
var state_23547__$1 = (function (){var statearr_23552 = state_23547;
(statearr_23552[(8)] = inst_23453__$1);

return statearr_23552;
})();
if(inst_23456){
var statearr_23553_23614 = state_23547__$1;
(statearr_23553_23614[(1)] = (2));

} else {
var statearr_23554_23615 = state_23547__$1;
(statearr_23554_23615[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (24))){
var inst_23507 = (state_23547[(9)]);
var inst_23500 = (state_23547[(10)]);
var inst_23521 = (state_23547[(11)]);
var inst_23521__$1 = inst_23500.call(null,inst_23507);
var state_23547__$1 = (function (){var statearr_23555 = state_23547;
(statearr_23555[(11)] = inst_23521__$1);

return statearr_23555;
})();
if(cljs.core.truth_(inst_23521__$1)){
var statearr_23556_23616 = state_23547__$1;
(statearr_23556_23616[(1)] = (29));

} else {
var statearr_23557_23617 = state_23547__$1;
(statearr_23557_23617[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (4))){
var inst_23468 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
if(cljs.core.truth_(inst_23468)){
var statearr_23558_23618 = state_23547__$1;
(statearr_23558_23618[(1)] = (8));

} else {
var statearr_23559_23619 = state_23547__$1;
(statearr_23559_23619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (15))){
var inst_23494 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
if(cljs.core.truth_(inst_23494)){
var statearr_23560_23620 = state_23547__$1;
(statearr_23560_23620[(1)] = (19));

} else {
var statearr_23561_23621 = state_23547__$1;
(statearr_23561_23621[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (21))){
var inst_23499 = (state_23547[(12)]);
var inst_23499__$1 = (state_23547[(2)]);
var inst_23500 = cljs.core.get.call(null,inst_23499__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23501 = cljs.core.get.call(null,inst_23499__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23502 = cljs.core.get.call(null,inst_23499__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23547__$1 = (function (){var statearr_23562 = state_23547;
(statearr_23562[(13)] = inst_23501);

(statearr_23562[(12)] = inst_23499__$1);

(statearr_23562[(10)] = inst_23500);

return statearr_23562;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23547__$1,(22),inst_23502);
} else {
if((state_val_23548 === (31))){
var inst_23529 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
if(cljs.core.truth_(inst_23529)){
var statearr_23563_23622 = state_23547__$1;
(statearr_23563_23622[(1)] = (32));

} else {
var statearr_23564_23623 = state_23547__$1;
(statearr_23564_23623[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (32))){
var inst_23506 = (state_23547[(14)]);
var state_23547__$1 = state_23547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23547__$1,(35),out,inst_23506);
} else {
if((state_val_23548 === (33))){
var inst_23499 = (state_23547[(12)]);
var inst_23477 = inst_23499;
var state_23547__$1 = (function (){var statearr_23565 = state_23547;
(statearr_23565[(7)] = inst_23477);

return statearr_23565;
})();
var statearr_23566_23624 = state_23547__$1;
(statearr_23566_23624[(2)] = null);

(statearr_23566_23624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (13))){
var inst_23477 = (state_23547[(7)]);
var inst_23484 = inst_23477.cljs$lang$protocol_mask$partition0$;
var inst_23485 = (inst_23484 & (64));
var inst_23486 = inst_23477.cljs$core$ISeq$;
var inst_23487 = (inst_23485) || (inst_23486);
var state_23547__$1 = state_23547;
if(cljs.core.truth_(inst_23487)){
var statearr_23567_23625 = state_23547__$1;
(statearr_23567_23625[(1)] = (16));

} else {
var statearr_23568_23626 = state_23547__$1;
(statearr_23568_23626[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (22))){
var inst_23506 = (state_23547[(14)]);
var inst_23507 = (state_23547[(9)]);
var inst_23505 = (state_23547[(2)]);
var inst_23506__$1 = cljs.core.nth.call(null,inst_23505,(0),null);
var inst_23507__$1 = cljs.core.nth.call(null,inst_23505,(1),null);
var inst_23508 = (inst_23506__$1 == null);
var inst_23509 = cljs.core._EQ_.call(null,inst_23507__$1,change);
var inst_23510 = (inst_23508) || (inst_23509);
var state_23547__$1 = (function (){var statearr_23569 = state_23547;
(statearr_23569[(14)] = inst_23506__$1);

(statearr_23569[(9)] = inst_23507__$1);

return statearr_23569;
})();
if(cljs.core.truth_(inst_23510)){
var statearr_23570_23627 = state_23547__$1;
(statearr_23570_23627[(1)] = (23));

} else {
var statearr_23571_23628 = state_23547__$1;
(statearr_23571_23628[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (36))){
var inst_23499 = (state_23547[(12)]);
var inst_23477 = inst_23499;
var state_23547__$1 = (function (){var statearr_23572 = state_23547;
(statearr_23572[(7)] = inst_23477);

return statearr_23572;
})();
var statearr_23573_23629 = state_23547__$1;
(statearr_23573_23629[(2)] = null);

(statearr_23573_23629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (29))){
var inst_23521 = (state_23547[(11)]);
var state_23547__$1 = state_23547;
var statearr_23574_23630 = state_23547__$1;
(statearr_23574_23630[(2)] = inst_23521);

(statearr_23574_23630[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (6))){
var state_23547__$1 = state_23547;
var statearr_23575_23631 = state_23547__$1;
(statearr_23575_23631[(2)] = false);

(statearr_23575_23631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (28))){
var inst_23517 = (state_23547[(2)]);
var inst_23518 = calc_state.call(null);
var inst_23477 = inst_23518;
var state_23547__$1 = (function (){var statearr_23576 = state_23547;
(statearr_23576[(7)] = inst_23477);

(statearr_23576[(15)] = inst_23517);

return statearr_23576;
})();
var statearr_23577_23632 = state_23547__$1;
(statearr_23577_23632[(2)] = null);

(statearr_23577_23632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (25))){
var inst_23543 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
var statearr_23578_23633 = state_23547__$1;
(statearr_23578_23633[(2)] = inst_23543);

(statearr_23578_23633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (34))){
var inst_23541 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
var statearr_23579_23634 = state_23547__$1;
(statearr_23579_23634[(2)] = inst_23541);

(statearr_23579_23634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (17))){
var state_23547__$1 = state_23547;
var statearr_23580_23635 = state_23547__$1;
(statearr_23580_23635[(2)] = false);

(statearr_23580_23635[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (3))){
var state_23547__$1 = state_23547;
var statearr_23581_23636 = state_23547__$1;
(statearr_23581_23636[(2)] = false);

(statearr_23581_23636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (12))){
var inst_23545 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23547__$1,inst_23545);
} else {
if((state_val_23548 === (2))){
var inst_23453 = (state_23547[(8)]);
var inst_23458 = inst_23453.cljs$lang$protocol_mask$partition0$;
var inst_23459 = (inst_23458 & (64));
var inst_23460 = inst_23453.cljs$core$ISeq$;
var inst_23461 = (inst_23459) || (inst_23460);
var state_23547__$1 = state_23547;
if(cljs.core.truth_(inst_23461)){
var statearr_23582_23637 = state_23547__$1;
(statearr_23582_23637[(1)] = (5));

} else {
var statearr_23583_23638 = state_23547__$1;
(statearr_23583_23638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (23))){
var inst_23506 = (state_23547[(14)]);
var inst_23512 = (inst_23506 == null);
var state_23547__$1 = state_23547;
if(cljs.core.truth_(inst_23512)){
var statearr_23584_23639 = state_23547__$1;
(statearr_23584_23639[(1)] = (26));

} else {
var statearr_23585_23640 = state_23547__$1;
(statearr_23585_23640[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (35))){
var inst_23532 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
if(cljs.core.truth_(inst_23532)){
var statearr_23586_23641 = state_23547__$1;
(statearr_23586_23641[(1)] = (36));

} else {
var statearr_23587_23642 = state_23547__$1;
(statearr_23587_23642[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (19))){
var inst_23477 = (state_23547[(7)]);
var inst_23496 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23477);
var state_23547__$1 = state_23547;
var statearr_23588_23643 = state_23547__$1;
(statearr_23588_23643[(2)] = inst_23496);

(statearr_23588_23643[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (11))){
var inst_23477 = (state_23547[(7)]);
var inst_23481 = (inst_23477 == null);
var inst_23482 = cljs.core.not.call(null,inst_23481);
var state_23547__$1 = state_23547;
if(inst_23482){
var statearr_23589_23644 = state_23547__$1;
(statearr_23589_23644[(1)] = (13));

} else {
var statearr_23590_23645 = state_23547__$1;
(statearr_23590_23645[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (9))){
var inst_23453 = (state_23547[(8)]);
var state_23547__$1 = state_23547;
var statearr_23591_23646 = state_23547__$1;
(statearr_23591_23646[(2)] = inst_23453);

(statearr_23591_23646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (5))){
var state_23547__$1 = state_23547;
var statearr_23592_23647 = state_23547__$1;
(statearr_23592_23647[(2)] = true);

(statearr_23592_23647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (14))){
var state_23547__$1 = state_23547;
var statearr_23593_23648 = state_23547__$1;
(statearr_23593_23648[(2)] = false);

(statearr_23593_23648[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (26))){
var inst_23507 = (state_23547[(9)]);
var inst_23514 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23507);
var state_23547__$1 = state_23547;
var statearr_23594_23649 = state_23547__$1;
(statearr_23594_23649[(2)] = inst_23514);

(statearr_23594_23649[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (16))){
var state_23547__$1 = state_23547;
var statearr_23595_23650 = state_23547__$1;
(statearr_23595_23650[(2)] = true);

(statearr_23595_23650[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (38))){
var inst_23537 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
var statearr_23596_23651 = state_23547__$1;
(statearr_23596_23651[(2)] = inst_23537);

(statearr_23596_23651[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (30))){
var inst_23501 = (state_23547[(13)]);
var inst_23507 = (state_23547[(9)]);
var inst_23500 = (state_23547[(10)]);
var inst_23524 = cljs.core.empty_QMARK_.call(null,inst_23500);
var inst_23525 = inst_23501.call(null,inst_23507);
var inst_23526 = cljs.core.not.call(null,inst_23525);
var inst_23527 = (inst_23524) && (inst_23526);
var state_23547__$1 = state_23547;
var statearr_23597_23652 = state_23547__$1;
(statearr_23597_23652[(2)] = inst_23527);

(statearr_23597_23652[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (10))){
var inst_23453 = (state_23547[(8)]);
var inst_23473 = (state_23547[(2)]);
var inst_23474 = cljs.core.get.call(null,inst_23473,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23475 = cljs.core.get.call(null,inst_23473,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23476 = cljs.core.get.call(null,inst_23473,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23477 = inst_23453;
var state_23547__$1 = (function (){var statearr_23598 = state_23547;
(statearr_23598[(16)] = inst_23474);

(statearr_23598[(7)] = inst_23477);

(statearr_23598[(17)] = inst_23475);

(statearr_23598[(18)] = inst_23476);

return statearr_23598;
})();
var statearr_23599_23653 = state_23547__$1;
(statearr_23599_23653[(2)] = null);

(statearr_23599_23653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (18))){
var inst_23491 = (state_23547[(2)]);
var state_23547__$1 = state_23547;
var statearr_23600_23654 = state_23547__$1;
(statearr_23600_23654[(2)] = inst_23491);

(statearr_23600_23654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (37))){
var state_23547__$1 = state_23547;
var statearr_23601_23655 = state_23547__$1;
(statearr_23601_23655[(2)] = null);

(statearr_23601_23655[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23548 === (8))){
var inst_23453 = (state_23547[(8)]);
var inst_23470 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23453);
var state_23547__$1 = state_23547;
var statearr_23602_23656 = state_23547__$1;
(statearr_23602_23656[(2)] = inst_23470);

(statearr_23602_23656[(1)] = (10));


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
});})(c__21897__auto___23610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21785__auto__,c__21897__auto___23610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21786__auto__ = null;
var cljs$core$async$mix_$_state_machine__21786__auto____0 = (function (){
var statearr_23606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23606[(0)] = cljs$core$async$mix_$_state_machine__21786__auto__);

(statearr_23606[(1)] = (1));

return statearr_23606;
});
var cljs$core$async$mix_$_state_machine__21786__auto____1 = (function (state_23547){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_23547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e23607){if((e23607 instanceof Object)){
var ex__21789__auto__ = e23607;
var statearr_23608_23657 = state_23547;
(statearr_23608_23657[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23658 = state_23547;
state_23547 = G__23658;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21786__auto__ = function(state_23547){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21786__auto____1.call(this,state_23547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21786__auto____0;
cljs$core$async$mix_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21786__auto____1;
return cljs$core$async$mix_$_state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___23610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21899__auto__ = (function (){var statearr_23609 = f__21898__auto__.call(null);
(statearr_23609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___23610);

return statearr_23609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___23610,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23659 = [];
var len__17829__auto___23662 = arguments.length;
var i__17830__auto___23663 = (0);
while(true){
if((i__17830__auto___23663 < len__17829__auto___23662)){
args23659.push((arguments[i__17830__auto___23663]));

var G__23664 = (i__17830__auto___23663 + (1));
i__17830__auto___23663 = G__23664;
continue;
} else {
}
break;
}

var G__23661 = args23659.length;
switch (G__23661) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23659.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23667 = [];
var len__17829__auto___23792 = arguments.length;
var i__17830__auto___23793 = (0);
while(true){
if((i__17830__auto___23793 < len__17829__auto___23792)){
args23667.push((arguments[i__17830__auto___23793]));

var G__23794 = (i__17830__auto___23793 + (1));
i__17830__auto___23793 = G__23794;
continue;
} else {
}
break;
}

var G__23669 = args23667.length;
switch (G__23669) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23667.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16771__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16771__auto__,mults){
return (function (p1__23666_SHARP_){
if(cljs.core.truth_(p1__23666_SHARP_.call(null,topic))){
return p1__23666_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23666_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16771__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23670 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23670 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23671){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23671 = meta23671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23672,meta23671__$1){
var self__ = this;
var _23672__$1 = this;
return (new cljs.core.async.t_cljs$core$async23670(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23671__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23672){
var self__ = this;
var _23672__$1 = this;
return self__.meta23671;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23670.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23670.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23670.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23670.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23670.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23670.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23670.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23671","meta23671",2130332378,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23670.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23670";

cljs.core.async.t_cljs$core$async23670.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23670");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23670 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23670(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23671){
return (new cljs.core.async.t_cljs$core$async23670(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23671));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23670(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21897__auto___23796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___23796,mults,ensure_mult,p){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___23796,mults,ensure_mult,p){
return (function (state_23744){
var state_val_23745 = (state_23744[(1)]);
if((state_val_23745 === (7))){
var inst_23740 = (state_23744[(2)]);
var state_23744__$1 = state_23744;
var statearr_23746_23797 = state_23744__$1;
(statearr_23746_23797[(2)] = inst_23740);

(statearr_23746_23797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (20))){
var state_23744__$1 = state_23744;
var statearr_23747_23798 = state_23744__$1;
(statearr_23747_23798[(2)] = null);

(statearr_23747_23798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (1))){
var state_23744__$1 = state_23744;
var statearr_23748_23799 = state_23744__$1;
(statearr_23748_23799[(2)] = null);

(statearr_23748_23799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (24))){
var inst_23723 = (state_23744[(7)]);
var inst_23732 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23723);
var state_23744__$1 = state_23744;
var statearr_23749_23800 = state_23744__$1;
(statearr_23749_23800[(2)] = inst_23732);

(statearr_23749_23800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (4))){
var inst_23675 = (state_23744[(8)]);
var inst_23675__$1 = (state_23744[(2)]);
var inst_23676 = (inst_23675__$1 == null);
var state_23744__$1 = (function (){var statearr_23750 = state_23744;
(statearr_23750[(8)] = inst_23675__$1);

return statearr_23750;
})();
if(cljs.core.truth_(inst_23676)){
var statearr_23751_23801 = state_23744__$1;
(statearr_23751_23801[(1)] = (5));

} else {
var statearr_23752_23802 = state_23744__$1;
(statearr_23752_23802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (15))){
var inst_23717 = (state_23744[(2)]);
var state_23744__$1 = state_23744;
var statearr_23753_23803 = state_23744__$1;
(statearr_23753_23803[(2)] = inst_23717);

(statearr_23753_23803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (21))){
var inst_23737 = (state_23744[(2)]);
var state_23744__$1 = (function (){var statearr_23754 = state_23744;
(statearr_23754[(9)] = inst_23737);

return statearr_23754;
})();
var statearr_23755_23804 = state_23744__$1;
(statearr_23755_23804[(2)] = null);

(statearr_23755_23804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (13))){
var inst_23699 = (state_23744[(10)]);
var inst_23701 = cljs.core.chunked_seq_QMARK_.call(null,inst_23699);
var state_23744__$1 = state_23744;
if(inst_23701){
var statearr_23756_23805 = state_23744__$1;
(statearr_23756_23805[(1)] = (16));

} else {
var statearr_23757_23806 = state_23744__$1;
(statearr_23757_23806[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (22))){
var inst_23729 = (state_23744[(2)]);
var state_23744__$1 = state_23744;
if(cljs.core.truth_(inst_23729)){
var statearr_23758_23807 = state_23744__$1;
(statearr_23758_23807[(1)] = (23));

} else {
var statearr_23759_23808 = state_23744__$1;
(statearr_23759_23808[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (6))){
var inst_23725 = (state_23744[(11)]);
var inst_23675 = (state_23744[(8)]);
var inst_23723 = (state_23744[(7)]);
var inst_23723__$1 = topic_fn.call(null,inst_23675);
var inst_23724 = cljs.core.deref.call(null,mults);
var inst_23725__$1 = cljs.core.get.call(null,inst_23724,inst_23723__$1);
var state_23744__$1 = (function (){var statearr_23760 = state_23744;
(statearr_23760[(11)] = inst_23725__$1);

(statearr_23760[(7)] = inst_23723__$1);

return statearr_23760;
})();
if(cljs.core.truth_(inst_23725__$1)){
var statearr_23761_23809 = state_23744__$1;
(statearr_23761_23809[(1)] = (19));

} else {
var statearr_23762_23810 = state_23744__$1;
(statearr_23762_23810[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (25))){
var inst_23734 = (state_23744[(2)]);
var state_23744__$1 = state_23744;
var statearr_23763_23811 = state_23744__$1;
(statearr_23763_23811[(2)] = inst_23734);

(statearr_23763_23811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (17))){
var inst_23699 = (state_23744[(10)]);
var inst_23708 = cljs.core.first.call(null,inst_23699);
var inst_23709 = cljs.core.async.muxch_STAR_.call(null,inst_23708);
var inst_23710 = cljs.core.async.close_BANG_.call(null,inst_23709);
var inst_23711 = cljs.core.next.call(null,inst_23699);
var inst_23685 = inst_23711;
var inst_23686 = null;
var inst_23687 = (0);
var inst_23688 = (0);
var state_23744__$1 = (function (){var statearr_23764 = state_23744;
(statearr_23764[(12)] = inst_23710);

(statearr_23764[(13)] = inst_23687);

(statearr_23764[(14)] = inst_23688);

(statearr_23764[(15)] = inst_23685);

(statearr_23764[(16)] = inst_23686);

return statearr_23764;
})();
var statearr_23765_23812 = state_23744__$1;
(statearr_23765_23812[(2)] = null);

(statearr_23765_23812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (3))){
var inst_23742 = (state_23744[(2)]);
var state_23744__$1 = state_23744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23744__$1,inst_23742);
} else {
if((state_val_23745 === (12))){
var inst_23719 = (state_23744[(2)]);
var state_23744__$1 = state_23744;
var statearr_23766_23813 = state_23744__$1;
(statearr_23766_23813[(2)] = inst_23719);

(statearr_23766_23813[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (2))){
var state_23744__$1 = state_23744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23744__$1,(4),ch);
} else {
if((state_val_23745 === (23))){
var state_23744__$1 = state_23744;
var statearr_23767_23814 = state_23744__$1;
(statearr_23767_23814[(2)] = null);

(statearr_23767_23814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (19))){
var inst_23725 = (state_23744[(11)]);
var inst_23675 = (state_23744[(8)]);
var inst_23727 = cljs.core.async.muxch_STAR_.call(null,inst_23725);
var state_23744__$1 = state_23744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23744__$1,(22),inst_23727,inst_23675);
} else {
if((state_val_23745 === (11))){
var inst_23699 = (state_23744[(10)]);
var inst_23685 = (state_23744[(15)]);
var inst_23699__$1 = cljs.core.seq.call(null,inst_23685);
var state_23744__$1 = (function (){var statearr_23768 = state_23744;
(statearr_23768[(10)] = inst_23699__$1);

return statearr_23768;
})();
if(inst_23699__$1){
var statearr_23769_23815 = state_23744__$1;
(statearr_23769_23815[(1)] = (13));

} else {
var statearr_23770_23816 = state_23744__$1;
(statearr_23770_23816[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (9))){
var inst_23721 = (state_23744[(2)]);
var state_23744__$1 = state_23744;
var statearr_23771_23817 = state_23744__$1;
(statearr_23771_23817[(2)] = inst_23721);

(statearr_23771_23817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (5))){
var inst_23682 = cljs.core.deref.call(null,mults);
var inst_23683 = cljs.core.vals.call(null,inst_23682);
var inst_23684 = cljs.core.seq.call(null,inst_23683);
var inst_23685 = inst_23684;
var inst_23686 = null;
var inst_23687 = (0);
var inst_23688 = (0);
var state_23744__$1 = (function (){var statearr_23772 = state_23744;
(statearr_23772[(13)] = inst_23687);

(statearr_23772[(14)] = inst_23688);

(statearr_23772[(15)] = inst_23685);

(statearr_23772[(16)] = inst_23686);

return statearr_23772;
})();
var statearr_23773_23818 = state_23744__$1;
(statearr_23773_23818[(2)] = null);

(statearr_23773_23818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (14))){
var state_23744__$1 = state_23744;
var statearr_23777_23819 = state_23744__$1;
(statearr_23777_23819[(2)] = null);

(statearr_23777_23819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (16))){
var inst_23699 = (state_23744[(10)]);
var inst_23703 = cljs.core.chunk_first.call(null,inst_23699);
var inst_23704 = cljs.core.chunk_rest.call(null,inst_23699);
var inst_23705 = cljs.core.count.call(null,inst_23703);
var inst_23685 = inst_23704;
var inst_23686 = inst_23703;
var inst_23687 = inst_23705;
var inst_23688 = (0);
var state_23744__$1 = (function (){var statearr_23778 = state_23744;
(statearr_23778[(13)] = inst_23687);

(statearr_23778[(14)] = inst_23688);

(statearr_23778[(15)] = inst_23685);

(statearr_23778[(16)] = inst_23686);

return statearr_23778;
})();
var statearr_23779_23820 = state_23744__$1;
(statearr_23779_23820[(2)] = null);

(statearr_23779_23820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (10))){
var inst_23687 = (state_23744[(13)]);
var inst_23688 = (state_23744[(14)]);
var inst_23685 = (state_23744[(15)]);
var inst_23686 = (state_23744[(16)]);
var inst_23693 = cljs.core._nth.call(null,inst_23686,inst_23688);
var inst_23694 = cljs.core.async.muxch_STAR_.call(null,inst_23693);
var inst_23695 = cljs.core.async.close_BANG_.call(null,inst_23694);
var inst_23696 = (inst_23688 + (1));
var tmp23774 = inst_23687;
var tmp23775 = inst_23685;
var tmp23776 = inst_23686;
var inst_23685__$1 = tmp23775;
var inst_23686__$1 = tmp23776;
var inst_23687__$1 = tmp23774;
var inst_23688__$1 = inst_23696;
var state_23744__$1 = (function (){var statearr_23780 = state_23744;
(statearr_23780[(13)] = inst_23687__$1);

(statearr_23780[(14)] = inst_23688__$1);

(statearr_23780[(17)] = inst_23695);

(statearr_23780[(15)] = inst_23685__$1);

(statearr_23780[(16)] = inst_23686__$1);

return statearr_23780;
})();
var statearr_23781_23821 = state_23744__$1;
(statearr_23781_23821[(2)] = null);

(statearr_23781_23821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (18))){
var inst_23714 = (state_23744[(2)]);
var state_23744__$1 = state_23744;
var statearr_23782_23822 = state_23744__$1;
(statearr_23782_23822[(2)] = inst_23714);

(statearr_23782_23822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23745 === (8))){
var inst_23687 = (state_23744[(13)]);
var inst_23688 = (state_23744[(14)]);
var inst_23690 = (inst_23688 < inst_23687);
var inst_23691 = inst_23690;
var state_23744__$1 = state_23744;
if(cljs.core.truth_(inst_23691)){
var statearr_23783_23823 = state_23744__$1;
(statearr_23783_23823[(1)] = (10));

} else {
var statearr_23784_23824 = state_23744__$1;
(statearr_23784_23824[(1)] = (11));

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
});})(c__21897__auto___23796,mults,ensure_mult,p))
;
return ((function (switch__21785__auto__,c__21897__auto___23796,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21786__auto__ = null;
var cljs$core$async$state_machine__21786__auto____0 = (function (){
var statearr_23788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23788[(0)] = cljs$core$async$state_machine__21786__auto__);

(statearr_23788[(1)] = (1));

return statearr_23788;
});
var cljs$core$async$state_machine__21786__auto____1 = (function (state_23744){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_23744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e23789){if((e23789 instanceof Object)){
var ex__21789__auto__ = e23789;
var statearr_23790_23825 = state_23744;
(statearr_23790_23825[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23826 = state_23744;
state_23744 = G__23826;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$state_machine__21786__auto__ = function(state_23744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21786__auto____1.call(this,state_23744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21786__auto____0;
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21786__auto____1;
return cljs$core$async$state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___23796,mults,ensure_mult,p))
})();
var state__21899__auto__ = (function (){var statearr_23791 = f__21898__auto__.call(null);
(statearr_23791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___23796);

return statearr_23791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___23796,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23827 = [];
var len__17829__auto___23830 = arguments.length;
var i__17830__auto___23831 = (0);
while(true){
if((i__17830__auto___23831 < len__17829__auto___23830)){
args23827.push((arguments[i__17830__auto___23831]));

var G__23832 = (i__17830__auto___23831 + (1));
i__17830__auto___23831 = G__23832;
continue;
} else {
}
break;
}

var G__23829 = args23827.length;
switch (G__23829) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23827.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23834 = [];
var len__17829__auto___23837 = arguments.length;
var i__17830__auto___23838 = (0);
while(true){
if((i__17830__auto___23838 < len__17829__auto___23837)){
args23834.push((arguments[i__17830__auto___23838]));

var G__23839 = (i__17830__auto___23838 + (1));
i__17830__auto___23838 = G__23839;
continue;
} else {
}
break;
}

var G__23836 = args23834.length;
switch (G__23836) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23834.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23841 = [];
var len__17829__auto___23912 = arguments.length;
var i__17830__auto___23913 = (0);
while(true){
if((i__17830__auto___23913 < len__17829__auto___23912)){
args23841.push((arguments[i__17830__auto___23913]));

var G__23914 = (i__17830__auto___23913 + (1));
i__17830__auto___23913 = G__23914;
continue;
} else {
}
break;
}

var G__23843 = args23841.length;
switch (G__23843) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23841.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
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
var c__21897__auto___23916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___23916,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___23916,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23882){
var state_val_23883 = (state_23882[(1)]);
if((state_val_23883 === (7))){
var state_23882__$1 = state_23882;
var statearr_23884_23917 = state_23882__$1;
(statearr_23884_23917[(2)] = null);

(statearr_23884_23917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23883 === (1))){
var state_23882__$1 = state_23882;
var statearr_23885_23918 = state_23882__$1;
(statearr_23885_23918[(2)] = null);

(statearr_23885_23918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23883 === (4))){
var inst_23846 = (state_23882[(7)]);
var inst_23848 = (inst_23846 < cnt);
var state_23882__$1 = state_23882;
if(cljs.core.truth_(inst_23848)){
var statearr_23886_23919 = state_23882__$1;
(statearr_23886_23919[(1)] = (6));

} else {
var statearr_23887_23920 = state_23882__$1;
(statearr_23887_23920[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23883 === (15))){
var inst_23878 = (state_23882[(2)]);
var state_23882__$1 = state_23882;
var statearr_23888_23921 = state_23882__$1;
(statearr_23888_23921[(2)] = inst_23878);

(statearr_23888_23921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23883 === (13))){
var inst_23871 = cljs.core.async.close_BANG_.call(null,out);
var state_23882__$1 = state_23882;
var statearr_23889_23922 = state_23882__$1;
(statearr_23889_23922[(2)] = inst_23871);

(statearr_23889_23922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23883 === (6))){
var state_23882__$1 = state_23882;
var statearr_23890_23923 = state_23882__$1;
(statearr_23890_23923[(2)] = null);

(statearr_23890_23923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23883 === (3))){
var inst_23880 = (state_23882[(2)]);
var state_23882__$1 = state_23882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23882__$1,inst_23880);
} else {
if((state_val_23883 === (12))){
var inst_23868 = (state_23882[(8)]);
var inst_23868__$1 = (state_23882[(2)]);
var inst_23869 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23868__$1);
var state_23882__$1 = (function (){var statearr_23891 = state_23882;
(statearr_23891[(8)] = inst_23868__$1);

return statearr_23891;
})();
if(cljs.core.truth_(inst_23869)){
var statearr_23892_23924 = state_23882__$1;
(statearr_23892_23924[(1)] = (13));

} else {
var statearr_23893_23925 = state_23882__$1;
(statearr_23893_23925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23883 === (2))){
var inst_23845 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23846 = (0);
var state_23882__$1 = (function (){var statearr_23894 = state_23882;
(statearr_23894[(9)] = inst_23845);

(statearr_23894[(7)] = inst_23846);

return statearr_23894;
})();
var statearr_23895_23926 = state_23882__$1;
(statearr_23895_23926[(2)] = null);

(statearr_23895_23926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23883 === (11))){
var inst_23846 = (state_23882[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23882,(10),Object,null,(9));
var inst_23855 = chs__$1.call(null,inst_23846);
var inst_23856 = done.call(null,inst_23846);
var inst_23857 = cljs.core.async.take_BANG_.call(null,inst_23855,inst_23856);
var state_23882__$1 = state_23882;
var statearr_23896_23927 = state_23882__$1;
(statearr_23896_23927[(2)] = inst_23857);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23882__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23883 === (9))){
var inst_23846 = (state_23882[(7)]);
var inst_23859 = (state_23882[(2)]);
var inst_23860 = (inst_23846 + (1));
var inst_23846__$1 = inst_23860;
var state_23882__$1 = (function (){var statearr_23897 = state_23882;
(statearr_23897[(7)] = inst_23846__$1);

(statearr_23897[(10)] = inst_23859);

return statearr_23897;
})();
var statearr_23898_23928 = state_23882__$1;
(statearr_23898_23928[(2)] = null);

(statearr_23898_23928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23883 === (5))){
var inst_23866 = (state_23882[(2)]);
var state_23882__$1 = (function (){var statearr_23899 = state_23882;
(statearr_23899[(11)] = inst_23866);

return statearr_23899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23882__$1,(12),dchan);
} else {
if((state_val_23883 === (14))){
var inst_23868 = (state_23882[(8)]);
var inst_23873 = cljs.core.apply.call(null,f,inst_23868);
var state_23882__$1 = state_23882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23882__$1,(16),out,inst_23873);
} else {
if((state_val_23883 === (16))){
var inst_23875 = (state_23882[(2)]);
var state_23882__$1 = (function (){var statearr_23900 = state_23882;
(statearr_23900[(12)] = inst_23875);

return statearr_23900;
})();
var statearr_23901_23929 = state_23882__$1;
(statearr_23901_23929[(2)] = null);

(statearr_23901_23929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23883 === (10))){
var inst_23850 = (state_23882[(2)]);
var inst_23851 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23882__$1 = (function (){var statearr_23902 = state_23882;
(statearr_23902[(13)] = inst_23850);

return statearr_23902;
})();
var statearr_23903_23930 = state_23882__$1;
(statearr_23903_23930[(2)] = inst_23851);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23882__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23883 === (8))){
var inst_23864 = (state_23882[(2)]);
var state_23882__$1 = state_23882;
var statearr_23904_23931 = state_23882__$1;
(statearr_23904_23931[(2)] = inst_23864);

(statearr_23904_23931[(1)] = (5));


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
});})(c__21897__auto___23916,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21785__auto__,c__21897__auto___23916,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21786__auto__ = null;
var cljs$core$async$state_machine__21786__auto____0 = (function (){
var statearr_23908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23908[(0)] = cljs$core$async$state_machine__21786__auto__);

(statearr_23908[(1)] = (1));

return statearr_23908;
});
var cljs$core$async$state_machine__21786__auto____1 = (function (state_23882){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_23882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e23909){if((e23909 instanceof Object)){
var ex__21789__auto__ = e23909;
var statearr_23910_23932 = state_23882;
(statearr_23910_23932[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23933 = state_23882;
state_23882 = G__23933;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$state_machine__21786__auto__ = function(state_23882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21786__auto____1.call(this,state_23882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21786__auto____0;
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21786__auto____1;
return cljs$core$async$state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___23916,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21899__auto__ = (function (){var statearr_23911 = f__21898__auto__.call(null);
(statearr_23911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___23916);

return statearr_23911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___23916,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23935 = [];
var len__17829__auto___23991 = arguments.length;
var i__17830__auto___23992 = (0);
while(true){
if((i__17830__auto___23992 < len__17829__auto___23991)){
args23935.push((arguments[i__17830__auto___23992]));

var G__23993 = (i__17830__auto___23992 + (1));
i__17830__auto___23992 = G__23993;
continue;
} else {
}
break;
}

var G__23937 = args23935.length;
switch (G__23937) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23935.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21897__auto___23995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___23995,out){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___23995,out){
return (function (state_23967){
var state_val_23968 = (state_23967[(1)]);
if((state_val_23968 === (7))){
var inst_23947 = (state_23967[(7)]);
var inst_23946 = (state_23967[(8)]);
var inst_23946__$1 = (state_23967[(2)]);
var inst_23947__$1 = cljs.core.nth.call(null,inst_23946__$1,(0),null);
var inst_23948 = cljs.core.nth.call(null,inst_23946__$1,(1),null);
var inst_23949 = (inst_23947__$1 == null);
var state_23967__$1 = (function (){var statearr_23969 = state_23967;
(statearr_23969[(7)] = inst_23947__$1);

(statearr_23969[(8)] = inst_23946__$1);

(statearr_23969[(9)] = inst_23948);

return statearr_23969;
})();
if(cljs.core.truth_(inst_23949)){
var statearr_23970_23996 = state_23967__$1;
(statearr_23970_23996[(1)] = (8));

} else {
var statearr_23971_23997 = state_23967__$1;
(statearr_23971_23997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23968 === (1))){
var inst_23938 = cljs.core.vec.call(null,chs);
var inst_23939 = inst_23938;
var state_23967__$1 = (function (){var statearr_23972 = state_23967;
(statearr_23972[(10)] = inst_23939);

return statearr_23972;
})();
var statearr_23973_23998 = state_23967__$1;
(statearr_23973_23998[(2)] = null);

(statearr_23973_23998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23968 === (4))){
var inst_23939 = (state_23967[(10)]);
var state_23967__$1 = state_23967;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23967__$1,(7),inst_23939);
} else {
if((state_val_23968 === (6))){
var inst_23963 = (state_23967[(2)]);
var state_23967__$1 = state_23967;
var statearr_23974_23999 = state_23967__$1;
(statearr_23974_23999[(2)] = inst_23963);

(statearr_23974_23999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23968 === (3))){
var inst_23965 = (state_23967[(2)]);
var state_23967__$1 = state_23967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23967__$1,inst_23965);
} else {
if((state_val_23968 === (2))){
var inst_23939 = (state_23967[(10)]);
var inst_23941 = cljs.core.count.call(null,inst_23939);
var inst_23942 = (inst_23941 > (0));
var state_23967__$1 = state_23967;
if(cljs.core.truth_(inst_23942)){
var statearr_23976_24000 = state_23967__$1;
(statearr_23976_24000[(1)] = (4));

} else {
var statearr_23977_24001 = state_23967__$1;
(statearr_23977_24001[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23968 === (11))){
var inst_23939 = (state_23967[(10)]);
var inst_23956 = (state_23967[(2)]);
var tmp23975 = inst_23939;
var inst_23939__$1 = tmp23975;
var state_23967__$1 = (function (){var statearr_23978 = state_23967;
(statearr_23978[(11)] = inst_23956);

(statearr_23978[(10)] = inst_23939__$1);

return statearr_23978;
})();
var statearr_23979_24002 = state_23967__$1;
(statearr_23979_24002[(2)] = null);

(statearr_23979_24002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23968 === (9))){
var inst_23947 = (state_23967[(7)]);
var state_23967__$1 = state_23967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23967__$1,(11),out,inst_23947);
} else {
if((state_val_23968 === (5))){
var inst_23961 = cljs.core.async.close_BANG_.call(null,out);
var state_23967__$1 = state_23967;
var statearr_23980_24003 = state_23967__$1;
(statearr_23980_24003[(2)] = inst_23961);

(statearr_23980_24003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23968 === (10))){
var inst_23959 = (state_23967[(2)]);
var state_23967__$1 = state_23967;
var statearr_23981_24004 = state_23967__$1;
(statearr_23981_24004[(2)] = inst_23959);

(statearr_23981_24004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23968 === (8))){
var inst_23947 = (state_23967[(7)]);
var inst_23946 = (state_23967[(8)]);
var inst_23939 = (state_23967[(10)]);
var inst_23948 = (state_23967[(9)]);
var inst_23951 = (function (){var cs = inst_23939;
var vec__23944 = inst_23946;
var v = inst_23947;
var c = inst_23948;
return ((function (cs,vec__23944,v,c,inst_23947,inst_23946,inst_23939,inst_23948,state_val_23968,c__21897__auto___23995,out){
return (function (p1__23934_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23934_SHARP_);
});
;})(cs,vec__23944,v,c,inst_23947,inst_23946,inst_23939,inst_23948,state_val_23968,c__21897__auto___23995,out))
})();
var inst_23952 = cljs.core.filterv.call(null,inst_23951,inst_23939);
var inst_23939__$1 = inst_23952;
var state_23967__$1 = (function (){var statearr_23982 = state_23967;
(statearr_23982[(10)] = inst_23939__$1);

return statearr_23982;
})();
var statearr_23983_24005 = state_23967__$1;
(statearr_23983_24005[(2)] = null);

(statearr_23983_24005[(1)] = (2));


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
});})(c__21897__auto___23995,out))
;
return ((function (switch__21785__auto__,c__21897__auto___23995,out){
return (function() {
var cljs$core$async$state_machine__21786__auto__ = null;
var cljs$core$async$state_machine__21786__auto____0 = (function (){
var statearr_23987 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23987[(0)] = cljs$core$async$state_machine__21786__auto__);

(statearr_23987[(1)] = (1));

return statearr_23987;
});
var cljs$core$async$state_machine__21786__auto____1 = (function (state_23967){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_23967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e23988){if((e23988 instanceof Object)){
var ex__21789__auto__ = e23988;
var statearr_23989_24006 = state_23967;
(statearr_23989_24006[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24007 = state_23967;
state_23967 = G__24007;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$state_machine__21786__auto__ = function(state_23967){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21786__auto____1.call(this,state_23967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21786__auto____0;
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21786__auto____1;
return cljs$core$async$state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___23995,out))
})();
var state__21899__auto__ = (function (){var statearr_23990 = f__21898__auto__.call(null);
(statearr_23990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___23995);

return statearr_23990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___23995,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24008 = [];
var len__17829__auto___24057 = arguments.length;
var i__17830__auto___24058 = (0);
while(true){
if((i__17830__auto___24058 < len__17829__auto___24057)){
args24008.push((arguments[i__17830__auto___24058]));

var G__24059 = (i__17830__auto___24058 + (1));
i__17830__auto___24058 = G__24059;
continue;
} else {
}
break;
}

var G__24010 = args24008.length;
switch (G__24010) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24008.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21897__auto___24061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___24061,out){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___24061,out){
return (function (state_24034){
var state_val_24035 = (state_24034[(1)]);
if((state_val_24035 === (7))){
var inst_24016 = (state_24034[(7)]);
var inst_24016__$1 = (state_24034[(2)]);
var inst_24017 = (inst_24016__$1 == null);
var inst_24018 = cljs.core.not.call(null,inst_24017);
var state_24034__$1 = (function (){var statearr_24036 = state_24034;
(statearr_24036[(7)] = inst_24016__$1);

return statearr_24036;
})();
if(inst_24018){
var statearr_24037_24062 = state_24034__$1;
(statearr_24037_24062[(1)] = (8));

} else {
var statearr_24038_24063 = state_24034__$1;
(statearr_24038_24063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (1))){
var inst_24011 = (0);
var state_24034__$1 = (function (){var statearr_24039 = state_24034;
(statearr_24039[(8)] = inst_24011);

return statearr_24039;
})();
var statearr_24040_24064 = state_24034__$1;
(statearr_24040_24064[(2)] = null);

(statearr_24040_24064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (4))){
var state_24034__$1 = state_24034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24034__$1,(7),ch);
} else {
if((state_val_24035 === (6))){
var inst_24029 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24041_24065 = state_24034__$1;
(statearr_24041_24065[(2)] = inst_24029);

(statearr_24041_24065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (3))){
var inst_24031 = (state_24034[(2)]);
var inst_24032 = cljs.core.async.close_BANG_.call(null,out);
var state_24034__$1 = (function (){var statearr_24042 = state_24034;
(statearr_24042[(9)] = inst_24031);

return statearr_24042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24034__$1,inst_24032);
} else {
if((state_val_24035 === (2))){
var inst_24011 = (state_24034[(8)]);
var inst_24013 = (inst_24011 < n);
var state_24034__$1 = state_24034;
if(cljs.core.truth_(inst_24013)){
var statearr_24043_24066 = state_24034__$1;
(statearr_24043_24066[(1)] = (4));

} else {
var statearr_24044_24067 = state_24034__$1;
(statearr_24044_24067[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (11))){
var inst_24011 = (state_24034[(8)]);
var inst_24021 = (state_24034[(2)]);
var inst_24022 = (inst_24011 + (1));
var inst_24011__$1 = inst_24022;
var state_24034__$1 = (function (){var statearr_24045 = state_24034;
(statearr_24045[(10)] = inst_24021);

(statearr_24045[(8)] = inst_24011__$1);

return statearr_24045;
})();
var statearr_24046_24068 = state_24034__$1;
(statearr_24046_24068[(2)] = null);

(statearr_24046_24068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (9))){
var state_24034__$1 = state_24034;
var statearr_24047_24069 = state_24034__$1;
(statearr_24047_24069[(2)] = null);

(statearr_24047_24069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (5))){
var state_24034__$1 = state_24034;
var statearr_24048_24070 = state_24034__$1;
(statearr_24048_24070[(2)] = null);

(statearr_24048_24070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (10))){
var inst_24026 = (state_24034[(2)]);
var state_24034__$1 = state_24034;
var statearr_24049_24071 = state_24034__$1;
(statearr_24049_24071[(2)] = inst_24026);

(statearr_24049_24071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24035 === (8))){
var inst_24016 = (state_24034[(7)]);
var state_24034__$1 = state_24034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24034__$1,(11),out,inst_24016);
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
});})(c__21897__auto___24061,out))
;
return ((function (switch__21785__auto__,c__21897__auto___24061,out){
return (function() {
var cljs$core$async$state_machine__21786__auto__ = null;
var cljs$core$async$state_machine__21786__auto____0 = (function (){
var statearr_24053 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24053[(0)] = cljs$core$async$state_machine__21786__auto__);

(statearr_24053[(1)] = (1));

return statearr_24053;
});
var cljs$core$async$state_machine__21786__auto____1 = (function (state_24034){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_24034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e24054){if((e24054 instanceof Object)){
var ex__21789__auto__ = e24054;
var statearr_24055_24072 = state_24034;
(statearr_24055_24072[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24073 = state_24034;
state_24034 = G__24073;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$state_machine__21786__auto__ = function(state_24034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21786__auto____1.call(this,state_24034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21786__auto____0;
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21786__auto____1;
return cljs$core$async$state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___24061,out))
})();
var state__21899__auto__ = (function (){var statearr_24056 = f__21898__auto__.call(null);
(statearr_24056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___24061);

return statearr_24056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___24061,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24081 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24081 = (function (map_LT_,f,ch,meta24082){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24082 = meta24082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24083,meta24082__$1){
var self__ = this;
var _24083__$1 = this;
return (new cljs.core.async.t_cljs$core$async24081(self__.map_LT_,self__.f,self__.ch,meta24082__$1));
});

cljs.core.async.t_cljs$core$async24081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24083){
var self__ = this;
var _24083__$1 = this;
return self__.meta24082;
});

cljs.core.async.t_cljs$core$async24081.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24081.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24081.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24081.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24081.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24084 = (function (map_LT_,f,ch,meta24082,_,fn1,meta24085){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24082 = meta24082;
this._ = _;
this.fn1 = fn1;
this.meta24085 = meta24085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24086,meta24085__$1){
var self__ = this;
var _24086__$1 = this;
return (new cljs.core.async.t_cljs$core$async24084(self__.map_LT_,self__.f,self__.ch,self__.meta24082,self__._,self__.fn1,meta24085__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24086){
var self__ = this;
var _24086__$1 = this;
return self__.meta24085;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24084.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24084.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24074_SHARP_){
return f1.call(null,(((p1__24074_SHARP_ == null))?null:self__.f.call(null,p1__24074_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24084.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24082","meta24082",315375157,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24081","cljs.core.async/t_cljs$core$async24081",1784641179,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24085","meta24085",1599154381,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24084.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24084";

cljs.core.async.t_cljs$core$async24084.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async24084");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24084 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24084(map_LT___$1,f__$1,ch__$1,meta24082__$1,___$2,fn1__$1,meta24085){
return (new cljs.core.async.t_cljs$core$async24084(map_LT___$1,f__$1,ch__$1,meta24082__$1,___$2,fn1__$1,meta24085));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24084(self__.map_LT_,self__.f,self__.ch,self__.meta24082,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16759__auto__ = ret;
if(cljs.core.truth_(and__16759__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16759__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24081.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24081.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24082","meta24082",315375157,null)], null);
});

cljs.core.async.t_cljs$core$async24081.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24081";

cljs.core.async.t_cljs$core$async24081.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async24081");
});

cljs.core.async.__GT_t_cljs$core$async24081 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24081(map_LT___$1,f__$1,ch__$1,meta24082){
return (new cljs.core.async.t_cljs$core$async24081(map_LT___$1,f__$1,ch__$1,meta24082));
});

}

return (new cljs.core.async.t_cljs$core$async24081(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24090 = (function (map_GT_,f,ch,meta24091){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24091 = meta24091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24092,meta24091__$1){
var self__ = this;
var _24092__$1 = this;
return (new cljs.core.async.t_cljs$core$async24090(self__.map_GT_,self__.f,self__.ch,meta24091__$1));
});

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24092){
var self__ = this;
var _24092__$1 = this;
return self__.meta24091;
});

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24090.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24091","meta24091",1726160090,null)], null);
});

cljs.core.async.t_cljs$core$async24090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24090";

cljs.core.async.t_cljs$core$async24090.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async24090");
});

cljs.core.async.__GT_t_cljs$core$async24090 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24090(map_GT___$1,f__$1,ch__$1,meta24091){
return (new cljs.core.async.t_cljs$core$async24090(map_GT___$1,f__$1,ch__$1,meta24091));
});

}

return (new cljs.core.async.t_cljs$core$async24090(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24096 = (function (filter_GT_,p,ch,meta24097){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24097 = meta24097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24098,meta24097__$1){
var self__ = this;
var _24098__$1 = this;
return (new cljs.core.async.t_cljs$core$async24096(self__.filter_GT_,self__.p,self__.ch,meta24097__$1));
});

cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24098){
var self__ = this;
var _24098__$1 = this;
return self__.meta24097;
});

cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24096.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24097","meta24097",352671266,null)], null);
});

cljs.core.async.t_cljs$core$async24096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24096";

cljs.core.async.t_cljs$core$async24096.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async24096");
});

cljs.core.async.__GT_t_cljs$core$async24096 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24096(filter_GT___$1,p__$1,ch__$1,meta24097){
return (new cljs.core.async.t_cljs$core$async24096(filter_GT___$1,p__$1,ch__$1,meta24097));
});

}

return (new cljs.core.async.t_cljs$core$async24096(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24099 = [];
var len__17829__auto___24143 = arguments.length;
var i__17830__auto___24144 = (0);
while(true){
if((i__17830__auto___24144 < len__17829__auto___24143)){
args24099.push((arguments[i__17830__auto___24144]));

var G__24145 = (i__17830__auto___24144 + (1));
i__17830__auto___24144 = G__24145;
continue;
} else {
}
break;
}

var G__24101 = args24099.length;
switch (G__24101) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24099.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21897__auto___24147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___24147,out){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___24147,out){
return (function (state_24122){
var state_val_24123 = (state_24122[(1)]);
if((state_val_24123 === (7))){
var inst_24118 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
var statearr_24124_24148 = state_24122__$1;
(statearr_24124_24148[(2)] = inst_24118);

(statearr_24124_24148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (1))){
var state_24122__$1 = state_24122;
var statearr_24125_24149 = state_24122__$1;
(statearr_24125_24149[(2)] = null);

(statearr_24125_24149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (4))){
var inst_24104 = (state_24122[(7)]);
var inst_24104__$1 = (state_24122[(2)]);
var inst_24105 = (inst_24104__$1 == null);
var state_24122__$1 = (function (){var statearr_24126 = state_24122;
(statearr_24126[(7)] = inst_24104__$1);

return statearr_24126;
})();
if(cljs.core.truth_(inst_24105)){
var statearr_24127_24150 = state_24122__$1;
(statearr_24127_24150[(1)] = (5));

} else {
var statearr_24128_24151 = state_24122__$1;
(statearr_24128_24151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (6))){
var inst_24104 = (state_24122[(7)]);
var inst_24109 = p.call(null,inst_24104);
var state_24122__$1 = state_24122;
if(cljs.core.truth_(inst_24109)){
var statearr_24129_24152 = state_24122__$1;
(statearr_24129_24152[(1)] = (8));

} else {
var statearr_24130_24153 = state_24122__$1;
(statearr_24130_24153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (3))){
var inst_24120 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24122__$1,inst_24120);
} else {
if((state_val_24123 === (2))){
var state_24122__$1 = state_24122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24122__$1,(4),ch);
} else {
if((state_val_24123 === (11))){
var inst_24112 = (state_24122[(2)]);
var state_24122__$1 = state_24122;
var statearr_24131_24154 = state_24122__$1;
(statearr_24131_24154[(2)] = inst_24112);

(statearr_24131_24154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (9))){
var state_24122__$1 = state_24122;
var statearr_24132_24155 = state_24122__$1;
(statearr_24132_24155[(2)] = null);

(statearr_24132_24155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (5))){
var inst_24107 = cljs.core.async.close_BANG_.call(null,out);
var state_24122__$1 = state_24122;
var statearr_24133_24156 = state_24122__$1;
(statearr_24133_24156[(2)] = inst_24107);

(statearr_24133_24156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (10))){
var inst_24115 = (state_24122[(2)]);
var state_24122__$1 = (function (){var statearr_24134 = state_24122;
(statearr_24134[(8)] = inst_24115);

return statearr_24134;
})();
var statearr_24135_24157 = state_24122__$1;
(statearr_24135_24157[(2)] = null);

(statearr_24135_24157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24123 === (8))){
var inst_24104 = (state_24122[(7)]);
var state_24122__$1 = state_24122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24122__$1,(11),out,inst_24104);
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
});})(c__21897__auto___24147,out))
;
return ((function (switch__21785__auto__,c__21897__auto___24147,out){
return (function() {
var cljs$core$async$state_machine__21786__auto__ = null;
var cljs$core$async$state_machine__21786__auto____0 = (function (){
var statearr_24139 = [null,null,null,null,null,null,null,null,null];
(statearr_24139[(0)] = cljs$core$async$state_machine__21786__auto__);

(statearr_24139[(1)] = (1));

return statearr_24139;
});
var cljs$core$async$state_machine__21786__auto____1 = (function (state_24122){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_24122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e24140){if((e24140 instanceof Object)){
var ex__21789__auto__ = e24140;
var statearr_24141_24158 = state_24122;
(statearr_24141_24158[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24159 = state_24122;
state_24122 = G__24159;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$state_machine__21786__auto__ = function(state_24122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21786__auto____1.call(this,state_24122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21786__auto____0;
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21786__auto____1;
return cljs$core$async$state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___24147,out))
})();
var state__21899__auto__ = (function (){var statearr_24142 = f__21898__auto__.call(null);
(statearr_24142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___24147);

return statearr_24142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___24147,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24160 = [];
var len__17829__auto___24163 = arguments.length;
var i__17830__auto___24164 = (0);
while(true){
if((i__17830__auto___24164 < len__17829__auto___24163)){
args24160.push((arguments[i__17830__auto___24164]));

var G__24165 = (i__17830__auto___24164 + (1));
i__17830__auto___24164 = G__24165;
continue;
} else {
}
break;
}

var G__24162 = args24160.length;
switch (G__24162) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24160.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21897__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto__){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto__){
return (function (state_24332){
var state_val_24333 = (state_24332[(1)]);
if((state_val_24333 === (7))){
var inst_24328 = (state_24332[(2)]);
var state_24332__$1 = state_24332;
var statearr_24334_24375 = state_24332__$1;
(statearr_24334_24375[(2)] = inst_24328);

(statearr_24334_24375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (20))){
var inst_24298 = (state_24332[(7)]);
var inst_24309 = (state_24332[(2)]);
var inst_24310 = cljs.core.next.call(null,inst_24298);
var inst_24284 = inst_24310;
var inst_24285 = null;
var inst_24286 = (0);
var inst_24287 = (0);
var state_24332__$1 = (function (){var statearr_24335 = state_24332;
(statearr_24335[(8)] = inst_24286);

(statearr_24335[(9)] = inst_24285);

(statearr_24335[(10)] = inst_24284);

(statearr_24335[(11)] = inst_24287);

(statearr_24335[(12)] = inst_24309);

return statearr_24335;
})();
var statearr_24336_24376 = state_24332__$1;
(statearr_24336_24376[(2)] = null);

(statearr_24336_24376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (1))){
var state_24332__$1 = state_24332;
var statearr_24337_24377 = state_24332__$1;
(statearr_24337_24377[(2)] = null);

(statearr_24337_24377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (4))){
var inst_24273 = (state_24332[(13)]);
var inst_24273__$1 = (state_24332[(2)]);
var inst_24274 = (inst_24273__$1 == null);
var state_24332__$1 = (function (){var statearr_24338 = state_24332;
(statearr_24338[(13)] = inst_24273__$1);

return statearr_24338;
})();
if(cljs.core.truth_(inst_24274)){
var statearr_24339_24378 = state_24332__$1;
(statearr_24339_24378[(1)] = (5));

} else {
var statearr_24340_24379 = state_24332__$1;
(statearr_24340_24379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (15))){
var state_24332__$1 = state_24332;
var statearr_24344_24380 = state_24332__$1;
(statearr_24344_24380[(2)] = null);

(statearr_24344_24380[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (21))){
var state_24332__$1 = state_24332;
var statearr_24345_24381 = state_24332__$1;
(statearr_24345_24381[(2)] = null);

(statearr_24345_24381[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (13))){
var inst_24286 = (state_24332[(8)]);
var inst_24285 = (state_24332[(9)]);
var inst_24284 = (state_24332[(10)]);
var inst_24287 = (state_24332[(11)]);
var inst_24294 = (state_24332[(2)]);
var inst_24295 = (inst_24287 + (1));
var tmp24341 = inst_24286;
var tmp24342 = inst_24285;
var tmp24343 = inst_24284;
var inst_24284__$1 = tmp24343;
var inst_24285__$1 = tmp24342;
var inst_24286__$1 = tmp24341;
var inst_24287__$1 = inst_24295;
var state_24332__$1 = (function (){var statearr_24346 = state_24332;
(statearr_24346[(8)] = inst_24286__$1);

(statearr_24346[(9)] = inst_24285__$1);

(statearr_24346[(10)] = inst_24284__$1);

(statearr_24346[(11)] = inst_24287__$1);

(statearr_24346[(14)] = inst_24294);

return statearr_24346;
})();
var statearr_24347_24382 = state_24332__$1;
(statearr_24347_24382[(2)] = null);

(statearr_24347_24382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (22))){
var state_24332__$1 = state_24332;
var statearr_24348_24383 = state_24332__$1;
(statearr_24348_24383[(2)] = null);

(statearr_24348_24383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (6))){
var inst_24273 = (state_24332[(13)]);
var inst_24282 = f.call(null,inst_24273);
var inst_24283 = cljs.core.seq.call(null,inst_24282);
var inst_24284 = inst_24283;
var inst_24285 = null;
var inst_24286 = (0);
var inst_24287 = (0);
var state_24332__$1 = (function (){var statearr_24349 = state_24332;
(statearr_24349[(8)] = inst_24286);

(statearr_24349[(9)] = inst_24285);

(statearr_24349[(10)] = inst_24284);

(statearr_24349[(11)] = inst_24287);

return statearr_24349;
})();
var statearr_24350_24384 = state_24332__$1;
(statearr_24350_24384[(2)] = null);

(statearr_24350_24384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (17))){
var inst_24298 = (state_24332[(7)]);
var inst_24302 = cljs.core.chunk_first.call(null,inst_24298);
var inst_24303 = cljs.core.chunk_rest.call(null,inst_24298);
var inst_24304 = cljs.core.count.call(null,inst_24302);
var inst_24284 = inst_24303;
var inst_24285 = inst_24302;
var inst_24286 = inst_24304;
var inst_24287 = (0);
var state_24332__$1 = (function (){var statearr_24351 = state_24332;
(statearr_24351[(8)] = inst_24286);

(statearr_24351[(9)] = inst_24285);

(statearr_24351[(10)] = inst_24284);

(statearr_24351[(11)] = inst_24287);

return statearr_24351;
})();
var statearr_24352_24385 = state_24332__$1;
(statearr_24352_24385[(2)] = null);

(statearr_24352_24385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (3))){
var inst_24330 = (state_24332[(2)]);
var state_24332__$1 = state_24332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24332__$1,inst_24330);
} else {
if((state_val_24333 === (12))){
var inst_24318 = (state_24332[(2)]);
var state_24332__$1 = state_24332;
var statearr_24353_24386 = state_24332__$1;
(statearr_24353_24386[(2)] = inst_24318);

(statearr_24353_24386[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (2))){
var state_24332__$1 = state_24332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24332__$1,(4),in$);
} else {
if((state_val_24333 === (23))){
var inst_24326 = (state_24332[(2)]);
var state_24332__$1 = state_24332;
var statearr_24354_24387 = state_24332__$1;
(statearr_24354_24387[(2)] = inst_24326);

(statearr_24354_24387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (19))){
var inst_24313 = (state_24332[(2)]);
var state_24332__$1 = state_24332;
var statearr_24355_24388 = state_24332__$1;
(statearr_24355_24388[(2)] = inst_24313);

(statearr_24355_24388[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (11))){
var inst_24284 = (state_24332[(10)]);
var inst_24298 = (state_24332[(7)]);
var inst_24298__$1 = cljs.core.seq.call(null,inst_24284);
var state_24332__$1 = (function (){var statearr_24356 = state_24332;
(statearr_24356[(7)] = inst_24298__$1);

return statearr_24356;
})();
if(inst_24298__$1){
var statearr_24357_24389 = state_24332__$1;
(statearr_24357_24389[(1)] = (14));

} else {
var statearr_24358_24390 = state_24332__$1;
(statearr_24358_24390[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (9))){
var inst_24320 = (state_24332[(2)]);
var inst_24321 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24332__$1 = (function (){var statearr_24359 = state_24332;
(statearr_24359[(15)] = inst_24320);

return statearr_24359;
})();
if(cljs.core.truth_(inst_24321)){
var statearr_24360_24391 = state_24332__$1;
(statearr_24360_24391[(1)] = (21));

} else {
var statearr_24361_24392 = state_24332__$1;
(statearr_24361_24392[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (5))){
var inst_24276 = cljs.core.async.close_BANG_.call(null,out);
var state_24332__$1 = state_24332;
var statearr_24362_24393 = state_24332__$1;
(statearr_24362_24393[(2)] = inst_24276);

(statearr_24362_24393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (14))){
var inst_24298 = (state_24332[(7)]);
var inst_24300 = cljs.core.chunked_seq_QMARK_.call(null,inst_24298);
var state_24332__$1 = state_24332;
if(inst_24300){
var statearr_24363_24394 = state_24332__$1;
(statearr_24363_24394[(1)] = (17));

} else {
var statearr_24364_24395 = state_24332__$1;
(statearr_24364_24395[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (16))){
var inst_24316 = (state_24332[(2)]);
var state_24332__$1 = state_24332;
var statearr_24365_24396 = state_24332__$1;
(statearr_24365_24396[(2)] = inst_24316);

(statearr_24365_24396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24333 === (10))){
var inst_24285 = (state_24332[(9)]);
var inst_24287 = (state_24332[(11)]);
var inst_24292 = cljs.core._nth.call(null,inst_24285,inst_24287);
var state_24332__$1 = state_24332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24332__$1,(13),out,inst_24292);
} else {
if((state_val_24333 === (18))){
var inst_24298 = (state_24332[(7)]);
var inst_24307 = cljs.core.first.call(null,inst_24298);
var state_24332__$1 = state_24332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24332__$1,(20),out,inst_24307);
} else {
if((state_val_24333 === (8))){
var inst_24286 = (state_24332[(8)]);
var inst_24287 = (state_24332[(11)]);
var inst_24289 = (inst_24287 < inst_24286);
var inst_24290 = inst_24289;
var state_24332__$1 = state_24332;
if(cljs.core.truth_(inst_24290)){
var statearr_24366_24397 = state_24332__$1;
(statearr_24366_24397[(1)] = (10));

} else {
var statearr_24367_24398 = state_24332__$1;
(statearr_24367_24398[(1)] = (11));

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
});})(c__21897__auto__))
;
return ((function (switch__21785__auto__,c__21897__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21786__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21786__auto____0 = (function (){
var statearr_24371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24371[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21786__auto__);

(statearr_24371[(1)] = (1));

return statearr_24371;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21786__auto____1 = (function (state_24332){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_24332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e24372){if((e24372 instanceof Object)){
var ex__21789__auto__ = e24372;
var statearr_24373_24399 = state_24332;
(statearr_24373_24399[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24400 = state_24332;
state_24332 = G__24400;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21786__auto__ = function(state_24332){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21786__auto____1.call(this,state_24332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21786__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21786__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto__))
})();
var state__21899__auto__ = (function (){var statearr_24374 = f__21898__auto__.call(null);
(statearr_24374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto__);

return statearr_24374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto__))
);

return c__21897__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24401 = [];
var len__17829__auto___24404 = arguments.length;
var i__17830__auto___24405 = (0);
while(true){
if((i__17830__auto___24405 < len__17829__auto___24404)){
args24401.push((arguments[i__17830__auto___24405]));

var G__24406 = (i__17830__auto___24405 + (1));
i__17830__auto___24405 = G__24406;
continue;
} else {
}
break;
}

var G__24403 = args24401.length;
switch (G__24403) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24401.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24408 = [];
var len__17829__auto___24411 = arguments.length;
var i__17830__auto___24412 = (0);
while(true){
if((i__17830__auto___24412 < len__17829__auto___24411)){
args24408.push((arguments[i__17830__auto___24412]));

var G__24413 = (i__17830__auto___24412 + (1));
i__17830__auto___24412 = G__24413;
continue;
} else {
}
break;
}

var G__24410 = args24408.length;
switch (G__24410) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24408.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24415 = [];
var len__17829__auto___24466 = arguments.length;
var i__17830__auto___24467 = (0);
while(true){
if((i__17830__auto___24467 < len__17829__auto___24466)){
args24415.push((arguments[i__17830__auto___24467]));

var G__24468 = (i__17830__auto___24467 + (1));
i__17830__auto___24467 = G__24468;
continue;
} else {
}
break;
}

var G__24417 = args24415.length;
switch (G__24417) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24415.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21897__auto___24470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___24470,out){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___24470,out){
return (function (state_24441){
var state_val_24442 = (state_24441[(1)]);
if((state_val_24442 === (7))){
var inst_24436 = (state_24441[(2)]);
var state_24441__$1 = state_24441;
var statearr_24443_24471 = state_24441__$1;
(statearr_24443_24471[(2)] = inst_24436);

(statearr_24443_24471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24442 === (1))){
var inst_24418 = null;
var state_24441__$1 = (function (){var statearr_24444 = state_24441;
(statearr_24444[(7)] = inst_24418);

return statearr_24444;
})();
var statearr_24445_24472 = state_24441__$1;
(statearr_24445_24472[(2)] = null);

(statearr_24445_24472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24442 === (4))){
var inst_24421 = (state_24441[(8)]);
var inst_24421__$1 = (state_24441[(2)]);
var inst_24422 = (inst_24421__$1 == null);
var inst_24423 = cljs.core.not.call(null,inst_24422);
var state_24441__$1 = (function (){var statearr_24446 = state_24441;
(statearr_24446[(8)] = inst_24421__$1);

return statearr_24446;
})();
if(inst_24423){
var statearr_24447_24473 = state_24441__$1;
(statearr_24447_24473[(1)] = (5));

} else {
var statearr_24448_24474 = state_24441__$1;
(statearr_24448_24474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24442 === (6))){
var state_24441__$1 = state_24441;
var statearr_24449_24475 = state_24441__$1;
(statearr_24449_24475[(2)] = null);

(statearr_24449_24475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24442 === (3))){
var inst_24438 = (state_24441[(2)]);
var inst_24439 = cljs.core.async.close_BANG_.call(null,out);
var state_24441__$1 = (function (){var statearr_24450 = state_24441;
(statearr_24450[(9)] = inst_24438);

return statearr_24450;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24441__$1,inst_24439);
} else {
if((state_val_24442 === (2))){
var state_24441__$1 = state_24441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24441__$1,(4),ch);
} else {
if((state_val_24442 === (11))){
var inst_24421 = (state_24441[(8)]);
var inst_24430 = (state_24441[(2)]);
var inst_24418 = inst_24421;
var state_24441__$1 = (function (){var statearr_24451 = state_24441;
(statearr_24451[(7)] = inst_24418);

(statearr_24451[(10)] = inst_24430);

return statearr_24451;
})();
var statearr_24452_24476 = state_24441__$1;
(statearr_24452_24476[(2)] = null);

(statearr_24452_24476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24442 === (9))){
var inst_24421 = (state_24441[(8)]);
var state_24441__$1 = state_24441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24441__$1,(11),out,inst_24421);
} else {
if((state_val_24442 === (5))){
var inst_24418 = (state_24441[(7)]);
var inst_24421 = (state_24441[(8)]);
var inst_24425 = cljs.core._EQ_.call(null,inst_24421,inst_24418);
var state_24441__$1 = state_24441;
if(inst_24425){
var statearr_24454_24477 = state_24441__$1;
(statearr_24454_24477[(1)] = (8));

} else {
var statearr_24455_24478 = state_24441__$1;
(statearr_24455_24478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24442 === (10))){
var inst_24433 = (state_24441[(2)]);
var state_24441__$1 = state_24441;
var statearr_24456_24479 = state_24441__$1;
(statearr_24456_24479[(2)] = inst_24433);

(statearr_24456_24479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24442 === (8))){
var inst_24418 = (state_24441[(7)]);
var tmp24453 = inst_24418;
var inst_24418__$1 = tmp24453;
var state_24441__$1 = (function (){var statearr_24457 = state_24441;
(statearr_24457[(7)] = inst_24418__$1);

return statearr_24457;
})();
var statearr_24458_24480 = state_24441__$1;
(statearr_24458_24480[(2)] = null);

(statearr_24458_24480[(1)] = (2));


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
});})(c__21897__auto___24470,out))
;
return ((function (switch__21785__auto__,c__21897__auto___24470,out){
return (function() {
var cljs$core$async$state_machine__21786__auto__ = null;
var cljs$core$async$state_machine__21786__auto____0 = (function (){
var statearr_24462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24462[(0)] = cljs$core$async$state_machine__21786__auto__);

(statearr_24462[(1)] = (1));

return statearr_24462;
});
var cljs$core$async$state_machine__21786__auto____1 = (function (state_24441){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_24441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e24463){if((e24463 instanceof Object)){
var ex__21789__auto__ = e24463;
var statearr_24464_24481 = state_24441;
(statearr_24464_24481[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24482 = state_24441;
state_24441 = G__24482;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$state_machine__21786__auto__ = function(state_24441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21786__auto____1.call(this,state_24441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21786__auto____0;
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21786__auto____1;
return cljs$core$async$state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___24470,out))
})();
var state__21899__auto__ = (function (){var statearr_24465 = f__21898__auto__.call(null);
(statearr_24465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___24470);

return statearr_24465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___24470,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24483 = [];
var len__17829__auto___24553 = arguments.length;
var i__17830__auto___24554 = (0);
while(true){
if((i__17830__auto___24554 < len__17829__auto___24553)){
args24483.push((arguments[i__17830__auto___24554]));

var G__24555 = (i__17830__auto___24554 + (1));
i__17830__auto___24554 = G__24555;
continue;
} else {
}
break;
}

var G__24485 = args24483.length;
switch (G__24485) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24483.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21897__auto___24557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___24557,out){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___24557,out){
return (function (state_24523){
var state_val_24524 = (state_24523[(1)]);
if((state_val_24524 === (7))){
var inst_24519 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
var statearr_24525_24558 = state_24523__$1;
(statearr_24525_24558[(2)] = inst_24519);

(statearr_24525_24558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (1))){
var inst_24486 = (new Array(n));
var inst_24487 = inst_24486;
var inst_24488 = (0);
var state_24523__$1 = (function (){var statearr_24526 = state_24523;
(statearr_24526[(7)] = inst_24487);

(statearr_24526[(8)] = inst_24488);

return statearr_24526;
})();
var statearr_24527_24559 = state_24523__$1;
(statearr_24527_24559[(2)] = null);

(statearr_24527_24559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (4))){
var inst_24491 = (state_24523[(9)]);
var inst_24491__$1 = (state_24523[(2)]);
var inst_24492 = (inst_24491__$1 == null);
var inst_24493 = cljs.core.not.call(null,inst_24492);
var state_24523__$1 = (function (){var statearr_24528 = state_24523;
(statearr_24528[(9)] = inst_24491__$1);

return statearr_24528;
})();
if(inst_24493){
var statearr_24529_24560 = state_24523__$1;
(statearr_24529_24560[(1)] = (5));

} else {
var statearr_24530_24561 = state_24523__$1;
(statearr_24530_24561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (15))){
var inst_24513 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
var statearr_24531_24562 = state_24523__$1;
(statearr_24531_24562[(2)] = inst_24513);

(statearr_24531_24562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (13))){
var state_24523__$1 = state_24523;
var statearr_24532_24563 = state_24523__$1;
(statearr_24532_24563[(2)] = null);

(statearr_24532_24563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (6))){
var inst_24488 = (state_24523[(8)]);
var inst_24509 = (inst_24488 > (0));
var state_24523__$1 = state_24523;
if(cljs.core.truth_(inst_24509)){
var statearr_24533_24564 = state_24523__$1;
(statearr_24533_24564[(1)] = (12));

} else {
var statearr_24534_24565 = state_24523__$1;
(statearr_24534_24565[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (3))){
var inst_24521 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24523__$1,inst_24521);
} else {
if((state_val_24524 === (12))){
var inst_24487 = (state_24523[(7)]);
var inst_24511 = cljs.core.vec.call(null,inst_24487);
var state_24523__$1 = state_24523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24523__$1,(15),out,inst_24511);
} else {
if((state_val_24524 === (2))){
var state_24523__$1 = state_24523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24523__$1,(4),ch);
} else {
if((state_val_24524 === (11))){
var inst_24503 = (state_24523[(2)]);
var inst_24504 = (new Array(n));
var inst_24487 = inst_24504;
var inst_24488 = (0);
var state_24523__$1 = (function (){var statearr_24535 = state_24523;
(statearr_24535[(10)] = inst_24503);

(statearr_24535[(7)] = inst_24487);

(statearr_24535[(8)] = inst_24488);

return statearr_24535;
})();
var statearr_24536_24566 = state_24523__$1;
(statearr_24536_24566[(2)] = null);

(statearr_24536_24566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (9))){
var inst_24487 = (state_24523[(7)]);
var inst_24501 = cljs.core.vec.call(null,inst_24487);
var state_24523__$1 = state_24523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24523__$1,(11),out,inst_24501);
} else {
if((state_val_24524 === (5))){
var inst_24496 = (state_24523[(11)]);
var inst_24491 = (state_24523[(9)]);
var inst_24487 = (state_24523[(7)]);
var inst_24488 = (state_24523[(8)]);
var inst_24495 = (inst_24487[inst_24488] = inst_24491);
var inst_24496__$1 = (inst_24488 + (1));
var inst_24497 = (inst_24496__$1 < n);
var state_24523__$1 = (function (){var statearr_24537 = state_24523;
(statearr_24537[(11)] = inst_24496__$1);

(statearr_24537[(12)] = inst_24495);

return statearr_24537;
})();
if(cljs.core.truth_(inst_24497)){
var statearr_24538_24567 = state_24523__$1;
(statearr_24538_24567[(1)] = (8));

} else {
var statearr_24539_24568 = state_24523__$1;
(statearr_24539_24568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (14))){
var inst_24516 = (state_24523[(2)]);
var inst_24517 = cljs.core.async.close_BANG_.call(null,out);
var state_24523__$1 = (function (){var statearr_24541 = state_24523;
(statearr_24541[(13)] = inst_24516);

return statearr_24541;
})();
var statearr_24542_24569 = state_24523__$1;
(statearr_24542_24569[(2)] = inst_24517);

(statearr_24542_24569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (10))){
var inst_24507 = (state_24523[(2)]);
var state_24523__$1 = state_24523;
var statearr_24543_24570 = state_24523__$1;
(statearr_24543_24570[(2)] = inst_24507);

(statearr_24543_24570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24524 === (8))){
var inst_24496 = (state_24523[(11)]);
var inst_24487 = (state_24523[(7)]);
var tmp24540 = inst_24487;
var inst_24487__$1 = tmp24540;
var inst_24488 = inst_24496;
var state_24523__$1 = (function (){var statearr_24544 = state_24523;
(statearr_24544[(7)] = inst_24487__$1);

(statearr_24544[(8)] = inst_24488);

return statearr_24544;
})();
var statearr_24545_24571 = state_24523__$1;
(statearr_24545_24571[(2)] = null);

(statearr_24545_24571[(1)] = (2));


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
});})(c__21897__auto___24557,out))
;
return ((function (switch__21785__auto__,c__21897__auto___24557,out){
return (function() {
var cljs$core$async$state_machine__21786__auto__ = null;
var cljs$core$async$state_machine__21786__auto____0 = (function (){
var statearr_24549 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24549[(0)] = cljs$core$async$state_machine__21786__auto__);

(statearr_24549[(1)] = (1));

return statearr_24549;
});
var cljs$core$async$state_machine__21786__auto____1 = (function (state_24523){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_24523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e24550){if((e24550 instanceof Object)){
var ex__21789__auto__ = e24550;
var statearr_24551_24572 = state_24523;
(statearr_24551_24572[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24573 = state_24523;
state_24523 = G__24573;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$state_machine__21786__auto__ = function(state_24523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21786__auto____1.call(this,state_24523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21786__auto____0;
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21786__auto____1;
return cljs$core$async$state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___24557,out))
})();
var state__21899__auto__ = (function (){var statearr_24552 = f__21898__auto__.call(null);
(statearr_24552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___24557);

return statearr_24552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___24557,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24574 = [];
var len__17829__auto___24648 = arguments.length;
var i__17830__auto___24649 = (0);
while(true){
if((i__17830__auto___24649 < len__17829__auto___24648)){
args24574.push((arguments[i__17830__auto___24649]));

var G__24650 = (i__17830__auto___24649 + (1));
i__17830__auto___24649 = G__24650;
continue;
} else {
}
break;
}

var G__24576 = args24574.length;
switch (G__24576) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24574.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21897__auto___24652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___24652,out){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___24652,out){
return (function (state_24618){
var state_val_24619 = (state_24618[(1)]);
if((state_val_24619 === (7))){
var inst_24614 = (state_24618[(2)]);
var state_24618__$1 = state_24618;
var statearr_24620_24653 = state_24618__$1;
(statearr_24620_24653[(2)] = inst_24614);

(statearr_24620_24653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (1))){
var inst_24577 = [];
var inst_24578 = inst_24577;
var inst_24579 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24618__$1 = (function (){var statearr_24621 = state_24618;
(statearr_24621[(7)] = inst_24579);

(statearr_24621[(8)] = inst_24578);

return statearr_24621;
})();
var statearr_24622_24654 = state_24618__$1;
(statearr_24622_24654[(2)] = null);

(statearr_24622_24654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (4))){
var inst_24582 = (state_24618[(9)]);
var inst_24582__$1 = (state_24618[(2)]);
var inst_24583 = (inst_24582__$1 == null);
var inst_24584 = cljs.core.not.call(null,inst_24583);
var state_24618__$1 = (function (){var statearr_24623 = state_24618;
(statearr_24623[(9)] = inst_24582__$1);

return statearr_24623;
})();
if(inst_24584){
var statearr_24624_24655 = state_24618__$1;
(statearr_24624_24655[(1)] = (5));

} else {
var statearr_24625_24656 = state_24618__$1;
(statearr_24625_24656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (15))){
var inst_24608 = (state_24618[(2)]);
var state_24618__$1 = state_24618;
var statearr_24626_24657 = state_24618__$1;
(statearr_24626_24657[(2)] = inst_24608);

(statearr_24626_24657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (13))){
var state_24618__$1 = state_24618;
var statearr_24627_24658 = state_24618__$1;
(statearr_24627_24658[(2)] = null);

(statearr_24627_24658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (6))){
var inst_24578 = (state_24618[(8)]);
var inst_24603 = inst_24578.length;
var inst_24604 = (inst_24603 > (0));
var state_24618__$1 = state_24618;
if(cljs.core.truth_(inst_24604)){
var statearr_24628_24659 = state_24618__$1;
(statearr_24628_24659[(1)] = (12));

} else {
var statearr_24629_24660 = state_24618__$1;
(statearr_24629_24660[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (3))){
var inst_24616 = (state_24618[(2)]);
var state_24618__$1 = state_24618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24618__$1,inst_24616);
} else {
if((state_val_24619 === (12))){
var inst_24578 = (state_24618[(8)]);
var inst_24606 = cljs.core.vec.call(null,inst_24578);
var state_24618__$1 = state_24618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24618__$1,(15),out,inst_24606);
} else {
if((state_val_24619 === (2))){
var state_24618__$1 = state_24618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24618__$1,(4),ch);
} else {
if((state_val_24619 === (11))){
var inst_24586 = (state_24618[(10)]);
var inst_24582 = (state_24618[(9)]);
var inst_24596 = (state_24618[(2)]);
var inst_24597 = [];
var inst_24598 = inst_24597.push(inst_24582);
var inst_24578 = inst_24597;
var inst_24579 = inst_24586;
var state_24618__$1 = (function (){var statearr_24630 = state_24618;
(statearr_24630[(11)] = inst_24598);

(statearr_24630[(12)] = inst_24596);

(statearr_24630[(7)] = inst_24579);

(statearr_24630[(8)] = inst_24578);

return statearr_24630;
})();
var statearr_24631_24661 = state_24618__$1;
(statearr_24631_24661[(2)] = null);

(statearr_24631_24661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (9))){
var inst_24578 = (state_24618[(8)]);
var inst_24594 = cljs.core.vec.call(null,inst_24578);
var state_24618__$1 = state_24618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24618__$1,(11),out,inst_24594);
} else {
if((state_val_24619 === (5))){
var inst_24586 = (state_24618[(10)]);
var inst_24579 = (state_24618[(7)]);
var inst_24582 = (state_24618[(9)]);
var inst_24586__$1 = f.call(null,inst_24582);
var inst_24587 = cljs.core._EQ_.call(null,inst_24586__$1,inst_24579);
var inst_24588 = cljs.core.keyword_identical_QMARK_.call(null,inst_24579,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24589 = (inst_24587) || (inst_24588);
var state_24618__$1 = (function (){var statearr_24632 = state_24618;
(statearr_24632[(10)] = inst_24586__$1);

return statearr_24632;
})();
if(cljs.core.truth_(inst_24589)){
var statearr_24633_24662 = state_24618__$1;
(statearr_24633_24662[(1)] = (8));

} else {
var statearr_24634_24663 = state_24618__$1;
(statearr_24634_24663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (14))){
var inst_24611 = (state_24618[(2)]);
var inst_24612 = cljs.core.async.close_BANG_.call(null,out);
var state_24618__$1 = (function (){var statearr_24636 = state_24618;
(statearr_24636[(13)] = inst_24611);

return statearr_24636;
})();
var statearr_24637_24664 = state_24618__$1;
(statearr_24637_24664[(2)] = inst_24612);

(statearr_24637_24664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (10))){
var inst_24601 = (state_24618[(2)]);
var state_24618__$1 = state_24618;
var statearr_24638_24665 = state_24618__$1;
(statearr_24638_24665[(2)] = inst_24601);

(statearr_24638_24665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (8))){
var inst_24586 = (state_24618[(10)]);
var inst_24582 = (state_24618[(9)]);
var inst_24578 = (state_24618[(8)]);
var inst_24591 = inst_24578.push(inst_24582);
var tmp24635 = inst_24578;
var inst_24578__$1 = tmp24635;
var inst_24579 = inst_24586;
var state_24618__$1 = (function (){var statearr_24639 = state_24618;
(statearr_24639[(14)] = inst_24591);

(statearr_24639[(7)] = inst_24579);

(statearr_24639[(8)] = inst_24578__$1);

return statearr_24639;
})();
var statearr_24640_24666 = state_24618__$1;
(statearr_24640_24666[(2)] = null);

(statearr_24640_24666[(1)] = (2));


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
});})(c__21897__auto___24652,out))
;
return ((function (switch__21785__auto__,c__21897__auto___24652,out){
return (function() {
var cljs$core$async$state_machine__21786__auto__ = null;
var cljs$core$async$state_machine__21786__auto____0 = (function (){
var statearr_24644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24644[(0)] = cljs$core$async$state_machine__21786__auto__);

(statearr_24644[(1)] = (1));

return statearr_24644;
});
var cljs$core$async$state_machine__21786__auto____1 = (function (state_24618){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_24618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e24645){if((e24645 instanceof Object)){
var ex__21789__auto__ = e24645;
var statearr_24646_24667 = state_24618;
(statearr_24646_24667[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24668 = state_24618;
state_24618 = G__24668;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
cljs$core$async$state_machine__21786__auto__ = function(state_24618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21786__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21786__auto____1.call(this,state_24618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21786__auto____0;
cljs$core$async$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21786__auto____1;
return cljs$core$async$state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___24652,out))
})();
var state__21899__auto__ = (function (){var statearr_24647 = f__21898__auto__.call(null);
(statearr_24647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___24652);

return statearr_24647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___24652,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map