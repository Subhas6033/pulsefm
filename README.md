# 🎧 PulseFM - Music listening application

PulseFM is a modern music streaming and listening web application inspired by Spotify. It allows users to discover, upload, and enjoy music with a clean UI, smooth interactions, and secure authentication. This project is built as part of my personal portfolio to showcase full-stack development skills.

---

## 🚀 Features

- 🎶 Stream and play music seamlessly
- 🔍 Browse tracks and playlists
- ❤️ Like and manage favorite songs
- ☁️ Upload music files with Cloudinary
- 🔐 Secure authentication and user management with Clerk
- ⚡ Fast and responsive UI
- 🌙 Modern, accessible design using ShadcnUI

---

## 🛠️ Tech Stack

### Frontend

- **TypeScript**
- **React**
- **Vite**
- **Tailwind CSS**
- **ShadcnUI**
- **Zustand** (state management)
- **Clerk** (authentication)

### Backend

- **Node.js**
- **Express.js**
- **MongoDB**
- **Cloudinary** (music & image uploads)

## ⚙️ Environment Variables

### Frontend (`.env`)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_API_BASE_URL=http://localhost:5000
```

### Backend (`.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLERK_SECRET_KEY=your_clerk_secret
```

---

## 🧑‍💻 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/pulsefm.git
cd pulsefm
```

### 2️⃣ Install dependencies

#### Frontend

```bash
cd client
npm install
npm run dev
```

#### Backend

```bash
cd server
npm install
npm run dev
```

---

## 📸 Screenshots

> Coming soon

---

## 📌 Future Improvements

- Playlist creation & sharing
- Search and recommendation system
- Audio wave visualization
- Mobile responsiveness enhancements
- Offline listening support

---

## 📄 License

This project is for personal and educational purposes.

---

## 🙌 Acknowledgements

- Spotify (inspiration)
- ShadcnUI
- Clerk
- Cloudinary

---

**PulseFM** – Feel the rhythm. Control the vibe. 🎵
