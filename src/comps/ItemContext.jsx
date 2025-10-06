import { useContext, createContext, useState } from "react";

const ItemContext = createContext();

export function ItemProvider({ children }) {
  const [itemsQty, setItemsQty] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState([]);

  // item(cart) needs to contain an arry of objects
  // for each object/item product.id + quantity
  // look through arry and determine if item has been selected

  // -- Thanks to Tim
  function addItem(product) {
    // in cart it finds and matches the item and cart item
    const existing = cart.find((cartItem) => cartItem.id === product.id);

    // if the item is found
    if (existing) {
      // we create a new cart maps throught the cart
      const newCart = cart.map((cartItem) =>
        cartItem.id === product.id
          ? // locate and copy the item and updates its quantity
            { ...cartItem, quantity: cartItem.quantity + 1 }
          : // otherwise we do nothing
            cartItem
      );
      // Update the carts with new data
      setCart(newCart);
      console.log(newCart);
      // Update the item quantity display
      setItemsQty(itemsQty + 1);
      console.log("1x product added");
      console.log(cart);
      console.log(cart.length);
    } else {
      // otherwise we revert to the carts original quantity
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeItem() {
    // Only call funtion if itemQty is greater than 0
    if (itemsQty > 0) {
      // on button click, function sets "ItemQty" state
      setItemsQty(itemsQty - 1);
      console.log("product was added to item - 1");
    }
  }

  const value = {
    itemsQty,
    setItemsQty,
    addItem,
    removeItem,
    cartTotal,
    setCartTotal,
    cart,
    setCart,
  };
  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
}

export function useItem() {
  const context = useContext(ItemContext);
  if (!context) throw Error("useItem must be used within an AuthProvider");
  return context;
}
