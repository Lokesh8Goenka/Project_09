import { useState } from "react";

function MCQGenerator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const generateMCQ = async () => {
    const response = await fetch(`https://7b47-34-82-63-72.ngrok-free.app/generate?text=${encodeURIComponent(input)}`);
    const data = await response.json();
    setOutput(data.generated_text);
  };

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text" />
      <button onClick={generateMCQ}>Generate</button>
      <p>{output}</p>
    </div>
  );
}

export default MCQGenerator;
