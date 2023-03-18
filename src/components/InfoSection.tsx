import React from "react";
import { FileText, ArrowRight, RefreshCw, Download } from "lucide-react";

export const InfoSection: React.FC = () => {
  const infoItems = [
    {
      icon: FileText,
      title: "CSV to JSON",
      description: "Paste CSV with headers in the first row",
    },
    {
      icon: FileText,
      title: "JSON to CSV",
      description: "Paste a JSON array of objects",
    },
    {
      icon: RefreshCw,
      title: "Instant Conversion",
      description: "Click convert or swap directions instantly",
    },
    {
      icon: Download,
      title: "Download Results",
      description: "Copy or download your converted data",
    },
  ];

  return (
    <div className="bg-box-bg rounded-2xl p-8 shadow-xl border border-border hover:border-primary transition-all duration-300">
      <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
        <ArrowRight className="w-5 h-5 text-primary" />
        How to Use
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {infoItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-text">{item.title}</p>
                <p className="text-text-muted text-sm mt-1">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
