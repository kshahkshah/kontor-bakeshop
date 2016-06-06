// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25864_25878 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25865_25879 = null;
var count__25866_25880 = (0);
var i__25867_25881 = (0);
while(true){
if((i__25867_25881 < count__25866_25880)){
var f_25882 = cljs.core._nth.call(null,chunk__25865_25879,i__25867_25881);
cljs.core.println.call(null,"  ",f_25882);

var G__25883 = seq__25864_25878;
var G__25884 = chunk__25865_25879;
var G__25885 = count__25866_25880;
var G__25886 = (i__25867_25881 + (1));
seq__25864_25878 = G__25883;
chunk__25865_25879 = G__25884;
count__25866_25880 = G__25885;
i__25867_25881 = G__25886;
continue;
} else {
var temp__4425__auto___25887 = cljs.core.seq.call(null,seq__25864_25878);
if(temp__4425__auto___25887){
var seq__25864_25888__$1 = temp__4425__auto___25887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25864_25888__$1)){
var c__17574__auto___25889 = cljs.core.chunk_first.call(null,seq__25864_25888__$1);
var G__25890 = cljs.core.chunk_rest.call(null,seq__25864_25888__$1);
var G__25891 = c__17574__auto___25889;
var G__25892 = cljs.core.count.call(null,c__17574__auto___25889);
var G__25893 = (0);
seq__25864_25878 = G__25890;
chunk__25865_25879 = G__25891;
count__25866_25880 = G__25892;
i__25867_25881 = G__25893;
continue;
} else {
var f_25894 = cljs.core.first.call(null,seq__25864_25888__$1);
cljs.core.println.call(null,"  ",f_25894);

var G__25895 = cljs.core.next.call(null,seq__25864_25888__$1);
var G__25896 = null;
var G__25897 = (0);
var G__25898 = (0);
seq__25864_25878 = G__25895;
chunk__25865_25879 = G__25896;
count__25866_25880 = G__25897;
i__25867_25881 = G__25898;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25899 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16771__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25899);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25899)))?cljs.core.second.call(null,arglists_25899):arglists_25899));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25868 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25869 = null;
var count__25870 = (0);
var i__25871 = (0);
while(true){
if((i__25871 < count__25870)){
var vec__25872 = cljs.core._nth.call(null,chunk__25869,i__25871);
var name = cljs.core.nth.call(null,vec__25872,(0),null);
var map__25873 = cljs.core.nth.call(null,vec__25872,(1),null);
var map__25873__$1 = ((((!((map__25873 == null)))?((((map__25873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25873):map__25873);
var doc = cljs.core.get.call(null,map__25873__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25873__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25900 = seq__25868;
var G__25901 = chunk__25869;
var G__25902 = count__25870;
var G__25903 = (i__25871 + (1));
seq__25868 = G__25900;
chunk__25869 = G__25901;
count__25870 = G__25902;
i__25871 = G__25903;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25868);
if(temp__4425__auto__){
var seq__25868__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25868__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__25868__$1);
var G__25904 = cljs.core.chunk_rest.call(null,seq__25868__$1);
var G__25905 = c__17574__auto__;
var G__25906 = cljs.core.count.call(null,c__17574__auto__);
var G__25907 = (0);
seq__25868 = G__25904;
chunk__25869 = G__25905;
count__25870 = G__25906;
i__25871 = G__25907;
continue;
} else {
var vec__25875 = cljs.core.first.call(null,seq__25868__$1);
var name = cljs.core.nth.call(null,vec__25875,(0),null);
var map__25876 = cljs.core.nth.call(null,vec__25875,(1),null);
var map__25876__$1 = ((((!((map__25876 == null)))?((((map__25876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25876):map__25876);
var doc = cljs.core.get.call(null,map__25876__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25876__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25908 = cljs.core.next.call(null,seq__25868__$1);
var G__25909 = null;
var G__25910 = (0);
var G__25911 = (0);
seq__25868 = G__25908;
chunk__25869 = G__25909;
count__25870 = G__25910;
i__25871 = G__25911;
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
}
});

//# sourceMappingURL=repl.js.map