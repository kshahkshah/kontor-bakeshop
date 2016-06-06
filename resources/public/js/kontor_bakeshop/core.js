// Compiled by ClojureScript 1.7.170 {}
goog.provide('kontor_bakeshop.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
goog.require('cljs.pprint');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof kontor_bakeshop.core.read !== 'undefined'){
} else {
kontor_bakeshop.core.read = (function (){var method_table__17681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17685__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"kontor-bakeshop.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17685__auto__,method_table__17681__auto__,prefer_table__17682__auto__,method_cache__17683__auto__,cached_hierarchy__17684__auto__));
})();
}
if(typeof kontor_bakeshop.core.mutate !== 'undefined'){
} else {
kontor_bakeshop.core.mutate = (function (){var method_table__17681__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17685__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"kontor-bakeshop.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17685__auto__,method_table__17681__auto__,prefer_table__17682__auto__,method_cache__17683__auto__,cached_hierarchy__17684__auto__));
})();
}
cljs.core._add_method.call(null,kontor_bakeshop.core.read,new cljs.core.Keyword(null,"treats","treats",-921248141),(function (p__23747,k,_){
var map__23748 = p__23747;
var map__23748__$1 = ((((!((map__23748 == null)))?((((map__23748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23748):map__23748);
var query = cljs.core.get.call(null,map__23748__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var state = cljs.core.get.call(null,map__23748__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cljs.pprint.pprint.call(null,query);

var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,k),st)], null);
}));
cljs.core._add_method.call(null,kontor_bakeshop.core.read,new cljs.core.Keyword(null,"cart","cart",-119094748),(function (p__23750,k,_){
var map__23751 = p__23750;
var map__23751__$1 = ((((!((map__23751 == null)))?((((map__23751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23751):map__23751);
var query = cljs.core.get.call(null,map__23751__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var state = cljs.core.get.call(null,map__23751__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,k),st)], null);
}));
cljs.core._add_method.call(null,kontor_bakeshop.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__23753,k,_){
var map__23754 = p__23753;
var map__23754__$1 = ((((!((map__23754 == null)))?((((map__23754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23754):map__23754);
var state = cljs.core.get.call(null,map__23754__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
if(cljs.core.contains_QMARK_.call(null,st,k)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,k)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}
}));
cljs.core._add_method.call(null,kontor_bakeshop.core.mutate,new cljs.core.Symbol("cart","add","cart/add",1864172578,null),(function (p__23756,_,p__23757){
var map__23758 = p__23756;
var map__23758__$1 = ((((!((map__23758 == null)))?((((map__23758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23758):map__23758);
var state = cljs.core.get.call(null,map__23758__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23759 = p__23757;
var map__23759__$1 = ((((!((map__23759 == null)))?((((map__23759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23759):map__23759);
var id = cljs.core.get.call(null,map__23759__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23758,map__23758__$1,state,map__23759,map__23759__$1,id){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"cart","cart",-119094748),((function (map__23758,map__23758__$1,state,map__23759,map__23759__$1,id){
return (function (c){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,cljs.core.conj.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("treat","by-id","treat/by-id",-2105881015),id], null))));
});})(map__23758,map__23758__$1,state,map__23759,map__23759__$1,id))
);

return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("treat","by-id","treat/by-id",-2105881015),id], null),cljs.core.update,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.inc);
});})(map__23758,map__23758__$1,state,map__23759,map__23759__$1,id))
], null);
}));
cljs.core._add_method.call(null,kontor_bakeshop.core.mutate,new cljs.core.Symbol("cart","empty","cart/empty",-1879323947,null),(function (p__23762,_,___$1){
var map__23763 = p__23762;
var map__23763__$1 = ((((!((map__23763 == null)))?((((map__23763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23763):map__23763);
var state = cljs.core.get.call(null,map__23763__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23763,map__23763__$1,state){
return (function (){
cljs.core.map.call(null,((function (map__23763,map__23763__$1,state){
return (function (id){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("treat","by-id","treat/by-id",-2105881015),id], null),cljs.core.update,new cljs.core.Keyword(null,"count","count",2139924085),(0));
});})(map__23763,map__23763__$1,state))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null));

return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"cart","cart",-119094748),cljs.core.PersistentVector.EMPTY);
});})(map__23763,map__23763__$1,state))
], null);
}));
kontor_bakeshop.core.init_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"treats","treats",-921248141),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Brownie",new cljs.core.Keyword(null,"imageURL","imageURL",1945550434),"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdr1eTXEMs68Dx-b_mZT0RpifEQ8so6A1unRsJlyJIPe0LUE2HQ",new cljs.core.Keyword(null,"price","price",22129180),2.0,new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"amount","amount",364489504),(4),new cljs.core.Keyword(null,"totalPrice","totalPrice",-371933591),7.0], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Key Lime Cheesecake",new cljs.core.Keyword(null,"imageURL","imageURL",1945550434),"http://1.bp.blogspot.com/-7we9Z0C_fpI/T90JXcg3YsI/AAAAAAAABn4/EN7u2vMuRug/s1600/key+lime+cheesecake+slice+in+front.jpg",new cljs.core.Keyword(null,"price","price",22129180),8.0,new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484),null], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"Cookie",new cljs.core.Keyword(null,"imageURL","imageURL",1945550434),"http://www.mayheminthekitchen.com/wp-content/uploads/2015/05/chocolate-cookie-square.jpg",new cljs.core.Keyword(null,"price","price",22129180),1.25,new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"amount","amount",364489504),(6),new cljs.core.Keyword(null,"totalPrice","totalPrice",-371933591),6.0], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"Mini Gingerbread Donut",new cljs.core.Keyword(null,"imageURL","imageURL",1945550434),"https://s3.amazonaws.com/pinchofyum/gingerbread-donuts-22.jpg",new cljs.core.Keyword(null,"price","price",22129180),0.5,new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484),null], null)], null),new cljs.core.Keyword(null,"cart","cart",-119094748),cljs.core.PersistentVector.EMPTY], null);
kontor_bakeshop.core.subtotal = (function kontor_bakeshop$core$subtotal(count,price,bulkPricing){
if(((bulkPricing == null)) || ((cljs.core.get.call(null,bulkPricing,new cljs.core.Keyword(null,"amount","amount",364489504)) > count))){
return (count * price);
} else {
return ((cljs.core.quot.call(null,count,cljs.core.get.call(null,bulkPricing,new cljs.core.Keyword(null,"amount","amount",364489504))) * cljs.core.get.call(null,bulkPricing,new cljs.core.Keyword(null,"totalPrice","totalPrice",-371933591))) + (cljs.core.rem.call(null,count,cljs.core.get.call(null,bulkPricing,new cljs.core.Keyword(null,"amount","amount",364489504))) * price));
}
});
/**
 * @constructor
 */
kontor_bakeshop.core.Treat = (function kontor_bakeshop$core$Treat(){
var this__18997__auto__ = this;
React.Component.apply(this__18997__auto__,arguments);

if(!((this__18997__auto__.initLocalState == null))){
this__18997__auto__.state = this__18997__auto__.initLocalState();
} else {
this__18997__auto__.state = {};
}

return this__18997__auto__;
});

kontor_bakeshop.core.Treat.prototype = goog.object.clone(React.Component.prototype);

var x23769_23787 = kontor_bakeshop.core.Treat.prototype;
x23769_23787.componentWillUpdate = ((function (x23769_23787){
return (function (next_props__18933__auto__,next_state__18934__auto__){
var this__18932__auto__ = this;
if(((!((this__18932__auto__ == null)))?(((false) || (this__18932__auto__.om$next$Ident$))?true:false):false)){
var ident__18936__auto___23788 = om.next.ident.call(null,this__18932__auto__,om.next.props.call(null,this__18932__auto__));
var next_ident__18937__auto___23789 = om.next.ident.call(null,this__18932__auto__,om.next._next_props.call(null,next_props__18933__auto__,this__18932__auto__));
if(cljs.core.not_EQ_.call(null,ident__18936__auto___23788,next_ident__18937__auto___23789)){
var idxr__18938__auto___23790 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18932__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18938__auto___23790 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18938__auto___23790),((function (idxr__18938__auto___23790,ident__18936__auto___23788,next_ident__18937__auto___23789,this__18932__auto__,x23769_23787){
return (function (indexes__18939__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18939__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18936__auto___23788], null),cljs.core.disj,this__18932__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18937__auto___23789], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18932__auto__);
});})(idxr__18938__auto___23790,ident__18936__auto___23788,next_ident__18937__auto___23789,this__18932__auto__,x23769_23787))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18932__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18932__auto__);
});})(x23769_23787))
;

x23769_23787.shouldComponentUpdate = ((function (x23769_23787){
return (function (next_props__18933__auto__,next_state__18934__auto__){
var this__18932__auto__ = this;
var next_children__18935__auto__ = next_props__18933__auto__.children;
var next_props__18933__auto____$1 = goog.object.get(next_props__18933__auto__,"omcljs$value");
var next_props__18933__auto____$2 = (function (){var G__23771 = next_props__18933__auto____$1;
var G__23771__$1 = (((next_props__18933__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23771):G__23771);
return G__23771__$1;
})();
var or__16768__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18932__auto__),next_props__18933__auto____$2);
if(or__16768__auto__){
return or__16768__auto__;
} else {
var or__16768__auto____$1 = (function (){var and__16756__auto__ = this__18932__auto__.state;
if(cljs.core.truth_(and__16756__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18932__auto__.state,"omcljs$state"),goog.object.get(next_state__18934__auto__,"omcljs$state"));
} else {
return and__16756__auto__;
}
})();
if(cljs.core.truth_(or__16768__auto____$1)){
return or__16768__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18932__auto__.props.children,next_children__18935__auto__);
}
}
});})(x23769_23787))
;

x23769_23787.componentWillUnmount = ((function (x23769_23787){
return (function (){
var this__18932__auto__ = this;
var r__18943__auto__ = om.next.get_reconciler.call(null,this__18932__auto__);
var cfg__18944__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18943__auto__);
var st__18945__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18944__auto__);
var indexer__18942__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18944__auto__);
if(cljs.core.truth_((function (){var and__16756__auto__ = !((st__18945__auto__ == null));
if(and__16756__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18945__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18932__auto__], null));
} else {
return and__16756__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18945__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18932__auto__);
} else {
}

if((indexer__18942__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18942__auto__,this__18932__auto__);
}
});})(x23769_23787))
;

x23769_23787.componentDidUpdate = ((function (x23769_23787){
return (function (prev_props__18940__auto__,prev_state__18941__auto__){
var this__18932__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18932__auto__);
});})(x23769_23787))
;

x23769_23787.isMounted = ((function (x23769_23787){
return (function (){
var this__18932__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18932__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23769_23787))
;

x23769_23787.componentWillMount = ((function (x23769_23787){
return (function (){
var this__18932__auto__ = this;
var indexer__18942__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18932__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18942__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18942__auto__,this__18932__auto__);
}
});})(x23769_23787))
;

x23769_23787.render = ((function (x23769_23787){
return (function (){
var this__18931__auto__ = this;
var this$ = this__18931__auto__;
var _STAR_reconciler_STAR_23772 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23773 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23774 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23775 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23776 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18931__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18931__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18931__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18931__auto__);

om.next._STAR_parent_STAR_ = this__18931__auto__;

try{var map__23777 = om.next.props.call(null,this$);
var map__23777__$1 = ((((!((map__23777 == null)))?((((map__23777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23777):map__23777);
var props = map__23777__$1;
var id = cljs.core.get.call(null,map__23777__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__23777__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var imageURL = cljs.core.get.call(null,map__23777__$1,new cljs.core.Keyword(null,"imageURL","imageURL",1945550434));
var bulkPricing = cljs.core.get.call(null,map__23777__$1,new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484));
var price = cljs.core.get.call(null,map__23777__$1,new cljs.core.Keyword(null,"price","price",22129180));
return React.DOM.div({"react-key": id, "className": "treat"},om.util.force_children.call(null,React.DOM.img({"className": "treat-image", "src": imageURL, "alt": [cljs.core.str("image of"),cljs.core.str(name)].join('')},om.util.force_children.call(null,null))),om.util.force_children.call(null,React.DOM.div({"className": "treat-info"},om.util.force_children.call(null,React.DOM.strong({"className": "treat-name"},om.util.force_children.call(null,name))),om.util.force_children.call(null,React.DOM.br(null,om.util.force_children.call(null,null))),om.util.force_children.call(null,React.DOM.span({"className": "treat-price"},om.util.force_children.call(null,[cljs.core.str("$"),cljs.core.str(price),cljs.core.str((cljs.core.truth_(bulkPricing)?[cljs.core.str(" each or $"),cljs.core.str(cljs.core.get.call(null,bulkPricing,new cljs.core.Keyword(null,"amount","amount",364489504))),cljs.core.str(" for "),cljs.core.str(cljs.core.get.call(null,bulkPricing,new cljs.core.Keyword(null,"totalPrice","totalPrice",-371933591)))].join(''):null))].join('')))),om.util.force_children.call(null,React.DOM.br(null,om.util.force_children.call(null,null))),om.util.force_children.call(null,React.DOM.button({"className": "treat-action", "onClick": ((function (map__23777,map__23777__$1,props,id,name,imageURL,bulkPricing,price,_STAR_reconciler_STAR_23772,_STAR_depth_STAR_23773,_STAR_shared_STAR_23774,_STAR_instrument_STAR_23775,_STAR_parent_STAR_23776,this$,this__18931__auto__,x23769_23787){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cart","add","cart/add",1864172578,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"cart","cart",-119094748)))))));
});})(map__23777,map__23777__$1,props,id,name,imageURL,bulkPricing,price,_STAR_reconciler_STAR_23772,_STAR_depth_STAR_23773,_STAR_shared_STAR_23774,_STAR_instrument_STAR_23775,_STAR_parent_STAR_23776,this$,this__18931__auto__,x23769_23787))
},om.util.force_children.call(null,"Add to Cart"))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23776;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23775;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23774;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23773;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23772;
}});})(x23769_23787))
;


kontor_bakeshop.core.Treat.prototype.constructor = kontor_bakeshop.core.Treat;

kontor_bakeshop.core.Treat.prototype.constructor.displayName = "kontor-bakeshop.core/Treat";

kontor_bakeshop.core.Treat.prototype.om$isComponent = true;

var x23779_23791 = kontor_bakeshop.core.Treat;
x23779_23791.om$next$Ident$ = true;

x23779_23791.om$next$Ident$ident$arity$2 = ((function (x23779_23791){
return (function (_,p__23780){
var map__23781 = p__23780;
var map__23781__$1 = ((((!((map__23781 == null)))?((((map__23781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23781):map__23781);
var id = cljs.core.get.call(null,map__23781__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("treat","by-id","treat/by-id",-2105881015),id], null);
});})(x23779_23791))
;

x23779_23791.om$next$IQuery$ = true;

x23779_23791.om$next$IQuery$query$arity$1 = ((function (x23779_23791){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"imageURL","imageURL",1945550434),new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484),new cljs.core.Keyword(null,"price","price",22129180)], null);
});})(x23779_23791))
;


var x23783_23792 = kontor_bakeshop.core.Treat.prototype;
x23783_23792.om$next$Ident$ = true;

x23783_23792.om$next$Ident$ident$arity$2 = ((function (x23783_23792){
return (function (_,p__23784){
var map__23785 = p__23784;
var map__23785__$1 = ((((!((map__23785 == null)))?((((map__23785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23785):map__23785);
var id = cljs.core.get.call(null,map__23785__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("treat","by-id","treat/by-id",-2105881015),id], null);
});})(x23783_23792))
;

x23783_23792.om$next$IQuery$ = true;

x23783_23792.om$next$IQuery$query$arity$1 = ((function (x23783_23792){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"imageURL","imageURL",1945550434),new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484),new cljs.core.Keyword(null,"price","price",22129180)], null);
});})(x23783_23792))
;


kontor_bakeshop.core.Treat.cljs$lang$type = true;

kontor_bakeshop.core.Treat.cljs$lang$ctorStr = "kontor-bakeshop.core/Treat";

kontor_bakeshop.core.Treat.cljs$lang$ctorPrWriter = (function (this__18999__auto__,writer__19000__auto__,opt__19001__auto__){
return cljs.core._write.call(null,writer__19000__auto__,"kontor-bakeshop.core/Treat");
});
/**
 * @constructor
 */
kontor_bakeshop.core.CartItem = (function kontor_bakeshop$core$CartItem(){
var this__18997__auto__ = this;
React.Component.apply(this__18997__auto__,arguments);

if(!((this__18997__auto__.initLocalState == null))){
this__18997__auto__.state = this__18997__auto__.initLocalState();
} else {
this__18997__auto__.state = {};
}

return this__18997__auto__;
});

kontor_bakeshop.core.CartItem.prototype = goog.object.clone(React.Component.prototype);

var x23797_23815 = kontor_bakeshop.core.CartItem.prototype;
x23797_23815.componentWillUpdate = ((function (x23797_23815){
return (function (next_props__18933__auto__,next_state__18934__auto__){
var this__18932__auto__ = this;
if(((!((this__18932__auto__ == null)))?(((false) || (this__18932__auto__.om$next$Ident$))?true:false):false)){
var ident__18936__auto___23816 = om.next.ident.call(null,this__18932__auto__,om.next.props.call(null,this__18932__auto__));
var next_ident__18937__auto___23817 = om.next.ident.call(null,this__18932__auto__,om.next._next_props.call(null,next_props__18933__auto__,this__18932__auto__));
if(cljs.core.not_EQ_.call(null,ident__18936__auto___23816,next_ident__18937__auto___23817)){
var idxr__18938__auto___23818 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18932__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18938__auto___23818 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18938__auto___23818),((function (idxr__18938__auto___23818,ident__18936__auto___23816,next_ident__18937__auto___23817,this__18932__auto__,x23797_23815){
return (function (indexes__18939__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18939__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18936__auto___23816], null),cljs.core.disj,this__18932__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18937__auto___23817], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18932__auto__);
});})(idxr__18938__auto___23818,ident__18936__auto___23816,next_ident__18937__auto___23817,this__18932__auto__,x23797_23815))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18932__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18932__auto__);
});})(x23797_23815))
;

x23797_23815.shouldComponentUpdate = ((function (x23797_23815){
return (function (next_props__18933__auto__,next_state__18934__auto__){
var this__18932__auto__ = this;
var next_children__18935__auto__ = next_props__18933__auto__.children;
var next_props__18933__auto____$1 = goog.object.get(next_props__18933__auto__,"omcljs$value");
var next_props__18933__auto____$2 = (function (){var G__23799 = next_props__18933__auto____$1;
var G__23799__$1 = (((next_props__18933__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23799):G__23799);
return G__23799__$1;
})();
var or__16768__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18932__auto__),next_props__18933__auto____$2);
if(or__16768__auto__){
return or__16768__auto__;
} else {
var or__16768__auto____$1 = (function (){var and__16756__auto__ = this__18932__auto__.state;
if(cljs.core.truth_(and__16756__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18932__auto__.state,"omcljs$state"),goog.object.get(next_state__18934__auto__,"omcljs$state"));
} else {
return and__16756__auto__;
}
})();
if(cljs.core.truth_(or__16768__auto____$1)){
return or__16768__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18932__auto__.props.children,next_children__18935__auto__);
}
}
});})(x23797_23815))
;

x23797_23815.componentWillUnmount = ((function (x23797_23815){
return (function (){
var this__18932__auto__ = this;
var r__18943__auto__ = om.next.get_reconciler.call(null,this__18932__auto__);
var cfg__18944__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18943__auto__);
var st__18945__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18944__auto__);
var indexer__18942__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18944__auto__);
if(cljs.core.truth_((function (){var and__16756__auto__ = !((st__18945__auto__ == null));
if(and__16756__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18945__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18932__auto__], null));
} else {
return and__16756__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18945__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18932__auto__);
} else {
}

if((indexer__18942__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18942__auto__,this__18932__auto__);
}
});})(x23797_23815))
;

x23797_23815.componentDidUpdate = ((function (x23797_23815){
return (function (prev_props__18940__auto__,prev_state__18941__auto__){
var this__18932__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18932__auto__);
});})(x23797_23815))
;

x23797_23815.isMounted = ((function (x23797_23815){
return (function (){
var this__18932__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18932__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23797_23815))
;

x23797_23815.componentWillMount = ((function (x23797_23815){
return (function (){
var this__18932__auto__ = this;
var indexer__18942__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18932__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18942__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18942__auto__,this__18932__auto__);
}
});})(x23797_23815))
;

x23797_23815.render = ((function (x23797_23815){
return (function (){
var this__18931__auto__ = this;
var this$ = this__18931__auto__;
var _STAR_reconciler_STAR_23800 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23801 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23802 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23803 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23804 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18931__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18931__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18931__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18931__auto__);

om.next._STAR_parent_STAR_ = this__18931__auto__;

try{var map__23805 = om.next.props.call(null,this$);
var map__23805__$1 = ((((!((map__23805 == null)))?((((map__23805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23805):map__23805);
var props = map__23805__$1;
var id = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var count = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var name = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var price = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"price","price",22129180));
var bulkPricing = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484));
return React.DOM.div({"react-key": [cljs.core.str("cart-item-"),cljs.core.str(name)].join(''), "id": [cljs.core.str("cart-item-"),cljs.core.str(id)].join(''), "className": "cart-item"},om.util.force_children.call(null,React.DOM.div({"className": "cart-item-name"},om.util.force_children.call(null,name))),om.util.force_children.call(null,React.DOM.div({"className": "cart-item-count"},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str(count),cljs.core.str("x")].join('')))))),om.util.force_children.call(null,React.DOM.div({"className": "cart-item-subtotal"},om.util.force_children.call(null,[cljs.core.str("$"),cljs.core.str(kontor_bakeshop.core.subtotal.call(null,count,price,bulkPricing))].join('')))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23804;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23803;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23802;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23801;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23800;
}});})(x23797_23815))
;


kontor_bakeshop.core.CartItem.prototype.constructor = kontor_bakeshop.core.CartItem;

kontor_bakeshop.core.CartItem.prototype.constructor.displayName = "kontor-bakeshop.core/CartItem";

kontor_bakeshop.core.CartItem.prototype.om$isComponent = true;

var x23807_23819 = kontor_bakeshop.core.CartItem;
x23807_23819.om$next$Ident$ = true;

x23807_23819.om$next$Ident$ident$arity$2 = ((function (x23807_23819){
return (function (_,p__23808){
var map__23809 = p__23808;
var map__23809__$1 = ((((!((map__23809 == null)))?((((map__23809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23809):map__23809);
var id = cljs.core.get.call(null,map__23809__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("treat","by-id","treat/by-id",-2105881015),id], null);
});})(x23807_23819))
;

x23807_23819.om$next$IQuery$ = true;

x23807_23819.om$next$IQuery$query$arity$1 = ((function (x23807_23819){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"price","price",22129180),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484)], null);
});})(x23807_23819))
;


var x23811_23820 = kontor_bakeshop.core.CartItem.prototype;
x23811_23820.om$next$Ident$ = true;

x23811_23820.om$next$Ident$ident$arity$2 = ((function (x23811_23820){
return (function (_,p__23812){
var map__23813 = p__23812;
var map__23813__$1 = ((((!((map__23813 == null)))?((((map__23813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23813):map__23813);
var id = cljs.core.get.call(null,map__23813__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("treat","by-id","treat/by-id",-2105881015),id], null);
});})(x23811_23820))
;

x23811_23820.om$next$IQuery$ = true;

x23811_23820.om$next$IQuery$query$arity$1 = ((function (x23811_23820){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"price","price",22129180),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484)], null);
});})(x23811_23820))
;


kontor_bakeshop.core.CartItem.cljs$lang$type = true;

kontor_bakeshop.core.CartItem.cljs$lang$ctorStr = "kontor-bakeshop.core/CartItem";

kontor_bakeshop.core.CartItem.cljs$lang$ctorPrWriter = (function (this__18999__auto__,writer__19000__auto__,opt__19001__auto__){
return cljs.core._write.call(null,writer__19000__auto__,"kontor-bakeshop.core/CartItem");
});
kontor_bakeshop.core.treat = om.next.factory.call(null,kontor_bakeshop.core.Treat,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
kontor_bakeshop.core.cart_item = om.next.factory.call(null,kontor_bakeshop.core.CartItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
kontor_bakeshop.core.RootView = (function kontor_bakeshop$core$RootView(){
var this__18997__auto__ = this;
React.Component.apply(this__18997__auto__,arguments);

if(!((this__18997__auto__.initLocalState == null))){
this__18997__auto__.state = this__18997__auto__.initLocalState();
} else {
this__18997__auto__.state = {};
}

return this__18997__auto__;
});

kontor_bakeshop.core.RootView.prototype = goog.object.clone(React.Component.prototype);

var x23825_23839 = kontor_bakeshop.core.RootView.prototype;
x23825_23839.componentWillUpdate = ((function (x23825_23839){
return (function (next_props__18933__auto__,next_state__18934__auto__){
var this__18932__auto__ = this;
if(((!((this__18932__auto__ == null)))?(((false) || (this__18932__auto__.om$next$Ident$))?true:false):false)){
var ident__18936__auto___23840 = om.next.ident.call(null,this__18932__auto__,om.next.props.call(null,this__18932__auto__));
var next_ident__18937__auto___23841 = om.next.ident.call(null,this__18932__auto__,om.next._next_props.call(null,next_props__18933__auto__,this__18932__auto__));
if(cljs.core.not_EQ_.call(null,ident__18936__auto___23840,next_ident__18937__auto___23841)){
var idxr__18938__auto___23842 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18932__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18938__auto___23842 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18938__auto___23842),((function (idxr__18938__auto___23842,ident__18936__auto___23840,next_ident__18937__auto___23841,this__18932__auto__,x23825_23839){
return (function (indexes__18939__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18939__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18936__auto___23840], null),cljs.core.disj,this__18932__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18937__auto___23841], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18932__auto__);
});})(idxr__18938__auto___23842,ident__18936__auto___23840,next_ident__18937__auto___23841,this__18932__auto__,x23825_23839))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18932__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18932__auto__);
});})(x23825_23839))
;

x23825_23839.shouldComponentUpdate = ((function (x23825_23839){
return (function (next_props__18933__auto__,next_state__18934__auto__){
var this__18932__auto__ = this;
var next_children__18935__auto__ = next_props__18933__auto__.children;
var next_props__18933__auto____$1 = goog.object.get(next_props__18933__auto__,"omcljs$value");
var next_props__18933__auto____$2 = (function (){var G__23827 = next_props__18933__auto____$1;
var G__23827__$1 = (((next_props__18933__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23827):G__23827);
return G__23827__$1;
})();
var or__16768__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18932__auto__),next_props__18933__auto____$2);
if(or__16768__auto__){
return or__16768__auto__;
} else {
var or__16768__auto____$1 = (function (){var and__16756__auto__ = this__18932__auto__.state;
if(cljs.core.truth_(and__16756__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18932__auto__.state,"omcljs$state"),goog.object.get(next_state__18934__auto__,"omcljs$state"));
} else {
return and__16756__auto__;
}
})();
if(cljs.core.truth_(or__16768__auto____$1)){
return or__16768__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18932__auto__.props.children,next_children__18935__auto__);
}
}
});})(x23825_23839))
;

x23825_23839.componentWillUnmount = ((function (x23825_23839){
return (function (){
var this__18932__auto__ = this;
var r__18943__auto__ = om.next.get_reconciler.call(null,this__18932__auto__);
var cfg__18944__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18943__auto__);
var st__18945__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18944__auto__);
var indexer__18942__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18944__auto__);
if(cljs.core.truth_((function (){var and__16756__auto__ = !((st__18945__auto__ == null));
if(and__16756__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18945__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18932__auto__], null));
} else {
return and__16756__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18945__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18932__auto__);
} else {
}

if((indexer__18942__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18942__auto__,this__18932__auto__);
}
});})(x23825_23839))
;

x23825_23839.componentDidUpdate = ((function (x23825_23839){
return (function (prev_props__18940__auto__,prev_state__18941__auto__){
var this__18932__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18932__auto__);
});})(x23825_23839))
;

x23825_23839.isMounted = ((function (x23825_23839){
return (function (){
var this__18932__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18932__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23825_23839))
;

x23825_23839.componentWillMount = ((function (x23825_23839){
return (function (){
var this__18932__auto__ = this;
var indexer__18942__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18932__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18942__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18942__auto__,this__18932__auto__);
}
});})(x23825_23839))
;

x23825_23839.render = ((function (x23825_23839){
return (function (){
var this__18931__auto__ = this;
var this$ = this__18931__auto__;
var _STAR_reconciler_STAR_23828 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23829 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23830 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23831 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23832 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18931__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18931__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18931__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18931__auto__);

om.next._STAR_parent_STAR_ = this__18931__auto__;

try{var map__23833 = om.next.props.call(null,this$);
var map__23833__$1 = ((((!((map__23833 == null)))?((((map__23833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23833):map__23833);
var props = map__23833__$1;
var treats = cljs.core.get.call(null,map__23833__$1,new cljs.core.Keyword(null,"treats","treats",-921248141));
var cart = cljs.core.get.call(null,map__23833__$1,new cljs.core.Keyword(null,"cart","cart",-119094748));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h1(null,om.util.force_children.call(null,"Kontor Bakeshop"))),om.util.force_children.call(null,React.DOM.div({"id": "treats"},om.util.force_children.call(null,cljs.core.map.call(null,kontor_bakeshop.core.treat,treats)))),om.util.force_children.call(null,React.DOM.div({"id": "cart"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.h2(null,om.util.force_children.call(null,"Cart")),cljs.core.map.call(null,kontor_bakeshop.core.cart_item,cart),((!(cljs.core.empty_QMARK_.call(null,cart)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"id": "cart-total"},om.util.force_children.call(null,React.DOM.div({"id": "cart-total-label"},om.util.force_children.call(null,"Total"))),om.util.force_children.call(null,React.DOM.div({"id": "cart-total-number"},om.util.force_children.call(null,[cljs.core.str("$"),cljs.core.str(cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (map__23833,map__23833__$1,props,treats,cart,_STAR_reconciler_STAR_23828,_STAR_depth_STAR_23829,_STAR_shared_STAR_23830,_STAR_instrument_STAR_23831,_STAR_parent_STAR_23832,this$,this__18931__auto__,x23825_23839){
return (function (item){
var map__23835 = item;
var map__23835__$1 = ((((!((map__23835 == null)))?((((map__23835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23835):map__23835);
var props__$1 = map__23835__$1;
var count = cljs.core.get.call(null,map__23835__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var price = cljs.core.get.call(null,map__23835__$1,new cljs.core.Keyword(null,"price","price",22129180));
var bulkPricing = cljs.core.get.call(null,map__23835__$1,new cljs.core.Keyword(null,"bulkPricing","bulkPricing",948912484));
return kontor_bakeshop.core.subtotal.call(null,count,price,bulkPricing);
});})(map__23833,map__23833__$1,props,treats,cart,_STAR_reconciler_STAR_23828,_STAR_depth_STAR_23829,_STAR_shared_STAR_23830,_STAR_instrument_STAR_23831,_STAR_parent_STAR_23832,this$,this__18931__auto__,x23825_23839))
,cart)))].join(''))))),React.DOM.div({"id": "cart-actions"},om.util.force_children.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.button({"id": "cart-empty", "onClick": ((function (map__23833,map__23833__$1,props,treats,cart,_STAR_reconciler_STAR_23828,_STAR_depth_STAR_23829,_STAR_shared_STAR_23830,_STAR_instrument_STAR_23831,_STAR_parent_STAR_23832,this$,this__18931__auto__,x23825_23839){
return (function (e){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cart","empty","cart/empty",-1879323947,null))], null));
});})(map__23833,map__23833__$1,props,treats,cart,_STAR_reconciler_STAR_23828,_STAR_depth_STAR_23829,_STAR_shared_STAR_23830,_STAR_instrument_STAR_23831,_STAR_parent_STAR_23832,this$,this__18931__auto__,x23825_23839))
},om.util.force_children.call(null,"empty cart")),React.DOM.button({"id": "cart-submit", "onClick": ((function (map__23833,map__23833__$1,props,treats,cart,_STAR_reconciler_STAR_23828,_STAR_depth_STAR_23829,_STAR_shared_STAR_23830,_STAR_instrument_STAR_23831,_STAR_parent_STAR_23832,this$,this__18931__auto__,x23825_23839){
return (function (e){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cart","empty","cart/empty",-1879323947,null))], null));
});})(map__23833,map__23833__$1,props,treats,cart,_STAR_reconciler_STAR_23828,_STAR_depth_STAR_23829,_STAR_shared_STAR_23830,_STAR_instrument_STAR_23831,_STAR_parent_STAR_23832,this$,this__18931__auto__,x23825_23839))
},om.util.force_children.call(null,"purchase!"))], null)))], null):null)], null)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23832;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23831;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23830;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23829;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23828;
}});})(x23825_23839))
;


kontor_bakeshop.core.RootView.prototype.constructor = kontor_bakeshop.core.RootView;

kontor_bakeshop.core.RootView.prototype.constructor.displayName = "kontor-bakeshop.core/RootView";

kontor_bakeshop.core.RootView.prototype.om$isComponent = true;

var x23837_23843 = kontor_bakeshop.core.RootView;
x23837_23843.om$next$IQuery$ = true;

x23837_23843.om$next$IQuery$query$arity$1 = ((function (x23837_23843){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"treats","treats",-921248141),om.next.get_query.call(null,kontor_bakeshop.core.Treat)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cart","cart",-119094748),om.next.get_query.call(null,kontor_bakeshop.core.CartItem)], null)], null);
});})(x23837_23843))
;


var x23838_23844 = kontor_bakeshop.core.RootView.prototype;
x23838_23844.om$next$IQuery$ = true;

x23838_23844.om$next$IQuery$query$arity$1 = ((function (x23838_23844){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"treats","treats",-921248141),om.next.get_query.call(null,kontor_bakeshop.core.Treat)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cart","cart",-119094748),om.next.get_query.call(null,kontor_bakeshop.core.CartItem)], null)], null);
});})(x23838_23844))
;


kontor_bakeshop.core.RootView.cljs$lang$type = true;

kontor_bakeshop.core.RootView.cljs$lang$ctorStr = "kontor-bakeshop.core/RootView";

kontor_bakeshop.core.RootView.cljs$lang$ctorPrWriter = (function (this__18999__auto__,writer__19000__auto__,opt__19001__auto__){
return cljs.core._write.call(null,writer__19000__auto__,"kontor-bakeshop.core/RootView");
});
kontor_bakeshop.core.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),kontor_bakeshop.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),kontor_bakeshop.core.mutate], null));
kontor_bakeshop.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),kontor_bakeshop.core.init_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),kontor_bakeshop.core.parser], null));
om.next.add_root_BANG_.call(null,kontor_bakeshop.core.reconciler,kontor_bakeshop.core.RootView,goog.dom.getElement("app"));
cljs.pprint.pprint.call(null,cljs.core.deref.call(null,kontor_bakeshop.core.reconciler));

//# sourceMappingURL=core.js.map