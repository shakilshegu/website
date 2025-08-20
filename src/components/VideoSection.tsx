import { useState } from "react";

const VideoSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  
  const videos = [
    {
      id: 1,
      title: "Discover Amazing Places",
      description: "Watch our curated travel experiences",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 2,
      title: "Hidden Gems Around the World",
      description: "Explore breathtaking destinations",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      poster: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 3,
      title: "Adventure Awaits",
      description: "Your next journey starts here",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-11 space-y-4">
          <h2 className="heading-xl text-gray-900">🎬 Videos</h2>
          <p className="text-body text-gray-500 max-w-2xl">
            Discover Chisfis playlist videos
          </p>
        </div>
        
        {/* Video Player */}
        <div className="relative bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl overflow-hidden">
          <div className="aspect-video">
            <video
              className="w-full h-full object-cover"
              controls
              poster={videos[currentVideo].poster}
              key={currentVideo}
            >
              <source src={videos[currentVideo].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Video Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 text-white pointer-events-none">
            <h3 className="heading-md mb-2">{videos[currentVideo].title}</h3>
            <p className="text-small opacity-90">{videos[currentVideo].description}</p>
          </div>
          
          {/* Playlist Thumbnails */}
          <div className="absolute right-6 top-6 space-y-3">
            {videos.map((video, index) => (
              <div 
                key={video.id} 
                className={`w-16 h-12 backdrop-blur-sm rounded-lg cursor-pointer transition-colors flex items-center justify-center ${
                  currentVideo === index 
                    ? 'bg-white/40 ring-2 ring-white' 
                    : 'bg-white/20 hover:bg-white/30'
                }`}
                onClick={() => setCurrentVideo(index)}
              >
                <span className="text-white text-sm font-medium">{video.id}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;