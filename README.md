# StudentHub 🎓

**A Community-Driven Social Media Platform for Students**

StudentHub is a specialized social media platform designed to connect students, foster collaboration, and build a vibrant community around project-based learning. Whether you're looking to showcase your latest project, find collaboration partners, or engage with fellow students through interactive content, StudentHub provides the perfect environment for academic and creative growth.

## 🚀 Features

### Core Social Features
- **📝 Project Posts**: Share detailed project updates with rich media support
- **🎬 Reels & Videos**: Create and share engaging short-form content to showcase your work
- **👥 User Profiles**: Comprehensive profiles with project portfolios and achievement tracking
- **❤️ Social Interactions**: Like, comment, and engage with community content
- **👤 Follow System**: Build your network by following other students and creators

### Collaboration & Communication
- **💬 Real-time Chat**: Instant messaging powered by Socket.io for seamless communication
- **🤝 Collaboration Requests**: Find and connect with project partners based on skills and interests
- **🔔 Live Notifications**: Stay updated with real-time notifications for interactions and messages
- **🎯 Project Discovery**: Advanced search and filtering to find relevant projects and collaborators

### User Experience
- **🔐 Secure Authentication**: JWT-based authentication with secure user sessions
- **📱 Responsive Design**: Optimized for both desktop and mobile devices
- **⚡ Real-time Updates**: Live feed updates and instant message delivery
- **🎨 Modern UI**: Clean, intuitive interface built with modern web technologies

## 🛠️ Tech Stack

### Frontend
- **React.js** - Component-based UI library for building interactive interfaces
- **Material-UI** - Modern React component library for consistent design
- **Socket.io Client** - Real-time communication on the client side
- **Axios** - HTTP client for API requests
- **React Router** - Client-side routing and navigation

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, unopinionated web framework for Node.js
- **Socket.io** - Real-time bidirectional event-based communication
- **JWT (JSON Web Tokens)** - Secure authentication and authorization
- **bcrypt** - Password hashing for security

### Database
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - MongoDB object modeling for Node.js

### Additional Tools
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing
- **Multer** - File upload handling

## 🚀 Deployment on Render

### Prerequisites
- [Render](https://render.com/) account
- Your project pushed to a GitHub repository

### Deployment Steps

1. **Log in to Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Sign in or create an account

2. **Create a New Web Service**
   - Click "New +" and select "Web Service"
   - Connect your GitHub repository
   - Select the repository with your StudentHub project

3. **Configure the Web Service**
   - **Name**: Choose a name for your service (e.g., studenthub)
   - **Environment**: Select "Node"
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   
4. **Set Environment Variables**
   - Scroll down to the "Environment" section
   - Add all required environment variables:
     ```
     NODE_ENV=production
     MONGO_URI=your_mongodb_connection_string
     TOKEN_KEY=your_jwt_secret_key
     ACCESS_TOKEN_SECRET=your_access_token_secret
     ACCESS_TOKEN_EXPIRY=2h
     ACCESS_REFRESH_TOKEN=your_refresh_token_secret
     REFRESH_TOKEN_EXPIRY=7d
     PORT=10000
     ```
     Note: Render automatically sets the PORT environment variable, but you can specify a custom one if needed.

5. **Deploy the Service**
   - Click "Create Web Service"
   - Wait for the build and deployment to complete

6. **Access Your Deployed Application**
   - Once deployment is successful, your app will be available at the URL provided by Render
   - The URL will be in the format: `https://your-service-name.onrender.com`

### Updating Your Deployed Application

When you push changes to your connected GitHub repository, Render will automatically rebuild and deploy your application. For manual deployments:

1. Go to your Web Service in the Render dashboard
2. Click "Manual Deploy" and select "Deploy latest commit"

## 📦 Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB Atlas account or local MongoDB installation
- Git

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/StudentHub.git
   cd StudentHub
   ```

2. **Install Backend Dependencies**
   ```bash
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```

   Configure your environment variables:
   ```env
   # Database Configuration
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/studenthub?retryWrites=true&w=majority
   
   # Authentication
   TOKEN_KEY=your_super_secret_jwt_key_here
   ACCESS_TOKEN_SECRET=your_access_token_secret
   ACCESS_TOKEN_EXPIRY=2h
   ACCESS_REFRESH_TOKEN=your_refresh_token_secret
   REFRESH_TOKEN_EXPIRY=7d
   
   # Server Configuration
   PORT=4000
   NODE_ENV=development
   ```

5. **Database Setup**
   
   Ensure your MongoDB connection is properly configured. If using MongoDB Atlas:
   - Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Whitelist your IP address
   - Create a database user
   - Replace the MONGO_URI in your `.env` file

6. **Start the Development Servers**

   **Backend Server:**
   ```bash
   npm run server
   # or
   npm start
   ```

   **Frontend Development Server (New Terminal):**
   ```bash
   cd client
   npm start
   ```

7. **Access the Application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:4000`
   - Socket.io: `ws://localhost:4000`

## 💡 Usage Guide

### Getting Started
1. **Sign Up**: Create your account with username, email, and password
2. **Complete Profile**: Add your bio, skills, and interests
3. **Explore**: Browse the feed to discover projects and connect with other students

### Creating Content
- **Post Projects**: Share your work with detailed descriptions, images, and videos
- **Create Reels**: Record or upload short videos to showcase quick demos or updates
- **Engage**: Like, comment, and share content from your network

### Collaboration
- **Find Partners**: Use search filters to find students with complementary skills
- **Send Requests**: Reach out to potential collaborators through the platform
- **Real-time Chat**: Communicate instantly with your connections

### Networking
- **Follow Users**: Build your network by following interesting creators
- **Get Followers**: Share quality content to attract followers
- **Stay Updated**: Receive notifications for interactions and new content

## 🏗️ Architecture Overview

### System Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Client  │    │  Express Server │    │   MongoDB       │
│                 │◄──►│                 │◄──►│   Database      │
│ - Components    │    │ - REST APIs     │    │ - User Data     │
│ - State Mgmt    │    │ - Authentication│    │ - Posts         │
│ - Socket.io     │    │ - Socket.io     │    │ - Messages      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Key Components

**Frontend Structure:**
- **Components**: Reusable UI components (Header, Post, UserCard, etc.)
- **Pages**: Main application views (Home, Profile, Chat, etc.)
- **Hooks**: Custom React hooks for state management and API calls
- **Utils**: Helper functions and Socket.io configuration


