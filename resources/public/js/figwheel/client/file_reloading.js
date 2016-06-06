// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16771__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16771__auto__){
return or__16771__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16771__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24840_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24840_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24845 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24846 = null;
var count__24847 = (0);
var i__24848 = (0);
while(true){
if((i__24848 < count__24847)){
var n = cljs.core._nth.call(null,chunk__24846,i__24848);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24849 = seq__24845;
var G__24850 = chunk__24846;
var G__24851 = count__24847;
var G__24852 = (i__24848 + (1));
seq__24845 = G__24849;
chunk__24846 = G__24850;
count__24847 = G__24851;
i__24848 = G__24852;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24845);
if(temp__4425__auto__){
var seq__24845__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24845__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__24845__$1);
var G__24853 = cljs.core.chunk_rest.call(null,seq__24845__$1);
var G__24854 = c__17574__auto__;
var G__24855 = cljs.core.count.call(null,c__17574__auto__);
var G__24856 = (0);
seq__24845 = G__24853;
chunk__24846 = G__24854;
count__24847 = G__24855;
i__24848 = G__24856;
continue;
} else {
var n = cljs.core.first.call(null,seq__24845__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24857 = cljs.core.next.call(null,seq__24845__$1);
var G__24858 = null;
var G__24859 = (0);
var G__24860 = (0);
seq__24845 = G__24857;
chunk__24846 = G__24858;
count__24847 = G__24859;
i__24848 = G__24860;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24899_24906 = cljs.core.seq.call(null,deps);
var chunk__24900_24907 = null;
var count__24901_24908 = (0);
var i__24902_24909 = (0);
while(true){
if((i__24902_24909 < count__24901_24908)){
var dep_24910 = cljs.core._nth.call(null,chunk__24900_24907,i__24902_24909);
topo_sort_helper_STAR_.call(null,dep_24910,(depth + (1)),state);

var G__24911 = seq__24899_24906;
var G__24912 = chunk__24900_24907;
var G__24913 = count__24901_24908;
var G__24914 = (i__24902_24909 + (1));
seq__24899_24906 = G__24911;
chunk__24900_24907 = G__24912;
count__24901_24908 = G__24913;
i__24902_24909 = G__24914;
continue;
} else {
var temp__4425__auto___24915 = cljs.core.seq.call(null,seq__24899_24906);
if(temp__4425__auto___24915){
var seq__24899_24916__$1 = temp__4425__auto___24915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24899_24916__$1)){
var c__17574__auto___24917 = cljs.core.chunk_first.call(null,seq__24899_24916__$1);
var G__24918 = cljs.core.chunk_rest.call(null,seq__24899_24916__$1);
var G__24919 = c__17574__auto___24917;
var G__24920 = cljs.core.count.call(null,c__17574__auto___24917);
var G__24921 = (0);
seq__24899_24906 = G__24918;
chunk__24900_24907 = G__24919;
count__24901_24908 = G__24920;
i__24902_24909 = G__24921;
continue;
} else {
var dep_24922 = cljs.core.first.call(null,seq__24899_24916__$1);
topo_sort_helper_STAR_.call(null,dep_24922,(depth + (1)),state);

var G__24923 = cljs.core.next.call(null,seq__24899_24916__$1);
var G__24924 = null;
var G__24925 = (0);
var G__24926 = (0);
seq__24899_24906 = G__24923;
chunk__24900_24907 = G__24924;
count__24901_24908 = G__24925;
i__24902_24909 = G__24926;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24903){
var vec__24905 = p__24903;
var x = cljs.core.nth.call(null,vec__24905,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24905,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24905,x,xs,get_deps__$1){
return (function (p1__24861_SHARP_){
return clojure.set.difference.call(null,p1__24861_SHARP_,x);
});})(vec__24905,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24939 = cljs.core.seq.call(null,provides);
var chunk__24940 = null;
var count__24941 = (0);
var i__24942 = (0);
while(true){
if((i__24942 < count__24941)){
var prov = cljs.core._nth.call(null,chunk__24940,i__24942);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24943_24951 = cljs.core.seq.call(null,requires);
var chunk__24944_24952 = null;
var count__24945_24953 = (0);
var i__24946_24954 = (0);
while(true){
if((i__24946_24954 < count__24945_24953)){
var req_24955 = cljs.core._nth.call(null,chunk__24944_24952,i__24946_24954);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24955,prov);

var G__24956 = seq__24943_24951;
var G__24957 = chunk__24944_24952;
var G__24958 = count__24945_24953;
var G__24959 = (i__24946_24954 + (1));
seq__24943_24951 = G__24956;
chunk__24944_24952 = G__24957;
count__24945_24953 = G__24958;
i__24946_24954 = G__24959;
continue;
} else {
var temp__4425__auto___24960 = cljs.core.seq.call(null,seq__24943_24951);
if(temp__4425__auto___24960){
var seq__24943_24961__$1 = temp__4425__auto___24960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24943_24961__$1)){
var c__17574__auto___24962 = cljs.core.chunk_first.call(null,seq__24943_24961__$1);
var G__24963 = cljs.core.chunk_rest.call(null,seq__24943_24961__$1);
var G__24964 = c__17574__auto___24962;
var G__24965 = cljs.core.count.call(null,c__17574__auto___24962);
var G__24966 = (0);
seq__24943_24951 = G__24963;
chunk__24944_24952 = G__24964;
count__24945_24953 = G__24965;
i__24946_24954 = G__24966;
continue;
} else {
var req_24967 = cljs.core.first.call(null,seq__24943_24961__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24967,prov);

var G__24968 = cljs.core.next.call(null,seq__24943_24961__$1);
var G__24969 = null;
var G__24970 = (0);
var G__24971 = (0);
seq__24943_24951 = G__24968;
chunk__24944_24952 = G__24969;
count__24945_24953 = G__24970;
i__24946_24954 = G__24971;
continue;
}
} else {
}
}
break;
}

var G__24972 = seq__24939;
var G__24973 = chunk__24940;
var G__24974 = count__24941;
var G__24975 = (i__24942 + (1));
seq__24939 = G__24972;
chunk__24940 = G__24973;
count__24941 = G__24974;
i__24942 = G__24975;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24939);
if(temp__4425__auto__){
var seq__24939__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24939__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__24939__$1);
var G__24976 = cljs.core.chunk_rest.call(null,seq__24939__$1);
var G__24977 = c__17574__auto__;
var G__24978 = cljs.core.count.call(null,c__17574__auto__);
var G__24979 = (0);
seq__24939 = G__24976;
chunk__24940 = G__24977;
count__24941 = G__24978;
i__24942 = G__24979;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24939__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24947_24980 = cljs.core.seq.call(null,requires);
var chunk__24948_24981 = null;
var count__24949_24982 = (0);
var i__24950_24983 = (0);
while(true){
if((i__24950_24983 < count__24949_24982)){
var req_24984 = cljs.core._nth.call(null,chunk__24948_24981,i__24950_24983);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24984,prov);

var G__24985 = seq__24947_24980;
var G__24986 = chunk__24948_24981;
var G__24987 = count__24949_24982;
var G__24988 = (i__24950_24983 + (1));
seq__24947_24980 = G__24985;
chunk__24948_24981 = G__24986;
count__24949_24982 = G__24987;
i__24950_24983 = G__24988;
continue;
} else {
var temp__4425__auto___24989__$1 = cljs.core.seq.call(null,seq__24947_24980);
if(temp__4425__auto___24989__$1){
var seq__24947_24990__$1 = temp__4425__auto___24989__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24947_24990__$1)){
var c__17574__auto___24991 = cljs.core.chunk_first.call(null,seq__24947_24990__$1);
var G__24992 = cljs.core.chunk_rest.call(null,seq__24947_24990__$1);
var G__24993 = c__17574__auto___24991;
var G__24994 = cljs.core.count.call(null,c__17574__auto___24991);
var G__24995 = (0);
seq__24947_24980 = G__24992;
chunk__24948_24981 = G__24993;
count__24949_24982 = G__24994;
i__24950_24983 = G__24995;
continue;
} else {
var req_24996 = cljs.core.first.call(null,seq__24947_24990__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24996,prov);

var G__24997 = cljs.core.next.call(null,seq__24947_24990__$1);
var G__24998 = null;
var G__24999 = (0);
var G__25000 = (0);
seq__24947_24980 = G__24997;
chunk__24948_24981 = G__24998;
count__24949_24982 = G__24999;
i__24950_24983 = G__25000;
continue;
}
} else {
}
}
break;
}

var G__25001 = cljs.core.next.call(null,seq__24939__$1);
var G__25002 = null;
var G__25003 = (0);
var G__25004 = (0);
seq__24939 = G__25001;
chunk__24940 = G__25002;
count__24941 = G__25003;
i__24942 = G__25004;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25009_25013 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25010_25014 = null;
var count__25011_25015 = (0);
var i__25012_25016 = (0);
while(true){
if((i__25012_25016 < count__25011_25015)){
var ns_25017 = cljs.core._nth.call(null,chunk__25010_25014,i__25012_25016);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25017);

var G__25018 = seq__25009_25013;
var G__25019 = chunk__25010_25014;
var G__25020 = count__25011_25015;
var G__25021 = (i__25012_25016 + (1));
seq__25009_25013 = G__25018;
chunk__25010_25014 = G__25019;
count__25011_25015 = G__25020;
i__25012_25016 = G__25021;
continue;
} else {
var temp__4425__auto___25022 = cljs.core.seq.call(null,seq__25009_25013);
if(temp__4425__auto___25022){
var seq__25009_25023__$1 = temp__4425__auto___25022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25009_25023__$1)){
var c__17574__auto___25024 = cljs.core.chunk_first.call(null,seq__25009_25023__$1);
var G__25025 = cljs.core.chunk_rest.call(null,seq__25009_25023__$1);
var G__25026 = c__17574__auto___25024;
var G__25027 = cljs.core.count.call(null,c__17574__auto___25024);
var G__25028 = (0);
seq__25009_25013 = G__25025;
chunk__25010_25014 = G__25026;
count__25011_25015 = G__25027;
i__25012_25016 = G__25028;
continue;
} else {
var ns_25029 = cljs.core.first.call(null,seq__25009_25023__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25029);

var G__25030 = cljs.core.next.call(null,seq__25009_25023__$1);
var G__25031 = null;
var G__25032 = (0);
var G__25033 = (0);
seq__25009_25013 = G__25030;
chunk__25010_25014 = G__25031;
count__25011_25015 = G__25032;
i__25012_25016 = G__25033;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16771__auto__ = goog.require__;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25034__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25035__i = 0, G__25035__a = new Array(arguments.length -  0);
while (G__25035__i < G__25035__a.length) {G__25035__a[G__25035__i] = arguments[G__25035__i + 0]; ++G__25035__i;}
  args = new cljs.core.IndexedSeq(G__25035__a,0);
} 
return G__25034__delegate.call(this,args);};
G__25034.cljs$lang$maxFixedArity = 0;
G__25034.cljs$lang$applyTo = (function (arglist__25036){
var args = cljs.core.seq(arglist__25036);
return G__25034__delegate(args);
});
G__25034.cljs$core$IFn$_invoke$arity$variadic = G__25034__delegate;
return G__25034;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25038 = cljs.core._EQ_;
var expr__25039 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25038.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25039))){
var path_parts = ((function (pred__25038,expr__25039){
return (function (p1__25037_SHARP_){
return clojure.string.split.call(null,p1__25037_SHARP_,/[\/\\]/);
});})(pred__25038,expr__25039))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25038,expr__25039){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25041){if((e25041 instanceof Error)){
var e = e25041;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25041;

}
}})());
});
;})(path_parts,sep,root,pred__25038,expr__25039))
} else {
if(cljs.core.truth_(pred__25038.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25039))){
return ((function (pred__25038,expr__25039){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25038,expr__25039){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25038,expr__25039))
);

return deferred.addErrback(((function (deferred,pred__25038,expr__25039){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25038,expr__25039))
);
});
;})(pred__25038,expr__25039))
} else {
return ((function (pred__25038,expr__25039){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25038,expr__25039))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25042,callback){
var map__25045 = p__25042;
var map__25045__$1 = ((((!((map__25045 == null)))?((((map__25045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25045):map__25045);
var file_msg = map__25045__$1;
var request_url = cljs.core.get.call(null,map__25045__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25045,map__25045__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25045,map__25045__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21897__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto__){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto__){
return (function (state_25069){
var state_val_25070 = (state_25069[(1)]);
if((state_val_25070 === (7))){
var inst_25065 = (state_25069[(2)]);
var state_25069__$1 = state_25069;
var statearr_25071_25091 = state_25069__$1;
(statearr_25071_25091[(2)] = inst_25065);

(statearr_25071_25091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (1))){
var state_25069__$1 = state_25069;
var statearr_25072_25092 = state_25069__$1;
(statearr_25072_25092[(2)] = null);

(statearr_25072_25092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (4))){
var inst_25049 = (state_25069[(7)]);
var inst_25049__$1 = (state_25069[(2)]);
var state_25069__$1 = (function (){var statearr_25073 = state_25069;
(statearr_25073[(7)] = inst_25049__$1);

return statearr_25073;
})();
if(cljs.core.truth_(inst_25049__$1)){
var statearr_25074_25093 = state_25069__$1;
(statearr_25074_25093[(1)] = (5));

} else {
var statearr_25075_25094 = state_25069__$1;
(statearr_25075_25094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (6))){
var state_25069__$1 = state_25069;
var statearr_25076_25095 = state_25069__$1;
(statearr_25076_25095[(2)] = null);

(statearr_25076_25095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (3))){
var inst_25067 = (state_25069[(2)]);
var state_25069__$1 = state_25069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25069__$1,inst_25067);
} else {
if((state_val_25070 === (2))){
var state_25069__$1 = state_25069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25069__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25070 === (11))){
var inst_25061 = (state_25069[(2)]);
var state_25069__$1 = (function (){var statearr_25077 = state_25069;
(statearr_25077[(8)] = inst_25061);

return statearr_25077;
})();
var statearr_25078_25096 = state_25069__$1;
(statearr_25078_25096[(2)] = null);

(statearr_25078_25096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (9))){
var inst_25053 = (state_25069[(9)]);
var inst_25055 = (state_25069[(10)]);
var inst_25057 = inst_25055.call(null,inst_25053);
var state_25069__$1 = state_25069;
var statearr_25079_25097 = state_25069__$1;
(statearr_25079_25097[(2)] = inst_25057);

(statearr_25079_25097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (5))){
var inst_25049 = (state_25069[(7)]);
var inst_25051 = figwheel.client.file_reloading.blocking_load.call(null,inst_25049);
var state_25069__$1 = state_25069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25069__$1,(8),inst_25051);
} else {
if((state_val_25070 === (10))){
var inst_25053 = (state_25069[(9)]);
var inst_25059 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25053);
var state_25069__$1 = state_25069;
var statearr_25080_25098 = state_25069__$1;
(statearr_25080_25098[(2)] = inst_25059);

(statearr_25080_25098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25070 === (8))){
var inst_25049 = (state_25069[(7)]);
var inst_25055 = (state_25069[(10)]);
var inst_25053 = (state_25069[(2)]);
var inst_25054 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25055__$1 = cljs.core.get.call(null,inst_25054,inst_25049);
var state_25069__$1 = (function (){var statearr_25081 = state_25069;
(statearr_25081[(9)] = inst_25053);

(statearr_25081[(10)] = inst_25055__$1);

return statearr_25081;
})();
if(cljs.core.truth_(inst_25055__$1)){
var statearr_25082_25099 = state_25069__$1;
(statearr_25082_25099[(1)] = (9));

} else {
var statearr_25083_25100 = state_25069__$1;
(statearr_25083_25100[(1)] = (10));

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
});})(c__21897__auto__))
;
return ((function (switch__21785__auto__,c__21897__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21786__auto__ = null;
var figwheel$client$file_reloading$state_machine__21786__auto____0 = (function (){
var statearr_25087 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25087[(0)] = figwheel$client$file_reloading$state_machine__21786__auto__);

(statearr_25087[(1)] = (1));

return statearr_25087;
});
var figwheel$client$file_reloading$state_machine__21786__auto____1 = (function (state_25069){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_25069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e25088){if((e25088 instanceof Object)){
var ex__21789__auto__ = e25088;
var statearr_25089_25101 = state_25069;
(statearr_25089_25101[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25102 = state_25069;
state_25069 = G__25102;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21786__auto__ = function(state_25069){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21786__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21786__auto____1.call(this,state_25069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21786__auto____0;
figwheel$client$file_reloading$state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21786__auto____1;
return figwheel$client$file_reloading$state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto__))
})();
var state__21899__auto__ = (function (){var statearr_25090 = f__21898__auto__.call(null);
(statearr_25090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto__);

return statearr_25090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto__))
);

return c__21897__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25103,callback){
var map__25106 = p__25103;
var map__25106__$1 = ((((!((map__25106 == null)))?((((map__25106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25106):map__25106);
var file_msg = map__25106__$1;
var namespace = cljs.core.get.call(null,map__25106__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25106,map__25106__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25106,map__25106__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25108){
var map__25111 = p__25108;
var map__25111__$1 = ((((!((map__25111 == null)))?((((map__25111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25111):map__25111);
var file_msg = map__25111__$1;
var namespace = cljs.core.get.call(null,map__25111__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16759__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16759__auto__){
var or__16771__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
var or__16771__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto____$1)){
return or__16771__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16759__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25113,callback){
var map__25116 = p__25113;
var map__25116__$1 = ((((!((map__25116 == null)))?((((map__25116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25116):map__25116);
var file_msg = map__25116__$1;
var request_url = cljs.core.get.call(null,map__25116__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25116__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21897__auto___25204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___25204,out){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___25204,out){
return (function (state_25186){
var state_val_25187 = (state_25186[(1)]);
if((state_val_25187 === (1))){
var inst_25164 = cljs.core.nth.call(null,files,(0),null);
var inst_25165 = cljs.core.nthnext.call(null,files,(1));
var inst_25166 = files;
var state_25186__$1 = (function (){var statearr_25188 = state_25186;
(statearr_25188[(7)] = inst_25165);

(statearr_25188[(8)] = inst_25166);

(statearr_25188[(9)] = inst_25164);

return statearr_25188;
})();
var statearr_25189_25205 = state_25186__$1;
(statearr_25189_25205[(2)] = null);

(statearr_25189_25205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (2))){
var inst_25166 = (state_25186[(8)]);
var inst_25169 = (state_25186[(10)]);
var inst_25169__$1 = cljs.core.nth.call(null,inst_25166,(0),null);
var inst_25170 = cljs.core.nthnext.call(null,inst_25166,(1));
var inst_25171 = (inst_25169__$1 == null);
var inst_25172 = cljs.core.not.call(null,inst_25171);
var state_25186__$1 = (function (){var statearr_25190 = state_25186;
(statearr_25190[(11)] = inst_25170);

(statearr_25190[(10)] = inst_25169__$1);

return statearr_25190;
})();
if(inst_25172){
var statearr_25191_25206 = state_25186__$1;
(statearr_25191_25206[(1)] = (4));

} else {
var statearr_25192_25207 = state_25186__$1;
(statearr_25192_25207[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (3))){
var inst_25184 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25186__$1,inst_25184);
} else {
if((state_val_25187 === (4))){
var inst_25169 = (state_25186[(10)]);
var inst_25174 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25169);
var state_25186__$1 = state_25186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25186__$1,(7),inst_25174);
} else {
if((state_val_25187 === (5))){
var inst_25180 = cljs.core.async.close_BANG_.call(null,out);
var state_25186__$1 = state_25186;
var statearr_25193_25208 = state_25186__$1;
(statearr_25193_25208[(2)] = inst_25180);

(statearr_25193_25208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (6))){
var inst_25182 = (state_25186[(2)]);
var state_25186__$1 = state_25186;
var statearr_25194_25209 = state_25186__$1;
(statearr_25194_25209[(2)] = inst_25182);

(statearr_25194_25209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25187 === (7))){
var inst_25170 = (state_25186[(11)]);
var inst_25176 = (state_25186[(2)]);
var inst_25177 = cljs.core.async.put_BANG_.call(null,out,inst_25176);
var inst_25166 = inst_25170;
var state_25186__$1 = (function (){var statearr_25195 = state_25186;
(statearr_25195[(8)] = inst_25166);

(statearr_25195[(12)] = inst_25177);

return statearr_25195;
})();
var statearr_25196_25210 = state_25186__$1;
(statearr_25196_25210[(2)] = null);

(statearr_25196_25210[(1)] = (2));


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
});})(c__21897__auto___25204,out))
;
return ((function (switch__21785__auto__,c__21897__auto___25204,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21786__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21786__auto____0 = (function (){
var statearr_25200 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25200[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21786__auto__);

(statearr_25200[(1)] = (1));

return statearr_25200;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21786__auto____1 = (function (state_25186){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_25186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e25201){if((e25201 instanceof Object)){
var ex__21789__auto__ = e25201;
var statearr_25202_25211 = state_25186;
(statearr_25202_25211[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25212 = state_25186;
state_25186 = G__25212;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21786__auto__ = function(state_25186){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21786__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21786__auto____1.call(this,state_25186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21786__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21786__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___25204,out))
})();
var state__21899__auto__ = (function (){var statearr_25203 = f__21898__auto__.call(null);
(statearr_25203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___25204);

return statearr_25203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___25204,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25213,opts){
var map__25217 = p__25213;
var map__25217__$1 = ((((!((map__25217 == null)))?((((map__25217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25217):map__25217);
var eval_body__$1 = cljs.core.get.call(null,map__25217__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25217__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16759__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16759__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16759__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25219){var e = e25219;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25220_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25220_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25225){
var vec__25226 = p__25225;
var k = cljs.core.nth.call(null,vec__25226,(0),null);
var v = cljs.core.nth.call(null,vec__25226,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25227){
var vec__25228 = p__25227;
var k = cljs.core.nth.call(null,vec__25228,(0),null);
var v = cljs.core.nth.call(null,vec__25228,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25232,p__25233){
var map__25480 = p__25232;
var map__25480__$1 = ((((!((map__25480 == null)))?((((map__25480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25480):map__25480);
var opts = map__25480__$1;
var before_jsload = cljs.core.get.call(null,map__25480__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25480__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25480__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25481 = p__25233;
var map__25481__$1 = ((((!((map__25481 == null)))?((((map__25481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25481):map__25481);
var msg = map__25481__$1;
var files = cljs.core.get.call(null,map__25481__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25481__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25481__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21897__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25634){
var state_val_25635 = (state_25634[(1)]);
if((state_val_25635 === (7))){
var inst_25495 = (state_25634[(7)]);
var inst_25498 = (state_25634[(8)]);
var inst_25497 = (state_25634[(9)]);
var inst_25496 = (state_25634[(10)]);
var inst_25503 = cljs.core._nth.call(null,inst_25496,inst_25498);
var inst_25504 = figwheel.client.file_reloading.eval_body.call(null,inst_25503,opts);
var inst_25505 = (inst_25498 + (1));
var tmp25636 = inst_25495;
var tmp25637 = inst_25497;
var tmp25638 = inst_25496;
var inst_25495__$1 = tmp25636;
var inst_25496__$1 = tmp25638;
var inst_25497__$1 = tmp25637;
var inst_25498__$1 = inst_25505;
var state_25634__$1 = (function (){var statearr_25639 = state_25634;
(statearr_25639[(7)] = inst_25495__$1);

(statearr_25639[(8)] = inst_25498__$1);

(statearr_25639[(9)] = inst_25497__$1);

(statearr_25639[(10)] = inst_25496__$1);

(statearr_25639[(11)] = inst_25504);

return statearr_25639;
})();
var statearr_25640_25726 = state_25634__$1;
(statearr_25640_25726[(2)] = null);

(statearr_25640_25726[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (20))){
var inst_25538 = (state_25634[(12)]);
var inst_25546 = figwheel.client.file_reloading.sort_files.call(null,inst_25538);
var state_25634__$1 = state_25634;
var statearr_25641_25727 = state_25634__$1;
(statearr_25641_25727[(2)] = inst_25546);

(statearr_25641_25727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (27))){
var state_25634__$1 = state_25634;
var statearr_25642_25728 = state_25634__$1;
(statearr_25642_25728[(2)] = null);

(statearr_25642_25728[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (1))){
var inst_25487 = (state_25634[(13)]);
var inst_25484 = before_jsload.call(null,files);
var inst_25485 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25486 = (function (){return ((function (inst_25487,inst_25484,inst_25485,state_val_25635,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25229_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25229_SHARP_);
});
;})(inst_25487,inst_25484,inst_25485,state_val_25635,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25487__$1 = cljs.core.filter.call(null,inst_25486,files);
var inst_25488 = cljs.core.not_empty.call(null,inst_25487__$1);
var state_25634__$1 = (function (){var statearr_25643 = state_25634;
(statearr_25643[(14)] = inst_25485);

(statearr_25643[(15)] = inst_25484);

(statearr_25643[(13)] = inst_25487__$1);

return statearr_25643;
})();
if(cljs.core.truth_(inst_25488)){
var statearr_25644_25729 = state_25634__$1;
(statearr_25644_25729[(1)] = (2));

} else {
var statearr_25645_25730 = state_25634__$1;
(statearr_25645_25730[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (24))){
var state_25634__$1 = state_25634;
var statearr_25646_25731 = state_25634__$1;
(statearr_25646_25731[(2)] = null);

(statearr_25646_25731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (39))){
var inst_25588 = (state_25634[(16)]);
var state_25634__$1 = state_25634;
var statearr_25647_25732 = state_25634__$1;
(statearr_25647_25732[(2)] = inst_25588);

(statearr_25647_25732[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (46))){
var inst_25629 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25648_25733 = state_25634__$1;
(statearr_25648_25733[(2)] = inst_25629);

(statearr_25648_25733[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (4))){
var inst_25532 = (state_25634[(2)]);
var inst_25533 = cljs.core.List.EMPTY;
var inst_25534 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25533);
var inst_25535 = (function (){return ((function (inst_25532,inst_25533,inst_25534,state_val_25635,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25230_SHARP_){
var and__16759__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25230_SHARP_);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25230_SHARP_));
} else {
return and__16759__auto__;
}
});
;})(inst_25532,inst_25533,inst_25534,state_val_25635,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25536 = cljs.core.filter.call(null,inst_25535,files);
var inst_25537 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25538 = cljs.core.concat.call(null,inst_25536,inst_25537);
var state_25634__$1 = (function (){var statearr_25649 = state_25634;
(statearr_25649[(17)] = inst_25532);

(statearr_25649[(18)] = inst_25534);

(statearr_25649[(12)] = inst_25538);

return statearr_25649;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25650_25734 = state_25634__$1;
(statearr_25650_25734[(1)] = (16));

} else {
var statearr_25651_25735 = state_25634__$1;
(statearr_25651_25735[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (15))){
var inst_25522 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25652_25736 = state_25634__$1;
(statearr_25652_25736[(2)] = inst_25522);

(statearr_25652_25736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (21))){
var inst_25548 = (state_25634[(19)]);
var inst_25548__$1 = (state_25634[(2)]);
var inst_25549 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25548__$1);
var state_25634__$1 = (function (){var statearr_25653 = state_25634;
(statearr_25653[(19)] = inst_25548__$1);

return statearr_25653;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25634__$1,(22),inst_25549);
} else {
if((state_val_25635 === (31))){
var inst_25632 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25634__$1,inst_25632);
} else {
if((state_val_25635 === (32))){
var inst_25588 = (state_25634[(16)]);
var inst_25593 = inst_25588.cljs$lang$protocol_mask$partition0$;
var inst_25594 = (inst_25593 & (64));
var inst_25595 = inst_25588.cljs$core$ISeq$;
var inst_25596 = (inst_25594) || (inst_25595);
var state_25634__$1 = state_25634;
if(cljs.core.truth_(inst_25596)){
var statearr_25654_25737 = state_25634__$1;
(statearr_25654_25737[(1)] = (35));

} else {
var statearr_25655_25738 = state_25634__$1;
(statearr_25655_25738[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (40))){
var inst_25609 = (state_25634[(20)]);
var inst_25608 = (state_25634[(2)]);
var inst_25609__$1 = cljs.core.get.call(null,inst_25608,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25610 = cljs.core.get.call(null,inst_25608,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25611 = cljs.core.not_empty.call(null,inst_25609__$1);
var state_25634__$1 = (function (){var statearr_25656 = state_25634;
(statearr_25656[(20)] = inst_25609__$1);

(statearr_25656[(21)] = inst_25610);

return statearr_25656;
})();
if(cljs.core.truth_(inst_25611)){
var statearr_25657_25739 = state_25634__$1;
(statearr_25657_25739[(1)] = (41));

} else {
var statearr_25658_25740 = state_25634__$1;
(statearr_25658_25740[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (33))){
var state_25634__$1 = state_25634;
var statearr_25659_25741 = state_25634__$1;
(statearr_25659_25741[(2)] = false);

(statearr_25659_25741[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (13))){
var inst_25508 = (state_25634[(22)]);
var inst_25512 = cljs.core.chunk_first.call(null,inst_25508);
var inst_25513 = cljs.core.chunk_rest.call(null,inst_25508);
var inst_25514 = cljs.core.count.call(null,inst_25512);
var inst_25495 = inst_25513;
var inst_25496 = inst_25512;
var inst_25497 = inst_25514;
var inst_25498 = (0);
var state_25634__$1 = (function (){var statearr_25660 = state_25634;
(statearr_25660[(7)] = inst_25495);

(statearr_25660[(8)] = inst_25498);

(statearr_25660[(9)] = inst_25497);

(statearr_25660[(10)] = inst_25496);

return statearr_25660;
})();
var statearr_25661_25742 = state_25634__$1;
(statearr_25661_25742[(2)] = null);

(statearr_25661_25742[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (22))){
var inst_25551 = (state_25634[(23)]);
var inst_25548 = (state_25634[(19)]);
var inst_25556 = (state_25634[(24)]);
var inst_25552 = (state_25634[(25)]);
var inst_25551__$1 = (state_25634[(2)]);
var inst_25552__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25551__$1);
var inst_25553 = (function (){var all_files = inst_25548;
var res_SINGLEQUOTE_ = inst_25551__$1;
var res = inst_25552__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25551,inst_25548,inst_25556,inst_25552,inst_25551__$1,inst_25552__$1,state_val_25635,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25231_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25231_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25551,inst_25548,inst_25556,inst_25552,inst_25551__$1,inst_25552__$1,state_val_25635,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25554 = cljs.core.filter.call(null,inst_25553,inst_25551__$1);
var inst_25555 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25556__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25555);
var inst_25557 = cljs.core.not_empty.call(null,inst_25556__$1);
var state_25634__$1 = (function (){var statearr_25662 = state_25634;
(statearr_25662[(23)] = inst_25551__$1);

(statearr_25662[(26)] = inst_25554);

(statearr_25662[(24)] = inst_25556__$1);

(statearr_25662[(25)] = inst_25552__$1);

return statearr_25662;
})();
if(cljs.core.truth_(inst_25557)){
var statearr_25663_25743 = state_25634__$1;
(statearr_25663_25743[(1)] = (23));

} else {
var statearr_25664_25744 = state_25634__$1;
(statearr_25664_25744[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (36))){
var state_25634__$1 = state_25634;
var statearr_25665_25745 = state_25634__$1;
(statearr_25665_25745[(2)] = false);

(statearr_25665_25745[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (41))){
var inst_25609 = (state_25634[(20)]);
var inst_25613 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25614 = cljs.core.map.call(null,inst_25613,inst_25609);
var inst_25615 = cljs.core.pr_str.call(null,inst_25614);
var inst_25616 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25615)].join('');
var inst_25617 = figwheel.client.utils.log.call(null,inst_25616);
var state_25634__$1 = state_25634;
var statearr_25666_25746 = state_25634__$1;
(statearr_25666_25746[(2)] = inst_25617);

(statearr_25666_25746[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (43))){
var inst_25610 = (state_25634[(21)]);
var inst_25620 = (state_25634[(2)]);
var inst_25621 = cljs.core.not_empty.call(null,inst_25610);
var state_25634__$1 = (function (){var statearr_25667 = state_25634;
(statearr_25667[(27)] = inst_25620);

return statearr_25667;
})();
if(cljs.core.truth_(inst_25621)){
var statearr_25668_25747 = state_25634__$1;
(statearr_25668_25747[(1)] = (44));

} else {
var statearr_25669_25748 = state_25634__$1;
(statearr_25669_25748[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (29))){
var inst_25551 = (state_25634[(23)]);
var inst_25554 = (state_25634[(26)]);
var inst_25588 = (state_25634[(16)]);
var inst_25548 = (state_25634[(19)]);
var inst_25556 = (state_25634[(24)]);
var inst_25552 = (state_25634[(25)]);
var inst_25584 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25587 = (function (){var all_files = inst_25548;
var res_SINGLEQUOTE_ = inst_25551;
var res = inst_25552;
var files_not_loaded = inst_25554;
var dependencies_that_loaded = inst_25556;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25551,inst_25554,inst_25588,inst_25548,inst_25556,inst_25552,inst_25584,state_val_25635,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25586){
var map__25670 = p__25586;
var map__25670__$1 = ((((!((map__25670 == null)))?((((map__25670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25670):map__25670);
var namespace = cljs.core.get.call(null,map__25670__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25551,inst_25554,inst_25588,inst_25548,inst_25556,inst_25552,inst_25584,state_val_25635,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25588__$1 = cljs.core.group_by.call(null,inst_25587,inst_25554);
var inst_25590 = (inst_25588__$1 == null);
var inst_25591 = cljs.core.not.call(null,inst_25590);
var state_25634__$1 = (function (){var statearr_25672 = state_25634;
(statearr_25672[(28)] = inst_25584);

(statearr_25672[(16)] = inst_25588__$1);

return statearr_25672;
})();
if(inst_25591){
var statearr_25673_25749 = state_25634__$1;
(statearr_25673_25749[(1)] = (32));

} else {
var statearr_25674_25750 = state_25634__$1;
(statearr_25674_25750[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (44))){
var inst_25610 = (state_25634[(21)]);
var inst_25623 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25610);
var inst_25624 = cljs.core.pr_str.call(null,inst_25623);
var inst_25625 = [cljs.core.str("not required: "),cljs.core.str(inst_25624)].join('');
var inst_25626 = figwheel.client.utils.log.call(null,inst_25625);
var state_25634__$1 = state_25634;
var statearr_25675_25751 = state_25634__$1;
(statearr_25675_25751[(2)] = inst_25626);

(statearr_25675_25751[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (6))){
var inst_25529 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25676_25752 = state_25634__$1;
(statearr_25676_25752[(2)] = inst_25529);

(statearr_25676_25752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (28))){
var inst_25554 = (state_25634[(26)]);
var inst_25581 = (state_25634[(2)]);
var inst_25582 = cljs.core.not_empty.call(null,inst_25554);
var state_25634__$1 = (function (){var statearr_25677 = state_25634;
(statearr_25677[(29)] = inst_25581);

return statearr_25677;
})();
if(cljs.core.truth_(inst_25582)){
var statearr_25678_25753 = state_25634__$1;
(statearr_25678_25753[(1)] = (29));

} else {
var statearr_25679_25754 = state_25634__$1;
(statearr_25679_25754[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (25))){
var inst_25552 = (state_25634[(25)]);
var inst_25568 = (state_25634[(2)]);
var inst_25569 = cljs.core.not_empty.call(null,inst_25552);
var state_25634__$1 = (function (){var statearr_25680 = state_25634;
(statearr_25680[(30)] = inst_25568);

return statearr_25680;
})();
if(cljs.core.truth_(inst_25569)){
var statearr_25681_25755 = state_25634__$1;
(statearr_25681_25755[(1)] = (26));

} else {
var statearr_25682_25756 = state_25634__$1;
(statearr_25682_25756[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (34))){
var inst_25603 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
if(cljs.core.truth_(inst_25603)){
var statearr_25683_25757 = state_25634__$1;
(statearr_25683_25757[(1)] = (38));

} else {
var statearr_25684_25758 = state_25634__$1;
(statearr_25684_25758[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (17))){
var state_25634__$1 = state_25634;
var statearr_25685_25759 = state_25634__$1;
(statearr_25685_25759[(2)] = recompile_dependents);

(statearr_25685_25759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (3))){
var state_25634__$1 = state_25634;
var statearr_25686_25760 = state_25634__$1;
(statearr_25686_25760[(2)] = null);

(statearr_25686_25760[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (12))){
var inst_25525 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25687_25761 = state_25634__$1;
(statearr_25687_25761[(2)] = inst_25525);

(statearr_25687_25761[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (2))){
var inst_25487 = (state_25634[(13)]);
var inst_25494 = cljs.core.seq.call(null,inst_25487);
var inst_25495 = inst_25494;
var inst_25496 = null;
var inst_25497 = (0);
var inst_25498 = (0);
var state_25634__$1 = (function (){var statearr_25688 = state_25634;
(statearr_25688[(7)] = inst_25495);

(statearr_25688[(8)] = inst_25498);

(statearr_25688[(9)] = inst_25497);

(statearr_25688[(10)] = inst_25496);

return statearr_25688;
})();
var statearr_25689_25762 = state_25634__$1;
(statearr_25689_25762[(2)] = null);

(statearr_25689_25762[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (23))){
var inst_25551 = (state_25634[(23)]);
var inst_25554 = (state_25634[(26)]);
var inst_25548 = (state_25634[(19)]);
var inst_25556 = (state_25634[(24)]);
var inst_25552 = (state_25634[(25)]);
var inst_25559 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25561 = (function (){var all_files = inst_25548;
var res_SINGLEQUOTE_ = inst_25551;
var res = inst_25552;
var files_not_loaded = inst_25554;
var dependencies_that_loaded = inst_25556;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25551,inst_25554,inst_25548,inst_25556,inst_25552,inst_25559,state_val_25635,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25560){
var map__25690 = p__25560;
var map__25690__$1 = ((((!((map__25690 == null)))?((((map__25690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25690):map__25690);
var request_url = cljs.core.get.call(null,map__25690__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25551,inst_25554,inst_25548,inst_25556,inst_25552,inst_25559,state_val_25635,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25562 = cljs.core.reverse.call(null,inst_25556);
var inst_25563 = cljs.core.map.call(null,inst_25561,inst_25562);
var inst_25564 = cljs.core.pr_str.call(null,inst_25563);
var inst_25565 = figwheel.client.utils.log.call(null,inst_25564);
var state_25634__$1 = (function (){var statearr_25692 = state_25634;
(statearr_25692[(31)] = inst_25559);

return statearr_25692;
})();
var statearr_25693_25763 = state_25634__$1;
(statearr_25693_25763[(2)] = inst_25565);

(statearr_25693_25763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (35))){
var state_25634__$1 = state_25634;
var statearr_25694_25764 = state_25634__$1;
(statearr_25694_25764[(2)] = true);

(statearr_25694_25764[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (19))){
var inst_25538 = (state_25634[(12)]);
var inst_25544 = figwheel.client.file_reloading.expand_files.call(null,inst_25538);
var state_25634__$1 = state_25634;
var statearr_25695_25765 = state_25634__$1;
(statearr_25695_25765[(2)] = inst_25544);

(statearr_25695_25765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (11))){
var state_25634__$1 = state_25634;
var statearr_25696_25766 = state_25634__$1;
(statearr_25696_25766[(2)] = null);

(statearr_25696_25766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (9))){
var inst_25527 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25697_25767 = state_25634__$1;
(statearr_25697_25767[(2)] = inst_25527);

(statearr_25697_25767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (5))){
var inst_25498 = (state_25634[(8)]);
var inst_25497 = (state_25634[(9)]);
var inst_25500 = (inst_25498 < inst_25497);
var inst_25501 = inst_25500;
var state_25634__$1 = state_25634;
if(cljs.core.truth_(inst_25501)){
var statearr_25698_25768 = state_25634__$1;
(statearr_25698_25768[(1)] = (7));

} else {
var statearr_25699_25769 = state_25634__$1;
(statearr_25699_25769[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (14))){
var inst_25508 = (state_25634[(22)]);
var inst_25517 = cljs.core.first.call(null,inst_25508);
var inst_25518 = figwheel.client.file_reloading.eval_body.call(null,inst_25517,opts);
var inst_25519 = cljs.core.next.call(null,inst_25508);
var inst_25495 = inst_25519;
var inst_25496 = null;
var inst_25497 = (0);
var inst_25498 = (0);
var state_25634__$1 = (function (){var statearr_25700 = state_25634;
(statearr_25700[(7)] = inst_25495);

(statearr_25700[(32)] = inst_25518);

(statearr_25700[(8)] = inst_25498);

(statearr_25700[(9)] = inst_25497);

(statearr_25700[(10)] = inst_25496);

return statearr_25700;
})();
var statearr_25701_25770 = state_25634__$1;
(statearr_25701_25770[(2)] = null);

(statearr_25701_25770[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (45))){
var state_25634__$1 = state_25634;
var statearr_25702_25771 = state_25634__$1;
(statearr_25702_25771[(2)] = null);

(statearr_25702_25771[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (26))){
var inst_25551 = (state_25634[(23)]);
var inst_25554 = (state_25634[(26)]);
var inst_25548 = (state_25634[(19)]);
var inst_25556 = (state_25634[(24)]);
var inst_25552 = (state_25634[(25)]);
var inst_25571 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25573 = (function (){var all_files = inst_25548;
var res_SINGLEQUOTE_ = inst_25551;
var res = inst_25552;
var files_not_loaded = inst_25554;
var dependencies_that_loaded = inst_25556;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25551,inst_25554,inst_25548,inst_25556,inst_25552,inst_25571,state_val_25635,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25572){
var map__25703 = p__25572;
var map__25703__$1 = ((((!((map__25703 == null)))?((((map__25703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25703):map__25703);
var namespace = cljs.core.get.call(null,map__25703__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25703__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25551,inst_25554,inst_25548,inst_25556,inst_25552,inst_25571,state_val_25635,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25574 = cljs.core.map.call(null,inst_25573,inst_25552);
var inst_25575 = cljs.core.pr_str.call(null,inst_25574);
var inst_25576 = figwheel.client.utils.log.call(null,inst_25575);
var inst_25577 = (function (){var all_files = inst_25548;
var res_SINGLEQUOTE_ = inst_25551;
var res = inst_25552;
var files_not_loaded = inst_25554;
var dependencies_that_loaded = inst_25556;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25551,inst_25554,inst_25548,inst_25556,inst_25552,inst_25571,inst_25573,inst_25574,inst_25575,inst_25576,state_val_25635,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25551,inst_25554,inst_25548,inst_25556,inst_25552,inst_25571,inst_25573,inst_25574,inst_25575,inst_25576,state_val_25635,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25578 = setTimeout(inst_25577,(10));
var state_25634__$1 = (function (){var statearr_25705 = state_25634;
(statearr_25705[(33)] = inst_25571);

(statearr_25705[(34)] = inst_25576);

return statearr_25705;
})();
var statearr_25706_25772 = state_25634__$1;
(statearr_25706_25772[(2)] = inst_25578);

(statearr_25706_25772[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (16))){
var state_25634__$1 = state_25634;
var statearr_25707_25773 = state_25634__$1;
(statearr_25707_25773[(2)] = reload_dependents);

(statearr_25707_25773[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (38))){
var inst_25588 = (state_25634[(16)]);
var inst_25605 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25588);
var state_25634__$1 = state_25634;
var statearr_25708_25774 = state_25634__$1;
(statearr_25708_25774[(2)] = inst_25605);

(statearr_25708_25774[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (30))){
var state_25634__$1 = state_25634;
var statearr_25709_25775 = state_25634__$1;
(statearr_25709_25775[(2)] = null);

(statearr_25709_25775[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (10))){
var inst_25508 = (state_25634[(22)]);
var inst_25510 = cljs.core.chunked_seq_QMARK_.call(null,inst_25508);
var state_25634__$1 = state_25634;
if(inst_25510){
var statearr_25710_25776 = state_25634__$1;
(statearr_25710_25776[(1)] = (13));

} else {
var statearr_25711_25777 = state_25634__$1;
(statearr_25711_25777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (18))){
var inst_25542 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
if(cljs.core.truth_(inst_25542)){
var statearr_25712_25778 = state_25634__$1;
(statearr_25712_25778[(1)] = (19));

} else {
var statearr_25713_25779 = state_25634__$1;
(statearr_25713_25779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (42))){
var state_25634__$1 = state_25634;
var statearr_25714_25780 = state_25634__$1;
(statearr_25714_25780[(2)] = null);

(statearr_25714_25780[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (37))){
var inst_25600 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25715_25781 = state_25634__$1;
(statearr_25715_25781[(2)] = inst_25600);

(statearr_25715_25781[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (8))){
var inst_25495 = (state_25634[(7)]);
var inst_25508 = (state_25634[(22)]);
var inst_25508__$1 = cljs.core.seq.call(null,inst_25495);
var state_25634__$1 = (function (){var statearr_25716 = state_25634;
(statearr_25716[(22)] = inst_25508__$1);

return statearr_25716;
})();
if(inst_25508__$1){
var statearr_25717_25782 = state_25634__$1;
(statearr_25717_25782[(1)] = (10));

} else {
var statearr_25718_25783 = state_25634__$1;
(statearr_25718_25783[(1)] = (11));

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
}
});})(c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21785__auto__,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21786__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21786__auto____0 = (function (){
var statearr_25722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25722[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21786__auto__);

(statearr_25722[(1)] = (1));

return statearr_25722;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21786__auto____1 = (function (state_25634){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_25634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e25723){if((e25723 instanceof Object)){
var ex__21789__auto__ = e25723;
var statearr_25724_25784 = state_25634;
(statearr_25724_25784[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25785 = state_25634;
state_25634 = G__25785;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21786__auto__ = function(state_25634){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21786__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21786__auto____1.call(this,state_25634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21786__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21786__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21899__auto__ = (function (){var statearr_25725 = f__21898__auto__.call(null);
(statearr_25725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto__);

return statearr_25725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto__,map__25480,map__25480__$1,opts,before_jsload,on_jsload,reload_dependents,map__25481,map__25481__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21897__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25788,link){
var map__25791 = p__25788;
var map__25791__$1 = ((((!((map__25791 == null)))?((((map__25791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25791):map__25791);
var file = cljs.core.get.call(null,map__25791__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25791,map__25791__$1,file){
return (function (p1__25786_SHARP_,p2__25787_SHARP_){
if(cljs.core._EQ_.call(null,p1__25786_SHARP_,p2__25787_SHARP_)){
return p1__25786_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25791,map__25791__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25797){
var map__25798 = p__25797;
var map__25798__$1 = ((((!((map__25798 == null)))?((((map__25798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25798):map__25798);
var match_length = cljs.core.get.call(null,map__25798__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25798__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25793_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25793_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25800 = [];
var len__17829__auto___25803 = arguments.length;
var i__17830__auto___25804 = (0);
while(true){
if((i__17830__auto___25804 < len__17829__auto___25803)){
args25800.push((arguments[i__17830__auto___25804]));

var G__25805 = (i__17830__auto___25804 + (1));
i__17830__auto___25804 = G__25805;
continue;
} else {
}
break;
}

var G__25802 = args25800.length;
switch (G__25802) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25800.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25807_SHARP_,p2__25808_SHARP_){
return cljs.core.assoc.call(null,p1__25807_SHARP_,cljs.core.get.call(null,p2__25808_SHARP_,key),p2__25808_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25809){
var map__25812 = p__25809;
var map__25812__$1 = ((((!((map__25812 == null)))?((((map__25812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25812):map__25812);
var f_data = map__25812__$1;
var file = cljs.core.get.call(null,map__25812__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25814,files_msg){
var map__25821 = p__25814;
var map__25821__$1 = ((((!((map__25821 == null)))?((((map__25821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25821):map__25821);
var opts = map__25821__$1;
var on_cssload = cljs.core.get.call(null,map__25821__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25823_25827 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25824_25828 = null;
var count__25825_25829 = (0);
var i__25826_25830 = (0);
while(true){
if((i__25826_25830 < count__25825_25829)){
var f_25831 = cljs.core._nth.call(null,chunk__25824_25828,i__25826_25830);
figwheel.client.file_reloading.reload_css_file.call(null,f_25831);

var G__25832 = seq__25823_25827;
var G__25833 = chunk__25824_25828;
var G__25834 = count__25825_25829;
var G__25835 = (i__25826_25830 + (1));
seq__25823_25827 = G__25832;
chunk__25824_25828 = G__25833;
count__25825_25829 = G__25834;
i__25826_25830 = G__25835;
continue;
} else {
var temp__4425__auto___25836 = cljs.core.seq.call(null,seq__25823_25827);
if(temp__4425__auto___25836){
var seq__25823_25837__$1 = temp__4425__auto___25836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25823_25837__$1)){
var c__17574__auto___25838 = cljs.core.chunk_first.call(null,seq__25823_25837__$1);
var G__25839 = cljs.core.chunk_rest.call(null,seq__25823_25837__$1);
var G__25840 = c__17574__auto___25838;
var G__25841 = cljs.core.count.call(null,c__17574__auto___25838);
var G__25842 = (0);
seq__25823_25827 = G__25839;
chunk__25824_25828 = G__25840;
count__25825_25829 = G__25841;
i__25826_25830 = G__25842;
continue;
} else {
var f_25843 = cljs.core.first.call(null,seq__25823_25837__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25843);

var G__25844 = cljs.core.next.call(null,seq__25823_25837__$1);
var G__25845 = null;
var G__25846 = (0);
var G__25847 = (0);
seq__25823_25827 = G__25844;
chunk__25824_25828 = G__25845;
count__25825_25829 = G__25846;
i__25826_25830 = G__25847;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25821,map__25821__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25821,map__25821__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map