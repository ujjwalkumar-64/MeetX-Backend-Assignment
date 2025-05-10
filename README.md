# MeetX Backend Assignment

The **MeetX Backend Assignment** is a backend system designed to handle user authentication, activity management, and activity booking operations. It provides APIs for user registration, login, activity creation, and booking, with features like role-based access control, validation, and rate limiting.

---

## Features

- **User Authentication**: Secure JWT-based authentication for users.
- **Role-Based Access Control**: Admins can add and manage activities, while users can book activities.
- **Activity Management**: Admins can create, update, and delete activities.
- **Booking Management**: Users can book activities, with duplicate booking prevention.
- **Rate Limiting**: Prevents abuse through general and specific rate-limiting rules.
- **Error Handling**: Centralized error handling for consistent responses.

---

## Hosted Backend

The backend is hosted on [Render](https://render.com).

**Base URL**: [https://meetx-backend-assignment.onrender.com](https://meetx-backend-assignment.onrender.com)

---

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud-based)
- [Postman](https://www.postman.com/) (optional, for testing API endpoints)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ujjwalkumar-64/MeetX-Backend-Assignment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd MeetX-Backend-Assignment
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=<your-mongo-db-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```
5. Start the server:
   ```bash
   npm start
   ```
6. The API will be accessible at `http://localhost:5000`.

---

## API Documentation

The full API documentation is available as a Postman collection. You can view and import the collection from the following link:

[Postman Collection](https://documenter.getpostman.com/view/33354462/2sB2j999kN)

### Example Endpoints

Here are some key endpoints provided by the API:

#### User Authentication

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Log in and retrieve a JWT token.

#### Activities

- `POST /api/activities`: Add a new activity (Admin only).
- `GET /api/activities`: Get a list of all activities.

#### Bookings

- `POST /api/bookings`: Book an activity for the logged-in user.
- `GET /api/bookings`: Get all bookings for the logged-in user.

---

## Deployment on Render

The backend is deployed on Render for seamless hosting. The deployment includes:

- Automatic builds and deployments from the GitHub repository.
- Environment variable management for secure credentials.

---

## Project Structure

```plaintext
.
├── config/
│   └── db.js               # MongoDB connection
├── controllers/
│   ├── userController.js   # User authentication and management
│   ├── activityController.js # Activity CRUD operations
│   └── bookingController.js # Booking management
├── middlewares/
│   ├── authMiddleware.js   # Authentication and authorization
│   └── rateLimiter.js      # API rate limiting
├── models/
│   ├── User.js             # User schema
│   ├── Activity.js         # Activity schema
│   └── Booking.js          # Booking schema
├── routes/
│   ├── userRoutes.js       # User-related routes
│   ├── activityRoutes.js   # Activity-related routes
│   └── bookingRoutes.js    # Booking-related routes
├── .env                    # Environment variables
├── app.js                  # Application entry point
└── package.json            # Dependencies and scripts
```

---

## Rate Limiting

The API implements rate limiting to prevent abuse:

- **General API Rate**: Limits to 100 requests per 15 minutes per IP.
- **Login API Rate**: Limits to 5 login attempts per 10 minutes per IP.

---

## Error Handling

The API uses a centralized error-handling mechanism. Common error responses include:

- `400 Bad Request`: Invalid input or duplicate resource.
- `401 Unauthorized`: Missing or invalid authentication token.
- `403 Forbidden`: Access restricted to authorized users.
- `404 Not Found`: Resource not found.
- `500 Internal Server Error`: General server errors.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or support, please contact:

- **Name**: Ujjwal Kumar
- **GitHub**: [@ujjwalkumar-64](https://github.com/ujjwalkumar-64)
