# 🏠 ApnaGhar – Student-Friendly Rental Platform

**ApnaGhar** is a full-stack rental web application built to help students and individuals find affordable housing with ease. It allows users to list, browse, and manage rental properties with a clean and responsive interface.

![ApnaGhar Banner](https://your-image-url-if-any.com/banner.png)

## 🔗 Live Demo

👉 [Visit Live Site](https://apnaghar-7qbd.onrender.com/listings)

---

## ✨ Features

- 🔍 Browse available rental listings
- 🏠 Add your own rental property
- 🧾 Detailed listing page with photos and description
- 🧭 Google Map location support
- 🔐 Authentication and authorization (login/signup)
- 🗃️ MongoDB-powered listing storage
- 📦 Cloudinary for image uploads
- 💻 Responsive UI using Bootstrap
- 🌐 Deployed on Render

---

## 📸 Screenshots

> You can add screenshots of your homepage, listing page, and form page here  
> Example:
> ![Listing Page](https://your-screenshot-url.com/listing.png)

---

## 🛠️ Tech Stack

**Frontend**  
- HTML5  
- CSS3  
- Bootstrap

**Backend**  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Cloudinary (for image uploads)  
- Mapbox or Google Maps (for location)

**Deployment**  
- Render (Backend + Frontend hosted together)

---

## 🚀 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/AnuragSinghDhami/ApnaGhar.git
cd ApnaGhar

# 2. Install dependencies
npm install

# 3. Create a `.env` file in the root and add:
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
MAP_TOKEN=your_mapbox_token
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret

# 4. Start the server
npm start

# App will run on http://localhost:8080
