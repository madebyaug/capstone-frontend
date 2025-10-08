import { useState } from "react";
import { useNavigate } from "react-router";
import useMutation from "../api/useMutation";

//COMP
import { useItem } from "../comps/ItemContext";

export default function Cart() {
  const { itemsQty, cartTotal, cart } = useItem();
  const navigate = useNavigate();

  const {
    mutate: add,
    loading,
    error,
  } = useMutation("POST", "/", ["orders_products"]);

  console.log(cart);

  const submit = (cart) => {
    add({ cart });
    navigate("/order/approved");
  };

  const submitOrder = (cart) => {
    if (cart.length > 0) {
      const newCart = cart.map((cartItem) => ({
        ...cartItem,
        orderId: cartItem.id,
        productId: cartItem.id,
        quantity: cartItem.quantity,
      }));
      setCart(newCart);
      // submit();
    }
    console.log(cart);
  };
  if (loading || !cart) return <p>Items not found</p>;
  // console.log(cart);
  // console.log(cart[0].title);
  // console.log(itemsQty);

  return (
    <>
      <div id="cart">
        <div className="heading">
          <h1>
            item Summary
            <div id="itemQty">{` ( ${itemsQty} )`}</div>
          </h1>
          <div>
            <p className="description">Review items before checkout.</p>
            {!cart.length ? "" : <h6>scroll through the item BIN below</h6>}
          </div>
        </div>
        <form>
          <CartList cartTotal={cartTotal} cart={cart} />
          <div>
            {!cart.length ? (
              <button onClick={() => navigate(-1)}>Return to Page</button>
            ) : (
              <button onClick={submitOrder}>Proceed to Continue</button>
            )}
            {error ? (
              <h3 className="error">error{error}</h3>
            ) : (
              <>
                <h3>Read Terms of Service Before Checkout.</h3>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export function CartList({ cartTotal, cart }) {
  //! NEEDED GPT FOR - Total display formatting
  // console.log(cart[0].quantity);
  // console.log(cart[0].title);
  const totalDisplay = cartTotal.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  console.log(totalDisplay);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <ul className="itemslist">
            {cart.map((item, index) => (
              <li key={index} className="item">
                <h1>{item.title}</h1>
                <div>
                  <h1>{`${item.price} USD`}</h1>
                  <h1>({item.quantity})</h1>
                </div>
              </li>
            ))}
          </ul>

          <h3>SUBTOTAL BEFORE TAXES AND SHIPPING</h3>
          <p className="price">{`$${totalDisplay}`}</p>
        </>
      ) : (
        <ul className="itemslist">
          <li className="item onlyitem">
            <h1>EMPTY ITEM BIN</h1>
          </li>
        </ul>
      )}
    </>
  );
}
