// Compiled by ClojureScript 1.10.516 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__7350){
var map__7351 = p__7350;
var map__7351__$1 = (((((!((map__7351 == null))))?(((((map__7351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7351):map__7351);
var m = map__7351__$1;
var n = cljs.core.get.call(null,map__7351__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__7351__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7353_7385 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7354_7386 = null;
var count__7355_7387 = (0);
var i__7356_7388 = (0);
while(true){
if((i__7356_7388 < count__7355_7387)){
var f_7389 = cljs.core._nth.call(null,chunk__7354_7386,i__7356_7388);
cljs.core.println.call(null,"  ",f_7389);


var G__7390 = seq__7353_7385;
var G__7391 = chunk__7354_7386;
var G__7392 = count__7355_7387;
var G__7393 = (i__7356_7388 + (1));
seq__7353_7385 = G__7390;
chunk__7354_7386 = G__7391;
count__7355_7387 = G__7392;
i__7356_7388 = G__7393;
continue;
} else {
var temp__5720__auto___7394 = cljs.core.seq.call(null,seq__7353_7385);
if(temp__5720__auto___7394){
var seq__7353_7395__$1 = temp__5720__auto___7394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7353_7395__$1)){
var c__4550__auto___7396 = cljs.core.chunk_first.call(null,seq__7353_7395__$1);
var G__7397 = cljs.core.chunk_rest.call(null,seq__7353_7395__$1);
var G__7398 = c__4550__auto___7396;
var G__7399 = cljs.core.count.call(null,c__4550__auto___7396);
var G__7400 = (0);
seq__7353_7385 = G__7397;
chunk__7354_7386 = G__7398;
count__7355_7387 = G__7399;
i__7356_7388 = G__7400;
continue;
} else {
var f_7401 = cljs.core.first.call(null,seq__7353_7395__$1);
cljs.core.println.call(null,"  ",f_7401);


var G__7402 = cljs.core.next.call(null,seq__7353_7395__$1);
var G__7403 = null;
var G__7404 = (0);
var G__7405 = (0);
seq__7353_7385 = G__7402;
chunk__7354_7386 = G__7403;
count__7355_7387 = G__7404;
i__7356_7388 = G__7405;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7406 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7406);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7406)))?cljs.core.second.call(null,arglists_7406):arglists_7406));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7357_7407 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7358_7408 = null;
var count__7359_7409 = (0);
var i__7360_7410 = (0);
while(true){
if((i__7360_7410 < count__7359_7409)){
var vec__7371_7411 = cljs.core._nth.call(null,chunk__7358_7408,i__7360_7410);
var name_7412 = cljs.core.nth.call(null,vec__7371_7411,(0),null);
var map__7374_7413 = cljs.core.nth.call(null,vec__7371_7411,(1),null);
var map__7374_7414__$1 = (((((!((map__7374_7413 == null))))?(((((map__7374_7413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7374_7413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7374_7413):map__7374_7413);
var doc_7415 = cljs.core.get.call(null,map__7374_7414__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7416 = cljs.core.get.call(null,map__7374_7414__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7412);

cljs.core.println.call(null," ",arglists_7416);

if(cljs.core.truth_(doc_7415)){
cljs.core.println.call(null," ",doc_7415);
} else {
}


var G__7417 = seq__7357_7407;
var G__7418 = chunk__7358_7408;
var G__7419 = count__7359_7409;
var G__7420 = (i__7360_7410 + (1));
seq__7357_7407 = G__7417;
chunk__7358_7408 = G__7418;
count__7359_7409 = G__7419;
i__7360_7410 = G__7420;
continue;
} else {
var temp__5720__auto___7421 = cljs.core.seq.call(null,seq__7357_7407);
if(temp__5720__auto___7421){
var seq__7357_7422__$1 = temp__5720__auto___7421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7357_7422__$1)){
var c__4550__auto___7423 = cljs.core.chunk_first.call(null,seq__7357_7422__$1);
var G__7424 = cljs.core.chunk_rest.call(null,seq__7357_7422__$1);
var G__7425 = c__4550__auto___7423;
var G__7426 = cljs.core.count.call(null,c__4550__auto___7423);
var G__7427 = (0);
seq__7357_7407 = G__7424;
chunk__7358_7408 = G__7425;
count__7359_7409 = G__7426;
i__7360_7410 = G__7427;
continue;
} else {
var vec__7376_7428 = cljs.core.first.call(null,seq__7357_7422__$1);
var name_7429 = cljs.core.nth.call(null,vec__7376_7428,(0),null);
var map__7379_7430 = cljs.core.nth.call(null,vec__7376_7428,(1),null);
var map__7379_7431__$1 = (((((!((map__7379_7430 == null))))?(((((map__7379_7430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7379_7430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7379_7430):map__7379_7430);
var doc_7432 = cljs.core.get.call(null,map__7379_7431__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7433 = cljs.core.get.call(null,map__7379_7431__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7429);

cljs.core.println.call(null," ",arglists_7433);

if(cljs.core.truth_(doc_7432)){
cljs.core.println.call(null," ",doc_7432);
} else {
}


var G__7434 = cljs.core.next.call(null,seq__7357_7422__$1);
var G__7435 = null;
var G__7436 = (0);
var G__7437 = (0);
seq__7357_7407 = G__7434;
chunk__7358_7408 = G__7435;
count__7359_7409 = G__7436;
i__7360_7410 = G__7437;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__7381 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__7382 = null;
var count__7383 = (0);
var i__7384 = (0);
while(true){
if((i__7384 < count__7383)){
var role = cljs.core._nth.call(null,chunk__7382,i__7384);
var temp__5720__auto___7438__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___7438__$1)){
var spec_7439 = temp__5720__auto___7438__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7439));
} else {
}


var G__7440 = seq__7381;
var G__7441 = chunk__7382;
var G__7442 = count__7383;
var G__7443 = (i__7384 + (1));
seq__7381 = G__7440;
chunk__7382 = G__7441;
count__7383 = G__7442;
i__7384 = G__7443;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__7381);
if(temp__5720__auto____$1){
var seq__7381__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7381__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__7381__$1);
var G__7444 = cljs.core.chunk_rest.call(null,seq__7381__$1);
var G__7445 = c__4550__auto__;
var G__7446 = cljs.core.count.call(null,c__4550__auto__);
var G__7447 = (0);
seq__7381 = G__7444;
chunk__7382 = G__7445;
count__7383 = G__7446;
i__7384 = G__7447;
continue;
} else {
var role = cljs.core.first.call(null,seq__7381__$1);
var temp__5720__auto___7448__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___7448__$2)){
var spec_7449 = temp__5720__auto___7448__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7449));
} else {
}


var G__7450 = cljs.core.next.call(null,seq__7381__$1);
var G__7451 = null;
var G__7452 = (0);
var G__7453 = (0);
seq__7381 = G__7450;
chunk__7382 = G__7451;
count__7383 = G__7452;
i__7384 = G__7453;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__7454 = cljs.core.conj.call(null,via,t);
var G__7455 = cljs.core.ex_cause.call(null,t);
via = G__7454;
t = G__7455;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__7458 = datafied_throwable;
var map__7458__$1 = (((((!((map__7458 == null))))?(((((map__7458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7458):map__7458);
var via = cljs.core.get.call(null,map__7458__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__7458__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__7458__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__7459 = cljs.core.last.call(null,via);
var map__7459__$1 = (((((!((map__7459 == null))))?(((((map__7459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7459):map__7459);
var type = cljs.core.get.call(null,map__7459__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__7459__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__7459__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__7460 = data;
var map__7460__$1 = (((((!((map__7460 == null))))?(((((map__7460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7460):map__7460);
var problems = cljs.core.get.call(null,map__7460__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__7460__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__7460__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__7461 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__7461__$1 = (((((!((map__7461 == null))))?(((((map__7461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7461):map__7461);
var top_data = map__7461__$1;
var source = cljs.core.get.call(null,map__7461__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__7466 = phase;
var G__7466__$1 = (((G__7466 instanceof cljs.core.Keyword))?G__7466.fqn:null);
switch (G__7466__$1) {
case "read-source":
var map__7467 = data;
var map__7467__$1 = (((((!((map__7467 == null))))?(((((map__7467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7467):map__7467);
var line = cljs.core.get.call(null,map__7467__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__7467__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__7469 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__7469__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__7469,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__7469);
var G__7469__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__7469__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__7469__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__7469__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__7469__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__7470 = top_data;
var G__7470__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__7470,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__7470);
var G__7470__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__7470__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__7470__$1);
var G__7470__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__7470__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__7470__$2);
var G__7470__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__7470__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__7470__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__7470__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__7470__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__7471 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__7471,(0),null);
var method = cljs.core.nth.call(null,vec__7471,(1),null);
var file = cljs.core.nth.call(null,vec__7471,(2),null);
var line = cljs.core.nth.call(null,vec__7471,(3),null);
var G__7474 = top_data;
var G__7474__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__7474,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__7474);
var G__7474__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__7474__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__7474__$1);
var G__7474__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__7474__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__7474__$2);
var G__7474__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__7474__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__7474__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__7474__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__7474__$4;
}

break;
case "execution":
var vec__7475 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__7475,(0),null);
var method = cljs.core.nth.call(null,vec__7475,(1),null);
var file = cljs.core.nth.call(null,vec__7475,(2),null);
var line = cljs.core.nth.call(null,vec__7475,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__7475,source__$1,method,file,line,G__7466,G__7466__$1,map__7458,map__7458__$1,via,trace,phase,map__7459,map__7459__$1,type,message,data,map__7460,map__7460__$1,problems,fn,caller,map__7461,map__7461__$1,top_data,source){
return (function (p1__7457_SHARP_){
var or__4131__auto__ = (p1__7457_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__7457_SHARP_);
}
});})(vec__7475,source__$1,method,file,line,G__7466,G__7466__$1,map__7458,map__7458__$1,via,trace,phase,map__7459,map__7459__$1,type,message,data,map__7460,map__7460__$1,problems,fn,caller,map__7461,map__7461__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__7478 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__7478__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__7478,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__7478);
var G__7478__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__7478__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__7478__$1);
var G__7478__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__7478__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__7478__$2);
var G__7478__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__7478__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__7478__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__7478__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__7478__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7466__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__7482){
var map__7483 = p__7482;
var map__7483__$1 = (((((!((map__7483 == null))))?(((((map__7483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7483):map__7483);
var triage_data = map__7483__$1;
var phase = cljs.core.get.call(null,map__7483__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__7483__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__7483__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__7483__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__7483__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__7483__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__7483__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__7483__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__7485 = phase;
var G__7485__$1 = (((G__7485 instanceof cljs.core.Keyword))?G__7485.fqn:null);
switch (G__7485__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7486_7495 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7487_7496 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7488_7497 = true;
var _STAR_print_fn_STAR__temp_val__7489_7498 = ((function (_STAR_print_newline_STAR__orig_val__7486_7495,_STAR_print_fn_STAR__orig_val__7487_7496,_STAR_print_newline_STAR__temp_val__7488_7497,sb__4661__auto__,G__7485,G__7485__$1,loc,class_name,simple_class,cause_type,format,map__7483,map__7483__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__7486_7495,_STAR_print_fn_STAR__orig_val__7487_7496,_STAR_print_newline_STAR__temp_val__7488_7497,sb__4661__auto__,G__7485,G__7485__$1,loc,class_name,simple_class,cause_type,format,map__7483,map__7483__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7488_7497;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7489_7498;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__7486_7495,_STAR_print_fn_STAR__orig_val__7487_7496,_STAR_print_newline_STAR__temp_val__7488_7497,_STAR_print_fn_STAR__temp_val__7489_7498,sb__4661__auto__,G__7485,G__7485__$1,loc,class_name,simple_class,cause_type,format,map__7483,map__7483__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__7486_7495,_STAR_print_fn_STAR__orig_val__7487_7496,_STAR_print_newline_STAR__temp_val__7488_7497,_STAR_print_fn_STAR__temp_val__7489_7498,sb__4661__auto__,G__7485,G__7485__$1,loc,class_name,simple_class,cause_type,format,map__7483,map__7483__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__7480_SHARP_){
return cljs.core.dissoc.call(null,p1__7480_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__7486_7495,_STAR_print_fn_STAR__orig_val__7487_7496,_STAR_print_newline_STAR__temp_val__7488_7497,_STAR_print_fn_STAR__temp_val__7489_7498,sb__4661__auto__,G__7485,G__7485__$1,loc,class_name,simple_class,cause_type,format,map__7483,map__7483__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__7486_7495,_STAR_print_fn_STAR__orig_val__7487_7496,_STAR_print_newline_STAR__temp_val__7488_7497,_STAR_print_fn_STAR__temp_val__7489_7498,sb__4661__auto__,G__7485,G__7485__$1,loc,class_name,simple_class,cause_type,format,map__7483,map__7483__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7487_7496;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7486_7495;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7490_7499 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7491_7500 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7492_7501 = true;
var _STAR_print_fn_STAR__temp_val__7493_7502 = ((function (_STAR_print_newline_STAR__orig_val__7490_7499,_STAR_print_fn_STAR__orig_val__7491_7500,_STAR_print_newline_STAR__temp_val__7492_7501,sb__4661__auto__,G__7485,G__7485__$1,loc,class_name,simple_class,cause_type,format,map__7483,map__7483__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__7490_7499,_STAR_print_fn_STAR__orig_val__7491_7500,_STAR_print_newline_STAR__temp_val__7492_7501,sb__4661__auto__,G__7485,G__7485__$1,loc,class_name,simple_class,cause_type,format,map__7483,map__7483__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7492_7501;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7493_7502;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__7490_7499,_STAR_print_fn_STAR__orig_val__7491_7500,_STAR_print_newline_STAR__temp_val__7492_7501,_STAR_print_fn_STAR__temp_val__7493_7502,sb__4661__auto__,G__7485,G__7485__$1,loc,class_name,simple_class,cause_type,format,map__7483,map__7483__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__7490_7499,_STAR_print_fn_STAR__orig_val__7491_7500,_STAR_print_newline_STAR__temp_val__7492_7501,_STAR_print_fn_STAR__temp_val__7493_7502,sb__4661__auto__,G__7485,G__7485__$1,loc,class_name,simple_class,cause_type,format,map__7483,map__7483__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__7481_SHARP_){
return cljs.core.dissoc.call(null,p1__7481_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__7490_7499,_STAR_print_fn_STAR__orig_val__7491_7500,_STAR_print_newline_STAR__temp_val__7492_7501,_STAR_print_fn_STAR__temp_val__7493_7502,sb__4661__auto__,G__7485,G__7485__$1,loc,class_name,simple_class,cause_type,format,map__7483,map__7483__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__7490_7499,_STAR_print_fn_STAR__orig_val__7491_7500,_STAR_print_newline_STAR__temp_val__7492_7501,_STAR_print_fn_STAR__temp_val__7493_7502,sb__4661__auto__,G__7485,G__7485__$1,loc,class_name,simple_class,cause_type,format,map__7483,map__7483__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7491_7500;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7490_7499;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7485__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
