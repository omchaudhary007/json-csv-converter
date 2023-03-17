import React, { useState } from "react";
import { csvToJson, jsonToCsv } from "./utils/converters";
import { Header } from "./components/Header";
import { InputSection } from "./components/InputSection";
import { OutputSection } from "./components/OutputSection";
import { ErrorMessage } from "./components/ErrorMessage";

type ConversionMode = "csv-to-json" | "json-to-csv";

const App: React.FC = () => {
  const [mode, setMode] = useState<ConversionMode>("csv-to-json");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleConvert = () => {
    setError("");
    try {
      if (!input.trim()) {
        setError("Please enter some data to convert");
        return;
      }

      if (mode === "csv-to-json") {
        const result = csvToJson(input);
        if (result.length === 0 && input.trim()) {
          throw new Error("Failed to convert CSV. Check your format.");
        }
        setOutput(JSON.stringify(result, null, 2));
      } else {
        const jsonData = JSON.parse(input);
        if (!Array.isArray(jsonData)) {
          throw new Error("JSON must be an array of objects");
        }
        const result = jsonToCsv(jsonData);
        setOutput(result);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Conversion failed");
      setOutput("");
    }
  };

  const handleSwapMode = () => {
    setMode(mode === "csv-to-json" ? "json-to-csv" : "csv-to-json");
    setInput(output);
    setOutput(input);
    setError("");
  };

  const handleCopyOutput = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      alert("Copied to clipboard!");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const handleDownload = () => {
    if (!output) {
      setError("Nothing to download");
      return;
    }

    const element = document.createElement("a");
    const file = new Blob([output], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `output.${mode === "csv-to-json" ? "json" : "csv"}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-bg-dark transition-colors duration-300">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <InputSection
            mode={mode}
            input={input}
            onInputChange={setInput}
            onConvert={handleConvert}
            onSwapMode={handleSwapMode}
            onClear={handleClear}
          />

          <OutputSection
            mode={mode}
            output={output}
            onCopy={handleCopyOutput}
            onDownload={handleDownload}
          />
        </div>
        <ErrorMessage message={error} />
      </main>
    </div>
  );
};

export default App;
