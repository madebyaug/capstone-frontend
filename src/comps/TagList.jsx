import { Link } from "react-router";
import useQuery from "../api/useQuery";

export default function TagList() {
  // get Tags from API
  const { data: tags, loading, error } = useQuery(`/tags`, ["tags"]);

  if (loading || !tags) return <p className="tag">loading...</p>;
  if (error) return <p>{error}</p>;

  console.log(tags);

  // const tags = [
  //   "All,",
  //   "Branded,",
  //   "Discounted,",
  //   "Object,",
  //   "Pre-Order,",
  //   "Study,",
  //   "Unavailable.",
  // ];

  return (
    <>
      {tags.map((tag, index) => {
        // Googled - https://stackblitz.com/edit/react-ts-hqgb55?file=index.tsx,App.tsx
        const last = index === tags.length - 1;
        return (
          <li key={index} className="tag">
            {!last ? (
              <Link>{`${tag.name}, `}</Link>
            ) : (
              <Link>{`${tag.name}.`}</Link>
            )}
          </li>
        );
      })}
    </>
  );
}
