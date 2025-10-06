import { Link } from "react-router";
import { useItem } from "./ItemContext";
import { useAuth } from "../auth/AuthContext";

export default function Item() {
  const { itemsQty } = useItem();
  const { token } = useAuth();
  const cartQtyDisplay = itemsQty < 1 ? "" : itemsQty;
  console.log(itemsQty);

  return (
    <>
      {token && (
        <li id="item">
          <Link to={"/cart"}>
            Items:
            <div id="itemQty">{cartQtyDisplay}</div>
          </Link>
        </li>
      )}
    </>
  );
}
