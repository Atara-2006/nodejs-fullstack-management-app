# Art Whisper Boutique 🎨
**A Professional Art Gallery Management System**

Art Whisper Boutique is a robust, secure, and scalable web application designed for artists to manage their digital portfolios. Built using the **MVC architecture**, the system provides a seamless experience for showcasing, adding, and managing artworks.

---

## 🚀 Key Features
* **Secure Authentication:** User registration and login with `bcrypt` hashing and `JWT` token-based sessions.
* **Role-Based Access Control (RBAC):** Granular permissions for **Customers**, **Artists**, and **Admins**.
* **Artwork Management:** Complete CRUD operations for paintings, including metadata and image handling.
* **Media Handling:** Physical image uploads and automated storage management using `Multer`.
* **Data Integrity:** Centralized middleware for ID validation and record existence checks.
* **Clean Architecture:** Implementation of a global Error Handler for consistent API responses.

---

## 🛠️ Technology Stack
* **Backend:** Node.js & Express.js.
* **Database:** MongoDB via Mongoose ODM.
* **View Engine:** EJS (Embedded JavaScript) for dynamic rendering.
* **Security:** JSON Web Tokens (JWT) & Bcrypt.
* **File Uploads:** Multer.

---

## 📂 Project Structure
```text
├── controllers/    # Business logic (User & Painting)
├── models/         # Database schemas (Mongoose)
├── middleware/     # Auth, Validation, and Error Handling
├── routes/         # API & Page routing
├── views/          # EJS templates
├── public/         # Static assets & Uploaded images
└── app.js          # Main application entry point

