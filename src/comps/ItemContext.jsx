import { useContext, createContext, useState } from "react";

const ItemContext = createContext();

export function ItemProvider({ children }) {
  const [itemsQty, setItemsQty] = useState(0);
  const [cart, setCart] = useState([]);

  // item(cart) needs to contain an arry of objects
  // for each object/item product.id + quantity
  // look through arry and determine if item has been selected

  // -- Thanks to Tim
  function addItem(product) {
    // in cart it finds and matches the item and cart item
    const existing = cart.find((cartItem) => cartItem.id === product.id);
    // Update the item quantity display
    setItemsQty(itemsQty + 1);
    console.log("1x product added");
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
      console.log(cart);
      console.log(cart.length);
    } else {
      // otherwise we revert to the carts original quantity
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeItem(product) {
    const existing = cart.find((cartItem) => cartItem.id === product.id);
    if (itemsQty > 0) {
      setItemsQty(itemsQty - 1);
      console.log("product was added to item - 1");
    }
    if (existing) {
      const newCart = cart.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  // orderId, productId, quantity

  // function removeItem() {
  //   // Only call funtion if itemQty is greater than 0
  //   if (itemsQty > 0) {
  //     // on button click, function sets "ItemQty" state
  //     setItemsQty(itemsQty - 1);
  //     console.log("product was added to item - 1");
  //   }
  // }

  // GrandTotal
  const [cartTotal, setCartTotal] = useState(0);
  // map through cart items and retrieve items.price and items.quantity
  console.log(cart);

  if (cart.length) {
    const total = cart.reduce((sum, item) => {
      const itemTotal = item.quantity * item.price;
      sum = sum + itemTotal;
      console.log(sum);
      return sum;
    }, 0);

    if (cartTotal !== total) {
      setCartTotal(total);
    }
  } else {
    cart;
  }

  // cart.map((items) => {
  //   let itemTotal = 0;
  //   console.log(items);
  //   console.log(items.quantity);
  //   console.log(items.price);
  //   itemTotal = items.quantity * items.price;
  //   console.log(itemTotal);
  //   // console.log(cartTotal + itemTotal);
  //  const total = cartTotal + itemTotal
  // });

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
