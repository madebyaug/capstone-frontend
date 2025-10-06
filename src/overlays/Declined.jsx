import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";

export default function Approved() {
  const { token } = useAuth();
  const { loading, error } = useQuery(`/tags`, ["tags"]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {token && (
        <div id="declined">
          <div className="heading">
            <h1>Order Declined</h1>
            <p className="description">The transaction was unsuccessful.</p>
            <h4 className="status">Try Again!</h4>
          </div>
          {error ? (
            <h3 className="error">{error}</h3>
          ) : (
            <h3>Check Personal and Payment Details at Checkout</h3>
          )}
        </div>
      )}
    </>
  );
}
