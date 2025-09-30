import { Link } from "react-router-dom";
import products from "../api/_seed";

export default function ProductList() {
  return (
    <div id="carousel">
      {products.map((product, index) => (
        <div key={index} className="product">
          <Link to={`/products/${index}`}>
            <img src={product.imageURL[0]} alt={product.title} />
          </Link>
          <div className="details">
            <div>
              <h1 className="title">{product.title}</h1>
              <Tag product={product} />
            </div>
            <Price product={product} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Price({ product }) {
  return (
    //! NEEDED GPT FOR THIS
    <p className="price">
      {!product.price ? (
        ""
      ) : product.available === false ? (
        <del>${product.price} USD</del>
      ) : !product.discounted ? (
        `$${product.price} USD`
      ) : (
        <>
          <del>${product.price} USD</del> <ins>${product.discounted} USD</ins>
        </>
      )}
    </p>
  );
}

export function Tag({ product }) {
  return (
    //! NEEDED GPT FOR THIS
    <h1 className="tags">
      {"("}
      {product.tags.length > 1 ? product.tags.join(", ") : product.tags}
      {")"}
    </h1>
  );
}
