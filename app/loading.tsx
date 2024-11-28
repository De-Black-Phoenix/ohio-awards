import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-mainColor"></div>
      {/* Loading Text */}
      <p className="ml-4 text-lg font-semibold text-gray-700">Loading...</p>
    </div>
  );
};

export default Loading;
