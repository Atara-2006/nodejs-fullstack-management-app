# Art Whisper Boutique 🎨

**A Professional Art Gallery Management System**

Art Whisper Boutique is a robust, secure, and scalable web application designed for artists to manage their digital portfolios. Built using the **MVC architecture**, the system provides a seamless experience for showcasing, adding, and managing artworks.

---

## 🚦 API Endpoints (Quick Reference)

### 🔐 Authentication

* **POST** `/users/register` - Register a new user account.
* **POST** `/users/login` - Authenticate and receive a JWT access token.

### 🖼️ Paintings

* **GET** `/paintings` - Fetch and view all artworks in the gallery.
* **POST** `/paintings/add` - Upload new artwork. *(Requires Token & Artist/Admin Role)*
* **PUT** `/paintings/:id` - Update details of an existing artwork. *(Requires Auth)*
* **DELETE** `/paintings/:id` - Permanently remove artwork from the gallery. *(Admin only)*

---

## ⚙️ Setup & Installation

### 1. Install Dependencies

Ensure you have Node.js installed, then run:

```bash
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory and configure the following variables:

* **PORT** - The port number for the server (e.g., 5000)
* **MONGO_URI** - Your MongoDB connection string
* **JWT_SECRET** - A secure string for signing tokens

### 3. Start the Server

Run the application using Node.js:

```bash
node app.js
```

The server will be accessible at:

```
http://localhost:5000
```

---

## 🛡️ Security & Middleware

The project implements several layers of protection:

* **verifyToken** - Ensures only authenticated users can access protected routes
* **isArtist / isAdmin** - Validates user roles before allowing data modification
* **checkPaintingExists** - Prevents errors by verifying the existence of an ID before processing
* **Centralized Error Handler** - Provides consistent and clear error messages

---

## 👤 Author

**Atara Shtiglitz 👩‍💻**
Full-stack Developer Student

Created as part of the Web Development Practicum - 2024.
