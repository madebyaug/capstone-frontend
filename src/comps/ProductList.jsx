import { Link } from "react-router-dom";
import useQuery from "../api/useQuery";

export default function ProductList() {
  // get Products from API
  const {
    data: products,
    loading,
    error,
  } = useQuery(`/products`, ["products"]);

  if (loading || !products) return <h1 className="tag">loading...</h1>;
  if (error) return <p>{error}</p>;

  console.log(products);

  return (
    <ul id="carousel">
      {products.map((product) => (
        <li key={product.id} className="product">
          {product.price === null ? (
            <img src={product.images[0]} alt={product.title} />
          ) : (
            <Link to={`/products/${product.id}`} state={{ product }}>
              <img src={product.images[0]} alt={product.title} />
            </Link>
          )}
          <div className="details">
            <div>
              <h1 className="title">{product.title}</h1>
            </div>
            <Price product={product} />
          </div>
        </li>
      ))}
    </ul>
  );
}

function Price({ product }) {
  console.log(product.price);

  return (
    //! NEEDED GPT FOR - Inline Operator
    <p className="price">
      {!product.price ? (
        ""
      ) : !product.available ? (
        <del>{`${product.price} USD`}</del>
      ) : product.discounted ? (
        <>
          <del>{`${product.price} USD`}</del>
          <ins>{`${product.discounted} USD`}</ins>
        </>
      ) : (
        `$${product.price} USD`
      )}
    </p>
  );
}
