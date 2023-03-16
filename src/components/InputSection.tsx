import React from "react";
import { FileText, RefreshCw, Trash2, ArrowLeftRight } from "lucide-react";

type ConversionMode = "csv-to-json" | "json-to-csv";

interface InputSectionProps {
  mode: ConversionMode;
  input: string;
  onInputChange: (value: string) => void;
  onConvert: () => void;
  onSwapMode: () => void;
  onClear: () => void;
}

export const InputSection: React.FC<InputSectionProps> = ({
  mode,
  input,
  onInputChange,
  onConvert,
  onSwapMode,
  onClear,
}) => {
  return (
    <div className="bg-box-bg rounded-2xl shadow-xl overflow-hidden transition-all duration-300 border border-border hover:border-primary hover:shadow-2xl">
      <div className="bg-border p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <label className="text-lg font-bold text-text flex items-center gap-2">
            <FileText className="w-5 h-5" />
            {mode === "csv-to-json" ? "CSV Input" : "JSON Input"}
          </label>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary text-box-bg">
            INPUT
          </span>
        </div>
      </div>

      <div className="p-6">
        <textarea
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={
            mode === "csv-to-json"
              ? "name,age,email\nJohn,25,john@example.com\nJane,30,jane@example.com"
              : '[{"name":"John","age":25,"email":"john@example.com"}]'
          }
          className="w-full h-64 p-4 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-300 font-mono text-sm bg-bg-dark text-text placeholder-text-muted focus:border-primary"
        />

        <div className="mt-6 flex gap-3 flex-wrap">
          <button
            onClick={onConvert}
            className="flex-1 min-w-[150px] px-5 py-3 bg-gradient-to-r from-primary to-secondary text-box-bg font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Convert
          </button>
          <button
            onClick={onSwapMode}
            className="px-5 py-3 font-bold rounded-xl transition-all duration-300 bg-bg-light border border-border text-text hover:bg-opacity-80 hover:border-primary flex items-center gap-2"
          >
            <ArrowLeftRight className="w-4 h-4" />
            Swap
          </button>
          <button
            onClick={onClear}
            className="px-5 py-3 font-bold rounded-xl transition-all duration-300 bg-bg-light border border-border-muted text-text-muted hover:border-border hover:text-text flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
