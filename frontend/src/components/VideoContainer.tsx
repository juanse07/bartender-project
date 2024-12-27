import React, { ReactNode } from 'react';

interface VideoContainerProps {
  videoSrc: string;
  children?: ReactNode;
  overlay?: boolean;
  overlayOpacity?: number;
}

const VideoContainer: React.FC<VideoContainerProps> = ({
  videoSrc,
  children,
  overlay = true,
  overlayOpacity = 0.4
}) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full"> {/* Ensure full size */}
      <video 
        className="w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {overlay && (
        <div 
          className="absolute inset-0"
          style={{ 
            background: `rgba(0, 0, 0, ${overlayOpacity})`
          }}
        />
      )}
      
      {children && (
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <div className="w-full max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
