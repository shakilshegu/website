const VideoSection = () => {
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
          <div className="aspect-video flex items-center justify-center">
            <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group">
              <svg 
                className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
          
          {/* Video Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="heading-md mb-2">Discover Amazing Places</h3>
            <p className="text-small opacity-90">Watch our curated travel experiences</p>
          </div>
          
          {/* Playlist Thumbnails */}
          <div className="absolute right-6 top-6 space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="w-16 h-12 bg-white/20 backdrop-blur-sm rounded-lg cursor-pointer hover:bg-white/30 transition-colors" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;