import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  function analyzeAura() {
    const input = text.toLowerCase();

    if (
      input.includes("sleep") ||
      input.includes("tired") ||
      input.includes("3am")
    ) {
      setResult(
        "🌙 Sleep-Deprived Philosopher\n\nYou overthink life at night and somehow function on dangerously low sleep."
      );
    } else if (
      input.includes("study") ||
      input.includes("exam") ||
      input.includes("assignment")
    ) {
      setResult(
        "📚 Chaos Academic\n\nYour life looks messy externally, but you survive everything at the last second."
      );
    } else if (
      input.includes("alone") ||
      input.includes("lonely") ||
      input.includes("ignored")
    ) {
      setResult(
        "🖤 Emotionally Unavailable Genius\n\nYou act detached, but internally you feel things very deeply."
      );
    } else if (
      input.includes("music") ||
      input.includes("spotify") ||
      input.includes("playlist")
    ) {
      setResult(
        "🎧 Main Character Syndrome\n\nYour playlists carry more emotional lore than your conversations."
      );
    } else {
      setResult(
        "💻 Chronically Online Protagonist\n\nYour humor, personality, and coping mechanisms were shaped by the internet."
      );
    }
  }

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        backgroundColor: "#111",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "48px" }}>AuraScore</h1>

      <p style={{ fontSize: "18px" }}>
        Describe yourself and discover your internet aura.
      </p>

      <textarea
        rows="6"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Example: I sleep at 3am and listen to sad playlists."
        style={{
          marginTop: "20px",
          padding: "15px",
          fontSize: "16px",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "600px",
        }}
      />

      <br />
      <br />

      <button
        onClick={analyzeAura}
        style={{
          padding: "15px 25px",
          fontSize: "18px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Analyze My Aura
      </button>

      {result && (
        <div
          style={{
            marginTop: "40px",
            backgroundColor: "#222",
            padding: "25px",
            borderRadius: "15px",
            maxWidth: "700px",
            whiteSpace: "pre-line",
          }}
        >
          <h2>Your Result</h2>

          <p style={{ fontSize: "18px" }}>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;
