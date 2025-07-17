# 🏠 ApnaGhar – Student-Friendly Rental Platform

**ApnaGhar** is a full-stack rental web application built to help students and individuals find affordable housing with ease. It allows users to list, browse, and manage rental properties with a clean and responsive interface.

## 🔗 Live Demo

👉 [Visit Live Site](https://apnaghar-7qbd.onrender.com/listings)


---

## 📸 Screenshots

### 🏠 1. Homepage – Rental Listings
A clean, student-friendly interface showcasing all available rental listings.  
![Homepage](./public/images/Screenshot%202025-07-17%20235902.png)

---

### 📄 2. Property Details View
Detailed view of a selected listing with photos, rent info, and description.  
![Show Listing](./public/images/Screenshot%202025-07-17%20235931.png)

---

### 🗺️ 3. Integrated Map Location
Map showing the property’s geographical location using Mapbox/Google Maps.  
![Map View](./public/images/Screenshot%202025-07-17%20235952.png)

---

### ⭐ 4. Reviews Section
Users can rate and review listings — helpful for future renters.  
![Review Section](./public/images/Screenshot%202025-07-18%20000208.png)

---

### ➕ 5. Add New Listing Page
A form interface that lets users upload new rental properties with images.  
![Add Listing](./public/images/Screenshot%202025-07-18%20000120.png)



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
