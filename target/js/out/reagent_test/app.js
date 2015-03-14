// Compiled by ClojureScript 0.0-2760 {}
goog.provide('reagent_test.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clj_pouchdb.core');
goog.require('goog.History');
goog.require('goog.events');
reagent_test.app.my_log = (function my_log(x){
return console.log(x);
});
/**
* @param {...*} var_args
*/
reagent_test.app.log = (function() { 
var log__delegate = function (my_args){
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p1__19979_SHARP_){
return reagent_test.app.my_log.call(null,JSON.stringify(cljs.core.clj__GT_js.call(null,p1__19979_SHARP_)));
}),my_args));
};
var log = function (var_args){
var my_args = null;
if (arguments.length > 0) {
var G__19980__i = 0, G__19980__a = new Array(arguments.length -  0);
while (G__19980__i < G__19980__a.length) {G__19980__a[G__19980__i] = arguments[G__19980__i + 0]; ++G__19980__i;}
  my_args = new cljs.core.IndexedSeq(G__19980__a,0);
} 
return log__delegate.call(this,my_args);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__19981){
var my_args = cljs.core.seq(arglist__19981);
return log__delegate(my_args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
reagent_test.app.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strain-names","strain-names",-441890702),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["met","lac"], null),new cljs.core.Keyword(null,"name","name",1843675177),"s1",new cljs.core.Keyword(null,"copy-details-flag","copy-details-flag",895443060),false], null)], null));
reagent_test.app.copy_strain_input_did_mount = (function copy_strain_input_did_mount(){
console.log("in copy-strain-input-did-mount");

return $((function (){
var available_tags = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ActionScript","AppleScript","Asp","BASIC","C","C++","Clojure","COBOL","ColdFusion","Erlang","Fortran","Groovy","Haskell","Java","JavaScript","Lisp","Perl","PHP","Python","Ruby","Scala","Scheme"], null);
return $("#copy_from_strain").autocomplete(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"strain-names","strain-names",-441890702).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_test.app.app_state))], null)));
}));
});
reagent_test.app.copy_strain_input = (function copy_strain_input(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_from_strain","input#copy_from_strain",-1413277412)], null);
});
reagent_test.app.copy_strain_input_component = (function copy_strain_input_component(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),reagent_test.app.copy_strain_input,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),reagent_test.app.copy_strain_input_did_mount], null));
});
reagent_test.app.copy_details_div = (function copy_details_div(){
reagent_test.app.log.call(null,"entering copy-details-div, app-state is");

reagent_test.app.log.call(null,cljs.core.deref.call(null,reagent_test.app.app_state));

if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent_test.app.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"copy-details-flag","copy-details-flag",895443060)], null)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui-widget","div.ui-widget",901264408),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"copy_from_strain"], null),"Enter name of existing (non-plasmid;phage; or F' containing Strain).",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"All information from this Strain (except for Remarks) will be copied to the current new Strain."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.copy_strain_input_component], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button_row","div.button_row",1769583902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_details_submit_btn","input#copy_details_submit_btn",-685007933),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"value","value",305978217),"OK",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"name","name",1843675177),"copy_details_submit"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_details_cancel_btn","input#copy_details_cancel_btn",-1043891244),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),"Cancel",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-secondary",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"name","name",1843675177),"copy_details_cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,reagent_test.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"copy-details-flag","copy-details-flag",895443060)], null),false);
})], null)], null)], null)], null);
} else {
return null;
}
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
reagent_test.app.oldcopy_details_div = (function oldcopy_details_div(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"0"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.statusBar","tr.statusBar",-443799559),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"\u00A0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.lbl","td.lbl",-1087978707),"Enter name of existing (non-plasmid;phage; or F' containing Strain).",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"All information from this Strain (except for Remarks) will be copied to the current new Strain."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.lbl","td.lbl",-1087978707),"Enter existing Strain name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-autocomplete","data-autocomplete",1940700611),"http://gene-tracker.com:3000/demo/strains/strain_name_autocomplete?variety_id=1",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"size","size",1098693007),"15",new cljs.core.Keyword(null,"name","name",1843675177),"[copy_details]name"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button_row","div.button_row",1769583902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_details_submit_btn","input#copy_details_submit_btn",-685007933),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"OK",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"name","name",1843675177),"copy_details_submit"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_details_cancel_btn","input#copy_details_cancel_btn",-1043891244),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),"Cancel",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"name","name",1843675177),"copy_details_cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,reagent_test.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"copy-details-flag","copy-details-flag",895443060)], null),false);
})], null)], null)], null)], null);
});
reagent_test.app.copy_details_button = (function copy_details_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_details_show_btn.details_button","input#copy_details_show_btn.details_button",-1241406342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),"Copy Details From Existing Strain...",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,reagent_test.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"copy-details-flag","copy-details-flag",895443060)], null),true);
}),new cljs.core.Keyword(null,"name","name",1843675177),"copy_details_show"], null)], null);
});
reagent_test.app.marker_input = (function marker_input(m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"marker_entry",new cljs.core.Keyword(null,"maxlength","maxlength",-1163911985),"15",new cljs.core.Keyword(null,"size","size",1098693007),"20",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null);
});
reagent_test.app.marker_input_list = (function marker_input_list(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4309__auto__ = (function iter__19986(s__19987){
return (new cljs.core.LazySeq(null,(function (){
var s__19987__$1 = s__19987;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19987__$1);
if(temp__4126__auto__){
var s__19987__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19987__$2)){
var c__4307__auto__ = cljs.core.chunk_first.call(null,s__19987__$2);
var size__4308__auto__ = cljs.core.count.call(null,c__4307__auto__);
var b__19989 = cljs.core.chunk_buffer.call(null,size__4308__auto__);
if((function (){var i__19988 = (0);
while(true){
if((i__19988 < size__4308__auto__)){
var item = cljs.core._nth.call(null,c__4307__auto__,i__19988);
cljs.core.chunk_append.call(null,b__19989,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.marker_input,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__19990 = (i__19988 + (1));
i__19988 = G__19990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19989),iter__19986.call(null,cljs.core.chunk_rest.call(null,s__19987__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19989),null);
}
} else {
var item = cljs.core.first.call(null,s__19987__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.marker_input,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),iter__19986.call(null,cljs.core.rest.call(null,s__19987__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4309__auto__.call(null,items);
})()], null);
});
reagent_test.app.markers = (function markers(markers_list){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"markers_div"], null),"markers here"], null);
});
reagent_test.app.strain = (function strain(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"New Strain page"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This strain has","markers"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.copy_details_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.copy_details_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.marker_input_list,cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent_test.app.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-data","strain-data",735514435),new cljs.core.Keyword(null,"markers","markers",-246919693)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.my_modal_div], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"go to about page"], null)], null)], null);
});
reagent_test.app.home_page = (function home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to test-reagent"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/strains/new"], null),"New Strain"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"go to about page"], null)], null)], null);
});
reagent_test.app.about_page = (function about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About test-reagentjjj"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to the home page"], null)], null)], null);
});
reagent_test.app.current_page = (function current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__5454__auto___19993 = (function (params__5455__auto__){
if(cljs.core.map_QMARK_.call(null,params__5455__auto__)){
var map__19991 = params__5455__auto__;
var map__19991__$1 = ((cljs.core.seq_QMARK_.call(null,map__19991))?cljs.core.apply.call(null,cljs.core.hash_map,map__19991):map__19991);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_test.app.strain;},new cljs.core.Symbol("reagent-test.app","strain","reagent-test.app/strain",-1399238305,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(reagent_test.app.strain)?reagent_test.app.strain.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"strain","strain",-1174129697,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),199,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-p9hf6h/reagent_test/app.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"reagent-test.app","reagent-test.app",385339293,null)], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__5455__auto__)){
var vec__19992 = params__5455__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_test.app.strain;},new cljs.core.Symbol("reagent-test.app","strain","reagent-test.app/strain",-1399238305,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(reagent_test.app.strain)?reagent_test.app.strain.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"strain","strain",-1174129697,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),199,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-p9hf6h/reagent_test/app.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"reagent-test.app","reagent-test.app",385339293,null)], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/strains/new",action__5454__auto___19993);

var action__5454__auto___19996 = (function (params__5455__auto__){
if(cljs.core.map_QMARK_.call(null,params__5455__auto__)){
var map__19994 = params__5455__auto__;
var map__19994__$1 = ((cljs.core.seq_QMARK_.call(null,map__19994))?cljs.core.apply.call(null,cljs.core.hash_map,map__19994):map__19994);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_test.app.home_page;},new cljs.core.Symbol("reagent-test.app","home-page","reagent-test.app/home-page",-539316759,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(reagent_test.app.home_page)?reagent_test.app.home_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),210,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-p9hf6h/reagent_test/app.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"reagent-test.app","reagent-test.app",385339293,null)], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__5455__auto__)){
var vec__19995 = params__5455__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_test.app.home_page;},new cljs.core.Symbol("reagent-test.app","home-page","reagent-test.app/home-page",-539316759,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(reagent_test.app.home_page)?reagent_test.app.home_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),210,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-p9hf6h/reagent_test/app.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"reagent-test.app","reagent-test.app",385339293,null)], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__5454__auto___19996);

var action__5454__auto___19999 = (function (params__5455__auto__){
if(cljs.core.map_QMARK_.call(null,params__5455__auto__)){
var map__19997 = params__5455__auto__;
var map__19997__$1 = ((cljs.core.seq_QMARK_.call(null,map__19997))?cljs.core.apply.call(null,cljs.core.hash_map,map__19997):map__19997);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_test.app.about_page;},new cljs.core.Symbol("reagent-test.app","about-page","reagent-test.app/about-page",1890542249,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(reagent_test.app.about_page)?reagent_test.app.about_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),217,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-p9hf6h/reagent_test/app.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"reagent-test.app","reagent-test.app",385339293,null)], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__5455__auto__)){
var vec__19998 = params__5455__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_test.app.about_page;},new cljs.core.Symbol("reagent-test.app","about-page","reagent-test.app/about-page",1890542249,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(reagent_test.app.about_page)?reagent_test.app.about_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),217,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/79i/-p9hf6h/reagent_test/app.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"reagent-test.app","reagent-test.app",385339293,null)], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__5454__auto___19999);

reagent_test.app.hook_browser_navigation_BANG_ = (function hook_browser_navigation_BANG_(){
var G__20001 = (new goog.History());
goog.events.listen(G__20001,goog.history.EventType.NAVIGATE,((function (G__20001){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__20001))
);

G__20001.setEnabled(true);

return G__20001;
});
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
var obj20005 = {};
return obj20005;
}
})();
return jso;
});
/**
* Create a new PouchDB database given optional name and options
* @param {...*} var_args
*/
reagent_test.app.create_db = (function() { 
var create_db__delegate = function (p__20006){
var vec__20009 = p__20006;
var name = cljs.core.nth.call(null,vec__20009,(0),null);
var vec__20010 = cljs.core.nthnext.call(null,vec__20009,(1));
var options = cljs.core.nth.call(null,vec__20010,(0),null);
return (new PouchDB(name,reagent_test.app.hash_to_obj.call(null,options)));
};
var create_db = function (var_args){
var p__20006 = null;
if (arguments.length > 0) {
var G__20011__i = 0, G__20011__a = new Array(arguments.length -  0);
while (G__20011__i < G__20011__a.length) {G__20011__a[G__20011__i] = arguments[G__20011__i + 0]; ++G__20011__i;}
  p__20006 = new cljs.core.IndexedSeq(G__20011__a,0);
} 
return create_db__delegate.call(this,p__20006);};
create_db.cljs$lang$maxFixedArity = 0;
create_db.cljs$lang$applyTo = (function (arglist__20012){
var p__20006 = cljs.core.seq(arglist__20012);
return create_db__delegate(p__20006);
});
create_db.cljs$core$IFn$_invoke$arity$variadic = create_db__delegate;
return create_db;
})()
;
reagent_test.app.db = reagent_test.app.create_db.call(null,"gt3");
/**
* Convert a CLJS structure to a JS object, yielding empty JS object for nil input
*/
reagent_test.app.hash_to_obj = (function hash_to_obj(obj){
var jso = (function (){var or__3553__auto__ = cljs.core.clj__GT_js.call(null,obj);
if(cljs.core.truth_(or__3553__auto__)){
return or__3553__auto__;
} else {
var obj20016 = {};
return obj20016;
}
})();
return jso;
});
reagent_test.app.load_strain_names = (function load_strain_names(){
return reagent_test.app.db.allDocs(reagent_test.app.hash_to_obj.call(null,new cljs.core.PersistentArrayMap(null, 1, ["include_docs",true], null)),(function (err,raw_res){
reagent_test.app.log.call(null,"load-strain-names callback");

if(cljs.core.truth_(err)){
return reagent_test.app.log.call(null,"error getting strain names");
} else {
var res = reagent_test.app.obj_to_hash.call(null,raw_res);
var rows = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(res);
var docs = cljs.core.map.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891),rows);
var names = cljs.core.sort.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),docs));
return cljs.core.swap_BANG_.call(null,reagent_test.app.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strain-names","strain-names",-441890702)], null),names);
}
}));
});
reagent_test.app.create_sample_data = (function create_sample_data(){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__20017_SHARP_){
var c__13715__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13715__auto__){
return (function (){
var f__13716__auto__ = (function (){var switch__13650__auto__ = ((function (c__13715__auto__){
return (function (state_20044){
var state_val_20045 = (state_20044[(1)]);
if((state_val_20045 === (2))){
var inst_20042 = (state_20044[(2)]);
var state_20044__$1 = (function (){var statearr_20046 = state_20044;
(statearr_20046[(7)] = inst_20042);

return statearr_20046;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20044__$1,null);
} else {
if((state_val_20045 === (1))){
var inst_20036 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_20037 = [cljs.core.str("Strain"),cljs.core.str(p1__20017_SHARP_)].join('');
var inst_20038 = ["strain",inst_20037];
var inst_20039 = cljs.core.PersistentHashMap.fromArrays(inst_20036,inst_20038);
var inst_20040 = clj_pouchdb.core.post_doc.call(null,reagent_test.app.db,inst_20039);
var state_20044__$1 = state_20044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20044__$1,(2),inst_20040);
} else {
return null;
}
}
});})(c__13715__auto__))
;
return ((function (switch__13650__auto__,c__13715__auto__){
return (function() {
var state_machine__13651__auto__ = null;
var state_machine__13651__auto____0 = (function (){
var statearr_20050 = [null,null,null,null,null,null,null,null];
(statearr_20050[(0)] = state_machine__13651__auto__);

(statearr_20050[(1)] = (1));

return statearr_20050;
});
var state_machine__13651__auto____1 = (function (state_20044){
while(true){
var ret_value__13652__auto__ = (function (){try{while(true){
var result__13653__auto__ = switch__13650__auto__.call(null,state_20044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13653__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13653__auto__;
}
break;
}
}catch (e20051){if((e20051 instanceof Object)){
var ex__13654__auto__ = e20051;
var statearr_20052_20054 = state_20044;
(statearr_20052_20054[(5)] = ex__13654__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13652__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20055 = state_20044;
state_20044 = G__20055;
continue;
} else {
return ret_value__13652__auto__;
}
break;
}
});
state_machine__13651__auto__ = function(state_20044){
switch(arguments.length){
case 0:
return state_machine__13651__auto____0.call(this);
case 1:
return state_machine__13651__auto____1.call(this,state_20044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13651__auto____0;
state_machine__13651__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13651__auto____1;
return state_machine__13651__auto__;
})()
;})(switch__13650__auto__,c__13715__auto__))
})();
var state__13717__auto__ = (function (){var statearr_20053 = f__13716__auto__.call(null);
(statearr_20053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13715__auto__);

return statearr_20053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13717__auto__);
});})(c__13715__auto__))
);

return c__13715__auto__;
}),cljs.core.range.call(null,(100))));
});
reagent_test.app.init = (function init(){
reagent_test.app.load_strain_names.call(null);

reagent_test.app.hook_browser_navigation_BANG_.call(null);

var container = document.getElementById("container");
console.log("container",cljs.core.pr_str.call(null,container));

if(cljs.core.truth_(container)){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.current_page], null),container);
} else {
return null;
}
});

//# sourceMappingURL=app.js.map