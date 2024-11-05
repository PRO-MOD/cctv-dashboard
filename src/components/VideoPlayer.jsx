import React, { useState, useEffect } from 'react';

const VideoPlayer = ({ onLogout, cameraName, videoSource }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Loading for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-[#420000] to-[#7a0000]">
      {/* Logout Button */}
      <button
        className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        onClick={onLogout}
      >
        Logout
      </button>

      {/* Display camera name */}
      <div className="text-center text-white text-lg font-bold mb-2">
        {cameraName}
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center text-white">
          <div className="text-2xl mb-4">Connecting to CCTV Feed...</div>
          <div className="loader mb-4 border-t-4 border-b-4 border-red-500 w-16 h-16 rounded-full animate-spin"></div>
          <div className="text-gray-500">Please wait...</div>
        </div>
      ) : (
        <div className="relative w-[80%] h-[80%] bg-black border border-gray-700 p-4 rounded shadow-lg">
          <video
            src={videoSource}
            controls
            autoPlay
            className="w-full h-full object-cover border-8 border-gray-800"
            onError={(e) => {
              console.error("Video failed to load:", e);
              alert("Error loading video. Please try again later.");
            }}
          />
          <div className="absolute top-2 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            LIVE
          </div>
        </div>
      )}

      {/* Show "Get access to Aocc" link if AOCC camera is logged in */}
      {cameraName === 'Camera 4 - AOCC' && (
        <div className="mt-4 text-center">
          <a
            href="https://chinmay0910.itch.io/aviationchallenge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Get access to Aocc
          </a>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
