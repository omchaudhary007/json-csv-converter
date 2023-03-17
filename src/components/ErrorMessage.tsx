import React from "react";
import { AlertTriangle } from "lucide-react";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="rounded-2xl p-6 shadow-md shadow-blue-200 bg-bg-light border-l-4 border-secondary text-text mb-8 animate-pulse">
      <p className="font-bold text-xl flex items-center gap-2">
        <AlertTriangle className="w-5 h-5" />
        Error
      </p>
      <p className="text-sm mt-2 text-text-muted">{message}</p>
    </div>
  );
};
