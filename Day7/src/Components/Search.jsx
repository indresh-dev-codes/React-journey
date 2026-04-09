import { useState } from "react";
function Search() {
  const [text, setText] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>You typed: {text}</p>
    </div>
  );
}
export default Search;
