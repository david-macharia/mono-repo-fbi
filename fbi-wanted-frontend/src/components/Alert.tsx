import React from "react";
import { AlertTriangle, Clipboard } from "lucide-react";

type Props = {
  generatedId: string;
};

const CopyIdAlert = ({ generatedId }: Props) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedId);
    alert("ID copied to clipboard!");
  };

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-xl shadow-md flex items-start space-x-4">
      <AlertTriangle className="w-6 h-6 mt-1 text-yellow-500" />
      <div>
        <p className="font-semibold">Important!</p>
        <p className="text-sm mt-1">
          Your ID{" "}
          <span className="font-mono bg-white px-2 py-0.5 rounded text-gray-800 border">
            {generatedId}
          </span>{" "}
          has been generated. Please copy and store it safely — you’ll need it
          later and it cannot be recovered if lost.
        </p>
        <button
          onClick={copyToClipboard}
          className="mt-2 inline-flex items-center px-3 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded shadow"
        >
          <Clipboard className="w-4 h-4 mr-2" />
          Copy ID
        </button>
      </div>
    </div>
  );
};

export default CopyIdAlert;
