"use client";

import { useEffect, useState } from "react";

export default function WhatsAppPopup() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "918855996633";

  const handleSend = () => {
    if (!message.trim()) return;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setMessage("");
  };

  return (
    <>
      {/* Floating WA Button */}
 <button
  onClick={() => setOpen(true)}
  className="fixed bottom-5 right-5 bg-green-500 w-14 h-14 !rounded-full flex items-center justify-center shadow-xl text-white text-3xl hover:scale-110 transition z-99999"
>
  <i className="fab fa-whatsapp"></i>
</button>


      {/* Popup */}
      {open && (
        <div
          className="!fixed bottom-20 right-5 w-72 bg-white !rounded-xl !shadow-xl p-4 !animate-[popup_0.3s_ease]"
          style={{ zIndex: 99999 }}
        >
          {/* Header */}
          <div className="flex !justify-between items-center bg-green-600 text-white p-3 !rounded-lg -mt-4 -mx-4 mb-3">
            <span className="!font-semibold !text-base">👋 Chat with us on WhatsApp!</span>
            <button onClick={() => setOpen(false)} className="!text-lg">×</button>
          </div>

          {/* Message box */}
          <div className="!bg-gray-100 !rounded-lg !p-3 !mb-3 !shadow-inner !text-sm">
            <p className="!font-medium">Hi! 👋</p>
            <p className="!mt-1">Type your message below. We’ll respond quickly! 🔥</p>
            <p className="!mt-3 !font-semibold">Advik Fruit Box</p>
          </div>

          {/* Input */}
          <div className="flex !items-center !bg-gray-100 !rounded-full px-3">
            <input
              type="text"
              placeholder="Type here..."
              className="flex-1 !bg-transparent !outline-none p-2 text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={handleSend}
              className="bg-green-600 !text-white !p-2 !rounded-full hover:bg-green-700 transition"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes popup {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
