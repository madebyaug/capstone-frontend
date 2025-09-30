import { Link } from "react-router";
import User from "../comps/User";
import ProductDetails from "../comps/ProductDetail";
import Item from "../comps/Item";

export default function Product() {
  return (
    <main id="product">
      <header>
        <div>
          <ul id="tags">
            <Item />
          </ul>
          <User />
        </div>
        <nav>
          <Link id="about" to="#">
            shop.aug.services
          </Link>
          <Link id="back" to="/">
            continue shopping
          </Link>
        </nav>
      </header>
      <footer>
        <ProductDetails />
      </footer>
    </main>
  );
}
