/**
 * MISHRA TOURS AND TRAVELS - CENTRAL DATA STORE
 * Tagline: "Your Journey, Our Responsibility"
 * Founders: Shivam Mishra (+91 8767213391), Satyam Mishra (+91 9922355049)
 * Email: mishratravels9922@gmail.com
 * Address: Anandi Nagar, Near Shukla Compound, Boisar, Maharashtra, India
 */

const MTT_CONFIG = {
  companyName: "Mishra Tours And Travels",
  tagline: "Your Journey, Our Responsibility",
  email: "mishratravels9922@gmail.com",
  address: "Anandi Nagar, Near Shukla Compound, Boisar, Maharashtra 401501",
  owners: [
    {
      name: "Shivam Mishra",
      phone: "8767213391",
      displayPhone: "+91 8767213391",
      role: "Managing Director & Operations",
      whatsappMessage: "Hello Shivam ji, I would like to know more about Mishra Tours and Travels packages."
    },
    {
      name: "Satyam Mishra",
      phone: "9922355049",
      displayPhone: "+91 9922355049",
      role: "Co-Founder & Customer Relations",
      whatsappMessage: "Hello Satyam ji, I would like to inquire about tour bookings and vehicle rentals."
    }
  ],
  defaultWhatsAppPhone: "8767213391",
  stats: {
    experienceYears: "10+",
    satisfiedGuests: "15,000+",
    toursCompleted: "1,200+",
    luxuryVehicles: "35+"
  }
};

// ================= 10 MASTER DESTINATIONS =================
const MTT_DESTINATIONS = [
  {
    id: "goa",
    name: "Goa",
    tagline: "Sun-Kissed Beaches, Vibrant Nightlife & Heritage Forts",
    category: "beaches",
    categoryLabel: "Beaches & Leisure",
    badge: "Most Popular",
    duration: "3N / 4D",
    priceStarting: "₹9,999",
    priceNumber: 9999,
    rating: 4.9,
    reviewsCount: 320,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    shortDesc: "Experience golden beaches, historic Portuguese churches, vibrant beach shacks, scuba diving, and thrilling river cruises.",
    fullOverview: "Goa is India's premier beach paradise offering a sublime mix of relaxation, water sports thrills, and rich heritage. From the vibrant shores of Baga and Calangute in the north to the serene white-sand stretches of Palolem and Colva in the south, Goa has something for every traveler. Our curated Goa packages include comfortable luxury travel, deluxe beachfront accommodations, watersports passes, and guided tours of Old Goa UNESCO heritage churches and spice plantations.",
    bestTimeToVisit: "October to April (Pleasant coastal breeze and water activities)",
    idealDuration: "4 to 6 Days",
    weatherSummary: "24°C - 32°C Tropical & Sunny",
    topHighlights: [
      "Water Sports at Calangute & Baga (Parasailing, Jet Ski, Banana Ride)",
      "Historic Old Goa Basilicas & Fort Aguada Panoramic Views",
      "Mandovi River Sunset Luxury Cruise with Goan Folk Dance",
      "Dudhsagar Waterfall Jeep Safari through the Western Ghats",
      "Anjuna & Vagator Sunset Beach Clubs and Flea Markets"
    ],
    suggestedItinerary: [
      { day: "Day 1", title: "Arrival in Goa & North Beach Leisure", desc: "Pickup from Airport/Station in private AC vehicle. Hotel check-in. Evening stroll at Baga Beach and welcome beach shack dinner." },
      { day: "Day 2", title: "North Goa Forts & Water Sports Adventure", desc: "Visit Aguada Fort, Chapora Fort (Dil Chahta Hai point), followed by thrilling water sports at Anjuna Beach." },
      { day: "Day 3", title: "South Goa Cultural Heritage & Sunset Cruise", desc: "Explore Basilica of Bom Jesus, Se Cathedral, Mangueshi Temple, and evening Mandovi River music cruise." },
      { day: "Day 4", title: "Souvenir Shopping & Departure", desc: "Free morning for Panjim Latin Quarter (Fontainhas) photography and shopping before transfer back to station/airport." }
    ],
    inclusions: ["3 Nights Hotel Stay in 3-Star/4-Star Resort", "Daily Buffet Breakfast & Dinner", "AC Vehicle for Sightseeing & Transfers", "Mandovi Sunset Cruise Entry", "24/7 Local Assistance"],
    exclusions: ["Airfare/Train tickets unless specified", "Personal watersports charges", "Lunch and alcoholic beverages", "Monument entrance fees"]
  },
  {
    id: "manali",
    name: "Manali",
    tagline: "Snow Peaks, Pine Forests & Rohtang Pass Thrills",
    category: "hills",
    categoryLabel: "Mountains & Snow",
    badge: "Trending",
    duration: "4N / 5D",
    priceStarting: "₹12,499",
    priceNumber: 12499,
    rating: 4.8,
    reviewsCount: 285,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
    shortDesc: "Nestled in the Beas River Valley, Manali offers breathtaking snowscapes, Solang adventures, and tranquil pine wood temples.",
    fullOverview: "Manali is a haven for mountain lovers, honeymooners, and adventure seekers. Located at the northern end of the Kullu Valley in Himachal Pradesh, it boasts towering snow-capped peaks, roaring pine-clad rivers, and charming apple orchards. Mishra Tours provides seamless round-trip transport from Mumbai/Boisar/Delhi with experienced mountain drivers, hotel stays, Rohtang Pass permits, and Solang Valley excursions.",
    bestTimeToVisit: "March to June (Pleasant weather) & October to February (Fresh Snowfall)",
    idealDuration: "5 to 7 Days",
    weatherSummary: "0°C - 18°C Alpine Mountain Climate",
    topHighlights: [
      "Solang Valley Adventure Sports (Paragliding, Zorbing, Cable Car)",
      "High-Altitude Rohtang Pass & Atal Tunnel Marvel",
      "Historical Hadimba Temple amidst towering Cedar woods",
      "Old Manali Cafes & Mall Road shopping for Kullu Shawls",
      "Hot Sulphur Springs at Vashisht Village"
    ],
    suggestedItinerary: [
      { day: "Day 1", title: "Delhi/Chandigarh to Manali Journey", desc: "Scenic hill drive through Mandi and Kullu. Check-in to luxury riverside resort in Manali." },
      { day: "Day 2", title: "Manali Local Sightseeing & Hadimba Woods", desc: "Visit ancient Hadimba Devi Temple, Vashisht Hot Springs, Tibetan Monastery, and evening leisure at Mall Road." },
      { day: "Day 3", title: "Solang Valley & Atal Tunnel Wonder", desc: "Excursion to Solang Valley for snow activities, paragliding, and crossing the engineering marvel Atal Tunnel to Sissu." },
      { day: "Day 4", title: "Kullu Valley Rafting & Naggar Castle", desc: "River rafting in the Beas River, visit historic Naggar Castle and Nicholas Roerich Art Gallery." },
      { day: "Day 5", title: "Farewell Manali & Return Journey", desc: "Breakfast with panoramic valley views, check-out and drop off at Delhi/Chandigarh." }
    ],
    inclusions: ["4 Nights Deluxe Valley-Facing Resort Accommodation", "Breakfast & Dinner (MAP Plan)", "Dedicated AC Cab for Hills Transfers", "Solang Valley & Atal Tunnel Excursion", "All Tolls, Fuel & Mountain Permits"],
    exclusions: ["Rohtang Pass NGT Special Permit vehicle fee", "Personal adventure sports fees", "Lunches & personal shopping"]
  },
  {
    id: "kashmir",
    name: "Kashmir",
    tagline: "Paradise On Earth - Dal Lake, Gulmarg & Pahalgam",
    category: "hills",
    categoryLabel: "Paradise & Valleys",
    badge: "Luxury Favorite",
    duration: "5N / 6D",
    priceStarting: "₹18,999",
    priceNumber: 18999,
    rating: 4.9,
    reviewsCount: 410,
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80",
    shortDesc: "Glide on Dal Lake in a traditional Shikara, ride the Gulmarg Gondola over snowy peaks, and wander through Pahalgam pine valleys.",
    fullOverview: "Revered as 'Heaven on Earth', Jammu & Kashmir mesmerizes with snow-capped mountain ranges, crystal-clear glacial streams, lush saffron meadows, and warm Kashmiri hospitality. Our flagship Kashmir circuit includes a magical night in a carved wooden Houseboat on Dal Lake, scenic pony rides in Pahalgam's Betaab Valley, and high-altitude cable car adventures in Gulmarg.",
    bestTimeToVisit: "April to October (Lush flowers & gardens) & December to March (Snow & Skiing)",
    idealDuration: "6 to 8 Days",
    weatherSummary: "-2°C - 20°C Mild in Summer, Snowy in Winter",
    topHighlights: [
      "Traditional Wooden Houseboat Stay with Dal Lake Shikara Ride",
      "World's 2nd Highest Gondola Cable Car Ride in Gulmarg (Phase 1 & 2)",
      "Pahalgam Betaab Valley, Aru Valley & Chandanwari Tour",
      "Mughal Gardens of Srinagar (Shalimar, Nishat & Chashme Shahi)",
      "Authentic Kashmiri Wazwan Cuisine & Pashmina Shawl Souvenirs"
    ],
    suggestedItinerary: [
      { day: "Day 1", title: "Arrival in Srinagar & Dal Lake Shikara", desc: "Srinagar Airport pickup. Check-in to Royal Houseboat. Sunset Shikara ride across Floating Vegetable Gardens & Char Chinar." },
      { day: "Day 2", title: "Srinagar to Gulmarg Snow Paradise", desc: "Drive to Gulmarg meadow of flowers. Take the Gondola cable car up to Apharwat peak for snow skiing and photography." },
      { day: "Day 3", title: "Gulmarg to Pahalgam Valley of Shepherds", desc: "Scenic drive passing Pampore saffron fields and Awantipora ruins. Check-in to riverside resort in Pahalgam." },
      { day: "Day 4", title: "Pahalgam Betaab & Aru Exploration", desc: "Day tour of Betaab Valley and Aru Valley. Enjoy trout fishing and leisurely walks by the Lidder River." },
      { day: "Day 5", title: "Return to Srinagar & Mughal Heritage", desc: "Drive back to Srinagar. Explore Nishat Bagh, Shalimar Bagh, and Shankaracharya Hill Temple." },
      { day: "Day 6", title: "Departure with Sweet Memories", desc: "Transfer to Srinagar Airport with unforgettable memories of Kashmir paradise." }
    ],
    inclusions: ["1 Night Luxury Houseboat + 4 Nights Deluxe Hotel Stays", "Daily Breakfast & Dinner with Kashmiri Delicacies", "1-Hour Complimentary Shikara Ride on Dal Lake", "All Sightseeing in Private Non-AC Cab (as per hill regulations)", "24x7 Dedicated Kashmir Tour Coordinator"],
    exclusions: ["Airfare to Srinagar", "Gondola ride tickets (bookable in advance)", "Pony rides in Pahalgam/Gulmarg"]
  },
  {
    id: "kedarnath",
    name: "Kedarnath",
    tagline: "Sacred Himalayan Abode of Lord Shiva",
    category: "pilgrimage",
    categoryLabel: "Spiritual Yatra",
    badge: "Divine Yatra",
    duration: "4N / 5D",
    priceStarting: "₹14,999",
    priceNumber: 14999,
    rating: 5.0,
    reviewsCount: 540,
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=900&q=80",
    shortDesc: "Undertake the divine pilgrimage to one of the 12 Jyotirlingas nestled at 3,584m in the majestic Garhwal Himalayas.",
    fullOverview: "Kedarnath is one of the most revered sanctuaries of Hinduism, set against the dramatic snowbound peak of Mount Kedarnath. Every year, thousands of devotees travel with Mishra Tours & Travels from Boisar, Mumbai, and Gujarat to seek the blessings of Mahadev. We organize seamless pilgrimage yatras with helicopter shuttle booking support, comfortable halting lodges in Guptkashi and Sonprayag, VIP darshan coordination, and trained mountain drivers.",
    bestTimeToVisit: "May to June & September to November (Temple open season)",
    idealDuration: "5 to 6 Days",
    weatherSummary: "2°C - 15°C Chilly Alpine Himalayan Air",
    topHighlights: [
      "Darshan of the Holy 12th Jyotirlinga at Kedarnath Temple",
      "Scenic Helicopter Shuttle or 16km Holy Trek from Gaurikund",
      "Ganga Aarti at Har Ki Pauri Haridwar & Rishikesh Triveni Ghat",
      "Devprayag Confluence of Alaknanda & Bhagirathi Rivers",
      "Comfortable Pilgrimage halts at Guptkashi / Phata"
    ],
    suggestedItinerary: [
      { day: "Day 1", title: "Haridwar/Rishikesh to Guptkashi", desc: "Morning pickup from Haridwar. Drive via Devprayag and Rudraprayag along the Mandakini River. Overnight in Guptkashi." },
      { day: "Day 2", title: "Guptkashi to Kedarnath Base & Temple Trek", desc: "Early morning transfer to Sonprayag/Gaurikund. Trek 16km or board helicopter to Kedarnath. Evening Aarti & Night Stay at Kedarnath." },
      { day: "Day 3", title: "Morning Darshan & Descent to Guptkashi", desc: "Attend early morning Abhishek Darshan of Baba Kedar. Descend to Sonprayag. Evening rest at Guptkashi hotel." },
      { day: "Day 4", title: "Guptkashi to Rishikesh Holy Town", desc: "Drive to Rishikesh. Visit Lakshman Jhula, Ram Jhula, and participate in the world-famous Ganga Aarti." },
      { day: "Day 5", title: "Rishikesh to Haridwar Departure", desc: "Morning visit to Mansa Devi Temple, then transfer to Haridwar railway station for return journey." }
    ],
    inclusions: ["All Hotel & Ashrama Accommodations as per itinerary", "Pure Vegetarian Sattvic Breakfast & Dinner", "Dedicated Tourist Bus / Tempo Traveller from Haridwar", "Char Dham Yatra Biometric Registration Support", "24/7 Pilgrimage Yatra Marshall & First Aid"],
    exclusions: ["Helicopter ticket fare (assisted on actuals)", "Pony / Palki / Kandi charges for trek", "Personal pooja samagri charges"]
  },
  {
    id: "jaipur",
    name: "Jaipur",
    tagline: "The Royal Pink City of Palaces, Forts & Heritage",
    category: "heritage",
    categoryLabel: "Royal Heritage",
    badge: "Cultural Gem",
    duration: "2N / 3D",
    priceStarting: "₹7,499",
    priceNumber: 7499,
    rating: 4.8,
    reviewsCount: 195,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    shortDesc: "Marvel at the majestic Amber Fort, iconic honeycomb Hawa Mahal, Jal Mahal, and vibrant bazaars filled with Rajasthani crafts.",
    fullOverview: "Jaipur, the capital of Rajasthan, is a world-renowned UNESCO World Heritage city known for its magnificent hilltop citadels, regal courtyards, vibrant textiles, and rich culinary heritage. Mishra Tours offers luxury royal packages that include heritage haveli stays, guided historical walks, traditional folk dance dinners at Chokhi Dhani, and comfortable AC vehicle transport.",
    bestTimeToVisit: "October to March (Cool and pleasant royal climate)",
    idealDuration: "3 to 4 Days",
    weatherSummary: "15°C - 28°C Pleasant Winter & Sunny Days",
    topHighlights: [
      "Amber Fort Elephant / Jeep Ascent & Sheesh Mahal Mirror Art",
      "Iconic 953-Casement Honeycomb Facade of Hawa Mahal",
      "City Palace & Ancient Astronomical Observatories of Jantar Mantar",
      "Picturesque Jal Mahal Floating Palace Photography",
      "Royal Rajasthani Thali & Cultural Folk Night at Chokhi Dhani"
    ],
    suggestedItinerary: [
      { day: "Day 1", title: "Jaipur Arrival & Pink City Highlights", desc: "Pickup and hotel check-in. Visit City Palace, Jantar Mantar, and photograph Hawa Mahal. Evening shopping at Johari Bazaar." },
      { day: "Day 2", title: "Grand Forts of Jaipur & Nahargarh Sunset", desc: "Morning tour of magnificent Amber Fort and Jaigarh Cannon. Sunset view of Pink City from Nahargarh Fort, followed by Chokhi Dhani dinner." },
      { day: "Day 3", title: "Albert Hall Museum & Departure", desc: "Visit Albert Hall Museum, Birla Temple, and enjoy local Kachori snacks before departure." }
    ],
    inclusions: ["2 Nights Heritage Hotel / Haveli Stay", "Daily Rajasthani & Continental Breakfast", "Private AC Cab for All Sightseeing", "Chokhi Dhani Cultural Village Entry & Dinner", "Professional City Guide Services"],
    exclusions: ["Monument entry tickets", "Elephant ride fees at Amber Fort", "Lunches and shopping expenses"]
  },
  {
    id: "udaipur",
    name: "Udaipur",
    tagline: "Venice of the East - Romantic Lakes & Marble Palaces",
    category: "heritage",
    categoryLabel: "Lakes & Romance",
    badge: "Honeymoon Special",
    duration: "3N / 4D",
    priceStarting: "₹9,499",
    priceNumber: 9499,
    rating: 4.9,
    reviewsCount: 220,
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    shortDesc: "Discover the breathtaking Lake Pichola, towering City Palace complex, Jagmandir Island, and sunset boat rides.",
    fullOverview: "Udaipur is celebrated worldwide as India's most romantic destination. Set around shimmering azure lakes and encircled by the lush green Aravalli hills, its grand palaces, serene ghats, and royal courtyards evoke timeless elegance. Our packages cater to couples and families seeking royal tranquility, lakeside luxury stays, and private sunset cruises.",
    bestTimeToVisit: "September to March (Breezy lake weather)",
    idealDuration: "3 to 5 Days",
    weatherSummary: "18°C - 30°C Pleasant Lake Breeze",
    topHighlights: [
      "Romantic Sunset Boat Cruise on Shimmering Lake Pichola",
      "Massive City Palace Complex Overlooking the Water",
      "Jagmandir Island Palace & Jagdish Temple Architecture",
      "Saheliyon Ki Bari (Garden of the Maids of Honour) Fountains",
      "Sunset View from Sajjangarh Monsoon Palace on Aravalli Hill"
    ],
    suggestedItinerary: [
      { day: "Day 1", title: "Arrival in Udaipur & Lakeside Sunset", desc: "Pickup and check-in to lakeside hotel. Evening walk around Ambrai Ghat and candlelit lakeside dining." },
      { day: "Day 2", title: "City Palace & Lake Pichola Cruise", desc: "Detailed tour of City Palace museum, Crystal Gallery, Jagdish Temple, followed by sunset boat ride to Jagmandir." },
      { day: "Day 3", title: "Gardens, Vintage Cars & Monsoon Palace", desc: "Visit Saheliyon Ki Bari, Vintage Car Museum, and panoramic drive to Sajjangarh Monsoon Palace." },
      { day: "Day 4", title: "Fateh Sagar Lake & Departure", desc: "Morning coffee by Fateh Sagar Lake, visit Shilpgram artisan village, and departure transfer." }
    ],
    inclusions: ["3 Nights Deluxe Heritage/Lake-view Accommodation", "Daily Breakfast & 1 Royal Dinner", "Lake Pichola Boat Cruise Ticket", "AC Vehicle for Sightseeing & Transfers", "Toll, Parking & Driver Allowances"],
    exclusions: ["Camera charges and palace entrance tickets", "Personal tips and shopping"]
  },
  {
    id: "rishikesh",
    name: "Rishikesh",
    tagline: "Yoga Capital of the World & River Rafting Hub",
    category: "pilgrimage",
    categoryLabel: "Spiritual & Adventure",
    badge: "Adventure Pick",
    duration: "2N / 3D",
    priceStarting: "₹6,499",
    priceNumber: 6499,
    rating: 4.8,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=900&q=80",
    shortDesc: "Conquer grade III river rapids on the holy Ganges, experience divine evening Ganga Aarti, and stay in scenic riverside luxury camps.",
    fullOverview: "Rishikesh is where high-octane adventure meets serene spiritual contemplation at the foothills of the Garhwal Himalayas. Renowned globally as the Yoga Capital, it also draws thousands for whitewater rafting, cliff jumping, bungee jumping, and soul-stirring Ganga Aarti at Parmarth Niketan and Triveni Ghat. Mishra Tours organizes weekend group getaways from Boisar & Mumbai with private transport, riverside Swiss tents, rafting passes, and bonfires.",
    bestTimeToVisit: "September to November & March to May",
    idealDuration: "3 to 4 Days",
    weatherSummary: "16°C - 30°C Fresh Mountain & River Air",
    topHighlights: [
      "16km Thrilling White Water River Rafting (Shivpuri to NIM Beach)",
      "World-Famous Ganga Aarti at Parmarth Niketan & Triveni Ghat",
      "Riverside Swiss Camp Stay with Evening Bonfire & Live Music",
      "Iconic Suspension Bridges: Ram Jhula & Lakshman Jhula",
      "The Beatles Ashram (Chaurasi Kutia) Historic Meditation Caves"
    ],
    suggestedItinerary: [
      { day: "Day 1", title: "Arrival in Rishikesh & Riverside Camping", desc: "Pickup and check-in to Riverside Luxury Swiss Tent Camp. Enjoy volleyball, evening tea, riverside walk, and musical bonfire dinner." },
      { day: "Day 2", title: "Whitewater Rafting & Spiritual Bridges", desc: "Experience 16km thrilling Ganga rafting with cliff jumping. Afternoon tour of Ram Jhula, Gita Bhawan, and Parmarth Niketan Ganga Aarti." },
      { day: "Day 3", title: "Beatles Ashram & Departure", desc: "Morning yoga session by the Ganges, visit Beatles Ashram and Neer Garh Waterfall before departure." }
    ],
    inclusions: ["2 Nights Luxury Swiss Tent / Hotel Stay", "All Meals (Breakfast, Lunch & Camp Buffet Dinner)", "16km River Rafting with Certified Guide & Safety Gear", "Evening Campfire & Barbecue Snacks", "Private Transport for Sightseeing"],
    exclusions: ["Bungee jumping or Giant Swing charges", "Personal expenses"]
  },
  {
    id: "andaman",
    name: "Andaman",
    tagline: "Turquoise Waters, Coral Reefs & White Sand Islands",
    category: "beaches",
    categoryLabel: "Tropical Paradise",
    badge: "Exotic Island",
    duration: "4N / 5D",
    priceStarting: "₹21,999",
    priceNumber: 21999,
    rating: 4.9,
    reviewsCount: 165,
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=80",
    shortDesc: "Discover India's most pristine tropical islands, walk Radhanagar Beach, dive into vibrant coral reefs, and visit historic Cellular Jail.",
    fullOverview: "The Andaman and Nicobar Islands are an emerald archipelago in the Bay of Bengal, famous for radiant turquoise waters, virgin white sand beaches, thriving coral reefs, and lush rainforests. Mishra Tours crafts seamless island itineraries including inter-island cruise ferry tickets (Makruzz/Green Ocean), beachfront luxury resorts, scuba diving expeditions, and guided light-and-sound shows at Cellular Jail.",
    bestTimeToVisit: "October to May (Calm seas & bright sunny skies)",
    idealDuration: "5 to 7 Days",
    weatherSummary: "23°C - 30°C Breezy Tropical Island",
    topHighlights: [
      "Asia's Best Radhanagar Beach (Beach No. 7) Spectacular Sunset",
      "Scuba Diving & Sea Walk at Elephant Beach Coral Reefs",
      "High-Speed Luxury Catamaran Cruise to Havelock & Neil Islands",
      "Historic Cellular Jail Light & Sound Show in Port Blair",
      "Natural Rock Bridge & Laxmanpur Beach on Neil Island"
    ],
    suggestedItinerary: [
      { day: "Day 1", title: "Arrival in Port Blair & Cellular Jail", desc: "Port Blair airport pickup. Hotel check-in. Afternoon visit to Cellular Jail National Memorial and evening Light & Sound Show." },
      { day: "Day 2", title: "Luxury Cruise to Havelock Island & Radhanagar", desc: "Board high-speed catamaran cruise to Havelock Island. Afternoon leisure and golden sunset at world-famous Radhanagar Beach." },
      { day: "Day 3", title: "Elephant Beach Coral Reef Water Sports", desc: "Speedboat ride to Elephant Beach for complimentary snorkeling, optional scuba diving, jet skiing, and sea walking." },
      { day: "Day 4", title: "Neil Island Exploration & Return to Port Blair", desc: "Ferry to Neil Island to see Natural Rock Bridge and Bharatpur beach corals. Return cruise to Port Blair." },
      { day: "Day 5", title: "Departure with Island Memories", desc: "Transfer to Veer Savarkar Airport Port Blair for flight home." }
    ],
    inclusions: ["4 Nights Deluxe Beach Resort & Hotel Accommodations", "Daily Breakfast at all hotels", "Inter-Island Catamaran Cruise Tickets (Port Blair - Havelock - Neil)", "Private AC Car for all transfers and tours on islands", "Assistance at all arrival and departure points"],
    exclusions: ["Airfare to Port Blair", "Scuba diving / Sea walk charges (can be pre-booked)", "Lunches & dinners unless specified"]
  },
  {
    id: "kerala",
    name: "Kerala",
    tagline: "God's Own Country - Misty Tea Gardens & Houseboat Lagoons",
    category: "hills",
    categoryLabel: "Nature & Lagoons",
    badge: "Top Rated",
    duration: "4N / 5D",
    priceStarting: "₹15,499",
    priceNumber: 15499,
    rating: 4.9,
    reviewsCount: 290,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
    shortDesc: "Cruise serene palm-fringed backwaters on a traditional Kettuvallam houseboat, explore rolling Munnar tea estates, and savor spiced cuisine.",
    fullOverview: "Kerala is a tropical paradise of extraordinary natural beauty, rich Ayurvedic traditions, and tranquil waterways. From the emerald green tea plantations of Munnar and the spice-scented hills of Thekkady to the dreamlike backwaters of Alleppey, our Kerala tour is tailored for families, nature enthusiasts, and honeymooners looking for peaceful rejuvenating getaways.",
    bestTimeToVisit: "September to March (Pleasant) & June to August (Ayurvedic Monsoon Season)",
    idealDuration: "5 to 7 Days",
    weatherSummary: "22°C - 31°C Lush Tropical & Misty Hills",
    topHighlights: [
      "Overnight Private Houseboat Cruise through Alleppey Backwaters",
      "Rolling Green Tea Plantations & Mattupetty Dam in Munnar",
      "Periyar Wildlife Sanctuary Jungle Boat Safari in Thekkady",
      "Authentic Kathakali Dance & Kalaripayattu Martial Arts Show",
      "Traditional Kerala Sadhya Feast Served on Fresh Banana Leaf"
    ],
    suggestedItinerary: [
      { day: "Day 1", title: "Cochin Arrival & Scenic Drive to Munnar", desc: "Cochin Airport/Railway pickup. Scenic drive passing Cheeyappara waterfalls. Check-in to resort among tea gardens." },
      { day: "Day 2", title: "Munnar Tea Estates & Eravikulam National Park", desc: "Visit Eravikulam National Park (home of Nilgiri Tahr), Tata Tea Museum, Mattupetty Dam, and Echo Point." },
      { day: "Day 3", title: "Munnar to Thekkady Spice Plantations", desc: "Drive to Thekkady. Spice plantation tour, boat safari in Periyar Lake, and evening cultural martial arts show." },
      { day: "Day 4", title: "Thekkady to Alleppey Houseboat Experience", desc: "Drive to Alleppey. Board traditional luxury houseboat at noon. Cruise through canals, paddy fields, with onboard chef meals." },
      { day: "Day 5", title: "Disembark & Cochin City Tour Departure", desc: "Breakfast on houseboat, transfer to Cochin. Visit Chinese Fishing Nets and Jewish Synagogue before airport transfer." }
    ],
    inclusions: ["3 Nights Deluxe Hill Resort + 1 Night Private Houseboat", "All Meals on Houseboat (Lunch, Dinner, Breakfast) + Daily Resort Breakfasts", "Private AC Cab for all Transfers & Sightseeing", "Spice Plantation Guided Tour Entry", "Tolls, Parking & Driver Allowances"],
    exclusions: ["Airfare/Train tickets", "Periyar boat safari ticket", "Personal Ayurvedic treatments"]
  },
  {
    id: "shimla",
    name: "Shimla",
    tagline: "The Queen of Hills - Colonial Charms & Snowy Peaks",
    category: "hills",
    categoryLabel: "Colonial Hills",
    badge: "Family Classic",
    duration: "3N / 4D",
    priceStarting: "₹8,999",
    priceNumber: 8999,
    rating: 4.7,
    reviewsCount: 245,
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=900&q=80",
    shortDesc: "Stroll along historic Mall Road, admire Gothic British architecture, take the iconic Kalka-Shimla toy train, and play in Kufri snow.",
    fullOverview: "Shimla, the former summer capital of British India, retains timeless charm with its neo-Gothic Christ Church, pedestrianized Mall Road, and panoramic vistas of snow-capped Himalayan ranges. Mishra Tours provides comfortable round-trip transportation from Delhi/Chandigarh with experienced drivers, luxury hill hotels, and excursions to Kufri and Chail.",
    bestTimeToVisit: "March to June (Summer breeze) & December to February (Snowfall season)",
    idealDuration: "3 to 4 Days",
    weatherSummary: "2°C - 22°C Crisp Mountain Air",
    topHighlights: [
      "Leisure Strolls along The Ridge & Historic Mall Road",
      "Spectacular Himalayan Snow Views & Yak Rides in Kufri",
      "Ancient Jakhoo Temple & World's Tallest Lord Hanuman Statue",
      "Viceregal Lodge (Indian Institute of Advanced Study) Architecture",
      "UNESCO World Heritage Kalka-Shimla Mountain Toy Train Ride"
    ],
    suggestedItinerary: [
      { day: "Day 1", title: "Chandigarh/Delhi to Shimla Scenic Climb", desc: "Pickup and scenic drive through the Himalayan foothills. Check-in to Shimla resort. Evening stroll along Mall Road & The Ridge." },
      { day: "Day 2", title: "Kufri Snow Adventure & Chail Heritage", desc: "Day trip to Kufri. Enjoy horse riding, snow park activities, Himalayan Nature Park, and panoramic valley viewpoints." },
      { day: "Day 3", title: "Shimla Colonial Heritage & Jakhoo Peak", desc: "Take the Jakhoo Ropeway to Hanuman Temple on peak, visit Viceregal Lodge, Christ Church, and Lakkar Bazaar wooden market." },
      { day: "Day 4", title: "Toy Train Experience & Departure", desc: "Short scenic ride on historic Kalka-Shimla toy train before return transfer to Chandigarh/Delhi." }
    ],
    inclusions: ["3 Nights Premium Hill Hotel Accommodation", "Daily Breakfast & Dinner", "Dedicated AC Cab for Hill Circuit", "Kufri Excursion & Sightseeing", "All Mountain Tolls and Parking"],
    exclusions: ["Toy train tickets (subject to availability)", "Horse ride and snow park activity tickets", "Lunches and shopping"]
  }
];

// ================= 8 MASTER TOUR PACKAGES =================
const MTT_PACKAGES = [
  {
    id: "pkg-kedarnath",
    title: "Sacred Kedarnath & Badrinath Yatra",
    destination: "Kedarnath & Badrinath",
    category: "pilgrimage",
    categoryLabel: "Pilgrimage Yatra",
    duration: "5N / 6D",
    price: "₹18,499",
    originalPrice: "₹22,000",
    priceNumber: 18499,
    badge: "Spiritual Bestseller",
    rating: 5.0,
    reviews: 512,
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=900&q=80",
    highlights: ["VIP Darshan at Kedarnath Jyotirlinga", "Helicopter / Trek Option from Phata", "Haridwar & Rishikesh Ganga Aarti", "Sattvic Pure Veg Meals Onboard"],
    inclusions: ["Hotel & Guest House Stays", "Breakfast & Dinner", "AC Transport (Haridwar-Haridwar)", "Yatra Registration Support", "24/7 Group Marshall"],
    exclusions: ["Helicopter Fare (Assisted)", "Pony/Doli Charges", "Personal Poojas"],
    description: "The most divine pilgrimage of a lifetime. Join our expertly managed group yatra departing weekly with comfortable stays, guided trekking support, and personalized care by Shivam Mishra & Satyam Mishra."
  },
  {
    id: "pkg-goa",
    title: "Goa Beach Carnival & Watersports",
    destination: "Goa",
    category: "honeymoon",
    categoryLabel: "Honeymoon & Leisure",
    duration: "3N / 4D",
    price: "₹11,999",
    originalPrice: "₹15,000",
    priceNumber: 11999,
    badge: "Trending Fun",
    rating: 4.9,
    reviews: 320,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    highlights: ["Beachfront Resort with Swimming Pool", "Mandovi River Sunset Cruise", "North & South Goa AC Sightseeing", "Watersports Combo Ticket"],
    inclusions: ["3 Nights 3-Star Resort", "Daily Breakfast & Dinner", "AC Cab for Transfers & Tours", "Cruise Ticket", "Welcome Drink"],
    exclusions: ["Airfare/Train", "Personal Water Activities", "Alcoholic Drinks"],
    description: "Unwind on golden beaches, explore Portuguese forts, dance to live music, and savor delectable coastal seafood with friends or family."
  },
  {
    id: "pkg-kashmir",
    title: "Heavenly Kashmir Paradise Tour",
    destination: "Kashmir",
    category: "family",
    categoryLabel: "Family & Honeymoon",
    duration: "5N / 6D",
    price: "₹24,999",
    originalPrice: "₹29,000",
    priceNumber: 24999,
    badge: "Luxury Premium",
    rating: 4.9,
    reviews: 410,
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80",
    highlights: ["Royal Dal Lake Houseboat Stay", "Gulmarg Gondola Ride Excursion", "Pahalgam Betaab & Aru Valley", "Complimentary Shikara Ride"],
    inclusions: ["1N Houseboat + 4N Deluxe Resort", "Breakfast & Dinner (MAP)", "Private Hill Cab for All Tours", "1 Hour Shikara Ride", "All Tolls"],
    exclusions: ["Gondola Tickets", "Pony Rides", "Flight Tickets"],
    description: "Bask in the divine valleys of Srinagar, Gulmarg, and Pahalgam. Experience crisp mountain air, shikara boat rides, and unmatched hospitality."
  },
  {
    id: "pkg-manali",
    title: "Manali & Rohtang Snow Adventure",
    destination: "Manali",
    category: "adventure",
    categoryLabel: "Adventure & Hills",
    duration: "4N / 5D",
    price: "₹13,999",
    originalPrice: "₹17,500",
    priceNumber: 13999,
    badge: "Youth Favorite",
    rating: 4.8,
    reviews: 290,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
    highlights: ["Solang Valley Adventure Passes", "Engineering Marvel Atal Tunnel", "Beas River Whitewater Rafting", "Hadimba Temple & Mall Road"],
    inclusions: ["4 Nights Valley-Facing Hotel", "Daily Breakfast & Dinner", "Dedicated Cab for All Tours", "Solang Excursion", "Bonfire Evening"],
    exclusions: ["Rohtang NGT Special Cab", "Paragliding & Rafting Fees", "Lunch"],
    description: "Packed with thrilling mountain sports, high snow peaks, apple orchards, and pine-clad rivers. Ideal for college groups, friends, and families."
  },
  {
    id: "pkg-rajasthan",
    title: "Royal Rajasthan Heritage Circuit",
    destination: "Jaipur & Udaipur",
    category: "family",
    categoryLabel: "Royal Heritage",
    duration: "5N / 6D",
    price: "₹21,999",
    originalPrice: "₹26,000",
    priceNumber: 21999,
    badge: "Heritage Classic",
    rating: 4.9,
    reviews: 230,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    highlights: ["Amber Fort & City Palace Jaipur", "Romantic Lake Pichola Boat Cruise", "Chokhi Dhani Cultural Dinner", "Heritage Haveli Accommodations"],
    inclusions: ["5 Nights Royal Haveli Stays", "Daily Buffet Breakfast & 1 Dinner", "AC Cab for Interstate Travel", "Lake Boat Cruise", "Guide Charges"],
    exclusions: ["Fort Entry Tickets", "Elephant Rides", "Personal Shopping"],
    description: "Step into the era of Maharajas. Walk through massive hilltop forts, royal courtyards, mirror palaces, and shimmering lakes."
  },
  {
    id: "pkg-kerala",
    title: "Enchanting Kerala Backwaters & Hills",
    destination: "Kerala",
    category: "family",
    categoryLabel: "Nature & Family",
    duration: "4N / 5D",
    price: "₹16,499",
    originalPrice: "₹20,000",
    priceNumber: 16499,
    badge: "Top Green Retreat",
    rating: 4.9,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
    highlights: ["Private Deluxe Houseboat Cruise", "Munnar Rolling Tea Gardens", "Thekkady Spice Plantation Walk", "Authentic Kerala Sadhya Feast"],
    inclusions: ["3N Resort + 1N Private Houseboat", "All Houseboat Meals + Breakfasts", "Private AC Cab for Full Trip", "Spice Garden Entry", "All Taxes"],
    exclusions: ["Flight/Train Tickets", "Ayurvedic Spa Massages", "Personal Tips"],
    description: "Rejuvenate your soul in God's Own Country. Glide on serene canals, taste aromatic spices, and wake up to misty mountain plantations."
  },
  {
    id: "pkg-rishikesh",
    title: "Rishikesh Thrill & Ganga Camping",
    destination: "Rishikesh",
    category: "adventure",
    categoryLabel: "Adventure & Camping",
    duration: "2N / 3D",
    price: "₹6,999",
    originalPrice: "₹9,000",
    priceNumber: 6999,
    badge: "Weekend Special",
    rating: 4.8,
    reviews: 340,
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=900&q=80",
    highlights: ["16km Ganga River Rafting & Cliff Jump", "Luxury Riverside Swiss Tent Camp", "Musical Bonfire with Barbecue", "Parmarth Niketan Ganga Aarti"],
    inclusions: ["2 Nights Camp Stay with Attached Bath", "All 3 Meals (Buffet)", "Rafting with Life Jackets & Helmets", "Evening Bonfire & Snacks", "Sightseeing"],
    exclusions: ["Bungee Jumping Tickets", "Personal Transport to Camp"],
    description: "The ultimate adrenaline booster! Conquer grade III rapids with certified river marshalls and celebrate around starlit campfires."
  },
  {
    id: "pkg-andaman",
    title: "Exotic Andaman Island Dream",
    destination: "Andaman",
    category: "honeymoon",
    categoryLabel: "Island & Honeymoon",
    duration: "4N / 5D",
    price: "₹28,999",
    originalPrice: "₹34,000",
    priceNumber: 28999,
    badge: "Exotic Luxury",
    rating: 5.0,
    reviews: 175,
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=80",
    highlights: ["Radhanagar Sunset Beach No. 7", "High-Speed Catamaran Cruise", "Elephant Beach Snorkeling Passes", "Cellular Jail Sound & Light Show"],
    inclusions: ["4 Nights Deluxe Island Resorts", "Daily Buffet Breakfast", "All Inter-Island Ferry Tickets", "Private AC Cabs on All Islands", "Tour Manager"],
    exclusions: ["Flights to Port Blair", "Scuba Diving & Sea Walk Fees", "Lunches"],
    description: "Immerse yourself in crystal turquoise waters, pristine corals, and powdery white shores. The pinnacle of luxury island holidays."
  }
];

// ================= 4 MASTER VEHICLE FLEET =================
const MTT_VEHICLES = [
  {
    id: "tempo-traveller",
    name: "Luxury Force Tempo Traveller",
    category: "tempo",
    categoryTitle: "Tempo Traveller",
    badge: "Most Popular for Groups",
    capacity: "12, 17, 20 & 26 Seater",
    seatsNumber: 17,
    pricing: "Starting from ₹24 / km",
    driverAllowance: "₹500 / day",
    idealFor: "Family Trips, Pilgrimage Yatras, Corporate Outings & Wedding Parties",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
    features: [
      "Ultra-Comfortable 2x1 Pushback Maharaja Recliner Seats",
      "Powerful Dual High-Capacity Chilled Air Conditioning",
      "Individual Mobile Fast-Charging USB Ports on Every Seat",
      "Ample Luggage Boot + Sturdy Overhead Luggage Carrier",
      "Android Smart LED TV & High-Fidelity Bluetooth Sound System",
      "GPS Real-Time Live Fleet Tracking & Speed Governor Safety"
    ],
    description: "The absolute gold standard for medium group travel across Maharashtra, Gujarat, Rajasthan, and North India circuits. Engineered for maximum legroom, smooth suspension over long highway runs, and supreme passenger luxury."
  },
  {
    id: "mini-bus",
    name: "Executive AC Mini Bus",
    category: "minibus",
    categoryTitle: "Mini Bus",
    badge: "Ideal for 20-32 Guests",
    capacity: "20 to 32 Seater Deluxe",
    seatsNumber: 28,
    pricing: "Starting from ₹32 / km",
    driverAllowance: "₹600 / day",
    idealFor: "School/College Excursions, Corporate Offsites, Large Family Picnics & Temple Tours",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80",
    features: [
      "Ergonomic High-Back Recliner Seats with Center Armrests",
      "Sub-Zero Roof-Mounted Climate Control AC Units",
      "Air Suspension for Ultra-Smooth Highway Comfort",
      "Spacious Underfloor Luggage Bins for Large Suitcases",
      "PA Microphone System for Tour Leaders and Guides",
      "Emergency Exits, First Aid Kit & Fire Extinguishers"
    ],
    description: "Compact yet exceptionally spacious, our deluxe mini buses offer the agility to navigate scenic hill roads and city routes while providing full luxury coach comforts for groups of 20 to 32 travelers."
  },
  {
    id: "tourist-bus",
    name: "Luxury Tourist Bus & Volvo Sleeper",
    category: "touristbus",
    categoryTitle: "Tourist Bus",
    badge: "Premier Long-Haul Coach",
    capacity: "45 to 55 Seater AC Sleeper & Semi-Sleeper",
    seatsNumber: 49,
    pricing: "Starting from ₹48 / km",
    driverAllowance: "₹800 / day",
    idealFor: "All-India Pilgrimage Yatras, Mega Corporate Events, Destination Weddings & School Camps",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
    features: [
      "Plush 2x2 Semi-Sleeper or Full Upper/Lower Sleeper Berths",
      "Whisper-Quiet Multi-Axle Volvo & BharatBenz Suspension",
      "Individual Air Vents, Reading Lights & USB Charging Hubs",
      "Massive Commercial Underbody Luggage Storage Compartments",
      "Dual Smart LED Screens with Digital Entertainment Hub",
      "Two Professional Long-Distance Certified Commercial Drivers"
    ],
    description: "Designed for grand pan-India expeditions like Char Dham Yatra, South India circuits, and Rajasthan tours. Our luxury large coaches ensure every passenger travels in first-class comfort without exhaustion."
  },
  {
    id: "private-cab",
    name: "Premium Private Cabs (Innova Crysta & Sedans)",
    category: "privatecab",
    categoryTitle: "Private Cab",
    badge: "VIP Chauffeur Driven",
    capacity: "4 to 7 Seater (Innova Crysta, Ertiga, Dzire)",
    seatsNumber: 7,
    pricing: "Starting from ₹14 / km",
    driverAllowance: "₹400 / day",
    idealFor: "Airport Pick & Drop, VIP Outstation Travel, Small Family Getaways & Business Meetings",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
    features: [
      "Luxury Captain Chairs (Toyota Innova Crysta & Ertiga)",
      "Spotless, Sanitized, Non-Smoking Interiors with Fragrance",
      "Automatic Dual-Zone Climate Conditioning",
      "Polite, Uniformed, Punctual & Route-Expert Chauffeurs",
      "Fastag Enabled for Instant Express Highway Toll Transit",
      "Flexible Hourly Rentals and Point-to-Point City Drops"
    ],
    description: "Experience premium personalized luxury with our private cab fleet. Perfect for seamless Mumbai Airport transfers from Boisar/Palghar, Pune business trips, Shirdi weekend yatras, or scenic coastal drives."
  }
];

// ================= PHOTO & VIDEO GALLERY =================
const MTT_GALLERY = [
  {
    id: 1,
    title: "Kedarnath Temple Morning Aarti",
    category: "yatras",
    categoryLabel: "Spiritual Yatras",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=900&q=80",
    caption: "Devotees experiencing divine morning darshan at Baba Kedar with snow peaks in the backdrop."
  },
  {
    id: 2,
    title: "Solang Valley Snow Adventure",
    category: "hills",
    categoryLabel: "Mountains & Hills",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
    caption: "Family group enjoying thrilling snow scooter rides in Solang Valley, Manali."
  },
  {
    id: 3,
    title: "Goa Baga Beach Sunset Bliss",
    category: "beaches",
    categoryLabel: "Coastal Beaches",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    caption: "Golden hour over the Arabian Sea with gentle beach waves and evening music."
  },
  {
    id: 4,
    title: "Mishra Luxury Tempo Traveller Fleet",
    category: "fleet",
    categoryLabel: "Our Luxury Fleet",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=80",
    caption: "Clean, modern, GPS-equipped luxury Tempo Travellers ready for dispatch from Boisar."
  },
  {
    id: 5,
    title: "Dal Lake Shikara Morning Glow",
    category: "hills",
    categoryLabel: "Mountains & Hills",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80",
    caption: "Traditional Kashmiri Shikara gliding across tranquil lotus-dotted waters of Dal Lake."
  },
  {
    id: 6,
    title: "Amber Fort Majestic Elephant Ascent",
    category: "heritage",
    categoryLabel: "Royal Heritage",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    caption: "Tourists marveling at the towering pink sandstone walls of Amber Citadel, Jaipur."
  },
  {
    id: 7,
    title: "Lake Pichola Sunset Palace Cruise",
    category: "heritage",
    categoryLabel: "Royal Heritage",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    caption: "Romantic boat ride beside the glowing marble walls of Jagmandir Island, Udaipur."
  },
  {
    id: 8,
    title: "White Water Rafting on Holy Ganga",
    category: "adventure",
    categoryLabel: "Adventure & Thrills",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=900&q=80",
    caption: "Our enthusiastic guest group conquering rapid waters in Rishikesh with safety helmets."
  },
  {
    id: 9,
    title: "Pristine Radhanagar Beach Andaman",
    category: "beaches",
    categoryLabel: "Coastal Beaches",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=80",
    caption: "Turquoise lagoon and powdery white sands at Asia's award-winning Radhanagar Beach."
  },
  {
    id: 10,
    title: "Alleppey Backwater Luxury Houseboat",
    category: "nature",
    categoryLabel: "Nature & Lagoons",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
    caption: "Guests relaxing on the front sundeck of a traditional Kerala wood and coir houseboat."
  },
  {
    id: 11,
    title: "Shimla Historic Mall Road Evening",
    category: "hills",
    categoryLabel: "Mountains & Hills",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=900&q=80",
    caption: "Illuminated colonial promenade on Mall Road with vibrant mountain crowds."
  },
  {
    id: 12,
    title: "Executive Luxury Tourist Coach",
    category: "fleet",
    categoryLabel: "Our Luxury Fleet",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80",
    caption: "Multi-axle AC tourist coach ready for a 45-passenger corporate expedition."
  }
];

// ================= TESTIMONIALS DATA =================
const MTT_TESTIMONIALS = [
  {
    id: 1,
    name: "Rajeshwar Sharma",
    location: "Boisar, Maharashtra",
    trip: "Kedarnath & Badrinath Yatra",
    rating: 5,
    date: "May 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    comment: "Our family completed the holy Kedarnath Yatra with Mishra Tours & Travels. Shivam Mishra ji personally managed our helicopter bookings and mountain lodging in Guptkashi. The driver was exceptionally calm and skilled on high mountain hairpin turns. 100% trustworthy travel company from Boisar!"
  },
  {
    id: 2,
    name: "Dr. Ananya Kulkarni",
    location: "Mumbai, Maharashtra",
    trip: "Kashmir Paradise 6-Day Holiday",
    rating: 5,
    date: "April 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    comment: "Booked a customized honeymoon package to Kashmir. The houseboat stay on Dal Lake was out of a fairy tale! Satyam Mishra kept in touch via WhatsApp throughout our trip to make sure every vehicle transfer in Gulmarg and Pahalgam was seamless. Highly recommended!"
  },
  {
    id: 3,
    name: "Vikramaditya Chauhan",
    location: "Palghar, Maharashtra",
    trip: "Corporate Offsite to Goa (26-Seater Tempo)",
    rating: 5,
    date: "March 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    comment: "Hired a 26-seater luxury Tempo Traveller for our corporate team trip from Boisar to North Goa. Chilled AC, USB ports on every seat, and comfortable pushback recliners. The vehicle arrived 20 minutes before time and the chauffeur was very professional."
  },
  {
    id: 4,
    name: "Sunita & Ramesh Patel",
    location: "Vapi, Gujarat",
    trip: "Royal Rajasthan Circuit (Jaipur & Udaipur)",
    rating: 5,
    date: "February 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    comment: "Mishra Tours gave us the best price quotation and top heritage hotels in Udaipur and Jaipur. The private Innova was spotless and the boat cruise on Lake Pichola at sunset was unforgettable. Genuine people who care about your family's comfort."
  },
  {
    id: 5,
    name: "Amitabh Banerjee",
    location: "Thane, Maharashtra",
    trip: "Manali & Solang Valley Snow Trip",
    rating: 5,
    date: "January 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80",
    comment: "Traveled with college friends to Manali. The hotel had incredible snow mountain views and the food was delicious. Solang Valley adventure and Atal Tunnel drive were executed without a single delay. Will definitely book all future trips with Mishra Travels!"
  },
  {
    id: 6,
    name: "Pooja Deshmukh",
    location: "Pune, Maharashtra",
    trip: "Kerala Backwaters & Munnar Honeymoon",
    rating: 5,
    date: "May 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&q=80",
    comment: "The Alleppey private houseboat was the highlight of our Kerala trip! Fresh meals cooked right on the boat, clean rooms, and relaxing scenery. Thank you Mishra Tours and Travels for making our dream vacation hassle-free!"
  }
];

if (typeof window !== 'undefined') {
  window.MTT_CONFIG = MTT_CONFIG;
  window.MTT_DESTINATIONS = MTT_DESTINATIONS;
  window.MTT_PACKAGES = MTT_PACKAGES;
  window.MTT_VEHICLES = MTT_VEHICLES;
  window.MTT_GALLERY = MTT_GALLERY;
  window.MTT_TESTIMONIALS = MTT_TESTIMONIALS;
}
