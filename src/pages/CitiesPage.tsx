import CitiesGrid from "../components/CitiesGrid";
import { mockCitiesData } from "../data/citiesMockData";

const CitiesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="heading-xl text-gray-900">Places</h1>
            <p className="text-body text-gray-500 max-w-2xl mx-auto">
              Discover amazing destinations around the world
            </p>
          </div>

          {/* Cities Grid */}
          <CitiesGrid cities={mockCitiesData} />
        </div>
      </main>
    </div>
  );
};

export default CitiesPage;
