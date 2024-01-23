import { useState } from "react";
const MAX_LENGTH = 20;
export default function Tweets() {
  const [text, setText] = useState("");
  const handleChange = (newText) => {
    // if (newText.length > MAX_LENGTH) return;
    setText(newText);
  };
  return (
    <div>
      <textarea
        rows={3}
        value={text}
        onChange={(event) => handleChange(event.target.value)} style={{border: text.length > MAX_LENGTH? "10px solid red": "unset"}}
      ></textarea>
      <div>Remaining: {MAX_LENGTH - text.length}</div>
      <button disabled={text.length > MAX_LENGTH}>Tweet</button>
    </div>
  );
}
