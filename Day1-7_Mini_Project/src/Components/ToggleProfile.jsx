import { useState } from "react";

function ToggleProfile() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Profile" : "Show Profile"}
      </button>

      {show && (
        <div>
          <h3>Indresh</h3>
          <p>Frontend Developer</p>
        </div>
      )}
    </div>
  );
}

export default ToggleProfile;