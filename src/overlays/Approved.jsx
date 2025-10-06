import { useAuth } from "../auth/AuthContext";
import useQuery from "../api/useQuery";

export default function Approved() {
  const { token } = useAuth();
  const { loading, error } = useQuery(`/tags`, ["tags"]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {token && (
        <div id="approved">
          <div className="heading">
            <h1>order Approved</h1>
            <p className="description">The transaction was successful.</p>
            <h4 className="status">Thank You!</h4>
          </div>
          {error ? (
            <h3 className="error">{error}</h3>
          ) : (
            <h3>Check Email for Order Summary and Updates</h3>
          )}
        </div>
      )}
    </>
  );
}
