import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import jsPDF from "jspdf";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const res = await fetch("http://127.0.0.1:8000/api/chat/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();

    setMessages([...messages, { user: input, bot: data.reply }]);
    setInput("");
  };

  // ✅ Export Chat as PDF
  const exportPDF = () => {
    const doc = new jsPDF();

    let y = 10;
    const lineHeight = 8;
    const pageHeight = doc.internal.pageSize.height;

    messages.forEach((msg, index) => {
      const userText = `You: ${msg.user}`;
      const aiText = `AI: ${msg.bot}`;

      const userLines = doc.splitTextToSize(userText, 180);
      const aiLines = doc.splitTextToSize(aiText, 180);

      if (y + userLines.length * lineHeight > pageHeight - 20) {
        doc.addPage();
        y = 10;
      }

      doc.text(userLines, 10, y);
      y += userLines.length * lineHeight + 4;

      if (y + aiLines.length * lineHeight > pageHeight - 20) {
        doc.addPage();
        y = 10;
      }

      doc.text(aiLines, 10, y);
      y += aiLines.length * lineHeight + 10;
    });

    doc.save("Chat_History.pdf");
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">SmartHelp AI</h1>

      <div
        ref={chatRef}
        className="w-full max-w-xl bg-white shadow p-4 rounded-lg flex flex-col h-[80vh]"
      >
        <div className="flex-1 overflow-y-auto space-y-4">
          {messages.map((msg, i) => (
            <div key={i}>
              <div className="text-sm font-semibold text-blue-600 mb-1">
                You
              </div>
              <div className="bg-blue-100 p-3 rounded mb-3">
                {msg.user}
              </div>

              <div className="text-sm font-semibold text-green-600 mb-1">
                AI
              </div>
              <div className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
                <ReactMarkdown>{msg.bot}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <input
            className="flex-1 border p-2 rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Send
          </button>

          <button
            onClick={exportPDF}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Export Chat
          </button>
        </div>
      </div>
      <footer className="text-xs text-gray-500 mt-2">
        © 2025 | Built by Vishal Sinha | AI-Powered Chat Application
      </footer>
    </div>
  );
}

export default App;
