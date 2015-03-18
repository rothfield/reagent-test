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
var obj15853 = {};
return obj15853;
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
var create_db__delegate = function (p__15854){
var vec__15857 = p__15854;
var name = cljs.core.nth.call(null,vec__15857,(0),null);
var vec__15858 = cljs.core.nthnext.call(null,vec__15857,(1));
var options = cljs.core.nth.call(null,vec__15858,(0),null);
return (new PouchDB(name,clj_pouchdb.core.hash_to_obj.call(null,options)));
};
var create_db = function (var_args){
var p__15854 = null;
if (arguments.length > 0) {
var G__15859__i = 0, G__15859__a = new Array(arguments.length -  0);
while (G__15859__i < G__15859__a.length) {G__15859__a[G__15859__i] = arguments[G__15859__i + 0]; ++G__15859__i;}
  p__15854 = new cljs.core.IndexedSeq(G__15859__a,0);
} 
return create_db__delegate.call(this,p__15854);};
create_db.cljs$lang$maxFixedArity = 0;
create_db.cljs$lang$applyTo = (function (arglist__15860){
var p__15854 = cljs.core.seq(arglist__15860);
return create_db__delegate(p__15854);
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
var put_doc__delegate = function (db,doc,p__15861){
var vec__15863 = p__15861;
var options = cljs.core.nth.call(null,vec__15863,(0),null);
var opts = clj_pouchdb.core.hash_to_obj.call(null,options);
var js_doc = clj_pouchdb.core.hash_to_obj.call(null,doc);
var c = cljs.core.async.chan.call(null,(1));
db.put(js_doc,opts,clj_pouchdb.core.responder.call(null,c));

return c;
};
var put_doc = function (db,doc,var_args){
var p__15861 = null;
if (arguments.length > 2) {
var G__15864__i = 0, G__15864__a = new Array(arguments.length -  2);
while (G__15864__i < G__15864__a.length) {G__15864__a[G__15864__i] = arguments[G__15864__i + 2]; ++G__15864__i;}
  p__15861 = new cljs.core.IndexedSeq(G__15864__a,0);
} 
return put_doc__delegate.call(this,db,doc,p__15861);};
put_doc.cljs$lang$maxFixedArity = 2;
put_doc.cljs$lang$applyTo = (function (arglist__15865){
var db = cljs.core.first(arglist__15865);
arglist__15865 = cljs.core.next(arglist__15865);
var doc = cljs.core.first(arglist__15865);
var p__15861 = cljs.core.rest(arglist__15865);
return put_doc__delegate(db,doc,p__15861);
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
var post_doc__delegate = function (db,doc,p__15866){
var vec__15868 = p__15866;
var options = cljs.core.nth.call(null,vec__15868,(0),null);
var opts = clj_pouchdb.core.hash_to_obj.call(null,options);
var js_doc = clj_pouchdb.core.hash_to_obj.call(null,doc);
var c = cljs.core.async.chan.call(null,(1));
db.post(js_doc,opts,clj_pouchdb.core.responder.call(null,c));

return c;
};
var post_doc = function (db,doc,var_args){
var p__15866 = null;
if (arguments.length > 2) {
var G__15869__i = 0, G__15869__a = new Array(arguments.length -  2);
while (G__15869__i < G__15869__a.length) {G__15869__a[G__15869__i] = arguments[G__15869__i + 2]; ++G__15869__i;}
  p__15866 = new cljs.core.IndexedSeq(G__15869__a,0);
} 
return post_doc__delegate.call(this,db,doc,p__15866);};
post_doc.cljs$lang$maxFixedArity = 2;
post_doc.cljs$lang$applyTo = (function (arglist__15870){
var db = cljs.core.first(arglist__15870);
arglist__15870 = cljs.core.next(arglist__15870);
var doc = cljs.core.first(arglist__15870);
var p__15866 = cljs.core.rest(arglist__15870);
return post_doc__delegate(db,doc,p__15866);
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
var get_doc__delegate = function (db,docid,p__15871){
var vec__15873 = p__15871;
var options = cljs.core.nth.call(null,vec__15873,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.get(docid,clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var get_doc = function (db,docid,var_args){
var p__15871 = null;
if (arguments.length > 2) {
var G__15874__i = 0, G__15874__a = new Array(arguments.length -  2);
while (G__15874__i < G__15874__a.length) {G__15874__a[G__15874__i] = arguments[G__15874__i + 2]; ++G__15874__i;}
  p__15871 = new cljs.core.IndexedSeq(G__15874__a,0);
} 
return get_doc__delegate.call(this,db,docid,p__15871);};
get_doc.cljs$lang$maxFixedArity = 2;
get_doc.cljs$lang$applyTo = (function (arglist__15875){
var db = cljs.core.first(arglist__15875);
arglist__15875 = cljs.core.next(arglist__15875);
var docid = cljs.core.first(arglist__15875);
var p__15871 = cljs.core.rest(arglist__15875);
return get_doc__delegate(db,docid,p__15871);
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
var remove_doc__delegate = function (db,doc,p__15876){
var vec__15878 = p__15876;
var options = cljs.core.nth.call(null,vec__15878,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.remove(clj_pouchdb.core.hash_to_obj.call(null,doc),clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var remove_doc = function (db,doc,var_args){
var p__15876 = null;
if (arguments.length > 2) {
var G__15879__i = 0, G__15879__a = new Array(arguments.length -  2);
while (G__15879__i < G__15879__a.length) {G__15879__a[G__15879__i] = arguments[G__15879__i + 2]; ++G__15879__i;}
  p__15876 = new cljs.core.IndexedSeq(G__15879__a,0);
} 
return remove_doc__delegate.call(this,db,doc,p__15876);};
remove_doc.cljs$lang$maxFixedArity = 2;
remove_doc.cljs$lang$applyTo = (function (arglist__15880){
var db = cljs.core.first(arglist__15880);
arglist__15880 = cljs.core.next(arglist__15880);
var doc = cljs.core.first(arglist__15880);
var p__15876 = cljs.core.rest(arglist__15880);
return remove_doc__delegate(db,doc,p__15876);
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
var bulk_docs__delegate = function (db,docs,p__15881){
var vec__15885 = p__15881;
var options = cljs.core.nth.call(null,vec__15885,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.bulkDocs((function (){var obj15887 = {"docs":clj_pouchdb.core.hash_to_obj.call(null,docs)};
return obj15887;
})(),clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var bulk_docs = function (db,docs,var_args){
var p__15881 = null;
if (arguments.length > 2) {
var G__15888__i = 0, G__15888__a = new Array(arguments.length -  2);
while (G__15888__i < G__15888__a.length) {G__15888__a[G__15888__i] = arguments[G__15888__i + 2]; ++G__15888__i;}
  p__15881 = new cljs.core.IndexedSeq(G__15888__a,0);
} 
return bulk_docs__delegate.call(this,db,docs,p__15881);};
bulk_docs.cljs$lang$maxFixedArity = 2;
bulk_docs.cljs$lang$applyTo = (function (arglist__15889){
var db = cljs.core.first(arglist__15889);
arglist__15889 = cljs.core.next(arglist__15889);
var docs = cljs.core.first(arglist__15889);
var p__15881 = cljs.core.rest(arglist__15889);
return bulk_docs__delegate(db,docs,p__15881);
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
var all_docs__delegate = function (db,p__15890){
var vec__15892 = p__15890;
var options = cljs.core.nth.call(null,vec__15892,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.allDocs(clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var all_docs = function (db,var_args){
var p__15890 = null;
if (arguments.length > 1) {
var G__15893__i = 0, G__15893__a = new Array(arguments.length -  1);
while (G__15893__i < G__15893__a.length) {G__15893__a[G__15893__i] = arguments[G__15893__i + 1]; ++G__15893__i;}
  p__15890 = new cljs.core.IndexedSeq(G__15893__a,0);
} 
return all_docs__delegate.call(this,db,p__15890);};
all_docs.cljs$lang$maxFixedArity = 1;
all_docs.cljs$lang$applyTo = (function (arglist__15894){
var db = cljs.core.first(arglist__15894);
var p__15890 = cljs.core.rest(arglist__15894);
return all_docs__delegate(db,p__15890);
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
var changes__delegate = function (db,p__15895){
var vec__15897 = p__15895;
var options = cljs.core.nth.call(null,vec__15897,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.changes(clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var changes = function (db,var_args){
var p__15895 = null;
if (arguments.length > 1) {
var G__15898__i = 0, G__15898__a = new Array(arguments.length -  1);
while (G__15898__i < G__15898__a.length) {G__15898__a[G__15898__i] = arguments[G__15898__i + 1]; ++G__15898__i;}
  p__15895 = new cljs.core.IndexedSeq(G__15898__a,0);
} 
return changes__delegate.call(this,db,p__15895);};
changes.cljs$lang$maxFixedArity = 1;
changes.cljs$lang$applyTo = (function (arglist__15899){
var db = cljs.core.first(arglist__15899);
var p__15895 = cljs.core.rest(arglist__15899);
return changes__delegate(db,p__15895);
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
var replicate_db__delegate = function (source,target,p__15900){
var vec__15902 = p__15900;
var options = cljs.core.nth.call(null,vec__15902,(0),null);
return PouchDB.replicate(source,target,clj_pouchdb.core.hash_to_obj.call(null,options));
};
var replicate_db = function (source,target,var_args){
var p__15900 = null;
if (arguments.length > 2) {
var G__15903__i = 0, G__15903__a = new Array(arguments.length -  2);
while (G__15903__i < G__15903__a.length) {G__15903__a[G__15903__i] = arguments[G__15903__i + 2]; ++G__15903__i;}
  p__15900 = new cljs.core.IndexedSeq(G__15903__a,0);
} 
return replicate_db__delegate.call(this,source,target,p__15900);};
replicate_db.cljs$lang$maxFixedArity = 2;
replicate_db.cljs$lang$applyTo = (function (arglist__15904){
var source = cljs.core.first(arglist__15904);
arglist__15904 = cljs.core.next(arglist__15904);
var target = cljs.core.first(arglist__15904);
var p__15900 = cljs.core.rest(arglist__15904);
return replicate_db__delegate(source,target,p__15900);
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
var query__delegate = function (db,fun,p__15905){
var vec__15909 = p__15905;
var options = cljs.core.nth.call(null,vec__15909,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.query((function (){var obj15911 = {"map":fun};
return obj15911;
})(),clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var query = function (db,fun,var_args){
var p__15905 = null;
if (arguments.length > 2) {
var G__15912__i = 0, G__15912__a = new Array(arguments.length -  2);
while (G__15912__i < G__15912__a.length) {G__15912__a[G__15912__i] = arguments[G__15912__i + 2]; ++G__15912__i;}
  p__15905 = new cljs.core.IndexedSeq(G__15912__a,0);
} 
return query__delegate.call(this,db,fun,p__15905);};
query.cljs$lang$maxFixedArity = 2;
query.cljs$lang$applyTo = (function (arglist__15913){
var db = cljs.core.first(arglist__15913);
arglist__15913 = cljs.core.next(arglist__15913);
var fun = cljs.core.first(arglist__15913);
var p__15905 = cljs.core.rest(arglist__15913);
return query__delegate(db,fun,p__15905);
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
var compact__delegate = function (db,p__15914){
var vec__15916 = p__15914;
var options = cljs.core.nth.call(null,vec__15916,(0),null);
var c = cljs.core.async.chan.call(null,(1));
db.compact(clj_pouchdb.core.hash_to_obj.call(null,options),clj_pouchdb.core.responder.call(null,c));

return c;
};
var compact = function (db,var_args){
var p__15914 = null;
if (arguments.length > 1) {
var G__15917__i = 0, G__15917__a = new Array(arguments.length -  1);
while (G__15917__i < G__15917__a.length) {G__15917__a[G__15917__i] = arguments[G__15917__i + 1]; ++G__15917__i;}
  p__15914 = new cljs.core.IndexedSeq(G__15917__a,0);
} 
return compact__delegate.call(this,db,p__15914);};
compact.cljs$lang$maxFixedArity = 1;
compact.cljs$lang$applyTo = (function (arglist__15918){
var db = cljs.core.first(arglist__15918);
var p__15914 = cljs.core.rest(arglist__15918);
return compact__delegate(db,p__15914);
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