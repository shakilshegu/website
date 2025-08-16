import { useState } from "react";
import { formatPrice } from "../data/citiesMockData";
import type { CityDestination } from "../data/citiesMockData";
import {
  Star,
  MapPin,
  Calendar,
  Users,
  Award,
  X,
  Clock,
  Shield,
  CheckCircle,
  AlertCircle,
  Camera,
  Utensils,
  Car,
  Globe,
} from "lucide-react";

interface CityCardProps {
  city: CityDestination;
}

const CityCard = ({ city }: CityCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="group relative cursor-pointer h-[420px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={city.image}
            alt={`${city.destination} cityscape`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          {city.discount && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {city.discount}
            </span>
          )}
          {city.badge && (
            <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <Award className="w-3 h-3" />
              {city.badge}
            </span>
          )}
        </div>

        {/* Rating - Top Right */}
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-lg px-2 py-1 z-10">
          <div className="flex items-center gap-1 text-white text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{city.rating}</span>
            <span className="text-xs opacity-75">({city.reviewCount})</span>
          </div>
        </div>

        {/* Default Content */}
        <div
          className={`absolute inset-0 p-6 flex flex-col justify-end transition-all duration-300 ${
            isHovered ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="text-white space-y-3">
            <div>
              <h3 className="text-2xl font-bold mb-1">{city.destination}</h3>
              <p className="text-sm opacity-90">{city.tagline}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm opacity-90">
                <Calendar className="w-4 h-4" />
                <span>{city.duration}</span>
              </div>
              <div className="text-right">
                <p className="text-xs opacity-75">From</p>
                <p className="text-xl font-bold">{city.tariff}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="h-full bg-white/95 backdrop-blur-md shadow-xl">
            <div className="h-full p-6 flex flex-col justify-between">
              {/* Header */}
              <div className="text-center mt-10">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {city.packageName}
                </h3>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{city.duration}</span>
                  <span>•</span>
                  <Users className="w-4 h-4" />
                  <span>{city.minimumMembers}+ people</span>
                </div>
             
              </div>

              {/* Key Highlights */}
              <div className="my-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Top Highlights
                </h4>
                <div className="space-y-2">
                  {city.highlights?.slice(0, 3).map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                  {city.highlights?.length > 3 && (
                    <p className="text-sm text-gray-500 mt-2">
                      +{city.highlights.length - 3} more experiences
                    </p>
                  )}
                </div>
              </div>

             

              {/* CTA Buttons */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm"
                >
                  View Full Details
                </button>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4  backdrop-blur-sm">
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-hidden">
            {/* Modal Header with Hero Image */}
            <div className="relative h-48  overflow-hidden">
              <img
                src={city.image}
                alt={city.destination}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 "></div>

              {/* Header Content */}
              <div className="absolute inset-0 flex items-center justify-between p-6">
                <div className="text-white">
                  <h2 className="text-3xl font-bold mb-2">
                    {city.packageName}
                  </h2>
                  <p className="text-blue-100 text-lg">
                    {city.destination} • {city.tagline}
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{city.rating}</span>
                      <span className="text-sm opacity-75">
                        ({city.reviewCount})
                      </span>
                    </div>
                    {city.badge && (
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {city.badge}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors backdrop-blur-sm"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto max-h-[calc(95vh-320px)]">
              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="font-semibold text-gray-900">{city.duration}</p>
                  <p className="text-sm text-gray-500">Duration</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="font-semibold text-gray-900">
                    {city.minimumMembers}+ People
                  </p>
                  <p className="text-sm text-gray-500">Group Size</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <p className="font-semibold text-gray-900">
                    {city.pickupLocation}
                  </p>
                  <p className="text-sm text-gray-500">Pickup Point</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Insured</p>
                  <p className="text-sm text-gray-500">Travel Safe</p>
                </div>
              </div>

              <div className="p-6 space-y-8">
                {/* Detailed Itinerary */}
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    Detailed Itinerary
                  </h3>
                  <div className="space-y-6">
                    {/* Day 1 */}
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg">
                          1
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Day 1 - Arrival & Welcome
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Car className="w-4 h-4 text-blue-600" />
                                <span>
                                  {city.highlights?.[0] ||
                                    "Airport pickup and hotel transfer"}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Utensils className="w-4 h-4 text-blue-600" />
                                <span>
                                  {city.highlights?.[1] ||
                                    "Welcome lunch at hotel"}
                                </span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Camera className="w-4 h-4 text-blue-600" />
                                <span>
                                  {city.highlights?.[2] ||
                                    "Evening sightseeing tour"}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-blue-600" />
                                <span>Local market exploration</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Day 2 */}
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg">
                          2
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Day 2 - Adventure & Exploration
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Camera className="w-4 h-4 text-green-600" />
                                <span>
                                  {city.highlights?.[3] ||
                                    "Adventure activities"}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-green-600" />
                                <span>
                                  {city.highlights?.[4] ||
                                    "Cultural site visits"}
                                </span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Utensils className="w-4 h-4 text-green-600" />
                                <span>
                                  {city.highlights?.[5] ||
                                    "Traditional cuisine experience"}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-green-600" />
                                <span>Evening cultural show</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Day 3 */}
                    <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg">
                          3
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-3">
                            Day 3 - Farewell & Departure
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-purple-600" />
                                <span>
                                  {city.highlights?.[6] || "Final sightseeing"}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Camera className="w-4 h-4 text-purple-600" />
                                <span>Shopping and souvenirs</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Utensils className="w-4 h-4 text-purple-600" />
                                <span>Farewell lunch</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Car className="w-4 h-4 text-purple-600" />
                                <span>Drop-off at departure point</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* All Highlights */}
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-500" />
                    Complete Experience Package
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {city.highlights?.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Accommodation & Pricing */}
                <section className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Accommodation & Pricing
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">
                          {city.stayName}
                        </h4>
                        <div className="flex items-center gap-2 mb-4">
                          {[...Array(Math.floor(city.rating || 0))].map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                              />
                            )
                          )}
                          <span className="text-gray-600 ml-1">
                            ({city.reviewCount} reviews)
                          </span>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Premium AC rooms</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Complimentary breakfast</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Free Wi-Fi & parking</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-center">
                        <p className="text-lg text-gray-600 mb-2">
                          Starting from
                        </p>
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <span className="text-4xl font-bold text-blue-600">
                            {city.tariff}
                          </span>
                          {city.discount && (
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                              {city.discount}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-500 mb-4">
                          per person (all inclusive)
                        </p>

                        <div className="space-y-2 text-sm text-gray-600 text-left">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>All meals included</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Transportation & transfers</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Entry fees & guide</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Travel insurance</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Important Information */}
                <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                    Important Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Booking Requirements
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span>
                            Minimum {city.minimumMembers} people required
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span>Advance booking recommended</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span>Valid ID proof required</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Cancellation Policy
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Free cancellation 48+ hours</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span>50% refund 24-48 hours</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>No refund within 24 hours</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-white border-t border-gray-200 p-6">
              <div className="flex gap-4">
                <button
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 px-6 rounded-lg font-medium transition-colors"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close Details
                </button>
                <button className="flex-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg">
                  Book Now {city.discount && `• Save ${city.discount}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CityCard;
