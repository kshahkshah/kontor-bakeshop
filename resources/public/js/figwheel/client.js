// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26283 = cljs.core._EQ_;
var expr__26284 = (function (){var or__16771__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26283.call(null,"true",expr__26284))){
return true;
} else {
if(cljs.core.truth_(pred__26283.call(null,"false",expr__26284))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26284)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26286__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26287__i = 0, G__26287__a = new Array(arguments.length -  0);
while (G__26287__i < G__26287__a.length) {G__26287__a[G__26287__i] = arguments[G__26287__i + 0]; ++G__26287__i;}
  args = new cljs.core.IndexedSeq(G__26287__a,0);
} 
return G__26286__delegate.call(this,args);};
G__26286.cljs$lang$maxFixedArity = 0;
G__26286.cljs$lang$applyTo = (function (arglist__26288){
var args = cljs.core.seq(arglist__26288);
return G__26286__delegate(args);
});
G__26286.cljs$core$IFn$_invoke$arity$variadic = G__26286__delegate;
return G__26286;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26289){
var map__26292 = p__26289;
var map__26292__$1 = ((((!((map__26292 == null)))?((((map__26292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26292):map__26292);
var message = cljs.core.get.call(null,map__26292__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26292__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16771__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16759__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16759__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16759__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21897__auto___26454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___26454,ch){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___26454,ch){
return (function (state_26423){
var state_val_26424 = (state_26423[(1)]);
if((state_val_26424 === (7))){
var inst_26419 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
var statearr_26425_26455 = state_26423__$1;
(statearr_26425_26455[(2)] = inst_26419);

(statearr_26425_26455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (1))){
var state_26423__$1 = state_26423;
var statearr_26426_26456 = state_26423__$1;
(statearr_26426_26456[(2)] = null);

(statearr_26426_26456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (4))){
var inst_26376 = (state_26423[(7)]);
var inst_26376__$1 = (state_26423[(2)]);
var state_26423__$1 = (function (){var statearr_26427 = state_26423;
(statearr_26427[(7)] = inst_26376__$1);

return statearr_26427;
})();
if(cljs.core.truth_(inst_26376__$1)){
var statearr_26428_26457 = state_26423__$1;
(statearr_26428_26457[(1)] = (5));

} else {
var statearr_26429_26458 = state_26423__$1;
(statearr_26429_26458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (15))){
var inst_26383 = (state_26423[(8)]);
var inst_26398 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26383);
var inst_26399 = cljs.core.first.call(null,inst_26398);
var inst_26400 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26399);
var inst_26401 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26400)].join('');
var inst_26402 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26401);
var state_26423__$1 = state_26423;
var statearr_26430_26459 = state_26423__$1;
(statearr_26430_26459[(2)] = inst_26402);

(statearr_26430_26459[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (13))){
var inst_26407 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
var statearr_26431_26460 = state_26423__$1;
(statearr_26431_26460[(2)] = inst_26407);

(statearr_26431_26460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (6))){
var state_26423__$1 = state_26423;
var statearr_26432_26461 = state_26423__$1;
(statearr_26432_26461[(2)] = null);

(statearr_26432_26461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (17))){
var inst_26405 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
var statearr_26433_26462 = state_26423__$1;
(statearr_26433_26462[(2)] = inst_26405);

(statearr_26433_26462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (3))){
var inst_26421 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26423__$1,inst_26421);
} else {
if((state_val_26424 === (12))){
var inst_26382 = (state_26423[(9)]);
var inst_26396 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26382,opts);
var state_26423__$1 = state_26423;
if(cljs.core.truth_(inst_26396)){
var statearr_26434_26463 = state_26423__$1;
(statearr_26434_26463[(1)] = (15));

} else {
var statearr_26435_26464 = state_26423__$1;
(statearr_26435_26464[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (2))){
var state_26423__$1 = state_26423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26423__$1,(4),ch);
} else {
if((state_val_26424 === (11))){
var inst_26383 = (state_26423[(8)]);
var inst_26388 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26389 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26383);
var inst_26390 = cljs.core.async.timeout.call(null,(1000));
var inst_26391 = [inst_26389,inst_26390];
var inst_26392 = (new cljs.core.PersistentVector(null,2,(5),inst_26388,inst_26391,null));
var state_26423__$1 = state_26423;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26423__$1,(14),inst_26392);
} else {
if((state_val_26424 === (9))){
var inst_26383 = (state_26423[(8)]);
var inst_26409 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26410 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26383);
var inst_26411 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26410);
var inst_26412 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26411)].join('');
var inst_26413 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26412);
var state_26423__$1 = (function (){var statearr_26436 = state_26423;
(statearr_26436[(10)] = inst_26409);

return statearr_26436;
})();
var statearr_26437_26465 = state_26423__$1;
(statearr_26437_26465[(2)] = inst_26413);

(statearr_26437_26465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (5))){
var inst_26376 = (state_26423[(7)]);
var inst_26378 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26379 = (new cljs.core.PersistentArrayMap(null,2,inst_26378,null));
var inst_26380 = (new cljs.core.PersistentHashSet(null,inst_26379,null));
var inst_26381 = figwheel.client.focus_msgs.call(null,inst_26380,inst_26376);
var inst_26382 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26381);
var inst_26383 = cljs.core.first.call(null,inst_26381);
var inst_26384 = figwheel.client.autoload_QMARK_.call(null);
var state_26423__$1 = (function (){var statearr_26438 = state_26423;
(statearr_26438[(9)] = inst_26382);

(statearr_26438[(8)] = inst_26383);

return statearr_26438;
})();
if(cljs.core.truth_(inst_26384)){
var statearr_26439_26466 = state_26423__$1;
(statearr_26439_26466[(1)] = (8));

} else {
var statearr_26440_26467 = state_26423__$1;
(statearr_26440_26467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (14))){
var inst_26394 = (state_26423[(2)]);
var state_26423__$1 = state_26423;
var statearr_26441_26468 = state_26423__$1;
(statearr_26441_26468[(2)] = inst_26394);

(statearr_26441_26468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (16))){
var state_26423__$1 = state_26423;
var statearr_26442_26469 = state_26423__$1;
(statearr_26442_26469[(2)] = null);

(statearr_26442_26469[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (10))){
var inst_26415 = (state_26423[(2)]);
var state_26423__$1 = (function (){var statearr_26443 = state_26423;
(statearr_26443[(11)] = inst_26415);

return statearr_26443;
})();
var statearr_26444_26470 = state_26423__$1;
(statearr_26444_26470[(2)] = null);

(statearr_26444_26470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26424 === (8))){
var inst_26382 = (state_26423[(9)]);
var inst_26386 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26382,opts);
var state_26423__$1 = state_26423;
if(cljs.core.truth_(inst_26386)){
var statearr_26445_26471 = state_26423__$1;
(statearr_26445_26471[(1)] = (11));

} else {
var statearr_26446_26472 = state_26423__$1;
(statearr_26446_26472[(1)] = (12));

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
});})(c__21897__auto___26454,ch))
;
return ((function (switch__21785__auto__,c__21897__auto___26454,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21786__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21786__auto____0 = (function (){
var statearr_26450 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26450[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21786__auto__);

(statearr_26450[(1)] = (1));

return statearr_26450;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21786__auto____1 = (function (state_26423){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_26423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e26451){if((e26451 instanceof Object)){
var ex__21789__auto__ = e26451;
var statearr_26452_26473 = state_26423;
(statearr_26452_26473[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26474 = state_26423;
state_26423 = G__26474;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21786__auto__ = function(state_26423){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21786__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21786__auto____1.call(this,state_26423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21786__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21786__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___26454,ch))
})();
var state__21899__auto__ = (function (){var statearr_26453 = f__21898__auto__.call(null);
(statearr_26453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___26454);

return statearr_26453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___26454,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26475_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26475_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26482 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26482){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26480 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26481 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26480,_STAR_print_newline_STAR_26481,base_path_26482){
return (function() { 
var G__26483__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26484__i = 0, G__26484__a = new Array(arguments.length -  0);
while (G__26484__i < G__26484__a.length) {G__26484__a[G__26484__i] = arguments[G__26484__i + 0]; ++G__26484__i;}
  args = new cljs.core.IndexedSeq(G__26484__a,0);
} 
return G__26483__delegate.call(this,args);};
G__26483.cljs$lang$maxFixedArity = 0;
G__26483.cljs$lang$applyTo = (function (arglist__26485){
var args = cljs.core.seq(arglist__26485);
return G__26483__delegate(args);
});
G__26483.cljs$core$IFn$_invoke$arity$variadic = G__26483__delegate;
return G__26483;
})()
;})(_STAR_print_fn_STAR_26480,_STAR_print_newline_STAR_26481,base_path_26482))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26481;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26480;
}}catch (e26479){if((e26479 instanceof Error)){
var e = e26479;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26482], null));
} else {
var e = e26479;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26482))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26486){
var map__26493 = p__26486;
var map__26493__$1 = ((((!((map__26493 == null)))?((((map__26493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26493):map__26493);
var opts = map__26493__$1;
var build_id = cljs.core.get.call(null,map__26493__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26493,map__26493__$1,opts,build_id){
return (function (p__26495){
var vec__26496 = p__26495;
var map__26497 = cljs.core.nth.call(null,vec__26496,(0),null);
var map__26497__$1 = ((((!((map__26497 == null)))?((((map__26497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26497):map__26497);
var msg = map__26497__$1;
var msg_name = cljs.core.get.call(null,map__26497__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26496,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26496,map__26497,map__26497__$1,msg,msg_name,_,map__26493,map__26493__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26496,map__26497,map__26497__$1,msg,msg_name,_,map__26493,map__26493__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26493,map__26493__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26503){
var vec__26504 = p__26503;
var map__26505 = cljs.core.nth.call(null,vec__26504,(0),null);
var map__26505__$1 = ((((!((map__26505 == null)))?((((map__26505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26505):map__26505);
var msg = map__26505__$1;
var msg_name = cljs.core.get.call(null,map__26505__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26504,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26507){
var map__26517 = p__26507;
var map__26517__$1 = ((((!((map__26517 == null)))?((((map__26517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26517):map__26517);
var on_compile_warning = cljs.core.get.call(null,map__26517__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26517__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26517,map__26517__$1,on_compile_warning,on_compile_fail){
return (function (p__26519){
var vec__26520 = p__26519;
var map__26521 = cljs.core.nth.call(null,vec__26520,(0),null);
var map__26521__$1 = ((((!((map__26521 == null)))?((((map__26521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26521):map__26521);
var msg = map__26521__$1;
var msg_name = cljs.core.get.call(null,map__26521__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26520,(1));
var pred__26523 = cljs.core._EQ_;
var expr__26524 = msg_name;
if(cljs.core.truth_(pred__26523.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26524))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26523.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26524))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26517,map__26517__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21897__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto__,msg_hist,msg_names,msg){
return (function (state_26740){
var state_val_26741 = (state_26740[(1)]);
if((state_val_26741 === (7))){
var inst_26664 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
if(cljs.core.truth_(inst_26664)){
var statearr_26742_26788 = state_26740__$1;
(statearr_26742_26788[(1)] = (8));

} else {
var statearr_26743_26789 = state_26740__$1;
(statearr_26743_26789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (20))){
var inst_26734 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26744_26790 = state_26740__$1;
(statearr_26744_26790[(2)] = inst_26734);

(statearr_26744_26790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (27))){
var inst_26730 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26745_26791 = state_26740__$1;
(statearr_26745_26791[(2)] = inst_26730);

(statearr_26745_26791[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (1))){
var inst_26657 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26740__$1 = state_26740;
if(cljs.core.truth_(inst_26657)){
var statearr_26746_26792 = state_26740__$1;
(statearr_26746_26792[(1)] = (2));

} else {
var statearr_26747_26793 = state_26740__$1;
(statearr_26747_26793[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (24))){
var inst_26732 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26748_26794 = state_26740__$1;
(statearr_26748_26794[(2)] = inst_26732);

(statearr_26748_26794[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (4))){
var inst_26738 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26740__$1,inst_26738);
} else {
if((state_val_26741 === (15))){
var inst_26736 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26749_26795 = state_26740__$1;
(statearr_26749_26795[(2)] = inst_26736);

(statearr_26749_26795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (21))){
var inst_26695 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26750_26796 = state_26740__$1;
(statearr_26750_26796[(2)] = inst_26695);

(statearr_26750_26796[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (31))){
var inst_26719 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26740__$1 = state_26740;
if(cljs.core.truth_(inst_26719)){
var statearr_26751_26797 = state_26740__$1;
(statearr_26751_26797[(1)] = (34));

} else {
var statearr_26752_26798 = state_26740__$1;
(statearr_26752_26798[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (32))){
var inst_26728 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26753_26799 = state_26740__$1;
(statearr_26753_26799[(2)] = inst_26728);

(statearr_26753_26799[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (33))){
var inst_26717 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26754_26800 = state_26740__$1;
(statearr_26754_26800[(2)] = inst_26717);

(statearr_26754_26800[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (13))){
var inst_26678 = figwheel.client.heads_up.clear.call(null);
var state_26740__$1 = state_26740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26740__$1,(16),inst_26678);
} else {
if((state_val_26741 === (22))){
var inst_26699 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26700 = figwheel.client.heads_up.append_message.call(null,inst_26699);
var state_26740__$1 = state_26740;
var statearr_26755_26801 = state_26740__$1;
(statearr_26755_26801[(2)] = inst_26700);

(statearr_26755_26801[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (36))){
var inst_26726 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26756_26802 = state_26740__$1;
(statearr_26756_26802[(2)] = inst_26726);

(statearr_26756_26802[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (29))){
var inst_26710 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26757_26803 = state_26740__$1;
(statearr_26757_26803[(2)] = inst_26710);

(statearr_26757_26803[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (6))){
var inst_26659 = (state_26740[(7)]);
var state_26740__$1 = state_26740;
var statearr_26758_26804 = state_26740__$1;
(statearr_26758_26804[(2)] = inst_26659);

(statearr_26758_26804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (28))){
var inst_26706 = (state_26740[(2)]);
var inst_26707 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26708 = figwheel.client.heads_up.display_warning.call(null,inst_26707);
var state_26740__$1 = (function (){var statearr_26759 = state_26740;
(statearr_26759[(8)] = inst_26706);

return statearr_26759;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26740__$1,(29),inst_26708);
} else {
if((state_val_26741 === (25))){
var inst_26704 = figwheel.client.heads_up.clear.call(null);
var state_26740__$1 = state_26740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26740__$1,(28),inst_26704);
} else {
if((state_val_26741 === (34))){
var inst_26721 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26740__$1 = state_26740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26740__$1,(37),inst_26721);
} else {
if((state_val_26741 === (17))){
var inst_26686 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26760_26805 = state_26740__$1;
(statearr_26760_26805[(2)] = inst_26686);

(statearr_26760_26805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (3))){
var inst_26676 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26740__$1 = state_26740;
if(cljs.core.truth_(inst_26676)){
var statearr_26761_26806 = state_26740__$1;
(statearr_26761_26806[(1)] = (13));

} else {
var statearr_26762_26807 = state_26740__$1;
(statearr_26762_26807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (12))){
var inst_26672 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26763_26808 = state_26740__$1;
(statearr_26763_26808[(2)] = inst_26672);

(statearr_26763_26808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (2))){
var inst_26659 = (state_26740[(7)]);
var inst_26659__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26740__$1 = (function (){var statearr_26764 = state_26740;
(statearr_26764[(7)] = inst_26659__$1);

return statearr_26764;
})();
if(cljs.core.truth_(inst_26659__$1)){
var statearr_26765_26809 = state_26740__$1;
(statearr_26765_26809[(1)] = (5));

} else {
var statearr_26766_26810 = state_26740__$1;
(statearr_26766_26810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (23))){
var inst_26702 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26740__$1 = state_26740;
if(cljs.core.truth_(inst_26702)){
var statearr_26767_26811 = state_26740__$1;
(statearr_26767_26811[(1)] = (25));

} else {
var statearr_26768_26812 = state_26740__$1;
(statearr_26768_26812[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (35))){
var state_26740__$1 = state_26740;
var statearr_26769_26813 = state_26740__$1;
(statearr_26769_26813[(2)] = null);

(statearr_26769_26813[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (19))){
var inst_26697 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26740__$1 = state_26740;
if(cljs.core.truth_(inst_26697)){
var statearr_26770_26814 = state_26740__$1;
(statearr_26770_26814[(1)] = (22));

} else {
var statearr_26771_26815 = state_26740__$1;
(statearr_26771_26815[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (11))){
var inst_26668 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26772_26816 = state_26740__$1;
(statearr_26772_26816[(2)] = inst_26668);

(statearr_26772_26816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (9))){
var inst_26670 = figwheel.client.heads_up.clear.call(null);
var state_26740__$1 = state_26740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26740__$1,(12),inst_26670);
} else {
if((state_val_26741 === (5))){
var inst_26661 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26740__$1 = state_26740;
var statearr_26773_26817 = state_26740__$1;
(statearr_26773_26817[(2)] = inst_26661);

(statearr_26773_26817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (14))){
var inst_26688 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26740__$1 = state_26740;
if(cljs.core.truth_(inst_26688)){
var statearr_26774_26818 = state_26740__$1;
(statearr_26774_26818[(1)] = (18));

} else {
var statearr_26775_26819 = state_26740__$1;
(statearr_26775_26819[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (26))){
var inst_26712 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26740__$1 = state_26740;
if(cljs.core.truth_(inst_26712)){
var statearr_26776_26820 = state_26740__$1;
(statearr_26776_26820[(1)] = (30));

} else {
var statearr_26777_26821 = state_26740__$1;
(statearr_26777_26821[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (16))){
var inst_26680 = (state_26740[(2)]);
var inst_26681 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26682 = figwheel.client.format_messages.call(null,inst_26681);
var inst_26683 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26684 = figwheel.client.heads_up.display_error.call(null,inst_26682,inst_26683);
var state_26740__$1 = (function (){var statearr_26778 = state_26740;
(statearr_26778[(9)] = inst_26680);

return statearr_26778;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26740__$1,(17),inst_26684);
} else {
if((state_val_26741 === (30))){
var inst_26714 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26715 = figwheel.client.heads_up.display_warning.call(null,inst_26714);
var state_26740__$1 = state_26740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26740__$1,(33),inst_26715);
} else {
if((state_val_26741 === (10))){
var inst_26674 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26779_26822 = state_26740__$1;
(statearr_26779_26822[(2)] = inst_26674);

(statearr_26779_26822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (18))){
var inst_26690 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26691 = figwheel.client.format_messages.call(null,inst_26690);
var inst_26692 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26693 = figwheel.client.heads_up.display_error.call(null,inst_26691,inst_26692);
var state_26740__$1 = state_26740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26740__$1,(21),inst_26693);
} else {
if((state_val_26741 === (37))){
var inst_26723 = (state_26740[(2)]);
var state_26740__$1 = state_26740;
var statearr_26780_26823 = state_26740__$1;
(statearr_26780_26823[(2)] = inst_26723);

(statearr_26780_26823[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26741 === (8))){
var inst_26666 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26740__$1 = state_26740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26740__$1,(11),inst_26666);
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
});})(c__21897__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21785__auto__,c__21897__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21786__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21786__auto____0 = (function (){
var statearr_26784 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26784[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21786__auto__);

(statearr_26784[(1)] = (1));

return statearr_26784;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21786__auto____1 = (function (state_26740){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_26740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e26785){if((e26785 instanceof Object)){
var ex__21789__auto__ = e26785;
var statearr_26786_26824 = state_26740;
(statearr_26786_26824[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26825 = state_26740;
state_26740 = G__26825;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21786__auto__ = function(state_26740){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21786__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21786__auto____1.call(this,state_26740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21786__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21786__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto__,msg_hist,msg_names,msg))
})();
var state__21899__auto__ = (function (){var statearr_26787 = f__21898__auto__.call(null);
(statearr_26787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto__);

return statearr_26787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto__,msg_hist,msg_names,msg))
);

return c__21897__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21897__auto___26888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto___26888,ch){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto___26888,ch){
return (function (state_26871){
var state_val_26872 = (state_26871[(1)]);
if((state_val_26872 === (1))){
var state_26871__$1 = state_26871;
var statearr_26873_26889 = state_26871__$1;
(statearr_26873_26889[(2)] = null);

(statearr_26873_26889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26872 === (2))){
var state_26871__$1 = state_26871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26871__$1,(4),ch);
} else {
if((state_val_26872 === (3))){
var inst_26869 = (state_26871[(2)]);
var state_26871__$1 = state_26871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26871__$1,inst_26869);
} else {
if((state_val_26872 === (4))){
var inst_26859 = (state_26871[(7)]);
var inst_26859__$1 = (state_26871[(2)]);
var state_26871__$1 = (function (){var statearr_26874 = state_26871;
(statearr_26874[(7)] = inst_26859__$1);

return statearr_26874;
})();
if(cljs.core.truth_(inst_26859__$1)){
var statearr_26875_26890 = state_26871__$1;
(statearr_26875_26890[(1)] = (5));

} else {
var statearr_26876_26891 = state_26871__$1;
(statearr_26876_26891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26872 === (5))){
var inst_26859 = (state_26871[(7)]);
var inst_26861 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26859);
var state_26871__$1 = state_26871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26871__$1,(8),inst_26861);
} else {
if((state_val_26872 === (6))){
var state_26871__$1 = state_26871;
var statearr_26877_26892 = state_26871__$1;
(statearr_26877_26892[(2)] = null);

(statearr_26877_26892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26872 === (7))){
var inst_26867 = (state_26871[(2)]);
var state_26871__$1 = state_26871;
var statearr_26878_26893 = state_26871__$1;
(statearr_26878_26893[(2)] = inst_26867);

(statearr_26878_26893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26872 === (8))){
var inst_26863 = (state_26871[(2)]);
var state_26871__$1 = (function (){var statearr_26879 = state_26871;
(statearr_26879[(8)] = inst_26863);

return statearr_26879;
})();
var statearr_26880_26894 = state_26871__$1;
(statearr_26880_26894[(2)] = null);

(statearr_26880_26894[(1)] = (2));


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
});})(c__21897__auto___26888,ch))
;
return ((function (switch__21785__auto__,c__21897__auto___26888,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21786__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21786__auto____0 = (function (){
var statearr_26884 = [null,null,null,null,null,null,null,null,null];
(statearr_26884[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21786__auto__);

(statearr_26884[(1)] = (1));

return statearr_26884;
});
var figwheel$client$heads_up_plugin_$_state_machine__21786__auto____1 = (function (state_26871){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_26871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e26885){if((e26885 instanceof Object)){
var ex__21789__auto__ = e26885;
var statearr_26886_26895 = state_26871;
(statearr_26886_26895[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26896 = state_26871;
state_26871 = G__26896;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21786__auto__ = function(state_26871){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21786__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21786__auto____1.call(this,state_26871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21786__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21786__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto___26888,ch))
})();
var state__21899__auto__ = (function (){var statearr_26887 = f__21898__auto__.call(null);
(statearr_26887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto___26888);

return statearr_26887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto___26888,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21897__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21897__auto__){
return (function (){
var f__21898__auto__ = (function (){var switch__21785__auto__ = ((function (c__21897__auto__){
return (function (state_26917){
var state_val_26918 = (state_26917[(1)]);
if((state_val_26918 === (1))){
var inst_26912 = cljs.core.async.timeout.call(null,(3000));
var state_26917__$1 = state_26917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26917__$1,(2),inst_26912);
} else {
if((state_val_26918 === (2))){
var inst_26914 = (state_26917[(2)]);
var inst_26915 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26917__$1 = (function (){var statearr_26919 = state_26917;
(statearr_26919[(7)] = inst_26914);

return statearr_26919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26917__$1,inst_26915);
} else {
return null;
}
}
});})(c__21897__auto__))
;
return ((function (switch__21785__auto__,c__21897__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21786__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21786__auto____0 = (function (){
var statearr_26923 = [null,null,null,null,null,null,null,null];
(statearr_26923[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21786__auto__);

(statearr_26923[(1)] = (1));

return statearr_26923;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21786__auto____1 = (function (state_26917){
while(true){
var ret_value__21787__auto__ = (function (){try{while(true){
var result__21788__auto__ = switch__21785__auto__.call(null,state_26917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21788__auto__;
}
break;
}
}catch (e26924){if((e26924 instanceof Object)){
var ex__21789__auto__ = e26924;
var statearr_26925_26927 = state_26917;
(statearr_26925_26927[(5)] = ex__21789__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26928 = state_26917;
state_26917 = G__26928;
continue;
} else {
return ret_value__21787__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21786__auto__ = function(state_26917){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21786__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21786__auto____1.call(this,state_26917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21786__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21786__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21786__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21786__auto__;
})()
;})(switch__21785__auto__,c__21897__auto__))
})();
var state__21899__auto__ = (function (){var statearr_26926 = f__21898__auto__.call(null);
(statearr_26926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21897__auto__);

return statearr_26926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21899__auto__);
});})(c__21897__auto__))
);

return c__21897__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26929){
var map__26936 = p__26929;
var map__26936__$1 = ((((!((map__26936 == null)))?((((map__26936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26936):map__26936);
var ed = map__26936__$1;
var formatted_exception = cljs.core.get.call(null,map__26936__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26936__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26936__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26938_26942 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26939_26943 = null;
var count__26940_26944 = (0);
var i__26941_26945 = (0);
while(true){
if((i__26941_26945 < count__26940_26944)){
var msg_26946 = cljs.core._nth.call(null,chunk__26939_26943,i__26941_26945);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26946);

var G__26947 = seq__26938_26942;
var G__26948 = chunk__26939_26943;
var G__26949 = count__26940_26944;
var G__26950 = (i__26941_26945 + (1));
seq__26938_26942 = G__26947;
chunk__26939_26943 = G__26948;
count__26940_26944 = G__26949;
i__26941_26945 = G__26950;
continue;
} else {
var temp__4425__auto___26951 = cljs.core.seq.call(null,seq__26938_26942);
if(temp__4425__auto___26951){
var seq__26938_26952__$1 = temp__4425__auto___26951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26938_26952__$1)){
var c__17574__auto___26953 = cljs.core.chunk_first.call(null,seq__26938_26952__$1);
var G__26954 = cljs.core.chunk_rest.call(null,seq__26938_26952__$1);
var G__26955 = c__17574__auto___26953;
var G__26956 = cljs.core.count.call(null,c__17574__auto___26953);
var G__26957 = (0);
seq__26938_26942 = G__26954;
chunk__26939_26943 = G__26955;
count__26940_26944 = G__26956;
i__26941_26945 = G__26957;
continue;
} else {
var msg_26958 = cljs.core.first.call(null,seq__26938_26952__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26958);

var G__26959 = cljs.core.next.call(null,seq__26938_26952__$1);
var G__26960 = null;
var G__26961 = (0);
var G__26962 = (0);
seq__26938_26942 = G__26959;
chunk__26939_26943 = G__26960;
count__26940_26944 = G__26961;
i__26941_26945 = G__26962;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26963){
var map__26966 = p__26963;
var map__26966__$1 = ((((!((map__26966 == null)))?((((map__26966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26966):map__26966);
var w = map__26966__$1;
var message = cljs.core.get.call(null,map__26966__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16759__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16759__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16759__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26974 = cljs.core.seq.call(null,plugins);
var chunk__26975 = null;
var count__26976 = (0);
var i__26977 = (0);
while(true){
if((i__26977 < count__26976)){
var vec__26978 = cljs.core._nth.call(null,chunk__26975,i__26977);
var k = cljs.core.nth.call(null,vec__26978,(0),null);
var plugin = cljs.core.nth.call(null,vec__26978,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26980 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26974,chunk__26975,count__26976,i__26977,pl_26980,vec__26978,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26980.call(null,msg_hist);
});})(seq__26974,chunk__26975,count__26976,i__26977,pl_26980,vec__26978,k,plugin))
);
} else {
}

var G__26981 = seq__26974;
var G__26982 = chunk__26975;
var G__26983 = count__26976;
var G__26984 = (i__26977 + (1));
seq__26974 = G__26981;
chunk__26975 = G__26982;
count__26976 = G__26983;
i__26977 = G__26984;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26974);
if(temp__4425__auto__){
var seq__26974__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26974__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__26974__$1);
var G__26985 = cljs.core.chunk_rest.call(null,seq__26974__$1);
var G__26986 = c__17574__auto__;
var G__26987 = cljs.core.count.call(null,c__17574__auto__);
var G__26988 = (0);
seq__26974 = G__26985;
chunk__26975 = G__26986;
count__26976 = G__26987;
i__26977 = G__26988;
continue;
} else {
var vec__26979 = cljs.core.first.call(null,seq__26974__$1);
var k = cljs.core.nth.call(null,vec__26979,(0),null);
var plugin = cljs.core.nth.call(null,vec__26979,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26989 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26974,chunk__26975,count__26976,i__26977,pl_26989,vec__26979,k,plugin,seq__26974__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26989.call(null,msg_hist);
});})(seq__26974,chunk__26975,count__26976,i__26977,pl_26989,vec__26979,k,plugin,seq__26974__$1,temp__4425__auto__))
);
} else {
}

var G__26990 = cljs.core.next.call(null,seq__26974__$1);
var G__26991 = null;
var G__26992 = (0);
var G__26993 = (0);
seq__26974 = G__26990;
chunk__26975 = G__26991;
count__26976 = G__26992;
i__26977 = G__26993;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26994 = [];
var len__17829__auto___26997 = arguments.length;
var i__17830__auto___26998 = (0);
while(true){
if((i__17830__auto___26998 < len__17829__auto___26997)){
args26994.push((arguments[i__17830__auto___26998]));

var G__26999 = (i__17830__auto___26998 + (1));
i__17830__auto___26998 = G__26999;
continue;
} else {
}
break;
}

var G__26996 = args26994.length;
switch (G__26996) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26994.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17836__auto__ = [];
var len__17829__auto___27005 = arguments.length;
var i__17830__auto___27006 = (0);
while(true){
if((i__17830__auto___27006 < len__17829__auto___27005)){
args__17836__auto__.push((arguments[i__17830__auto___27006]));

var G__27007 = (i__17830__auto___27006 + (1));
i__17830__auto___27006 = G__27007;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27002){
var map__27003 = p__27002;
var map__27003__$1 = ((((!((map__27003 == null)))?((((map__27003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27003):map__27003);
var opts = map__27003__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27001){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27001));
});

//# sourceMappingURL=client.js.map