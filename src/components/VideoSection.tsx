import { useState } from "react";

const VideoSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(false);
  
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
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 md:mb-11 space-y-3 md:space-y-4">
          <h2 className="heading-lg md:heading-xl text-gray-900">🎬 Videos</h2>
          <p className="text-small md:text-body text-gray-500 max-w-2xl">
            Discover Chisfis playlist videos
          </p>
        </div>
        
        {/* Video Container */}
        <div className="space-y-4 md:space-y-0">
          {/* Main Video Player */}
          <div className="relative bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl md:rounded-2xl overflow-hidden">
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
            <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 md:right-auto text-white pointer-events-none">
              <h3 className="heading-sm md:heading-md mb-1 md:mb-2 pr-20 md:pr-0">
                {videos[currentVideo].title}
              </h3>
              <p className="text-caption md:text-small opacity-90 pr-20 md:pr-0">
                {videos[currentVideo].description}
              </p>
            </div>
            
            {/* Desktop Playlist Thumbnails */}
            <div className="hidden md:flex absolute right-6 top-6 flex-col space-y-3">
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

            {/* Mobile Playlist Toggle Button */}
            <button 
              className="md:hidden absolute top-3 right-3 bg-black/30 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-black/40 transition-colors"
              onClick={() => setShowPlaylist(!showPlaylist)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Playlist */}
          {showPlaylist && (
            <div className="md:hidden bg-white rounded-xl p-4 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h4 className="heading-sm text-gray-900">Video Playlist</h4>
                <button 
                  onClick={() => setShowPlaylist(false)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-3">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      currentVideo === index
                        ? 'bg-orange-50 border border-orange-200'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      setCurrentVideo(index);
                      setShowPlaylist(false);
                    }}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium ${
                      currentVideo === index
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {video.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-small font-medium text-gray-900 truncate">
                        {video.title}
                      </h5>
                      <p className="text-caption text-gray-500 truncate">
                        {video.description}
                      </p>
                    </div>
                    {currentVideo === index && (
                      <div className="flex-shrink-0 text-orange-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Desktop Horizontal Playlist Alternative */}
          <div className="hidden lg:flex space-x-4 mt-6">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`flex-1 relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  currentVideo === index
                    ? 'ring-2 ring-orange-500 shadow-lg'
                    : 'hover:shadow-md'
                }`}
                onClick={() => setCurrentVideo(index)}
              >
                <div className="aspect-video bg-gray-200">
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      currentVideo === index
                        ? 'bg-orange-500 text-white'
                        : 'bg-white/80 text-gray-600'
                    }`}>
                      <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <h5 className="text-caption text-white font-medium truncate">
                    {video.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;