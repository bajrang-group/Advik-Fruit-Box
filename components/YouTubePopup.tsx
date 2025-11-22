"use client";

import { useState } from "react";

export default function YouTubePopup({ videoId }: { videoId: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ▶ Play Button */}
      <button
        onClick={() => setOpen(true)}
        className="video-play-btn"
      >
        <i className="fas fa-play"></i>
      </button>

      {/* 🎥 Modal Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <i className="fas fa-times"></i>
          </button>

          {/* YouTube iframe */}
          <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      )}

      <style jsx>{`
        .video-play-btn {
          width: 90px;
          height: 90px;
          background: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 30px;
          color: #ff7d00;
          cursor: pointer;
          transition: 0.3s;
        }
        .video-play-btn:hover {
          transform: scale(1.1);
          background: #ff7d00;
          color: white;
        }
      `}</style>
    </>
  );
}
