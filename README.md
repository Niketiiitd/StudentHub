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
=======
## Installation and usage

1. Clone this repository

2. Install dependencies

```
npm install
cd client
npm install
```

3. Create .env in root directory

```
cd ..
touch .env
```

4. Configure environment variables in your new .env file. To acquire your MONGO_URI, create a cluster for free over at https://www.mongodb.com/. The TOKEN_KEY is a secret key of your choosing, you can generate one at this site: https://randomkeygen.com/.

```
MONGO_URI=<YOUR_MONGO_URI>
TOKEN_KEY=<YOUR_TOKEN_KEY>
PORT=4000
```

5. Run the server

```
npm run server
```

6. Start a new terminal and run react's development server

```
cd client
npm start
```


