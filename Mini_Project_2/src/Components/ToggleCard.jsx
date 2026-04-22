import { useState } from "react";

function ToggleCard({ title, children }) {
  const [show, setShow] = useState(false);

  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        <button className="toggle-btn" onClick={() => setShow(!show)}>
          {show ? "🙈 Hide" : "👁️ Show"}
        </button>
      </div>

      <div className={`card-content ${show ? "fade-in" : "fade-out"}`}>
        {show && children}
      </div>
    </div>
  );
}

export default ToggleCard;
