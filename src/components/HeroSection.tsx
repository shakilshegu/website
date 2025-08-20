import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/places");
  };
  return (
    <section className="relative w-full py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              <h1 className="heading-xl text-gray-900 max-w-lg">
               Where Every Journey Becomes a Dream Come True
              </h1>
              <p className="text-body text-gray-600 max-w-md">
               Discover the world's most extraordinary destinations through our curated collection of luxury hotels, premium cars, and once-in-a-lifetime experiences.
              </p>
            </div>
            
            {/* Search Form */}
            <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md">
              <div className="space-y-4">
                <div>
                  <label className="text-small text-gray-700 font-medium">Where to?</label>
                  <input 
                    type="text" 
                    placeholder="Search destinations..."
                    className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
               
               <button
                  onClick={handleSearch}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="flex-1">
            <img 
              src="/images/hero-section.svg" 
              alt="Hotel and travel experiences" 
              className="w-full h-auto max-w-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;