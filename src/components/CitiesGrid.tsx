import type { CityDestination } from '../data/citiesMockData'
import CityCard from './CityCard';

interface CitiesGridProps {
  cities: CityDestination[];
}

const CitiesGrid = ({ cities }: CitiesGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cities.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
};

export default CitiesGrid;