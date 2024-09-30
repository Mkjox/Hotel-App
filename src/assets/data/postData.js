const postData = [
  {
    "id": 1,
    "title": "Grand Central Hotel",
    "location": "New York, USA",
    "description": "Luxury hotel located in the heart of New York City.",
    "userId": 1,
    "price": 250,
    "rating": 4.7,
    "category": "Hotel"
  },
  {
    "id": 2,
    "title": "Kyoto Mountain Retreat",
    "location": "Kyoto, Japan",
    "description": "Traditional homestay with a scenic view of the mountains.",
    "userId": 2,
    "price": 150,
    "rating": 4.3,
    "category": "Homestay"
  },
  {
    "id": 3,
    "title": "Berlin City Apartment",
    "location": "Berlin, Germany",
    "description": "Modern apartment in the center of Berlin, close to museums.",
    "userId": 3,
    "price": 180,
    "rating": 4.5,
    "category": "Apart"
  },
  {
    "id": 4,
    "title": "Paris Eiffel Boutique",
    "location": "Paris, France",
    "description": "Charming boutique hotel with views of the Eiffel Tower.",
    "userId": 4,
    "price": 300,
    "rating": 4.8,
    "category": "Hotel"
  },
  {
    "id": 5,
    "title": "Old Quarter Homestay",
    "location": "Hanoi, Vietnam",
    "description": "Cozy homestay nestled in a quiet street of the Old Quarter.",
    "userId": 5,
    "price": 90,
    "rating": 4.2,
    "category": "Homestay"
  },
  {
    "id": 6,
    "title": "Sydney Beachfront Escape",
    "location": "Sydney, Australia",
    "description": "Beachfront apartment offering stunning views of the ocean.",
    "userId": 6,
    "price": 220,
    "rating": 4.6,
    "category": "Apart"
  },
  {
    "id": 7,
    "title": "Colosseum View Hotel",
    "location": "Rome, Italy",
    "description": "Elegant hotel within walking distance of the Colosseum.",
    "userId": 7,
    "price": 270,
    "rating": 4.9,
    "category": "Hotel"
  },
  {
    "id": 8,
    "title": "Table Mountain Homestay",
    "location": "Cape Town, South Africa",
    "description": "Rustic homestay with panoramic views of Table Mountain.",
    "userId": 8,
    "price": 110,
    "rating": 4.4,
    "category": "Homestay"
  },
  {
    "id": 9,
    "title": "Downtown Business Suite",
    "location": "Toronto, Canada",
    "description": "Spacious downtown apartment perfect for business travelers.",
    "userId": 9,
    "price": 200,
    "rating": 4.5,
    "category": "Apart"
  },
  {
    "id": 10,
    "title": "Las Ramblas Chic Hotel",
    "location": "Barcelona, Spain",
    "description": "Chic hotel near Las Ramblas, ideal for tourists.",
    "userId": 10,
    "price": 240,
    "rating": 4.6,
    "category": "Hotel"
  },
  {
    "id": 11,
    "title": "Floating Market Retreat",
    "location": "Bangkok, Thailand",
    "description": "Affordable homestay near the floating market, quiet and peaceful.",
    "userId": 11,
    "price": 80,
    "rating": 4.1,
    "category": "Homestay"
  },
  {
    "id": 12,
    "title": "Miami Oceanfront Apartment",
    "location": "Miami, USA",
    "description": "Luxurious beachfront apartment in the heart of Miami.",
    "userId": 12,
    "price": 400,
    "rating": 4.9,
    "category": "Apart"
  },
  {
    "id": 13,
    "title": "Amsterdam Canal Hotel",
    "location": "Amsterdam, Netherlands",
    "description": "Charming canal-side hotel with stunning views of the city.",
    "userId": 13,
    "price": 270,
    "rating": 4.7,
    "category": "Hotel"
  },
  {
    "id": 14,
    "title": "Mexican Cultural Homestay",
    "location": "Mexico City, Mexico",
    "description": "Traditional homestay offering an authentic cultural experience.",
    "userId": 14,
    "price": 85,
    "rating": 4.3,
    "category": "Homestay"
  },
  {
    "id": 15,
    "title": "Dubai Marina Luxury Apartment",
    "location": "Dubai, UAE",
    "description": "High-end apartment located in the heart of Dubai Marina.",
    "userId": 15,
    "price": 500,
    "rating": 4.8,
    "category": "Apart"
  },
  {
    "id": 16,
    "title": "Acropolis View Boutique Hotel",
    "location": "Athens, Greece",
    "description": "Boutique hotel with a rooftop restaurant offering Acropolis views.",
    "userId": 16,
    "price": 230,
    "rating": 4.5,
    "category": "Hotel"
  },
  {
    "id": 17,
    "title": "Alfama Charm Homestay",
    "location": "Lisbon, Portugal",
    "description": "Charming homestay in Alfama, perfect for exploring the city.",
    "userId": 17,
    "price": 95,
    "rating": 4.2,
    "category": "Homestay"
  },
  {
    "id": 18,
    "title": "Taksim Square Modern Apartment",
    "location": "Istanbul, Turkey",
    "description": "Modern apartment near Taksim Square with all amenities.",
    "userId": 18,
    "price": 170,
    "rating": 4.4,
    "category": "Apart"
  },
  {
    "id": 19,
    "title": "Sunset Boulevard Hotel",
    "location": "Los Angeles, USA",
    "description": "Luxury hotel on Sunset Boulevard with premium amenities.",
    "userId": 19,
    "price": 350,
    "rating": 4.8,
    "category": "Hotel"
  },
  {
    "id": 20,
    "title": "Hongdae Vibes Homestay",
    "location": "Seoul, South Korea",
    "description": "Affordable homestay in the vibrant district of Hongdae.",
    "userId": 20,
    "price": 90,
    "rating": 4.3,
    "category": "Homestay"
  },
  {
    "id": 21,
    "title": "Melbourne Skyline Apartment",
    "location": "Melbourne, Australia",
    "description": "Spacious apartment in Melbourne’s CBD with stunning views.",
    "userId": 21,
    "price": 210,
    "rating": 4.6,
    "category": "Apart"
  },
  {
    "id": 22,
    "title": "Vienna Opera Hotel",
    "location": "Vienna, Austria",
    "description": "Elegant hotel near the Vienna State Opera, perfect for culture lovers.",
    "userId": 22,
    "price": 260,
    "rating": 4.7,
    "category": "Hotel"
  },
  {
    "id": 23,
    "title": "Santa Teresa Homestay",
    "location": "Rio de Janeiro, Brazil",
    "description": "Charming homestay in Santa Teresa with stunning city views.",
    "userId": 23,
    "price": 100,
    "rating": 4.4,
    "category": "Homestay"
  },
  {
    "id": 24,
    "title": "Buenos Aires Central Apartment",
    "location": "Buenos Aires, Argentina",
    "description": "Modern apartment located in the heart of the city.",
    "userId": 24,
    "price": 180,
    "rating": 4.5,
    "category": "Apart"
  },
  {
    "id": 25,
    "title": "Buckingham Palace Hotel",
    "location": "London, UK",
    "description": "Luxury hotel located near Buckingham Palace.",
    "userId": 25,
    "price": 330,
    "rating": 4.9,
    "category": "Hotel"
  },
  {
    "id": 26,
    "title": "Bali Tropical Homestay",
    "location": "Bali, Indonesia",
    "description": "Tropical homestay surrounded by lush greenery and rice fields.",
    "userId": 26,
    "price": 120,
    "rating": 4.5,
    "category": "Homestay"
  },
  {
    "id": 27,
    "title": "Shanghai Skyline Apartment",
    "location": "Shanghai, China",
    "description": "Luxury apartment with panoramic views of the Shanghai skyline.",
    "userId": 27,
    "price": 260,
    "rating": 4.7,
    "category": "Apart"
  },
  {
    "id": 28,
    "title": "Mumbai Business Hotel",
    "location": "Mumbai, India",
    "description": "Business hotel in Mumbai, perfect for corporate travelers.",
    "userId": 28,
    "price": 240,
    "rating": 4.6,
    "category": "Hotel"
  },
  {
    "id": 29,
    "title": "Himalayan Mountain Homestay",
    "location": "Kathmandu, Nepal",
    "description": "Traditional homestay nestled in the Himalayas.",
    "userId": 29,
    "price": 70,
    "rating": 4.2,
    "category": "Homestay"
  },
  {
    "id": 30,
    "title": "Tokyo City Loft",
    "location": "Tokyo, Japan",
    "description": "Modern loft apartment located in the city center.",
    "userId": 30,
    "price": 220,
    "rating": 4.6,
    "category": "Apart"
  }
]

export default postData;