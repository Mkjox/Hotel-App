const postData = [
  {
    "id": 1,
    "title": "Luxury Stay at Grand Plaza",
    "location": "Paris, France",
    "description": "A lavish 5-star hotel located in the heart of Paris with scenic views and top-notch amenities.",
    "userId": 1,
    "price": 500,
    "rating": 4.9,
    "category": "hotel",
    "photos": [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7",
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24"
  },
  {
    "id": 2,
    "title": "Ocean View Homestay",
    "location": "Miami, USA",
    "description": "A cozy homestay with direct access to the beach, perfect for a family getaway.",
    "userId": 2,
    "price": 200,
    "rating": 4.7,
    "category": "homestay",
    "photos": [
      "https://images.unsplash.com/photo-1507143550189-fed454f93097",
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
  },
  {
    "id": 3,
    "title": "City Center Apartment",
    "location": "New York, USA",
    "description": "A modern apartment located in the bustling heart of New York City.",
    "userId": 3,
    "price": 350,
    "rating": 4.8,
    "category": "apart",
    "photos": [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "https://images.unsplash.com/photo-1559425160-2a2b1d684f0a"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1"
  },
  {
    "id": 4,
    "title": "Mountain View Homestay",
    "location": "Aspen, USA",
    "description": "A cozy homestay offering stunning views of the mountains.",
    "userId": 4,
    "price": 150,
    "rating": 4.6,
    "category": "homestay",
    "photos": [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
      "https://images.unsplash.com/photo-1565031491910-e57fac031c41",
      "https://images.unsplash.com/photo-1541534401786-4e42045b9279"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1506812428898-fe5a708f5359"
  },
  {
    "id": 5,
    "title": "Downtown Hotel Suite",
    "location": "Berlin, Germany",
    "description": "An upscale hotel suite in the heart of Berlin with easy access to major attractions.",
    "userId": 5,
    "price": 400,
    "rating": 4.9,
    "category": "hotel",
    "photos": [
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8",
      "https://images.unsplash.com/photo-1506709182823-d24228b8a40e",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  {
    "id": 6,
    "title": "Seaside Hotel Retreat",
    "location": "Sydney, Australia",
    "description": "A luxurious seaside hotel offering incredible views of the ocean.",
    "userId": 6,
    "price": 500,
    "rating": 5.0,
    "category": "hotel",
    "photos": [
      "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24",
      "https://images.unsplash.com/photo-1572177215152-32f247303126",
      "https://images.unsplash.com/photo-1562564055-71e051d9c2b8"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
  },
  {
    "id": 7,
    "title": "Urban Homestay",
    "location": "Los Angeles, USA",
    "description": "A quaint homestay located in the vibrant city of Los Angeles.",
    "userId": 7,
    "price": 120,
    "rating": 4.5,
    "category": "homestay",
    "photos": [
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      "https://images.unsplash.com/photo-1551016043-06ec2173531b"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c"
  },
  {
    "id": 8,
    "title": "Penthouse Apartment",
    "location": "Dubai, UAE",
    "description": "A high-end penthouse apartment with breathtaking views of Dubai's skyline.",
    "userId": 8,
    "price": 700,
    "rating": 4.9,
    "category": "apart",
    "photos": [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      "https://images.unsplash.com/photo-1562564055-71e051d9c2b8",
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1517840901100-8179e982acb7"
  },
  {
    "id": 9,
    "title": "Coastal Resort Hotel",
    "location": "Malibu, USA",
    "description": "A luxury resort hotel offering direct access to the beach and top-class amenities.",
    "userId": 9,
    "price": 600,
    "rating": 4.8,
    "category": "hotel",
    "photos": [
      "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1"
  },
  {
    "id": 10,
    "title": "Hilltop Homestay",
    "location": "Queenstown, New Zealand",
    "description": "A beautiful homestay located on a hilltop, offering a stunning view of nature.",
    "userId": 10,
    "price": 180,
    "rating": 4.7,
    "category": "homestay",
    "photos": [
      "https://images.unsplash.com/photo-1565031491910-e57fac031c41",
      "https://images.unsplash.com/photo-1559425160-2a2b1d684f0a",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1509023464722-18d996393ca8"
  },
  {
    "id": 11,
    "title": "Downtown Modern Apartment",
    "location": "Tokyo, Japan",
    "description": "A sleek and modern apartment located in the bustling center of Tokyo.",
    "userId": 11,
    "price": 320,
    "rating": 4.9,
    "category": "apart",
    "photos": [
      "https://images.unsplash.com/photo-1507143550189-fed454f93097",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "https://images.unsplash.com/photo-1562564055-71e051d9c2b8"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1517840901100-8179e982acb7"
  },
  {
    "id": 12,
    "title": "Serene Lakeside Homestay",
    "location": "Lake Tahoe, USA",
    "description": "A peaceful lakeside homestay perfect for a weekend getaway.",
    "userId": 12,
    "price": 200,
    "rating": 4.8,
    "category": "homestay",
    "photos": [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc"
  },
  {
    "id": 13,
    "title": "Luxurious Penthouse",
    "location": "London, UK",
    "description": "A luxurious penthouse apartment with panoramic views of the city skyline.",
    "userId": 13,
    "price": 700,
    "rating": 5.0,
    "category": "apart",
    "photos": [
      "https://images.unsplash.com/photo-1572177215152-32f247303126",
      "https://images.unsplash.com/photo-1506709182823-d24228b8a40e",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1445019980597-93fa8acb246c"
  },
  {
    "id": 14,
    "title": "Boutique Hotel Suite",
    "location": "Florence, Italy",
    "description": "A charming boutique hotel with artistic decor and rich cultural ambiance.",
    "userId": 14,
    "price": 350,
    "rating": 4.6,
    "category": "hotel",
    "photos": [
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1",
      "https://images.unsplash.com/photo-1562564055-71e051d9c2b8",
      "https://images.unsplash.com/photo-1551016043-06ec2173531b"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1517840901100-8179e982acb7"
  },
  {
    "id": 15,
    "title": "Urban Studio Apartment",
    "location": "San Francisco, USA",
    "description": "A modern studio apartment situated in the heart of the city.",
    "userId": 15,
    "price": 300,
    "rating": 4.7,
    "category": "apart",
    "photos": [
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8",
      "https://images.unsplash.com/photo-1562564055-71e051d9c2b8",
      "https://images.unsplash.com/photo-1565031491910-e57fac031c41"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1"
  },
  {
    "id": 16,
    "title": "Beachfront Homestay",
    "location": "Honolulu, USA",
    "description": "A homestay offering breathtaking beachfront views and relaxed vibes.",
    "userId": 16,
    "price": 180,
    "rating": 4.8,
    "category": "homestay",
    "photos": [
      "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24",
      "https://images.unsplash.com/photo-1562564055-71e051d9c2b8",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7"
  },
  {
    "id": 17,
    "title": "Historic Hotel",
    "location": "Edinburgh, Scotland",
    "description": "A beautifully preserved historic hotel offering a unique stay in the heart of Edinburgh.",
    "userId": 17,
    "price": 400,
    "rating": 4.6,
    "category": "hotel",
    "photos": [
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
      "https://images.unsplash.com/photo-1565031491910-e57fac031c41"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc"
  },
  {
    "id": 18,
    "title": "Modern City Apartment",
    "location": "Seoul, South Korea",
    "description": "A stylish modern apartment located in Seoul's central business district.",
    "userId": 18,
    "price": 330,
    "rating": 4.8,
    "category": "apart",
    "photos": [
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7",
      "https://images.unsplash.com/photo-1551016043-06ec2173531b",
      "https://images.unsplash.com/photo-1562564055-71e051d9c2b8"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
  },
  {
    "id": 19,
    "title": "Countryside Homestay",
    "location": "Tuscany, Italy",
    "description": "A relaxing homestay nestled in the picturesque Tuscan countryside.",
    "userId": 19,
    "price": 220,
    "rating": 4.7,
    "category": "homestay",
    "photos": [
      "https://images.unsplash.com/photo-1572177215152-32f247303126",
      "https://images.unsplash.com/photo-1562564055-71e051d9c2b8",
      "https://images.unsplash.com/photo-1507143550189-fed454f93097"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1"
  },
  {
    "id": 20,
    "title": "Luxury Seaside Resort",
    "location": "Nice, France",
    "description": "A luxury seaside resort hotel located on the French Riviera.",
    "userId": 20,
    "price": 500,
    "rating": 4.9,
    "category": "hotel",
    "photos": [
      "https://images.unsplash.com/photo-1565031491910-e57fac031c41",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7",
      "https://images.unsplash.com/photo-1551016043-06ec2173531b"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1509023464722-18d996393ca8"
  },
  {
    "id": 21,
    "title": "High-Rise Apartment",
    "location": "Shanghai, China",
    "description": "A high-rise apartment with spectacular views of the Shanghai skyline.",
    "userId": 21,
    "price": 480,
    "rating": 4.8,
    "category": "apart",
    "photos": [
      "https://images.unsplash.com/photo-1562564055-71e051d9c2b8",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "https://images.unsplash.com/photo-1565031491910-e57fac031c41"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1"
  },
  {
    "id": 22,
    "title": "Rustic Countryside Homestay",
    "location": "Bavaria, Germany",
    "description": "A quaint and rustic homestay in the heart of Bavaria's countryside.",
    "userId": 22,
    "price": 190,
    "rating": 4.6,
    "category": "homestay",
    "photos": [
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
  },
  {
    "id": 23,
    "title": "Skyscraper Hotel Suite",
    "location": "Hong Kong",
    "description": "An opulent hotel suite in one of Hong Kong's tallest skyscrapers.",
    "userId": 23,
    "price": 600,
    "rating": 4.9,
    "category": "hotel",
    "photos": [
      "https://images.unsplash.com/photo-1506709182823-d24228b8a40e",
      "https://images.unsplash.com/photo-1562564055-71e051d9c2b8",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1551016043-06ec2173531b"
  },
  {
    "id": 24,
    "title": "Urban Loft Apartment",
    "location": "Barcelona, Spain",
    "description": "A trendy loft apartment located in the vibrant city of Barcelona.",
    "userId": 24,
    "price": 320,
    "rating": 4.7,
    "category": "apart",
    "photos": [
      "https://images.unsplash.com/photo-1565031491910-e57fac031c41",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1519999482648-25049ddd37b1"
  },
  {
    "id": 25,
    "title": "Cozy Cottage Homestay",
    "location": "Cornwall, UK",
    "description": "A charming homestay in a cozy cottage near the coast.",
    "userId": 25,
    "price": 160,
    "rating": 4.5,
    "category": "homestay",
    "photos": [
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1572177215152-32f247303126"
  },
  {
    "id": 26,
    "title": "Luxury Sky Tower Apartment",
    "location": "Auckland, New Zealand",
    "description": "An elegant apartment located within Auckland’s iconic Sky Tower.",
    "userId": 26,
    "price": 450,
    "rating": 4.9,
    "category": "apart",
    "photos": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "https://images.unsplash.com/photo-1562564055-71e051d9c2b8",
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1584132967334-10e028bd69f7"
  },
  {
    "id": 27,
    "title": "Traditional Mountain Homestay",
    "location": "Banff, Canada",
    "description": "A homestay offering a cozy mountain retreat in the Canadian Rockies.",
    "userId": 27,
    "price": 250,
    "rating": 4.8,
    "category": "homestay",
    "photos": [
      "https://images.unsplash.com/photo-1572177215152-32f247303126",
      "https://images.unsplash.com/photo-1507143550189-fed454f93097",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1565031491910-e57fac031c41"
  },
  {
    "id": 28,
    "title": "High-End Boutique Hotel",
    "location": "Paris, France",
    "description": "A luxurious boutique hotel nestled in the heart of Paris, offering an unforgettable stay.",
    "userId": 28,
    "price": 650,
    "rating": 4.9,
    "category": "hotel",
    "photos": [
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7",
      "https://images.unsplash.com/photo-1562564055-71e051d9c2b8"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1551016043-06ec2173531b"
  },
  {
    "id": 29,
    "title": "Modern Urban Apartment",
    "location": "Tokyo, Japan",
    "description": "A chic and modern apartment located in the bustling center of Tokyo.",
    "userId": 29,
    "price": 410,
    "rating": 4.7,
    "category": "apart",
    "photos": [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "https://images.unsplash.com/photo-1572177215152-32f247303126",
      "https://images.unsplash.com/photo-1565031491910-e57fac031c41"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1509023464722-18d996393ca8"
  },
  {
    "id": 30,
    "title": "Cozy Countryside Homestay",
    "location": "Alps, Switzerland",
    "description": "A cozy homestay located in the stunning Swiss Alps, ideal for a quiet getaway.",
    "userId": 30,
    "price": 270,
    "rating": 4.8,
    "category": "homestay",
    "photos": [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1",
      "https://images.unsplash.com/photo-1565031491910-e57fac031c41"
    ],
    "thumbnail": "https://images.unsplash.com/photo-1517840901100-8179e982acb7"
  }
]

export default postData;