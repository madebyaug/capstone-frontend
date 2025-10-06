import { Link } from "react-router";

// COMPS
import TagList from "../comps/TagList";
import User from "../comps/User";
import ProductList from "../comps/ProductList";
import Item from "../comps/Item";

export default function Home() {
  return (
    <main id="home">
      <header>
        <div>
          <ul id="tags">
            <Item />
            <TagList />
          </ul>
          <User />
        </div>
        <nav>
          <Link id="about" to="#">
            shop.aug.services
          </Link>
        </nav>
      </header>
      <footer>
        <ProductList />
      </footer>
    </main>
  );
}
