import { Link } from "react-router";

export default function Filter() {
  const tags = [
    "All,",
    "Branded,",
    "Discounted,",
    "Object,",
    "Pre-Order,",
    "Study,",
    "Unavailable.",
  ];

  return (
    <>
      {tags.map((tag, index) => {
        return (
          <li key={index} className="tag">
            <Link>{tag}</Link>
          </li>
        );
      })}
    </>
  );
}
