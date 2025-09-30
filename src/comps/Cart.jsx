import { useState } from "react";

export default function Cart() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div id="cart">
        <div className="cta_header">
          <h1>
            item Summary (<div id="itemQty">2</div>)
          </h1>
        </div>
      </div>
    </>
  );
}
