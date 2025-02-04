import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full max-w-xs bg-gray-200 rounded-full h-4 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      >
        <div className="w-full h-full opacity-30 animate-pulse bg-white"></div>
      </div>
    </div>
  );
};

export default ProgressBar;