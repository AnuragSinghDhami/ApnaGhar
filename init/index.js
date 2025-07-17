const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js"); // ✅ Make sure to import User model

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error:");
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await User.deleteMany({}); // optional: remove all existing users

  // ✅ Create a valid user
  const user = new User({
    username: "testuser",
    email: "test@example.com",
  });

  await user.save();

  // ✅ Add that user._id as owner to all listings
  const listingsWithOwner = initdata.data.map((obj) => ({
    ...obj,
    owner: user._id,
  }));

  await Listing.insertMany(listingsWithOwner);
  console.log("Database initialized with valid owner ID");
};

initDB();
