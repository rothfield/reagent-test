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
var obj15893 = {};
return obj15893;
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
var create_db__delegate = function (p__15894){
var vec__15897 = p__15894;
var name = cljs.core.nth.call(null,vec__15897,(0),null);
var vec__15898 = cljs.core.nthnext.call(null,vec__15897,(1));
var options = cljs.core.nth.call(null,vec__15898,(0),null);
return (new PouchDB(name,clj_pouchdb.core.hash_to_obj.call(null,options)));
};
var create_db = function (var_args){
var p__15894 = null;
if (arguments.length > 0) {
var G__15899__i = 0, G__15899__a = new Array(arguments.length -  0);
while (G__15899__i < G__15899__a.length) {G__15899__a[G__15899__i] = arguments[G__15899__i + 0]; ++G__15899__i;}
  p__15894 = new cljs.core.IndexedSeq(G__15899__a,0);
} 
return create_db__delegate.call(this,p__15894);};
create_db.cljs$lang$maxFixedArity = 0;
create_db.cljs$lang$applyTo = (function (arglist__15900){
var p__15894 = cljs.core.seq(arglist__15900);
return create_db__delegate(p__15894);
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
var put_doc__delegate = function (db,doc,p__15901){
var vec__15903 = p__15901;
var options = cljs.core.nth.call(null,vec__15903,(0),null);
var opts = clj_pouchdb.core.hash_to_obj.call(null,options);
var js_doc = clj_pouchdb.core.hash_to_obj.call(null,doc);
var c = cljs.core.async.chan.call(null,(1));
db.put(js_doc,opts,clj_pouchdb.core.responder.call(null,c));

return c;
};
var put_doc = function (db,doc,var_args){
var p__15901 = null;
if (arguments.length > 2) {
var G__15904__i = 0, G__15904__a = new Array(arguments.length -  2);
while (G__15904__i < G__15904__a.length) {G__15904__a[G__15904__i] = arguments[G__15904__i + 2]; ++G__15904__i;}
  p__15901 = new cljs.core.IndexedSeq(G__15904__a,0);
} 
return put_doc__delegate.call(this,db,doc,p__15901);};
put_doc.cljs$lang$maxFixedArity = 2;
put_doc.cljs$lang$applyTo = (function (arglist__15905){
var db = cljs.core.first(arglist__15905);
arglist__15905 = cljs.core.next(arglist__15905);
var doc = cljs.core.first(arglist__15905);
var p__15901 = cljs.core.rest(arglist__15905);
return put_doc__delegate(db,doc,p__15901);
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
var post_doc__delegate = function (db,doc,p__15906){
var vec__15908 = p__15906;
var options = cljs.core.nth.call(null,vec__15908,(0),null);
var opts = clj_pouchdb.core.hash_to_obj.call(null,options);
var js_doc = clj_pouchdb.core.hash_to_obj.call(null,doc);
var c = cljs.core.async.chan.call(null,(1));
db.post(js_doc,opts,clj_pouchdb.core.responder.call(null,c));

return c;
};
var post_doc = function (db,doc,var_args){
var p__15906 = null;
if (arguments.length > 2) {
var G__15909__i = 0, G__15909__a = new Array(arguments.length -  2);
while (G__15909__i < G__15909__a.length) {G__15909__a[G__15909__i] = arguments[G__15909__i + 2]; ++G__15909__i;}
  p__15906 = new cljs.core.IndexedSeq(G__15909__a,0);
} 
return post_doc__delegate.call(this,db,doc,p__15906);};
post_doc.cljs$lang$maxFixedArity = 2;
post_doc.cljs$lang$applyTo = (function (arglist__15910){
var db = cljs.core.first(arglist__15910);
arglist__15910 = cljs.core.next(arglist__15910);
var doc = cljs.core.first(arglist__15910);
var p__15906 = cljs.core.rest(arglist__15910);
return post_doc__delegate(db,doc,p__15906);
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
var get_doc__delegate = function (db,docid,p__15911){
var vec__15913 = p__15911;
var options = cljs.core.nth.call(null,vec__15913,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.get(docid,clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var get_doc = function (db,docid,var_args){
var p__15911 = null;
if (arguments.length > 2) {
var G__15914__i = 0, G__15914__a = new Array(arguments.length -  2);
while (G__15914__i < G__15914__a.length) {G__15914__a[G__15914__i] = arguments[G__15914__i + 2]; ++G__15914__i;}
  p__15911 = new cljs.core.IndexedSeq(G__15914__a,0);
} 
return get_doc__delegate.call(this,db,docid,p__15911);};
get_doc.cljs$lang$maxFixedArity = 2;
get_doc.cljs$lang$applyTo = (function (arglist__15915){
var db = cljs.core.first(arglist__15915);
arglist__15915 = cljs.core.next(arglist__15915);
var docid = cljs.core.first(arglist__15915);
var p__15911 = cljs.core.rest(arglist__15915);
return get_doc__delegate(db,docid,p__15911);
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
var remove_doc__delegate = function (db,doc,p__15916){
var vec__15918 = p__15916;
var options = cljs.core.nth.call(null,vec__15918,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.remove(clj_pouchdb.core.hash_to_obj.call(null,doc),clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var remove_doc = function (db,doc,var_args){
var p__15916 = null;
if (arguments.length > 2) {
var G__15919__i = 0, G__15919__a = new Array(arguments.length -  2);
while (G__15919__i < G__15919__a.length) {G__15919__a[G__15919__i] = arguments[G__15919__i + 2]; ++G__15919__i;}
  p__15916 = new cljs.core.IndexedSeq(G__15919__a,0);
} 
return remove_doc__delegate.call(this,db,doc,p__15916);};
remove_doc.cljs$lang$maxFixedArity = 2;
remove_doc.cljs$lang$applyTo = (function (arglist__15920){
var db = cljs.core.first(arglist__15920);
arglist__15920 = cljs.core.next(arglist__15920);
var doc = cljs.core.first(arglist__15920);
var p__15916 = cljs.core.rest(arglist__15920);
return remove_doc__delegate(db,doc,p__15916);
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
var bulk_docs__delegate = function (db,docs,p__15921){
var vec__15925 = p__15921;
var options = cljs.core.nth.call(null,vec__15925,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.bulkDocs((function (){var obj15927 = {"docs":clj_pouchdb.core.hash_to_obj.call(null,docs)};
return obj15927;
})(),clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var bulk_docs = function (db,docs,var_args){
var p__15921 = null;
if (arguments.length > 2) {
var G__15928__i = 0, G__15928__a = new Array(arguments.length -  2);
while (G__15928__i < G__15928__a.length) {G__15928__a[G__15928__i] = arguments[G__15928__i + 2]; ++G__15928__i;}
  p__15921 = new cljs.core.IndexedSeq(G__15928__a,0);
} 
return bulk_docs__delegate.call(this,db,docs,p__15921);};
bulk_docs.cljs$lang$maxFixedArity = 2;
bulk_docs.cljs$lang$applyTo = (function (arglist__15929){
var db = cljs.core.first(arglist__15929);
arglist__15929 = cljs.core.next(arglist__15929);
var docs = cljs.core.first(arglist__15929);
var p__15921 = cljs.core.rest(arglist__15929);
return bulk_docs__delegate(db,docs,p__15921);
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
var all_docs__delegate = function (db,p__15930){
var vec__15932 = p__15930;
var options = cljs.core.nth.call(null,vec__15932,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.allDocs(clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var all_docs = function (db,var_args){
var p__15930 = null;
if (arguments.length > 1) {
var G__15933__i = 0, G__15933__a = new Array(arguments.length -  1);
while (G__15933__i < G__15933__a.length) {G__15933__a[G__15933__i] = arguments[G__15933__i + 1]; ++G__15933__i;}
  p__15930 = new cljs.core.IndexedSeq(G__15933__a,0);
} 
return all_docs__delegate.call(this,db,p__15930);};
all_docs.cljs$lang$maxFixedArity = 1;
all_docs.cljs$lang$applyTo = (function (arglist__15934){
var db = cljs.core.first(arglist__15934);
var p__15930 = cljs.core.rest(arglist__15934);
return all_docs__delegate(db,p__15930);
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
var changes__delegate = function (db,p__15935){
var vec__15937 = p__15935;
var options = cljs.core.nth.call(null,vec__15937,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.changes(clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var changes = function (db,var_args){
var p__15935 = null;
if (arguments.length > 1) {
var G__15938__i = 0, G__15938__a = new Array(arguments.length -  1);
while (G__15938__i < G__15938__a.length) {G__15938__a[G__15938__i] = arguments[G__15938__i + 1]; ++G__15938__i;}
  p__15935 = new cljs.core.IndexedSeq(G__15938__a,0);
} 
return changes__delegate.call(this,db,p__15935);};
changes.cljs$lang$maxFixedArity = 1;
changes.cljs$lang$applyTo = (function (arglist__15939){
var db = cljs.core.first(arglist__15939);
var p__15935 = cljs.core.rest(arglist__15939);
return changes__delegate(db,p__15935);
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
var replicate_db__delegate = function (source,target,p__15940){
var vec__15942 = p__15940;
var options = cljs.core.nth.call(null,vec__15942,(0),null);
return PouchDB.replicate(source,target,clj_pouchdb.core.hash_to_obj.call(null,options));
};
var replicate_db = function (source,target,var_args){
var p__15940 = null;
if (arguments.length > 2) {
var G__15943__i = 0, G__15943__a = new Array(arguments.length -  2);
while (G__15943__i < G__15943__a.length) {G__15943__a[G__15943__i] = arguments[G__15943__i + 2]; ++G__15943__i;}
  p__15940 = new cljs.core.IndexedSeq(G__15943__a,0);
} 
return replicate_db__delegate.call(this,source,target,p__15940);};
replicate_db.cljs$lang$maxFixedArity = 2;
replicate_db.cljs$lang$applyTo = (function (arglist__15944){
var source = cljs.core.first(arglist__15944);
arglist__15944 = cljs.core.next(arglist__15944);
var target = cljs.core.first(arglist__15944);
var p__15940 = cljs.core.rest(arglist__15944);
return replicate_db__delegate(source,target,p__15940);
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
var query__delegate = function (db,fun,p__15945){
var vec__15949 = p__15945;
var options = cljs.core.nth.call(null,vec__15949,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.query((function (){var obj15951 = {"map":fun};
return obj15951;
})(),clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var query = function (db,fun,var_args){
var p__15945 = null;
if (arguments.length > 2) {
var G__15952__i = 0, G__15952__a = new Array(arguments.length -  2);
while (G__15952__i < G__15952__a.length) {G__15952__a[G__15952__i] = arguments[G__15952__i + 2]; ++G__15952__i;}
  p__15945 = new cljs.core.IndexedSeq(G__15952__a,0);
} 
return query__delegate.call(this,db,fun,p__15945);};
query.cljs$lang$maxFixedArity = 2;
query.cljs$lang$applyTo = (function (arglist__15953){
var db = cljs.core.first(arglist__15953);
arglist__15953 = cljs.core.next(arglist__15953);
var fun = cljs.core.first(arglist__15953);
var p__15945 = cljs.core.rest(arglist__15953);
return query__delegate(db,fun,p__15945);
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
var compact__delegate = function (db,p__15954){
var vec__15956 = p__15954;
var options = cljs.core.nth.call(null,vec__15956,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.compact(clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var compact = function (db,var_args){
var p__15954 = null;
if (arguments.length > 1) {
var G__15957__i = 0, G__15957__a = new Array(arguments.length -  1);
while (G__15957__i < G__15957__a.length) {G__15957__a[G__15957__i] = arguments[G__15957__i + 1]; ++G__15957__i;}
  p__15954 = new cljs.core.IndexedSeq(G__15957__a,0);
} 
return compact__delegate.call(this,db,p__15954);};
compact.cljs$lang$maxFixedArity = 1;
compact.cljs$lang$applyTo = (function (arglist__15958){
var db = cljs.core.first(arglist__15958);
var p__15954 = cljs.core.rest(arglist__15958);
return compact__delegate(db,p__15954);
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