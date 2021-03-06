// Compiled by ClojureScript 0.0-2760 {}
goog.provide('reagent_test.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clj_pouchdb.core');
goog.require('goog.events');
/**
* Convert a JS object to a hash, yielding nil for nil JS object
*/
reagent_test.app.obj_to_hash = (function obj_to_hash(obj){
if(cljs.core.truth_(obj)){
return cljs.core.js__GT_clj.call(null,obj,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* Convert a CLJS structure to a JS object, yielding empty JS object for nil input
*/
reagent_test.app.hash_to_obj = (function hash_to_obj(obj){
var jso = (function (){var or__3553__auto__ = cljs.core.clj__GT_js.call(null,obj);
if(cljs.core.truth_(or__3553__auto__)){
return or__3553__auto__;
} else {
var obj22518 = {};
return obj22518;
}
})();
return jso;
});
reagent_test.app.my_log = (function my_log(x){
return console.log(x);
});
/**
* @param {...*} var_args
*/
reagent_test.app.log = (function() { 
var log__delegate = function (my_args){
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__22519_SHARP_){
return reagent_test.app.my_log.call(null,JSON.stringify(cljs.core.clj__GT_js.call(null,p1__22519_SHARP_)));
}),my_args));
};
var log = function (var_args){
var my_args = null;
if (arguments.length > 0) {
var G__22520__i = 0, G__22520__a = new Array(arguments.length -  0);
while (G__22520__i < G__22520__a.length) {G__22520__a[G__22520__i] = arguments[G__22520__i + 0]; ++G__22520__i;}
  my_args = new cljs.core.IndexedSeq(G__22520__a,0);
} 
return log__delegate.call(this,my_args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__22521){
var my_args = cljs.core.seq(arglist__22521);
return log__delegate(my_args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
if(typeof reagent_test.app.app_state !== 'undefined'){
} else {
reagent_test.app.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"_id","_id",-789960287),"app-state",new cljs.core.Keyword(null,"species-list","species-list",-1084846408),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"E.coli",new cljs.core.Keyword(null,"type","type",1174270348),"Bacteria"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Salmonella",new cljs.core.Keyword(null,"type","type",1174270348),"Bacteria"], null)], null),new cljs.core.Keyword(null,"strain-names","strain-names",-441890702),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["met","lac"], null),new cljs.core.Keyword(null,"species","species",-1393763638),"E.coli",new cljs.core.Keyword(null,"name","name",1843675177),"s1",new cljs.core.Keyword(null,"copy-details-flag","copy-details-flag",895443060),false,new cljs.core.Keyword(null,"change-species-flag","change-species-flag",-1765880253),false], null)], null));
}
/**
* Create a new PouchDB database given optional name and options
* @param {...*} var_args
*/
reagent_test.app.create_db = (function() { 
var create_db__delegate = function (p__22522){
var vec__22525 = p__22522;
var name = cljs.core.nth.call(null,vec__22525,(0),null);
var vec__22526 = cljs.core.nthnext.call(null,vec__22525,(1));
var options = cljs.core.nth.call(null,vec__22526,(0),null);
return (new PouchDB(name,reagent_test.app.hash_to_obj.call(null,options)));
};
var create_db = function (var_args){
var p__22522 = null;
if (arguments.length > 0) {
var G__22527__i = 0, G__22527__a = new Array(arguments.length -  0);
while (G__22527__i < G__22527__a.length) {G__22527__a[G__22527__i] = arguments[G__22527__i + 0]; ++G__22527__i;}
  p__22522 = new cljs.core.IndexedSeq(G__22527__a,0);
} 
return create_db__delegate.call(this,p__22522);};
create_db.cljs$lang$maxFixedArity = 0;
create_db.cljs$lang$applyTo = (function (arglist__22528){
var p__22522 = cljs.core.seq(arglist__22528);
return create_db__delegate(p__22522);
});
create_db.cljs$core$IFn$_invoke$arity$variadic = create_db__delegate;
return create_db;
})()
;
reagent_test.app.db = reagent_test.app.create_db.call(null,"gt8");
reagent_test.app.remote_db = reagent_test.app.create_db.call(null,"http://localhost:5984/gt8");
reagent_test.app.load_strain_names = (function load_strain_names(){
return reagent_test.app.db.allDocs(reagent_test.app.hash_to_obj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include_docs","include_docs",-65447201),true], null)),(function (err,raw_res){
if(cljs.core.truth_(err)){
return reagent_test.app.log.call(null,"ERROR");
} else {
var res = cljs.core.js__GT_clj.call(null,raw_res);
var snames = cljs.core.doall.call(null,cljs.core.map.call(null,((function (res){
return (function (p1__22531_SHARP_){
return cljs.core.get.call(null,p1__22531_SHARP_,"name");
});})(res))
,cljs.core.filter.call(null,((function (res){
return (function (p1__22530_SHARP_){
return cljs.core._EQ_.call(null,"strain",cljs.core.get.call(null,p1__22530_SHARP_,"type"));
});})(res))
,cljs.core.map.call(null,((function (res){
return (function (p1__22529_SHARP_){
return cljs.core.get.call(null,p1__22529_SHARP_,"doc");
});})(res))
,cljs.core.get.call(null,res,"rows")))));
reagent_test.app.log.call(null,"snames");

reagent_test.app.log.call(null,cljs.core.count.call(null,snames));

return $("#copy_from_strain").autocomplete(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),snames], null)));
}
}));
});
reagent_test.app.save_app_state = (function save_app_state(){
reagent_test.app.log.call(null,"entering save-app-state");

reagent_test.app.log.call(null,"app-state is");

reagent_test.app.log.call(null,cljs.core.deref.call(null,reagent_test.app.app_state));

var c__6645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto__){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto__){
return (function (state_22572){
var state_val_22573 = (state_22572[(1)]);
if((state_val_22573 === (2))){
var inst_22560 = (state_22572[(2)]);
var inst_22561 = cljs.core.get.call(null,inst_22560,new cljs.core.Keyword(null,"rev","rev",12702670));
var inst_22562 = reagent_test.app.log.call(null,"new-rev:");
var inst_22563 = reagent_test.app.log.call(null,inst_22561);
var inst_22564 = reagent_test.app.log.call(null,"response for put-doc, save-app-state is");
var inst_22565 = reagent_test.app.log.call(null,inst_22560);
var inst_22566 = cljs.core.get.call(null,inst_22560,new cljs.core.Keyword(null,"rev","rev",12702670));
var inst_22567 = cljs.core.swap_BANG_.call(null,reagent_test.app.app_state,cljs.core.assoc,"_rev",inst_22566);
var inst_22568 = reagent_test.app.log.call(null,"app-state after swap!");
var inst_22569 = cljs.core.deref.call(null,reagent_test.app.app_state);
var inst_22570 = reagent_test.app.log.call(null,inst_22569);
var state_22572__$1 = (function (){var statearr_22574 = state_22572;
(statearr_22574[(7)] = inst_22565);

(statearr_22574[(8)] = inst_22563);

(statearr_22574[(9)] = inst_22564);

(statearr_22574[(10)] = inst_22567);

(statearr_22574[(11)] = inst_22562);

(statearr_22574[(12)] = inst_22568);

return statearr_22574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22572__$1,inst_22570);
} else {
if((state_val_22573 === (1))){
var inst_22557 = cljs.core.deref.call(null,reagent_test.app.app_state);
var inst_22558 = clj_pouchdb.core.put_doc.call(null,reagent_test.app.db,inst_22557);
var state_22572__$1 = state_22572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22572__$1,(2),inst_22558);
} else {
return null;
}
}
});})(c__6645__auto__))
;
return ((function (switch__6580__auto__,c__6645__auto__){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_22578 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22578[(0)] = state_machine__6581__auto__);

(statearr_22578[(1)] = (1));

return statearr_22578;
});
var state_machine__6581__auto____1 = (function (state_22572){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_22572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e22579){if((e22579 instanceof Object)){
var ex__6584__auto__ = e22579;
var statearr_22580_22582 = state_22572;
(statearr_22580_22582[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22583 = state_22572;
state_22572 = G__22583;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_22572){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_22572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto__))
})();
var state__6647__auto__ = (function (){var statearr_22581 = f__6646__auto__.call(null);
(statearr_22581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto__);

return statearr_22581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto__))
);

return c__6645__auto__;
});
reagent_test.app.remarks = (function remarks(current_value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"comment"], null),"Remarks:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#remarks.form-control","textarea#remarks.form-control",-2043521916),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rows","rows",850049680),"8",new cljs.core.Keyword(null,"value","value",305978217),current_value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22584_SHARP_){
var new_val = p1__22584_SHARP_.target.value;
reagent_test.app.log.call(null,"new-val");

reagent_test.app.log.call(null,new_val);

return cljs.core.swap_BANG_.call(null,reagent_test.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"remarks","remarks",1566599360)], null),new_val);
})], null)], null)], null);
});
reagent_test.app.copy_strain_input_did_mount = (function copy_strain_input_did_mount(){
console.log("in copy-strain-input-did-mount");

var snames = reagent_test.app.load_strain_names.call(null);
return console.log(snames);
});
reagent_test.app.copy_strain_input = (function copy_strain_input(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_from_strain","input#copy_from_strain",-1413277412)], null);
});
reagent_test.app.copy_strain_input_component = (function copy_strain_input_component(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),reagent_test.app.copy_strain_input,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),reagent_test.app.copy_strain_input_did_mount], null));
});
reagent_test.app.species_select = (function species_select(species_list,current_value,change_species_flag){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select#species-select","select#species-select",-1769405453),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),current_value,new cljs.core.Keyword(null,"name","name",1843675177),"variety",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22585_SHARP_){
cljs.core.swap_BANG_.call(null,reagent_test.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"species","species",-1393763638)], null),p1__22585_SHARP_.target.value);

return cljs.core.swap_BANG_.call(null,reagent_test.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"change-species-flag","change-species-flag",-1765880253)], null),false);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272)], null),(function (){var iter__4309__auto__ = (function iter__22590(s__22591){
return (new cljs.core.LazySeq(null,(function (){
var s__22591__$1 = s__22591;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22591__$1);
if(temp__4126__auto__){
var s__22591__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22591__$2)){
var c__4307__auto__ = cljs.core.chunk_first.call(null,s__22591__$2);
var size__4308__auto__ = cljs.core.count.call(null,c__4307__auto__);
var b__22593 = cljs.core.chunk_buffer.call(null,size__4308__auto__);
if((function (){var i__22592 = (0);
while(true){
if((i__22592 < size__4308__auto__)){
var item = cljs.core._nth.call(null,c__4307__auto__,i__22592);
cljs.core.chunk_append.call(null,b__22593,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null));

var G__22594 = (i__22592 + (1));
i__22592 = G__22594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22593),iter__22590.call(null,cljs.core.chunk_rest.call(null,s__22591__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22593),null);
}
} else {
var item = cljs.core.first.call(null,s__22591__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null),iter__22590.call(null,cljs.core.rest.call(null,s__22591__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4309__auto__.call(null,species_list);
})()], null);
});
reagent_test.app.species_div = (function species_div(species_list,current_value,change_species_flag){
if(cljs.core.not.call(null,change_species_flag)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null)], null),"Species"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),current_value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-info","button.btn.btn-sm.btn-info",-1052578049),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,reagent_test.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"change-species-flag","change-species-flag",-1765880253)], null),true);
})], null),"Change species"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null)], null),"Species"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"species-select"], null),"Change species to:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.species_select,species_list,current_value,change_species_flag], null)], null);
}
});
reagent_test.app.copy_details_div = (function copy_details_div(){
reagent_test.app.log.call(null,"entering copy-details-div");



return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui-widget","div.ui-widget",901264408),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"copy_from_strain"], null),"Enter name of existing (non-plasmid;phage; or F' containing Strain).",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"All information from this Strain (except for Remarks) will be copied to the current new Strain."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.copy_strain_input_component], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button_row","div.button_row",1769583902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_details_submit_btn","input#copy_details_submit_btn",-685007933),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"value","value",305978217),"OK",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"name","name",1843675177),"copy_details_submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,reagent_test.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"copy-details-flag","copy-details-flag",895443060)], null),false);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_details_cancel_btn","input#copy_details_cancel_btn",-1043891244),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),"Cancel",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-secondary",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"name","name",1843675177),"copy_details_cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,reagent_test.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"copy-details-flag","copy-details-flag",895443060)], null),false);
})], null)], null)], null)], null);
});
reagent_test.app.my_modal_div = (function my_modal_div(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#myModal.modal.fade","div#myModal.modal.fade",1414254227),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),"myModalLabel",new cljs.core.Keyword(null,"role","role",-736691072),"dialog",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Close",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),"\u00D7"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4#myModalLabel.modal-title","h4#myModalLabel.modal-title",-1464392621),"Modal title"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),"\n        ...\n      "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),"Save changes"], null)], null)], null)], null)], null);
});
reagent_test.app.open_modal_component = (function open_modal_component(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),reagent_test.app.my_modal_div], null));
});
reagent_test.app.copy_details_component = (function copy_details_component(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),reagent_test.app.copy_details_div], null));
});
reagent_test.app.change_species_section = (function change_species_section(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Species"], null);
});
reagent_test.app.save_button = (function save_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#saveButton.btn-primary","button#saveButton.btn-primary",186501230),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reagent_test.app.save_app_state.call(null);
}),new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),"Save"], null);
});
reagent_test.app.copy_details_button = (function copy_details_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_details_show_btn.details_button","input#copy_details_show_btn.details_button",-1241406342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),"Copy Details From Existing Strain...",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,reagent_test.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"copy-details-flag","copy-details-flag",895443060)], null),true);
}),new cljs.core.Keyword(null,"name","name",1843675177),"copy_details_show"], null)], null);
});
reagent_test.app.marker_input = (function marker_input(m,my_key){
reagent_test.app.log.call(null,[cljs.core.str("my-key is "),cljs.core.str(my_key)].join(''));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item.marker-input","li.list-group-item.marker-input",3622064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),my_key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22595_SHARP_){
cljs.core.swap_BANG_.call(null,reagent_test.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"markers","markers",-246919693),my_key], null),p1__22595_SHARP_.target.value);

return reagent_test.app.log.call(null,cljs.core.deref.call(null,reagent_test.app.app_state));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"marker_entry",new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073),"15",new cljs.core.Keyword(null,"size","size",1098693007),"20",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
});
reagent_test.app.marker_input_list = (function marker_input_list(items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.form-group.list-group.marker-input-list","ul.form-group.list-group.marker-input-list",629202431),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.list-group-item-heading","label.list-group-item-heading",1442146420),"Markers"], null),"    ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#myButton.btn-info.btn-xs","button#myButton.btn-info.btn-xs",-1996251368),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),"off",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,reagent_test.app.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"markers","markers",-246919693)], null),cljs.core.conj,"");
}),new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),"Add marker"], null)], null),cljs.core.map_indexed.call(null,(function (idx,itm){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.marker_input,itm,idx], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
}),items)], null);
});
reagent_test.app.old_marker_input_list = (function old_marker_input_list(items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group.marker-input-list","ul.list-group.marker-input-list",1403485131),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.list-group-item-heading","label.list-group-item-heading",1442146420),"Markers"], null),"    ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#myButton.btn-info.btn-xs","button#myButton.btn-info.btn-xs",-1996251368),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),"off",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null),"Add marker"], null)], null),cljs.core.map_indexed.call(null,(function (idx,itm){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.marker_input,itm,idx], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
}),items)], null);
});
reagent_test.app.strain = (function strain(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form-vertical","form.form-vertical",493208252),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"New Strain page"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.species_div,new cljs.core.Keyword(null,"species-list","species-list",-1084846408).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_test.app.app_state)),cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent_test.app.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"species","species",-1393763638)], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent_test.app.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"change-species-flag","change-species-flag",-1765880253)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.copy_details_button], null),(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent_test.app.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"copy-details-flag","copy-details-flag",895443060)], null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.copy_details_component], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.marker_input_list,cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent_test.app.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"markers","markers",-246919693)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.remarks,cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent_test.app.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"remarks","remarks",1566599360)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.my_modal_div], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.save_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"go to about page"], null)], null)], null);
});
reagent_test.app.home_page = (function home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to test-reagent"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/strains/new"], null),"New Strain"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"go to about page"], null)], null)], null);
});
reagent_test.app.about_page = (function about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About test-reagentjjj"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to the home page"], null)], null)], null);
});
reagent_test.app.current_page = (function current_page(){
console.log("entering current-page, current-page is");

reagent_test.app.log.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180)));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
/**
* Convert a CLJS structure to a JS object, yielding empty JS object for nil input
*/
reagent_test.app.hash_to_obj = (function hash_to_obj(obj){
var jso = (function (){var or__3553__auto__ = cljs.core.clj__GT_js.call(null,obj);
if(cljs.core.truth_(or__3553__auto__)){
return or__3553__auto__;
} else {
var obj22599 = {};
return obj22599;
}
})();
return jso;
});
reagent_test.app.old_load_strain_names = (function old_load_strain_names(){
return reagent_test.app.db.allDocs(reagent_test.app.hash_to_obj.call(null,new cljs.core.PersistentArrayMap(null, 1, ["include_docs",true], null)),(function (err,raw_res){


if(cljs.core.truth_(err)){
return reagent_test.app.log.call(null,"error getting strain names");
} else {
var res = reagent_test.app.obj_to_hash.call(null,raw_res);
var rows = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(res);
var docs = cljs.core.map.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891),rows);
var names = cljs.core.sort.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),docs));


return names;
}
}));
});
reagent_test.app.load_app_state = (function load_app_state(){
reagent_test.app.log.call(null,"load-app-state");

var c__6645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto__){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto__){
return (function (state_22630){
var state_val_22631 = (state_22630[(1)]);
if((state_val_22631 === (2))){
var inst_22622 = (state_22630[(2)]);
var inst_22623 = reagent_test.app.log.call(null,"load app-state:response is");
var inst_22624 = reagent_test.app.log.call(null,inst_22622);
var inst_22625 = cljs.core.reset_BANG_.call(null,reagent_test.app.app_state,inst_22622);
var inst_22626 = reagent_test.app.log.call(null,"app-state is");
var inst_22627 = cljs.core.deref.call(null,reagent_test.app.app_state);
var inst_22628 = reagent_test.app.log.call(null,inst_22627);
var state_22630__$1 = (function (){var statearr_22632 = state_22630;
(statearr_22632[(7)] = inst_22626);

(statearr_22632[(8)] = inst_22623);

(statearr_22632[(9)] = inst_22625);

(statearr_22632[(10)] = inst_22624);

return statearr_22632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22630__$1,inst_22628);
} else {
if((state_val_22631 === (1))){
var inst_22620 = clj_pouchdb.core.get_doc.call(null,reagent_test.app.db,"app-state");
var state_22630__$1 = state_22630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22630__$1,(2),inst_22620);
} else {
return null;
}
}
});})(c__6645__auto__))
;
return ((function (switch__6580__auto__,c__6645__auto__){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_22636 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22636[(0)] = state_machine__6581__auto__);

(statearr_22636[(1)] = (1));

return statearr_22636;
});
var state_machine__6581__auto____1 = (function (state_22630){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_22630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e22637){if((e22637 instanceof Object)){
var ex__6584__auto__ = e22637;
var statearr_22638_22640 = state_22630;
(statearr_22638_22640[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22641 = state_22630;
state_22630 = G__22641;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_22630){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_22630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto__))
})();
var state__6647__auto__ = (function (){var statearr_22639 = f__6646__auto__.call(null);
(statearr_22639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto__);

return statearr_22639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto__))
);

return c__6645__auto__;
});
reagent_test.app.create_sample_data = (function create_sample_data(){
reagent_test.app.log.call(null,"creating sample data");

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__22642_SHARP_){
var c__6645__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6645__auto__){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (c__6645__auto__){
return (function (state_22669){
var state_val_22670 = (state_22669[(1)]);
if((state_val_22670 === (2))){
var inst_22667 = (state_22669[(2)]);
var state_22669__$1 = (function (){var statearr_22671 = state_22669;
(statearr_22671[(7)] = inst_22667);

return statearr_22671;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22669__$1,null);
} else {
if((state_val_22670 === (1))){
var inst_22661 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_22662 = [cljs.core.str("Strain"),cljs.core.str(p1__22642_SHARP_)].join('');
var inst_22663 = ["strain",inst_22662];
var inst_22664 = cljs.core.PersistentHashMap.fromArrays(inst_22661,inst_22663);
var inst_22665 = clj_pouchdb.core.post_doc.call(null,reagent_test.app.db,inst_22664);
var state_22669__$1 = state_22669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22669__$1,(2),inst_22665);
} else {
return null;
}
}
});})(c__6645__auto__))
;
return ((function (switch__6580__auto__,c__6645__auto__){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_22675 = [null,null,null,null,null,null,null,null];
(statearr_22675[(0)] = state_machine__6581__auto__);

(statearr_22675[(1)] = (1));

return statearr_22675;
});
var state_machine__6581__auto____1 = (function (state_22669){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_22669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e22676){if((e22676 instanceof Object)){
var ex__6584__auto__ = e22676;
var statearr_22677_22679 = state_22669;
(statearr_22677_22679[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22680 = state_22669;
state_22669 = G__22680;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_22669){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_22669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(switch__6580__auto__,c__6645__auto__))
})();
var state__6647__auto__ = (function (){var statearr_22678 = f__6646__auto__.call(null);
(statearr_22678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto__);

return statearr_22678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(c__6645__auto__))
);

return c__6645__auto__;
}),cljs.core.range.call(null,(111))));
});
reagent_test.app.zzcreate_sample_data = (function zzcreate_sample_data(){
reagent_test.app.log.call(null,"creating sample data");

var n__4440__auto__ = (400);
var n = (0);
while(true){
if((n < n__4440__auto__)){
var c__6645__auto___22717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (n,c__6645__auto___22717,n__4440__auto__){
return (function (){
var f__6646__auto__ = (function (){var switch__6580__auto__ = ((function (n,c__6645__auto___22717,n__4440__auto__){
return (function (state_22707){
var state_val_22708 = (state_22707[(1)]);
if((state_val_22708 === (2))){
var inst_22705 = (state_22707[(2)]);
var state_22707__$1 = (function (){var statearr_22709 = state_22707;
(statearr_22709[(7)] = inst_22705);

return statearr_22709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22707__$1,null);
} else {
if((state_val_22708 === (1))){
var inst_22699 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_22700 = [cljs.core.str("Strain"),cljs.core.str(n)].join('');
var inst_22701 = ["strain",inst_22700];
var inst_22702 = cljs.core.PersistentHashMap.fromArrays(inst_22699,inst_22701);
var inst_22703 = clj_pouchdb.core.post_doc.call(null,reagent_test.app.db,inst_22702);
var state_22707__$1 = state_22707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22707__$1,(2),inst_22703);
} else {
return null;
}
}
});})(n,c__6645__auto___22717,n__4440__auto__))
;
return ((function (n,switch__6580__auto__,c__6645__auto___22717,n__4440__auto__){
return (function() {
var state_machine__6581__auto__ = null;
var state_machine__6581__auto____0 = (function (){
var statearr_22713 = [null,null,null,null,null,null,null,null];
(statearr_22713[(0)] = state_machine__6581__auto__);

(statearr_22713[(1)] = (1));

return statearr_22713;
});
var state_machine__6581__auto____1 = (function (state_22707){
while(true){
var ret_value__6582__auto__ = (function (){try{while(true){
var result__6583__auto__ = switch__6580__auto__.call(null,state_22707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6583__auto__;
}
break;
}
}catch (e22714){if((e22714 instanceof Object)){
var ex__6584__auto__ = e22714;
var statearr_22715_22718 = state_22707;
(statearr_22715_22718[(5)] = ex__6584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22719 = state_22707;
state_22707 = G__22719;
continue;
} else {
return ret_value__6582__auto__;
}
break;
}
});
state_machine__6581__auto__ = function(state_22707){
switch(arguments.length){
case 0:
return state_machine__6581__auto____0.call(this);
case 1:
return state_machine__6581__auto____1.call(this,state_22707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6581__auto____0;
state_machine__6581__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6581__auto____1;
return state_machine__6581__auto__;
})()
;})(n,switch__6580__auto__,c__6645__auto___22717,n__4440__auto__))
})();
var state__6647__auto__ = (function (){var statearr_22716 = f__6646__auto__.call(null);
(statearr_22716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6645__auto___22717);

return statearr_22716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6647__auto__);
});})(n,c__6645__auto___22717,n__4440__auto__))
);


var G__22720 = (n + (1));
n = G__22720;
continue;
} else {
return null;
}
break;
}
});
reagent_test.app.init = (function init(){
reagent_test.app.db.sync(reagent_test.app.remote_db,reagent_test.app.hash_to_obj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"live","live",-1610148039),true], null)));

reagent_test.app.load_app_state.call(null);

console.log("init");

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.strain], null),document.getElementById("container"));
});

//# sourceMappingURL=app.js.map