import { Link, useLocation } from "react-router-dom";
import { useItem } from "./ItemContext";
import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";

export default function ProductDetails() {
  const location = useLocation();
  const { product } = location.state;
  const { addItem, removeItem, cart, itemQty } = useItem();
  const { token } = useAuth();

  if (!product) return <p>Product not found</p>;

  console.log(product.title);
  console.log(product);
  console.log(typeof addItem);
  console.log(typeof removeItem);

  // these should be the same
  console.log(cart);
  console.log(itemQty);
  return (
    <>
      <div id="carousel">
        {product.images.map((img, index) => {
          return (
            <img key={index} src={img} alt={`${product.title}_${index + 1}`} />
          );
        })}
      </div>
      <div className="details">
        <article>
          <div className="heading">
            <h1 className="title">{product.title}</h1>
            <Tags product={product} />
          </div>
          <div className="body">
            <p className="description">{product.description}</p>
            <p className="caption">
              <u>SPEC:</u>
              {` ${product.spec}`}
            </p>
          </div>
        </article>
        {product.available ? (
          <div className="cta">
            <Price product={product} />
            {token && (
              <div className="buttons">
                <div id="add_remove">
                  <button onClick={() => addItem(product)} id="addItem">
                    Add Item
                  </button>
                  <button onClick={() => removeItem(product)} id="removeItem">
                    Remove Item
                  </button>
                </div>
                <Link to={`#`}>
                  <p className="caption">
                    Read Terms of Service Before Checkout
                  </p>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="cta">
            <Price product={product} />
          </div>
        )}
      </div>
    </>
  );
}

export function Price({ product }) {
  return (
    //! NEEDED GPT FOR THIS - FOR INLINE OPERATOR
    <p className="price">
      {!product.price ? (
        ""
      ) : product.available === false ? (
        <del className="highlighted">{`$${product.price}`}</del>
      ) : !product.discounted ? (
        <ins className="highlighted">{`$${product.price}`}</ins>
      ) : (
        <>
          <div className="discounted">
            <p>Retail:</p>
            <del>{`$${product.price} USD`}</del>
          </div>
          <ins className="highlighted">${product.discounted}</ins>
        </>
      )}
    </p>
  );
}

export function Tags({ product }) {
  const { data: tags } = useQuery(`/products/${product.id}/tags`, [
    "product-tags",
  ]);

  if (!tags) return <h1>Product tags not found</h1>;

  console.log(tags);
  console.log(tags.length);

  //! NEEDED GPT FOR THIS - FOR JOIN
  const tagDisplay = tags
    .map((tag, index) => {
      console.log(tags[index].name);
      return tag.name;
    })
    .join(", ");

  console.log(tagDisplay);

  return <h1 className="tags">{`( ${tagDisplay} )`}</h1>;
}
