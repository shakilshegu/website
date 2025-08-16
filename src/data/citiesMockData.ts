// Mock data for cities and travel packages
export const mockCitiesData: CityDestination[] = [
   {
    id: 1,
    packageName: "Coorg Tour",
    destination: "Coorg",
    tagline: "Coffee Land Paradise",
    duration: "3 Days & 2 Nights",
    tariff: "₹5,499",
    perHead: true,
    minimumMembers: 4,
    stayName: "Golden Residency",
    pickupLocation: "Bengaluru/Mysore",
    rating: 4.8,
    reviewCount: 127,
    image: "https://images.unsplash.com/photo-1529057299613-a565b7ce93aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: [
      "Raja's Seat Valley Views",
      "Abbey Falls Experience",
      "Dubare Elephant Camp",
      "Coffee Plantation Tour",
      "Namdroling Monastery"
    ],
    inclusions: [
      "Stay at Golden Residency",
      "Private car with driver",
      "Breakfast included",
      "All sightseeing as per itinerary"
    ],
    exclusions: [
      "Entry fees to attractions",
      "Meals not mentioned",
      "Personal expenses",
      "Jeep costs for specific places"
    ],
    itinerary: [
      {
        day: 1,
        title: "Cultural Heritage & Nature Retreat",
        activities: ["Raja's Seat", "Madikeri Fort", "Abbey Falls"]
      },
      {
        day: 2,
        title: "Adventure & Spiritual Bliss",
        activities: ["Dubare Elephant Camp", "Nisargadhama", "Golden Temple"]
      },
      {
        day: 3,
        title: "Sacred Origins & Scenic Views",
        activities: ["Talacauvery", "Bhagamandala", "Mandalpatti"]
      }
    ],
    badge: "Most Popular",
    discount: "20% OFF"
  },
  {
    id: 2,
    packageName: "Munnar Bliss",
    destination: "Munnar",
    tagline: "Hill Station Heaven",
    duration: "4 Days & 3 Nights",
    tariff: "₹7,299",
    perHead: true,
    minimumMembers: 2,
    stayName: "Tea Valley Resort",
    pickupLocation: "Cochin/Ernakulam",
    rating: 4.9,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1616388969587-8196f32388b4?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: [
      "Tea Plantation Tours",
      "Eravikulam National Park",
      "Mattupetty Dam",
      "Top Station Views",
      "Spice Gardens"
    ],
    inclusions: [
      "Stay at Tea Valley Resort",
      "Private transportation",
      "Breakfast & Dinner",
      "Guided tea plantation tour"
    ],
    exclusions: [
      "Entry fees to parks",
      "Lunch meals",
      "Adventure activities",
      "Shopping expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Local Exploration",
        activities: ["Check-in", "Local Market", "Tea Museum"]
      },
      {
        day: 2,
        title: "Nature & Wildlife",
        activities: ["Eravikulam Park", "Mattupetty Dam", "Echo Point"]
      },
      {
        day: 3,
        title: "Adventure & Scenic Beauty",
        activities: ["Top Station", "Kundala Lake", "Tea Gardens"]
      },
      {
        day: 4,
        title: "Departure Day",
        activities: ["Spice Gardens", "Shopping", "Return Journey"]
      }
    ],
    badge: "Best Value",
    discount: "15% OFF"
  },
  {
    id: 3,
    packageName: "Goa Beach Escape",
    destination: "Goa",
    tagline: "Tropical Paradise",
    duration: "5 Days & 4 Nights",
    tariff: "₹8,999",
    perHead: true,
    minimumMembers: 2,
    stayName: "Seaside Resort",
    pickupLocation: "Goa Airport/Railway",
    rating: 4.7,
    reviewCount: 203,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Baga & Calangute Beaches",
      "Spice Plantation Tour",
      "Dudhsagar Waterfalls",
      "Old Goa Churches",
      "Sunset Cruise"
    ],
    inclusions: [
      "Beach resort accommodation",
      "Airport transfers",
      "Breakfast included",
      "Sunset cruise experience"
    ],
    exclusions: [
      "Water sports activities",
      "Lunch & dinner",
      "Alcohol beverages",
      "Personal shopping"
    ],
    itinerary: [
      {
        day: 1,
        title: "Beach Arrival",
        activities: ["Airport pickup", "Beach relaxation", "Local cuisine"]
      },
      {
        day: 2,
        title: "North Goa Exploration",
        activities: ["Baga Beach", "Anjuna Market", "Fort Aguada"]
      },
      {
        day: 3,
        title: "Adventure Day",
        activities: ["Dudhsagar Falls", "Spice Plantation", "River cruise"]
      },
      {
        day: 4,
        title: "Cultural Heritage",
        activities: ["Old Goa", "Basilica", "Se Cathedral"]
      },
      {
        day: 5,
        title: "Departure",
        activities: ["Last beach visit", "Shopping", "Airport drop"]
      }
    ],
    badge: "Adventure Special",
    discount: "25% OFF"
  },
  {
    id: 4,
    packageName: "Chikmagalur Tour",
    destination: "Chikmagalur",
    tagline: "Couple Package ",
    duration: "3 Days & 2 Nights",
    tariff: "₹8,999",
    perHead: true,
    minimumMembers: 2,
    stayName: "Jaguar Comforts",
    pickupLocation: "Bengaluru/Mysore",
    rating: 4.85,
    reviewCount: 54,
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Mullayanagiri Peak",
      "Baba Budangiri",
      "Jhari Falls",
      "Hebbe Waterfalls",
      "Belur & Halebidu Temples",
      "Yagachi Water Sports"
    ],
    inclusions: [
      "Stay at Jaguar Comforts",
      "Private car with driver",
      "Breakfast",
      "All sightseeing as per itinerary",
      "Mullayanagiri entry fee",
      "Belur and Halebidu temples entry fee"
    ],
    exclusions: [
      "Entry fees to attractions not mentioned",
      "Meals not included",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Mountain Peaks & Waterfalls Adventure",
        activities: [
          "Pickup from Bengaluru/Mysore and head to Chikmagalur",
          "Check-in at Jaguar Comforts and freshen up",
          "Mullayanagiri – Trek to the highest peak in Karnataka",
          "Baba Budangiri – Sacred hill with shrine",
          "Jhari Falls – Hidden waterfall in the forest",
          "Honnamanahalla Falls – Serene waterfall",
          "Siri Café – Local coffee and scenic beauty",
          "Return to Jaguar Comforts for night stay"
        ]
      },
      {
        day: 2,
        title: "Waterfalls & Temple Exploration",
        activities: [
          "Breakfast at Jaguar Comforts",
          "Hebbe Waterfalls – Scenic trek",
          "Kalhattigiri Falls – Surrounded by greenery",
          "Kemmangundi – Hill station with gardens",
          "Deviramma Temple – Peaceful temple in hills",
          "Return to Jaguar Comforts for night stay"
        ]
      },
      {
        day: 3,
        title: "Temples & Water Sports",
        activities: [
          "Breakfast at Jaguar Comforts",
          "Yagachi Water Sports – Thrilling activities",
          "Belur Temples – Hoysala architecture",
          "Halebidu Temples – Ancient historic site",
          "Check-out and return to Mysore"
        ]
      }
    ],
    badge: "Couple Special",
    discount: "10% OFF"
  },
  {
    id: 5,
    packageName: "Munnar Tour",
    destination: "Munnar",
    tagline: "Experience the Best of Munnar ",
    duration: "3 Days & 2 Nights",
    tariff: "₹6,499",
    perHead: true,
    minimumMembers: 4,
    stayName: "Hotel (2 Nights Stay)",
    pickupLocation: "Bengaluru/Mysore (Customisable)",
    rating: 4.85,
    reviewCount: 61,
    image: "https://images.unsplash.com/photo-1637066742971-726bee8d9f56?q=80&w=1249&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: [
      "Cheeyappara & Valara Waterfalls",
      "Tea Plantations Viewpoint",
      "Pothamedu Viewpoint",
      "Eravikulam National Park",
      "Mattupetty Dam & Lake",
      "Top Station",
      "Kundala Lake",
      "Blossom Park"
    ],
    inclusions: [
      "Pickup & drop from location",
      "Car with driver",
      "Fuel allowance",
      "Toll & state border charges",
      "2 Nights stay",
      "Breakfast",
      "Parking charges"
    ],
    exclusions: [
      "Anything not mentioned in inclusions",
      "Entry fees at places",
      "Personal expenses",
      "Any change in itinerary",
      "Lunch & dinner"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Natural Wonders",
        activities: [
          "Departure from selected location to Munnar",
          "Cheeyappara & Valara Waterfalls – Beautiful cascading waterfalls en route",
          "Tea Plantations Viewpoint – Witness lush tea gardens",
          "Pothamedu Viewpoint – Enjoy breathtaking valley views",
          "Check-in at Hotel – Relax and unwind"
        ]
      },
      {
        day: 2,
        title: "Iconic Munnar Sightseeing",
        activities: [
          "Eravikulam National Park – Home of the endangered Nilgiri Tahr",
          "Tea Museum – Learn about tea processing & history",
          "Mattupetty Dam & Lake – Scenic views and boating",
          "Elephant Park – Get up close with elephants",
          "Echo Point – Experience the natural echo phenomenon"
        ]
      },
      {
        day: 3,
        title: "Adventure & Departure",
        activities: [
          "Top Station – The highest point in Munnar with stunning views",
          "Kundala Lake – Peaceful boating experience",
          "Blossom Park – Perfect for a nature walk",
          "Return to drop-off location"
        ]
      }
    ],
    badge: "Hill Station Special",
    discount: "12% OFF"
  },
  {
    id: 6,
    packageName: "Mysore Day Tour",
    destination: "Mysore",
    tagline: "Experience  Mysore in a Day",
    duration: "1 Day",
    tariff: "₹1,249",
    perHead: true,
    minimumMembers: 4,
    stayName: "Hotel",
    pickupLocation: "Bengaluru",
    rating: 4.7,
    reviewCount: 38,
    image: "https://images.unsplash.com/photo-1579429223126-29d2f6f9c1ac?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: [
      "Mysore Palace",
      "Jaganmohan Palace Art Gallery",
      "St. Philomena’s Church",
      "Mysore Zoo",
      "Chamundi Hill & Temple",
      "Brindavan Gardens Musical Fountain"
    ],
    inclusions: [
      "Private car with driver",
      "All sightseeing as per itinerary"
    ],
    exclusions: [
      "Entry fees to attractions",
      "Meals not mentioned",
      "Personal expenses",
      "Anything not mentioned in inclusions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Royal Splendor & Cultural Marvels",
        activities: [
          "Early morning pickup from Bengaluru and drive to Mysore",
          "Mysore Palace – Architectural masterpiece of the Wodeyars",
          "Jaganmohan Palace Art Gallery – Collection of paintings and artifacts",
          "St. Philomena’s Church – Majestic neo-Gothic style church",
          "Mysore Zoo – One of the oldest zoos in India",
          "Chamundi Hill & Chamundeshwari Temple – Panoramic views and temple visit",
          "Brindavan Gardens – Evening musical fountain show",
          "Return to Bengaluru"
        ]
      }
    ],
    badge: "Day Special",
    discount: "5% OFF"
  }
] as const;

// Type definitions for cities and travel packages
export interface CityDestination {
  id: number;
  packageName: string;
  destination: string;
  tagline: string;
  duration: string;
  tariff: string;            // "₹5,499" (kept as string because of ₹ symbol)
  perHead: boolean;
  minimumMembers: number;
  stayName: string;
  pickupLocation: string;
  rating: number;
  reviewCount: number;
  image: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
  badge?: string;            // optional because not all packages may have this
  discount?: string;         // optional as well
}


// Formatting functions for travel package data
export const formatPrice = (price: number): string => {
  return `$${price.toLocaleString()}`;
};

export const formatDuration = (days: number, nights: number): string => {
  return `${days} Days, ${nights} Nights`;
};

export const formatItineraryDay = (dayNumber: number): string => {
  return `Day ${dayNumber}`;
};