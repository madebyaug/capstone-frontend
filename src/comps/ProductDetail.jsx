import { Link, useParams } from "react-router-dom";
import products from "../api/_seed";

export default function ProductDetails({}) {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <div id="carousel">
        {product.imageURL.map((img, index) => {
          return <img key={index} src={img} alt="new" />;
        })}
      </div>
      <div className="details">
        <article>
          <div className="heading">
            <h1 className="title">{product.title}</h1>
            <Tag product={product} />
          </div>
          <div className="body">
            <p className="description">{product.description}</p>
            <p className="spec">{product.spec}</p>
          </div>
        </article>
        <div className="cta">
          <Price product={product} />
          <div className="add_remove">
            <button>Add Item</button>
            <button>Remove Item</button>
          </div>
          <Link to={`#`}>
            <p className="caption">Read Terms of Service Before Checkout</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export function Price({ product }) {
  return (
    //! NEEDED GPT FOR THIS
    <p className="price">
      {!product.price ? (
        ""
      ) : product.available === false ? (
        <del className="highlighted">{`$${product.price}`}</del>
      ) : !product.discounted ? (
        <ins className="highlighted">{`$${product.price}`}</ins>
      ) : (
        <div className="discounted">
          <span>
            {"Retail: "}
            <del>{`$${product.price} USD`}</del>
          </span>
          <ins className="highlighted">${product.discounted} USD</ins>
        </div>
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
