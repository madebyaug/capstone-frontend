import { useState } from "react";
import { useNavigate } from "react-router";

//COMP
import { useItem } from "../comps/ItemContext";

export default function Cart() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { itemsQty, cartTotal, cart } = useItem();
  const backtrack = useNavigate();

  if (loading || !cart) return <p>Items not found</p>;

  console.log(cart);

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
              <button onClick={() => backtrack(-1)}>Return to Continue</button>
            ) : (
              <button type="submit">Proceed to Continue</button>
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
  //! NEEDED HELP HERE INLINE DIFFICULT LAYOUT
  console.log(cart.quantity);
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
          <p className="price">{cartTotal}</p>
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
