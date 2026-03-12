import { useState, useEffect } from "react";

export default function CopyToClipboard({ text }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch (error) {
      console.error(error,"Copy failed:");
    }
  }


  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <button onClick={handleCopy}>Copy Hex</button>
      {copied && (
        <span
          style={{
            position: "absolute",
            top: "-25px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#000",
            color: "#fff",
            padding: "2px 6px",
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          Copied!
        </span>
      )}
    </div>
  );
}