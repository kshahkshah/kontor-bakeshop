(ns kontor-bakeshop.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [cljs.pprint :as pp]))

(enable-console-print!)

(defmulti read om/dispatch)
(defmulti mutate om/dispatch)

(defmethod read :treats
  [{:keys [query state]} k _]
  (pp/pprint query)
  (let [st @state]
    {:value (om/db->tree query (get st k) st)}))

(defmethod read :cart
  [{:keys [query state]} k _]
  (let [st @state]
    {:value (om/db->tree query (get st k) st)}))

(defmethod read :default
  [{:keys [state]} k _]
  (let [st @state]
    (if (contains? st k)
      {:value (get st k)}
      {:remote true})))

(defmethod mutate 'cart/add
  [{:keys [state]} _ {:keys [id]}]
  {:action
   (fn []
     (swap! state update :cart conj [:treat/by-id id])
     (swap! state update-in [:treat/by-id id] update :count inc)
     )})

(defmethod mutate 'cart/remove
  [{:keys [state]} _ {:keys [id]}]
  {:action
   (fn []
     (swap! state update :cart disj [:treat/by-id id])
     (swap! state update-in [:treat/by-id id] update :count dec)
     )})

(def init-data {:treats [
                         {
                          :id 1
                          :name "Brownie"
                          :imageURL "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdr1eTXEMs68Dx-b_mZT0RpifEQ8so6A1unRsJlyJIPe0LUE2HQ"
                          :price 2.00
                          :bulkPricing {
                                        :amount 4
                                        :totalPrice 7.00
                                        }
                          }
                         {
                          :id 2
                          :name "Key Lime Cheesecake"
                          :imageURL "http://1.bp.blogspot.com/-7we9Z0C_fpI/T90JXcg3YsI/AAAAAAAABn4/EN7u2vMuRug/s1600/key+lime+cheesecake+slice+in+front.jpg"
                          :price 8.00
                          :bulkPricing nil
                          }
                         {
                          :id 3
                          :name "Cookie"
                          :imageURL "http://www.mayheminthekitchen.com/wp-content/uploads/2015/05/chocolate-cookie-square.jpg"
                          :price 1.25
                          :bulkPricing {
                                        :amount 6
                                        :totalPrice 6.00
                                        }
                          }
                         {
                          :id 4
                          :name "Mini Gingerbread Donut"
                          :imageURL "https://s3.amazonaws.com/pinchofyum/gingerbread-donuts-22.jpg"
                          :price 0.50
                          :bulkPricing nil
                          }
                         ]
                :cart       []})


(defn subtotal [count price bulkPricing]
            (if (or (nil? bulkPricing) (> (get bulkPricing :amount) count))
              (* count price)
              (+
                (* (quot (get bulkPricing :amount) count)
                   (get bulkPricing :totalPrice))
                (* (rem (get bulkPricing :amount) count)
                   price)))
            )


(defui Treat
  static om/Ident
  (ident [_ {:keys [id]}]
    [:treat/by-id id])
  static om/IQuery
  (query [this]
    '[:id :name :imageURL :bulkPricing :price])
  Object
  (render [this]
    (let [{:keys [id name imageURL bulkPricing price] :as props} (om/props this)]

      (dom/div #js {:react-key id :className "treat"}
               (dom/img
                 #js {:className "treat-image"
                      :src       imageURL
                      :alt       (str "image of" name)
                      }
                 nil)
               (dom/div #js {:className "treat-info"}
                        (dom/strong #js {:className "treat-name"} name)
                        (dom/br nil nil)
                        (dom/span #js {:className "treat-price"} (str "$" price (when bulkPricing (str " each or $" (get bulkPricing :amount) " for " (get bulkPricing :totalPrice)))))
                        (dom/br nil nil)
                        (dom/button
                          #js {:className "treat-action"
                               :onClick (fn [e] (om/transact! this `[(cart/add ~props) :cart]))}
                          "Add to Cart"))))))

(defui CartItem
  static om/Ident
  (ident [_ {:keys [id]}]
    [:treat/by-id id])
  static om/IQuery
  (query [this]
    [:id :count :price :name :bulkPricing])
  Object
  (render [this]
    (let [{:keys [id count name price bulkPricing] :as props} (om/props this)]
      (dom/div
        #js {:react-key (str "cart-item-" name) :className "cart-item"}
        (dom/div #js {:className "cart-item-name"} name)
        (dom/div #js {:className "cart-item-count"} [
                                                     (dom/span nil (str count "x"))
                                                     (dom/button #js {
                                                                      :className "cart-item-remove"
                                                                      :onClick (fn [e] (om/transact! this `[(cart/remove ~{:id id}) :cart]))
                                                                      } "(remove)")
                                                     ])
        (dom/div #js {:className "cart-item-subtotal"} (str "$" (subtotal count price bulkPricing)))))))

(def treat (om/factory Treat {:keyfn :id}))
(def cart_item (om/factory CartItem {:keyfn :id}))

(defui RootView
  static om/IQuery
  (query [_]
    [{:treats (om/get-query Treat)} {:cart (om/get-query CartItem)}])
  Object
  (render [this]
    (let [{:keys [treats cart] :as props} (om/props this)]
    (dom/div nil
             (dom/h1 nil "Kontor Bakeshop")
             (dom/div #js {:id "treats"} (map treat treats))
             (dom/div #js {:id "cart"} [
                                          (dom/h2 nil "Cart")
                                          (map cart_item cart)
                                          (when (not (empty? cart))
                                            (dom/div #js {:id "cart-total"}
                                                     (dom/div #js{:id "cart-total-label"} "Total")
                                                     (dom/div #js{:id "cart-total-number"}
                                                              (str "$"
                                                                   (apply + (map (fn [item]
                                                                             (let [{:keys [count price bulkPricing] :as props} item]
                                                                               (subtotal count price bulkPricing))) cart))
                                                                   ))))])))))

(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state init-data :parser parser}))

(om/add-root! reconciler RootView (gdom/getElement "app"))

(pp/pprint @reconciler)


