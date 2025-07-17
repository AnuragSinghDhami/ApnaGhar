const sampleListings = [
    {
        title: "Cozy Room near Clock Tower",
        description: "A comfortable and well-maintained single room perfect for students. Located in the heart of the city, with easy access to markets.",
        image: {
            url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            filename: "listing_image_1"
        },
        price: 8500,
        location: "Clock Tower, Dehradun",
        country: "India",
        features: ["Wifi", "Furnished", "Attached Bathroom", "Single Room"],
        geometry: {
            type: "Point",
            coordinates: [78.0322, 30.3250]
        },
    },
    {
        title: "Independent Flat near FRI",
        description: "Spacious 1BHK independent flat with a private kitchen. Ideal for small families or working professionals looking for privacy.",
        image: {
            url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            filename: "listing_image_2"
        },
        price: 12000,
        location: "Forest Research Institute, Dehradun",
        country: "India",
        features: ["Wifi", "Private Kitchen", "Independent"],
        geometry: {
            type: "Point",
            coordinates: [78.0049, 30.3429]
        },
    },
    {
        title: "Shared Room in Paltan Bazaar",
        description: "Affordable double sharing room in a bustling area. Perfect for students on a budget. All basic amenities available.",
        image: {
            url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
            filename: "listing_image_3"
        },
        price: 5500,
        location: "Paltan Bazaar, Dehradun",
        country: "India",
        features: ["Furnished", "Double Sharing", "Within 1km"],
        geometry: {
            type: "Point",
            coordinates: [78.0354, 30.3207]
        },
    },
    {
        title: "Modern Apartment on Rajpur Road",
        description: "A stylish and fully furnished apartment with all modern comforts. Located on the main Rajpur Road with great connectivity.",
        image: {
            url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            filename: "listing_image_4"
        },
        price: 18000,
        location: "Rajpur Road, Dehradun",
        country: "India",
        features: ["Wifi", "Furnished", "Private Kitchen", "Attached Bathroom"],
        geometry: {
            type: "Point",
            coordinates: [78.0487, 30.3484]
        },
    },
    {
        title: "Quiet Stay in Clement Town",
        description: "Peaceful single room away from the city noise. Comes with an attached bathroom and basic furniture. Green surroundings.",
        image: {
            url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            filename: "listing_image_5"
        },
        price: 7000,
        location: "Clement Town, Dehradun",
        country: "India",
        features: ["Furnished", "Attached Bathroom", "Single Room"],
        geometry: {
            type: "Point",
            coordinates: [78.0007, 30.2709]
        },
    },
    {
        title: "Room for Rent near ISBT",
        description: "Conveniently located double sharing room near ISBT, perfect for travelers and students. Easy access to public transport.",
        image: {
            url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            filename: "listing_image_6"
        },
        price: 6000,
        location: "ISBT, Dehradun",
        country: "India",
        features: ["Wifi", "Furnished", "Double Sharing", "Within 1km"],
        geometry: {
            type: "Point",
            coordinates: [77.9949, 30.2917]
        },
    },
    {
        title: "Studio Apartment near Railway Station",
        description: "A compact studio apartment with a private kitchen and bathroom. Excellent for those who commute frequently by train.",
        image: {
            url: "https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            filename: "listing_image_7"
        },
        price: 9500,
        location: "Dehradun Railway Station, Dehradun",
        country: "India",
        features: ["Wifi", "Private Kitchen", "Independent"],
        geometry: {
            type: "Point",
            coordinates: [78.0373, 30.3150]
        },
    },
    {
        title: "Luxury Flat near Pacific Mall",
        description: "Experience luxury in this fully furnished flat with top-notch amenities. A stone's throw away from Pacific Mall.",
        image: {
            url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            filename: "listing_image_8"
        },
        price: 22000,
        location: "Pacific Mall, Dehradun",
        country: "India",
        features: ["Wifi", "Furnished", "Private Kitchen", "Attached Bathroom"],
        geometry: {
            type: "Point",
            coordinates: [78.0567, 30.3601]
        },
    },
    {
        title: "Student PG near DIT University",
        description: "Single and double sharing rooms available for students of DIT University. Mess facility included. Within walking distance from the campus.",
        image: {
            url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
            filename: "listing_image_9"
        },
        price: 7500,
        location: "DIT University, Dehradun",
        country: "India",
        features: ["Wifi", "Furnished", "Double Sharing", "Single Room", "Within 1km"],
        geometry: {
            type: "Point",
            coordinates: [78.1070, 30.3845]
        },
    },
    {
        title: "Independent House near UPES",
        description: "A beautiful independent house available for rent near UPES, Bidholi. Perfect for faculty or a group of students.",
        image: {
            url: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
            filename: "listing_image_10"
        },
        price: 25000,
        location: "UPES, Bidholi, Dehradun",
        country: "India",
        features: ["Furnished", "Private Kitchen", "Independent"],
        geometry: {
            type: "Point",
            coordinates: [77.9698, 30.4206]
        },
    },
    {
        title: "Room near Graphic Era University",
        description: "Well-ventilated single room with attached bathroom. Located very close to Graphic Era University, making it ideal for students.",
        image: {
            url: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
            filename: "listing_image_11"
        },
        price: 8000,
        location: "Graphic Era University, Dehradun",
        country: "India",
        features: ["Wifi", "Attached Bathroom", "Single Room", "Within 1km"],
        geometry: {
            type: "Point",
            coordinates: [78.0005, 30.2785]
        },
    },
    {
        title: "Flat for Rent in Karanpur",
        description: "2BHK flat available in the prime market area of Karanpur. Suitable for families and working professionals.",
        image: {
            url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            filename: "listing_image_12"
        },
        price: 15000,
        location: "Karanpur Market, Dehradun",
        country: "India",
        features: ["Private Kitchen", "Independent"],
        geometry: {
            type: "Point",
            coordinates: [78.0435, 30.3320]
        },
    },
    {
        title: "Shared Accommodation in Ballupur",
        description: "Cost-effective double sharing accommodation at Ballupur Chowk with great connectivity to other parts of the city.",
        image: {
            url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            filename: "listing_image_13"
        },
        price: 5000,
        location: "Ballupur Chowk, Dehradun",
        country: "India",
        features: ["Furnished", "Double Sharing"],
        geometry: {
            type: "Point",
            coordinates: [78.0125, 30.3371]
        },
    },
    {
        title: "Single Room in Prem Nagar",
        description: "A neat and clean single room with an attached kitchen in Prem Nagar. Close to local markets and amenities.",
        image: {
            url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
            filename: "listing_image_14"
        },
        price: 6500,
        location: "Prem Nagar, Dehradun",
        country: "India",
        features: ["Wifi", "Private Kitchen", "Single Room"],
        geometry: {
            type: "Point",
            coordinates: [77.9859, 30.3323]
        },
    },
    {
        title: "Family Home in Raipur",
        description: "Spacious 3BHK house available for rent in a peaceful colony in Raipur. Features a small garden and parking space.",
        image: {
            url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            filename: "listing_image_15"
        },
        price: 19000,
        location: "Raipur, Dehradun",
        country: "India",
        features: ["Furnished", "Private Kitchen", "Independent"],
        geometry: {
            type: "Point",
            coordinates: [78.0945, 30.3157]
        },
    },
    {
        title: "Posh Apartment in Jakhan",
        description: "A high-end, fully furnished apartment in Jakhan. Offers a premium living experience with all modern amenities.",
        image: {
            url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            filename: "listing_image_16"
        },
        price: 24000,
        location: "Jakhan, Dehradun",
        country: "India",
        features: ["Wifi", "Furnished", "Private Kitchen", "Attached Bathroom"],
        geometry: {
            type: "Point",
            coordinates: [78.0645, 30.3680]
        },
    },
    {
        title: "Budget Room near Robber's Cave",
        description: "A simple and affordable room for rent near the famous tourist spot, Robber's Cave. Perfect for nature lovers.",
        image: {
            url: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            filename: "listing_image_17"
        },
        price: 4500,
        location: "Robber's Cave, Dehradun",
        country: "India",
        features: ["Single Room"],
        geometry: {
            type: "Point",
            coordinates: [78.0601, 30.3778]
        },
    },
    {
        title: "Scenic View Stay near Sahastradhara",
        description: "Enjoy breathtaking views from this beautiful room located near Sahastradhara. A peaceful retreat with basic amenities.",
        image: {
            url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            filename: "listing_image_18"
        },
        price: 8800,
        location: "Sahastradhara, Dehradun",
        country: "India",
        features: ["Wifi", "Furnished", "Attached Bathroom"],
        geometry: {
            type: "Point",
            coordinates: [78.1284, 30.3868]
        },
    },
    {
        title: "Guesthouse Room near Tapkeshwar",
        description: "A comfortable room in a guesthouse near Tapkeshwar Temple. Calm and spiritual environment.",
        image: {
            url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            filename: "listing_image_19"
        },
        price: 6200,
        location: "Tapkeshwar Temple, Dehradun",
        country: "India",
        features: ["Attached Bathroom", "Single Room"],
        geometry: {
            type: "Point",
            coordinates: [78.0202, 30.3551]
        },
    },
    {
        title: "Apartment near Malsi Deer Park",
        description: "A lovely apartment with a view of the hills, located close to Malsi Deer Park. Ideal for families and nature enthusiasts.",
        image: {
            url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
            filename: "listing_image_20"
        },
        price: 16000,
        location: "Malsi Deer Park, Dehradun",
        country: "India",
        features: ["Wifi", "Furnished", "Private Kitchen", "Independent"],
        geometry: {
            type: "Point",
            coordinates: [78.0736, 30.3813]
        },
    },
    {
    title: "Cozy Studio near Clock Tower",
    description: "A comfortable and well-lit studio apartment perfect for solo travelers or couples. Located in the heart of the city, with easy access to markets and cafes.",
    image: {
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      filename: "listingimage",
    },
    price: 7500,
    location: "Clock Tower, Dehradun",
    country: "India",
    features: ["Wifi", "Furnished", "Single Room", "Attached Bathroom"],
    geometry: {
      type: "Point",
      coordinates: [78.0322, 30.3255],
    },
  },
  {
    title: "Serene Room near Forest Research Institute",
    description: "Enjoy a peaceful stay in a green neighborhood. Ideal for nature lovers and researchers visiting FRI. The room is part of a quiet, independent house.",
    image: {
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      filename: "listingimage",
    },
    price: 8000,
    location: "FRI, Dehradun",
    country: "India",
    features: ["Wifi", "Independent", "Single Room", "Within 1km"],
    geometry: {
      type: "Point",
      coordinates: [77.9945, 30.3429],
    },
  },
  {
    title: "Adventure Stay near Robber's Cave",
    description: "A perfect base for adventurers! This room is just a short drive from Guchu Pani. Offers a rustic charm with modern amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      filename: "listingimage",
    },
    price: 6500,
    location: "Robber's Cave, Dehradun",
    country: "India",
    features: ["Furnished", "Single Room", "Attached Bathroom"],
    geometry: {
      type: "Point",
      coordinates: [78.0601, 30.3785],
    },
  },
  {
    title: "Relaxing Retreat at Sahastradhara",
    description: "A beautiful room with a view, close to the therapeutic sulphur springs of Sahastradhara. A great place to unwind and rejuvenate.",
    image: {
      url: "https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      filename: "listingimage",
    },
    price: 9000,
    location: "Sahastradhara, Dehradun",
    country: "India",
    features: ["Wifi", "Furnished", "Independent", "Private Kitchen"],
    geometry: {
      type: "Point",
      coordinates: [78.1186, 30.3868],
    },
  },
  {
    title: "Spiritual Stay near Tapkeshwar Temple",
    description: "A simple, clean room in a quiet area near the ancient Tapkeshwar Temple. Perfect for pilgrims and those seeking a tranquil environment.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
      filename: "listingimage",
    },
    price: 5500,
    location: "Tapkeshwar Temple, Dehradun",
    country: "India",
    features: ["Single Room", "Attached Bathroom", "Furnished"],
    geometry: {
      type: "Point",
      coordinates: [78.0166, 30.3496],
    },
  },
  {
    title: "Vibrant Room in Paltan Bazaar",
    description: "Experience the bustling city life! This room is located right in the famous Paltan Bazaar, offering an authentic Dehradun experience.",
    image: {
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      filename: "listingimage",
    },
    price: 7000,
    location: "Paltan Bazaar, Dehradun",
    country: "India",
    features: ["Wifi", "Furnished", "Double Sharing"],
    geometry: {
      type: "Point",
      coordinates: [78.0335, 30.3197],
    },
  },
  {
    title: "Modern Flat on Rajpur Road",
    description: "A stylish and modern flat on the most happening street of Dehradun. Close to top restaurants, showrooms, and cafes.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      filename: "listingimage",
    },
    price: 15000,
    location: "Rajpur Road, Dehradun",
    country: "India",
    features: ["Wifi", "Furnished", "Private Kitchen", "Independent", "Attached Bathroom"],
    geometry: {
      type: "Point",
      coordinates: [78.0510, 30.3470],
    },
  },
  {
    title: "Affordable PG in Clement Town",
    description: "A budget-friendly paying guest accommodation for students and bachelors. Well-connected and close to essential amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      filename: "listingimage",
    },
    price: 6000,
    location: "Clement Town, Dehradun",
    country: "India",
    features: ["Wifi", "Double Sharing", "Furnished"],
    geometry: {
      type: "Point",
      coordinates: [77.9983, 30.2721],
    },
  },
  {
    title: "Convenient Stay near ISBT",
    description: "Perfect for travelers, this room is located very close to the ISBT. Easy access to public transport for exploring the city and beyond.",
    image: {
      url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      filename: "listingimage",
    },
    price: 6800,
    location: "ISBT, Dehradun",
    country: "India",
    features: ["Single Room", "Attached Bathroom", "Within 1km"],
    geometry: {
      type: "Point",
      coordinates: [77.9942, 30.2882],
    },
  },
  {
    title: "Student Room near Doon University",
    description: "An ideal and affordable room for students of Doon University. Located within walking distance from the campus.",
    image: {
      url: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
      filename: "listingimage",
    },
    price: 5000,
    location: "Doon University, Dehradun",
    country: "India",
    features: ["Wifi", "Furnished", "Single Room", "Within 1km"],
    geometry: {
      type: "Point",
      coordinates: [78.0069, 30.2580],
    },
  },
  {
    title: "Quiet Abode in Dalanwala",
    description: "A peaceful and spacious room in the posh locality of Dalanwala. Surrounded by greenery and wide roads, it's perfect for a family stay.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      filename: "listingimage",
    },
    price: 12000,
    location: "Dalanwala, Dehradun",
    country: "India",
    features: ["Wifi", "Furnished", "Private Kitchen", "Independent"],
    geometry: {
      type: "Point",
      coordinates: [78.0488, 30.3188],
    },
  },
  
  {
    title: "Elegant House in Vasant Vihar",
    description: "A beautiful, independent house in one of Dehradun's most well-planned and green colonies. Offers a premium living experience.",
    image: {
      url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      filename: "listingimage",
    },
    price: 18000,
    location: "Vasant Vihar, Dehradun",
    country: "India",
    features: ["Wifi", "Furnished", "Private Kitchen", "Independent"],
    geometry: {
      type: "Point",
      coordinates: [77.9901, 30.3201],
    },
  },
  {
    title: "Student Hostel in Karanpur",
    description: "Affordable hostel-style living in Karanpur, the educational hub of Dehradun. Close to colleges, markets, and coaching centers.",
    image: {
      url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80",
      filename: "listingimage",
    },
    price: 4500,
    location: "Karanpur, Dehradun",
    country: "India",
    features: ["Wifi", "Double Sharing", "Within 1km"],
    geometry: {
      type: "Point",
      coordinates: [78.0435, 30.3275],
    },
  },
  
  {
    title: "Defense Colony Room in Prem Nagar",
    description: "A secure and disciplined environment in Prem Nagar, close to the Indian Military Academy. Ideal for short-term stays.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      filename: "listingimage",
    },
    price: 7200,
    location: "Prem Nagar, Dehradun",
    country: "India",
    features: ["Furnished", "Single Room", "Attached Bathroom", "Independent"],
    geometry: {
      type: "Point",
      coordinates: [77.9735, 30.3340],
    },
  },
  
  {
    title: "Suburban House in Raipur",
    description: "Enjoy the peace of suburban life in this spacious house in Raipur. Ample space, fresh air, and away from the city's hustle.",
    image: {
      url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      filename: "listingimage",
    },
    price: 13000,
    location: "Raipur, Dehradun",
    country: "India",
    features: ["Independent", "Furnished", "Private Kitchen"],
    geometry: {
      type: "Point",
      coordinates: [78.0933, 30.3100],
    },
  },
  {
    title: "Room at Ballupur Chowk Crossing",
    description: "A well-connected room at the busy Ballupur Chowk. Excellent connectivity to Prem Nagar, Vasant Vihar, and the city center.",
    image: {
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      filename: "listingimage",
    },
    price: 6700,
    location: "Ballupur Chowk, Dehradun",
    country: "India",
    features: ["Wifi", "Furnished", "Double Sharing"],
    geometry: {
      type: "Point",
      coordinates: [78.0088, 30.3388],
    },
  },
  {
    title: "Heritage Home near IMA",
    description: "A classic heritage-style room near the prestigious Indian Military Academy. Offers a glimpse into the old-world charm of Dehradun.",
    image: {
      url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      filename: "listingimage",
    },
    price: 10500,
    location: "IMA, Dehradun",
    country: "India",
    features: ["Independent", "Furnished", "Within 1km"],
    geometry: {
      type: "Point",
      coordinates: [78.0019, 30.3392],
    },
  },
];

module.exports = { data: sampleListings };