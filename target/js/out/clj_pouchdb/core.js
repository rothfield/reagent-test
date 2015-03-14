// Compiled by ClojureScript 0.0-2760 {}
goog.provide('clj_pouchdb.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
/**
* Convert a CLJS structure to a JS object, yielding empty JS object for nil input
*/
clj_pouchdb.core.hash_to_obj = (function hash_to_obj(obj){
var jso = (function (){var or__3553__auto__ = cljs.core.clj__GT_js.call(null,obj);
if(cljs.core.truth_(or__3553__auto__)){
return or__3553__auto__;
} else {
var obj16206 = {};
return obj16206;
}
})();
return jso;
});
/**
* Convert a JS object to a hash, yielding nil for nil JS object
*/
clj_pouchdb.core.obj_to_hash = (function obj_to_hash(obj){
if(cljs.core.truth_(obj)){
return cljs.core.js__GT_clj.call(null,obj,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* Create an error hash from an error, having :error as the sole key
*/
clj_pouchdb.core.create_error = (function create_error(err){
if(cljs.core.truth_(err)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),clj_pouchdb.core.obj_to_hash.call(null,err)], null);
} else {
return null;
}
});
clj_pouchdb.core.create_result = (function (){var method_table__4450__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4451__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4452__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4453__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4454__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"clj-pouchdb.core","create-result"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4454__auto__,method_table__4450__auto__,prefer_table__4451__auto__,method_cache__4452__auto__,cached_hierarchy__4453__auto__));
})();
cljs.core._add_method.call(null,clj_pouchdb.core.create_result,new cljs.core.Keyword(null,"default","default",-1987822328),(function (jso){
return clj_pouchdb.core.obj_to_hash.call(null,jso);
}));
/**
* Create am [err resp] callback putting a proper structure to the given channel
*/
clj_pouchdb.core.responder = (function responder(c){
return (function (err,resp){
var obj = (function (){var or__3553__auto__ = clj_pouchdb.core.create_error.call(null,err);
if(cljs.core.truth_(or__3553__auto__)){
return or__3553__auto__;
} else {
return clj_pouchdb.core.create_result.call(null,resp);
}
})();
return cljs.core.async.put_BANG_.call(null,c,obj);
});
});
/**
* Create a new PouchDB database given optional name and options
* @param {...*} var_args
*/
clj_pouchdb.core.create_db = (function() { 
var create_db__delegate = function (p__16207){
var vec__16210 = p__16207;
var name = cljs.core.nth.call(null,vec__16210,(0),null);
var vec__16211 = cljs.core.nthnext.call(null,vec__16210,(1));
var options = cljs.core.nth.call(null,vec__16211,(0),null);
return (new PouchDB(name,clj_pouchdb.core.hash_to_obj.call(null,options)));
};
var create_db = function (var_args){
var p__16207 = null;
if (arguments.length > 0) {
var G__16212__i = 0, G__16212__a = new Array(arguments.length -  0);
while (G__16212__i < G__16212__a.length) {G__16212__a[G__16212__i] = arguments[G__16212__i + 0]; ++G__16212__i;}
  p__16207 = new cljs.core.IndexedSeq(G__16212__a,0);
} 
return create_db__delegate.call(this,p__16207);};
create_db.cljs$lang$maxFixedArity = 0;
create_db.cljs$lang$applyTo = (function (arglist__16213){
var p__16207 = cljs.core.seq(arglist__16213);
return create_db__delegate(p__16207);
});
create_db.cljs$core$IFn$_invoke$arity$variadic = create_db__delegate;
return create_db;
})()
;
/**
* Destroys a PouchDB database, returning a channel to the result
*/
clj_pouchdb.core.destroy_db = (function destroy_db(name){
var c = cljs.core.async.chan.call(null,(1));
PouchDB.destroy(name,clj_pouchdb.core.responder.call(null,c));

return c;
});
/**
* Put a document, returning a channel to the result
* @param {...*} var_args
*/
clj_pouchdb.core.put_doc = (function() { 
var put_doc__delegate = function (db,doc,p__16214){
var vec__16216 = p__16214;
var options = cljs.core.nth.call(null,vec__16216,(0),null);
var opts = clj_pouchdb.core.hash_to_obj.call(null,options);
var js_doc = clj_pouchdb.core.hash_to_obj.call(null,doc);
var c = cljs.core.async.chan.call(null,(1));
db.put(js_doc,opts,clj_pouchdb.core.responder.call(null,c));

return c;
};
var put_doc = function (db,doc,var_args){
var p__16214 = null;
if (arguments.length > 2) {
var G__16217__i = 0, G__16217__a = new Array(arguments.length -  2);
while (G__16217__i < G__16217__a.length) {G__16217__a[G__16217__i] = arguments[G__16217__i + 2]; ++G__16217__i;}
  p__16214 = new cljs.core.IndexedSeq(G__16217__a,0);
} 
return put_doc__delegate.call(this,db,doc,p__16214);};
put_doc.cljs$lang$maxFixedArity = 2;
put_doc.cljs$lang$applyTo = (function (arglist__16218){
var db = cljs.core.first(arglist__16218);
arglist__16218 = cljs.core.next(arglist__16218);
var doc = cljs.core.first(arglist__16218);
var p__16214 = cljs.core.rest(arglist__16218);
return put_doc__delegate(db,doc,p__16214);
});
put_doc.cljs$core$IFn$_invoke$arity$variadic = put_doc__delegate;
return put_doc;
})()
;
/**
* Create a new document letting PouchDB generate the _id, returning a channel
* holding the result
* @param {...*} var_args
*/
clj_pouchdb.core.post_doc = (function() { 
var post_doc__delegate = function (db,doc,p__16219){
var vec__16221 = p__16219;
var options = cljs.core.nth.call(null,vec__16221,(0),null);
var opts = clj_pouchdb.core.hash_to_obj.call(null,options);
var js_doc = clj_pouchdb.core.hash_to_obj.call(null,doc);
var c = cljs.core.async.chan.call(null,(1));
db.post(js_doc,opts,clj_pouchdb.core.responder.call(null,c));

return c;
};
var post_doc = function (db,doc,var_args){
var p__16219 = null;
if (arguments.length > 2) {
var G__16222__i = 0, G__16222__a = new Array(arguments.length -  2);
while (G__16222__i < G__16222__a.length) {G__16222__a[G__16222__i] = arguments[G__16222__i + 2]; ++G__16222__i;}
  p__16219 = new cljs.core.IndexedSeq(G__16222__a,0);
} 
return post_doc__delegate.call(this,db,doc,p__16219);};
post_doc.cljs$lang$maxFixedArity = 2;
post_doc.cljs$lang$applyTo = (function (arglist__16223){
var db = cljs.core.first(arglist__16223);
arglist__16223 = cljs.core.next(arglist__16223);
var doc = cljs.core.first(arglist__16223);
var p__16219 = cljs.core.rest(arglist__16223);
return post_doc__delegate(db,doc,p__16219);
});
post_doc.cljs$core$IFn$_invoke$arity$variadic = post_doc__delegate;
return post_doc;
})()
;
/**
* Get document given ID, returning a channel to the result
* @param {...*} var_args
*/
clj_pouchdb.core.get_doc = (function() { 
var get_doc__delegate = function (db,docid,p__16224){
var vec__16226 = p__16224;
var options = cljs.core.nth.call(null,vec__16226,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.get(docid,clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var get_doc = function (db,docid,var_args){
var p__16224 = null;
if (arguments.length > 2) {
var G__16227__i = 0, G__16227__a = new Array(arguments.length -  2);
while (G__16227__i < G__16227__a.length) {G__16227__a[G__16227__i] = arguments[G__16227__i + 2]; ++G__16227__i;}
  p__16224 = new cljs.core.IndexedSeq(G__16227__a,0);
} 
return get_doc__delegate.call(this,db,docid,p__16224);};
get_doc.cljs$lang$maxFixedArity = 2;
get_doc.cljs$lang$applyTo = (function (arglist__16228){
var db = cljs.core.first(arglist__16228);
arglist__16228 = cljs.core.next(arglist__16228);
var docid = cljs.core.first(arglist__16228);
var p__16224 = cljs.core.rest(arglist__16228);
return get_doc__delegate(db,docid,p__16224);
});
get_doc.cljs$core$IFn$_invoke$arity$variadic = get_doc__delegate;
return get_doc;
})()
;
/**
* Remove document, returning channel to result
* @param {...*} var_args
*/
clj_pouchdb.core.remove_doc = (function() { 
var remove_doc__delegate = function (db,doc,p__16229){
var vec__16231 = p__16229;
var options = cljs.core.nth.call(null,vec__16231,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.remove(clj_pouchdb.core.hash_to_obj.call(null,doc),clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var remove_doc = function (db,doc,var_args){
var p__16229 = null;
if (arguments.length > 2) {
var G__16232__i = 0, G__16232__a = new Array(arguments.length -  2);
while (G__16232__i < G__16232__a.length) {G__16232__a[G__16232__i] = arguments[G__16232__i + 2]; ++G__16232__i;}
  p__16229 = new cljs.core.IndexedSeq(G__16232__a,0);
} 
return remove_doc__delegate.call(this,db,doc,p__16229);};
remove_doc.cljs$lang$maxFixedArity = 2;
remove_doc.cljs$lang$applyTo = (function (arglist__16233){
var db = cljs.core.first(arglist__16233);
arglist__16233 = cljs.core.next(arglist__16233);
var doc = cljs.core.first(arglist__16233);
var p__16229 = cljs.core.rest(arglist__16233);
return remove_doc__delegate(db,doc,p__16229);
});
remove_doc.cljs$core$IFn$_invoke$arity$variadic = remove_doc__delegate;
return remove_doc;
})()
;
/**
* Create a batch of documents, returning channel to result
* @param {...*} var_args
*/
clj_pouchdb.core.bulk_docs = (function() { 
var bulk_docs__delegate = function (db,docs,p__16234){
var vec__16238 = p__16234;
var options = cljs.core.nth.call(null,vec__16238,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.bulkDocs((function (){var obj16240 = {"docs":clj_pouchdb.core.hash_to_obj.call(null,docs)};
return obj16240;
})(),clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var bulk_docs = function (db,docs,var_args){
var p__16234 = null;
if (arguments.length > 2) {
var G__16241__i = 0, G__16241__a = new Array(arguments.length -  2);
while (G__16241__i < G__16241__a.length) {G__16241__a[G__16241__i] = arguments[G__16241__i + 2]; ++G__16241__i;}
  p__16234 = new cljs.core.IndexedSeq(G__16241__a,0);
} 
return bulk_docs__delegate.call(this,db,docs,p__16234);};
bulk_docs.cljs$lang$maxFixedArity = 2;
bulk_docs.cljs$lang$applyTo = (function (arglist__16242){
var db = cljs.core.first(arglist__16242);
arglist__16242 = cljs.core.next(arglist__16242);
var docs = cljs.core.first(arglist__16242);
var p__16234 = cljs.core.rest(arglist__16242);
return bulk_docs__delegate(db,docs,p__16234);
});
bulk_docs.cljs$core$IFn$_invoke$arity$variadic = bulk_docs__delegate;
return bulk_docs;
})()
;
/**
* Fetch (all) documents, returning channel to result
* @param {...*} var_args
*/
clj_pouchdb.core.all_docs = (function() { 
var all_docs__delegate = function (db,p__16243){
var vec__16245 = p__16243;
var options = cljs.core.nth.call(null,vec__16245,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.allDocs(clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var all_docs = function (db,var_args){
var p__16243 = null;
if (arguments.length > 1) {
var G__16246__i = 0, G__16246__a = new Array(arguments.length -  1);
while (G__16246__i < G__16246__a.length) {G__16246__a[G__16246__i] = arguments[G__16246__i + 1]; ++G__16246__i;}
  p__16243 = new cljs.core.IndexedSeq(G__16246__a,0);
} 
return all_docs__delegate.call(this,db,p__16243);};
all_docs.cljs$lang$maxFixedArity = 1;
all_docs.cljs$lang$applyTo = (function (arglist__16247){
var db = cljs.core.first(arglist__16247);
var p__16243 = cljs.core.rest(arglist__16247);
return all_docs__delegate(db,p__16243);
});
all_docs.cljs$core$IFn$_invoke$arity$variadic = all_docs__delegate;
return all_docs;
})()
;
/**
* React on changes, returning channel with result
* @param {...*} var_args
*/
clj_pouchdb.core.changes = (function() { 
var changes__delegate = function (db,p__16248){
var vec__16250 = p__16248;
var options = cljs.core.nth.call(null,vec__16250,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.changes(clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var changes = function (db,var_args){
var p__16248 = null;
if (arguments.length > 1) {
var G__16251__i = 0, G__16251__a = new Array(arguments.length -  1);
while (G__16251__i < G__16251__a.length) {G__16251__a[G__16251__i] = arguments[G__16251__i + 1]; ++G__16251__i;}
  p__16248 = new cljs.core.IndexedSeq(G__16251__a,0);
} 
return changes__delegate.call(this,db,p__16248);};
changes.cljs$lang$maxFixedArity = 1;
changes.cljs$lang$applyTo = (function (arglist__16252){
var db = cljs.core.first(arglist__16252);
var p__16248 = cljs.core.rest(arglist__16252);
return changes__delegate(db,p__16248);
});
changes.cljs$core$IFn$_invoke$arity$variadic = changes__delegate;
return changes;
})()
;
/**
* Replicate database
* @param {...*} var_args
*/
clj_pouchdb.core.replicate_db = (function() { 
var replicate_db__delegate = function (source,target,p__16253){
var vec__16255 = p__16253;
var options = cljs.core.nth.call(null,vec__16255,(0),null);
return PouchDB.replicate(source,target,clj_pouchdb.core.hash_to_obj.call(null,options));
};
var replicate_db = function (source,target,var_args){
var p__16253 = null;
if (arguments.length > 2) {
var G__16256__i = 0, G__16256__a = new Array(arguments.length -  2);
while (G__16256__i < G__16256__a.length) {G__16256__a[G__16256__i] = arguments[G__16256__i + 2]; ++G__16256__i;}
  p__16253 = new cljs.core.IndexedSeq(G__16256__a,0);
} 
return replicate_db__delegate.call(this,source,target,p__16253);};
replicate_db.cljs$lang$maxFixedArity = 2;
replicate_db.cljs$lang$applyTo = (function (arglist__16257){
var source = cljs.core.first(arglist__16257);
arglist__16257 = cljs.core.next(arglist__16257);
var target = cljs.core.first(arglist__16257);
var p__16253 = cljs.core.rest(arglist__16257);
return replicate_db__delegate(source,target,p__16253);
});
replicate_db.cljs$core$IFn$_invoke$arity$variadic = replicate_db__delegate;
return replicate_db;
})()
;
/**
* Create a proper view map function dealing with JS objects
*/
clj_pouchdb.core.create_mapper = (function create_mapper(mapper){
if(typeof mapper === 'string'){
return mapper;
} else {
return cljs.core.comp.call(null,clj_pouchdb.core.hash_to_obj,mapper,clj_pouchdb.core.obj_to_hash);
}
});
/**
* Query the database, returning channel to results
* @param {...*} var_args
*/
clj_pouchdb.core.query = (function() { 
var query__delegate = function (db,fun,p__16258){
var vec__16262 = p__16258;
var options = cljs.core.nth.call(null,vec__16262,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.query((function (){var obj16264 = {"map":fun};
return obj16264;
})(),clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var query = function (db,fun,var_args){
var p__16258 = null;
if (arguments.length > 2) {
var G__16265__i = 0, G__16265__a = new Array(arguments.length -  2);
while (G__16265__i < G__16265__a.length) {G__16265__a[G__16265__i] = arguments[G__16265__i + 2]; ++G__16265__i;}
  p__16258 = new cljs.core.IndexedSeq(G__16265__a,0);
} 
return query__delegate.call(this,db,fun,p__16258);};
query.cljs$lang$maxFixedArity = 2;
query.cljs$lang$applyTo = (function (arglist__16266){
var db = cljs.core.first(arglist__16266);
arglist__16266 = cljs.core.next(arglist__16266);
var fun = cljs.core.first(arglist__16266);
var p__16258 = cljs.core.rest(arglist__16266);
return query__delegate(db,fun,p__16258);
});
query.cljs$core$IFn$_invoke$arity$variadic = query__delegate;
return query;
})()
;
/**
* Get info about database, returning channel to result
*/
clj_pouchdb.core.info = (function info(db){
var c = cljs.core.async.chan.call(null,(1));
db.info(clj_pouchdb.core.responder.call(null,c));

return c;
});
/**
* Compact the database, returning channel to result
* @param {...*} var_args
*/
clj_pouchdb.core.compact = (function() { 
var compact__delegate = function (db,p__16267){
var vec__16269 = p__16267;
var options = cljs.core.nth.call(null,vec__16269,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.compact(clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var compact = function (db,var_args){
var p__16267 = null;
if (arguments.length > 1) {
var G__16270__i = 0, G__16270__a = new Array(arguments.length -  1);
while (G__16270__i < G__16270__a.length) {G__16270__a[G__16270__i] = arguments[G__16270__i + 1]; ++G__16270__i;}
  p__16267 = new cljs.core.IndexedSeq(G__16270__a,0);
} 
return compact__delegate.call(this,db,p__16267);};
compact.cljs$lang$maxFixedArity = 1;
compact.cljs$lang$applyTo = (function (arglist__16271){
var db = cljs.core.first(arglist__16271);
var p__16267 = cljs.core.rest(arglist__16271);
return compact__delegate(db,p__16267);
});
compact.cljs$core$IFn$_invoke$arity$variadic = compact__delegate;
return compact;
})()
;
/**
* Get subset of differing revisioned documents, returning channel to result
*/
clj_pouchdb.core.revs_diff = (function revs_diff(db,diff){
var c = cljs.core.async.chan.call(null,(1));
db.revsDiff(diff,clj_pouchdb.core.responder.call(null,c));

return c;
});
/**
* Enable or disable access to all dataabases
*/
clj_pouchdb.core.enable_all_dbs = (function enable_all_dbs(flag){
return PouchDB.enableAllDbs = flag;
});
/**
* Get all databases, returning channel to result
*/
clj_pouchdb.core.all_dbs = (function all_dbs(){
var c = cljs.core.async.chan.call(null,(1));
PouchDB.allDbs(clj_pouchdb.core.responder.call(null,c));

return c;
});
/**
* Set debugging of Pouch operations
*/
clj_pouchdb.core.debug_BANG_ = (function debug_BANG_(flag){
return PouchDB.DEBUG = flag;
});

//# sourceMappingURL=core.js.map