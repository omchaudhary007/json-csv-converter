import React from "react";
import { FileText, Copy, Download } from "lucide-react";

type ConversionMode = "csv-to-json" | "json-to-csv";

interface OutputSectionProps {
  mode: ConversionMode;
  output: string;
  onCopy: () => void;
  onDownload: () => void;
}

export const OutputSection: React.FC<OutputSectionProps> = ({
  mode,
  output,
  onCopy,
  onDownload,
}) => {
  return (
    <div className="bg-box-bg rounded-2xl shadow-xl overflow-hidden transition-all duration-300 border border-border hover:border-primary hover:shadow-2xl">
      <div className="bg-border p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <label className="text-lg font-bold text-text flex items-center gap-2">
            <FileText className="w-5 h-5" />
            {mode === "csv-to-json" ? "JSON Output" : "CSV Output"}
          </label>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-box-bg">
            OUTPUT
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="w-full h-64 p-4 rounded-xl border border-border overflow-auto font-mono text-sm bg-bg-dark text-primary transition-all duration-300">
          {output ? (
            <pre className="whitespace-pre-wrap break-words">{output}</pre>
          ) : (
            <span className="text-text-muted">Output will appear here...</span>
          )}
        </div>

        <div className="mt-6 flex gap-3 flex-wrap">
          <button
            onClick={onCopy}
            disabled={!output}
            className={`flex-1 min-w-[150px] px-5 py-3 font-bold rounded-xl transition-all duration-300 transform flex items-center justify-center gap-2 ${
              output
                ? "bg-primary text-box-bg hover:shadow-lg hover:scale-105 active:scale-95"
                : "bg-border-muted text-text-muted cursor-not-allowed opacity-50"
            }`}
          >
            <Copy className="w-4 h-4" />
            Copy
          </button>
          <button
            onClick={onDownload}
            disabled={!output}
            className={`flex-1 min-w-[150px] px-5 py-3 font-bold rounded-xl transition-all duration-300 transform flex items-center justify-center gap-2 ${
              output
                ? "bg-secondary text-box-bg hover:shadow-lg hover:scale-105 active:scale-95"
                : "bg-border-muted text-text-muted cursor-not-allowed opacity-50"
            }`}
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};
