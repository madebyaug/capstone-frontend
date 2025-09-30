import { Link } from "react-router";

export default function Item() {
  return (
    <>
      <li id="item">
        <Link to={"/cart"}>
          Items:<div id="itemQty">2</div>
        </Link>
      </li>
    </>
  );
}
