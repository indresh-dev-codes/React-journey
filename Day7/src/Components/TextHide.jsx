import { useState } from "react";

function Show() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Text" : "Show Text"}
      </button>

      {show && <h2>Indresh</h2>}
    </div>
  );
}

export default Show;
