// Compiled by ClojureScript 0.0-2760 {}
goog.provide('reagent_test.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
reagent_test.app.strain_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"markers","markers",-246919693),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["met","lac"], null),new cljs.core.Keyword(null,"name","name",1843675177),"s1",new cljs.core.Keyword(null,"copy-details-flag","copy-details-flag",895443060),true], null));
reagent_test.app.copy_details_did_mount = (function copy_details_did_mount(){
return $((function (){
var available_tags = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ActionScript","AppleScript","Asp","BASIC","C","C++","Clojure","COBOL","ColdFusion","Erlang","Fortran","Groovy","Haskell","Java","JavaScript","Lisp","Perl","PHP","Python","Ruby","Scala","Scheme"], null);
return $("#copy_from_strain").autocomplete(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),available_tags], null)));
}));
});
reagent_test.app.copy_details_div = (function copy_details_div(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"copy-details-flag","copy-details-flag",895443060).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_test.app.strain_data)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui-widget","div.ui-widget",901264408),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"copy_from_strain"], null),"Enter name of existing (non-plasmid;phage; or F' containing Strain).",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"All information from this Strain (except for Remarks) will be copied to the current new Strain."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_from_strain","input#copy_from_strain",-1413277412)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button_row","div.button_row",1769583902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_details_submit_btn","input#copy_details_submit_btn",-685007933),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"OK",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"name","name",1843675177),"copy_details_submit"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_details_cancel_btn","input#copy_details_cancel_btn",-1043891244),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),"Cancel",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"name","name",1843675177),"copy_details_cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,reagent_test.app.strain_data,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,reagent_test.app.strain_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copy-details-flag","copy-details-flag",895443060)], null),false));
})], null)], null)], null)], null);
} else {
return null;
}
});
reagent_test.app.copy_details_component = (function copy_details_component(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),reagent_test.app.copy_details_div,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),reagent_test.app.copy_details_did_mount], null));
});
reagent_test.app.oldcopy_details_div = (function oldcopy_details_div(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"0"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.statusBar","tr.statusBar",-443799559),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"\u00A0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.lbl","td.lbl",-1087978707),"Enter name of existing (non-plasmid;phage; or F' containing Strain).",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"All information from this Strain (except for Remarks) will be copied to the current new Strain."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.lbl","td.lbl",-1087978707),"Enter existing Strain name"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-autocomplete","data-autocomplete",1940700611),"http://gene-tracker.com:3000/demo/strains/strain_name_autocomplete?variety_id=1",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"size","size",1098693007),"15",new cljs.core.Keyword(null,"name","name",1843675177),"[copy_details]name"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button_row","div.button_row",1769583902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_details_submit_btn","input#copy_details_submit_btn",-685007933),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"OK",new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"name","name",1843675177),"copy_details_submit"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_details_cancel_btn","input#copy_details_cancel_btn",-1043891244),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),"Cancel",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"name","name",1843675177),"copy_details_cancel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,reagent_test.app.strain_data,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,reagent_test.app.strain_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copy-details-flag","copy-details-flag",895443060)], null),false));
})], null)], null)], null)], null);
});
reagent_test.app.copy_details_button = (function copy_details_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#copy_details_show_btn.details_button","input#copy_details_show_btn.details_button",-1241406342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),"Copy Details From Existing Strain...",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,reagent_test.app.strain_data,new cljs.core.Keyword(null,"e","e",1381269198),cljs.core.assoc_in.call(null,cljs.core.deref.call(null,reagent_test.app.strain_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"copy-details-flag","copy-details-flag",895443060)], null),true));
}),new cljs.core.Keyword(null,"name","name",1843675177),"copy_details_show"], null)], null);
});
reagent_test.app.marker_input = (function marker_input(m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"marker_entry",new cljs.core.Keyword(null,"maxlength","maxlength",-1163911985),"15",new cljs.core.Keyword(null,"size","size",1098693007),"20",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null);
});
reagent_test.app.marker_input_list = (function marker_input_list(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4309__auto__ = (function iter__12416(s__12417){
return (new cljs.core.LazySeq(null,(function (){
var s__12417__$1 = s__12417;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12417__$1);
if(temp__4126__auto__){
var s__12417__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12417__$2)){
var c__4307__auto__ = cljs.core.chunk_first.call(null,s__12417__$2);
var size__4308__auto__ = cljs.core.count.call(null,c__4307__auto__);
var b__12419 = cljs.core.chunk_buffer.call(null,size__4308__auto__);
if((function (){var i__12418 = (0);
while(true){
if((i__12418 < size__4308__auto__)){
var item = cljs.core._nth.call(null,c__4307__auto__,i__12418);
cljs.core.chunk_append.call(null,b__12419,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.marker_input,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__12420 = (i__12418 + (1));
i__12418 = G__12420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12419),iter__12416.call(null,cljs.core.chunk_rest.call(null,s__12417__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12419),null);
}
} else {
var item = cljs.core.first.call(null,s__12417__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.marker_input,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),iter__12416.call(null,cljs.core.rest.call(null,s__12417__$2)));
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
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"New Strain page"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"This strain has",cljs.core.count.call(null,new cljs.core.Keyword(null,"markers","markers",-246919693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_test.app.strain_data))),"markers"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.copy_details_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.copy_details_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.marker_input_list,new cljs.core.Keyword(null,"markers","markers",-246919693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_test.app.strain_data))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"go to about page"], null)], null)], null);
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
var action__12202__auto___12423 = (function (params__12203__auto__){
if(cljs.core.map_QMARK_.call(null,params__12203__auto__)){
var map__12421 = params__12203__auto__;
var map__12421__$1 = ((cljs.core.seq_QMARK_.call(null,map__12421))?cljs.core.apply.call(null,cljs.core.hash_map,map__12421):map__12421);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_test.app.strain;},new cljs.core.Symbol("reagent-test.app","strain","reagent-test.app/strain",-1399238305,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(reagent_test.app.strain)?reagent_test.app.strain.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"strain","strain",-1174129697,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),131,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/630/-p9hf6h/reagent_test/app.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"reagent-test.app","reagent-test.app",385339293,null)], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__12203__auto__)){
var vec__12422 = params__12203__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_test.app.strain;},new cljs.core.Symbol("reagent-test.app","strain","reagent-test.app/strain",-1399238305,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(reagent_test.app.strain)?reagent_test.app.strain.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"strain","strain",-1174129697,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),131,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/630/-p9hf6h/reagent_test/app.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"reagent-test.app","reagent-test.app",385339293,null)], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/strains/new",action__12202__auto___12423);

var action__12202__auto___12426 = (function (params__12203__auto__){
if(cljs.core.map_QMARK_.call(null,params__12203__auto__)){
var map__12424 = params__12203__auto__;
var map__12424__$1 = ((cljs.core.seq_QMARK_.call(null,map__12424))?cljs.core.apply.call(null,cljs.core.hash_map,map__12424):map__12424);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_test.app.home_page;},new cljs.core.Symbol("reagent-test.app","home-page","reagent-test.app/home-page",-539316759,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(reagent_test.app.home_page)?reagent_test.app.home_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/630/-p9hf6h/reagent_test/app.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"reagent-test.app","reagent-test.app",385339293,null)], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__12203__auto__)){
var vec__12425 = params__12203__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_test.app.home_page;},new cljs.core.Symbol("reagent-test.app","home-page","reagent-test.app/home-page",-539316759,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(reagent_test.app.home_page)?reagent_test.app.home_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/630/-p9hf6h/reagent_test/app.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"reagent-test.app","reagent-test.app",385339293,null)], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__12202__auto___12426);

var action__12202__auto___12429 = (function (params__12203__auto__){
if(cljs.core.map_QMARK_.call(null,params__12203__auto__)){
var map__12427 = params__12203__auto__;
var map__12427__$1 = ((cljs.core.seq_QMARK_.call(null,map__12427))?cljs.core.apply.call(null,cljs.core.hash_map,map__12427):map__12427);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_test.app.about_page;},new cljs.core.Symbol("reagent-test.app","about-page","reagent-test.app/about-page",1890542249,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(reagent_test.app.about_page)?reagent_test.app.about_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),148,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/630/-p9hf6h/reagent_test/app.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"reagent-test.app","reagent-test.app",385339293,null)], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__12203__auto__)){
var vec__12428 = params__12203__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return reagent_test.app.about_page;},new cljs.core.Symbol("reagent-test.app","about-page","reagent-test.app/about-page",1890542249,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(reagent_test.app.about_page)?reagent_test.app.about_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),148,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/john/.boot/tmp/home/john/reagent-test/630/-p9hf6h/reagent_test/app.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"reagent-test.app","reagent-test.app",385339293,null)], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__12202__auto___12429);

reagent_test.app.hook_browser_navigation_BANG_ = (function hook_browser_navigation_BANG_(){
var G__12431 = (new goog.History());
goog.events.listen(G__12431,goog.history.EventType.NAVIGATE,((function (G__12431){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__12431))
);

G__12431.setEnabled(true);

return G__12431;
});
reagent_test.app.init = (function init(){
reagent_test.app.hook_browser_navigation_BANG_.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_test.app.current_page], null),document.getElementById("container"));
});

//# sourceMappingURL=app.js.map