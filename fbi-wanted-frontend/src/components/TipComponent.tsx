import React, { useState } from "react";
import AuthModal from "./auth/AuthModal";

const TipComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Give a Tip
      </button>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default TipComponent;
